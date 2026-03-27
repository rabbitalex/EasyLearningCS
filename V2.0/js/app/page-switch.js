// ===== 加载课程 =====
function loadLesson(id) {
  var lesson = null;
  var chapterName = '';
  COURSES.forEach(function(ch) {
    ch.lessons.forEach(function(l) {
      if (l.id === id) { lesson = l; chapterName = ch.chapter; }
    });
  });
  if (!lesson) return;

  state.currentLesson = lesson;
  state.currentStep = 0;
  state.currentPage = 'lesson';
  state.stepExecuting = false;
  hideStepButtons();
  // 记录当前课程，下次打开自动恢复
  try { localStorage.setItem('py_current_lesson', id); } catch(e) {}

  // 隐藏其他页面
  $('welcomePage').style.display = 'none';
  $('statsPage').style.display = 'none';
  $('lessonPage').style.display = '';

  // 更新底部导航（取消所有active）
  $$('.sidebar-nav-btn').forEach(function(btn) { btn.classList.remove('active'); });

  $('lessonTitle').innerHTML = escapeHtml(lesson.title);

  // 查找当前章节的第一个课程id，用于面包屑跳转
  var chapterFirstLessonId = '';
  COURSES.forEach(function(ch) {
    if (ch.chapter === chapterName && ch.lessons.length > 0) {
      chapterFirstLessonId = ch.lessons[0].id;
    }
  });

  // 查找当前分组名称
  var groupName = '';
  if (typeof COURSE_GROUPS !== 'undefined') {
    COURSE_GROUPS.forEach(function(group) {
      group.chapters.forEach(function(ch) {
        if (ch.chapter === chapterName) {
          groupName = group.groupName;
        }
      });
    });
  }

  var breadcrumbHtml =
    '<span class="breadcrumb-item breadcrumb-link" onclick="window._switchPage(\'home\')">\ud83c\udfe0 首页</span>' +
    '<i class="fas fa-chevron-right breadcrumb-sep" style="color:var(--text-muted);font-size:0.65rem;margin:0 0.3rem"></i>';
  if (groupName) {
    breadcrumbHtml += '<span class="breadcrumb-item breadcrumb-link" onclick="window._switchPage(\'home\')">' + escapeHtml(groupName) + '</span>' +
      '<i class="fas fa-chevron-right breadcrumb-sep" style="color:var(--text-muted);font-size:0.65rem;margin:0 0.3rem"></i>';
  }
  breadcrumbHtml += '<span class="breadcrumb-item breadcrumb-link" onclick="window._loadLesson(\'' + chapterFirstLessonId + '\')">' + escapeHtml(chapterName) + '</span>' +
    '<i class="fas fa-chevron-right breadcrumb-sep" style="color:var(--text-muted);font-size:0.65rem;margin:0 0.3rem"></i>' +
    '<span class="breadcrumb-item breadcrumb-current">' + escapeHtml(lesson.title) + '</span>';
  $('breadcrumb').innerHTML = breadcrumbHtml;

  updateLessonNav(id);
  buildSteps(lesson);
  $('codeEditor').value = lesson.code;
  updateLineNumbers();
  updateHighlight();

  if (lesson.challenge) {
    $('challengeSection').style.display = '';
    $('challengeDesc').textContent = lesson.challenge.desc;
    $('challengeEditor').value = lesson.challenge.template || '';
    $('challengeResult').className = 'challenge-result';
    $('challengeResult').style.display = 'none';
    // 默认折叠挑战内容
    var challengeBody = $('challengeBody');
    var challengeArrow = $('challengeArrow');
    if (challengeBody) challengeBody.style.display = 'none';
    if (challengeArrow) challengeArrow.style.transform = 'rotate(0deg)';
  } else {
    $('challengeSection').style.display = 'none';
  }

  clearOutput();
  $('outputArea').innerHTML = '<span class="output-placeholder">点击 ▶ 运行 按钮查看输出结果 \u2728</span>';
  $('variablesArea').innerHTML = '<div class="empty-variables"><i class="fas fa-box-open"></i><p>运行代码后，变量会在这里显示</p></div>';

  switchTab('editor');
  buildNav();

  $('sidebar').classList.remove('mobile-open');
  $('sidebarOverlay').classList.remove('show');
}

// 暴露给HTML onclick
window._switchPage = function(page) { switchPage(page); };
window._loadLesson = function(id) { loadLesson(id); };

function updateLessonNav(currentId) {
  var allLessons = [];
  COURSES.forEach(function(ch) { ch.lessons.forEach(function(l) { allLessons.push(l); }); });
  var idx = allLessons.findIndex(function(l) { return l.id === currentId; });
  $('prevLesson').disabled = idx <= 0;
  $('nextLesson').disabled = idx >= allLessons.length - 1;
  $('prevLesson').onclick = function() { if (idx > 0) loadLesson(allLessons[idx - 1].id); };
  $('nextLesson').onclick = function() { if (idx < allLessons.length - 1) loadLesson(allLessons[idx + 1].id); };
}

