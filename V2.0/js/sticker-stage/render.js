// ========== 初始化 ==========
function init() {
  renderStickerLibrary('animals');
  renderExamples();
  bindEvents();
  updateLineNums();
  setDefaultCode();
  log('🎭 贴纸舞台已就绪！从左侧拖拽贴纸到舞台，然后用代码控制它！', 'info');
}

// ========== 渲染贴纸库 ==========
function renderStickerLibrary(cat) {
  var grid = $('stickerGrid');
  var items = STICKER_CATS[cat] || [];
  grid.innerHTML = items.map(function(s) {
    return '<div class="sticker-item" draggable="true" data-emoji="' + s.emoji + '" data-name="' + s.name + '" title="' + s.label + ' (' + s.name + ')">' +
      s.emoji +
      '</div>';
  }).join('');

  // 绑定拖拽
  grid.querySelectorAll('.sticker-item').forEach(function(el) {
    el.addEventListener('dragstart', onStickerDragStart);
    el.addEventListener('click', function() {
      // 点击直接添加到舞台中心
      addStickerToStage(el.dataset.emoji, el.dataset.name, 0, 0);
    });
  });
}

// ========== 渲染示例代码 ==========
function renderExamples() {
  var list = $('examplesList');
  list.innerHTML = EXAMPLES.map(function(ex, i) {
    return '<button class="example-btn" data-idx="' + i + '">' + ex.label + '</button>';
  }).join('');
  list.querySelectorAll('.example-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      $('codeEditor').value = EXAMPLES[parseInt(this.dataset.idx)].code;
      updateLineNums();
    });
  });
}

// ========== 默认代码 ==========
function setDefaultCode() {
  $('codeEditor').value = '# 🎭 欢迎来到贴纸舞台！\n# 1. 先从左侧贴纸库点击或拖拽一个贴纸到舞台\n# 2. 在属性面板给它起个名字（比如 cat）\n# 3. 然后用代码控制它！\n\n# 示例：让贴纸移动\nmove(cat, 0, 0)\nwait(0.5)\nmove(cat, 100, 50)\nwait(0.5)\nsay(cat, "Hello! 🎉")\nwait(1)\nsay(cat, "")';
}

