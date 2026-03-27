    // ==================== 代码执行 ====================
    function runCode() {
      if (isRunning) return;
      isRunning = true;
      document.getElementById('runningIndicator').style.display = 'flex';
      outputContent = [];
      document.getElementById('outputContent').innerHTML = '';
      addOutput('▶ 开始运行代码...', 'info');
      const code = editor.getValue();
      clearCanvas();
      parseAndExecute(code);
    }

    function parseAndExecute(code) {
      const lines = code.split('\n');
      let i = 0;

      function executeNextLine() {
        if (i >= lines.length) { finishExecution(); return; }
        const line = lines[i].trim();
        const lineNum = i;
        i++;
        highlightLine(lineNum);
        if (!line || line.startsWith('#') || line.startsWith('import') || line.startsWith('from')) {
          setTimeout(executeNextLine, 10);
          return;
        }
        const assignMatch = line.match(/^(\w+)\s*=\s*(.+)$/);
        if (assignMatch) {
          const varName = assignMatch[1];
          const expr = assignMatch[2];
          try {
            const value = evaluateExpression(expr);
            variables[varName] = value;
            addOutput(`📦 ${varName} = ${formatValue(value)}`, 'info');
            updateVariablesDisplay();
          } catch (e) {
            addOutput(`❌ 错误: ${e.message}`, 'error');
          }
          setTimeout(executeNextLine, 1000 / executionSpeed);
          return;
        }
        if (line.includes('turtle.')) {
          executeTurtleCommand(line, lineNum);
          setTimeout(executeNextLine, 1000 / executionSpeed);
          return;
        }
        const forMatch = line.match(/^for\s+(\w+)\s+in\s+range\(([^)]+)\):/);
        if (forMatch) {
          const varName = forMatch[1];
          const rangeArgs = forMatch[2].split(',').map(x => evaluateExpression(x.trim()));
          const start = rangeArgs[0] || 0;
          const end = rangeArgs[1] || rangeArgs[0] || 0;
          variables[varName] = start;
          addOutput(`🔁 循环: ${varName} = ${start}`, 'info');
          updateVariablesDisplay();
        }
        const defMatch = line.match(/^def\s+(\w+)\s*\(/);
        if (defMatch) { addOutput(`📜 定义函数: ${defMatch[1]}()`, 'info'); }
        const callMatch = line.match(/^(\w+)\s*\(/);
        if (callMatch && !line.startsWith('def ')) { addOutput(`📞 调用: ${callMatch[1]}()`, 'info'); }
        setTimeout(executeNextLine, 1000 / executionSpeed);
      }

      executeNextLine();
    }

    function executeTurtleCommand(line, lineNum) {
      const turtleMatch = line.match(/turtle\.(\w+)\s*\(([^)]*)\)/);
      if (!turtleMatch) return;
      const cmd = turtleMatch[1];
      const argsStr = turtleMatch[2];
      const args = argsStr.split(',').map(arg => {
        arg = arg.trim();
        if (arg.startsWith('"') || arg.startsWith("'")) { return arg.slice(1, -1); }
        const num = parseFloat(arg);
        return isNaN(num) ? arg : num;
      });

      switch(cmd) {
        case 'forward': case 'fd':
          turtleForward(args[0] || 100); addOutput(`🐢 前进 ${args[0] || 100} 步`, 'output', lineNum); break;
        case 'backward': case 'bk':
          turtleBackward(args[0] || 100); addOutput(`🐢 后退 ${args[0] || 100} 步`, 'output', lineNum); break;
        case 'left': case 'lt':
          turtleLeft(args[0] || 90); addOutput(`↺ 左转 ${args[0] || 90}°`, 'output', lineNum); break;
        case 'right': case 'rt':
          turtleRight(args[0] || 90); addOutput(`↻ 右转 ${args[0] || 90}°`, 'output', lineNum); break;
        case 'goto':
          turtleGoto(args[0] || 0, args[1] || 0); addOutput(`📍 移动到 (${args[0] || 0}, ${args[1] || 0})`, 'output', lineNum); break;
        case 'home':
          turtleHome(); addOutput(`🏠 回到原点`, 'output', lineNum); break;
        case 'penup': case 'up':
          turtlePenup(); addOutput(`✋ 抬笔`, 'output', lineNum); break;
        case 'pendown': case 'pd': case 'down':
          turtlePendown(); addOutput(`✏️ 落笔`, 'output', lineNum); break;
        case 'pencolor': case 'color':
          turtlePencolor(args[0] || 'black'); addOutput(`🎨 画笔颜色: ${args[0] || 'black'}`, 'output', lineNum); break;
        case 'pensize': case 'width':
          turtlePensize(args[0] || 1); addOutput(`✏️ 画笔粗细: ${args[0] || 1}`, 'output', lineNum); break;
        case 'speed':
          turtleSpeed(args[0] || 3); addOutput(`⚡ 速度: ${args[0] || 3}`, 'output', lineNum); break;
        case 'circle':
          turtleCircle(args[0] || 50, args[1] || 360); addOutput(`⭕ 画圆 半径=${args[0] || 50}`, 'output', lineNum); break;
        case 'dot':
          turtleDot(args[0] || 5, args[1]); addOutput(`⚫ 画点`, 'output', lineNum); break;
        case 'clear': case 'reset':
          turtleClear(); resetTurtle(); addOutput(`🧹 清空画布`, 'output', lineNum); break;
        case 'hideturtle': case 'ht':
          turtleHideturtle(); addOutput(`👻 隐藏海龟`, 'output', lineNum); break;
        case 'showturtle': case 'st':
          turtleShowturtle(); addOutput(`👁️ 显示海龟`, 'output', lineNum); break;
        case 'bgcolor':
          turtleBgcolor(args[0] || 'white'); addOutput(`🖼️ 背景色: ${args[0] || 'white'}`, 'output', lineNum); break;
        default:
          addOutput(`⚠️ 未知命令: ${cmd}`, 'error', lineNum);
      }
    }

    function evaluateExpression(expr) {
      expr = expr.trim();
      if (expr.startsWith('"') || expr.startsWith("'")) { return expr.slice(1, -1); }
      if (expr.startsWith('[') && expr.endsWith(']')) {
        return expr.slice(1, -1).split(',').map(item => evaluateExpression(item.trim()));
      }
      const num = parseFloat(expr);
      if (!isNaN(num)) return num;
      if (expr === 'True') return true;
      if (expr === 'False') return false;
      if (variables[expr] !== undefined) { return variables[expr]; }
      const mathMatch = expr.match(/^(.+)\s*([+\-*/])\s*(.+)$/);
      if (mathMatch) {
        const left = evaluateExpression(mathMatch[1]);
        const op = mathMatch[2];
        const right = evaluateExpression(mathMatch[3]);
        switch(op) {
          case '+': return left + right;
          case '-': return left - right;
          case '*': return left * right;
          case '/': return right !== 0 ? left / right : 0;
        }
      }
      return expr;
    }

    function finishExecution() {
      isRunning = false;
      document.getElementById('runningIndicator').style.display = 'none';
      highlightLine(-1);
      addOutput('✅ 执行完成', 'success');
      const varCount = Object.keys(variables).filter(k => !k.startsWith('__')).length;
      const listCount = Object.values(variables).filter(v => Array.isArray(v)).length;
      const objCount = Object.values(variables).filter(v => typeof v === 'object' && !Array.isArray(v)).length;
      document.getElementById('varCount').textContent = varCount;
      document.getElementById('listCount').textContent = listCount;
      document.getElementById('objCount').textContent = objCount;
    }
