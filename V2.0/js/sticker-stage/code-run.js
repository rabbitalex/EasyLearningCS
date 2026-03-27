// ========== 更新行号 ==========
function updateLineNums() {
  var lines = $('codeEditor').value.split('\n');
  var nums = '';
  for (var i = 1; i <= Math.max(lines.length, 15); i++) {
    nums += i + '\n';
  }
  $('lineNums').textContent = nums;
}

// ========== 控制台输出 ==========
function log(msg, type) {
  var out = $('consoleOutput');
  var line = document.createElement('div');
  line.className = 'console-line' + (type ? ' ' + type : '');
  line.innerHTML = msg;
  out.appendChild(line);
  out.scrollTop = out.scrollHeight;
}

// ========== 停止代码 ==========
function stopCode() {
  stage.stopFlag = true;
  stage.running = false;
  $('runBtn').disabled = false;
  $('stopBtn').disabled = true;
  log('⏹ 代码已停止', 'info');
}

// ========== 运行代码 ==========
function runCode() {
  if (stage.running) return;
  var code = $('codeEditor').value.trim();
  if (!code) { log('⚠️ 请先输入代码！', 'error'); return; }

  stage.running = true;
  stage.stopFlag = false;
  $('runBtn').disabled = true;
  $('stopBtn').disabled = false;
  log('▶ 开始运行...', 'info');

  // 构建Python执行环境
  executePythonCode(code);
}

// ========== Python代码执行引擎 ==========
function executePythonCode(code) {
  // 将代码转换为可执行的命令序列
  // 我们用一个特殊的方式：把Python代码中的贴纸操作转换为JS命令队列
  var commands = [];
  var outputLines = [];

  // 预处理：将贴纸名称替换为字符串
  // 支持的函数：move, move_by, rotate, scale, opacity, show, hide,
  //             animate_move, animate_rotate, animate_scale,
  //             bounce, shake, spin, wait, say, get_x, get_y, get_size, print

  // 使用Skulpt执行Python，通过特殊输出协议传递命令
  if (typeof Sk === 'undefined') {
    log('❌ Python引擎未加载，请检查网络连接', 'error');
    finishRun();
    return;
  }

  // 注入贴纸控制API到Python环境
  var stickerNames = Object.keys(stage.stickers);
  var apiCode = buildAPICode(stickerNames);
  var fullCode = apiCode + '\n' + code;

  var outputBuffer = [];

  Sk.configure({
    output: function(text) {
      if (text.trim()) outputBuffer.push(text.trim());
    },
    read: function(x) {
      if (Sk.builtinFiles === undefined || Sk.builtinFiles['files'][x] === undefined)
        throw 'File not found: ' + x;
      return Sk.builtinFiles['files'][x];
    },
    __future__: Sk.python3,
    execLimit: 30000
  });

  Sk.misceval.asyncToPromise(function() {
    return Sk.importMainWithBody('<stdin>', false, fullCode, true);
  }).then(function(mod) {
    // 执行完毕，处理命令队列
    var cmds = window.__stickerCommands__ || [];
    window.__stickerCommands__ = [];
    outputBuffer.forEach(function(line) { log('📤 ' + line); });
    executeCommandQueue(cmds, 0, function() {
      log('✅ 代码执行完毕！', 'success');
      finishRun();
    });
  }, function(err) {
    log('❌ 错误: ' + err.toString(), 'error');
    finishRun();
  });
}

