// ========== 添加贴纸到舞台 ==========
function addStickerToStage(emoji, baseName, x, y) {
  // 生成唯一名称
  var name = baseName;
  var count = 1;
  while (stage.stickers[name]) {
    name = baseName + count;
    count++;
  }

  var el = document.createElement('div');
  el.className = 'stage-sticker';
  el.dataset.name = name;
  el.innerHTML = '<span class="sticker-emoji">' + emoji + '</span>';

  var size = 60;
  // 容器比emoji大20%，确保emoji完整显示不被裁剪
  var containerSize = Math.round(size * 1.4);
  el.style.fontSize = size + 'px';
  el.style.width = containerSize + 'px';
  el.style.height = containerSize + 'px';
  el.style.left = (x + 400 - containerSize / 2) + 'px';
  el.style.top = (y + 250 - containerSize / 2) + 'px';

  $('stageElements').appendChild(el);

  stage.stickers[name] = {
    el: el,
    emoji: emoji,
    x: x,
    y: y,
    size: size,
    rotation: 0,
    opacity: 100,
    visible: true,
    bubble: null
  };

  // 点击选中
  el.addEventListener('click', function(e) {
    e.stopPropagation();
    selectSticker(name);
  });

  // 拖拽移动
  makeDraggable(el, name);

  selectSticker(name);
  log('✅ 添加贴纸 <b>' + name + '</b> ' + emoji + ' 到舞台 (' + x + ', ' + y + ')', 'success');
  return name;
}

// ========== 让贴纸可拖拽 ==========
function makeDraggable(el, name) {
  var isDragging = false;
  var startX, startY, startElX, startElY;

  el.addEventListener('mousedown', function(e) {
    if (stage.running) return;
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    var s = stage.stickers[name];
    startElX = s.x;
    startElY = s.y;
    e.preventDefault();
  });

  document.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    var dx = e.clientX - startX;
    var dy = e.clientY - startY;
    var newX = Math.round(startElX + dx);
    var newY = Math.round(startElY + dy);
    setStickerPos(name, newX, newY);
    if (stage.selected === name) updatePropsPanel();
  });

  document.addEventListener('mouseup', function() {
    isDragging = false;
  });
}

// ========== 选中贴纸 ==========
function selectSticker(name) {
  // 取消之前的选中
  if (stage.selected && stage.stickers[stage.selected]) {
    stage.stickers[stage.selected].el.classList.remove('selected');
  }
  stage.selected = name;
  if (name && stage.stickers[name]) {
    stage.stickers[name].el.classList.add('selected');
    updatePropsPanel();
  }
}

// ========== 更新属性面板 ==========
function updatePropsPanel() {
  var name = stage.selected;
  if (!name || !stage.stickers[name]) return;
  var s = stage.stickers[name];
  $('propsTitle').textContent = s.emoji + ' ' + name;
  $('propName').value = name;
  $('propX').value = s.x;
  $('propY').value = s.y;
  $('propSize').value = s.size;
  $('propRotation').value = s.rotation;
  $('propOpacity').value = s.opacity;
}

// ========== 应用属性到贴纸 ==========
function applyPropsToSelected() {
  var name = stage.selected;
  if (!name || !stage.stickers[name]) return;
  var s = stage.stickers[name];
  s.x = parseInt($('propX').value) || 0;
  s.y = parseInt($('propY').value) || 0;
  s.size = parseInt($('propSize').value) || 60;
  s.rotation = parseInt($('propRotation').value) || 0;
  s.opacity = parseInt($('propOpacity').value);
  if (isNaN(s.opacity)) s.opacity = 100;
  applyStickerStyle(name);
}

// ========== 重命名贴纸 ==========
function renameSelected() {
  var oldName = stage.selected;
  var newName = $('propName').value.trim().replace(/[^a-zA-Z0-9_\u4e00-\u9fa5]/g, '');
  if (!newName || !oldName || newName === oldName) return;
  if (stage.stickers[newName]) {
    log('⚠️ 名称 "' + newName + '" 已存在！', 'error');
    $('propName').value = oldName;
    return;
  }
  stage.stickers[newName] = stage.stickers[oldName];
  stage.stickers[newName].el.dataset.name = newName;
  delete stage.stickers[oldName];
  stage.selected = newName;
  log('✏️ 贴纸重命名：' + oldName + ' → ' + newName, 'info');
}

// ========== 删除选中贴纸 ==========
function deleteSelected() {
  var name = stage.selected;
  if (!name || !stage.stickers[name]) return;
  stage.stickers[name].el.remove();
  delete stage.stickers[name];
  stage.selected = null;
  log('🗑️ 删除贴纸 ' + name, 'info');
}

// ========== 清空舞台 ==========
function clearStage() {
  Object.keys(stage.stickers).forEach(function(name) {
    stage.stickers[name].el.remove();
  });
  stage.stickers = {};
  stage.selected = null;
  log('🧹 舞台已清空', 'info');
}

// ========== 设置贴纸位置 ==========
function setStickerPos(name, x, y) {
  var s = stage.stickers[name];
  if (!s) return;
  s.x = x;
  s.y = y;
  applyStickerStyle(name);
}

// ========== 应用贴纸样式 ==========
function applyStickerStyle(name) {
  var s = stage.stickers[name];
  if (!s) return;
  var el = s.el;
  var containerSize = Math.round(s.size * 1.4);
  el.style.fontSize = s.size + 'px';
  el.style.width = containerSize + 'px';
  el.style.height = containerSize + 'px';
  el.style.left = (s.x + 400 - containerSize / 2) + 'px';
  el.style.top = (s.y + 250 - containerSize / 2) + 'px';
  el.style.transform = 'rotate(' + s.rotation + 'deg)';
  el.style.opacity = s.opacity / 100;
  el.style.display = s.visible ? 'flex' : 'none';
}

