    // ==================== 代码编辑器初始化 ====================
    function initEditor() {
      editor = CodeMirror.fromTextArea(document.getElementById('codeEditor'), {
        mode: 'python',
        theme: 'dracula',
        lineNumbers: true,
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers'],
        extraKeys: {
          'Ctrl-Enter': runCode,
          'F5': runCode,
          'F10': stepCode
        }
      });

      // 监听代码变化
      editor.on('change', function() {
        updateCodeStats();
      });

      updateCodeStats();
    }

    function updateCodeStats() {
      const code = editor.getValue();
      const lines = code.split('\n').length;
      const chars = code.length;
      document.getElementById('lineCount').textContent = lines;
      document.getElementById('charCount').textContent = chars;
    }

    function highlightLine(lineNum) {
      const highlight = document.getElementById('lineHighlight');
      if (lineNum >= 0) {
        const lineHeight = 24;
        highlight.style.display = 'block';
        highlight.style.top = (lineNum * lineHeight) + 'px';
        editor.scrollIntoView({ line: lineNum, ch: 0 }, 100);
      } else {
        highlight.style.display = 'none';
      }
    }
