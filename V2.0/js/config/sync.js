// js/config/sync.js — 前端数据同步层
// 文件双击模式：直接使用 localStorage，不依赖本地服务
// 服务端模式：通过 /api/user-data 与 user-data.json 同步

(function() {
  'use strict';

  var SYNC_INTERVAL = 60000; // 1 分钟
  var API_URL = '/api/user-data';
  var _dirty = false;
  var _syncing = false;
  var _timer = null;
  var IS_FILE_MODE = !!(window.APP_RUNTIME && window.APP_RUNTIME.isFileMode);

  // 把服务端数据写入内存
  function applyToMemory(data) {
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
    if (data.ui) {
      if (data.ui.sidebarWidth != null) safeSet(STORAGE_KEYS.SIDEBAR_WIDTH, data.ui.sidebarWidth);
    }
  }

  // 从当前存储收集全部数据
  function collectFromMemory() {
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
      ui: {
        sidebarWidth: safeGet(STORAGE_KEYS.SIDEBAR_WIDTH, null)
      },
      code: safeGet('py_user_code', {})
    };
  }

  function exposeLocalDataSync() {
    window.DataSync = {
      mode: 'localStorage',
      syncNow: function(callback) {
        if (callback) callback(null);
      },
      markDirty: function() {},
      saveToServer: function(callback) {
        if (callback) callback(null);
      },
      loadFromServer: function(callback) {
        if (callback) callback(null, collectFromMemory());
      },
      collectAll: collectFromMemory
    };
  }

  if (IS_FILE_MODE) {
    exposeLocalDataSync();
    return;
  }

  // 启动时同步加载服务端数据（阻塞式，确保后续模块能读到数据）
  function loadFromServerSync() {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', API_URL, false); // 同步请求
      xhr.send();
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        applyToMemory(data);
      }
    } catch (e) {
      console.warn('[Sync] 同步加载服务端数据失败:', e);
    }
  }

  // 从服务端异步加载数据到内存
  function loadFromServer(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', API_URL);
    xhr.onload = function() {
      if (xhr.status === 200) {
        try {
          var data = JSON.parse(xhr.responseText);
          applyToMemory(data);
          if (callback) callback(null, data);
        } catch (e) {
          if (callback) callback(e);
        }
      } else if (callback) {
        callback(new Error('http ' + xhr.status));
      }
    };
    xhr.onerror = function() { if (callback) callback(new Error('network')); };
    xhr.send();
  }

  // 保存到服务端
  function saveToServer(callback) {
    if (_syncing) return;
    _syncing = true;
    var data = collectFromMemory();
    var xhr = new XMLHttpRequest();
    xhr.open('POST', API_URL);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      _syncing = false;
      if (xhr.status >= 200 && xhr.status < 300) {
        _dirty = false;
        if (callback) callback(null);
      } else if (callback) {
        callback(new Error('http ' + xhr.status));
      }
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
      var data = collectFromMemory();
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

  // 启动时：同步加载服务端数据到内存，确保后续模块能立即读到
  loadFromServerSync();
  // 脏标记在加载时被设为 true（因为 applyToMemory 调用了被拦截的 safeSet），重置它
  _dirty = false;
  // 启动自动同步定时器
  startAutoSync();

  // 暴露到全局
  window.DataSync = {
    mode: 'server',
    syncNow: syncNow,
    markDirty: markDirty,
    saveToServer: saveToServer,
    loadFromServer: loadFromServer,
    collectAll: collectFromMemory
  };
})();
