// ===== 事件绑定 =====
function bindEvents() {
  // 开始按钮
  $('startBtn').addEventListener('click', function() {
    loadLesson(COURSES[0].lessons[0].id);
  });

  // 侧边栏底部导航
  $$('.sidebar-nav-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var page = this.getAttribute('data-page');
      switchPage(page);
    });
  });

  // 运行代码
  $('runCode').addEventListener('click', function() {
    var code = $('codeEditor').value;
    if (!code.trim()) { toast('\u26a0\ufe0f 请先输入代码'); return; }
    var runBtn = $('runCode');
    var outputSection = document.querySelector('.section-output');
    // 运行中状态
    runBtn.classList.add('is-running');
    runBtn.innerHTML = '<i class="fas fa-spinner"></i> 运行中...';
    if (outputSection) outputSection.classList.add('is-running');
    switchTab('output');
    runPython(code, function() {
      // 恢复按钮状态
      runBtn.classList.remove('is-running');
      runBtn.innerHTML = '<i class="fas fa-play"></i> 运行';
      if (outputSection) outputSection.classList.remove('is-running');
      switchTab('output');
    });
  });

  // 逐步执行
  $('stepRun').addEventListener('click', function() {
    var code = $('codeEditor').value;
    if (!code.trim()) { toast('\u26a0\ufe0f 请先输入代码'); return; }
    stepExecute(code);
  });

  // 逐步执行 - 下一步按钮
  $('stepNextBtn').addEventListener('click', function() {
    if (this.disabled) return;
    executeNextStep();
  });

  // 逐步执行 - 停止按钮
  $('stepStopBtn').addEventListener('click', function() {
    if (this.disabled) return;
    state.stepExecuting = false; state.stepIndex = 0;
    hideStepButtons(); removeHighlight();
    toast('\u23f9 逐步执行已停止');
  });

  // 重置代码
  $('resetCode').addEventListener('click', function() {
    if (state.currentLesson) {
      $('codeEditor').value = state.currentLesson.code;
      updateLineNumbers();
      updateHighlight();
      clearOutput();
      $('outputArea').innerHTML = '<span class="output-placeholder">代码已重置 \u2728</span>';
      state.variables = {};
      updateVariablesDisplay({});
      hideStepButtons();
      toast('\ud83d\udd04 代码已重置');
    }
  });

  // 复制代码
  $('copyCode').addEventListener('click', function() {
    var code = $('codeEditor').value;
    var copyBtn = $('copyCode');
    var doCopy = function() {
      copyBtn.classList.add('copied');
      copyBtn.innerHTML = '<i class="fas fa-check"></i> 已复制';
      toast('\ud83d\udccb 代码已复制！');
      setTimeout(function() {
        copyBtn.classList.remove('copied');
        copyBtn.innerHTML = '<i class="fas fa-copy"></i> 复制';
      }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(doCopy);
    } else {
      var ta = document.createElement('textarea');
      ta.value = code; document.body.appendChild(ta);
      ta.select(); document.execCommand('copy'); ta.remove();
      doCopy();
    }
  });

  // 清除输出
  $('clearOutput').addEventListener('click', function() {
    $('outputArea').innerHTML = '<span class="output-placeholder">输出已清除 \u2728</span>';
  });

  // 步骤导航
  $('prevStep').addEventListener('click', function() { goToStep(state.currentStep - 1); });

  // 标签切换
  $$('.tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() { switchTab(this.getAttribute('data-tab')); });
  });

  // 代码编辑器
  $('codeEditor').addEventListener('input', function() { updateLineNumbers(); updateHighlight(); });
  $('codeEditor').addEventListener('scroll', function() { $('lineNumbers').scrollTop = this.scrollTop; syncHighlightScroll(); updateHighlightPosition(); });
  $('codeEditor').addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;
      this.value = this.value.substring(0, start) + '    ' + this.value.substring(end);
      this.selectionStart = this.selectionEnd = start + 4;
      updateLineNumbers();
      updateHighlight();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      $('runCode').click();
    }
  });

  // 侧边栏（移动端菜单）
  $('menuBtn').addEventListener('click', function() {
    $('sidebar').classList.add('mobile-open');
    $('sidebarOverlay').classList.add('show');
  });
  $('sidebarOverlay').addEventListener('click', function() {
    $('sidebar').classList.remove('mobile-open');
    this.classList.remove('show');
  });

  // 挑战提交
  $('submitChallenge').addEventListener('click', function() {
    if (!state.currentLesson || !state.currentLesson.challenge) return;
    var code = $('challengeEditor').value;
    if (!code.trim()) { toast('\u26a0\ufe0f 请先在挑战区写代码'); return; }

    clearOutput();
    runPython(code, function(success) {
      var outputLines = $$('#outputArea .output-line');
      var text = '';
      outputLines.forEach(function(l) { text += l.textContent + '\n'; });

      var result = $('challengeResult');
      if (success && state.currentLesson.challenge.check(text)) {
        result.className = 'challenge-result success';
        result.innerHTML = '<i class="fas fa-check-circle"></i> \ud83c\udf89 太棒了！挑战通过！你真是个编程天才！';
        result.style.display = 'block';
        // 记录挑战完成 - 使用 Config 管理器
        var cid = state.currentLesson.id + '_challenge';
        if (!state.completedChallenges[cid] || !state.completedChallenges[cid].completed) {
          Config.completeChallenge(cid, 100);
          state.completedChallenges = Config.getChallengeProgress();
        }
        completeLesson();
      } else {
        result.className = 'challenge-result error';
        result.innerHTML = '<i class="fas fa-times-circle"></i> \ud83d\ude05 还不太对哦，仔细看看题目要求再试试？';
        result.style.display = 'block';
      }
    });
  });

  // 提示
  $('hintBtn').addEventListener('click', function() {
    if (!state.currentLesson || !state.currentLesson.challenge) return;
    $('challengeEditor').value = state.currentLesson.challenge.hint;
    toast('\ud83d\udca1 提示代码已加载到编辑器，试着理解它然后提交！');
  });

  // 键盘快捷键
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      var clearModal = $('clearProgressModal');
      if (clearModal && clearModal.style.display !== 'none') clearModal.style.display = 'none';
    }
  });

  // 编程挑战折叠/展开
  var challengeToggle = $('challengeToggle');
  if (challengeToggle) {
    challengeToggle.addEventListener('click', function() {
      var body = $('challengeBody');
      var arrow = $('challengeArrow');
      var card = challengeToggle.closest('.challenge-card');
      if (body.style.display === 'none') {
        body.style.display = '';
        arrow.style.transform = 'rotate(90deg)';
        if (card) card.classList.add('expanded');
      } else {
        body.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
        if (card) card.classList.remove('expanded');
      }
    });
  }

  // 清除进度按钮 - 二次确认
  var clearBtn = $('clearProgressBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      $('clearProgressModal').style.display = 'flex';
    });
    $('confirmClear').addEventListener('click', function() {
      Config.resetAll();
      $('clearProgressModal').style.display = 'none';
      toast('✅ 所有学习进度已清除！页面即将刷新...');
      setTimeout(function() { location.reload(); }, 1200);
    });
    $('cancelClear').addEventListener('click', function() {
      $('clearProgressModal').style.display = 'none';
    });
  }

  // ===== 拖拽调整区段高度 =====
  $$('.resize-handle').forEach(function(handle) {
    handle.addEventListener('mousedown', function(e) {
      e.preventDefault();
      var aboveId = handle.getAttribute('data-above');
      var belowId = handle.getAttribute('data-below');
      var aboveEl = $(aboveId);
      var belowEl = $(belowId);
      if (!aboveEl || !belowEl) return;

      handle.classList.add('dragging');
      var startY = e.clientY;
      var startAboveH = aboveEl.offsetHeight;
      var startBelowH = belowEl.offsetHeight;

      // 清除flex并设置固定高度
      aboveEl.style.flex = 'none';
      belowEl.style.flex = 'none';
      aboveEl.style.height = startAboveH + 'px';
      belowEl.style.height = startBelowH + 'px';

      function onMouseMove(ev) {
        var dy = ev.clientY - startY;
        var newAboveH = Math.max(80, startAboveH + dy);
        var newBelowH = Math.max(60, startBelowH - dy);
        aboveEl.style.height = newAboveH + 'px';
        belowEl.style.height = newBelowH + 'px';
      }

      function onMouseUp() {
        handle.classList.remove('dragging');
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      }

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });

    // 触摸屏支持
    handle.addEventListener('touchstart', function(e) {
      e.preventDefault();
      var touch = e.touches[0];
      var aboveId = handle.getAttribute('data-above');
      var belowId = handle.getAttribute('data-below');
      var aboveEl = $(aboveId);
      var belowEl = $(belowId);
      if (!aboveEl || !belowEl) return;

      handle.classList.add('dragging');
      var startY = touch.clientY;
      var startAboveH = aboveEl.offsetHeight;
      var startBelowH = belowEl.offsetHeight;

      aboveEl.style.flex = 'none';
      belowEl.style.flex = 'none';
      aboveEl.style.height = startAboveH + 'px';
      belowEl.style.height = startBelowH + 'px';

      function onTouchMove(ev) {
        var t = ev.touches[0];
        var dy = t.clientY - startY;
        var newAboveH = Math.max(80, startAboveH + dy);
        var newBelowH = Math.max(60, startBelowH - dy);
        aboveEl.style.height = newAboveH + 'px';
        belowEl.style.height = newBelowH + 'px';
      }

      function onTouchEnd() {
        handle.classList.remove('dragging');
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
      }

      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchend', onTouchEnd);
    });
  });
}

