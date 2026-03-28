// js/app/username.js — 用户名管理
// 首次打开弹出输入界面，之后在左上角显示并支持点击改名

(function() {
  var STORAGE_KEY = 'py_user_profile';
  var nameEl = document.getElementById('userName');
  var avatarEl = document.getElementById('userAvatar');
  var modal = document.getElementById('nameModal');
  var input = document.getElementById('nameInput');
  var confirmBtn = document.getElementById('nameConfirm');
  var closeBtn = document.getElementById('nameClose');
  var modalTitleEl = document.getElementById('nameModalTitle');
  var modalDescEl = document.getElementById('nameModalDesc');
  var genderInputs = document.querySelectorAll('input[name="profileGender"]');

  function getProfile() {
    try {
      return safeGet(STORAGE_KEY, null);
    } catch(e) { return null; }
  }

  function saveProfile(profile) {
    try { safeSet(STORAGE_KEY, profile); } catch(e) {}
  }

  function resolveAvatar(gender) {
    if (gender === 'boy') return '👦';
    if (gender === 'girl') return '👧';
    return '🧒';
  }

  function getSelectedGender() {
    var checked = document.querySelector('input[name="profileGender"]:checked');
    return checked ? checked.value : 'unknown';
  }

  function setSelectedGender(gender) {
    var target = gender || 'unknown';
    var found = false;
    genderInputs.forEach(function(inputEl) {
      var matched = inputEl.value === target;
      inputEl.checked = matched;
      if (matched) found = true;
    });
    if (!found) {
      genderInputs.forEach(function(inputEl) {
        inputEl.checked = inputEl.value === 'unknown';
      });
    }
  }

  function updateBranding(name) {
    var logoEl = document.getElementById('logoText');
    var welcomeEl = document.getElementById('welcomeText');
    if (logoEl) logoEl.textContent = '🌍 ' + name + '的编程世界';
    if (welcomeEl) welcomeEl.textContent = name + '的编程世界';
    document.title = '🌍 ' + name + '的编程世界';
  }

  function applyProfile(profile) {
    var nickname = (profile && profile.nickname) ? profile.nickname : 'Python学徒';
    var gender = profile && profile.gender ? profile.gender : 'unknown';
    var avatar = profile && profile.avatar ? profile.avatar : resolveAvatar(gender);
    if (nameEl) {
      nameEl.textContent = nickname;
      nameEl.title = '点击修改资料';
    }
    if (avatarEl) {
      avatarEl.textContent = avatar;
      avatarEl.title = '点击修改资料';
    }
    updateBranding(nickname);
  }

  function saveCurrentProfile() {
    var name = input.value.trim();
    if (!name) {
      input.focus();
      return;
    }
    var oldProfile = getProfile() || { nickname: '', avatar: '🧒', gender: 'unknown', theme: 'magic' };
    var gender = getSelectedGender();
    var profile = {
      nickname: name,
      avatar: resolveAvatar(gender),
      gender: gender,
      joinDate: oldProfile.joinDate || new Date().toISOString(),
      theme: oldProfile.theme || 'magic'
    };
    saveProfile(profile);
    applyProfile(profile);
    hideModal();
  }

  function showModal(placeholder, isEdit) {
    var profile = getProfile() || { nickname: '', avatar: '🧒', gender: 'unknown', theme: 'magic' };
    input.value = isEdit && profile.nickname && profile.nickname !== 'Python学徒' ? profile.nickname : '';
    input.placeholder = placeholder || '请输入你的名字';
    setSelectedGender(profile.gender || 'unknown');
    if (modalTitleEl) modalTitleEl.textContent = isEdit ? '修改我的资料' : '欢迎来到编程世界！';
    if (modalDescEl) modalDescEl.textContent = isEdit ? '可以修改昵称，也可以重新选择性别显示。' : '先告诉我你的名字，再选一个小身份吧';
    if (confirmBtn) confirmBtn.textContent = isEdit ? '保存资料 ✨' : '开始学习 🚀';
    modal.style.display = 'flex';
    setTimeout(function() { input.focus(); }, 100);
  }

  function hideModal() {
    modal.style.display = 'none';
  }

  // 确认按钮
  confirmBtn.addEventListener('click', saveCurrentProfile);

  // 关闭按钮
  if (closeBtn) {
    closeBtn.addEventListener('click', function() { hideModal(); });
  }

  // 回车确认
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      saveCurrentProfile();
    }
  });

  // 点击名字/头像改资料
  if (nameEl) {
    nameEl.addEventListener('click', function() {
      showModal('输入新昵称', true);
    });
  }
  if (avatarEl) {
    avatarEl.addEventListener('click', function() {
      showModal('输入新昵称', true);
    });
  }

  // 初始化：首次打开弹窗
  var profile = getProfile();
  if (profile && profile.nickname && profile.nickname !== 'Python学徒') {
    if (!profile.gender) profile.gender = 'unknown';
    if (!profile.avatar || profile.avatar === '👤') profile.avatar = resolveAvatar(profile.gender);
    applyProfile(profile);
  } else {
    applyProfile({ nickname: 'Python学徒', avatar: '🧒', gender: 'unknown' });
    // 首次打开，延迟弹窗（等加载动画结束后）
    setTimeout(function() { showModal('请输入你的名字', false); }, 2500);
  }
})();
