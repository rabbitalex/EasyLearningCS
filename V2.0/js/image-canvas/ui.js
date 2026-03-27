// 图片画板 - UI和历史模块

ImageCanvas.prototype.updateSelectionBox = function() {
  const box = document.getElementById('selectionBox');
  if (!this.selectedElement) return;

  const el = this.selectedElement;

  box.classList.remove('hidden');
  box.style.left = (el.x * this.zoom) + 'px';
  box.style.top = (el.y * this.zoom) + 'px';
  box.style.width = (el.width * this.zoom) + 'px';
  box.style.height = (el.height * this.zoom) + 'px';

  if (el.rotation) {
    box.style.transform = `rotate(${el.rotation * 180 / Math.PI}deg)`;
  } else {
    box.style.transform = '';
  }
};

ImageCanvas.prototype.updatePropertiesPanel = function() {
  if (!this.selectedElement) return;

  const el = this.selectedElement;
  document.getElementById('propX').value = Math.round(el.x);
  document.getElementById('propY').value = Math.round(el.y);
  document.getElementById('propW').value = Math.round(el.width);
  document.getElementById('propH').value = Math.round(el.height);
  document.getElementById('propRotate').value = Math.round(el.rotation * 180 / Math.PI);
  document.getElementById('propRotateValue').value = Math.round(el.rotation * 180 / Math.PI);
  document.getElementById('propOpacity').value = Math.round(el.opacity * 100);
  document.getElementById('propOpacityValue').textContent = Math.round(el.opacity * 100) + '%';
  document.getElementById('propShadow').checked = el.shadow;
};

ImageCanvas.prototype.bindPropertyEvents = function() {
  ['X', 'Y'].forEach(axis => {
    document.getElementById(`prop${axis}`).addEventListener('change', (e) => {
      if (this.selectedElement) {
        this.selectedElement[axis.toLowerCase()] = parseInt(e.target.value);
        this.render();
        this.updateSelectionBox();
      }
    });
  });

  ['W', 'H'].forEach(dim => {
    document.getElementById(`prop${dim}`).addEventListener('change', (e) => {
      if (!this.selectedElement) return;
      const value = parseInt(e.target.value);
      const lockRatio = document.getElementById('propLockRatio').checked;

      if (dim === 'W') {
        const ratio = value / this.selectedElement.width;
        this.selectedElement.width = value;
        if (lockRatio) this.selectedElement.height *= ratio;
      } else {
        const ratio = value / this.selectedElement.height;
        this.selectedElement.height = value;
        if (lockRatio) this.selectedElement.width *= ratio;
      }

      document.getElementById('propW').value = Math.round(this.selectedElement.width);
      document.getElementById('propH').value = Math.round(this.selectedElement.height);
      this.render();
      this.updateSelectionBox();
    });
  });

  document.getElementById('propRotate').addEventListener('input', (e) => {
    document.getElementById('propRotateValue').value = e.target.value;
    if (this.selectedElement) {
      this.selectedElement.rotation = parseInt(e.target.value) * Math.PI / 180;
      this.render();
      this.updateSelectionBox();
    }
  });

  document.getElementById('propRotateValue').addEventListener('change', (e) => {
    document.getElementById('propRotate').value = e.target.value;
    if (this.selectedElement) {
      this.selectedElement.rotation = parseInt(e.target.value) * Math.PI / 180;
      this.render();
      this.updateSelectionBox();
    }
  });

  document.getElementById('propOpacity').addEventListener('input', (e) => {
    document.getElementById('propOpacityValue').textContent = e.target.value + '%';
    if (this.selectedElement) {
      this.selectedElement.opacity = parseInt(e.target.value) / 100;
      this.render();
    }
  });

  document.getElementById('btnLayerUp').addEventListener('click', () => this.moveLayer(1));
  document.getElementById('btnLayerDown').addEventListener('click', () => this.moveLayer(-1));
  document.getElementById('btnLayerTop').addEventListener('click', () => this.moveLayer(Infinity));
  document.getElementById('btnLayerBottom').addEventListener('click', () => this.moveLayer(-Infinity));

  document.getElementById('propShadow').addEventListener('change', (e) => {
    if (this.selectedElement) {
      this.selectedElement.shadow = e.target.checked;
      this.render();
    }
  });

  document.getElementById('btnFlipH').addEventListener('click', () => {
    if (this.selectedElement) {
      this.selectedElement.flipH = !this.selectedElement.flipH;
      this.render();
    }
  });
  document.getElementById('btnFlipV').addEventListener('click', () => {
    if (this.selectedElement) {
      this.selectedElement.flipV = !this.selectedElement.flipV;
      this.render();
    }
  });
};

