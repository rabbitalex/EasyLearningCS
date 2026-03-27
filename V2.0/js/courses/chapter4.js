// 第四章：循环魔法
const CHAPTER4 = {
  chapter: "第四章：循环魔法",
  icon: "🔄",
  lessons: [
    {
      id: "4-1",
      title: "for循环 - 重复的力量",
      xp: 20,
      code: 'for i in range(5):\n    print("第", i+1, "次循环")\nprint("循环结束！")',
      steps: [
        {
          title: "为什么需要循环？",
          content: `<p>如果要打印5次"你好"，难道要写5个print？</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">❌ 笨方法 vs ✅ 聪明方法</div>
  <div class="ch4-vs-grid">
    <div class="ch4-vs-card ch4-vs-bad">
      <div class="ch4-vs-label">❌ 笨方法</div>
      <div class="ch4-vs-code">print("你好")
print("你好")
print("你好")
print("你好")
print("你好")</div>
      <div class="ch4-vs-tag">5行代码 😩</div>
    </div>
    <div class="ch4-vs-card ch4-vs-good">
      <div class="ch4-vs-label">✅ 聪明方法</div>
      <div class="ch4-vs-code">for i in range(5):
    print("你好")</div>
      <div class="ch4-vs-tag">2行搞定！🎉</div>
    </div>
  </div>
  <div class="theory-callout">💡 如果要打印100次呢？循环只需改一个数字：<code>range(100)</code>！</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,206,201,0.08));border:1px solid rgba(108,92,231,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;font-weight:700;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(108,92,231,0.1);border-left:3px solid #6c5ce7;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
.ch4-vs-grid{display:grid;grid-template-columns:1fr 1fr;gap:0.6rem;margin:0.5rem 0}
.ch4-vs-card{background:#0d0d1a;border-radius:10px;padding:0.6rem;border:1px solid}
.ch4-vs-bad{border-color:rgba(225,112,85,0.3)}
.ch4-vs-good{border-color:rgba(0,184,148,0.3)}
.ch4-vs-label{font-size:0.9rem;font-weight:800;margin-bottom:0.3rem;color:#e8ecf2}
.ch4-vs-code{font-family:monospace;font-size:0.82rem;color:#FF9800;font-weight:700;white-space:pre;line-height:1.5}
.ch4-vs-tag{font-size:0.8rem;margin-top:0.3rem;padding:0.15rem 0.5rem;border-radius:10px;display:inline-block}
.ch4-vs-bad .ch4-vs-tag{background:rgba(225,112,85,0.1);color:#e17055}
.ch4-vs-good .ch4-vs-tag{background:rgba(0,184,148,0.1);color:#00b894}
</style>`
        },
        {
          title: "range() 函数详解",
          content: `<p><em>range(n)</em> 会生成一串连续的数字，是循环的好搭档：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔢 range() 的三种用法</div>
  <div class="ch4-range-demos">
    <div class="ch4-range-row">
      <div class="ch4-range-code">range(5)</div>
      <div class="ch4-range-nums">
        <span class="ch4-range-num">0</span><span class="ch4-range-num">1</span><span class="ch4-range-num">2</span><span class="ch4-range-num">3</span><span class="ch4-range-num">4</span>
      </div>
      <div class="ch4-range-note">从0开始，到5之前停</div>
    </div>
    <div class="ch4-range-row">
      <div class="ch4-range-code">range(1, 6)</div>
      <div class="ch4-range-nums">
        <span class="ch4-range-num" style="border-color:rgba(0,206,201,0.4);color:#00cec9">1</span><span class="ch4-range-num" style="border-color:rgba(0,206,201,0.4);color:#00cec9">2</span><span class="ch4-range-num" style="border-color:rgba(0,206,201,0.4);color:#00cec9">3</span><span class="ch4-range-num" style="border-color:rgba(0,206,201,0.4);color:#00cec9">4</span><span class="ch4-range-num" style="border-color:rgba(0,206,201,0.4);color:#00cec9">5</span>
      </div>
      <div class="ch4-range-note">指定起点1，到6之前停</div>
    </div>
    <div class="ch4-range-row">
      <div class="ch4-range-code">range(0, 10, 2)</div>
      <div class="ch4-range-nums">
        <span class="ch4-range-num" style="border-color:rgba(253,121,168,0.4);color:#fd79a8">0</span><span class="ch4-range-num" style="border-color:rgba(253,121,168,0.4);color:#fd79a8">2</span><span class="ch4-range-num" style="border-color:rgba(253,121,168,0.4);color:#fd79a8">4</span><span class="ch4-range-num" style="border-color:rgba(253,121,168,0.4);color:#fd79a8">6</span><span class="ch4-range-num" style="border-color:rgba(253,121,168,0.4);color:#fd79a8">8</span>
      </div>
      <div class="ch4-range-note">步长为2，每次跳2个</div>
    </div>
  </div>
</div>
<style>
.ch4-range-demos{display:flex;flex-direction:column;gap:0.5rem}
.ch4-range-row{background:#0d0d1a;border-radius:10px;padding:0.6rem;display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap}
.ch4-range-code{font-family:monospace;font-size:0.92rem;color:#fdcb6e;font-weight:700;min-width:100px}
.ch4-range-nums{display:flex;gap:0.3rem}
.ch4-range-num{width:28px;height:28px;border-radius:6px;background:rgba(108,92,231,0.08);border:1px solid rgba(108,92,231,0.3);display:flex;align-items:center;justify-content:center;font-family:monospace;font-size:0.92rem;font-weight:700;color:#FF9800;font-weight:700;animation:nodeAppear 0.3s ease both}
.ch4-range-num:nth-child(1){animation-delay:0.05s}.ch4-range-num:nth-child(2){animation-delay:0.1s}.ch4-range-num:nth-child(3){animation-delay:0.15s}.ch4-range-num:nth-child(4){animation-delay:0.2s}.ch4-range-num:nth-child(5){animation-delay:0.25s}
@keyframes nodeAppear{from{opacity:0;transform:scale(0.7)}to{opacity:1;transform:scale(1)}}
.ch4-range-note{font-size:0.8rem;color:#c8d0e0;margin-left:auto}
</style>`,
          codeToLoad: 'for i in range(5):\n    print("i =", i)\n\nprint("---")\nfor i in range(1, 6):\n    print("i =", i)\n\nprint("---")\nfor i in range(0, 10, 2):\n    print("i =", i)'
        },
        {
          title: "循环实战 - 求和动画",
          content: `<p>用循环计算 1+2+3+...+10 的过程：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎬 累加过程可视化</div>
  <div class="ch4-sum-demo">
    <div class="ch4-sum-row"><span class="ch4-sum-i">i=1</span><span class="ch4-sum-op">total = 0 + 1 =</span><span class="ch4-sum-val">1</span></div>
    <div class="ch4-sum-row"><span class="ch4-sum-i">i=2</span><span class="ch4-sum-op">total = 1 + 2 =</span><span class="ch4-sum-val">3</span></div>
    <div class="ch4-sum-row"><span class="ch4-sum-i">i=3</span><span class="ch4-sum-op">total = 3 + 3 =</span><span class="ch4-sum-val">6</span></div>
    <div class="ch4-sum-row"><span class="ch4-sum-i">i=4</span><span class="ch4-sum-op">total = 6 + 4 =</span><span class="ch4-sum-val">10</span></div>
    <div class="ch4-sum-row ch4-sum-dots"><span>...</span></div>
    <div class="ch4-sum-row ch4-sum-final"><span class="ch4-sum-i">i=10</span><span class="ch4-sum-op">total = 45 + 10 =</span><span class="ch4-sum-val" style="color:#00b894;font-size:1rem">55</span></div>
  </div>
  <div class="theory-callout">🔍 点击<strong>逐步执行</strong>按钮，切到变量追踪Tab，看 total 如何一步步变化！</div>
</div>
<style>
.ch4-sum-demo{display:flex;flex-direction:column;gap:0.2rem;margin:0.5rem 0}
.ch4-sum-row{display:flex;align-items:center;gap:0.5rem;background:#0d0d1a;border-radius:6px;padding:0.3rem 0.6rem;animation:slideInPipe 0.3s ease both}
@keyframes slideInPipe{from{opacity:0;transform:translateX(-15px)}to{opacity:1;transform:translateX(0)}}
.ch4-sum-row:nth-child(1){animation-delay:0.05s}.ch4-sum-row:nth-child(2){animation-delay:0.1s}.ch4-sum-row:nth-child(3){animation-delay:0.15s}.ch4-sum-row:nth-child(4){animation-delay:0.2s}.ch4-sum-row:nth-child(6){animation-delay:0.3s}
.ch4-sum-i{font-family:monospace;font-size:0.88rem;color:#fdcb6e;font-weight:700;min-width:35px}
.ch4-sum-op{font-family:monospace;font-size:0.88rem;color:#c8d0e0}
.ch4-sum-val{font-family:monospace;font-size:0.82rem;color:#FF9800;font-weight:700;font-weight:800}
.ch4-sum-dots{justify-content:center;color:#c8d0e0;font-size:0.8rem}
.ch4-sum-final{background:rgba(0,184,148,0.08);border:1px solid rgba(0,184,148,0.2)}
</style>`,
          codeToLoad: 'total = 0\nfor i in range(1, 11):\n    total = total + i\n    print("加上", i, ", 总和 =", total)\nprint("最终结果:", total)'
        },
        {
          title: "遍历列表和字符串",
          content: `<p>for循环不只能遍历数字，还能遍历<strong>任何序列</strong>！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔄 for 可以遍历的东西</div>
  <div class="ch4-iter-grid">
    <div class="ch4-iter-card">
      <div class="ch4-iter-icon">🔢</div>
      <div class="ch4-iter-name">range()</div>
      <div class="ch4-iter-code">for i in range(5)</div>
    </div>
    <div class="ch4-iter-card">
      <div class="ch4-iter-icon">📋</div>
      <div class="ch4-iter-name">列表</div>
      <div class="ch4-iter-code">for x in [1,2,3]</div>
    </div>
    <div class="ch4-iter-card">
      <div class="ch4-iter-icon">📝</div>
      <div class="ch4-iter-name">字符串</div>
      <div class="ch4-iter-code">for c in "Hello"</div>
    </div>
  </div>
</div>
<style>
.ch4-iter-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0.5rem;margin:0.5rem 0}
.ch4-iter-card{background:#0d0d1a;border-radius:10px;padding:0.6rem;text-align:center;border-top:3px solid #6c5ce7;transition:transform 0.2s}
.ch4-iter-card:hover{transform:translateY(-3px)}
.ch4-iter-icon{font-size:1.3rem;margin-bottom:0.2rem}
.ch4-iter-name{font-size:0.9rem;font-weight:700;color:#e8ecf2;margin-bottom:0.2rem}
.ch4-iter-code{font-family:monospace;font-size:0.8rem;color:#FF9800;font-weight:700;background:rgba(108,92,231,0.08);padding:0.15rem 0.3rem;border-radius:4px}
</style>`,
          codeToLoad: '# 遍历列表\nfruits = ["苹果", "香蕉", "橙子"]\nfor fruit in fruits:\n    print("我喜欢", fruit)\n\nprint("---")\n# 遍历字符串\nfor char in "Python":\n    print(char, end=" ")'
        }
      ],
      challenge: {
        desc: "🎯 用for循环计算 1*2*3*...*10 的结果（10的阶乘）并打印。",
        hint: 'result = 1\nfor i in range(1, 11):\n    result = result * i\nprint(result)',
        template: '# 计算10的阶乘\nresult = 1\n',
        check: function(output) { return output.trim().indexOf("3628800") !== -1; }
      }
    },
    {
      id: "4-2",
      title: "while循环 - 条件重复",
      xp: 20,
      code: 'count = 1\nwhile count <= 5:\n    print("计数:", count)\n    count = count + 1\nprint("结束！")',
      steps: [
        {
          title: "while循环 - 不确定次数时使用",
          content: `<p><em>while</em> 循环会在条件为True时<strong>一直重复</strong>，直到条件变为False：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎮 while循环像游戏循环</div>
  <div class="ch4-while-flow">
    <div class="ch4-wf-step ch4-wf-start">开始</div>
    <div class="ch4-wf-arrow">↓</div>
    <div class="ch4-wf-step ch4-wf-cond">条件成立？</div>
    <div class="ch4-wf-branches">
      <div class="ch4-wf-branch">
        <span class="ch4-wf-label" style="color:#00b894">Yes ✅</span>
        <div class="ch4-wf-arrow">↓</div>
        <div class="ch4-wf-step ch4-wf-body">执行循环体</div>
        <div class="ch4-wf-arrow ch4-wf-loop">↩️ 回到条件检查</div>
      </div>
      <div class="ch4-wf-branch">
        <span class="ch4-wf-label" style="color:#e17055">No ❌</span>
        <div class="ch4-wf-arrow">↓</div>
        <div class="ch4-wf-step ch4-wf-end">跳出循环</div>
      </div>
    </div>
  </div>
</div>
<style>
.ch4-while-flow{display:flex;flex-direction:column;align-items:center;gap:0.1rem;margin:0.6rem 0}
.ch4-wf-step{background:#0d0d1a;border-radius:8px;padding:0.35rem 0.7rem;font-size:0.9rem;color:#e8ecf2;border:1px solid rgba(108,92,231,0.2)}
.ch4-wf-start{border-color:rgba(108,92,231,0.4);color:#FF9800;font-weight:700}
.ch4-wf-cond{border-radius:20px;background:rgba(253,203,110,0.08);border-color:rgba(253,203,110,0.4);color:#fdcb6e;font-weight:700}
.ch4-wf-body{border-color:rgba(0,184,148,0.3);color:#00b894}
.ch4-wf-end{border-color:rgba(225,112,85,0.3);color:#e17055}
.ch4-wf-arrow{font-size:0.9rem;color:#c8d0e0}
.ch4-wf-loop{color:#fdcb6e;font-size:0.9rem;font-weight:700}
.ch4-wf-branches{display:flex;gap:1.5rem;margin:0.2rem 0}
.ch4-wf-branch{display:flex;flex-direction:column;align-items:center;gap:0.1rem}
.ch4-wf-label{font-size:0.85rem;font-weight:700}
</style>`,
          codeToLoad: 'hp = 100\nwhile hp > 0:\n    print("还在战斗！HP:", hp)\n    hp = hp - 30\nprint("游戏结束")'
        },
        {
          title: "while vs for：什么时候用哪个？",
          content: `<p>两种循环各有所长：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">⚔️ for vs while 对比</div>
  <div class="ch4-compare-grid">
    <div class="ch4-cmp-card" style="border-color:rgba(108,92,231,0.3)">
      <div class="ch4-cmp-title" style="color:#FF9800;font-weight:700">🔄 for 循环</div>
      <div class="ch4-cmp-when">知道循环几次时用</div>
      <div class="ch4-cmp-examples">
        <div class="ch4-cmp-ex">打印1-10</div>
        <div class="ch4-cmp-ex">遍历列表</div>
        <div class="ch4-cmp-ex">重复固定次数</div>
      </div>
    </div>
    <div class="ch4-cmp-card" style="border-color:rgba(0,206,201,0.3)">
      <div class="ch4-cmp-title" style="color:#00cec9">🔁 while 循环</div>
      <div class="ch4-cmp-when">不确定次数，只知道条件时用</div>
      <div class="ch4-cmp-examples">
        <div class="ch4-cmp-ex">游戏循环（直到HP为0）</div>
        <div class="ch4-cmp-ex">猜数字（猜对为止）</div>
        <div class="ch4-cmp-ex">数值翻倍（直到超过1000）</div>
      </div>
    </div>
  </div>
</div>
<style>
.ch4-compare-grid{display:grid;grid-template-columns:1fr 1fr;gap:0.6rem;margin:0.5rem 0}
.ch4-cmp-card{background:#0d0d1a;border-radius:10px;padding:0.7rem;border-top:3px solid}
.ch4-cmp-title{font-size:0.82rem;font-weight:800;margin-bottom:0.2rem}
.ch4-cmp-when{font-size:0.82rem;color:#c8d0e0;margin-bottom:0.4rem}
.ch4-cmp-examples{display:flex;flex-direction:column;gap:0.2rem}
.ch4-cmp-ex{font-size:0.82rem;color:#e8ecf2;background:rgba(255,255,255,0.03);padding:0.2rem 0.4rem;border-radius:4px}
</style>`,
          codeToLoad: 'num = 1\nwhile num < 1000:\n    num = num * 2\n    print(num)\nprint("最终值:", num)'
        },
        {
          title: "break 和 continue - 循环控制",
          content: `<p>两个特殊关键字可以控制循环流程：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎮 循环控制指令</div>
  <div class="ch4-ctrl-grid">
    <div class="ch4-ctrl-card" style="border-color:rgba(225,112,85,0.4)">
      <div class="ch4-ctrl-icon">🛑</div>
      <div class="ch4-ctrl-name">break</div>
      <div class="ch4-ctrl-desc"><strong>立即跳出</strong>整个循环</div>
      <div class="ch4-ctrl-analogy">就像紧急刹车！</div>
    </div>
    <div class="ch4-ctrl-card" style="border-color:rgba(253,203,110,0.4)">
      <div class="ch4-ctrl-icon">⏭️</div>
      <div class="ch4-ctrl-name">continue</div>
      <div class="ch4-ctrl-desc"><strong>跳过本次</strong>，继续下一次</div>
      <div class="ch4-ctrl-analogy">就像跳过一个台阶！</div>
    </div>
  </div>
  <div class="ch4-ctrl-demo">
    <div class="ch4-ctrl-demo-title">示例：打印0-9，但跳过3，到7时停止</div>
    <div class="ch4-ctrl-nums">
      <span class="ch4-ctrl-num ch4-ctrl-ok">0</span>
      <span class="ch4-ctrl-num ch4-ctrl-ok">1</span>
      <span class="ch4-ctrl-num ch4-ctrl-ok">2</span>
      <span class="ch4-ctrl-num ch4-ctrl-skip">3 ⏭️</span>
      <span class="ch4-ctrl-num ch4-ctrl-ok">4</span>
      <span class="ch4-ctrl-num ch4-ctrl-ok">5</span>
      <span class="ch4-ctrl-num ch4-ctrl-ok">6</span>
      <span class="ch4-ctrl-num ch4-ctrl-stop">7 🛑</span>
      <span class="ch4-ctrl-num ch4-ctrl-dim">8</span>
      <span class="ch4-ctrl-num ch4-ctrl-dim">9</span>
    </div>
  </div>
</div>
<style>
.ch4-ctrl-grid{display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;margin:0.5rem 0}
.ch4-ctrl-card{background:#0d0d1a;border-radius:10px;padding:0.6rem;text-align:center;border-top:3px solid}
.ch4-ctrl-icon{font-size:1.3rem;margin-bottom:0.2rem}
.ch4-ctrl-name{font-family:monospace;font-size:0.85rem;font-weight:800;color:#FF9800;font-weight:700}
.ch4-ctrl-desc{font-size:0.85rem;color:#e8ecf2;margin:0.2rem 0}
.ch4-ctrl-analogy{font-size:0.8rem;color:#c8d0e0}
.ch4-ctrl-demo{background:#0d0d1a;border-radius:10px;padding:0.6rem;margin-top:0.5rem}
.ch4-ctrl-demo-title{font-size:0.85rem;color:#c8d0e0;margin-bottom:0.4rem}
.ch4-ctrl-nums{display:flex;gap:0.3rem;flex-wrap:wrap}
.ch4-ctrl-num{padding:0.2rem 0.5rem;border-radius:6px;font-family:monospace;font-size:0.9rem;font-weight:700}
.ch4-ctrl-ok{background:rgba(0,184,148,0.1);color:#00b894;border:1px solid rgba(0,184,148,0.2)}
.ch4-ctrl-skip{background:rgba(253,203,110,0.1);color:#fdcb6e;border:1px solid rgba(253,203,110,0.2)}
.ch4-ctrl-stop{background:rgba(225,112,85,0.1);color:#e17055;border:1px solid rgba(225,112,85,0.2)}
.ch4-ctrl-dim{background:rgba(255,255,255,0.02);color:#555;border:1px solid rgba(255,255,255,0.05)}
</style>`,
          codeToLoad: 'for i in range(10):\n    if i == 3:\n        continue  # 跳过3\n    if i == 7:\n        break     # 到7停止\n    print(i)'
        }
      ],
      challenge: {
        desc: "🎯 用while循环模拟倒计时：从10开始倒数到1，每次打印当前数字，最后打印\"发射！🚀\"",
        hint: 'n = 10\nwhile n >= 1:\n    print(n)\n    n = n - 1\nprint("发射！")',
        template: '# 倒计时程序\n',
        check: function(output) { return output.indexOf("1") !== -1 && output.indexOf("发射") !== -1; }
      }
    }
  ]
};

registerChapter('python', CHAPTER4);
