// js/app/username.js — 用户名管理
// 首次打开弹出输入界面，之后在左上角显示并支持点击改名

(function() {
  var STORAGE_KEY = 'py_user_profile';
  var NICKNAME_MAX_UNITS = 10;
  var NICKNAME_RULE_TEXT = '昵称最多 5 个汉字或 10 个字符';
  var nameEl = document.getElementById('userName');
  var avatarEl = document.getElementById('userAvatar');
  var editBtn = document.getElementById('userNameEditBtn');
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

  function isChineseChar(char) {
    return /[\u3400-\u9fff\uf900-\ufaff]/.test(char);
  }

  function getNicknameUnits(name) {
    return Array.from(name || '').reduce(function(total, char) {
      return total + (isChineseChar(char) ? 2 : 1);
    }, 0);
  }

  function normalizeNickname(name) {
    var chars = Array.from((name || '').trim());
    var result = '';
    var units = 0;
    for (var i = 0; i < chars.length; i++) {
      var char = chars[i];
      var weight = isChineseChar(char) ? 2 : 1;
      if (units + weight > NICKNAME_MAX_UNITS) break;
      result += char;
      units += weight;
    }
    return result;
  }

  function getDisplayNickname(profile) {
    var nickname = normalizeNickname(profile && profile.nickname ? profile.nickname : '');
    return nickname || 'Python学徒';
  }

  function normalizeProfileNickname(profile) {
    if (!profile) return profile;
    var nickname = getDisplayNickname(profile);
    if (nickname !== profile.nickname) {
      profile.nickname = nickname;
      saveProfile(profile);
    }
    return profile;
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

  function updateBranding() {
    var brandText = '孩子的编程冒险乐园';
    var logoEl = document.getElementById('logoText');
    var welcomeEl = document.getElementById('welcomeText');
    if (logoEl) logoEl.textContent = brandText;
    if (welcomeEl) welcomeEl.textContent = brandText;
    document.title = '🌈 ' + brandText;
  }

  function applyProfile(profile) {
    var nickname = getDisplayNickname(profile);
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
    updateBranding();
  }

  function saveCurrentProfile() {
    var rawName = input.value.trim();
    var name = normalizeNickname(rawName);
    input.value = name;
    if (!name) {
      input.focus();
      return;
    }
    if (getNicknameUnits(rawName) > NICKNAME_MAX_UNITS && typeof toast === 'function') {
      toast('⚠️ ' + NICKNAME_RULE_TEXT);
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
    input.value = isEdit && profile.nickname && profile.nickname !== 'Python学徒' ? normalizeNickname(profile.nickname) : '';
    input.placeholder = (placeholder || '请输入昵称') + '（最多5个汉字或10个字符）';
    input.maxLength = 10;
    setSelectedGender(profile.gender || 'unknown');
    if (modalTitleEl) modalTitleEl.textContent = isEdit ? '修改我的资料' : '欢迎来到编程世界！';
    if (modalDescEl) modalDescEl.textContent = isEdit ? '可以修改昵称，也可以重新选择性别显示。昵称最多 5 个汉字或 10 个字符。' : '先告诉我你的名字，再选一个小身份吧。昵称最多 5 个汉字或 10 个字符。';
    if (confirmBtn) confirmBtn.textContent = isEdit ? '保存资料 ✨' : '开始学习 🚀';
    modal.style.display = 'flex';
    setTimeout(function() { input.focus(); }, 100);
  }

  function hideModal() {
    modal.style.display = 'none';
  }

  input.addEventListener('input', function() {
    var normalized = normalizeNickname(input.value);
    if (input.value !== normalized) {
      input.value = normalized;
    }
  });

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

  function openProfileEditor() {
    showModal('输入新昵称', true);
  }

  // 点击名字/头像/编辑按钮改资料
  if (nameEl) {
    nameEl.addEventListener('click', openProfileEditor);
  }
  if (avatarEl) {
    avatarEl.addEventListener('click', openProfileEditor);
  }
  if (editBtn) {
    editBtn.addEventListener('click', openProfileEditor);
  }

  // 初始化：首次打开弹窗
  var profile = normalizeProfileNickname(getProfile());
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
