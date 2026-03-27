// ===== 手动执行innerHTML中嵌入的<script>标签 =====
function executeInlineScripts(container) {
  var scripts = container.querySelectorAll('script');
  scripts.forEach(function(oldScript) {
    var newScript = document.createElement('script');
    // 复制属性
    Array.from(oldScript.attributes).forEach(function(attr) {
      newScript.setAttribute(attr.name, attr.value);
    });
    newScript.textContent = oldScript.textContent;
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
}

// ===== 步骤构建 =====
function buildSteps(lesson) {
  var container = $('stepContainer');
  var html = '';
  lesson.steps.forEach(function(step, i) {
    html += '<div class="step-card' + (i === 0 ? ' active' : '') + '" data-step="' + i + '">' +
      '<h3><span class="step-badge">' + (i + 1) + '</span> ' + escapeHtml(step.title) + '</h3>' +
      '<div class="step-content">' + step.content + '</div></div>';
  });
  container.innerHTML = html;

  // 手动执行innerHTML中的<script>标签（innerHTML插入的script不会自动执行）
  executeInlineScripts(container);

  var dots = $('stepDots');
  var dotsHtml = '';
  for (var i = 0; i < lesson.steps.length; i++) {
    dotsHtml += '<div class="step-dot' + (i === 0 ? ' active' : '') + '" data-step="' + i + '"></div>';
  }
  dots.innerHTML = dotsHtml;
  $$('.step-dot').forEach(function(dot) {
    dot.addEventListener('click', function() { goToStep(parseInt(this.getAttribute('data-step'))); });
  });
  updateStepButtons();
  updateLessonProgress();
  if (lesson.steps[0] && lesson.steps[0].codeToLoad) {
    $('codeEditor').value = lesson.steps[0].codeToLoad;
    updateLineNumbers();
    updateHighlight();
  }
}

function goToStep(idx) {
  if (!state.currentLesson) return;
  var steps = state.currentLesson.steps;
  if (idx < 0 || idx >= steps.length) return;
  state.currentStep = idx;
  $$('.step-card').forEach(function(card, i) { card.classList.toggle('active', i === idx); });
  $$('.step-dot').forEach(function(dot, i) {
    dot.classList.toggle('active', i === idx);
    if (i < idx) dot.classList.add('completed'); else dot.classList.remove('completed');
  });
  // 切换步骤时重新执行当前步骤卡片中的脚本
  var activeCard = document.querySelector('.step-card.active');
  if (activeCard) executeInlineScripts(activeCard);
  if (steps[idx].codeToLoad) {
    $('codeEditor').value = steps[idx].codeToLoad;
    updateLineNumbers();
    updateHighlight();
  }
  updateStepButtons();
  updateLessonProgress();
}

function updateStepButtons() {
  if (!state.currentLesson) return;
  var total = state.currentLesson.steps.length;
  $('prevStep').disabled = state.currentStep <= 0;
  var nextBtn = $('nextStep');
  if (state.currentStep >= total - 1) {
    nextBtn.innerHTML = '<i class="fas fa-flag-checkered"></i> 完成课程';
    nextBtn.onclick = completeLesson;
  } else {
    nextBtn.innerHTML = '下一步 <i class="fas fa-arrow-right"></i>';
    nextBtn.onclick = function() { goToStep(state.currentStep + 1); };
  }
}

function updateLessonProgress() {
  if (!state.currentLesson) return;
  var total = state.currentLesson.steps.length;
  var pct = ((state.currentStep + 1) / total) * 100;
  $('lessonProgressFill').style.width = pct + '%';
}

function completeLesson() {
  if (!state.currentLesson) return;
  var id = state.currentLesson.id;
  if (state.completedLessons.indexOf(id) === -1) {
    // 使用 Config 管理器保存完成状态
    state.completedLessons = Config.completeLesson(id, state.currentLesson.chapter);
    toast('🎉 恭喜！你完成了「' + state.currentLesson.title + '」');
  } else {
    toast('✅ 这节课你已经完成过啦！');
  }
  updateProgress();
  // 自动跳转到下一课（loadLesson内部会调用buildNav，无需重复调用）
  var allLessons = [];
  COURSES.forEach(function(ch) { ch.lessons.forEach(function(l) { allLessons.push(l); }); });
  var idx = allLessons.findIndex(function(l) { return l.id === id; });
  if (idx >= 0 && idx < allLessons.length - 1) {
    // 使用requestAnimationFrame避免卡顿，快速切换到下一课
    requestAnimationFrame(function() {
      loadLesson(allLessons[idx + 1].id);
      toast('📖 已跳转到下一课');
    });
  } else {
    // 最后一课，无需跳转，仅刷新导航状态
    buildNav();
  }
}

// ===== 标签切换 → 统一视图：滚动到对应区段 =====
function switchTab(tabName) {
  // 统一视图模式下，三个区段始终可见，switchTab改为滚动到对应区段
  var sectionMap = {
    'editor': '.section-editor',
    'output': '.section-output',
    'variables': '.section-variables'
  };
  var selector = sectionMap[tabName];
  if (selector) {
    var el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  // 兼容旧tab结构（如course-detail.html等其他页面）
  $$('.tab-btn').forEach(function(btn) { btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName); });
  $$('.tab-content').forEach(function(content) { content.classList.toggle('active', content.id === 'tab-' + tabName); });
}

// ===== 行号更新 =====
function updateLineNumbers() {
  var code = $('codeEditor').value;
  var lines = code.split('\n');
  var nums = '';
  for (var i = 1; i <= Math.max(lines.length, 10); i++) { nums += i + '\n'; }
  $('lineNumbers').textContent = nums;
}

// ===== 进度更新 =====
function updateProgress() {
  var total = 0;
  COURSES.forEach(function(ch) { total += ch.lessons.length; });
  var completed = state.completedLessons.length;
  var pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  var pctEl = $('progressPercent'); if (pctEl) pctEl.textContent = pct + '%';
  var barEl = $('progressBarFill'); if (barEl) barEl.style.width = pct + '%';
}

function updateStreak() {
  $('streakCount').textContent = state.streak;
}

// ===== Toast =====
function toast(msg) {
  var existing = document.querySelector('.toast');
  if (existing) existing.remove();
  var el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = msg;
  document.body.appendChild(el);
  setTimeout(function() { if (el.parentNode) el.remove(); }, 3000);
}

// ===== 课程推荐网格 =====
function buildCourseGrid() {
  var grid = $('courseGrid');
  if (!grid) return;
  var html = '';
  COURSES.forEach(function(chapter) {
    var firstLesson = chapter.lessons[0];
    if (!firstLesson) return;
    var completedCount = 0;
    chapter.lessons.forEach(function(l) {
      if (state.completedLessons.indexOf(l.id) !== -1) completedCount++;
    });
    var statusText = completedCount > 0
      ? (completedCount === chapter.lessons.length ? '\u2705 已完成' : completedCount + '/' + chapter.lessons.length + ' 进行中')
      : chapter.lessons.length + ' 节课';
    html += '<div class="course-grid-card" data-first-lesson="' + firstLesson.id + '">' +
      '<div class="cg-badge">' + statusText + '</div>' +
      '<div class="cg-icon">' + chapter.icon + '</div>' +
      '<div class="cg-title">' + escapeHtml(chapter.chapter) + '</div>' +
      '<div class="cg-desc">' + chapter.lessons.length + ' 节课 · ' + chapter.lessons.map(function(l) { return l.title; }).join('、').substring(0, 60) + '...</div>' +
      '</div>';
  });
  grid.innerHTML = html;
  $$('.course-grid-card').forEach(function(card) {
    card.addEventListener('click', function() {
      var lessonId = this.getAttribute('data-first-lesson');
      if (lessonId) loadLesson(lessonId);
    });
  });
}

// ===== 首页统计数字 =====
function updateStatsNumbers() {
  var totalLessons = 0, totalChallenges = 0;
  COURSES.forEach(function(ch) {
    ch.lessons.forEach(function(l) {
      totalLessons++;
      if (l.challenge) totalChallenges++;
    });
  });
  var el1 = $('statLessons'); if (el1) el1.textContent = totalLessons;
  var el2 = $('statChallenges'); if (el2) el2.textContent = totalChallenges;
  var el3 = $('statChapters'); if (el3) el3.textContent = COURSES.length;
}

// ===== 学习统计页面渲染 =====
function renderStatsPage() {
  // 概览数据
  var el1 = $('statsCompleted'); if (el1) el1.textContent = state.completedLessons.length;
  var el2 = $('statsChallenges'); if (el2) el2.textContent = state.completedChallenges.length;
  var el4 = $('statsStreak'); if (el4) el4.textContent = state.streak;

  // 章节进度
  var cpList = $('chapterProgressList');
  if (cpList) {
    var html = '';
    COURSES.forEach(function(ch) {
      var total = ch.lessons.length;
      var done = 0;
      ch.lessons.forEach(function(l) {
        if (state.completedLessons.indexOf(l.id) !== -1) done++;
      });
      var pct = total > 0 ? Math.round((done / total) * 100) : 0;
      html += '<div class="chapter-progress-item">' +
        '<span class="cp-icon">' + ch.icon + '</span>' +
        '<div class="cp-info"><div class="cp-name">' + escapeHtml(ch.chapter) + '</div>' +
        '<div class="cp-bar"><div class="cp-bar-fill" style="width:' + pct + '%"></div></div></div>' +
        '<span class="cp-pct">' + pct + '%</span></div>';
    });
    cpList.innerHTML = html;
  }
}

// ===== 粒子效果 =====
function createParticles() {
  var container = $('particles');
  if (!container) return;
  var colors = ['#6C5CE7', '#00cec9', '#fd79a8', '#fdcb6e', '#00b894'];
  for (var i = 0; i < 25; i++) {
    var p = document.createElement('div');
    p.className = 'hero-particle';
    p.style.background = colors[i % colors.length];
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.width = (4 + Math.random() * 6) + 'px';
    p.style.height = p.style.width;
    p.style.animationDelay = (Math.random() * 6) + 's';
    p.style.animationDuration = (4 + Math.random() * 4) + 's';
    container.appendChild(p);
  }
}

