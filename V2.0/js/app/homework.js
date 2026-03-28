// js/app/homework.js — 本课作业系统
// 每课10道作业，从易到难（1星到3星），全部完成才标记绿色

(function() {
  'use strict';

  var _currentHomeworkIndex = -1; // 当前选中的作业序号

  // 根据课程的 challenge 数据生成10道作业
  // 原来每课只有1道 challenge，现在扩展为10道
  // 前3题1星(简单)，中4题2星(中等)，后3题3星(较难)
  function generateHomeworks(lesson) {
    if (!lesson || !lesson.challenge) return [];
    var homeworks = [];

    // 优先从题库加载
    if (typeof HOMEWORK_BANK !== 'undefined' && HOMEWORK_BANK[lesson.id]) {
      var bank = HOMEWORK_BANK[lesson.id];
      for (var b = 0; b < bank.length && b < 10; b++) {
        homeworks.push({
          desc: bank[b].desc,
          template: bank[b].template || '',
          hint: bank[b].hint || '',
          answer: bank[b].answer || bank[b].solution || bank[b].hint || '',
          check: bank[b].check || function() { return true; },
          stars: b < 3 ? 1 : (b < 7 ? 2 : 3)
        });
      }
    }

    // 如果题库不够，用原 challenge 作为第1题
    if (homeworks.length === 0) {
      var ch = lesson.challenge;
      homeworks.push({
        desc: ch.desc || ch.description || '',
        template: ch.template || '',
        hint: ch.hint || '',
        answer: ch.answer || ch.solution || ch.hint || '',
        solution: ch.solution || '',
        check: ch.check || function() { return true; },
        stars: 1
      });
    }

    // 不足10道时用占位补全
    while (homeworks.length < 10) {
      var idx = homeworks.length;
      var star = idx < 3 ? 1 : (idx < 7 ? 2 : 3);
      homeworks.push({
        desc: '（作业 ' + (idx + 1) + ' 待补充）',
        template: '# 请完成作业 ' + (idx + 1) + '\n',
        hint: '',
        answer: '',
        check: function() { return true; },
        stars: star
      });
    }
    // 确保星级分配：前3题1星、中4题2星、后3题3星
    for (var i = 0; i < homeworks.length && i < 10; i++) {
      if (i < 3) homeworks[i].stars = 1;
      else if (i < 7) homeworks[i].stars = 2;
      else homeworks[i].stars = 3;
    }
    return homeworks.slice(0, 10);
  }

  // 获取某课已完成的作业ID列表
  function getCompletedHomeworks(lessonId) {
    var all = Config.getChallengeProgress();
    var done = [];
    for (var i = 0; i < 10; i++) {
      var key = lessonId + '_hw' + i;
      if (all[key] && all[key].completed) done.push(i);
    }
    return done;
  }

  // 标记某道作业完成
  function markHomeworkDone(lessonId, hwIndex) {
    var key = lessonId + '_hw' + hwIndex;
    Config.completeChallenge(key, 100);
    state.completedChallenges = Config.getChallengeProgress();
  }

  // 检查某课是否所有10道作业都完成
  function isAllHomeworkDone(lessonId) {
    return getCompletedHomeworks(lessonId).length >= 10;
  }

  function getHomeworkAnswer(hw) {
    if (!hw) return '';
    return hw.answer || hw.solution || hw.hint || '';
  }

  function getHomeworkEditorTemplate(hw, idx) {
    if (!hw) return '# 请在这里完成作业\n';

    var raw = typeof hw.template === 'string' ? hw.template.replace(/\r\n/g, '\n') : '';
    if (!raw.trim()) {
      return '# 请在这里完成作业 ' + (idx + 1) + '\n';
    }

    var trimmed = raw.trim();
    if (trimmed.charAt(0) === '#') {
      return raw;
    }

    var lines = raw.replace(/\n+$/g, '').split('\n');
    var commented = lines.map(function(line) {
      return line.trim() ? '# ' + line : '#';
    }).join('\n');

    return '# 请在这里完成作业 ' + (idx + 1) + '\n' + commented + '\n';
  }

  function showHomeworkHint() {
    if (!state.currentLesson || _currentHomeworkIndex < 0) {
      toast('⚠️ 请先打开一道作业');
      return false;
    }

    var homeworks = generateHomeworks(state.currentLesson);
    var hw = homeworks[_currentHomeworkIndex];
    var answer = getHomeworkAnswer(hw);
    var resultEl = document.getElementById('challengeResult');

    if (!hw || !resultEl) return false;
    if (!answer) {
      toast('这道作业暂时还没有提供答案');
      return false;
    }

    resultEl.className = 'challenge-result hint show';
    resultEl.innerHTML = '<div class="challenge-result-label"><i class="fas fa-lightbulb"></i> 参考答案</div>' +
      '<pre class="challenge-result-code">' + escapeHtml(answer) + '</pre>';
    resultEl.style.display = 'block';
    return true;
  }

  // 渲染作业列表
  function renderHomeworkList(lesson) {
    var listEl = document.getElementById('homeworkList');
    var detailEl = document.getElementById('homeworkDetail');
    var progressEl = document.getElementById('homeworkProgress');
    if (!listEl) return;

    var homeworks = generateHomeworks(lesson);
    var done = getCompletedHomeworks(lesson.id);

    if (progressEl) progressEl.textContent = done.length + '/10';

    listEl.style.display = '';
    if (detailEl) detailEl.style.display = 'none';
    _currentHomeworkIndex = -1;

    var html = '';
    for (var i = 0; i < homeworks.length; i++) {
      var hw = homeworks[i];
      var isDone = done.indexOf(i) !== -1;
      var starsHtml = '';
      for (var s = 0; s < hw.stars; s++) starsHtml += '★';
      for (var s2 = hw.stars; s2 < 3; s2++) starsHtml += '<span style="opacity:0.2">★</span>';

      html += '<div class="homework-item' + (isDone ? ' done' : '') + '" data-hw-index="' + i + '">' +
        '<span class="hw-num">' + (isDone ? '<i class="fas fa-check" style="font-size:0.55rem"></i>' : (i + 1)) + '</span>' +
        '<span class="hw-title">' + escapeHtml(hw.desc).substring(0, 50) + (hw.desc.length > 50 ? '...' : '') + '</span>' +
        '<span class="hw-stars">' + starsHtml + '</span>' +
        '<span class="hw-status">' + (isDone ? '已完成' : '') + '</span>' +
        '</div>';
    }
    listEl.innerHTML = html;

    // 绑定点击事件
    listEl.querySelectorAll('.homework-item').forEach(function(item) {
      item.addEventListener('click', function() {
        var idx = parseInt(this.getAttribute('data-hw-index'), 10);
        openHomeworkDetail(homeworks, idx);
      });
    });
  }

  // 打开某道作业详情
  function openHomeworkDetail(homeworks, idx) {
    var listEl = document.getElementById('homeworkList');
    var detailEl = document.getElementById('homeworkDetail');
    var titleEl = document.getElementById('homeworkDetailTitle');
    var starsEl = document.getElementById('homeworkDetailStars');
    if (!Array.isArray(homeworks)) return;
    idx = parseInt(idx, 10);
    if (!detailEl || isNaN(idx) || idx < 0 || idx >= homeworks.length) return;

    _currentHomeworkIndex = idx;
    var hw = homeworks[idx];
    if (!hw) return;

    listEl.style.display = 'none';
    detailEl.style.display = '';

    if (titleEl) titleEl.textContent = '作业 ' + (idx + 1);
    if (starsEl) {
      var sh = '';
      for (var s = 0; s < hw.stars; s++) sh += '★';
      starsEl.innerHTML = '<span style="color:#FFD54F">' + sh + '</span>';
    }

    var descEl = document.getElementById('challengeDesc');
    var editorEl = document.getElementById('challengeEditor');
    var resultEl = document.getElementById('challengeResult');
    if (descEl) descEl.textContent = hw.desc;
    if (editorEl) editorEl.value = getHomeworkEditorTemplate(hw, idx);
    if (resultEl) { resultEl.style.display = 'none'; resultEl.className = 'challenge-result'; }
  }

  // 返回列表
  function backToHomeworkList() {
    if (!state.currentLesson) return;
    renderHomeworkList(state.currentLesson);
  }

  // 提交当前作业
  function submitCurrentHomework() {
    if (!state.currentLesson || _currentHomeworkIndex < 0) return;
    var homeworks = generateHomeworks(state.currentLesson);
    var hw = homeworks[_currentHomeworkIndex];
    var code = document.getElementById('challengeEditor').value;
    if (!code.trim()) { toast('⚠️ 请先写代码'); return; }

    clearOutput();
    runPython(code, function(success) {
      var outputLines = document.querySelectorAll('#outputArea .output-line');
      var text = '';
      outputLines.forEach(function(l) { text += l.textContent + '\n'; });

      var result = document.getElementById('challengeResult');
      if (success && hw.check(text)) {
        result.className = 'challenge-result success';
        result.innerHTML = '<i class="fas fa-check-circle"></i> 🎉 作业 ' + (_currentHomeworkIndex + 1) + ' 完成！';
        result.style.display = 'block';
        markHomeworkDone(state.currentLesson.id, _currentHomeworkIndex);

        // 检查是否全部完成
        if (isAllHomeworkDone(state.currentLesson.id)) {
          // 标记课程为已完成（绿色）
          if (state.completedLessons.indexOf(state.currentLesson.id) === -1) {
            state.completedLessons = Config.completeLesson(state.currentLesson.id, state.currentLesson.chapter);
            toast('🏆 所有作业完成！课程已标记为完成！');
          }
        } else {
          // 标记为已访问（黄色）
          if (state.visitedPages.indexOf(state.currentLesson.id) === -1) {
            state.visitedPages = Config.logPageVisit(state.currentLesson.id);
          }
        }
        updateProgress();
        buildNav();

        // 更新进度显示
        var progressEl = document.getElementById('homeworkProgress');
        var done = getCompletedHomeworks(state.currentLesson.id);
        if (progressEl) progressEl.textContent = done.length + '/10';
      } else {
        result.className = 'challenge-result error';
        result.innerHTML = '<i class="fas fa-times-circle"></i> 😅 还不太对，再检查一下？';
        result.style.display = 'block';
      }
    });
  }

  // 初始化事件绑定（在 DOMContentLoaded 后）
  function initHomework() {
    var backBtn = document.getElementById('backToList');
    if (backBtn) {
      backBtn.addEventListener('click', function() { backToHomeworkList(); });
    }
  }

  // 暴露到全局
  window.HomeworkSystem = {
    render: renderHomeworkList,
    submit: submitCurrentHomework,
    showHint: showHomeworkHint,
    init: initHomework,
    isAllDone: isAllHomeworkDone,
    getCompleted: getCompletedHomeworks
  };
})();
