    // ==================== Python 海龟命令实现 ====================
    var turtleCommands = [];
    var currentCommandIndex = 0;

    function turtleForward(distance) {
      const rad = (turtle.angle - 90) * Math.PI / 180;
      const newX = turtle.x + Math.cos(rad) * distance;
      const newY = turtle.y + Math.sin(rad) * distance;
      if (turtle.penDown) {
        ctx.beginPath();
        ctx.strokeStyle = turtle.color;
        ctx.lineWidth = turtle.width;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.moveTo(turtle.x, turtle.y);
        ctx.lineTo(newX, newY);
        ctx.stroke();
      }
      turtle.x = newX;
      turtle.y = newY;
      updateTurtleInfo();
      drawTurtle();
    }

    function turtleBackward(distance) {
      const rad = (turtle.angle - 90) * Math.PI / 180;
      const newX = turtle.x - Math.cos(rad) * distance;
      const newY = turtle.y - Math.sin(rad) * distance;
      if (turtle.penDown) {
        ctx.beginPath();
        ctx.strokeStyle = turtle.color;
        ctx.lineWidth = turtle.width;
        ctx.lineCap = 'round';
        ctx.moveTo(turtle.x, turtle.y);
        ctx.lineTo(newX, newY);
        ctx.stroke();
      }
      turtle.x = newX;
      turtle.y = newY;
      updateTurtleInfo();
      drawTurtle();
    }

    function turtleLeft(angle) {
      turtle.angle = (turtle.angle - angle) % 360;
      if (turtle.angle < 0) turtle.angle += 360;
      updateTurtleInfo();
      drawTurtle();
    }

    function turtleRight(angle) {
      turtle.angle = (turtle.angle + angle) % 360;
      updateTurtleInfo();
      drawTurtle();
    }

    function turtleGoto(x, y) {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const newX = cx + x;
      const newY = cy - y;
      if (turtle.penDown) {
        ctx.beginPath();
        ctx.strokeStyle = turtle.color;
        ctx.lineWidth = turtle.width;
        ctx.lineCap = 'round';
        ctx.moveTo(turtle.x, turtle.y);
        ctx.lineTo(newX, newY);
        ctx.stroke();
      }
      turtle.x = newX;
      turtle.y = newY;
      updateTurtleInfo();
      drawTurtle();
    }

    function turtlePenup() { turtle.penDown = false; variables['pen_down'] = false; }
    function turtlePendown() { turtle.penDown = true; variables['pen_down'] = true; }
    function turtlePencolor(color) { turtle.color = color; variables['pen_color'] = color; }
    function turtlePensize(size) { turtle.width = size; variables['pen_size'] = size; }
    function turtleSpeed(speed) { executionSpeed = speed; variables['speed'] = speed; }

    function turtleHome() {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      if (turtle.penDown) {
        ctx.beginPath();
        ctx.strokeStyle = turtle.color;
        ctx.lineWidth = turtle.width;
        ctx.moveTo(turtle.x, turtle.y);
        ctx.lineTo(cx, cy);
        ctx.stroke();
      }
      turtle.x = cx;
      turtle.y = cy;
      turtle.angle = 90;
      updateTurtleInfo();
      drawTurtle();
    }

    function turtleClear() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
    }

    function turtleHideturtle() { turtle.visible = false; drawGrid(); }
    function turtleShowturtle() { turtle.visible = true; drawTurtle(); }
    function turtleBgcolor(color) { canvas.parentElement.style.background = color; }

    function turtleCircle(radius, extent) {
      extent = extent || 360;
      const steps = Math.max(10, Math.abs(extent) / 5);
      const stepAngle = extent / steps;
      for (let i = 0; i < steps; i++) {
        turtleRight(i === 0 ? 0 : stepAngle);
        const moveDist = 2 * Math.PI * radius * Math.abs(stepAngle) / 360;
        if (extent > 0) turtleForward(moveDist);
        else turtleBackward(moveDist);
      }
    }

    function turtleDot(size, color) {
      ctx.fillStyle = color || turtle.color;
      ctx.beginPath();
      ctx.arc(turtle.x, turtle.y, size || 5, 0, Math.PI * 2);
      ctx.fill();
      drawTurtle();
    }

    function turtleBeginfill() {
      ctx.beginPath();
      ctx.moveTo(turtle.x, turtle.y);
    }

    function turtleEndfill(color) {
      ctx.fillStyle = color || turtle.color;
      ctx.fill();
      drawTurtle();
    }
