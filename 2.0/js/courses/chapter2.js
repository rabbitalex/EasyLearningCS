// 第二章：运算与表达式
const CHAPTER2 = {
  chapter: "第二章：运算与表达式",
  icon: "🧮",
  lessons: [
    {
      id: "2-1",
      title: "数学运算 - Python计算器",
      xp: 15,
      code: 'a = 10\nb = 3\nprint("加法:", a + b)\nprint("减法:", a - b)\nprint("乘法:", a * b)\nprint("除法:", a / b)\nprint("整除:", a // b)\nprint("取余:", a % b)\nprint("乘方:", a ** b)',
      steps: [
        {
          title: "Python是超级计算器！",
          content: `<p>Python可以当一个<strong>超级计算器</strong>来用！它支持所有数学运算，而且比计算器更强大！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🧮 Python运算符一览</div>
  <div class="ch2-op-grid">
    <div class="ch2-op-card" style="--opc:#6c5ce7"><div class="ch2-op-sym">+</div><div class="ch2-op-name">加法</div><div class="ch2-op-ex">10 + 3 = 13</div></div>
    <div class="ch2-op-card" style="--opc:#00cec9"><div class="ch2-op-sym">-</div><div class="ch2-op-name">减法</div><div class="ch2-op-ex">10 - 3 = 7</div></div>
    <div class="ch2-op-card" style="--opc:#fd79a8"><div class="ch2-op-sym">*</div><div class="ch2-op-name">乘法</div><div class="ch2-op-ex">10 * 3 = 30</div></div>
    <div class="ch2-op-card" style="--opc:#fdcb6e"><div class="ch2-op-sym">/</div><div class="ch2-op-name">除法</div><div class="ch2-op-ex">10 / 3 = 3.33...</div></div>
    <div class="ch2-op-card" style="--opc:#00b894"><div class="ch2-op-sym">//</div><div class="ch2-op-name">整除</div><div class="ch2-op-ex">10 // 3 = 3</div></div>
    <div class="ch2-op-card" style="--opc:#e17055"><div class="ch2-op-sym">%</div><div class="ch2-op-name">取余</div><div class="ch2-op-ex">10 % 3 = 1</div></div>
    <div class="ch2-op-card" style="--opc:#a29bfe"><div class="ch2-op-sym">**</div><div class="ch2-op-name">乘方</div><div class="ch2-op-ex">10 ** 3 = 1000</div></div>
  </div>
  <div class="theory-callout">💡 注意 <strong>/</strong>（除法）和 <strong>//</strong>（整除）的区别：<code>10/3=3.333...</code> 而 <code>10//3=3</code></div>
</div>
<style>
.ch2-op-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(95px,1fr));gap:0.5rem;margin:0.8rem 0}
.ch2-op-card{background:#0d0d1a;border-radius:10px;padding:0.6rem;text-align:center;border-top:3px solid var(--opc);transition:transform 0.2s;animation:nodeAppear 0.4s ease both}
.ch2-op-card:nth-child(1){animation-delay:0s}.ch2-op-card:nth-child(2){animation-delay:0.05s}.ch2-op-card:nth-child(3){animation-delay:0.1s}.ch2-op-card:nth-child(4){animation-delay:0.15s}.ch2-op-card:nth-child(5){animation-delay:0.2s}.ch2-op-card:nth-child(6){animation-delay:0.25s}.ch2-op-card:nth-child(7){animation-delay:0.3s}
@keyframes nodeAppear{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}
.ch2-op-card:hover{transform:translateY(-3px)}
.ch2-op-sym{font-size:1.4rem;font-weight:900;color:var(--opc);font-family:monospace}
.ch2-op-name{font-size:0.82rem;color:#c8d0e0;margin:0.15rem 0}
.ch2-op-ex{font-size:0.92rem;color:#FF9800;font-weight:700;font-family:monospace;background:rgba(108,92,231,0.08);padding:0.15rem 0.3rem;border-radius:4px}
.theory-anim-box{background:linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,206,201,0.08));border:1px solid rgba(108,92,231,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;font-weight:700;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(108,92,231,0.1);border-left:3px solid #6c5ce7;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
</style>`
        },
        {
          title: "运算实例 - 动手试试！",
          content: `<p>让我们用 Python 来计算各种运算的结果：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎬 运算演示</div>
  <div class="ch2-calc-demo">
    <div class="ch2-calc-row"><span class="ch2-calc-expr">10 + 3</span><span class="ch2-calc-arrow">→</span><span class="ch2-calc-result" style="color:#FF9800;font-weight:700">13</span><span class="ch2-calc-tag">加法</span></div>
    <div class="ch2-calc-row"><span class="ch2-calc-expr">10 - 3</span><span class="ch2-calc-arrow">→</span><span class="ch2-calc-result" style="color:#00cec9">7</span><span class="ch2-calc-tag">减法</span></div>
    <div class="ch2-calc-row"><span class="ch2-calc-expr">10 * 3</span><span class="ch2-calc-arrow">→</span><span class="ch2-calc-result" style="color:#fd79a8">30</span><span class="ch2-calc-tag">乘法</span></div>
    <div class="ch2-calc-row"><span class="ch2-calc-expr">10 / 3</span><span class="ch2-calc-arrow">→</span><span class="ch2-calc-result" style="color:#fdcb6e">3.333...</span><span class="ch2-calc-tag">精确除法</span></div>
    <div class="ch2-calc-row"><span class="ch2-calc-expr">10 // 3</span><span class="ch2-calc-arrow">→</span><span class="ch2-calc-result" style="color:#00b894">3</span><span class="ch2-calc-tag">只要整数</span></div>
    <div class="ch2-calc-row"><span class="ch2-calc-expr">10 % 3</span><span class="ch2-calc-arrow">→</span><span class="ch2-calc-result" style="color:#e17055">1</span><span class="ch2-calc-tag">余数</span></div>
    <div class="ch2-calc-row"><span class="ch2-calc-expr">10 ** 3</span><span class="ch2-calc-arrow">→</span><span class="ch2-calc-result" style="color:#FF9800;font-weight:700">1000</span><span class="ch2-calc-tag">10的3次方</span></div>
  </div>
</div>
<p>🔍 <strong>整除和取余</strong>的妙用：判断一个数能否被整除！</p>
<div class="theory-anim-box">
  <div class="ch2-mod-demo">
    <div class="ch2-mod-item"><code>10 % 2 == 0</code> → <span style="color:#00b894">True</span>（10是偶数）</div>
    <div class="ch2-mod-item"><code>7 % 2 == 0</code> → <span style="color:#e17055">False</span>（7是奇数）</div>
    <div class="ch2-mod-item"><code>15 % 3 == 0</code> → <span style="color:#00b894">True</span>（15能被3整除）</div>
  </div>
</div>
<style>
.ch2-calc-demo{display:flex;flex-direction:column;gap:0.3rem}
.ch2-calc-row{display:flex;align-items:center;gap:0.6rem;background:#0d0d1a;border-radius:8px;padding:0.4rem 0.7rem;animation:slideInPipe 0.4s ease both}
.ch2-calc-row:nth-child(1){animation-delay:0.05s}.ch2-calc-row:nth-child(2){animation-delay:0.1s}.ch2-calc-row:nth-child(3){animation-delay:0.15s}.ch2-calc-row:nth-child(4){animation-delay:0.2s}.ch2-calc-row:nth-child(5){animation-delay:0.25s}.ch2-calc-row:nth-child(6){animation-delay:0.3s}.ch2-calc-row:nth-child(7){animation-delay:0.35s}
@keyframes slideInPipe{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}
.ch2-calc-expr{font-family:monospace;font-size:0.82rem;color:#FF9800;font-weight:700;min-width:65px;font-weight:700}
.ch2-calc-arrow{color:#c8d0e0;font-size:0.9rem}
.ch2-calc-result{font-family:monospace;font-size:0.85rem;font-weight:800;min-width:55px}
.ch2-calc-tag{font-size:0.92rem;color:#c8d0e0;margin-left:auto}
.ch2-mod-demo{display:flex;flex-direction:column;gap:0.3rem}
.ch2-mod-item{background:#0d0d1a;border-radius:8px;padding:0.4rem 0.7rem;font-size:0.92rem;color:#e8ecf2;font-family:monospace}
</style>`,
          codeToLoad: 'a = 10\nb = 3\nprint("加法:", a + b)\nprint("减法:", a - b)\nprint("乘法:", a * b)\nprint("除法:", a / b)\nprint("整除:", a // b)\nprint("取余:", a % b)\nprint("乘方:", a ** b)'
        },
        {
          title: "运算优先级",
          content: `<p>和数学一样，Python也有<strong>运算优先级</strong>——先乘除后加减！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🧮 优先级解析动画</div>
  <div class="ch2-priority-demo">
    <div class="ch2-pri-expr">2 + 3 * 4 = ?</div>
    <div class="ch2-pri-steps">
      <div class="ch2-pri-step"><span class="ch2-pri-badge">①</span> 先算 <span class="ch2-pri-hl">3 * 4 = 12</span>（乘法优先）</div>
      <div class="ch2-pri-step"><span class="ch2-pri-badge" style="background:#00cec9">②</span> 再算 <span class="ch2-pri-hl" style="color:#00b894">2 + 12 = 14</span></div>
    </div>
    <div class="ch2-pri-vs">
      <div class="ch2-pri-vs-item"><code>2 + 3 * 4</code><span class="ch2-pri-eq">=</span><strong style="color:#00b894">14</strong></div>
      <div class="ch2-pri-vs-sep">VS</div>
      <div class="ch2-pri-vs-item"><code>(2 + 3) * 4</code><span class="ch2-pri-eq">=</span><strong style="color:#fdcb6e">20</strong></div>
    </div>
  </div>
  <div class="theory-callout">💡 括号可以改变优先级！不确定时多加括号是个好习惯。</div>
</div>
<style>
.ch2-priority-demo{margin:0.6rem 0}
.ch2-pri-expr{font-family:monospace;font-size:1.1rem;color:#FF9800;font-weight:700;text-align:center;font-weight:800;margin-bottom:0.7rem}
.ch2-pri-steps{display:flex;flex-direction:column;gap:0.3rem;margin-bottom:0.7rem}
.ch2-pri-step{background:#0d0d1a;border-radius:8px;padding:0.45rem 0.7rem;font-size:0.92rem;color:#e8ecf2;display:flex;align-items:center;gap:0.5rem}
.ch2-pri-badge{width:22px;height:22px;border-radius:50%;background:#6c5ce7;color:#fff;font-size:0.8rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.ch2-pri-hl{color:#fdcb6e;font-weight:700;font-family:monospace}
.ch2-pri-vs{display:flex;align-items:center;justify-content:center;gap:0.8rem;margin-top:0.5rem;flex-wrap:wrap}
.ch2-pri-vs-item{background:#0d0d1a;border-radius:8px;padding:0.5rem 0.8rem;display:flex;align-items:center;gap:0.4rem;font-family:monospace;font-size:0.82rem;color:#e8ecf2}
.ch2-pri-vs-sep{font-size:0.9rem;font-weight:800;color:#fd79a8}
.ch2-pri-eq{color:#c8d0e0;margin:0 0.2rem}
</style>`,
          codeToLoad: 'result1 = 2 + 3 * 4\nprint("2 + 3 * 4 =", result1)\n\nresult2 = (2 + 3) * 4\nprint("(2 + 3) * 4 =", result2)\n\n# 乘方优先级最高\nresult3 = 2 ** 3 + 1\nprint("2 ** 3 + 1 =", result3)'
        },
        {
          title: "实用技巧：复合赋值",
          content: `<p>Python提供了<strong>简写运算符</strong>，让代码更简洁：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">✨ 复合赋值运算符</div>
  <div class="ch2-compound-grid">
    <div class="ch2-cmp-row"><span class="ch2-cmp-long">x = x + 5</span><span class="ch2-cmp-arrow">简写为</span><span class="ch2-cmp-short">x += 5</span></div>
    <div class="ch2-cmp-row"><span class="ch2-cmp-long">x = x - 3</span><span class="ch2-cmp-arrow">简写为</span><span class="ch2-cmp-short">x -= 3</span></div>
    <div class="ch2-cmp-row"><span class="ch2-cmp-long">x = x * 2</span><span class="ch2-cmp-arrow">简写为</span><span class="ch2-cmp-short">x *= 2</span></div>
    <div class="ch2-cmp-row"><span class="ch2-cmp-long">x = x / 4</span><span class="ch2-cmp-arrow">简写为</span><span class="ch2-cmp-short">x /= 4</span></div>
    <div class="ch2-cmp-row"><span class="ch2-cmp-long">x = x ** 2</span><span class="ch2-cmp-arrow">简写为</span><span class="ch2-cmp-short">x **= 2</span></div>
  </div>
</div>
<div class="step-callout tip">🎯 复合赋值在循环中特别常用！比如计数器 <code>count += 1</code></div>
<style>
.ch2-compound-grid{display:flex;flex-direction:column;gap:0.3rem;margin:0.5rem 0}
.ch2-cmp-row{display:flex;align-items:center;gap:0.5rem;background:#0d0d1a;border-radius:8px;padding:0.4rem 0.7rem}
.ch2-cmp-long{font-family:monospace;font-size:0.92rem;color:#c8d0e0;min-width:85px;text-decoration:line-through;text-decoration-color:rgba(225,112,85,0.5)}
.ch2-cmp-arrow{font-size:0.8rem;color:#fdcb6e;font-weight:700}
.ch2-cmp-short{font-family:monospace;font-size:0.82rem;color:#00b894;font-weight:700}
</style>`,
          codeToLoad: 'score = 0\nprint("初始分数:", score)\n\nscore += 10\nprint("加10分:", score)\n\nscore += 25\nprint("再加25:", score)\n\nscore *= 2\nprint("翻倍:", score)\n\nscore -= 5\nprint("扣5分:", score)'
        }
      ],
      challenge: {
        desc: "🎯 小明有50元，买了3本笔记本每本8元，又买了1支笔5元。请计算并打印：花了多少钱？还剩多少钱？",
        hint: 'money = 50\nspent = 3 * 8 + 5\nleft = money - spent\nprint("花了", spent, "元")\nprint("剩余", left, "元")',
        template: '# 计算小明的零花钱\nmoney = 50\n',
        check: function(output) { return output.indexOf("29") !== -1 || output.indexOf("21") !== -1; }
      }
    },
    {
      id: "2-2",
      title: "字符串操作 - 文字魔法",
      xp: 15,
      code: 'name = "Python"\nprint(name + " 真有趣！")\nprint(name * 3)\nprint(len(name))\nprint(name[0])\nprint(name.upper())',
      steps: [
        {
          title: "字符串拼接与重复",
          content: `<p>字符串也可以做"运算"哦！用 <em>+</em> 拼接，用 <em>*</em> 重复：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔗 字符串运算演示</div>
  <div class="ch2-str-demo">
    <div class="ch2-str-row">
      <div class="ch2-str-op">
        <span class="ch2-str-val">"Hello"</span>
        <span class="ch2-str-sign">+</span>
        <span class="ch2-str-val">" World"</span>
      </div>
      <span class="ch2-str-eq">→</span>
      <span class="ch2-str-result">"Hello World"</span>
    </div>
    <div class="ch2-str-row">
      <div class="ch2-str-op">
        <span class="ch2-str-val">"哈"</span>
        <span class="ch2-str-sign">*</span>
        <span class="ch2-str-val" style="color:#fdcb6e">5</span>
      </div>
      <span class="ch2-str-eq">→</span>
      <span class="ch2-str-result">"哈哈哈哈哈"</span>
    </div>
    <div class="ch2-str-row">
      <div class="ch2-str-op">
        <span class="ch2-str-val">"🐍"</span>
        <span class="ch2-str-sign">*</span>
        <span class="ch2-str-val" style="color:#fdcb6e">3</span>
      </div>
      <span class="ch2-str-eq">→</span>
      <span class="ch2-str-result">"🐍🐍🐍"</span>
    </div>
  </div>
  <div class="theory-callout">⚠️ 注意：字符串和数字不能直接用 + 拼接！需要用 <code>str()</code> 先转换。</div>
</div>
<style>
.ch2-str-demo{display:flex;flex-direction:column;gap:0.4rem;margin:0.6rem 0}
.ch2-str-row{display:flex;align-items:center;gap:0.5rem;background:#0d0d1a;border-radius:8px;padding:0.5rem 0.7rem;flex-wrap:wrap}
.ch2-str-op{display:flex;align-items:center;gap:0.3rem}
.ch2-str-val{font-family:monospace;font-size:0.82rem;color:#00b894;font-weight:700}
.ch2-str-sign{font-size:0.9rem;color:#fd79a8;font-weight:800}
.ch2-str-eq{color:#c8d0e0;font-size:0.9rem}
.ch2-str-result{font-family:monospace;font-size:0.82rem;color:#FF9800;font-weight:700;font-weight:700;background:rgba(108,92,231,0.1);padding:0.2rem 0.5rem;border-radius:4px}
</style>`,
          codeToLoad: 'first = "Hello"\nsecond = " World"\nresult = first + second\nprint(result)\nprint("哈" * 5)\nprint("=-" * 15)'
        },
        {
          title: "字符串索引 - 每个字符有编号",
          content: `<p>字符串中每个字符都有一个编号（<strong>索引</strong>），<strong>从0开始</strong>：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔢 字符串索引图解</div>
  <div class="ch2-idx-demo">
    <div class="ch2-idx-chars">
      <div class="ch2-idx-cell"><div class="ch2-idx-char">P</div><div class="ch2-idx-num">0</div></div>
      <div class="ch2-idx-cell"><div class="ch2-idx-char">y</div><div class="ch2-idx-num">1</div></div>
      <div class="ch2-idx-cell"><div class="ch2-idx-char">t</div><div class="ch2-idx-num">2</div></div>
      <div class="ch2-idx-cell"><div class="ch2-idx-char">h</div><div class="ch2-idx-num">3</div></div>
      <div class="ch2-idx-cell"><div class="ch2-idx-char">o</div><div class="ch2-idx-num">4</div></div>
      <div class="ch2-idx-cell"><div class="ch2-idx-char">n</div><div class="ch2-idx-num">5</div></div>
    </div>
    <div class="ch2-idx-negative">
      <div class="ch2-idx-cell"><div class="ch2-idx-char">P</div><div class="ch2-idx-num" style="color:#e17055">-6</div></div>
      <div class="ch2-idx-cell"><div class="ch2-idx-char">y</div><div class="ch2-idx-num" style="color:#e17055">-5</div></div>
      <div class="ch2-idx-cell"><div class="ch2-idx-char">t</div><div class="ch2-idx-num" style="color:#e17055">-4</div></div>
      <div class="ch2-idx-cell"><div class="ch2-idx-char">h</div><div class="ch2-idx-num" style="color:#e17055">-3</div></div>
      <div class="ch2-idx-cell"><div class="ch2-idx-char">o</div><div class="ch2-idx-num" style="color:#e17055">-2</div></div>
      <div class="ch2-idx-cell"><div class="ch2-idx-char">n</div><div class="ch2-idx-num" style="color:#e17055">-1</div></div>
    </div>
    <div class="ch2-idx-labels">
      <span style="color:#FF9800;font-weight:700">↑ 正向索引（从0开始）</span>
      <span style="color:#e17055">↑ 反向索引（从-1开始）</span>
    </div>
  </div>
  <div class="ch2-idx-examples">
    <div class="ch2-idx-ex"><code>word[0]</code> → <strong style="color:#00b894">"P"</strong>（第一个）</div>
    <div class="ch2-idx-ex"><code>word[2]</code> → <strong style="color:#00b894">"t"</strong>（第三个）</div>
    <div class="ch2-idx-ex"><code>word[-1]</code> → <strong style="color:#00b894">"n"</strong>（最后一个）</div>
    <div class="ch2-idx-ex"><code>word[1:4]</code> → <strong style="color:#00b894">"yth"</strong>（切片：索引1到3）</div>
  </div>
</div>
<style>
.ch2-idx-demo{margin:0.5rem 0}
.ch2-idx-chars,.ch2-idx-negative{display:flex;gap:0.3rem;justify-content:center;margin-bottom:0.3rem}
.ch2-idx-cell{display:flex;flex-direction:column;align-items:center;gap:0.15rem;animation:nodeAppear 0.3s ease both}
.ch2-idx-cell:nth-child(1){animation-delay:0.05s}.ch2-idx-cell:nth-child(2){animation-delay:0.1s}.ch2-idx-cell:nth-child(3){animation-delay:0.15s}.ch2-idx-cell:nth-child(4){animation-delay:0.2s}.ch2-idx-cell:nth-child(5){animation-delay:0.25s}.ch2-idx-cell:nth-child(6){animation-delay:0.3s}
.ch2-idx-char{width:32px;height:32px;background:#0d0d1a;border:1px solid rgba(108,92,231,0.3);border-radius:6px;display:flex;align-items:center;justify-content:center;font-family:monospace;font-size:0.9rem;font-weight:700;color:#FF9800;font-weight:700}
.ch2-idx-num{font-size:0.92rem;font-weight:700;color:#FF9800;font-weight:700;font-family:monospace}
.ch2-idx-labels{display:flex;justify-content:space-between;font-size:0.92rem;font-weight:700;margin-top:0.2rem}
.ch2-idx-examples{display:flex;flex-direction:column;gap:0.2rem;margin-top:0.6rem}
.ch2-idx-ex{background:#0d0d1a;border-radius:6px;padding:0.3rem 0.6rem;font-size:0.9rem;color:#e8ecf2}
</style>`,
          codeToLoad: 'word = "Python"\nprint(word[0])\nprint(word[1])\nprint(word[-1])\nprint(word[2:4])\nprint(word[:3])\nprint(word[3:])'
        },
        {
          title: "常用字符串方法",
          content: `<p>字符串有很多实用的<strong>内置方法</strong>：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🛠️ 字符串方法速查</div>
  <div class="ch2-method-grid">
    <div class="ch2-meth-card">
      <div class="ch2-meth-name">.upper()</div>
      <div class="ch2-meth-desc">全部变大写</div>
      <div class="ch2-meth-ex">"hello" → "HELLO"</div>
    </div>
    <div class="ch2-meth-card">
      <div class="ch2-meth-name">.lower()</div>
      <div class="ch2-meth-desc">全部变小写</div>
      <div class="ch2-meth-ex">"HELLO" → "hello"</div>
    </div>
    <div class="ch2-meth-card">
      <div class="ch2-meth-name">.title()</div>
      <div class="ch2-meth-desc">首字母大写</div>
      <div class="ch2-meth-ex">"hello world" → "Hello World"</div>
    </div>
    <div class="ch2-meth-card">
      <div class="ch2-meth-name">.replace(a,b)</div>
      <div class="ch2-meth-desc">替换内容</div>
      <div class="ch2-meth-ex">"hello" → "hi"</div>
    </div>
    <div class="ch2-meth-card">
      <div class="ch2-meth-name">.strip()</div>
      <div class="ch2-meth-desc">去除两端空格</div>
      <div class="ch2-meth-ex">" hi " → "hi"</div>
    </div>
    <div class="ch2-meth-card">
      <div class="ch2-meth-name">len()</div>
      <div class="ch2-meth-desc">计算长度</div>
      <div class="ch2-meth-ex">len("Python") → 6</div>
    </div>
  </div>
</div>
<style>
.ch2-method-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:0.4rem;margin:0.6rem 0}
.ch2-meth-card{background:#0d0d1a;border-radius:8px;padding:0.5rem;border-left:3px solid #6c5ce7;transition:transform 0.2s}
.ch2-meth-card:hover{transform:translateX(3px)}
.ch2-meth-name{font-family:monospace;font-size:0.9rem;font-weight:700;color:#FF9800;font-weight:700;margin-bottom:0.15rem}
.ch2-meth-desc{font-size:0.8rem;color:#c8d0e0}
.ch2-meth-ex{font-family:monospace;font-size:0.92rem;color:#00b894;margin-top:0.15rem}
</style>`,
          codeToLoad: 'text = "hello python"\nprint(text.upper())\nprint(text.title())\nprint(text.replace("hello", "Hi"))\nprint(len(text))\nprint("  hello  ".strip())'
        },
        {
          title: "格式化字符串 - f-string",
          content: `<p><strong>f-string</strong> 是 Python 中最方便的字符串格式化方式：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">✨ f-string 格式化</div>
  <div class="ch2-fstr-demo">
    <div class="ch2-fstr-row">
      <div class="ch2-fstr-code"><span style="color:#fd79a8">f</span>"我叫<span style="color:#fdcb6e">{name}</span>，今年<span style="color:#fdcb6e">{age}</span>岁"</div>
      <div class="ch2-fstr-result">→ "我叫小明，今年12岁"</div>
    </div>
    <div class="ch2-fstr-row">
      <div class="ch2-fstr-code"><span style="color:#fd79a8">f</span>"3 + 4 = <span style="color:#fdcb6e">{3 + 4}</span>"</div>
      <div class="ch2-fstr-result">→ "3 + 4 = 7"</div>
    </div>
    <div class="ch2-fstr-row">
      <div class="ch2-fstr-code"><span style="color:#fd79a8">f</span>"圆周率是<span style="color:#fdcb6e">{3.14159:.2f}</span>"</div>
      <div class="ch2-fstr-result">→ "圆周率是3.14"</div>
    </div>
  </div>
  <div class="theory-callout">💡 在引号前加 <code>f</code>，花括号 <code>{}</code> 里写变量或表达式，就会自动替换成值！</div>
</div>
<style>
.ch2-fstr-demo{display:flex;flex-direction:column;gap:0.4rem;margin:0.6rem 0}
.ch2-fstr-row{background:#0d0d1a;border-radius:8px;padding:0.5rem 0.7rem}
.ch2-fstr-code{font-family:monospace;font-size:0.92rem;color:#e8ecf2;margin-bottom:0.2rem}
.ch2-fstr-result{font-size:0.88rem;color:#00b894;font-family:monospace}
</style>`,
          codeToLoad: 'name = "小明"\nage = 12\nprint(f"我叫{name}，今年{age}岁")\nprint(f"3 + 4 = {3 + 4}")\nprint(f"名字长度: {len(name)}个字")'
        }
      ],
      challenge: {
        desc: "🎯 创建变量存储你的名字，然后：1) 打印名字的长度 2) 打印名字的大写 3) 将名字重复3次并打印",
        hint: 'name = "xiaoming"\nprint(len(name))\nprint(name.upper())\nprint(name * 3)',
        template: '# 字符串操作练习\n',
        check: function(output) { return output.trim().split('\n').length >= 3; }
      }
    }
  ]
};

registerChapter('python', CHAPTER2);
