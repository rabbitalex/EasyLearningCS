// js/app/username.js — 用户名管理
// 首次打开弹出输入界面，之后在左上角显示并支持点击改名

(function() {
  var STORAGE_KEY = 'py_user_profile';
  var nameEl = document.getElementById('userName');
  var modal = document.getElementById('nameModal');
  var input = document.getElementById('nameInput');
  var confirmBtn = document.getElementById('nameConfirm');
  var closeBtn = document.getElementById('nameClose');

  function getProfile() {
    try {
      return safeGet(STORAGE_KEY, null);
    } catch(e) { return null; }
  }

  function saveProfile(profile) {
    try { safeSet(STORAGE_KEY, profile); } catch(e) {}
  }

  function updateBranding(name) {
    var logoEl = document.getElementById('logoText');
    var welcomeEl = document.getElementById('welcomeText');
    if (logoEl) logoEl.textContent = '🌍 ' + name + '的编程世界';
    if (welcomeEl) welcomeEl.textContent = name + '的编程世界';
    document.title = '🌍 ' + name + '的编程世界';
  }

  function setName(name) {
    name = (name || '').trim();
    if (!name) return;
    var profile = getProfile() || { nickname: '', avatar: '👤', theme: 'magic' };
    profile.nickname = name;
    if (!profile.joinDate) profile.joinDate = new Date().toISOString();
    saveProfile(profile);
    nameEl.textContent = name;
    nameEl.title = '点击修改昵称';
    updateBranding(name);
  }

  function showModal(placeholder) {
    input.value = '';
    input.placeholder = placeholder || '请输入你的名字';
    modal.style.display = 'flex';
    setTimeout(function() { input.focus(); }, 100);
  }

  function hideModal() {
    modal.style.display = 'none';
  }

  // 确认按钮
  confirmBtn.addEventListener('click', function() {
    var name = input.value.trim();
    if (name) { setName(name); hideModal(); }
  });

  // 关闭按钮
  if (closeBtn) {
    closeBtn.addEventListener('click', function() { hideModal(); });
  }

  // 回车确认
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      var name = input.value.trim();
      if (name) { setName(name); hideModal(); }
    }
  });

  // 点击名字改名
  nameEl.addEventListener('click', function() {
    showModal('输入新昵称');
  });

  // 初始化：首次打开弹窗
  var profile = getProfile();
  if (profile && profile.nickname && profile.nickname !== 'Python学徒') {
    nameEl.textContent = profile.nickname;
    nameEl.title = '点击修改昵称';
    updateBranding(profile.nickname);
  } else {
    nameEl.textContent = 'Python学徒';
    // 首次打开，延迟弹窗（等加载动画结束后）
    setTimeout(function() { showModal('请输入你的名字'); }, 2500);
  }
})();
