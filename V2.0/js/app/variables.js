// ===== 侧边栏宽度拖拽调整 =====
function initSidebarResize() {
  var handle = $('sidebarResizeHandle');
  var sidebar = $('sidebar');
  if (!handle || !sidebar) return;

  // 恢复保存的宽度
  var savedWidth = safeGet(STORAGE_KEYS.SIDEBAR_WIDTH, null);
  if (savedWidth) {
    var w = parseInt(savedWidth);
    if (w >= 200 && w <= 500) {
      document.documentElement.style.setProperty('--sidebar-width', w + 'px');
    }
  }

  handle.addEventListener('mousedown', function(e) {
    e.preventDefault();
    handle.classList.add('dragging');
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    function onMove(ev) {
      var newWidth = Math.max(200, Math.min(500, ev.clientX));
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
      var newWidth = Math.max(200, Math.min(500, t.clientX));
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

