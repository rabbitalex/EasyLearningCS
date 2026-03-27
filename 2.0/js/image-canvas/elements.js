// 图片画板 - 元素操作模块

ImageCanvas.prototype.renderImageLibrary = function(category = 'emoji') {
  const container = document.getElementById('imageLibrary');
  container.innerHTML = '';

  const items = IMAGE_LIBRARY[category] || [];
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'library-item';
    div.draggable = true;
    div.textContent = item;

    div.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('emoji', item);
      e.dataTransfer.effectAllowed = 'copy';
    });

    div.addEventListener('click', () => {
      this.addEmoji(item);
    });

    container.appendChild(div);
  });
};

ImageCanvas.prototype.addEmoji = function(emoji, x = null, y = null) {
  const el = {
    id: Date.now(),
    type: 'emoji',
    content: emoji,
    x: x ?? this.canvas.width / 2 - 32,
    y: y ?? this.canvas.height / 2 - 32,
    width: 64,
    height: 64,
    rotation: 0,
    opacity: 1,
    shadow: false,
    flipH: false,
    flipV: false
  };

  this.elements.push(el);
  this.selectElement(el);
  this.render();
  this.saveHistory();
  this.updateStats();
};

ImageCanvas.prototype.addText = function(text, color = '#ffffff', size = 24) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = `bold ${size}px sans-serif`;
  const metrics = ctx.measureText(text);

  const el = {
    id: Date.now(),
    type: 'text',
    content: text,
    color: color,
    fontSize: size,
    x: this.canvas.width / 2 - metrics.width / 2,
    y: this.canvas.height / 2 - size / 2,
    width: metrics.width,
    height: size * 1.4,
    rotation: 0,
    opacity: 1,
    shadow: false,
    flipH: false,
    flipV: false
  };

  this.elements.push(el);
  this.selectElement(el);
  this.render();
  this.saveHistory();
  this.updateStats();
};

ImageCanvas.prototype.addImage = async function(src, x = null, y = null) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(200 / img.width, 200 / img.height, 1);
      const el = {
        id: Date.now(),
        type: 'image',
        content: img,
        src: src,
        x: x ?? this.canvas.width / 2 - img.width * scale / 2,
        y: y ?? this.canvas.height / 2 - img.height * scale / 2,
        width: img.width * scale,
        height: img.height * scale,
        rotation: 0,
        opacity: 1,
        shadow: false,
        flipH: false,
        flipV: false
      };

      this.elements.push(el);
      this.selectElement(el);
      this.render();
      this.saveHistory();
      this.updateStats();
      resolve(el);
    };
    img.src = src;
  });
};

ImageCanvas.prototype.handleLocalUpload = function(files) {
  Array.from(files).forEach(file => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.addImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });
};

ImageCanvas.prototype.resizeElement = function(x, y) {
  const el = this.selectedElement;
  const lockRatio = document.getElementById('propLockRatio').checked;
  const ratio = el.width / el.height;

  let newWidth, newHeight, newX, newY;

  switch (this.handleType) {
    case 'se':
      newWidth = x - el.x;
      newHeight = lockRatio ? newWidth / ratio : y - el.y;
      break;
    case 'nw':
      newWidth = el.x + el.width - x;
      newHeight = lockRatio ? newWidth / ratio : el.y + el.height - y;
      newX = x;
      newY = lockRatio ? el.y + el.height - newHeight : y;
      break;
    case 'ne':
      newWidth = x - el.x;
      newHeight = lockRatio ? newWidth / ratio : el.y + el.height - y;
      newY = lockRatio ? el.y + el.height - newHeight : y;
      break;
    case 'sw':
      newWidth = el.x + el.width - x;
      newHeight = lockRatio ? newWidth / ratio : y - el.y;
      newX = x;
      break;
    case 'e':
      newWidth = x - el.x;
      newHeight = el.height;
      break;
    case 'w':
      newWidth = el.x + el.width - x;
      newHeight = el.height;
      newX = x;
      break;
    case 's':
      newWidth = el.width;
      newHeight = y - el.y;
      break;
    case 'n':
      newWidth = el.width;
      newHeight = el.y + el.height - y;
      newY = y;
      break;
  }

  if (newWidth < 20) newWidth = 20;
  if (newHeight < 20) newHeight = 20;

  el.width = newWidth;
  el.height = newHeight;
  if (newX !== undefined) el.x = newX;
  if (newY !== undefined) el.y = newY;

  this.updatePropertiesPanel();
  this.updateSelectionBox();
  this.render();
};

ImageCanvas.prototype.selectElement = function(el) {
  this.selectedElement = el;

  if (el) {
    document.getElementById('propertiesPanel').classList.remove('hidden');
    this.updatePropertiesPanel();
    this.updateSelectionBox();
  } else {
    document.getElementById('propertiesPanel').classList.add('hidden');
    document.getElementById('selectionBox').classList.add('hidden');
  }
};

ImageCanvas.prototype.getElementAt = function(x, y) {
  for (let i = this.elements.length - 1; i >= 0; i--) {
    const el = this.elements[i];
    if (this.isPointInElement(x, y, el)) {
      return el;
    }
  }
  return null;
};

ImageCanvas.prototype.isPointInElement = function(x, y, el) {
  return x >= el.x && x <= el.x + el.width &&
         y >= el.y && y <= el.y + el.height;
};

ImageCanvas.prototype.moveLayer = function(delta) {
  if (!this.selectedElement) return;

  const idx = this.elements.indexOf(this.selectedElement);
  if (idx === -1) return;

  if (delta === Infinity) {
    this.elements.splice(idx, 1);
    this.elements.push(this.selectedElement);
  } else if (delta === -Infinity) {
    this.elements.splice(idx, 1);
    this.elements.unshift(this.selectedElement);
  } else {
    const newIdx = idx + delta;
    if (newIdx >= 0 && newIdx < this.elements.length) {
      [this.elements[idx], this.elements[newIdx]] = [this.elements[newIdx], this.elements[idx]];
    }
  }

  this.render();
  this.saveHistory();
};

ImageCanvas.prototype.deleteSelected = function() {
  if (!this.selectedElement) return;

  const idx = this.elements.indexOf(this.selectedElement);
  if (idx > -1) {
    this.elements.splice(idx, 1);
    this.selectElement(null);
    this.render();
    this.saveHistory();
    this.updateStats();
  }
};

ImageCanvas.prototype.clear = function() {
  if (this.elements.length === 0) return;
  if (!confirm('确定要清空画布吗？')) return;

  this.elements = [];
  this.selectElement(null);
  this.render();
  this.saveHistory();
  this.updateStats();
};
