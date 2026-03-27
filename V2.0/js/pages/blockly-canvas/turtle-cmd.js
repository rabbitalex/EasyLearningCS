    // ==================== 海龟命令实现 ====================
    var commandQueue = [];
    
    function turtleForward(distance) {
      return new Promise(resolve => {
        const rad = (turtle.angle - 90) * Math.PI / 180;
        const newX = turtle.x + Math.cos(rad) * distance;
        const newY = turtle.y + Math.sin(rad) * distance;
        
        if (turtle.penDown) {
          ctx.save();
          ctx.strokeStyle = turtle.color;
          ctx.lineWidth = turtle.width;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(turtle.x, turtle.y);
          ctx.lineTo(newX, newY);
          ctx.stroke();
          ctx.restore();
        }
        
        turtle.x = newX;
        turtle.y = newY;
        drawScene();
        
        setTimeout(resolve, executionSpeed);
      });
    }
    
    function turtleBackward(distance) {
      return new Promise(resolve => {
        const rad = (turtle.angle - 90) * Math.PI / 180;
        const newX = turtle.x - Math.cos(rad) * distance;
        const newY = turtle.y - Math.sin(rad) * distance;
        
        if (turtle.penDown) {
          ctx.save();
          ctx.strokeStyle = turtle.color;
          ctx.lineWidth = turtle.width;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(turtle.x, turtle.y);
          ctx.lineTo(newX, newY);
          ctx.stroke();
          ctx.restore();
        }
        
        turtle.x = newX;
        turtle.y = newY;
        drawScene();
        
        setTimeout(resolve, executionSpeed);
      });
    }
    
    function turtleLeft(angle) {
      return new Promise(resolve => {
        turtle.angle = (turtle.angle - angle) % 360;
        drawScene();
        setTimeout(resolve, executionSpeed * 0.5);
      });
    }
    
    function turtleRight(angle) {
      return new Promise(resolve => {
        turtle.angle = (turtle.angle + angle) % 360;
        drawScene();
        setTimeout(resolve, executionSpeed * 0.5);
      });
    }
    
    function turtleGoto(x, y) {
      return new Promise(resolve => {
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const newX = cx + x;
        const newY = cy - y;
        
        if (turtle.penDown) {
          ctx.save();
          ctx.strokeStyle = turtle.color;
          ctx.lineWidth = turtle.width;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(turtle.x, turtle.y);
          ctx.lineTo(newX, newY);
          ctx.stroke();
          ctx.restore();
        }
        
        turtle.x = newX;
        turtle.y = newY;
        drawScene();
        setTimeout(resolve, executionSpeed);
      });
    }
    
    function turtlePenUp() {
      turtle.penDown = false;
    }
    
    function turtlePenDown() {
      turtle.penDown = true;
    }
    
    function turtlePenColor(color) {
      turtle.color = color;
      drawScene();
    }
    
    function turtlePenSize(size) {
      turtle.width = size;
    }
    
    function turtleHome() {
      return new Promise(resolve => {
        turtle.x = canvas.width / 2;
        turtle.y = canvas.height / 2;
        turtle.angle = 0;
        drawScene();
        setTimeout(resolve, executionSpeed);
      });
    }
    
    function turtleCircle(radius, extent) {
      return new Promise(resolve => {
        extent = extent || 360;
        const steps = 36 * (extent / 360);
        const stepAngle = extent / steps;
        
        async function drawArc() {
          for (let i = 0; i < steps; i++) {
            await turtleForward(2 * Math.PI * radius * (stepAngle / 360));
            await turtleRight(stepAngle);
          }
        }
        drawArc().then(resolve);
      });
    }
    
    function turtleDot(size, color) {
      return new Promise(resolve => {
        ctx.save();
        ctx.fillStyle = color || turtle.color;
        ctx.beginPath();
        ctx.arc(turtle.x, turtle.y, size || 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        drawScene();
        setTimeout(resolve, executionSpeed);
      });
    }
    
    function turtleStamp() {
      const savedVisible = turtle.visible;
      turtle.visible = true;
      drawTurtle();
      turtle.visible = savedVisible;
    }
    
    function turtleHide() {
      turtle.visible = false;
      drawScene();
    }
    
    function turtleShow() {
      turtle.visible = true;
      drawScene();
    }
    
    function turtleBgColor(color) {
      const container = canvas.parentElement;
      container.style.background = color;
    }
    
