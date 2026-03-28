// ===== 侧边栏宽度拖拽调整 =====
function initSidebarResize() {
  var handle = $('sidebarResizeHandle');
  var sidebar = $('sidebar');
  var SIDEBAR_MIN_WIDTH = 380;
  var SIDEBAR_MAX_WIDTH = 500;
  if (!handle || !sidebar) return;

  // 恢复保存的宽度
  var savedWidth = safeGet(STORAGE_KEYS.SIDEBAR_WIDTH, null);
  if (savedWidth) {
    var w = parseInt(savedWidth, 10);
    if (!isNaN(w)) {
      w = Math.max(SIDEBAR_MIN_WIDTH, Math.min(SIDEBAR_MAX_WIDTH, w));
      document.documentElement.style.setProperty('--sidebar-width', w + 'px');
    }
  }

  handle.addEventListener('mousedown', function(e) {
    e.preventDefault();
    handle.classList.add('dragging');
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    function onMove(ev) {
      var newWidth = Math.max(SIDEBAR_MIN_WIDTH, Math.min(SIDEBAR_MAX_WIDTH, ev.clientX));
      document.documentElement.style.setProperty('--sidebar-width', newWidth + 'px');
      handle.style.left = newWidth + 'px';
    }

    function onUp() {
      handle.classList.remove('dragging');
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      var finalWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sidebar-width'));
      safeSet(STORAGE_KEYS.SIDEBAR_WIDTH, finalWidth);
      handle.style.left = '';
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  });

  // 触摸屏支持
  handle.addEventListener('touchstart', function(e) {
    e.preventDefault();
    handle.classList.add('dragging');
    var touch = e.touches[0];

    function onTouchMove(ev) {
      var t = ev.touches[0];
      var newWidth = Math.max(SIDEBAR_MIN_WIDTH, Math.min(SIDEBAR_MAX_WIDTH, t.clientX));
      document.documentElement.style.setProperty('--sidebar-width', newWidth + 'px');
    }

    function onTouchEnd() {
      handle.classList.remove('dragging');
      var finalWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sidebar-width'));
      safeSet(STORAGE_KEYS.SIDEBAR_WIDTH, finalWidth);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    }

    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);
  });
}

