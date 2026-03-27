// ===== 首页卷概览 =====
function buildVolumeOverview() {
  var container = $('volumeOverview');
  if (!container || typeof COURSE_GROUPS === 'undefined') return;

  var html = '';
  COURSE_GROUPS.forEach(function(group, gi) {
    var totalLessons = 0, completedLessons = 0;
    group.chapters.forEach(function(ch) {
      totalLessons += ch.lessons.length;
      ch.lessons.forEach(function(l) {
        if (state.completedLessons.indexOf(l.id) !== -1) completedLessons++;
      });
    });
    var pct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    var color = group.groupColor || '#FF9800';

    html += '<div class="volume-card" style="--vol-card-color:' + color + '" data-vol-idx="' + gi + '">';
    html += '<div class="volume-card-pct" style="color:' + color + '">' + pct + '%</div>';
    html += '<div class="volume-card-header">';
    html += '<span class="volume-card-icon">' + group.groupIcon + '</span>';
    html += '<div class="volume-card-info">';
    html += '<div class="volume-card-name">' + escapeHtml(group.groupName) + '</div>';
    html += '<div class="volume-card-meta">' + group.chapters.length + ' 章 · ' + totalLessons + ' 课时</div>';
    html += '</div></div>';
    html += '<div class="volume-card-progress"><div class="volume-card-progress-fill" style="width:' + pct + '%;background:' + color + '"></div></div>';
    html += '<div class="volume-card-chapters">';
    group.chapters.forEach(function(ch) {
      var chProg = 0;
      ch.lessons.forEach(function(l) {
        if (state.completedLessons.indexOf(l.id) !== -1) chProg++;
      });
      var chDone = chProg === ch.lessons.length && ch.lessons.length > 0;
      html += '<div class="volume-card-chip' + (chDone ? ' completed' : '') + '" data-first-lesson="' + (ch.lessons.length > 0 ? ch.lessons[0].id : '') + '">';
      html += '<span class="chip-icon">' + ch.icon + '</span>';
      html += '<span>' + escapeHtml(ch.chapter.replace(/^第.+章[：:]\s*/, '')) + '</span>';
      if (chDone) html += ' <i class="fas fa-check" style="color:#69F0AE;font-size:0.55rem"></i>';
      html += '</div>';
    });
    html += '</div></div>';
  });
  container.innerHTML = html;

  // 绑定卡片点击 - 跳到该卷第一个课程
  $$('.volume-card').forEach(function(card) {
    card.addEventListener('click', function(e) {
      // 如果点击的是chip，跳到chip的课程
      var chip = e.target.closest('.volume-card-chip');
      if (chip) {
        var lessonId = chip.getAttribute('data-first-lesson');
        if (lessonId) { loadLesson(lessonId); return; }
      }
      var idx = parseInt(this.getAttribute('data-vol-idx'));
      var group = COURSE_GROUPS[idx];
      if (group && group.chapters.length > 0 && group.chapters[0].lessons.length > 0) {
        loadLesson(group.chapters[0].lessons[0].id);
      }
    });
  });
}

