// 第三章：条件判断
const CHAPTER3 = {
  chapter: "第三章：条件判断",
  icon: "🔀",
  lessons: [
    {
      id: "3-1",
      title: "if-else - 让程序做选择",
      xp: 20,
      code: 'age = 12\nif age >= 18:\n    print("你是成年人")\nelse:\n    print("你是未成年人")\nprint("程序结束")',
      steps: [
        {
          title: "什么是条件判断？",
          content: `<p>生活中我们每天都在做选择，程序也一样！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🤔 生活中的条件判断</div>
  <div class="ch3-life-grid">
    <div class="ch3-life-card">
      <div class="ch3-life-icon">🌧️</div>
      <div class="ch3-life-cond">如果下雨</div>
      <div class="ch3-life-branches">
        <div class="ch3-branch ch3-branch-yes">✅ 带伞</div>
        <div class="ch3-branch ch3-branch-no">❌ 不带伞</div>
      </div>
    </div>
    <div class="ch3-life-card">
      <div class="ch3-life-icon">🎮</div>
      <div class="ch3-life-cond">如果作业做完</div>
      <div class="ch3-life-branches">
        <div class="ch3-branch ch3-branch-yes">✅ 可以玩游戏</div>
        <div class="ch3-branch ch3-branch-no">❌ 继续写作业</div>
      </div>
    </div>
    <div class="ch3-life-card">
      <div class="ch3-life-icon">🚦</div>
      <div class="ch3-life-cond">如果红灯</div>
      <div class="ch3-life-branches">
        <div class="ch3-branch ch3-branch-yes">🛑 停下等待</div>
        <div class="ch3-branch ch3-branch-no">🟢 通行</div>
      </div>
    </div>
  </div>
  <div class="theory-callout">💡 Python用 <code>if-else</code> 来做条件判断，让程序也能"做选择"！</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(253,121,168,0.08),rgba(0,206,201,0.08));border:1px solid rgba(253,121,168,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;font-weight:700;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(253,121,168,0.1);border-left:3px solid #fd79a8;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
.ch3-life-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:0.5rem;margin:0.5rem 0}
.ch3-life-card{background:#0d0d1a;border-radius:10px;padding:0.6rem;text-align:center;border:1px solid rgba(253,121,168,0.15);animation:nodeAppear 0.4s ease both}
.ch3-life-card:nth-child(1){animation-delay:0.1s}.ch3-life-card:nth-child(2){animation-delay:0.2s}.ch3-life-card:nth-child(3){animation-delay:0.3s}
@keyframes nodeAppear{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}
.ch3-life-icon{font-size:1.5rem;margin-bottom:0.3rem}
.ch3-life-cond{font-size:0.88rem;color:#fdcb6e;font-weight:700;margin-bottom:0.4rem}
.ch3-life-branches{display:flex;flex-direction:column;gap:0.2rem}
.ch3-branch{font-size:0.8rem;padding:0.2rem 0.4rem;border-radius:4px}
.ch3-branch-yes{background:rgba(0,184,148,0.1);color:#00b894}
.ch3-branch-no{background:rgba(225,112,85,0.1);color:#e17055}
</style>`
        },
        {
          title: "比较运算符",
          content: `<p>要做判断，首先要学会"比较"！Python提供了6个<strong>比较运算符</strong>：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">⚖️ 比较运算符大全</div>
  <div class="ch3-cmp-grid">
    <div class="ch3-cmp-card"><span class="ch3-cmp-sym">==</span><span class="ch3-cmp-name">等于</span><span class="ch3-cmp-ex">10 == 10 → <b style="color:#00b894">True</b></span></div>
    <div class="ch3-cmp-card"><span class="ch3-cmp-sym">!=</span><span class="ch3-cmp-name">不等于</span><span class="ch3-cmp-ex">10 != 5 → <b style="color:#00b894">True</b></span></div>
    <div class="ch3-cmp-card"><span class="ch3-cmp-sym">></span><span class="ch3-cmp-name">大于</span><span class="ch3-cmp-ex">10 > 5 → <b style="color:#00b894">True</b></span></div>
    <div class="ch3-cmp-card"><span class="ch3-cmp-sym"><</span><span class="ch3-cmp-name">小于</span><span class="ch3-cmp-ex">10 < 5 → <b style="color:#e17055">False</b></span></div>
    <div class="ch3-cmp-card"><span class="ch3-cmp-sym">>=</span><span class="ch3-cmp-name">大于等于</span><span class="ch3-cmp-ex">10 >= 10 → <b style="color:#00b894">True</b></span></div>
    <div class="ch3-cmp-card"><span class="ch3-cmp-sym"><=</span><span class="ch3-cmp-name">小于等于</span><span class="ch3-cmp-ex">10 <= 5 → <b style="color:#e17055">False</b></span></div>
  </div>
  <div class="theory-callout">⚠️ 注意：判断"等于"用的是 <code>==</code>（两个等号），而不是 <code>=</code>（赋值）！这是初学者最常犯的错误。</div>
</div>
<style>
.ch3-cmp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:0.4rem;margin:0.6rem 0}
.ch3-cmp-card{background:#0d0d1a;border-radius:8px;padding:0.5rem;display:flex;flex-direction:column;gap:0.15rem;border-left:3px solid #fd79a8;animation:slideInPipe 0.3s ease both}
@keyframes slideInPipe{from{opacity:0;transform:translateX(-15px)}to{opacity:1;transform:translateX(0)}}
.ch3-cmp-card:nth-child(1){animation-delay:0.05s}.ch3-cmp-card:nth-child(2){animation-delay:0.1s}.ch3-cmp-card:nth-child(3){animation-delay:0.15s}.ch3-cmp-card:nth-child(4){animation-delay:0.2s}.ch3-cmp-card:nth-child(5){animation-delay:0.25s}.ch3-cmp-card:nth-child(6){animation-delay:0.3s}
.ch3-cmp-sym{font-family:monospace;font-size:1rem;font-weight:900;color:#FF9800;font-weight:700}
.ch3-cmp-name{font-size:0.82rem;color:#c8d0e0}
.ch3-cmp-ex{font-size:0.8rem;color:#e8ecf2;font-family:monospace}
</style>`,
          codeToLoad: 'x = 10\nprint(x > 5)\nprint(x == 10)\nprint(x < 3)\nprint(x != 7)\nprint(x >= 10)\nprint(x <= 20)'
        },
        {
          title: "if-else 实战",
          content: `<p>让我们来写一个判断成年与否的程序：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎬 if-else 执行流程</div>
  <div class="ch3-flow-demo">
    <div class="ch3-flow-step ch3-flow-start">age = 12</div>
    <div class="ch3-flow-arrow">↓</div>
    <div class="ch3-flow-step ch3-flow-cond">age >= 18 ?</div>
    <div class="ch3-flow-branches">
      <div class="ch3-flow-branch">
        <div class="ch3-flow-label" style="color:#e17055">False ❌</div>
        <div class="ch3-flow-arrow">↓</div>
        <div class="ch3-flow-step ch3-flow-action" style="border-color:#e17055">print("你是未成年人")</div>
      </div>
      <div class="ch3-flow-branch">
        <div class="ch3-flow-label" style="color:#00b894">True ✅</div>
        <div class="ch3-flow-arrow">↓</div>
        <div class="ch3-flow-step ch3-flow-action" style="border-color:#00b894;opacity:0.4">print("你是成年人")</div>
      </div>
    </div>
    <div class="ch3-flow-arrow">↓</div>
    <div class="ch3-flow-step ch3-flow-end">继续执行...</div>
  </div>
  <div class="theory-callout">🔍 因为 12 < 18，条件为 False，所以执行 else 分支！用<strong>逐步执行</strong>可以清晰看到流程。</div>
</div>
<style>
.ch3-flow-demo{display:flex;flex-direction:column;align-items:center;gap:0.1rem;margin:0.6rem 0}
.ch3-flow-step{background:#0d0d1a;border-radius:8px;padding:0.35rem 0.7rem;font-family:monospace;font-size:0.9rem;color:#e8ecf2;border:1px solid rgba(253,121,168,0.2)}
.ch3-flow-start{border-color:rgba(253,121,168,0.4);color:#FF9800;font-weight:700}
.ch3-flow-cond{border-radius:20px;background:rgba(253,203,110,0.08);border-color:rgba(253,203,110,0.4);color:#fdcb6e;font-weight:700}
.ch3-flow-action{font-size:0.85rem}
.ch3-flow-end{border-color:rgba(253,121,168,0.2);color:#c8d0e0}
.ch3-flow-arrow{font-size:0.9rem;color:#c8d0e0}
.ch3-flow-branches{display:flex;gap:1.5rem;margin:0.2rem 0}
.ch3-flow-branch{display:flex;flex-direction:column;align-items:center;gap:0.1rem}
.ch3-flow-label{font-size:0.85rem;font-weight:700}
</style>`,
          codeToLoad: 'age = 12\nif age >= 18:\n    print("你是成年人")\nelse:\n    print("你是未成年人")\nprint("程序结束")'
        },
        {
          title: "elif - 多个选择",
          content: `<p>有时候选择不只两个，用 <em>elif</em>（else if的缩写）：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📊 成绩等级判断</div>
  <div class="ch3-grade-demo">
    <div class="ch3-grade-bar">
      <div class="ch3-grade-seg" style="width:10%;background:linear-gradient(90deg,#e17055,#e17055)"><span>0-59</span></div>
      <div class="ch3-grade-seg" style="width:20%;background:linear-gradient(90deg,#fdcb6e,#fdcb6e)"><span>60-79</span></div>
      <div class="ch3-grade-seg" style="width:10%;background:linear-gradient(90deg,#00cec9,#00cec9)"><span>80-89</span></div>
      <div class="ch3-grade-seg" style="width:10%;background:linear-gradient(90deg,#00b894,#00b894)"><span>90+</span></div>
    </div>
    <div class="ch3-grade-labels">
      <div class="ch3-grade-label" style="color:#e17055">💪 加油</div>
      <div class="ch3-grade-label" style="color:#fdcb6e">✓ 及格</div>
      <div class="ch3-grade-label" style="color:#00cec9">👍 良好</div>
      <div class="ch3-grade-label" style="color:#00b894">🌟 优秀</div>
    </div>
  </div>
  <div class="ch3-elif-code">
    <div class="ch3-elif-line"><span style="color:#fd79a8">if</span> score >= 90:</div>
    <div class="ch3-elif-line ch3-elif-indent">print("优秀！🌟")</div>
    <div class="ch3-elif-line"><span style="color:#fd79a8">elif</span> score >= 80:</div>
    <div class="ch3-elif-line ch3-elif-indent">print("良好！👍")</div>
    <div class="ch3-elif-line"><span style="color:#fd79a8">elif</span> score >= 60:</div>
    <div class="ch3-elif-line ch3-elif-indent">print("及格 ✓")</div>
    <div class="ch3-elif-line"><span style="color:#fd79a8">else</span>:</div>
    <div class="ch3-elif-line ch3-elif-indent">print("需要加油！💪")</div>
  </div>
  <div class="theory-callout">🎯 Python会<strong>从上到下</strong>依次检查，找到第一个满足的条件就执行，其余全部跳过！</div>
</div>
<style>
.ch3-grade-demo{margin:0.6rem 0}
.ch3-grade-bar{display:flex;height:28px;border-radius:14px;overflow:hidden;margin-bottom:0.3rem}
.ch3-grade-seg{display:flex;align-items:center;justify-content:center}
.ch3-grade-seg span{font-size:0.92rem;color:#fff;font-weight:700}
.ch3-grade-labels{display:flex;gap:0.5rem;justify-content:space-around}
.ch3-grade-label{font-size:0.82rem;font-weight:700}
.ch3-elif-code{background:#0d0d1a;border-radius:10px;padding:0.7rem;margin-top:0.6rem;font-family:monospace;font-size:0.9rem}
.ch3-elif-line{color:#e8ecf2;padding:0.1rem 0}
.ch3-elif-indent{padding-left:1.5rem;color:#FF9800;font-weight:700}
</style>`,
          codeToLoad: 'score = 85\nif score >= 90:\n    print("优秀！")\nelif score >= 80:\n    print("良好！")\nelif score >= 60:\n    print("及格")\nelse:\n    print("需要加油！")'
        },
        {
          title: "逻辑运算符：and、or、not",
          content: `<p>有时候需要<strong>组合多个条件</strong>来判断，这就需要逻辑运算符：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🧩 逻辑运算符</div>
  <div class="ch3-logic-grid">
    <div class="ch3-logic-card" style="border-color:rgba(0,184,148,0.4)">
      <div class="ch3-logic-sym">and</div>
      <div class="ch3-logic-desc">两个条件<strong>都满足</strong>才为True</div>
      <div class="ch3-logic-ex">True and True → <b style="color:#00b894">True</b></div>
      <div class="ch3-logic-ex">True and False → <b style="color:#e17055">False</b></div>
    </div>
    <div class="ch3-logic-card" style="border-color:rgba(253,121,168,0.4)">
      <div class="ch3-logic-sym">or</div>
      <div class="ch3-logic-desc"><strong>任一条件</strong>满足即为True</div>
      <div class="ch3-logic-ex">True or False → <b style="color:#00b894">True</b></div>
      <div class="ch3-logic-ex">False or False → <b style="color:#e17055">False</b></div>
    </div>
    <div class="ch3-logic-card" style="border-color:rgba(253,121,168,0.4)">
      <div class="ch3-logic-sym">not</div>
      <div class="ch3-logic-desc"><strong>取反</strong>：True变False</div>
      <div class="ch3-logic-ex">not True → <b style="color:#e17055">False</b></div>
      <div class="ch3-logic-ex">not False → <b style="color:#00b894">True</b></div>
    </div>
  </div>
</div>
<p>实际例子：</p>
<div class="step-code-block">age = 15
has_id = True
# 同时满足两个条件才能进入
if age >= 18 and has_id:
    print("可以进入")
else:
    print("不能进入")</div>
<style>
.ch3-logic-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:0.5rem;margin:0.6rem 0}
.ch3-logic-card{background:#0d0d1a;border-radius:10px;padding:0.6rem;border-top:3px solid;text-align:center}
.ch3-logic-sym{font-family:monospace;font-size:1.1rem;font-weight:900;color:#FF9800;font-weight:700;margin-bottom:0.2rem}
.ch3-logic-desc{font-size:0.82rem;color:#c8d0e0;margin-bottom:0.3rem}
.ch3-logic-ex{font-size:0.8rem;color:#e8ecf2;font-family:monospace;margin:0.1rem 0}
</style>`,
          codeToLoad: 'age = 15\nhas_ticket = True\n\nif age >= 12 and has_ticket:\n    print("可以看电影！")\nelse:\n    print("不能看电影")\n\nday = "周六"\nif day == "周六" or day == "周日":\n    print("今天是周末！")\nelse:\n    print("今天是工作日")'
        }
      ],
      challenge: {
        desc: "🎯 写一个温度提示程序：temperature变量存温度。如果>=35打印\"好热\"，>=25打印\"舒适\"，>=10打印\"有点冷\"，否则打印\"好冷\"。用temperature=28测试。",
        hint: 'temperature = 28\nif temperature >= 35:\n    print("好热")\nelif temperature >= 25:\n    print("舒适")\nelif temperature >= 10:\n    print("有点冷")\nelse:\n    print("好冷")',
        template: 'temperature = 28\n# 在下面写条件判断\n',
        check: function(output) { return output.indexOf("舒适") !== -1; }
      }
    }
  ]
};

registerChapter('python', CHAPTER3);
