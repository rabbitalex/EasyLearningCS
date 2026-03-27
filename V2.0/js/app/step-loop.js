function getAccumulatedCodeBefore(stepIndex) {
  var accumulated = '';
  for (var i = 0; i < stepIndex; i++) {
    var stepInfo = state.stepLines[i];
    if (stepInfo.isCompoundPart && stepInfo.compoundIndex > 0) continue;
    if (stepInfo.code === null) continue;
    if (stepInfo.isDynamicLoop) {
      // 动态循环已执行完的，用完整循环代码
      accumulated += stepInfo.code + '\n';
      continue;
    }
    accumulated += stepInfo.code + '\n';
  }
  return accumulated;
}

// 辅助：为动态循环构造截止到当前迭代、当前行的代码
// for 循环：展开为顺序赋值语句，避免 Python for 隐式赋值导致变量值错误
// while 循环：使用迭代轮次计数器截断
function buildLoopStepCode(loopInfo, beforeCode) {
  var iteration = loopInfo.loopIteration;  // 当前是第几轮（从0开始）
  var bodyIdx = loopInfo.loopBodyIndex;    // 当前执行到体内第几行（从0开始）
  var headerCode = loopInfo.loopHeaderCode;
  var bodyLines = loopInfo.loopBodyLines;
  var isForLoop = loopInfo.isForLoop;
  var forVarName = loopInfo.forVarName;
  var forIterableExpr = loopInfo.forIterableExpr;

  var code = beforeCode;

  if (isForLoop && forVarName && forIterableExpr) {
    // ===== FOR 循环：展开为顺序赋值代码 =====
    // 先将可迭代对象转为列表
    var itemsVar = '_items_' + state.stepIndex;
    code += itemsVar + ' = list(' + forIterableExpr + ')\n';

    // 计算循环体的公共缩进长度（取最小非零缩进）
    var minBodyIndent = Infinity;
    for (var mi = 0; mi < bodyLines.length; mi++) {
      var indentLen = bodyLines[mi].code.search(/\S/);
      if (indentLen >= 0 && indentLen < minBodyIndent) {
        minBodyIndent = indentLen;
      }
    }
    if (minBodyIndent === Infinity) minBodyIndent = 0;

    // 辅助函数：去掉循环体代码行的公共缩进前缀
    function stripBodyIndent(codeLine) {
      return codeLine.substring(minBodyIndent);
    }

    // 展开：每一轮直接用下标赋值 + 执行循环体（去掉公共缩进）
    // 完整执行前 iteration 轮
    for (var r = 0; r < iteration; r++) {
      code += forVarName + ' = ' + itemsVar + '[' + r + ']\n';
      for (var bl = 0; bl < bodyLines.length; bl++) {
        code += stripBodyIndent(bodyLines[bl].code) + '\n';
      }
    }
    // 当前轮（如果 bodyIdx >= 0，执行到 bodyIdx 行）
    if (bodyIdx >= 0) {
      code += forVarName + ' = ' + itemsVar + '[' + iteration + ']\n';
      for (var bl2 = 0; bl2 <= bodyIdx; bl2++) {
        code += stripBodyIndent(bodyLines[bl2].code) + '\n';
      }
    }
  } else {
    // ===== WHILE 循环：使用迭代轮次计数器截断 =====
    var bodyIndent = '';
    if (bodyLines.length > 0) {
      var firstBodyIndent = bodyLines[0].code.search(/\S/);
      for (var si2 = 0; si2 < firstBodyIndent; si2++) bodyIndent += ' ';
    } else {
      bodyIndent = '    ';
    }

    var targetIter = iteration;
    var targetStmt = bodyIdx;
    var iterVar = '_iter_' + state.stepIndex;
    code += iterVar + ' = 0\n';
    code += headerCode + '\n';

    for (var bl3 = 0; bl3 < bodyLines.length; bl3++) {
      if (bl3 === 0) {
        code += bodyIndent + 'if ' + iterVar + ' > ' + targetIter + ':\n';
        code += bodyIndent + '    break\n';
      }
      if (targetStmt >= 0) {
        code += bodyIndent + 'if ' + iterVar + ' == ' + targetIter + ' and ' + bl3 + ' > ' + targetStmt + ':\n';
        code += bodyIndent + '    break\n';
      } else {
        code += bodyIndent + 'if ' + iterVar + ' == ' + targetIter + ':\n';
        code += bodyIndent + '    break\n';
      }
      code += bodyLines[bl3].code + '\n';
    }
    code += bodyIndent + iterVar + ' += 1\n';
  }

  return code;
}

