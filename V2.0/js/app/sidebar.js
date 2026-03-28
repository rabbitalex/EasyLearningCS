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
    html += '<div class="volume-card-header">';
    html += '<div class="volume-card-visual">';
    html += '<span class="volume-card-icon">' + group.groupIcon + '</span>';
    html += '<div class="volume-card-pct" style="color:' + color + '">' + pct + '%</div>';
    html += '</div>';
    html += '<div class="volume-card-info">';
    html += '<div class="volume-card-name">' + escapeHtml(group.groupName) + '</div>';
    html += '</div></div>';
    html += '<div class="volume-card-progress"><div class="volume-card-progress-fill" style="width:' + pct + '%;background:' + color + '"></div></div>';
    html += '</div>';
  });
  container.innerHTML = html;

  // 绑定卡片点击 - 跳到该卷第一个课程
  $$('.volume-card').forEach(function(card) {
    card.addEventListener('click', function() {
      var idx = parseInt(this.getAttribute('data-vol-idx'));
      var group = COURSE_GROUPS[idx];
      if (group && group.chapters.length > 0 && group.chapters[0].lessons.length > 0) {
        loadLesson(group.chapters[0].lessons[0].id);
      }
    });
  });
}

