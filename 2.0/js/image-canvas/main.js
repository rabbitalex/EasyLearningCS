// 图片画板 - 主入口模块

class ImageCanvas {
  constructor() {
    this.canvas = document.getElementById('mainCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.elements = [];
    this.selectedElement = null;
    this.currentTool = 'select';
    this.zoom = 1;
    this.panOffset = { x: 0, y: 0 };
    this.isPanning = false;
    this.isDragging = false;
    this.isResizing = false;
    this.isRotating = false;
    this.dragStart = { x: 0, y: 0 };
    this.elementStart = null;
    this.handleType = null;
    this.rotationStart = 0;
    this.history = [];
    this.historyIndex = -1;
    this.maxHistory = 30;

    this.init();
  }

  init() {
    this.renderImageLibrary();
    this.bindEvents();
    this.render();
    this.saveHistory();
  }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  const canvas = new ImageCanvas();

  // 画布拖放区
  const canvasEl = document.getElementById('mainCanvas');

  canvasEl.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    canvasEl.style.border = '2px dashed #00cec9';
  });

  canvasEl.addEventListener('dragleave', () => {
    canvasEl.style.border = '';
  });

  canvasEl.addEventListener('drop', (e) => {
    e.preventDefault();
    canvasEl.style.border = '';

    const rect = canvasEl.getBoundingClientRect();
    const x = (e.clientX - rect.left) / canvas.zoom - canvas.panOffset.x;
    const y = (e.clientY - rect.top) / canvas.zoom - canvas.panOffset.y;

    const emoji = e.dataTransfer.getData('emoji');
    if (emoji) {
      canvas.addEmoji(emoji, x - 32, y - 32);
    }
  });

  window.ImageCanvas = canvas;
});

// 绑定原始 addText 方法到模态框
document.addEventListener('DOMContentLoaded', () => {
  const originalAddText = ImageCanvas.prototype.addText;

  ImageCanvas.prototype.addText = function(text, color, size) {
    if (arguments.length === 0) {
      const textInput = document.getElementById('textInput').value.trim();
      if (!textInput) {
        this.hideTextModal();
        return;
      }
      const textColor = document.getElementById('textColor').value;
      const textSize = parseInt(document.getElementById('textSize').value);
      originalAddText.call(this, textInput, textColor, textSize);
      this.hideTextModal();
    } else {
      originalAddText.call(this, text, color, size);
    }
  };
});
