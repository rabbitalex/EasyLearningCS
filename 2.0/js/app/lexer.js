// ===== 全局词法分析器函数（供课程步骤中的交互组件调用）=====
function lexerTokenize(el) {
  var code = el.value;
  var out = document.getElementById('lexerOutput');
  if (!out) return;
  var tokens = [];
  var i = 0;
  var kws = ['if','else','elif','for','while','def','class','return','import','from',
             'print','in','not','and','or','True','False','None','try','except',
             'with','as','pass','break','continue','lambda','global','del','raise',
             'yield','finally'];
  while (i < code.length) {
    // 跳过空格
    if (code[i] === ' ' || code[i] === '\t') { i++; continue; }
    // 关键字匹配
    var found = false;
    for (var k = 0; k < kws.length; k++) {
      if (code.substr(i, kws[k].length) === kws[k] &&
          (i + kws[k].length >= code.length || !/[a-zA-Z0-9_]/.test(code[i + kws[k].length]))) {
        tokens.push({ v: kws[k], t: '关键字', c: 'token-kw' });
        i += kws[k].length;
        found = true;
        break;
      }
    }
    if (found) continue;
    // 标识符
    if (/[a-zA-Z_]/.test(code[i])) {
      var w = '';
      while (i < code.length && /[a-zA-Z0-9_]/.test(code[i])) { w += code[i]; i++; }
      tokens.push({ v: w, t: '标识符', c: 'token-id' });
      continue;
    }
    // 数字
    if (/[0-9]/.test(code[i])) {
      var n = '';
      while (i < code.length && /[0-9.]/.test(code[i])) { n += code[i]; i++; }
      tokens.push({ v: n, t: n.indexOf('.') >= 0 ? '浮点数' : '整数', c: 'token-num' });
      continue;
    }
    // 字符串
    if (code[i] === '"' || code[i] === "'") {
      var q = code[i];
      var s = q;
      i++;
      while (i < code.length && code[i] !== q) { s += code[i]; i++; }
      if (i < code.length) { s += code[i]; i++; }
      tokens.push({ v: s, t: '字符串', c: 'token-str' });
      continue;
    }
    // 运算符
    var ops = '+-*/%=<>!&|^~:,.()[]{}@;';
    if (ops.indexOf(code[i]) >= 0) {
      var op = code[i];
      i++;
      if (i < code.length && (op + code[i] === '==' || op + code[i] === '!=' ||
          op + code[i] === '<=' || op + code[i] === '>=' || op + code[i] === '**' ||
          op + code[i] === '//' || op + code[i] === '+=' || op + code[i] === '-=')) {
        op += code[i]; i++;
      }
      tokens.push({ v: op, t: '运算符', c: 'token-op' });
      continue;
    }
    i++;
  }
  // 渲染Token列表
  var html = '';
  tokens.forEach(function(tk, idx) {
    html += '<div class="token-chip ' + tk.c + ' t0-tok-pop" style="animation-delay:' +
            idx * 0.05 + 's">' + tk.v.replace(/</g, '&lt;') +
            ' <span class="token-type">' + tk.t + '</span></div>';
  });
  out.innerHTML = html || '<span style="color:#555">输入代码查看Token...</span>';
  // 渲染语法高亮
  var colorMap = { kw: '#00cec9', id: '#a29bfe', num: '#fdcb6e', op: '#fd79a8', str: '#00b894' };
  html = '';
  tokens.forEach(function(tk) {
    var colorKey = tk.c.split('-')[1];
    html += '<span style="color:' + colorMap[colorKey] + ';font-weight:700">' +
            tk.v.replace(/</g, '&lt;') + '</span> ';
  });
  var hc = document.getElementById('lexerHighlight');
  if (hc) hc.innerHTML = html;
}