// 辅助：检查循环条件是否仍然满足
// for 循环：检查 iteration < len(list(iterable))
// while 循环：在同一个循环中先跳过 iteration 轮，然后检测能否进入下一轮
function checkLoopConditionDone(loopInfo, beforeCode, callback) {
  var iteration = loopInfo.loopIteration;
  var bodyLines = loopInfo.loopBodyLines;
  var headerCode = loopInfo.loopHeaderCode;
  var isForLoop = loopInfo.isForLoop;
  var forIterableExpr = loopInfo.forIterableExpr;

  if (isForLoop && forIterableExpr) {
    // ===== FOR 循环：直接检查迭代次数是否超过列表长度 =====
    var itemsVar = '_items_chk_' + state.stepIndex;
    var flagVar = '_loop_done_' + state.stepIndex;
    var code = beforeCode;
    code += itemsVar + ' = list(' + forIterableExpr + ')\n';
    code += flagVar + ' = ' + iteration + ' >= len(' + itemsVar + ')\n';

    if (!state.skulptReady) {
      callback(iteration >= 100);
      return;
    }

    configureSkulpt(function(text) { /* 静默 */ });
    Sk.misceval.asyncToPromise(function() {
      return Sk.importMainWithBody("<stdin>", false, code, true);
    }).then(function(mod) {
      var done = true;
      if (mod && mod.$d && mod.$d[flagVar] !== undefined) {
        done = mod.$d[flagVar].v === true || mod.$d[flagVar].v === 1;
      }
      callback(done);
    }, function(err) {
      callback(true);
    });
  } else {
    // ===== WHILE 循环：单循环方案 =====
    var bodyIndent = '';
    if (bodyLines.length > 0) {
      var firstBodyIndent = bodyLines[0].code.search(/\S/);
      for (var si2 = 0; si2 < firstBodyIndent; si2++) bodyIndent += ' ';
    } else {
      bodyIndent = '    ';
    }

    var iterVar = '_chk_iter_' + state.stepIndex;
    var flagVar2 = '_loop_done_' + state.stepIndex;

    var code2 = beforeCode;
    code2 += iterVar + ' = 0\n';
    code2 += flagVar2 + ' = True\n';
    code2 += headerCode + '\n';
    code2 += bodyIndent + 'if ' + iterVar + ' >= ' + iteration + ':\n';
    code2 += bodyIndent + '    ' + flagVar2 + ' = False\n';
    code2 += bodyIndent + '    break\n';
    for (var bl = 0; bl < bodyLines.length; bl++) {
      code2 += bodyLines[bl].code + '\n';
    }
    code2 += bodyIndent + iterVar + ' += 1\n';

    if (!state.skulptReady) {
      callback(iteration >= 100);
      return;
    }

    configureSkulpt(function(text) { /* 静默 */ });
    Sk.misceval.asyncToPromise(function() {
      return Sk.importMainWithBody("<stdin>", false, code2, true);
    }).then(function(mod) {
      var done = true;
      if (mod && mod.$d && mod.$d[flagVar2] !== undefined) {
        done = mod.$d[flagVar2].v === true || mod.$d[flagVar2].v === 1;
      }
      callback(done);
    }, function(err) {
      callback(true);
    });
  }
}

