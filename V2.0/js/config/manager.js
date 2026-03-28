// ========== 配置管理器核心 ==========
var ConfigManager = {
  // 存储键常量
  KEYS: STORAGE_KEYS,

  // ===== 基础数据操作 =====
  
  /**
   * 获取用户档案
   */
  getProfile: function() {
    return safeGet(STORAGE_KEYS.USER_PROFILE, DEFAULTS.userProfile);
  },

  /**
   * 更新用户档案
   */
  updateProfile: function(updates) {
    var profile = this.getProfile();
    Object.assign(profile, updates);
    safeSet(STORAGE_KEYS.USER_PROFILE, profile);
    return profile;
  },

  // ===== 学习进度管理 =====

  /**
   * 获取所有已完成课程
   */
  getCompletedLessons: function() {
    return safeGet(STORAGE_KEYS.COMPLETED_LESSONS, []);
  },

  /**
   * 标记课程为已完成
   */
  completeLesson: function(lessonId, chapterId) {
    var completed = this.getCompletedLessons();
    if (completed.indexOf(lessonId) === -1) {
      completed.push(lessonId);
      safeSet(STORAGE_KEYS.COMPLETED_LESSONS, completed);
      
      // 记录完成时间和章节信息
      this.recordLessonProgress(lessonId, chapterId, 'completed');
    }
    return completed;
  },

  /**
   * 检查课程是否已完成
   */
  isLessonCompleted: function(lessonId) {
    return this.getCompletedLessons().indexOf(lessonId) !== -1;
  },

  /**
   * 获取课程进度详情
   */
  getLessonProgress: function() {
    return safeGet(STORAGE_KEYS.LESSON_PROGRESS, {});
  },

  /**
   * 记录课程学习进度
   */
  recordLessonProgress: function(lessonId, chapterId, status) {
    var progress = this.getLessonProgress();
    progress[lessonId] = {
      chapterId: chapterId,
      status: status,
      lastStudy: new Date().toISOString(),
      studyCount: (progress[lessonId] && progress[lessonId].studyCount || 0) + 1
    };
    safeSet(STORAGE_KEYS.LESSON_PROGRESS, progress);
    return progress;
  },

  /**
   * 保存当前学习位置
   */
  saveCurrentPosition: function(lessonId, stepIndex) {
    safeSet(STORAGE_KEYS.CURRENT_LESSON, lessonId);
    safeSet(STORAGE_KEYS.CURRENT_STEP, stepIndex);
  },

  /**
   * 获取当前学习位置
   */
  getCurrentPosition: function() {
    return {
      lessonId: safeGet(STORAGE_KEYS.CURRENT_LESSON, null),
      stepIndex: safeGet(STORAGE_KEYS.CURRENT_STEP, 0)
    };
  },

  // ===== 挑战系统 =====

  /**
   * 获取挑战进度
   */
  getChallengeProgress: function() {
    return safeGet(STORAGE_KEYS.CHALLENGE_PROGRESS, {});
  },

  /**
   * 标记挑战完成
   */
  completeChallenge: function(challengeId, score) {
    var progress = this.getChallengeProgress();
    var isNew = !progress[challengeId];
    
    progress[challengeId] = {
      completed: true,
      score: score,
      completedAt: new Date().toISOString(),
      attempts: (progress[challengeId] && progress[challengeId].attempts || 0) + 1
    };
    
    safeSet(STORAGE_KEYS.CHALLENGE_PROGRESS, progress);
    return isNew;
  },

  /**
   * 记录挑战尝试
   */
  logChallengeAttempt: function(challengeId, success) {
    var progress = this.getChallengeProgress();
    if (!progress[challengeId]) {
      progress[challengeId] = { attempts: 0, completed: false };
    }
    progress[challengeId].attempts = (progress[challengeId].attempts || 0) + 1;
    safeSet(STORAGE_KEYS.CHALLENGE_PROGRESS, progress);
  },

  /**
   * 获取已完成的挑战数量
   */
  getCompletedChallengeCount: function() {
    var progress = this.getChallengeProgress();
    var count = 0;
    for (var id in progress) {
      if (progress[id].completed) count++;
    }
    return count;
  },

  // ===== 活动统计 =====

  /**
   * 记录代码运行
   */
  logCodeRun: function() {
    var count = safeGet(STORAGE_KEYS.CODE_RUN_COUNT, 0) + 1;
    safeSet(STORAGE_KEYS.CODE_RUN_COUNT, count);
    return count;
  },

  /**
   * 获取代码运行次数
   */
  getCodeRunCount: function() {
    return safeGet(STORAGE_KEYS.CODE_RUN_COUNT, 0);
  },

  /**
   * 增加学习时长
   */
  addLearnTime: function(minutes) {
    var total = safeGet(STORAGE_KEYS.LEARN_TIME, 0) + minutes;
    safeSet(STORAGE_KEYS.LEARN_TIME, total);
    return total;
  },

  /**
   * 获取总学习时长
   */
  getLearnTime: function() {
    return safeGet(STORAGE_KEYS.LEARN_TIME, 0);
  },

  /**
   * 更新连续登录
   */
  updateLoginStreak: function() {
    var lastLogin = safeGet(STORAGE_KEYS.LAST_LOGIN, null);
    var streak = safeGet(STORAGE_KEYS.LOGIN_STREAK, 0);
    var today = new Date().toDateString();
    
    if (lastLogin === today) {
      return streak; // 今天已经登录过
    }
    
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (lastLogin === yesterday.toDateString()) {
      streak++; // 连续登录
    } else {
      streak = 1; // 重新开始
    }
    
    safeSet(STORAGE_KEYS.LOGIN_STREAK, streak);
    safeSet(STORAGE_KEYS.LAST_LOGIN, today);
    return streak;
  },

  /**
   * 获取连续登录天数
   */
  getLoginStreak: function() {
    return safeGet(STORAGE_KEYS.LOGIN_STREAK, 0);
  },

  // ===== 页面访问记录 =====

  /**
   * 记录页面访问
   */
  logPageVisit: function(pageId) {
    var visited = safeGet(STORAGE_KEYS.VISITED_PAGES, []);
    if (visited.indexOf(pageId) === -1) {
      visited.push(pageId);
      safeSet(STORAGE_KEYS.VISITED_PAGES, visited);
    }
    return visited;
  },

  /**
   * 检查是否访问过某页面
   */
  hasVisitedPage: function(pageId) {
    return safeGet(STORAGE_KEYS.VISITED_PAGES, []).indexOf(pageId) !== -1;
  },

  /**
   * 获取所有访问过的页面
   */
  getVisitedPages: function() {
    return safeGet(STORAGE_KEYS.VISITED_PAGES, []);
  },

  // ===== 设置管理 =====

  /**
   * 获取设置
   */
  getSettings: function() {
    return safeGet(STORAGE_KEYS.SETTINGS, DEFAULTS.settings);
  },

  /**
   * 更新设置
   */
  updateSettings: function(updates) {
    var settings = this.getSettings();
    Object.assign(settings, updates);
    safeSet(STORAGE_KEYS.SETTINGS, settings);
    return settings;
  },

  // ===== 数据导出/导入 =====

  /**
   * 导出所有数据
   */
  exportData: function() {
    return {
      profile: this.getProfile(),
      completedLessons: this.getCompletedLessons(),
      lessonProgress: this.getLessonProgress(),
      challenges: this.getChallengeProgress(),
      codeRuns: this.getCodeRunCount(),
      learnTime: this.getLearnTime(),
      loginStreak: this.getLoginStreak(),
      visitedPages: this.getVisitedPages(),
      settings: this.getSettings(),
      sidebarWidth: safeGet(STORAGE_KEYS.SIDEBAR_WIDTH, null),
      exportTime: new Date().toISOString()
    };
  },

  /**
   * 导入数据
   */
  importData: function(data) {
    if (data.profile) safeSet(STORAGE_KEYS.USER_PROFILE, data.profile);
    if (data.completedLessons) safeSet(STORAGE_KEYS.COMPLETED_LESSONS, data.completedLessons);
    if (data.lessonProgress) safeSet(STORAGE_KEYS.LESSON_PROGRESS, data.lessonProgress);
    if (data.challenges) safeSet(STORAGE_KEYS.CHALLENGE_PROGRESS, data.challenges);
    if (data.codeRuns) safeSet(STORAGE_KEYS.CODE_RUN_COUNT, data.codeRuns);
    if (data.learnTime) safeSet(STORAGE_KEYS.LEARN_TIME, data.learnTime);
    if (data.loginStreak) safeSet(STORAGE_KEYS.LOGIN_STREAK, data.loginStreak);
    if (data.visitedPages) safeSet(STORAGE_KEYS.VISITED_PAGES, data.visitedPages);
    if (data.settings) safeSet(STORAGE_KEYS.SETTINGS, data.settings);
    if (data.sidebarWidth != null) safeSet(STORAGE_KEYS.SIDEBAR_WIDTH, data.sidebarWidth);
    return true;
  },

  /**
   * 重置所有数据
   */
  resetAll: function() {
    for (var key in STORAGE_KEYS) {
      safeRemove(STORAGE_KEYS[key]);
    }
    memoryStorage = {};
    return true;
  },

  /**
   * 获取完整统计数据
   */
  getStats: function() {
    return {
      completedLessons: this.getCompletedLessons().length,
      totalLessons: 15,
      challengesCompleted: this.getCompletedChallengeCount(),
      codeRuns: this.getCodeRunCount(),
      learnTime: this.getLearnTime(),
      loginStreak: this.getLoginStreak(),
      currentPosition: this.getCurrentPosition()
    };
  }
};

// ========== 暴露到全局 ==========
window.Config = ConfigManager;
window.STORAGE_KEYS = STORAGE_KEYS;

// 初始化：更新登录统计
document.addEventListener('DOMContentLoaded', function() {
  ConfigManager.updateLoginStreak();
});
