    // ==================== 全局变量 ====================
    var editor;
    var canvas, ctx;
    var turtle = { x: 0, y: 0, angle: 90, penDown: true, color: '#00cec9', width: 2, visible: true };
    var variables = {};
    var outputContent = [];
    var errorCount = 0;
    var isRunning = false;
    var executionSpeed = 5;
    var skulptOutput = [];
    var skulptError = [];

    // 示例代码
    var examples = JSON.parse(document.getElementById('exampleData').textContent);

    // ==================== 初始化 ====================
    window.onload = function() {
      initEditor();
      initCanvas();
      loadExample('star');
      bindKeyboardShortcuts();
    };
