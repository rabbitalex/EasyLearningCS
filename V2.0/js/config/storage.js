'use strict';

var APP_RUNTIME = window.APP_RUNTIME || {};
APP_RUNTIME.isFileMode = window.location.protocol === 'file:';
APP_RUNTIME.hasLocalStorage = (function() {
  try {
    var testKey = '__easy_learning_cs_storage_test__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
})();
APP_RUNTIME.storageMode = (APP_RUNTIME.isFileMode && APP_RUNTIME.hasLocalStorage) ? 'localStorage' : 'memory';
window.APP_RUNTIME = APP_RUNTIME;

// ========== 存储键名常量 ==========
var STORAGE_KEYS = {
  // 用户基础数据
  USER_PROFILE: 'py_user_profile',      // 用户档案（昵称、注册时间等）

  // 学习进度
  COMPLETED_LESSONS: 'py_completed',    // 已完成的课程ID列表
  LESSON_PROGRESS: 'py_lesson_progress', // 各课程学习进度详情
  CURRENT_LESSON: 'py_current_lesson',  // 当前学习的课程
  CURRENT_STEP: 'py_current_step',      // 当前课程步骤

  // 挑战系统
  CHALLENGE_PROGRESS: 'py_challenges',  // 挑战完成状态
  CHALLENGE_ATTEMPTS: 'py_chall_attempts', // 挑战尝试记录

  // 活动统计
  CODE_RUN_COUNT: 'py_code_runs',       // 代码运行次数
  LEARN_TIME: 'py_learn_time',          // 学习时长统计（分钟）
  LOGIN_STREAK: 'py_login_streak',      // 连续登录天数
  LAST_LOGIN: 'py_last_login',          // 最后登录日期

  // 探索记录
  VISITED_PAGES: 'py_visited_pages',    // 访问过的页面
  UNLOCKED_CONTENT: 'py_unlocked',      // 已解锁的隐藏内容

  // 设置偏好
  SETTINGS: 'py_settings',              // 用户设置
  SIDEBAR_WIDTH: 'py_sidebar_width'     // 侧边栏宽度
};

// ========== 默认配置数据 ==========
var DEFAULTS = {
  userProfile: {
    nickname: 'Python学徒',
    avatar: '🧒',
    gender: 'unknown',
    joinDate: new Date().toISOString(),
    theme: 'magic'
  },
  settings: {
    autoSave: true,
    soundEffects: true,
    animations: true,
    showHints: true,
    difficulty: 'normal'
  },
  codeRuns: 0,
  learnTime: 0,
  loginStreak: 0,
  visitedPages: []
};

// ========== 存储实现 ==========
// 文件双击模式：直接写 localStorage，做到零配置可持久化
// 服务端模式：先写内存，再由 sync.js 同步到 user-data.json
var memoryStorage = {};

function getActiveStorage() {
  if (APP_RUNTIME.storageMode === 'localStorage') {
    return window.localStorage;
  }
  return null;
}

function safeSet(key, value) {
  try {
    var json = JSON.stringify(value);
    var storage = getActiveStorage();
    if (storage) {
      storage.setItem(key, json);
    } else {
      memoryStorage[key] = json;
    }
    return true;
  } catch (e) {
    return false;
  }
}

function safeGet(key, defaultValue) {
  try {
    var storage = getActiveStorage();
    var json = storage ? storage.getItem(key) : memoryStorage[key];
    if (json === undefined || json === null) return defaultValue;
    return JSON.parse(json);
  } catch (e) {
    return defaultValue;
  }
}

function safeRemove(key) {
  var storage = getActiveStorage();
  if (storage) {
    try { storage.removeItem(key); } catch (e) {}
    return;
  }
  delete memoryStorage[key];
}
