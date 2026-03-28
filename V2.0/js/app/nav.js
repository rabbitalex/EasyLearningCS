// ===== 导航构建 =====
var _navAllExpanded = false; // 默认全部折叠

function buildNav(filter) {
  var nav = $('courseNav');
  var html = '';

  // 计算章节进度
  function getChapterProgress(chapter) {
    var total = chapter.lessons.length;
    var completed = 0;
    chapter.lessons.forEach(function(l) {
      if (state.completedLessons.indexOf(l.id) !== -1) completed++;
    });
    return { total: total, completed: completed, pct: total > 0 ? Math.round((completed / total) * 100) : 0 };
  }

  // 渲染一个章节（树状结构，带连接线）
  function renderChapter(chapter, ci, isLast) {
    var lessons = chapter.lessons;
    if (filter) {
      lessons = lessons.filter(function(l) { return l.title.toLowerCase().indexOf(filter) !== -1; });
      if (lessons.length === 0) return '';
    }
    var isExpanded = (state.currentLesson && chapter.lessons.some(function(l) { return l.id === state.currentLesson.id; }));
    var prog = getChapterProgress(chapter);
    var chHtml = '<div class="nav-chapter' + (isLast ? ' last-in-volume' : '') + '">' +
      '<div class="nav-chapter-title' + (isExpanded ? ' expanded' : '') + '" data-chapter="' + ci + '">' +
      '<span class="nav-arrow" aria-hidden="true"></span>' +
      '<span class="nav-chapter-name">' + chapter.chapter + '</span>' +
      '<span class="nav-ch-badge">' + prog.completed + '/' + prog.total + '</span></div>' +
      '<div class="nav-lessons' + (isExpanded ? ' expanded' : '') + '">';
    lessons.forEach(function(lesson, li) {
      var isActive = state.currentLesson && state.currentLesson.id === lesson.id;
      var isLastLesson = li === lessons.length - 1;
      // 三态：completed(全部作业完成)=绿色, visited(学过未完成)=黄色, 默认=灰色
      var isCompleted = state.completedLessons.indexOf(lesson.id) !== -1;
      var isVisited = !isCompleted && state.visitedPages && state.visitedPages.indexOf(lesson.id) !== -1;
      var stateClass = isCompleted ? ' completed' : (isVisited ? ' visited' : '');
      var dotContent = isCompleted ? '<i class="fas fa-check"></i>' : '';
      chHtml += '<div class="nav-lesson' + (isActive ? ' active' : '') + stateClass + (isLastLesson ? ' last-lesson' : '') + '" data-lesson="' + lesson.id + '">' +
        '<span class="nav-lesson-dot">' + dotContent + '</span>' +
        '<span class="nav-lesson-text">' + lesson.title + '</span></div>';
    });
    chHtml += '</div></div>';
    return chHtml;
  }

  // 使用卷结构渲染
  if (typeof COURSE_GROUPS !== 'undefined') {
    COURSE_GROUPS.forEach(function(group, gi) {
      var groupChaptersHtml = '';
      group.chapters.forEach(function(chapter, idx) {
        var globalIdx = COURSES.indexOf(chapter);
        var isLast = idx === group.chapters.length - 1;
        groupChaptersHtml += renderChapter(chapter, globalIdx, isLast);
      });

      var volumeColor = group.groupColor || '#fd79a8';
      var volumeIcon = group.groupIcon || '';
      var hasChapters = group.chapters && group.chapters.length > 0;
      var hasActiveCourse = hasChapters && group.chapters.some(function(ch) {
        return state.currentLesson && ch.lessons.some(function(l) { return l.id === state.currentLesson.id; });
      });
      // 默认折叠，仅当有活跃课程时展开该卷
      var isExpanded = hasActiveCourse;
      var toggleHtml = hasChapters
        ? '<div class="nav-volume-toggle"><i class="fas fa-chevron-right nav-vol-arrow"></i></div>'
        : '<div class="nav-volume-toggle"></div>';
      var bodyHtml = hasChapters
        ? '<div class="nav-volume-body' + (isExpanded ? ' expanded' : '') + '"><div class="nav-volume-tree">' + groupChaptersHtml + '</div></div>'
        : '';

      html += '<div class="nav-volume nav-volume-' + group.groupType + (isExpanded ? ' expanded' : '') + (hasChapters ? '' : ' nav-volume-empty') + '" style="--vol-color:' + volumeColor + '">' +
        '<div class="nav-volume-header">' +
        toggleHtml +
        '<span class="nav-volume-icon">' + volumeIcon + '</span>' +
        '<span class="nav-volume-name">' + escapeHtml(group.groupName) + '</span></div>' +
        bodyHtml +
        '</div>';
    });
  } else {
    COURSES.forEach(function(chapter, ci) {
      html += renderChapter(chapter, ci, ci === COURSES.length - 1);
    });
  }

  nav.innerHTML = html;

  // 绑定卷标题点击事件（独立折叠，不影响其他卷）
  $$('.nav-volume-header').forEach(function(el) {
    el.addEventListener('click', function() {
      var vol = this.closest('.nav-volume');
      var body = vol.querySelector('.nav-volume-body');
      if (!body) return;
      vol.classList.toggle('expanded');
      body.classList.toggle('expanded');
    });
  });

  // 绑定章节标题点击事件（独立展开/折叠）
  $$('.nav-chapter-title').forEach(function(el) {
    el.addEventListener('click', function() {
      var parent = this.closest('.nav-chapter');
      var lessonsPanel = parent.querySelector('.nav-lessons');
      this.classList.toggle('expanded');
      lessonsPanel.classList.toggle('expanded');
    });
  });
  $$('.nav-lesson').forEach(function(el) {
    el.addEventListener('click', function() { loadLesson(this.getAttribute('data-lesson')); });
  });

  // 全部展开/收起切换按钮
  var toggleBtn = document.getElementById('toggleAllBtn');
  if (toggleBtn) {
    toggleBtn.onclick = function() {
      _navAllExpanded = !_navAllExpanded;
      var icon = document.getElementById('toggleAllIcon');
      var text = document.getElementById('toggleAllText');
      if (_navAllExpanded) {
        $$('.nav-volume').forEach(function(v) { v.classList.add('expanded'); });
        $$('.nav-volume-body').forEach(function(b) { b.classList.add('expanded'); });
        $$('.nav-chapter-title').forEach(function(t) { t.classList.add('expanded'); });
        $$('.nav-lessons').forEach(function(l) { l.classList.add('expanded'); });
        if (icon) { icon.className = 'fas fa-compress-alt'; }
        if (text) { text.textContent = '收起'; }
        toggleBtn.title = '全部收起';
      } else {
        $$('.nav-volume').forEach(function(v) { v.classList.remove('expanded'); });
        $$('.nav-volume-body').forEach(function(b) { b.classList.remove('expanded'); });
        $$('.nav-chapter-title').forEach(function(t) { t.classList.remove('expanded'); });
        $$('.nav-lessons').forEach(function(l) { l.classList.remove('expanded'); });
        if (icon) { icon.className = 'fas fa-expand-alt'; }
        if (text) { text.textContent = '展开'; }
        toggleBtn.title = '全部展开';
      }
    };
  }

  // 为当前选中课程的父级章和卷添加高亮标记
  var activeLesson = nav.querySelector('.nav-lesson.active');
  if (activeLesson) {
    var parentChapter = activeLesson.closest('.nav-chapter');
    if (parentChapter) {
      parentChapter.classList.add('active-parent');
    }
    var parentVolume = activeLesson.closest('.nav-volume');
    if (parentVolume) {
      parentVolume.classList.add('active-parent');
    }
  }
}

