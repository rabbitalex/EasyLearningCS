'use strict';

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

// ========== 纯内存存储（不使用 localStorage） ==========
// 所有数据在内存中操作，通过 sync.js 与服务端 user-data.json 同步
var memoryStorage = {};

function safeSet(key, value) {
  try {
    memoryStorage[key] = JSON.stringify(value);
    return true;
  } catch (e) {
    return false;
  }
}

function safeGet(key, defaultValue) {
  try {
    var json = memoryStorage[key];
    if (json === undefined || json === null) return defaultValue;
    return JSON.parse(json);
  } catch (e) {
    return defaultValue;
  }
}

function safeRemove(key) {
  delete memoryStorage[key];
}

