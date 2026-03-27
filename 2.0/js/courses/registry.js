// js/courses/registry.js — 课程自注册系统
// 在所有课程脚本之前加载

window.COURSE_REGISTRY = {
  theory: [],
  python: [],
  dsa: [],
  cpp: []
};

window.VOLUME_META = {
  theory: { groupName: '卷一 · 理论', groupIcon: '🧠', groupColor: '#6c5ce7' },
  python: { groupName: '卷二 · Python', groupIcon: '🐍', groupColor: '#00cec9' },
  dsa:    { groupName: '卷三 · 数据结构与算法', groupIcon: '🏗️', groupColor: '#FF9800' },
  cpp:    { groupName: '卷四 · C++', groupIcon: '⚡', groupColor: '#0984e3' }
};

window.registerChapter = function(volumeKey, chapterData) {
  if (!COURSE_REGISTRY[volumeKey]) {
    COURSE_REGISTRY[volumeKey] = [];
  }
  COURSE_REGISTRY[volumeKey].push(chapterData);
};
