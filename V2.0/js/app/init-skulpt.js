// ===== 初始化 =====
function hasSavedLearningHistory() {
  try {
    var lessonProgress = safeGet(STORAGE_KEYS.LESSON_PROGRESS, {});
    var completedLessons = safeGet(STORAGE_KEYS.COMPLETED_LESSONS, []);
    var challenges = safeGet(STORAGE_KEYS.CHALLENGE_PROGRESS, {});
    return Object.keys(lessonProgress).length > 0 || completedLessons.length > 0 || Object.keys(challenges).length > 0;
  } catch (e) {
    return false;
  }
}

function clearLessonQueryParam() {
  try {
    var url = new URL(window.location.href);
    if (!url.searchParams.has('lesson')) return;
    url.searchParams.delete('lesson');
    var cleanUrl = url.pathname + (url.searchParams.toString() ? '?' + url.searchParams.toString() : '') + url.hash;
    window.history.replaceState({}, document.title, cleanUrl);
  } catch (e) {}
}

function init() {
  initSkulpt();
  buildNav();
  buildVolumeOverview();
  bindEvents();
  if (typeof HomeworkSystem !== 'undefined') HomeworkSystem.init();
  initSidebarResize();
  updateProgress();
  updateStatsNumbers();
  setTimeout(function() {
    $('loader').classList.add('hidden');
    $('app').style.display = '';
    switchPage('home');

    // 自动跳转到指定课程
    var params = new URLSearchParams(window.location.search);
    var targetLesson = params.get('lesson');
    var hasLessonParam = !!targetLesson;
    if (!targetLesson && hasSavedLearningHistory()) {
      // 仅在确实存在学习记录时，才恢复上次学习的课程
      try { targetLesson = safeGet(STORAGE_KEYS.CURRENT_LESSON, null); } catch(e) {}
    }
    if (targetLesson) {
      var found = COURSES.some(function(ch) {
        return (ch.lessons || []).some(function(l) { return l.id === targetLesson; });
      });
      if (found) loadLesson(targetLesson);
    }
    if (hasLessonParam) clearLessonQueryParam();
  }, 2200);
}

// ===== Skulpt初始化 =====
function initSkulpt() {
  if (typeof Sk === 'undefined') { state.skulptReady = false; return; }
  state.skulptReady = true;
}

function configureSkulpt(outputFn) {
  Sk.configure({
    output: outputFn || function(text) { appendOutput(text); },
    read: function(x) {
      if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found: '" + x + "'";
      return Sk.builtinFiles["files"][x];
    },
    __future__: Sk.python3,
    execLimit: 10000
  });
}

// ===== 运行Python代码 =====
function runPython(code, callback) {
  if (!state.skulptReady) { simulateRun(code, callback); return; }
  state.isRunning = true;
  clearOutput();
  state.variables = {};
  updateVariablesDisplay({});

  configureSkulpt(function(text) { appendOutput(text); });

  var myPromise = Sk.misceval.asyncToPromise(function() {
    return Sk.importMainWithBody("<stdin>", false, code, true);
  });

  myPromise.then(function(mod) {
    state.isRunning = false;
    captureVariables(mod);
    // 运行计数 - 使用 Config 管理器
    state.runCount = Config.logCodeRun();
    if (callback) callback(true);
  }, function(err) {
    state.isRunning = false;
    appendOutput('\u274c 错误: ' + err.toString() + '\n', 'error');
    state.runCount = Config.logCodeRun();
    if (callback) callback(false);
  });
}

function captureVariables(mod) {
  var vars = {};
  if (mod && mod.$d) {
    var keys = Object.keys(mod.$d);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (key.startsWith('__') || key === 'json') continue;
      var val = mod.$d[key];
      if (val !== undefined) {
        try {
          var pyStr = Sk.builtin.repr(val);
          vars[key] = pyStr.v || String(pyStr);
        } catch(e) {
          try { vars[key] = String(val.v !== undefined ? val.v : val); } catch(e2) { vars[key] = '?'; }
        }
      }
    }
  }
  state.variables = vars;
  updateVariablesDisplay(vars);
}

function simulateRun(code, callback) {
  clearOutput();
  var vars = {};
  var lines = code.split('\n');
  lines.forEach(function(line) {
    line = line.trim();
    var printMatch = line.match(/^print\s*\((.+)\)$/);
    if (printMatch) {
      var content = printMatch[1];
      content = content.replace(/^["']|["']$/g, '');
      appendOutput(content + '\n');
    }
    var assignMatch = line.match(/^(\w+)\s*=\s*(.+)$/);
    if (assignMatch && !line.startsWith('def ') && !line.startsWith('class ')) {
      vars[assignMatch[1]] = assignMatch[2].trim();
    }
  });
  state.variables = vars;
  updateVariablesDisplay(vars);
  state.runCount = Config.logCodeRun();
  if (callback) callback(true);
}

