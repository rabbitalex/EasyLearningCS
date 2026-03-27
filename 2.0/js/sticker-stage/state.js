// ========== 舞台状态 ==========
var stage = {
  stickers: {},      // { name: { el, emoji, x, y, size, rotation, opacity, visible } }
  selected: null,    // 当前选中的贴纸名称
  running: false,    // 是否正在运行代码
  stopFlag: false,   // 停止标志
  counter: 0,        // 贴纸计数器（用于自动命名）
  pendingAnimations: [] // 待执行的动画队列
};

// ========== DOM 引用 ==========
var $ = function(id) { return document.getElementById(id); };

