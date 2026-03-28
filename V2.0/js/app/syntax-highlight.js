// app.js - Python编程课程核心引擎（升级版 v2.0）

// ===== Python 语法高亮引擎 =====
function pythonSyntaxHighlight(code) {
  // 先进行HTML转义
  function esc(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  var tokens = [];
  var i = 0;
  var len = code.length;

  var keywords = ['False','None','True','and','as','assert','async','await','break',
    'class','continue','def','del','elif','else','except','finally','for','from',
    'global','if','import','in','is','lambda','nonlocal','not','or','pass','raise',
    'return','try','while','with','yield'];
  var builtins = ['print','len','range','int','str','float','list','dict','set','tuple',
    'type','input','open','abs','max','min','sum','round','sorted','reversed','enumerate',
    'zip','map','filter','isinstance','issubclass','hasattr','getattr','setattr',
    'super','property','staticmethod','classmethod','bool','chr','ord','hex','oct','bin',
    'format','id','hash','repr','iter','next','any','all','dir','vars','globals','locals',
    'eval','exec','compile','help','exit','quit','Exception','ValueError','TypeError',
    'KeyError','IndexError','AttributeError','ImportError','FileNotFoundError',
    'RuntimeError','StopIteration','NameError','ZeroDivisionError','OSError'];
  var keywordSet = {};
  var builtinSet = {};
  keywords.forEach(function(k) { keywordSet[k] = true; });
  builtins.forEach(function(b) { builtinSet[b] = true; });

  while (i < len) {
    var ch = code[i];

    // 注释
    if (ch === '#') {
      var start = i;
      while (i < len && code[i] !== '\n') i++;
      tokens.push('<span class="py-comment">' + esc(code.slice(start, i)) + '</span>');
      continue;
    }

    // 装饰器
    if (ch === '@' && (i === 0 || code[i-1] === '\n' || /\s/.test(code[i-1]))) {
      var start = i;
      i++;
      while (i < len && /[a-zA-Z0-9_.]/.test(code[i])) i++;
      tokens.push('<span class="py-decorator">' + esc(code.slice(start, i)) + '</span>');
      continue;
    }

    // 三引号字符串
    if ((ch === '"' && code[i+1] === '"' && code[i+2] === '"') ||
        (ch === "'" && code[i+1] === "'" && code[i+2] === "'")) {
      var q3 = code.slice(i, i+3);
      var start = i;
      var isF = (i > 0 && (code[i-1] === 'f' || code[i-1] === 'F'));
      i += 3;
      while (i < len) {
        if (code[i] === '\\') { i += 2; continue; }
        if (code.slice(i, i+3) === q3) { i += 3; break; }
        i++;
      }
      tokens.push('<span class="py-string">' + esc(code.slice(start, i)) + '</span>');
      continue;
    }

    // 单/双引号字符串（含f-string）
    if (ch === '"' || ch === "'") {
      var q = ch;
      var start = i;
      i++;
      while (i < len && code[i] !== q && code[i] !== '\n') {
        if (code[i] === '\\') { i++; }
        i++;
      }
      if (i < len && code[i] === q) i++;
      tokens.push('<span class="py-string">' + esc(code.slice(start, i)) + '</span>');
      continue;
    }

    // f-string 前缀
    if ((ch === 'f' || ch === 'F') && (code[i+1] === '"' || code[i+1] === "'")) {
      tokens.push('<span class="py-string">' + esc(ch) + '</span>');
      i++;
      continue;
    }

    // 数字
    if (/[0-9]/.test(ch) || (ch === '.' && i+1 < len && /[0-9]/.test(code[i+1]))) {
      var start = i;
      if (ch === '0' && i+1 < len && (code[i+1] === 'x' || code[i+1] === 'X' || code[i+1] === 'b' || code[i+1] === 'B' || code[i+1] === 'o' || code[i+1] === 'O')) {
        i += 2;
        while (i < len && /[0-9a-fA-F_]/.test(code[i])) i++;
      } else {
        while (i < len && /[0-9_.]/.test(code[i])) i++;
        if (i < len && (code[i] === 'e' || code[i] === 'E')) {
          i++;
          if (i < len && (code[i] === '+' || code[i] === '-')) i++;
          while (i < len && /[0-9]/.test(code[i])) i++;
        }
        if (i < len && (code[i] === 'j' || code[i] === 'J')) i++;
      }
      tokens.push('<span class="py-number">' + esc(code.slice(start, i)) + '</span>');
      continue;
    }

    // 标识符/关键字
    if (/[a-zA-Z_]/.test(ch)) {
      var start = i;
      while (i < len && /[a-zA-Z0-9_]/.test(code[i])) i++;
      var word = code.slice(start, i);

      if (word === 'self' || word === 'cls') {
        tokens.push('<span class="py-self">' + esc(word) + '</span>');
      } else if (word === 'True' || word === 'False' || word === 'None') {
        tokens.push('<span class="py-bool">' + esc(word) + '</span>');
      } else if (word.length > 3 && word.slice(0,2) === '__' && word.slice(-2) === '__') {
        tokens.push('<span class="py-magic">' + esc(word) + '</span>');
      } else if (keywordSet[word]) {
        // 检查是否是 def 或 class 后面跟着函数/类名
        tokens.push('<span class="py-keyword">' + esc(word) + '</span>');
        if (word === 'def' || word === 'class') {
          // 跳过空格，着色函数/类名
          var spaceStart = i;
          while (i < len && /\s/.test(code[i])) i++;
          if (i > spaceStart) tokens.push(esc(code.slice(spaceStart, i)));
          var nameStart = i;
          while (i < len && /[a-zA-Z0-9_]/.test(code[i])) i++;
          if (i > nameStart) {
            var cls = word === 'class' ? 'py-class-name' : 'py-func-name';
            tokens.push('<span class="' + cls + '">' + esc(code.slice(nameStart, i)) + '</span>');
          }
        }
      } else if (builtinSet[word]) {
        tokens.push('<span class="py-builtin">' + esc(word) + '</span>');
      } else {
        tokens.push(esc(word));
      }
      continue;
    }

    // 运算符
    if ('+-*/%=<>!&|^~'.indexOf(ch) !== -1) {
      var start = i;
      i++;
      // 多字符运算符
      while (i < len && '+-*/%=<>!&|^~'.indexOf(code[i]) !== -1) i++;
      tokens.push('<span class="py-operator">' + esc(code.slice(start, i)) + '</span>');
      continue;
    }

    // 其他字符（括号、逗号、冒号、空格、换行等）
    tokens.push(esc(ch));
    i++;
  }

  return tokens.join('');
}

// 更新语法高亮层
function updateHighlight() {
  var code = document.getElementById('codeEditor').value;
  var highlightEl = document.getElementById('codeHighlightCode');
  if (!highlightEl) return;
  highlightEl.innerHTML = pythonSyntaxHighlight(code) + '\n';
}

// 同步高亮层滚动
function syncHighlightScroll() {
  var editor = document.getElementById('codeEditor');
  var highlight = document.getElementById('codeHighlight');
  if (editor && highlight) {
    highlight.scrollTop = editor.scrollTop;
    highlight.scrollLeft = editor.scrollLeft;
  }
}
