// 课程数据主入口文件 - 从注册表自动构建
// 在所有课程文件和 registry.js 之后加载

function parseChapterOrder(chapter) {
  var title = chapter && chapter.chapter ? String(chapter.chapter) : '';
  var match = title.match(/^第([零一二三四五六七八九十两\d]+)章/);
  if (match) {
    var raw = match[1];
    if (/^\d+$/.test(raw)) return parseInt(raw, 10);
    var numberMap = {
      '零': 0,
      '一': 1,
      '二': 2,
      '两': 2,
      '三': 3,
      '四': 4,
      '五': 5,
      '六': 6,
      '七': 7,
      '八': 8,
      '九': 9
    };
    if (raw === '十') return 10;
    if (raw.indexOf('十') !== -1) {
      var parts = raw.split('十');
      var tens = parts[0] === '' ? 1 : (numberMap[parts[0]] || 0);
      var units = parts[1] === '' ? 0 : (numberMap[parts[1]] || 0);
      return tens * 10 + units;
    }
    if (Object.prototype.hasOwnProperty.call(numberMap, raw)) {
      return numberMap[raw];
    }
  }
  if (typeof chapter.chapterNum === 'number') return chapter.chapterNum;
  return Number.MAX_SAFE_INTEGER;
}

const COURSE_GROUPS = Object.keys(VOLUME_META).map(function(key) {
  var meta = VOLUME_META[key];
  var chapters = (COURSE_REGISTRY[key] || []).slice().sort(function(a, b) {
    return parseChapterOrder(a) - parseChapterOrder(b);
  });
  return {
    groupName: meta.groupName,
    groupType: key,
    groupIcon: meta.groupIcon,
    groupColor: meta.groupColor,
    chapters: chapters,
    isComingSoon: chapters.length === 0
  };
});

const COURSES = [];
COURSE_GROUPS.forEach(function(g) {
  g.chapters.forEach(function(ch) { COURSES.push(ch); });
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = COURSES;
}
