// ========== UI Controller ==========

const UI = {
  // Output panel
  addOutput(message, type = 'info') {
    const output = document.getElementById('output');
    const time = Utils.formatTime();
    
    const line = document.createElement('div');
    line.className = `output-line output-${type} animate-fade-in-up`;
    line.innerHTML = `
      <span class="output-time">${time}</span>
      <span class="output-text">${message}</span>
    `;
    
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
    
    // Update error badge
    if (type === 'error') {
      this.incrementBadge('error');
    }
  },
  
  clearOutput() {
    const output = document.getElementById('output');
    output.innerHTML = '';
    this.hideBadge('error');
  },
  
  // Variables panel
  addVariable(name, value) {
    const container = document.getElementById('variablesList');
    const type = Utils.getVarType(value);
    
    // Remove existing card for this variable
    const existing = container.querySelector(`[data-var="${name}"]`);
    if (existing) existing.remove();
    
    const card = document.createElement('div');
    card.className = `var-card ${type} animate-slide-in`;
    card.setAttribute('data-var', name);
    card.innerHTML = `
      <div class="var-header">
        <span class="var-name">
          <i class="fas fa-${type === 'list' ? 'list' : type === 'string' ? 'font' : 'hashtag'}"></i>
          ${name}
        </span>
        <span class="var-type">${type}</span>
      </div>
      <div class="var-value ${type}">${Utils.formatVar(value)}</div>
    `;
    
    container.appendChild(card);
    this.updateVarStats();
  },
  
  clearVariables() {
    const container = document.getElementById('variablesList');
    container.innerHTML = '';
    this.updateVarStats();
  },
  
  updateVarStats() {
    const container = document.getElementById('variablesList');
    const count = container.querySelectorAll('.var-card').length;
    const el = document.getElementById('varCount');
    if (el) el.textContent = count;
  },
  
  // Status
  updateStatus(status) {
    const el = document.getElementById('statusText');
    if (!el) return;
    
    const configs = {
      idle: { text: '待机中', class: 'status-idle' },
      running: { text: '运行中...', class: 'status-running' },
      error: { text: '出错了', class: 'status-error' }
    };
    
    const config = configs[status] || configs.idle;
    el.className = `status-badge ${config.class}`;
    el.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-current animate-pulse"></span>
      ${config.text}
    `;
  },
  
  // Tab switching
  switchTab(tabName) {
    // Hide all content
    document.querySelectorAll('.tab-content').forEach(el => {
      el.classList.remove('active');
    });
    
    // Remove active from tabs
    document.querySelectorAll('.output-tab').forEach(el => {
      el.classList.remove('active');
    });
    
    // Activate selected
    const content = document.getElementById(`${tabName}Tab`);
    const tab = document.querySelector(`[data-tab="${tabName}"]`);
    
    if (content) content.classList.add('active');
    if (tab) tab.classList.add('active');
  },
  
  // Badge management
  incrementBadge(type) {
    const badge = document.getElementById(`${type}Badge`);
    if (!badge) return;
    
    const count = parseInt(badge.textContent || '0') + 1;
    badge.textContent = count;
    badge.classList.remove('hidden');
  },
  
  hideBadge(type) {
    const badge = document.getElementById(`${type}Badge`);
    if (badge) {
      badge.textContent = '0';
      badge.classList.add('hidden');
    }
  },
  
  // Examples
  initExamples() {
    const select = document.getElementById('exampleSelect');
    if (!select) return;
    
    // Clear existing
    select.innerHTML = '<option value="">加载示例代码...</option>';
    
    // Add examples
    Object.entries(EXAMPLES).forEach(([key, example]) => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = `${example.name} (${example.category})`;
      select.appendChild(option);
    });
    
    // Change handler
    select.addEventListener('change', (e) => {
      if (e.target.value) {
        this.loadExample(e.target.value);
      }
    });
  },
  
  loadExample(key) {
    const example = EXAMPLES[key];
    if (!example) return;
    
    Editor.setValue(example.code);
    this.addOutput(`📂 已加载: ${example.name}`, 'info');
    
    // Update select
    const select = document.getElementById('exampleSelect');
    if (select) select.value = key;
  },
  
  // Speed control
  initSpeedControl() {
    const slider = document.getElementById('speedSlider');
    const value = document.getElementById('speedValue');
    
    if (!slider || !value) return;
    
    slider.addEventListener('input', (e) => {
      const speed = parseInt(e.target.value);
      Turtle.speed = speed;
      value.textContent = speed;
    });
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UI;
} else {
  window.UI = UI;
}
