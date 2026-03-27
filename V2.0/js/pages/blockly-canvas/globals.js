    // ==================== 全局变量 ====================
    var workspace;
    var canvas, ctx;
    var turtle = {
      x: 0,
      y: 0,
      angle: 0,
      penDown: true,
      color: '#00cec9',
      width: 2,
      visible: true,
      speed: 3
    };
    var variables = {};
    var isRunning = false;
    var executionSpeed = 500; // 毫秒
    
