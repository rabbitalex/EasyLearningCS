    // ==================== UI 交互 ====================
    function addOutput(text, type, lineNum) {
      const content = document.getElementById('outputContent');
      if (outputContent.length === 0) { content.innerHTML = ''; }
      const line = document.createElement('div');
      line.className = `output-line ${type}`;
      if (lineNum !== undefined) { line.classList.add('highlight'); }
      const time = new Date().toLocaleTimeString('zh-CN', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
      line.innerHTML = `<span style="opacity:0.5">[${time}]</span> ${text}`;
      content.appendChild(line);
      content.scrollTop = content.scrollHeight;
      outputContent.push({ text, type, time });
      if (type === 'error') { switchTab('errors'); }
    }

    function switchTab(tab) {
      document.querySelectorAll('.output-tab').forEach(t => t.classList.remove('active'));
      document.querySelector(`.output-tab[data-tab="${tab}"]`).classList.add('active');
      if (tab === 'output') { renderOutput(); } else { renderErrors(); }
    }

    function renderOutput() {
      const content = document.getElementById('outputContent');
      if (outputContent.length === 0) {
        content.innerHTML = '<div class="output-empty"><i class="fas fa-terminal" style="font-size:2rem;display:block;margin-bottom:10px;opacity:0.5"></i>代码输出将显示在这里</div>';
        return;
      }
      content.innerHTML = outputContent.map(item => {
        return `<div class="output-line ${item.type}"><span style="opacity:0.5">[${item.time}]</span> ${item.text}</div>`;
      }).join('');
      content.scrollTop = content.scrollHeight;
    }

    function renderErrors() {
      const content = document.getElementById('outputContent');
      const errors = outputContent.filter(item => item.type === 'error');
      if (errors.length === 0) {
        content.innerHTML = '<div class="output-empty"><i class="fas fa-check-circle" style="font-size:2rem;display:block;margin-bottom:10px;opacity:0.5;color:#00b894"></i>暂无错误信息</div>';
        return;
      }
      content.innerHTML = errors.map(item => {
        return `<div class="output-line error">[${item.time}] ${item.text}</div>`;
      }).join('');
      content.scrollTop = content.scrollHeight;
    }

    function updateErrorBadge() {
      const badge = document.getElementById('errorBadge');
      if (errorCount > 0) { badge.textContent = errorCount; badge.style.display = 'inline'; }
      else { badge.style.display = 'none'; }
    }

    function clearOutput() {
      outputContent = [];
      errorCount = 0;
      updateErrorBadge();
      document.getElementById('outputContent').innerHTML = '<div class="output-empty"><i class="fas fa-terminal" style="font-size:2rem;display:block;margin-bottom:10px;opacity:0.5"></i>代码输出将显示在这里</div>';
    }

    function updateVariablesDisplay() {
      const list = document.getElementById('variablesList');
      const varEntries = Object.entries(variables).filter(([k]) => !k.startsWith('__') && !['pen_down', 'pen_color', 'pen_size', 'speed'].includes(k));
      if (varEntries.length === 0) {
        list.innerHTML = '<div class="empty-state"><i class="fas fa-clipboard-list"></i><p>运行代码后<br>变量将显示在这里</p></div>';
        return;
      }
      list.innerHTML = varEntries.map(([name, value]) => {
        const type = Array.isArray(value) ? 'list' : (typeof value === 'number' ? 'number' : (typeof value === 'boolean' ? 'boolean' : 'string'));
        const typeLabel = Array.isArray(value) ? 'list' : typeof value;
        const displayValue = formatValue(value);
        return `<div class="variable-item"><div class="var-name">${name}</div><div class="var-type">${typeLabel}</div><div class="var-value ${type}">${displayValue}</div></div>`;
      }).join('');
      document.getElementById('varCount').textContent = varEntries.length;
      document.getElementById('listCount').textContent = varEntries.filter(([_, v]) => Array.isArray(v)).length;
      document.getElementById('objCount').textContent = varEntries.filter(([_, v]) => typeof v === 'object' && !Array.isArray(v)).length;
    }

    function formatValue(value) {
      if (Array.isArray(value)) {
        return '[' + value.map(v => typeof v === 'string' ? `&quot;${v}&quot;` : v).join(', ') + ']';
      }
      if (typeof value === 'string') {
        return `&quot;${value.length > 30 ? value.slice(0, 30) + '...' : value}&quot;`;
      }
      return String(value);
    }

    function clearVariables() {
      variables = {};
      updateVariablesDisplay();
      addOutput('🗑️ 变量已清空', 'info');
    }

    // ==================== 画布操作 ====================
    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      resetTurtle();
      drawGrid();
      addOutput('🧹 画布已清空', 'info');
    }

    function resetTurtleAction() {
      resetTurtle();
      addOutput('🐢 海龟已重置到原点', 'info');
    }

    function saveImage() {
      const link = document.createElement('a');
      link.download = `turtle-art-${Date.now()}.png`;
      link.href = canvas.toDataURL();
      link.click();
      addOutput('💾 图片已保存', 'success');
    }

    // ==================== 示例代码 ====================
    function loadExample(name) {
      if (examples[name]) {
        editor.setValue(examples[name]);
        updateCodeStats();
        addOutput(`📁 已加载示例: ${name}`, 'info');
      }
    }

    // ==================== 其他功能 ====================
    function resetAndRun() {
      clearCanvas();
      clearOutput();
      clearVariables();
      runCode();
    }

    function stepCode() {
      addOutput('⏯️ 单步执行模式', 'info');
    }

    function bindKeyboardShortcuts() {
      document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); runCode(); }
        if (e.key === 'F5') { e.preventDefault(); runCode(); }
        if (e.key === 'F10') { e.preventDefault(); stepCode(); }
        if (e.key === 'Escape' && isRunning) {
          isRunning = false;
          document.getElementById('runningIndicator').style.display = 'none';
          addOutput('⏹️ 执行已停止', 'info');
        }
      });

      var speedEl = document.getElementById('speedSlider');
      if (speedEl) {
        speedEl.addEventListener('input', function(e) {
          executionSpeed = parseInt(e.target.value);
        });
      }
    }

    // ==================== 窗口调整 ====================
    window.addEventListener('resize', function() {
      var data = ctx.getImageData(0, 0, canvas.width, canvas.height);
      resizeCanvas();
      drawGrid();
    });
