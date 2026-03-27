'use strict';

// ===== 使用 Config 管理器（config.js 提供的数据持久化层）=====

// ===== 状态管理（通过 Config 管理器持久化）=====
var state = {
  currentLesson: null,
  currentStep: 0,
  completedLessons: Config.getCompletedLessons(),
  completedChallenges: Config.getChallengeProgress(),
  streak: Config.getLoginStreak(),
  runCount: Config.getCodeRunCount(),
  theme: Config.getSettings().theme !== 'magic' ? 'dark' : Config.getSettings().theme,
  currentPage: 'home',
  skulptReady: false,
  isRunning: false,
  stepLines: [],
  stepIndex: 0,
  variables: {},
  stepExecuting: false,
  visitedPages: Config.getVisitedPages()
};

// ===== DOM =====
var $ = function(id) { return document.getElementById(id); };
var $$ = function(sel) { return document.querySelectorAll(sel); };

