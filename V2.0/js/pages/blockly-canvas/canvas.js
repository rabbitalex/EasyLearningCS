    // ==================== Canvas 初始化 ====================
    function initCanvas() {
      canvas = document.getElementById('turtleCanvas');
      ctx = canvas.getContext('2d');
      
      // 响应式调整
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      
      // 初始化海龟位置 (画布中心)
      resetTurtle();
      
      // 绘制背景网格
      drawGrid();
    }
    
    function resizeCanvas() {
      const container = canvas.parentElement;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      if (turtle) {
        drawScene();
      }
    }
    
    function drawGrid() {
      const w = canvas.width;
      const h = canvas.height;
      const gridSize = 40;
      
      ctx.save();
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.lineWidth = 1;
      
      // 垂直线
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      
      // 水平线
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      
      // 坐标轴
      const cx = w / 2;
      const cy = h / 2;
      
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, h);
      ctx.moveTo(0, cy);
      ctx.lineTo(w, cy);
      ctx.stroke();
      
      // 刻度
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      for (let x = cx; x < w; x += 100) {
        if (x !== cx) ctx.fillText((x - cx), x, cy + 15);
      }
      for (let x = cx; x > 0; x -= 100) {
        if (x !== cx) ctx.fillText(-(cx - x), x, cy + 15);
      }
      ctx.textAlign = 'right';
      for (let y = cy; y < h; y += 100) {
        if (y !== cy) ctx.fillText(-(y - cy), cx - 5, y + 3);
      }
      for (let y = cy; y > 0; y -= 100) {
        if (y !== cy) ctx.fillText((cy - y), cx - 5, y + 3);
      }
      
      ctx.restore();
    }
    
    function resetTurtle() {
      turtle.x = canvas.width / 2;
      turtle.y = canvas.height / 2;
      turtle.angle = 0;
      turtle.penDown = true;
      turtle.color = '#00cec9';
      turtle.width = 2;
      turtle.visible = true;
    }
    
    function drawScene() {
      // 清空并绘制
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      ctx.putImageData(imageData, 0, 0);
      
      if (turtle.visible) {
        drawTurtle();
      }
      
      updateCanvasInfo();
    }
    
    function drawTurtle() {
      ctx.save();
      ctx.translate(turtle.x, turtle.y);
      ctx.rotate(turtle.angle * Math.PI / 180);
      
      // 海龟身体
      const size = 12;
      ctx.fillStyle = turtle.color;
      ctx.beginPath();
      ctx.moveTo(size, 0);
      ctx.lineTo(-size, size * 0.7);
      ctx.lineTo(-size * 0.5, 0);
      ctx.lineTo(-size, -size * 0.7);
      ctx.closePath();
      ctx.fill();
      
      // 眼睛
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(size * 0.3, -size * 0.2, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(size * 0.35, -size * 0.2, 1.5, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    }
    
    function updateCanvasInfo() {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const realX = Math.round(turtle.x - cx);
      const realY = Math.round(cy - turtle.y);
      document.getElementById('canvasInfo').textContent = 
        `X: ${realX} | Y: ${realY} | 角度: ${turtle.angle}°`;
    }
    
