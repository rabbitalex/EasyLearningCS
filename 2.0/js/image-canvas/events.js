// 图片画板 - 事件处理模块

ImageCanvas.prototype.bindEvents = function() {
  document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      this.currentTool = btn.dataset.tool;
      this.updateCursor();
    });
  });

  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      this.renderImageLibrary(btn.dataset.category);
    });
  });

  this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
  document.addEventListener('mousemove', this.onMouseMove.bind(this));
  document.addEventListener('mouseup', this.onMouseUp.bind(this));

  this.canvas.addEventListener('touchstart', this.onTouchStart.bind(this), { passive: false });
  document.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: false });
  document.addEventListener('touchend', this.onMouseUp.bind(this));

  document.querySelectorAll('.selection-handle, .selection-rotate, .selection-delete').forEach(handle => {
    handle.addEventListener('mousedown', this.onHandleDown.bind(this));
  });

  this.bindPropertyEvents();

  document.getElementById('btnClear').addEventListener('click', () => this.clear());
  document.getElementById('btnUndo').addEventListener('click', () => this.undo());
  document.getElementById('btnRedo').addEventListener('click', () => this.redo());
  document.getElementById('btnAddText').addEventListener('click', () => this.showTextModal());
  document.getElementById('btnDeleteSelected').addEventListener('click', () => this.deleteSelected());
  document.getElementById('btnFit').addEventListener('click', () => this.fitToView());

  document.getElementById('btnConfirmText').addEventListener('click', () => this.addText());
  document.getElementById('btnCancelText').addEventListener('click', () => this.hideTextModal());
  document.getElementById('textSize').addEventListener('input', (e) => {
    document.getElementById('textSizeValue').textContent = e.target.value;
  });

  document.getElementById('localImageUpload').addEventListener('change', (e) => {
    this.handleLocalUpload(e.target.files);
  });

  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
      if (e.key === 'z') {
        e.preventDefault();
        this.undo();
      } else if (e.key === 'y') {
        e.preventDefault();
        this.redo();
      }
    }
    if (e.key === 'Delete' || e.key === 'Backspace') {
      if (this.selectedElement && document.activeElement.tagName !== 'INPUT' &&
          document.activeElement.tagName !== 'TEXTAREA') {
        this.deleteSelected();
      }
    }
    if (e.key.toLowerCase() === 'v') this.setTool('select');
    if (e.key.toLowerCase() === 'h') this.setTool('hand');
  });

  document.getElementById('zoomSlider').addEventListener('input', (e) => {
    this.setZoom(parseInt(e.target.value) / 100);
  });
};

ImageCanvas.prototype.onMouseDown = function(e) {
  const rect = this.canvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) / this.zoom - this.panOffset.x;
  const y = (e.clientY - rect.top) / this.zoom - this.panOffset.y;

  if (this.currentTool === 'hand') {
    this.isPanning = true;
    this.dragStart = { x: e.clientX, y: e.clientY, panX: this.panOffset.x, panY: this.panOffset.y };
    this.canvas.classList.add('cursor-grabbing');
    return;
  }

  const clicked = this.getElementAt(x, y);

  if (clicked) {
    this.selectElement(clicked);
    this.isDragging = true;
    this.dragStart = { x, y };
    this.elementStart = { x: clicked.x, y: clicked.y };
  } else {
    this.selectElement(null);
  }

  this.render();
};

ImageCanvas.prototype.onMouseMove = function(e) {
  const rect = this.canvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) / this.zoom - this.panOffset.x;
  const y = (e.clientY - rect.top) / this.zoom - this.panOffset.y;

  if (this.isPanning) {
    this.panOffset.x = this.dragStart.panX + (e.clientX - this.dragStart.x) / this.zoom;
    this.panOffset.y = this.dragStart.panY + (e.clientY - this.dragStart.y) / this.zoom;
    this.updateCanvasTransform();
    return;
  }

  if (this.isDragging && this.selectedElement) {
    this.selectedElement.x = this.elementStart.x + (x - this.dragStart.x);
    this.selectedElement.y = this.elementStart.y + (y - this.dragStart.y);
    this.updatePropertiesPanel();
    this.updateSelectionBox();
    this.render();
  }

  if (this.isResizing && this.selectedElement) {
    this.resizeElement(x, y);
  }

  if (this.isRotating && this.selectedElement) {
    const cx = this.selectedElement.x + this.selectedElement.width / 2;
    const cy = this.selectedElement.y + this.selectedElement.height / 2;
    const angle = Math.atan2(y - cy, x - cx);
    this.selectedElement.rotation = angle + Math.PI / 2;
    document.getElementById('propRotate').value = Math.round(this.selectedElement.rotation * 180 / Math.PI);
    document.getElementById('propRotateValue').value = Math.round(this.selectedElement.rotation * 180 / Math.PI);
    this.render();
    this.updateSelectionBox();
  }
};

ImageCanvas.prototype.onMouseUp = function() {
  if (this.isDragging || this.isResizing || this.isRotating) {
    this.saveHistory();
  }
  this.isDragging = false;
  this.isResizing = false;
  this.isRotating = false;
  this.isPanning = false;
  this.canvas.classList.remove('cursor-grabbing');
  this.handleType = null;
};

ImageCanvas.prototype.onTouchStart = function(e) {
  if (e.touches.length === 1) {
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    this.onMouseDown(mouseEvent);
  }
};

ImageCanvas.prototype.onTouchMove = function(e) {
  if (e.touches.length === 1) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    this.onMouseMove(mouseEvent);
  }
};

ImageCanvas.prototype.onHandleDown = function(e) {
  e.stopPropagation();
  this.handleType = e.target.dataset.handle;

  if (this.handleType === 'delete') {
    this.deleteSelected();
    return;
  }

  if (this.handleType === 'rotate') {
    this.isRotating = true;
    return;
  }

  this.isResizing = true;
  this.elementStart = {
    x: this.selectedElement.x,
    y: this.selectedElement.y,
    width: this.selectedElement.width,
    height: this.selectedElement.height
  };
};
