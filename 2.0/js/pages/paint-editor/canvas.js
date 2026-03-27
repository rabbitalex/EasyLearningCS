    // ==================== Canvas 初始化 ====================
    function initCanvas() {
      canvas = document.getElementById('turtleCanvas');
      ctx = canvas.getContext('2d');

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      resetTurtle();
      drawGrid();
    }

    function resizeCanvas() {
      const container = canvas.parentElement;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      drawScene();
    }

    function drawGrid() {
      const w = canvas.width;
      const h = canvas.height;
      const gridSize = 40;

      ctx.save();
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.lineWidth = 1;

      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      const cx = w / 2;
      const cy = h / 2;

      ctx.strokeStyle = 'rgba(255,255,255,0.25)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, h);
      ctx.moveTo(0, cy);
      ctx.lineTo(w, cy);
      ctx.stroke();

      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.beginPath();
      ctx.moveTo(w - 10, cy - 5);
      ctx.lineTo(w, cy);
      ctx.lineTo(w - 10, cy + 5);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(cx - 5, 10);
      ctx.lineTo(cx, 0);
      ctx.lineTo(cx + 5, 10);
      ctx.fill();

      ctx.restore();
    }

    function resetTurtle() {
      turtle.x = canvas.width / 2;
      turtle.y = canvas.height / 2;
      turtle.angle = 90;
      turtle.penDown = true;
      turtle.color = '#00cec9';
      turtle.width = 2;
      turtle.visible = true;
      updateTurtleInfo();
    }

    function drawScene() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      if (turtle.visible) drawTurtle();
    }

    function drawTurtle() {
      ctx.save();
      ctx.translate(turtle.x, turtle.y);
      ctx.rotate((turtle.angle - 90) * Math.PI / 180);

      const size = 14;
      ctx.fillStyle = turtle.color;
      ctx.beginPath();
      ctx.moveTo(size, 0);
      ctx.lineTo(-size, size * 0.8);
      ctx.lineTo(-size * 0.4, 0);
      ctx.lineTo(-size, -size * 0.8);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(size * 0.3, -size * 0.25, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(size * 0.35, -size * 0.25, 1.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.beginPath();
      ctx.moveTo(size * 0.5, 0);
      ctx.lineTo(-size * 0.3, size * 0.4);
      ctx.lineTo(-size * 0.2, 0);
      ctx.lineTo(-size * 0.3, -size * 0.4);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    }

    function updateTurtleInfo() {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const realX = Math.round(turtle.x - cx);
      const realY = Math.round(cy - turtle.y);
      document.getElementById('turtleInfo').textContent =
        `X: ${realX} | Y: ${realY} | 角度: ${turtle.angle}°`;
    }
