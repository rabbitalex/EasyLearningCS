// ===== 逐步执行 =====
// 辅助函数：判断是否为复合结构的继续子句（else, elif, except, finally 等）
function isCompoundContinuation(trimmed) {
  return /^(else\s*:|elif\s+.+:|except(\s+.+)?:|finally\s*:)/.test(trimmed);
}

// 辅助函数：收集一个以冒号结尾的块（包括其缩进体）
function collectBlock(rawLines, startIdx) {
  var line = rawLines[startIdx];
  var lineIndent = line.search(/\S/);
  if (lineIndent === -1) lineIndent = 0;
  var block = line;
  var j = startIdx + 1;
  while (j < rawLines.length) {
    var nextLine = rawLines[j];
    var nextTrimmed = nextLine.trim();
    if (nextTrimmed === '') { block += '\n' + nextLine; j++; continue; }
    var nextIndent = nextLine.search(/\S/);
    if (nextIndent > lineIndent) { block += '\n' + nextLine; j++; }
    else { break; }
  }
  return { block: block, endIdx: j };
}

function stepExecute(code) {
  clearOutput();
  state.variables = {};
  updateVariablesDisplay({});
  var rawLines = code.split('\n');
  state.stepLines = [];
  state.stepIndex = 0;
  state.stepExecuting = true;

  // 辅助：获取一个块内（不含头行）的非空行号列表
  function getBodyLineNumbers(rawLines, startIdx, endIdx) {
    var bodyLines = [];
    var headerIndent = rawLines[startIdx].search(/\S/);
    for (var k = startIdx + 1; k < endIdx; k++) {
      var t = rawLines[k].trim();
      if (t !== '' && !t.startsWith('#')) {
        bodyLines.push(k);
      }
    }
    return bodyLines;
  }

  var i = 0;
  while (i < rawLines.length) {
    var line = rawLines[i];
    var trimmed = line.trim();
    if (trimmed === '' || trimmed.startsWith('#')) { i++; continue; }
    var lineIndent = line.search(/\S/);
    if (lineIndent === -1) lineIndent = 0;

    if (trimmed.endsWith(':')) {
      // 收集当前块（如 if xxx: ... body）
      var result = collectBlock(rawLines, i);
      var fullBlock = result.block;
      var subSteps = [{ lineStart: i + 1 }]; // 第一个子步骤高亮if行
      var j = result.endIdx;

      // 检查是否紧跟 else/elif/except/finally 等复合续行
      while (j < rawLines.length) {
        var peekLine = rawLines[j];
        var peekTrimmed = peekLine.trim();
        // 跳过空行
        if (peekTrimmed === '') { fullBlock += '\n' + peekLine; j++; continue; }
        var peekIndent = peekLine.search(/\S/);
        // 同级缩进且是复合续行关键字
        if (peekIndent === lineIndent && isCompoundContinuation(peekTrimmed)) {
          subSteps.push({ lineStart: j + 1 }); // 记录else/elif行号用于高亮
          var subResult = collectBlock(rawLines, j);
          fullBlock += '\n' + subResult.block;
          j = subResult.endIdx;
        } else {
          break;
        }
      }

      // 判断是否为 for/while 循环
      var isLoop = /^(for|while)\s+/.test(trimmed);

      if (subSteps.length > 1) {
        // 复合结构（if/else等）：为每个子句创建一个步骤，代码都是完整块
        for (var s = 0; s < subSteps.length; s++) {
          state.stepLines.push({
            code: fullBlock,
            lineStart: subSteps[s].lineStart,
            lineEnd: j,
            isCompoundPart: true, // 标记为复合结构的一部分
            compoundIndex: s      // 该部分在复合结构中的索引
          });
        }
      } else if (isLoop) {
        // for/while 循环：解析为动态循环步骤，逐行逐迭代执行
        // 收集循环体内的各行（非空、非注释）
        var loopBodyLines = [];
        var headerIndent = rawLines[i].search(/\S/);
        for (var bi = i + 1; bi < j; bi++) {
          var bodyTrimmed = rawLines[bi].trim();
          if (bodyTrimmed !== '' && !bodyTrimmed.startsWith('#')) {
            loopBodyLines.push({
              lineNum: bi + 1,       // 1-based 行号用于高亮
              code: rawLines[bi],
              trimmed: bodyTrimmed
            });
          }
        }
        // 创建一个动态循环步骤
        // 解析 for 循环的变量和可迭代对象
        var isForLoop = /^for\s+/.test(trimmed);
        var forVarName = '';
        var forIterableExpr = '';
        if (isForLoop) {
          // 匹配 for VAR in EXPR:
          var forMatch = trimmed.match(/^for\s+(.+?)\s+in\s+(.+?)\s*:\s*$/);
          if (forMatch) {
            forVarName = forMatch[1];
            forIterableExpr = forMatch[2];
          }
        }
        state.stepLines.push({
          code: fullBlock,
          lineStart: i + 1,
          lineEnd: j,
          isDynamicLoop: true,       // 标记为动态循环
          isForLoop: isForLoop,      // 是否是 for 循环
          forVarName: forVarName,    // for 循环的变量名
          forIterableExpr: forIterableExpr, // for 循环的可迭代表达式
          loopHeaderLine: i + 1,     // 循环头行号（1-based）
          loopHeaderCode: rawLines[i], // 循环头代码
          loopBodyLines: loopBodyLines, // 循环体各行
          loopIteration: 0,          // 当前迭代次数
          loopBodyIndex: -1,         // -1表示在条件判断行，0~N表示体内第几行
          loopFinished: false        // 循环是否已结束
        });
      } else {
        // 简单块（如 def, class 等）
        state.stepLines.push({ code: fullBlock, lineStart: i + 1, lineEnd: j });
      }
      i = j;
    } else {
      // 检测多行表达式（未闭合的括号 [ ( { ）
      var openBrackets = 0;
      var combinedLine = line;
      var tempTrimmed = trimmed;
      for (var ci = 0; ci < tempTrimmed.length; ci++) {
        var ch = tempTrimmed[ci];
        if (ch === '(' || ch === '[' || ch === '{') openBrackets++;
        if (ch === ')' || ch === ']' || ch === '}') openBrackets--;
      }
      var endI = i + 1;
      while (openBrackets > 0 && endI < rawLines.length) {
        combinedLine += '\n' + rawLines[endI];
        var nextTr = rawLines[endI].trim();
        for (var ci2 = 0; ci2 < nextTr.length; ci2++) {
          var ch2 = nextTr[ci2];
          if (ch2 === '(' || ch2 === '[' || ch2 === '{') openBrackets++;
          if (ch2 === ')' || ch2 === ']' || ch2 === '}') openBrackets--;
        }
        endI++;
      }
      state.stepLines.push({ code: combinedLine, lineStart: i + 1, lineEnd: endI });
      i = endI;
    }
  }
  switchTab('variables');
  if (state.stepLines.length > 0) {
    toast('\ud83c\udfac 逐步执行模式 — 点击 <b>▶ 下一步</b> 执行代码');
    // 禁用运行和逐步执行按钮
    disableRunButtons();
    showStepButtons();
  }
}

// 辅助：收集当前步骤之前所有已执行代码（不含当前动态循环）
