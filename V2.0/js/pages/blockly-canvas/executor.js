    // ==================== 代码执行 ====================
    async function runCode() {
      if (isRunning) return;
      isRunning = true;
      
      // 生成Python代码
      const code = pythonGenerator.workspaceToCode(workspace);
      
      // 显示生成的代码
      displayPythonCode(code);
      
      // 清空画布
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      resetTurtle();
      drawGrid();
      
      // 解析并执行代码
      variables = {};
      await executePythonCode(code);
      
      isRunning = false;
      variables['__完成__'] = true;
      updateVariablesDisplay();
    }
    
    function displayPythonCode(code) {
      // 对Python代码进行简单的语法高亮
      const highlighted = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/(#.*$)/gm, '<span class="token-comment">$1</span>')
        .replace(/\b(import|from|def|class|for|while|if|elif|else|try|except|finally|return|yield|lambda|with|as|pass|break|continue|del|global|nonlocal|assert|raise|and|or|not|in|is)\b/g, '<span class="token-keyword">$1</span>')
        .replace(/\b(print|input|len|range|enumerate|zip|map|filter|sum|min|max|sorted|open|int|float|str|list|dict|tuple|set|bool|none|true|false)\b/g, '<span class="token-function">$1</span>')
        .replace(/(-?\d+\.?\d*)/g, '<span class="token-number">$1</span>')
        .replace(/('[^']*'|"[^"]*")/g, '<span class="token-string">$1</span>')
        .replace(/([+\-*/%=<>!&|^~])/g, '<span class="token-operator">$1</span>');
      
      document.getElementById('codeDisplay').innerHTML = highlighted || '<span class="token-comment"># 请添加积木积木块</span>';
    }
    
    async function executePythonCode(code) {
      // 简化的Python代码解析和执行
      const lines = code.split('\n');
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line || line.startsWith('#')) continue;
        
        // 记录变量赋值
        const assignMatch = line.match(/^(\w+)\s*=\s*(.+)$/);
        if (assignMatch) {
          const varName = assignMatch[1];
          const value = eval(assignMatch[2]);
          variables[varName] = value;
          updateVariablesDisplay();
          continue;
        }
        
        // 执行turtle命令
        if (line.startsWith('turtle.')) {
          await executeTurtleCommand(line);
        }
      }
    }
    
    async function executeTurtleCommand(line) {
      const match = line.match(/turtle\.(\w+)\((.*)\)/);
      if (!match) return;
      
      const cmd = match[1];
      const args = match[2].split(',').map(a => a.trim().replace(/['"]/g, ''));
      
      switch(cmd) {
        case 'forward':
        case 'fd':
          await turtleForward(parseFloat(args[0]));
          break;
        case 'backward':
        case 'bk':
          await turtleBackward(parseFloat(args[0]));
          break;
        case 'left':
        case 'lt':
          await turtleLeft(parseFloat(args[0]));
          break;
        case 'right':
        case 'rt':
          await turtleRight(parseFloat(args[0]));
          break;
        case 'goto':
          await turtleGoto(parseFloat(args[0]), parseFloat(args[1]));
          break;
        case 'home':
          await turtleHome();
          break;
        case 'circle':
          await turtleCircle(parseFloat(args[0]), args[1] ? parseFloat(args[1]) : 360);
          break;
        case 'dot':
          await turtleDot(parseFloat(args[0]), args[1]);
          break;
        case 'stamp':
          turtleStamp();
          break;
        case 'penup':
        case 'up':
          turtlePenUp();
          break;
        case 'pendown':
        case 'down':
        case 'pd':
          turtlePenDown();
          break;
        case 'pencolor':
        case 'color':
          turtlePenColor(args[0]);
          break;
        case 'pensize':
        case 'width':
          turtlePenSize(parseFloat(args[0]));
          break;
        case 'speed':
          turtle.speed = parseFloat(args[0]);
          executionSpeed = 1000 / turtle.speed;
          break;
        case 'hideturtle':
        case 'ht':
          turtleHide();
          break;
        case 'showturtle':
        case 'st':
          turtleShow();
          break;
        case 'bgcolor':
          turtleBgColor(args[0]);
          break;
      }
    }
    
