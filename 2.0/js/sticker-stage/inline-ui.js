// ========== 左右分栏拖动 ==========
(function() {
  var resizer = document.getElementById('panelResizer');
  var leftPanel = document.getElementById('leftPanel');
  var rightPanel = document.getElementById('rightPanel');
  var layout = document.getElementById('appLayout');
  var isDragging = false;

  resizer.addEventListener('mousedown', function(e) {
    isDragging = true;
    resizer.classList.add('dragging');
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    e.preventDefault();
  });

  document.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    var layoutRect = layout.getBoundingClientRect();
    var resizerW = resizer.offsetWidth;
    var totalW = layoutRect.width - resizerW;
    var leftW = e.clientX - layoutRect.left;
    leftW = Math.max(300, Math.min(totalW - 320, leftW));
    var rightW = totalW - leftW;
    leftPanel.style.width = leftW + 'px';
    leftPanel.style.flex = 'none';
    rightPanel.style.width = rightW + 'px';
    rightPanel.style.flex = 'none';
  });

  document.addEventListener('mouseup', function() {
    if (!isDragging) return;
    isDragging = false;
    resizer.classList.remove('dragging');
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  });
})();

// ========== 输出区高度拖动 ==========
(function() {
  var resizer = document.getElementById('outputResizer');
  var outputSection = document.getElementById('outputSection');
  var editorSection = document.getElementById('editorSection');
  var isDragging = false;
  var startY, startOutputH;

  resizer.addEventListener('mousedown', function(e) {
    isDragging = true;
    startY = e.clientY;
    startOutputH = outputSection.offsetHeight;
    resizer.classList.add('dragging');
    document.body.style.cursor = 'ns-resize';
    document.body.style.userSelect = 'none';
    e.preventDefault();
    e.stopPropagation();
  });

  document.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    var dy = startY - e.clientY;
    var rightPanel = document.getElementById('rightPanel');
    var maxH = rightPanel.offsetHeight - 200;
    var newH = Math.max(100, Math.min(maxH, startOutputH + dy));
    outputSection.style.height = newH + 'px';
    outputSection.style.flex = 'none';
  });

  document.addEventListener('mouseup', function() {
    if (!isDragging) return;
    isDragging = false;
    resizer.classList.remove('dragging');
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  });
})();

// ========== 输出区 Tab 切换 ==========
(function() {
  document.querySelectorAll('.output-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      var target = this.dataset.tab;
      document.querySelectorAll('.output-tab').forEach(function(t) { t.classList.remove('active'); });
      document.querySelectorAll('.output-pane').forEach(function(p) { p.classList.remove('active'); });
      this.classList.add('active');
      document.getElementById(target + 'Pane').classList.add('active');
      var badge = document.getElementById(target + 'Badge');
      if (badge) badge.style.display = 'none';
    });
  });

  document.getElementById('clearOutput').addEventListener('click', function() {
    var activePane = document.querySelector('.output-pane.active');
    if (activePane && activePane.id === 'consolePane') {
      document.getElementById('consoleOutput').innerHTML = '';
    } else if (activePane && activePane.id === 'varsPane') {
      document.getElementById('varsTable').innerHTML = '<div class="vars-empty"><i class="fas fa-eye-slash"></i><p>暂无变量</p><p class="vars-empty-sub">运行代码后，变量会自动显示在这里</p></div>';
    }
  });
})();
