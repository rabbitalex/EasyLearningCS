// ========== 变量跟踪面板更新 ==========
function updateVarsPanel(vars) {
  var container = $('varsTable');
  if (!container) return;

  // 过滤掉内部变量（以__开头）和贴纸名称变量
  var stickerNames = Object.keys(stage.stickers);
  var entries = Object.keys(vars).filter(function(k) {
    return !k.startsWith('__') && stickerNames.indexOf(k) === -1;
  });

  if (entries.length === 0) {
    container.innerHTML = '<div class="vars-empty"><i class="fas fa-eye-slash"></i><p>暂无用户变量</p><p class="vars-empty-sub">在代码中定义变量后，会显示在这里</p></div>';
    return;
  }

  // 构建变量表格
  var html = '<div class="vars-grid">';
  html += '<div class="vars-grid-header"><span>变量名</span><span>值</span><span>类型</span></div>';
  entries.forEach(function(key) {
    var val = vars[key];
    var type = val.type || 'unknown';
    var value = val.value !== undefined ? val.value : '—';
    // 类型中文化
    var typeMap = {
      'int': '整数', 'float': '小数', 'str': '文字',
      'bool': '布尔', 'list': '列表', 'tuple': '元组',
      'dict': '字典', 'NoneType': 'None', 'function': '函数'
    };
    var typeCN = typeMap[type] || type;
    html += '<div class="var-row">';
    html += '<span class="var-name">' + escapeHtml(key) + '</span>';
    html += '<span class="var-value">' + escapeHtml(String(value)) + '</span>';
    html += '<span class="var-type">' + typeCN + '</span>';
    html += '</div>';
  });
  html += '</div>';
  container.innerHTML = html;

  // 如果当前不在变量Tab，显示徽章提示
  var varsTab = document.querySelector('.output-tab[data-tab="vars"]');
  var varsPane = $('varsPane');
  if (varsTab && varsPane && !varsPane.classList.contains('active')) {
    var badge = $('varsBadge');
    if (badge) {
      badge.textContent = entries.length;
      badge.style.display = 'inline-block';
    }
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ========== 错误信息汉化 ==========
function translateError(msg) {
  // 提取行号
  var lineMatch = msg.match(/on line (\d+)/);
  var lineHint = lineMatch ? '（第 ' + lineMatch[1] + ' 行）' : '';

  // NameError：变量/贴纸未定义
  var nameMatch = msg.match(/NameError.*name '(\w+)' is not defined/);
  if (nameMatch) {
    return '找不到贴纸或变量 "' + nameMatch[1] + '"！请先把贴纸拖到舞台，并确认名称正确。' + lineHint;
  }

  // SyntaxError
  if (msg.includes('SyntaxError')) {
    if (msg.includes('invalid syntax')) return '语法错误：代码写法有误，请检查括号、冒号是否完整。' + lineHint;
    if (msg.includes('unexpected EOF')) return '语法错误：代码不完整，可能缺少结束括号或冒号。' + lineHint;
    if (msg.includes('unexpected indent')) return '缩进错误：这一行多了空格，请检查缩进是否正确。' + lineHint;
    if (msg.includes('unindent does not match')) return '缩进错误：缩进不一致，请统一使用4个空格。' + lineHint;
    if (msg.includes('expected an indented block')) return '缩进错误：冒号后面的代码块需要缩进（加4个空格）。' + lineHint;
    return '语法错误：代码格式有问题，请仔细检查。' + lineHint;
  }

  // IndentationError
  if (msg.includes('IndentationError')) {
    if (msg.includes('unexpected indent')) return '缩进错误：这一行多了空格，请删除多余的缩进。' + lineHint;
    if (msg.includes('unindent')) return '缩进错误：缩进不一致，请统一使用4个空格。' + lineHint;
    return '缩进错误：请检查代码的缩进是否正确（用4个空格）。' + lineHint;
  }

  // TypeError
  if (msg.includes('TypeError')) {
    var typeMatch = msg.match(/TypeError[:\s]+(.+?)(?:\s+on line|$)/);
    if (msg.includes('takes') && msg.includes('argument')) return '参数错误：函数的参数数量不对，请检查括号里的参数。' + lineHint;
    if (msg.includes('unsupported operand')) return '类型错误：不能对这种类型的数据进行运算，请检查变量类型。' + lineHint;
    if (msg.includes('not callable')) return '类型错误：这个名字不是函数，不能用括号调用。' + lineHint;
    if (msg.includes('must be str')) return '类型错误：这里需要文字（字符串），请用引号包裹内容。' + lineHint;
    if (msg.includes('must be int') || msg.includes('must be float')) return '类型错误：这里需要数字，请输入数字而不是文字。' + lineHint;
    return '类型错误：数据类型不匹配，请检查参数是否正确。' + lineHint;
  }

  // ValueError
  if (msg.includes('ValueError')) {
    if (msg.includes('invalid literal')) return '数值错误：无法将文字转换为数字，请检查输入的值。' + lineHint;
    return '数值错误：参数的值不合法，请检查输入的数字范围。' + lineHint;
  }

  // ZeroDivisionError
  if (msg.includes('ZeroDivisionError')) {
    return '除零错误：不能除以 0，请检查除法运算。' + lineHint;
  }

  // IndexError
  if (msg.includes('IndexError')) {
    return '索引错误：列表下标超出范围，请检查列表长度。' + lineHint;
  }

  // KeyError
  if (msg.includes('KeyError')) {
    var keyMatch = msg.match(/KeyError[:\s]+'?([^'\s]+)'?/);
    return '键错误：字典中找不到键 ' + (keyMatch ? '"' + keyMatch[1] + '"' : '') + '，请检查键名是否正确。' + lineHint;
  }

  // AttributeError
  if (msg.includes('AttributeError')) {
    return '属性错误：对象没有这个属性或方法，请检查函数名是否拼写正确。' + lineHint;
  }

  // ImportError / ModuleNotFoundError
  if (msg.includes('ImportError') || msg.includes('ModuleNotFoundError')) {
    var modMatch = msg.match(/No module named '?([^'\s]+)'?/);
    if (modMatch) return '导入错误：找不到模块 "' + modMatch[1] + '"，目前支持 math、random 等基础模块。' + lineHint;
    return '导入错误：无法导入该模块，请检查模块名称。' + lineHint;
  }

  // RecursionError
  if (msg.includes('RecursionError') || msg.includes('maximum recursion')) {
    return '递归错误：函数调用层数太多，可能出现了无限递归。' + lineHint;
  }

  // NotImplementedError
  if (msg.includes('NotImplementedError')) {
    if (msg.includes('dir')) return '暂不支持：dir() 函数在此环境中不可用，请换用其他方式检查变量。' + lineHint;
    return '功能未支持：该功能在当前Python环境中暂不可用。' + lineHint;
  }

  // TimeoutError / execLimit
  if (msg.includes('execLimit') || msg.includes('Execution exceeded')) {
    return '超时错误：代码运行时间太长，请检查是否有死循环。';
  }

  // 通用兜底：尝试提取核心信息
  var colonIdx = msg.lastIndexOf(':');
  if (colonIdx !== -1) {
    var core = msg.substring(colonIdx + 1).trim();
    if (core && core.length < 100) return '运行错误：' + core + lineHint;
  }
  return '运行错误：' + msg;
}

