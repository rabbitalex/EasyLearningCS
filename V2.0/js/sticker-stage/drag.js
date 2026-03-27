// ========== 拖拽处理 ==========
var dragData = null;

function onStickerDragStart(e) {
  dragData = { emoji: e.target.dataset.emoji, name: e.target.dataset.name };
  e.dataTransfer.effectAllowed = 'copy';
}

function bindEvents() {
  // 贴纸库标签切换
  document.querySelectorAll('.lib-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.lib-tab').forEach(function(t) { t.classList.remove('active'); });
      this.classList.add('active');
      renderStickerLibrary(this.dataset.cat);
    });
  });

  // 舞台拖拽放置
  var stageContainer = $('stageContainer');
  stageContainer.addEventListener('dragover', function(e) {
    e.preventDefault();
    this.classList.add('drag-over');
  });
  stageContainer.addEventListener('dragleave', function() {
    this.classList.remove('drag-over');
  });
  stageContainer.addEventListener('drop', function(e) {
    e.preventDefault();
    this.classList.remove('drag-over');
    if (!dragData) return;
    var rect = $('stageCanvas').getBoundingClientRect();
    var x = e.clientX - rect.left - 400; // 转换为舞台坐标（中心为0,0）
    var y = e.clientY - rect.top - 250;
    addStickerToStage(dragData.emoji, dragData.name, Math.round(x), Math.round(y));
    dragData = null;
  });

  // 点击舞台空白处取消选中（不收起右侧面板）
  stageContainer.addEventListener('click', function(e) {
    if (e.target === $('stageCanvas') || e.target === $('stageElements') || e.target === stageContainer) {
      if (stage.selected && stage.stickers[stage.selected]) {
        stage.stickers[stage.selected].el.classList.remove('selected');
      }
      stage.selected = null;
      $('propsTitle').textContent = '🎯 点击贴纸选中';
    }
  });

  // 鼠标移动显示坐标
  stageContainer.addEventListener('mousemove', function(e) {
    var rect = $('stageCanvas').getBoundingClientRect();
    var x = Math.round(e.clientX - rect.left - 400);
    var y = Math.round(e.clientY - rect.top - 250);
    $('coordHint').textContent = 'x: ' + x + ', y: ' + y;
  });

  // 代码编辑器
  $('codeEditor').addEventListener('input', updateLineNums);
  $('codeEditor').addEventListener('scroll', function() {
    $('lineNums').scrollTop = this.scrollTop;
  });
  $('codeEditor').addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      var s = this.selectionStart;
      this.value = this.value.substring(0, s) + '    ' + this.value.substring(this.selectionEnd);
      this.selectionStart = this.selectionEnd = s + 4;
      updateLineNums();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      runCode();
    }
  });

  // 运行/停止
  $('runBtn').addEventListener('click', runCode);
  $('stopBtn').addEventListener('click', stopCode);
  $('resetBtn').addEventListener('click', setDefaultCode);

  // 清空控制台（由HTML中的Tab切换脚本处理，这里绑定刷新变量按钮）
  $('refreshVars') && $('refreshVars').addEventListener('click', function() {
    // 手动刷新变量跟踪（重新显示当前stage变量）
    updateVarsPanel({});
  });

  // 清空舞台
  $('toolClear').addEventListener('click', function() {
    if (confirm('确定清空舞台上的所有贴纸吗？')) {
      clearStage();
    }
  });

  // 帮助
  $('helpBtn').addEventListener('click', function() {
    $('helpModal').style.display = 'flex';
  });
  $('helpModal').addEventListener('click', function(e) {
    if (e.target === this) this.style.display = 'none';
  });

  // 全屏
  $('fullscreenBtn').addEventListener('click', function() {
    var el = $('stageContainer');
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      el.requestFullscreen && el.requestFullscreen();
    }
  });

  // 属性面板
  ['propX', 'propY', 'propSize', 'propRotation', 'propOpacity'].forEach(function(id) {
    $(id).addEventListener('change', applyPropsToSelected);
  });
  $('propName').addEventListener('change', renameSelected);
  $('propsDelete').addEventListener('click', deleteSelected);
}