ImageCanvas.prototype.setTool = function(tool) {
  this.currentTool = tool;
  document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-tool="${tool}"]`)?.classList.add('active');
  this.updateCursor();
};

ImageCanvas.prototype.updateCursor = function() {
  this.canvas.classList.remove('cursor-hand', 'cursor-move', 'cursor-grabbing');
  if (this.currentTool === 'hand') {
    this.canvas.classList.add('cursor-hand');
  } else if (this.selectedElement) {
    this.canvas.classList.add('cursor-move');
  }
};

ImageCanvas.prototype.setZoom = function(zoom) {
  this.zoom = Math.max(0.25, Math.min(2, zoom));
  document.getElementById('zoomSlider').value = Math.round(this.zoom * 100);
  document.getElementById('zoomValue').textContent = Math.round(this.zoom * 100) + '%';
  this.updateCanvasTransform();
};

ImageCanvas.prototype.updateCanvasTransform = function() {
  this.canvas.style.transform = `scale(${this.zoom}) translate(${this.panOffset.x}px, ${this.panOffset.y}px)`;
};

ImageCanvas.prototype.fitToView = function() {
  this.setZoom(1);
  this.panOffset = { x: 0, y: 0 };
  this.updateCanvasTransform();
};

ImageCanvas.prototype.saveHistory = function() {
  const state = JSON.stringify(this.elements.map(el => ({
    ...el,
    content: el.type === 'image' ? el.src : el.content
  })));

  if (this.historyIndex < this.history.length - 1) {
    this.history = this.history.slice(0, this.historyIndex + 1);
  }

  this.history.push(state);
  if (this.history.length > this.maxHistory) {
    this.history.shift();
  } else {
    this.historyIndex++;
  }

  this.updateUndoRedoButtons();
};

ImageCanvas.prototype.loadHistory = async function(state) {
  const elements = JSON.parse(state);
  this.elements = [];

  for (const el of elements) {
    if (el.type === 'image') {
      await this.addImage(el.content, el.x, el.y);
      const newEl = this.elements[this.elements.length - 1];
      Object.assign(newEl, el, { content: newEl.content, src: el.content });
    } else {
      this.elements.push({
        ...el,
        content: el.content
      });
    }
  }

  this.selectElement(null);
  this.render();
  this.updateStats();
};

ImageCanvas.prototype.undo = function() {
  if (this.historyIndex > 0) {
    this.historyIndex--;
    this.loadHistory(this.history[this.historyIndex]);
    this.updateUndoRedoButtons();
  }
};

ImageCanvas.prototype.redo = function() {
  if (this.historyIndex < this.history.length - 1) {
    this.historyIndex++;
    this.loadHistory(this.history[this.historyIndex]);
    this.updateUndoRedoButtons();
  }
};

ImageCanvas.prototype.updateUndoRedoButtons = function() {
  document.getElementById('btnUndo').disabled = this.historyIndex <= 0;
  document.getElementById('btnRedo').disabled = this.historyIndex >= this.history.length - 1;
};

ImageCanvas.prototype.showTextModal = function() {
  document.getElementById('textModal').classList.remove('hidden');
  document.getElementById('textInput').focus();
};

ImageCanvas.prototype.hideTextModal = function() {
  document.getElementById('textModal').classList.add('hidden');
  document.getElementById('textInput').value = '';
};

ImageCanvas.prototype.addTextFromModal = function() {
  const text = document.getElementById('textInput').value.trim();
  if (!text) return;

  const color = document.getElementById('textColor').value;
  const size = parseInt(document.getElementById('textSize').value);

  this.addText(text, color, size);
  this.hideTextModal();
};

ImageCanvas.prototype.updateStats = function() {
  document.getElementById('layerCount').textContent = this.elements.length;
};
