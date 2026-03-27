// ========== 说话气泡 ==========
function setStickerSay(name, text) {
  var s = stage.stickers[name];
  if (!s) return;
  // 移除旧气泡
  if (s.bubble) { s.bubble.remove(); s.bubble = null; }
  if (!text) return;
  var bubble = document.createElement('div');
  bubble.className = 'speech-bubble';
  bubble.textContent = text;
  s.el.appendChild(bubble);
  s.bubble = bubble;
}

// ========== 弹跳动画 ==========
function animateBounce(name, times) {
  var s = stage.stickers[name];
  if (!s) return;
  var el = s.el.querySelector('.sticker-emoji');
  if (!el) return;
  var count = 0;
  function doBounce() {
    if (count >= times || stage.stopFlag) return;
    count++;
    el.style.animation = 'none';
    el.offsetHeight; // reflow
    el.style.animation = 'stickerBounce 0.5s ease';
    setTimeout(doBounce, 500);
  }
  doBounce();
}

// ========== 抖动动画 ==========
function animateShake(name) {
  var s = stage.stickers[name];
  if (!s) return;
  var el = s.el;
  el.style.animation = 'none';
  el.offsetHeight;
  el.style.animation = 'stickerShake 0.5s ease';
  setTimeout(function() { el.style.animation = ''; }, 500);
}

// ========== 旋转圈数 ==========
function animateSpin(name, turns) {
  var s = stage.stickers[name];
  if (!s) return;
  var el = s.el.querySelector('.sticker-emoji');
  if (!el) return;
  var duration = turns * 0.5;
  el.style.transition = 'transform ' + duration + 's linear';
  el.style.transform = 'rotate(' + (turns * 360) + 'deg)';
  setTimeout(function() {
    el.style.transition = '';
    el.style.transform = '';
    s.rotation = (s.rotation + turns * 360) % 360;
  }, duration * 1000);
}

// ========== 平滑移动 ==========
function animateMove(name, x, y, duration) {
  var s = stage.stickers[name];
  if (!s) return;
  var el = s.el;
  el.style.transition = 'left ' + duration + 's ease, top ' + duration + 's ease';
  s.x = x;
  s.y = y;
  el.style.left = (x + 400 - s.size / 2) + 'px';
  el.style.top = (y + 250 - s.size / 2) + 'px';
  setTimeout(function() {
    el.style.transition = '';
    if (stage.selected === name) updatePropsPanel();
  }, duration * 1000);
}

// ========== 平滑旋转 ==========
function animateRotate(name, angle, duration) {
  var s = stage.stickers[name];
  if (!s) return;
  var el = s.el;
  el.style.transition = 'transform ' + duration + 's ease';
  s.rotation = angle;
  el.style.transform = 'rotate(' + angle + 'deg)';
  setTimeout(function() {
    el.style.transition = '';
  }, duration * 1000);
}

// ========== 平滑缩放 ==========
function animateScaleSmooth(name, size, duration) {
  var s = stage.stickers[name];
  if (!s) return;
  var el = s.el;
  s.size = Math.max(10, Math.min(300, size));
  var containerSize = Math.round(s.size * 1.4);
  el.style.transition = 'font-size ' + duration + 's ease, width ' + duration + 's ease, height ' + duration + 's ease, left ' + duration + 's ease, top ' + duration + 's ease';
  el.style.fontSize = s.size + 'px';
  el.style.width = containerSize + 'px';
  el.style.height = containerSize + 'px';
  el.style.left = (s.x + 400 - containerSize / 2) + 'px';
  el.style.top = (s.y + 250 - containerSize / 2) + 'px';
  setTimeout(function() {
    el.style.transition = '';
  }, duration * 1000);
}

