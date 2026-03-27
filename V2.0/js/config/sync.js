// js/config/sync.js — 前端数据同步层
// 把 localStorage 数据自动同步到服务端 user-data.json
// 课程完成时立即同步，代码修改后每 1 分钟自动同步

(function() {
  'use strict';

  var SYNC_INTERVAL = 60000; // 1 分钟
  var API_URL = '/api/user-data';
  var _dirty = false;
  var _syncing = false;
  var _timer = null;

  // 从服务端加载数据到 localStorage
  function loadFromServer(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', API_URL);
    xhr.onload = function() {
      if (xhr.status === 200) {
        try {
          var data = JSON.parse(xhr.responseText);
          applyToLocalStorage(data);
          if (callback) callback(null, data);
        } catch (e) {
          if (callback) callback(e);
        }
      }
    };
    xhr.onerror = function() { if (callback) callback(new Error('network')); };
    xhr.send();
  }

  // 把服务端数据写入 localStorage
  function applyToLocalStorage(data) {
    if (data.progress) {
      if (data.progress.completedLessons) safeSet(STORAGE_KEYS.COMPLETED_LESSONS, data.progress.completedLessons);
      if (data.progress.lessonProgress) safeSet(STORAGE_KEYS.LESSON_PROGRESS, data.progress.lessonProgress);
      if (data.progress.currentLesson) safeSet(STORAGE_KEYS.CURRENT_LESSON, data.progress.currentLesson);
      if (data.progress.currentStep != null) safeSet(STORAGE_KEYS.CURRENT_STEP, data.progress.currentStep);
    }
    if (data.challenges) safeSet(STORAGE_KEYS.CHALLENGE_PROGRESS, data.challenges);
    if (data.stats) {
      if (data.stats.codeRuns != null) safeSet(STORAGE_KEYS.CODE_RUN_COUNT, data.stats.codeRuns);
      if (data.stats.learnTimeMinutes != null) safeSet(STORAGE_KEYS.LEARN_TIME, data.stats.learnTimeMinutes);
      if (data.stats.loginStreak != null) safeSet(STORAGE_KEYS.LOGIN_STREAK, data.stats.loginStreak);
      if (data.stats.lastLogin) safeSet(STORAGE_KEYS.LAST_LOGIN, data.stats.lastLogin);
      if (data.stats.visitedPages) safeSet(STORAGE_KEYS.VISITED_PAGES, data.stats.visitedPages);
    }
    if (data.profile) safeSet(STORAGE_KEYS.USER_PROFILE, data.profile);
    if (data.settings) safeSet(STORAGE_KEYS.SETTINGS, data.settings);
  }

  // 从 localStorage 收集全部数据
  function collectFromLocalStorage() {
    return {
      version: 1,
      lastSavedAt: new Date().toISOString(),
      profile: safeGet(STORAGE_KEYS.USER_PROFILE, DEFAULTS.userProfile),
      settings: safeGet(STORAGE_KEYS.SETTINGS, DEFAULTS.settings),
      progress: {
        completedLessons: safeGet(STORAGE_KEYS.COMPLETED_LESSONS, []),
        lessonProgress: safeGet(STORAGE_KEYS.LESSON_PROGRESS, {}),
        currentLesson: safeGet(STORAGE_KEYS.CURRENT_LESSON, null),
        currentStep: safeGet(STORAGE_KEYS.CURRENT_STEP, 0)
      },
      challenges: safeGet(STORAGE_KEYS.CHALLENGE_PROGRESS, {}),
      stats: {
        codeRuns: safeGet(STORAGE_KEYS.CODE_RUN_COUNT, 0),
        learnTimeMinutes: safeGet(STORAGE_KEYS.LEARN_TIME, 0),
        loginStreak: safeGet(STORAGE_KEYS.LOGIN_STREAK, 0),
        lastLogin: safeGet(STORAGE_KEYS.LAST_LOGIN, null),
        visitedPages: safeGet(STORAGE_KEYS.VISITED_PAGES, [])
      },
      code: safeGet('py_user_code', {})
    };
  }

  // 保存到服务端
  function saveToServer(callback) {
    if (_syncing) return;
    _syncing = true;
    var data = collectFromLocalStorage();
    var xhr = new XMLHttpRequest();
    xhr.open('POST', API_URL);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      _syncing = false;
      _dirty = false;
      if (callback) callback(null);
    };
    xhr.onerror = function() {
      _syncing = false;
      if (callback) callback(new Error('network'));
    };
    xhr.send(JSON.stringify(data));
  }

  // 标记脏数据，等待定时同步
  function markDirty() {
    _dirty = true;
  }

  // 立即同步（课程完成等关键时刻调用）
  function syncNow(callback) {
    saveToServer(callback);
  }

  // 定时同步（每 1 分钟检查一次脏标记）
  function startAutoSync() {
    if (_timer) return;
    _timer = setInterval(function() {
      if (_dirty && !_syncing) {
        saveToServer();
      }
    }, SYNC_INTERVAL);
  }

  // 页面关闭前尝试同步
  window.addEventListener('beforeunload', function() {
    if (_dirty) {
      var data = collectFromLocalStorage();
      var blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
      navigator.sendBeacon(API_URL, blob);
    }
  });

  // 拦截 safeSet，自动标记脏
  var _origSafeSet = safeSet;
  safeSet = function(key, value) {
    var result = _origSafeSet(key, value);
    markDirty();
    return result;
  };

  // 启动时：从服务端加载 → 合并到 localStorage → 开始自动同步
  loadFromServer(function(err) {
    if (!err) { /* 服务端数据已合并 */ }
    startAutoSync();
  });

  // 暴露到全局
  window.DataSync = {
    syncNow: syncNow,
    markDirty: markDirty,
    saveToServer: saveToServer,
    loadFromServer: loadFromServer,
    collectAll: collectFromLocalStorage
  };
})();