// ===== 页面切换 =====
function switchPage(page) {
  state.currentPage = page;
  // 隐藏所有页面
  $('welcomePage').style.display = 'none';
  $('statsPage').style.display = 'none';
  $('lessonPage').style.display = 'none';

  // 更新底部导航按钮
  $$('.sidebar-nav-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-page') === page);
  });

  // 更新面包屑
  var breadcrumbMap = { home: '\ud83c\udfe0 首页', stats: '\ud83d\udcca 学习统计' };
  $('breadcrumb').innerHTML = '<span class="breadcrumb-item">' + (breadcrumbMap[page] || '\ud83c\udfe0 首页') + '</span>';

  if (page === 'home') {
    $('welcomePage').style.display = '';
    buildVolumeOverview();
    // 回到首页时折叠所有展开的章节
    $$('.nav-chapter-title.expanded').forEach(function(el) {
      el.classList.remove('expanded');
      var panel = el.closest('.nav-chapter').querySelector('.nav-lessons');
      if (panel) panel.classList.remove('expanded');
    });
  } else if (page === 'stats') {
    $('statsPage').style.display = '';
    renderStatsPage();
    if (!Config.hasVisitedPage('stats')) {
      state.visitedPages = Config.logPageVisit('stats');
    }
  }

  // 移动端关闭侧边栏
  $('sidebar').classList.remove('mobile-open');
  $('sidebarOverlay').classList.remove('show');
}
