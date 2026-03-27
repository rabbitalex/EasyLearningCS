    // ==================== Skulpt 集成 (Python执行) ====================
    function runPythonCode(code) {
      skulptOutput = [];
      skulptError = [];
      errorCount = 0;
      updateErrorBadge();

      Sk.configure({
        output: pythonOutput,
        read: builtinRead,
        __future__: Sk.python3,
        execLimit: 5000
      });

      configureTurtle();

      return Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody('<stdin>', false, code, true);
      }).then(function(mod) {
        addOutput('✅ 程序执行完成', 'success');
        variables['__status__'] = '完成';
        updateVariablesDisplay();
        return true;
      }).catch(function(err) {
        addOutput('❌ 错误: ' + err.toString(), 'error');
        skulptError.push(err.toString());
        errorCount++;
        updateErrorBadge();
        return false;
      });
    }

    function builtinRead(x) {
      if (Sk.builtinFiles === undefined || Sk.builtinFiles.files[x] === undefined) {
        throw 'File not found: ' + x;
      }
      return Sk.builtinFiles.files[x];
    }

    function pythonOutput(text) {
      if (text.trim()) {
        addOutput(text, 'output');
        skulptOutput.push(text);
      }
    }

    function configureTurtle() {
      // Skulpt turtle 模块配置占位
    }
