// 课程数据主入口文件 - 从注册表自动构建
// 在所有课程文件和 registry.js 之后加载

const COURSE_GROUPS = Object.keys(VOLUME_META).map(function(key) {
  var meta = VOLUME_META[key];
  return {
    groupName: meta.groupName,
    groupType: key,
    groupIcon: meta.groupIcon,
    groupColor: meta.groupColor,
    chapters: COURSE_REGISTRY[key] || []
  };
}).filter(function(g) { return g.chapters.length > 0; });

const COURSES = [];
COURSE_GROUPS.forEach(function(g) {
  g.chapters.forEach(function(ch) { COURSES.push(ch); });
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = COURSES;
}
