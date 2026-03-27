function executeNextStep() {
  if (state.stepIndex >= state.stepLines.length) {
    markStepComplete();
    return;
  }

  var currentInfo = state.stepLines[state.stepIndex];

  // ======= 动态循环逐行处理 =======
  if (currentInfo.isDynamicLoop) {
    var bodyLines = currentInfo.loopBodyLines;
    var bodyIdx = currentInfo.loopBodyIndex;
    var iteration = currentInfo.loopIteration;
    var maxIter = 200; // 安全上限防死循环

    if (iteration >= maxIter) {
      toast('⚠️ 循环已达最大迭代次数(' + maxIter + ')，自动退出');
      currentInfo.loopFinished = true;
      state.stepIndex++;
      advanceStep();
      return;
    }

    if (bodyIdx < 0) {
      // === 当前在条件判断行 ===
      highlightLine(currentInfo.loopHeaderLine);

      if (iteration === 0 && bodyLines.length > 0) {
        // 第一次到条件行：需要执行前置代码来检查条件是否成立
        var beforeCode = getAccumulatedCodeBefore(state.stepIndex);
        checkLoopConditionDone(currentInfo, beforeCode, function(done) {
          if (done) {
            // 条件一开始就不满足，跳过循环
            toast('🔄 循环条件不满足，跳过');
            currentInfo.loopFinished = true;
            state.stepIndex++;
            advanceStep();
          } else {
            // 条件满足，下次进入循环体第一行
            currentInfo.loopBodyIndex = 0;
          }
        });
      } else if (iteration > 0) {
        // 回到条件行（新一轮迭代开始），检查条件是否仍然满足
        var beforeCode2 = getAccumulatedCodeBefore(state.stepIndex);
        checkLoopConditionDone(currentInfo, beforeCode2, function(done) {
          if (done) {
            // 条件不满足，循环结束
            toast('✅ 循环条件不再满足，退出循环 (共 ' + iteration + ' 轮)');
            currentInfo.loopFinished = true;
            state.stepIndex++;
            advanceStep();
          } else {
            // 条件仍然满足，进入循环体
            currentInfo.loopBodyIndex = 0;
          }
        });
      } else {
        // 没有循环体的情况（空循环），直接跳过
        currentInfo.loopFinished = true;
        state.stepIndex++;
        advanceStep();
      }
      return;
    }

    // === 当前在循环体内的某一行 ===
    highlightLine(bodyLines[bodyIdx].lineNum);

    // 构造截止到当前行的代码并执行
    var beforeCode3 = getAccumulatedCodeBefore(state.stepIndex);
    var execCode = buildLoopStepCode(currentInfo, beforeCode3);

    if (!state.skulptReady) {
      simulateRun(execCode);
      // 推进到下一行
      if (bodyIdx + 1 < bodyLines.length) {
        currentInfo.loopBodyIndex = bodyIdx + 1;
      } else {
        // 本轮迭代执行完毕，回到条件判断
        currentInfo.loopIteration++;
        currentInfo.loopBodyIndex = -1;
      }
      return;
    }

    clearOutput();
    configureSkulpt(function(text) { appendOutput(text); });
    Sk.misceval.asyncToPromise(function() {
      return Sk.importMainWithBody("<stdin>", false, execCode, true);
    }).then(function(mod) {
      captureVariables(mod);
      // 推进到下一行
      if (bodyIdx + 1 < bodyLines.length) {
        currentInfo.loopBodyIndex = bodyIdx + 1;
      } else {
        // 本轮迭代执行完毕，回到条件判断
        currentInfo.loopIteration++;
        currentInfo.loopBodyIndex = -1;
      }
    }, function(err) {
      appendOutput('\u274c ' + err.toString() + '\n', 'error');
      // 出错时也推进
      if (bodyIdx + 1 < bodyLines.length) {
        currentInfo.loopBodyIndex = bodyIdx + 1;
      } else {
        currentInfo.loopIteration++;
        currentInfo.loopBodyIndex = -1;
      }
    });
    return;
  }

  // ======= 非循环步骤的原有逻辑 =======
  highlightLine(currentInfo.lineStart);

  // 复合结构的后续子句（如else/elif）：只高亮不重复执行代码
  if (currentInfo.isCompoundPart && currentInfo.compoundIndex > 0) {
    state.stepIndex++;
    advanceStep();
    return;
  }

  // 无代码步骤：仅高亮
  if (currentInfo.code === null) {
    state.stepIndex++;
    advanceStep();
    return;
  }

  var accumulated = '';
  for (var i = 0; i <= state.stepIndex; i++) {
    var stepInfo = state.stepLines[i];
    if (stepInfo.isCompoundPart && stepInfo.compoundIndex > 0) continue;
    if (stepInfo.code === null) continue;
    accumulated += stepInfo.code + '\n';
  }

  if (!state.skulptReady) {
    simulateRun(accumulated);
    state.stepIndex++;
    advanceStep();
    return;
  }
  clearOutput();
  configureSkulpt(function(text) { appendOutput(text); });
  Sk.misceval.asyncToPromise(function() {
    return Sk.importMainWithBody("<stdin>", false, accumulated, true);
  }).then(function(mod) {
    captureVariables(mod);
    state.stepIndex++;
    advanceStep();
  }, function(err) {
    appendOutput('\u274c ' + err.toString() + '\n', 'error');
    state.stepIndex++;
  });
}

// 辅助：检查是否所有步骤已完成
function advanceStep() {
  if (state.stepIndex >= state.stepLines.length) {
    markStepComplete();
  }
}

// 标记单步执行完成
function markStepComplete() {
  toast('\u2705 全部代码执行完毕！');
  var nextBtn = document.getElementById('stepNextBtn');
  if (nextBtn) {
    nextBtn.disabled = true;
    nextBtn.classList.add('btn-disabled');
    nextBtn.innerHTML = '<i class="fas fa-check"></i> 已完成';
  }
  state.stepExecuting = false;
}

// 记录当前高亮的行号，用于滚动时更新位置
var _highlightedLineNum = 0;

