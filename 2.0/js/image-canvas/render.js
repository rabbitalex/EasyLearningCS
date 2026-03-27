// 图片画板 - 渲染模块

ImageCanvas.prototype.render = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.drawGrid();
  this.elements.forEach(el => this.drawElement(el));

  if (this.selectedElement) {
    this.drawSelectionHighlight();
  }
};

ImageCanvas.prototype.drawGrid = function() {
  const gridSize = 20;
  this.ctx.save();
  this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
  this.ctx.lineWidth = 1;

  for (let x = 0; x <= this.canvas.width; x += gridSize) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, 0);
    this.ctx.lineTo(x, this.canvas.height);
    this.ctx.stroke();
  }

  for (let y = 0; y <= this.canvas.height; y += gridSize) {
    this.ctx.beginPath();
    this.ctx.moveTo(0, y);
    this.ctx.lineTo(this.canvas.width, y);
    this.ctx.stroke();
  }
  this.ctx.restore();
};

ImageCanvas.prototype.drawElement = function(el) {
  this.ctx.save();
  this.ctx.globalAlpha = el.opacity;

  const cx = el.x + el.width / 2;
  const cy = el.y + el.height / 2;

  this.ctx.translate(cx, cy);
  this.ctx.rotate(el.rotation);

  if (el.flipH) this.ctx.scale(-1, 1);
  if (el.flipV) this.ctx.scale(1, -1);

  if (el.shadow) {
    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    this.ctx.shadowBlur = 20;
    this.ctx.shadowOffsetX = 5;
    this.ctx.shadowOffsetY = 5;
  }

  const halfW = el.width / 2;
  const halfH = el.height / 2;

  if (el.type === 'emoji' || el.type === 'text') {
    const fontSize = el.type === 'emoji' ? el.height * 0.9 : el.fontSize;
    this.ctx.font = `${el.type === 'emoji' ? '' : 'bold '}${fontSize}px sans-serif`;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = el.color || '#fff';
    this.ctx.fillText(el.content, 0, 0);
  } else if (el.type === 'image') {
    this.ctx.drawImage(el.content, -halfW, -halfH, el.width, el.height);
  }

  this.ctx.restore();
};

ImageCanvas.prototype.drawSelectionHighlight = function() {
  if (!this.selectedElement) return;

  const el = this.selectedElement;
  this.ctx.save();
  this.ctx.strokeStyle = '#00cec9';
  this.ctx.lineWidth = 2;
  this.ctx.setLineDash([5, 5]);

  const cx = el.x + el.width / 2;
  const cy = el.y + el.height / 2;

  this.ctx.translate(cx, cy);
  this.ctx.rotate(el.rotation);
  this.ctx.strokeRect(-el.width / 2 - 4, -el.height / 2 - 4, el.width + 8, el.height + 8);

  this.ctx.restore();
};
