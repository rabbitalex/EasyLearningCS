// ========== Code Execution Engine ==========

const Executor = {
  isRunning: false,
  stepDelay: CONFIG.stepDelay,
  output: [],
  variables: {},
  
  run() {
    if (this.isRunning) return;
    
    const code = Editor.getValue();
    if (!code.trim()) {
      UI.addOutput('⚠️ 代码为空', 'warn');
      return;
    }
    
    this.isRunning = true;
    UI.updateStatus('running');
    UI.clearOutput();
    UI.clearVariables();
    
    // Clear canvas
    this.clearCanvas();
    
    // Parse and execute
    try {
      this.executePython(code);
    } catch (error) {
      UI.addOutput(`❌ 错误: ${error.message}`, 'error');
    } finally {
      this.isRunning = false;
      UI.updateStatus('idle');
      Editor.clearHighlight();
    }
  },
  
  executePython(code) {
    // Simple Python parser for turtle commands
    const lines = code.split('\n');
    let currentLine = 0;
    
    const processLine = () => {
      if (currentLine >= lines.length || !this.isRunning) {
        this.isRunning = false;
        UI.updateStatus('idle');
        return;
      }
      
      const line = lines[currentLine].trim();
      Editor.highlightLine(currentLine);
      
      // Skip empty lines and comments
      if (!line || line.startsWith('#')) {
        currentLine++;
        processLine();
        return;
      }
      
      try {
        this.parseLine(line);
      } catch (e) {
        UI.addOutput(`第${currentLine + 1}行错误: ${e.message}`, 'error');
      }
      
      currentLine++;
      
      // Continue with delay for visual effect
      if (this.isRunning) {
        setTimeout(processLine, this.getDelay());
      }
    };
    
    processLine();
  },
  
  parseLine(line) {
    // Remove comments
    line = line.split('#')[0].trim();
    if (!line) return;
    
    // Handle variable assignments
    const assignMatch = line.match(/^(\w+)\s*=\s*(.+)$/);
    if (assignMatch && !line.includes('turtle.')) {
      const [, name, value] = assignMatch;
      this.variables[name] = this.evalExpression(value);
      UI.addVariable(name, this.variables[name]);
      return;
    }
    
    // Handle turtle commands
    const turtleCmd = line.match(/turtle\.(\w+)\s*\((.*)\)/);
    if (turtleCmd) {
      const [, cmd, args] = turtleCmd;
      this.executeTurtleCommand(cmd, args);
      return;
    }
    
    // Handle loops (simplified)
    const forMatch = line.match(/for\s+(\w+)\s+in\s+range\s*\(([^)]+)\)/);
    if (forMatch) {
      // Note: This is a simplified parser, full loop handling would need stack
      UI.addOutput(`ℹ️ 检测到循环: ${line}`, 'info');
      return;
    }
  },
  
  executeTurtleCommand(cmd, argsStr) {
    const args = this.parseArgs(argsStr);
    
    switch (cmd) {
      case 'forward':
      case 'fd':
        Turtle.forward(args[0] || 100);
        break;
      case 'backward':
      case 'bk':
      case 'back':
        Turtle.backward(args[0] || 100);
        break;
      case 'right':
      case 'rt':
        Turtle.right(args[0] || 90);
        break;
      case 'left':
      case 'lt':
        Turtle.left(args[0] || 90);
        break;
      case 'goto':
        Turtle.goto(args[0] || 0, args[1] || 0);
        break;
      case 'penup':
      case 'up':
        Turtle.penup();
        break;
      case 'pendown':
      case 'pd':
      case 'down':
        Turtle.pendown();
        break;
      case 'pencolor':
      case 'color':
        Turtle.pencolor(args[0] || 'black');
        break;
      case 'pensize':
      case 'width':
        Turtle.pensize(args[0] || 2);
        break;
      case 'speed':
        Turtle.speed(args[0] || 5);
        break;
      case 'circle':
        Turtle.circle(args[0] || 50, args[1] || 360);
        break;
      case 'hideturtle':
      case 'ht':
        Turtle.hideturtle();
        break;
      case 'showturtle':
      case 'st':
        Turtle.showturtle();
        break;
      case 'clear':
        this.clearCanvas();
        break;
      case 'reset':
        Turtle.reset();
        break;
      case 'bgcolor':
        // Background color would need canvas-level change
        break;
      case 'write':
        if (args[0]) {
          UI.addOutput(`📝 ${args[0]}`, 'info');
        }
        break;
      case 'done':
        this.isRunning = false;
        break;
      default:
        UI.addOutput(`⚠️ 未支持的命令: ${cmd}`, 'warn');
    }
  },
  
  parseArgs(argsStr) {
    if (!argsStr.trim()) return [];
    
    return argsStr.split(',').map(arg => {
      arg = arg.trim();
      
      // String literal
      if ((arg.startsWith('"') && arg.endsWith('"')) || 
          (arg.startsWith("'") && arg.endsWith("'"))) {
        return arg.slice(1, -1);
      }
      
      // Number
      if (!isNaN(arg)) {
        return parseFloat(arg);
      }
      
      // Variable reference
      if (this.variables.hasOwnProperty(arg)) {
        return this.variables[arg];
      }
      
      return arg;
    });
  },
  
  evalExpression(expr) {
    expr = expr.trim();
    
    // Array literal
    if (expr.startsWith('[') && expr.endsWith(']')) {
      try {
        return JSON.parse(expr.replace(/'/g, '"'));
      } catch {
        return expr;
      }
    }
    
    // String
    if ((expr.startsWith('"') && expr.endsWith('"')) ||
        (expr.startsWith("'") && expr.endsWith("'"))) {
      return expr.slice(1, -1);
    }
    
    // Number
    if (!isNaN(expr)) {
      return parseFloat(expr);
    }
    
    // Variable
    if (this.variables.hasOwnProperty(expr)) {
      return this.variables[expr];
    }
    
    return expr;
  },
  
  getDelay() {
    // Speed 1 = slow, 10 = fast, 0 = no delay
    const speed = Turtle._speed;
    if (speed === 0) return 0;
    return (11 - speed) * 50;
  },
  
  clearCanvas() {
    Turtle.clear();
    Turtle.history = [];
  },
  
  stop() {
    this.isRunning = false;
    UI.updateStatus('idle');
    Editor.clearHighlight();
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Executor;
} else {
  window.Executor = Executor;
}
