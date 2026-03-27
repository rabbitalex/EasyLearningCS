    // ==================== UI 交互 ====================
    function showGeneratedCode() {
      const code = pythonGenerator.workspaceToCode(workspace);
      displayPythonCode(code);
    }
    
    function copyCode() {
      const code = pythonGenerator.workspaceToCode(workspace);
      navigator.clipboard.writeText(code).then(() => {
        alert('代码已复制到剪贴板！');
      });
    }
    
    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      resetTurtle();
      drawGrid();
      variables = {};
      updateVariablesDisplay();
    }
    
    function resetWorkspace() {
      if (confirm('确定要重置工作区吗？所有积木将被清空。')) {
        workspace.clear();
        const startBlock = workspace.newBlock('turtle_start');
        startBlock.initSvg();
        startBlock.render();
        startBlock.moveBy(50, 50);
        clearCanvas();
      }
    }
    
    function updateVariablesDisplay() {
      const container = document.getElementById('variablesList');
      const varNames = Object.keys(variables);
      
      if (varNames.length === 0) {
        container.innerHTML = `
          <div class="empty-state">
            <i class="fas fa-clipboard-list"></i>
            <p>运行代码后变量将显示在这里</p>
          </div>
        `;
        return;
      }
      
      container.innerHTML = varNames.map(name => `
        <div class="variable-item">
          <span class="var-name">${name}</span>
          <span class="var-value">${variables[name]}</span>
        </div>
      `).join('');
    }
    
    // 速度控制
    document.getElementById('speedSlider').addEventListener('input', function(e) {
      const speed = parseInt(e.target.value);
      executionSpeed = 1000 / speed;
    });
    
