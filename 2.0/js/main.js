// ========== Main Entry Point ==========

const App = {
  init() {
    // Initialize all modules
    Editor.init();
    Turtle.init('turtleCanvas');
    UI.initExamples();
    UI.initSpeedControl();
    
    // Check if coming from course
    this.checkFromCourse();
    
    // Setup shortcuts
    this.bindShortcuts();
    
    // Update stats
    this.updateStats();
    
    console.log('🐢 Turtle Editor Pro initialized');
  },
  
  checkFromCourse() {
    const fromCourse = Utils.storage.get('fromCourse');
    const editorCode = Utils.storage.get('editorCode');
    
    if (fromCourse && editorCode) {
      Editor.setValue(editorCode);
      UI.addOutput('📚 已加载课程代码', 'info');
      this.showBackToCourseButton();
    } else {
      UI.loadExample('star');
    }
  },
  
  showBackToCourseButton() {
    const nav = document.querySelector('.top-nav > div:last-child');
    if (!nav) return;
    
    const backBtn = document.createElement('a');
    backBtn.href = 'course-detail.html';
    backBtn.className = 'btn-neon px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold flex items-center gap-2 mr-2';
    backBtn.setAttribute('data-tooltip', '返回课程');
    backBtn.innerHTML = '<i class="fas fa-book-open"></i><span>返回课程</span>';
    backBtn.onclick = () => {
      Utils.storage.set('tempEditorCode', Editor.getValue());
    };
    
    const homeBtn = nav.querySelector('a[href="index.html"]');
    if (homeBtn) {
      nav.insertBefore(backBtn, homeBtn);
    }
  },
  
  bindShortcuts() {
    document.addEventListener('keydown', (e) => {
      // F5 - Run
      if (e.key === 'F5') {
        e.preventDefault();
        Executor.run();
      }
      
      // Ctrl+Enter - Run
      if (e.ctrlKey && e.key === 'Enter') {
        e.preventDefault();
        Executor.run();
      }
      
      // Escape - Stop
      if (e.key === 'Escape' && Executor.isRunning) {
        Executor.stop();
      }
    });
  },
  
  updateStats() {
    // Update line count
    const updateLineCount = () => {
      const lines = Editor.getValue().split('\n').length;
      const el = document.getElementById('lineCount');
      if (el) el.textContent = lines;
    };
    
    Editor.instance.on('change', updateLineCount);
    updateLineCount();
  }
};

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
