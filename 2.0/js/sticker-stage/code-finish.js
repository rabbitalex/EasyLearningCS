// ========== 结束运行 ==========
function finishRun() {
  stage.running = false;
  stage.stopFlag = false;
  $('runBtn').disabled = false;
  $('stopBtn').disabled = true;
}

// ========== 拦截Skulpt输出，提取命令 ==========
// 重写执行函数，从print输出中提取__CMD__命令
var originalExecute = executePythonCode;
executePythonCode = function(code) {
  if (typeof Sk === 'undefined') {
    log('❌ Python引擎未加载', 'error');
    finishRun();
    return;
  }

  var stickerNames = Object.keys(stage.stickers);
  var apiCode = buildAPICode(stickerNames);
  var fullCode = apiCode + '\n' + code;
  var commands = [];
  var collectedVars = {};

  Sk.configure({
    output: function(text) {
      var lines = text.split('\n');
      lines.forEach(function(line) {
        line = line.trim();
        if (!line) return;
        if (line.startsWith('__CMD__:')) {
          try {
            var cmd = JSON.parse(line.substring(8));
            commands.push(JSON.stringify(cmd));
          } catch(e) {}
        } else if (line.startsWith('__VARS__:')) {
          try {
            collectedVars = JSON.parse(line.substring(9));
          } catch(e) {}
        } else {
          log('📤 ' + line);
        }
      });
    },
    read: function(x) {
      if (Sk.builtinFiles === undefined || Sk.builtinFiles['files'][x] === undefined)
        throw 'File not found: ' + x;
      return Sk.builtinFiles['files'][x];
    },
    __future__: Sk.python3,
    execLimit: 60000
  });

  Sk.misceval.asyncToPromise(function() {
    return Sk.importMainWithBody('<stdin>', false, fullCode, true);
  }).then(function() {
    executeCommandQueue(commands, 0, function() {
      log('✅ 代码执行完毕！', 'success');
      updateVarsPanel(collectedVars);
      finishRun();
    });
  }, function(err) {
    log('❌ ' + translateError(err.toString()), 'error');
    updateVarsPanel(collectedVars);
    finishRun();
  });
};

