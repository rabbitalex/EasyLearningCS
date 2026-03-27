// ===== 导航构建 =====
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
      '<i class="fas fa-chevron-right nav-arrow"></i>' +
      '<span class="nav-chapter-name">' + chapter.chapter + '</span>' +
      '<span class="nav-ch-badge">' + prog.completed + '/' + prog.total + '</span></div>' +
      '<div class="nav-lessons' + (isExpanded ? ' expanded' : '') + '">';
    lessons.forEach(function(lesson, li) {
      var isCompleted = state.completedLessons.indexOf(lesson.id) !== -1;
      var isActive = state.currentLesson && state.currentLesson.id === lesson.id;
      var isLastLesson = li === lessons.length - 1;
      chHtml += '<div class="nav-lesson' + (isActive ? ' active' : '') + (isCompleted ? ' completed' : '') + (isLastLesson ? ' last-lesson' : '') + '" data-lesson="' + lesson.id + '">' +
        '<span class="nav-lesson-dot">' + (isCompleted ? '<i class="fas fa-check"></i>' : '') + '</span>' +
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
      if (groupChaptersHtml) {
        var volumeColor = group.groupColor || '#6c5ce7';
        var volumeIcon = group.groupIcon || '';
        var hasActiveCourse = group.chapters.some(function(ch) {
          return state.currentLesson && ch.lessons.some(function(l) { return l.id === state.currentLesson.id; });
        });
        // 默认展开所有卷，让用户可以点击折叠
        var isExpanded = true;
        html += '<div class="nav-volume nav-volume-' + group.groupType + (hasActiveCourse ? ' expanded' : ' expanded') + '" style="--vol-color:' + volumeColor + '">' +
          '<div class="nav-volume-header">' +
          '<div class="nav-volume-toggle"><i class="fas fa-chevron-right nav-vol-arrow"></i></div>' +
          '<span class="nav-volume-icon">' + volumeIcon + '</span>' +
          '<span class="nav-volume-name">' + group.groupName + '</span></div>' +
          '<div class="nav-volume-body expanded">' +
          '<div class="nav-volume-tree">' + groupChaptersHtml + '</div></div></div>';
      }
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
      vol.classList.toggle('expanded');
      var body = vol.querySelector('.nav-volume-body');
      body.classList.toggle('expanded');
    });
  });

  // 绑定章节标题点击事件（独立展开/折叠，不使用手风琴）
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

  // 全部展开/收起按钮
  var expandAllBtn = document.getElementById('expandAllBtn');
  var collapseAllBtn = document.getElementById('collapseAllBtn');
  if (expandAllBtn) {
    expandAllBtn.onclick = function() {
      $$('.nav-volume').forEach(function(v) { v.classList.add('expanded'); });
      $$('.nav-volume-body').forEach(function(b) { b.classList.add('expanded'); });
      $$('.nav-chapter-title').forEach(function(t) { t.classList.add('expanded'); });
      $$('.nav-lessons').forEach(function(l) { l.classList.add('expanded'); });
    };
  }
  if (collapseAllBtn) {
    collapseAllBtn.onclick = function() {
      $$('.nav-volume').forEach(function(v) { v.classList.remove('expanded'); });
      $$('.nav-volume-body').forEach(function(b) { b.classList.remove('expanded'); });
      $$('.nav-chapter-title').forEach(function(t) { t.classList.remove('expanded'); });
      $$('.nav-lessons').forEach(function(l) { l.classList.remove('expanded'); });
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
    buildCourseGrid();
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

