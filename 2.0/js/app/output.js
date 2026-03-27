// ===== 输出管理 =====
function clearOutput() {
  $('outputArea').innerHTML = '';
  // 统一视图：移除输出区段高亮
  var outputSection = document.querySelector('.section-output');
  if (outputSection) outputSection.classList.remove('has-output');
}
function appendOutput(text, type) {
  var area = $('outputArea');
  if (!text) return;
  var lines = text.split('\n');
  for (var i = 0; i < lines.length; i++) {
    if (lines[i] === '' && i === lines.length - 1) continue;
    var line = document.createElement('div');
    line.className = 'output-line' + (type ? ' output-' + type : '');
    line.textContent = lines[i];
    area.appendChild(line);
  }
  area.scrollTop = area.scrollHeight;
  // 统一视图：为输出区段添加高亮
  var outputSection = document.querySelector('.section-output');
  if (outputSection) outputSection.classList.add('has-output');
}

// ===== 变量显示 =====
function updateVariablesDisplay(vars) {
  var area = $('variablesArea');
  var varSection = document.querySelector('.section-variables');
  if (!vars || Object.keys(vars).length === 0) {
    area.innerHTML = '<div class="empty-variables"><i class="fas fa-box-open"></i><p>运行代码后，变量会在这里显示</p></div>';
    if (varSection) varSection.classList.remove('has-vars');
    return;
  }
  if (varSection) varSection.classList.add('has-vars');
  var html = '';
  var keys = Object.keys(vars);
  for (var i = 0; i < keys.length; i++) {
    var name = keys[i];
    if (name.startsWith('__') || name === 'json') continue;
    var val = String(vars[name]);
    var typeInfo = getTypeInfo(val);
    html += '<div class="var-item highlight">' +
      '<div class="var-icon type-' + typeInfo.type + '"><i class="' + typeInfo.icon + '"></i></div>' +
      '<div class="var-info"><div class="var-name-label">' + escapeHtml(name) + '</div>' +
      '<div class="var-type-label">' + typeInfo.label + '</div></div>' +
      '<div class="var-value-display" title="' + escapeHtml(val) + '">' + escapeHtml(truncate(val, 30)) + '</div></div>';
  }
  area.innerHTML = html || '<div class="empty-variables"><i class="fas fa-box-open"></i><p>没有检测到用户变量</p></div>';
}
function truncate(s, len) { return s.length > len ? s.substring(0, len) + '...' : s; }
function getTypeInfo(val) {
  val = String(val);
  if (val === 'True' || val === 'False') return { type: 'bool', icon: 'fas fa-toggle-on', label: 'bool 布尔值' };
  if (val === 'None') return { type: 'none', icon: 'fas fa-ban', label: 'NoneType' };
  if (/^<(function|class|method)/.test(val)) return { type: 'none', icon: 'fas fa-cog', label: 'function/class' };
  if ((val.startsWith("'") && val.endsWith("'")) || (val.startsWith('"') && val.endsWith('"')))
    return { type: 'str', icon: 'fas fa-font', label: 'str 字符串' };
  if (val.startsWith('[')) return { type: 'list', icon: 'fas fa-list', label: 'list 列表' };
  if (val.startsWith('{')) return { type: 'dict', icon: 'fas fa-book', label: 'dict 字典' };
  if (val.startsWith('(')) return { type: 'tuple', icon: 'fas fa-layer-group', label: 'tuple 元组' };
  if (val.indexOf('.') !== -1 && !isNaN(parseFloat(val))) return { type: 'float', icon: 'fas fa-percentage', label: 'float 浮点数' };
  if (!isNaN(parseInt(val)) && /^-?\d+$/.test(val)) return { type: 'int', icon: 'fas fa-hashtag', label: 'int 整数' };
  return { type: 'str', icon: 'fas fa-question', label: 'object' };
}
function escapeHtml(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

