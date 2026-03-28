// js/courses/registry.js — 课程自注册系统
// 在所有课程脚本之前加载

window.COURSE_REGISTRY = {
  theory: [],
  python: [],
  dsa: [],
  cpp: [],
  microbit: [],
  ai: []
};

window.VOLUME_META = {
  theory:   { groupName: '卷一 · 理论', groupIcon: '🧠', groupColor: '#fd79a8' },
  python:   { groupName: '卷二 · Python', groupIcon: '🐍', groupColor: '#00cec9' },
  dsa:      { groupName: '卷三 · 数据结构与算法', groupIcon: '🏗️', groupColor: '#FF9800' },
  cpp:      { groupName: '卷四 · C++<未完成>', groupIcon: '⚡', groupColor: '#0984e3' },
  microbit: { groupName: '卷五 · 硬件基础-Microbit<未完成>', groupIcon: '🔌', groupColor: '#8b949e' },
  ai:       { groupName: '卷六 · AI基础', groupIcon: '🤖', groupColor: '#8b949e' }
};

window.registerChapter = function(volumeKey, chapterData) {
  if (!COURSE_REGISTRY[volumeKey]) {
    COURSE_REGISTRY[volumeKey] = [];
  }
  COURSE_REGISTRY[volumeKey].push(chapterData);
};
