function highlightLine(lineNum) {
  var hl = $('currentLineHighlight');
  var editor = $('codeEditor');
  _highlightedLineNum = lineNum;
  if (editor) {
    var lineHeight = parseFloat(getComputedStyle(editor).lineHeight);
    var paddingTop = parseFloat(getComputedStyle(editor).paddingTop);
    var scrollTop = editor.scrollTop;
    // 高亮条跟随代码内容：减去scrollTop使其与代码行对齐
    var topPos = paddingTop + (lineNum - 1) * lineHeight - scrollTop;
    hl.style.top = topPos + 'px';
    hl.style.height = lineHeight + 'px';

    // 自动滚动编辑器，使高亮行可见
    var editorHeight = editor.clientHeight;
    var lineAbsTop = paddingTop + (lineNum - 1) * lineHeight;
    if (lineAbsTop < scrollTop || lineAbsTop + lineHeight > scrollTop + editorHeight) {
      editor.scrollTop = lineAbsTop - editorHeight / 3;
      // 同步行号和语法高亮层滚动
      $('lineNumbers').scrollTop = editor.scrollTop;
      syncHighlightScroll();
      // 重新计算高亮位置
      topPos = paddingTop + (lineNum - 1) * lineHeight - editor.scrollTop;
      hl.style.top = topPos + 'px';
    }
  } else {
    hl.style.top = (lineNum - 1) * 1.7 + 1 + 'rem';
    hl.style.height = '1.7rem';
  }
  hl.classList.add('visible');
}

// 滚动时更新高亮条位置，使其始终跟随代码行
function updateHighlightPosition() {
  if (_highlightedLineNum <= 0) return;
  var hl = $('currentLineHighlight');
  if (!hl.classList.contains('visible')) return;
  var editor = $('codeEditor');
  if (!editor) return;
  var lineHeight = parseFloat(getComputedStyle(editor).lineHeight);
  var paddingTop = parseFloat(getComputedStyle(editor).paddingTop);
  var scrollTop = editor.scrollTop;
  hl.style.top = (paddingTop + (_highlightedLineNum - 1) * lineHeight - scrollTop) + 'px';
}

function removeHighlight() {
  _highlightedLineNum = 0;
  $('currentLineHighlight').classList.remove('visible');
}

function disableRunButtons() {
  var runBtn = $('runCode');
  var stepBtn = $('stepRun');
  if (runBtn) { runBtn.disabled = true; runBtn.classList.add('btn-disabled'); }
  if (stepBtn) { stepBtn.disabled = true; stepBtn.classList.add('btn-disabled'); }
}

function enableRunButtons() {
  var runBtn = $('runCode');
  var stepBtn = $('stepRun');
  if (runBtn) { runBtn.disabled = false; runBtn.classList.remove('btn-disabled'); }
  if (stepBtn) { stepBtn.disabled = false; stepBtn.classList.remove('btn-disabled'); }
}

function showStepButtons() {
  var nextBtn = document.getElementById('stepNextBtn');
  var stopBtn = document.getElementById('stepStopBtn');
  if (nextBtn) {
    nextBtn.style.display = '';
    nextBtn.disabled = false;
    nextBtn.classList.remove('btn-disabled');
    nextBtn.innerHTML = '<i class="fas fa-forward-step"></i> 下一步';
  }
  if (stopBtn) {
    stopBtn.style.display = '';
    stopBtn.disabled = false;
    stopBtn.classList.remove('btn-disabled');
    stopBtn.innerHTML = '<i class="fas fa-stop"></i> 停止';
  }
}
function hideStepButtons() {
  var nextBtn = document.getElementById('stepNextBtn');
  var stopBtn = document.getElementById('stepStopBtn');
  if (nextBtn) {
    nextBtn.style.display = 'none';
    nextBtn.disabled = true;
  }
  if (stopBtn) {
    stopBtn.style.display = 'none';
    stopBtn.disabled = true;
  }
  removeHighlight();
  // 恢复运行和逐步执行按钮
  enableRunButtons();
}

