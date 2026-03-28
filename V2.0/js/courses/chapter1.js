// 第一章：初识Python
const CHAPTER1 = {
  chapter: "第一章：初识Python",
  icon: "🌱",
  lessons: [
    {
      id: "1-1",
      title: "Hello World! 你的第一个程序",
      xp: 10,
      code: 'print("Hello, World!")\nprint("你好，Python编程课程！")',
      steps: [
        {
          title: "什么是编程？",
          content: `<p>想象你有一个超级听话的机器人朋友🤖，<strong>编程</strong>就是给它写指令的过程！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🌍 编程语言的世界</div>
  <div class="ch1-lang-grid">
    <div class="ch1-lang-card ch1-lang-highlight">
      <div class="ch1-lang-icon">🐍</div>
      <div class="ch1-lang-name">Python</div>
      <div class="ch1-lang-desc">简单优雅，入门首选</div>
      <div class="ch1-lang-badge">正在学习</div>
    </div>
    <div class="ch1-lang-card">
      <div class="ch1-lang-icon">☕</div>
      <div class="ch1-lang-name">Java</div>
      <div class="ch1-lang-desc">企业级应用</div>
    </div>
    <div class="ch1-lang-card">
      <div class="ch1-lang-icon">🌐</div>
      <div class="ch1-lang-name">JavaScript</div>
      <div class="ch1-lang-desc">网页开发</div>
    </div>
    <div class="ch1-lang-card">
      <div class="ch1-lang-icon">⚙️</div>
      <div class="ch1-lang-name">C++</div>
      <div class="ch1-lang-desc">游戏开发</div>
    </div>
  </div>
  <div class="ch1-python-facts">
    <div class="ch1-fact"><span class="ch1-fact-emoji">👥</span> 全球超过 <strong>千万</strong> 开发者使用</div>
    <div class="ch1-fact"><span class="ch1-fact-emoji">🏆</span> 2024年最流行编程语言 <strong>第一名</strong></div>
    <div class="ch1-fact"><span class="ch1-fact-emoji">🤖</span> AI人工智能 开发的 <strong>首选语言</strong></div>
  </div>
  <div class="theory-callout">💡 Python的名字来自英国喜剧团体 "Monty Python"，不是大蟒蛇哦！</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,206,201,0.08));border:1px solid rgba(108,92,231,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;font-weight:700;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(108,92,231,0.1);border-left:3px solid #6c5ce7;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
.ch1-lang-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0.4rem;margin:0.6rem 0}
.ch1-lang-card{background:#0d0d1a;border-radius:10px;padding:0.5rem;text-align:center;border:1px solid rgba(108,92,231,0.15);transition:transform 0.2s;animation:nodeAppear 0.3s ease both;position:relative}
@keyframes nodeAppear{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}
.ch1-lang-card:nth-child(1){animation-delay:0.05s}.ch1-lang-card:nth-child(2){animation-delay:0.1s}.ch1-lang-card:nth-child(3){animation-delay:0.15s}.ch1-lang-card:nth-child(4){animation-delay:0.2s}
.ch1-lang-card:hover{transform:translateY(-3px)}
.ch1-lang-highlight{border-color:rgba(108,92,231,0.5);background:rgba(108,92,231,0.06);box-shadow:0 0 12px rgba(108,92,231,0.15)}
.ch1-lang-icon{font-size:1.3rem;margin-bottom:0.1rem}
.ch1-lang-name{font-size:0.9rem;font-weight:800;color:#e8ecf2}
.ch1-lang-desc{font-size:0.9rem;color:#c8d0e0;margin-top:0.05rem}
.ch1-lang-badge{position:absolute;top:-5px;right:-5px;background:#6c5ce7;color:#fff;font-size:0.5rem;padding:0.1rem 0.35rem;border-radius:8px;font-weight:700;animation:badgePulse 2s ease infinite}
@keyframes badgePulse{0%,100%{opacity:1}50%{opacity:0.6}}
.ch1-python-facts{display:flex;flex-direction:column;gap:0.25rem;margin-top:0.7rem}
.ch1-fact{display:flex;align-items:center;gap:0.4rem;font-size:0.88rem;color:#e8ecf2;background:#0d0d1a;border-radius:6px;padding:0.3rem 0.6rem;animation:slideInPipe 0.3s ease both}
@keyframes slideInPipe{from{opacity:0;transform:translateX(-15px)}to{opacity:1;transform:translateX(0)}}
.ch1-fact:nth-child(1){animation-delay:0.3s}.ch1-fact:nth-child(2){animation-delay:0.4s}.ch1-fact:nth-child(3){animation-delay:0.5s}
.ch1-fact-emoji{font-size:0.9rem}
</style>`
        },
        {
          title: "print() - 让电脑说话",
          content: `<p><strong>print()</strong> 是你学会的第一个Python函数 — 它能让电脑在屏幕上"说话"！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎤 print() 函数解剖</div>
  <div class="ch1-print-anatomy">
    <div class="ch1-pa-line">
      <span class="ch1-pa-func">print</span><span class="ch1-pa-paren">(</span><span class="ch1-pa-str">"Hello, World!"</span><span class="ch1-pa-paren">)</span>
    </div>
    <div class="ch1-pa-arrows">
      <div class="ch1-pa-label" style="left:5%;color:#fd79a8">↑ 函数名</div>
      <div class="ch1-pa-label" style="left:30%;color:#FF9800;font-weight:700">↑ 左括号</div>
      <div class="ch1-pa-label" style="left:48%;color:#00b894">↑ 要说的内容</div>
      <div class="ch1-pa-label" style="left:80%;color:#FF9800;font-weight:700">↑ 右括号</div>
    </div>
  </div>
  <div class="ch1-print-demo">
    <div class="ch1-pd-row">
      <div class="ch1-pd-code">print("Hello!")</div>
      <div class="ch1-pd-arrow">→</div>
      <div class="ch1-pd-result">Hello!</div>
    </div>
    <div class="ch1-pd-row">
      <div class="ch1-pd-code">print(123)</div>
      <div class="ch1-pd-arrow">→</div>
      <div class="ch1-pd-result">123</div>
    </div>
    <div class="ch1-pd-row">
      <div class="ch1-pd-code">print(1 + 2)</div>
      <div class="ch1-pd-arrow">→</div>
      <div class="ch1-pd-result">3</div>
    </div>
  </div>
  <div class="theory-callout">💡 引号 <code>""</code> 里面的内容叫做 <strong>字符串</strong>，会原样显示。不加引号的数字会被当作数学来计算！</div>
</div>
<style>
.ch1-print-anatomy{background:#0d0d1a;border-radius:10px;padding:0.8rem 1rem;margin:0.5rem 0;position:relative}
.ch1-pa-line{font-family:monospace;font-size:0.95rem;text-align:center}
.ch1-pa-func{color:#fd79a8;font-weight:700}
.ch1-pa-paren{color:#FF9800;font-weight:700;font-weight:700}
.ch1-pa-str{color:#00b894;font-weight:700}
.ch1-pa-arrows{display:flex;justify-content:space-between;margin-top:0.5rem}
.ch1-pa-label{font-size:0.9rem;font-weight:700}
.ch1-print-demo{display:flex;flex-direction:column;gap:0.25rem;margin-top:0.7rem}
.ch1-pd-row{display:flex;align-items:center;gap:0.5rem;background:#0d0d1a;border-radius:6px;padding:0.35rem 0.6rem;animation:slideInPipe 0.3s ease both}
.ch1-pd-row:nth-child(1){animation-delay:0.1s}.ch1-pd-row:nth-child(2){animation-delay:0.2s}.ch1-pd-row:nth-child(3){animation-delay:0.3s}
.ch1-pd-code{font-family:monospace;font-size:0.9rem;color:#FF9800;font-weight:700;font-weight:700;flex:1}
.ch1-pd-arrow{color:#c8d0e0;font-weight:700}
.ch1-pd-result{font-family:monospace;font-size:0.9rem;color:#00b894;font-weight:700;background:rgba(0,184,148,0.08);padding:0.15rem 0.5rem;border-radius:4px}
</style>`,
          codeToLoad: 'print("Hello, World!")'
        },
        {
          title: "动手试试！",
          content: `<p>现在轮到你了！试着修改代码，让电脑说出<strong>你想说的话</strong>：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎮 你的第一次编程</div>
  <div class="ch1-try-steps">
    <div class="ch1-try-step">
      <div class="ch1-try-num">1</div>
      <div class="ch1-try-text">看右边编辑器里已有的代码</div>
    </div>
    <div class="ch1-try-step">
      <div class="ch1-try-num">2</div>
      <div class="ch1-try-text">点击 <strong style="color:#00b894">▶ 运行</strong> 按钮</div>
    </div>
    <div class="ch1-try-step">
      <div class="ch1-try-num">3</div>
      <div class="ch1-try-text">切换到"运行结果"标签查看输出</div>
    </div>
    <div class="ch1-try-step">
      <div class="ch1-try-num">4</div>
      <div class="ch1-try-text">修改引号里的文字，再运行一次！</div>
    </div>
  </div>
  <div class="ch1-try-example">
    <span style="color:#c8d0e0">试试改成：</span>
    <code>print("我叫小明，我在学Python！")</code>
  </div>
  <div class="theory-callout">🎯 编程最重要的学习方法就是：<strong>动手！动手！再动手！</strong></div>
</div>
<style>
.ch1-try-steps{display:flex;flex-direction:column;gap:0.3rem;margin:0.5rem 0}
.ch1-try-step{display:flex;align-items:center;gap:0.5rem;background:#0d0d1a;border-radius:8px;padding:0.4rem 0.6rem;animation:slideInPipe 0.3s ease both}
.ch1-try-step:nth-child(1){animation-delay:0.05s}.ch1-try-step:nth-child(2){animation-delay:0.1s}.ch1-try-step:nth-child(3){animation-delay:0.15s}.ch1-try-step:nth-child(4){animation-delay:0.2s}
.ch1-try-num{width:22px;height:22px;border-radius:50%;background:#6c5ce7;color:#fff;display:flex;align-items:center;justify-content:center;font-size:0.8rem;font-weight:800;flex-shrink:0}
.ch1-try-text{font-size:0.9rem;color:#e8ecf2}
.ch1-try-example{background:#0d0d1a;border-radius:8px;padding:0.5rem 0.7rem;margin-top:0.5rem;font-size:0.88rem}
.ch1-try-example code{color:#FF9800;font-weight:700;font-size:0.88rem}
</style>`,
          codeToLoad: 'print("Hello, World!")\nprint("我在学习Python！")'
        },
        {
          title: "多行输出 + 小技巧",
          content: `<p>每个 <em>print()</em> 都会在新的一行显示，还可以打印多个东西：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📝 print 的花式用法</div>
  <div class="ch1-trick-grid">
    <div class="ch1-trick-card" style="border-color:rgba(0,184,148,0.4)">
      <div class="ch1-trick-name">多行输出</div>
      <div class="ch1-trick-code">print("第一行")
print("第二行")</div>
      <div class="ch1-trick-note">每个print换一行</div>
    </div>
    <div class="ch1-trick-card" style="border-color:rgba(108,92,231,0.4)">
      <div class="ch1-trick-name">打印多个值</div>
      <div class="ch1-trick-code">print("姓名:", "小明")</div>
      <div class="ch1-trick-note">用逗号分隔，自动加空格</div>
    </div>
    <div class="ch1-trick-card" style="border-color:rgba(253,203,110,0.4)">
      <div class="ch1-trick-name">打印数学</div>
      <div class="ch1-trick-code">print(100 + 200)</div>
      <div class="ch1-trick-note">不加引号会计算结果</div>
    </div>
    <div class="ch1-trick-card" style="border-color:rgba(253,121,168,0.4)">
      <div class="ch1-trick-name">打印表情</div>
      <div class="ch1-trick-code">print("🐍🎉✨")</div>
      <div class="ch1-trick-note">支持Emoji！</div>
    </div>
  </div>
  <div class="theory-callout">📝 Python 从上到下、一行一行执行代码 — 这叫做<strong>顺序执行</strong>。</div>
</div>
<style>
.ch1-trick-grid{display:grid;grid-template-columns:1fr 1fr;gap:0.4rem;margin:0.5rem 0}
.ch1-trick-card{background:#0d0d1a;border-radius:8px;padding:0.5rem;border-top:3px solid}
.ch1-trick-name{font-size:0.88rem;font-weight:700;color:#e8ecf2;margin-bottom:0.2rem}
.ch1-trick-code{font-family:monospace;font-size:0.82rem;color:#FF9800;font-weight:700;white-space:pre;line-height:1.4}
.ch1-trick-note{font-size:0.92rem;color:#c8d0e0;margin-top:0.2rem}
</style>`,
          codeToLoad: 'print("第一行：我爱编程")\nprint("第二行：Python真有趣")\nprint("第三行：我要成为程序员")\nprint("姓名:", "小明", "年龄:", 10)\nprint(100 + 200)'
        }
      ],
      challenge: {
        desc: "🎯 挑战：使用 print() 函数，分三行输出你的名字、年龄和爱好。",
        hint: '使用三个print()语句，例如：\nprint("我叫小明")\nprint("我今年10岁")\nprint("我喜欢编程")',
        template: '# 在下面写出三个print语句\n',
        check: function(output) { return output.trim().split('\n').length >= 3; }
      }
    },
    {
      id: "1-2",
      title: "变量 - 给数据起名字",
      xp: 15,
      code: 'name = "小明"\nage = 10\nprint(name)\nprint(age)',
      steps: [
        {
          title: "什么是变量？",
          content: `<p>变量就像是一个<strong>有标签的盒子</strong>📦 — 给数据起个名字，方便重复使用！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📦 变量的盒子比喻</div>
  <div class="ch1-var-boxes">
    <div class="ch1-var-box">
      <div class="ch1-vb-label">name</div>
      <div class="ch1-vb-content">"小明"</div>
      <div class="ch1-vb-type">str 字符串</div>
    </div>
    <div class="ch1-var-box">
      <div class="ch1-vb-label">age</div>
      <div class="ch1-vb-content">10</div>
      <div class="ch1-vb-type">int 整数</div>
    </div>
    <div class="ch1-var-box">
      <div class="ch1-vb-label">height</div>
      <div class="ch1-vb-content">1.4</div>
      <div class="ch1-vb-type">float 小数</div>
    </div>
  </div>
  <div class="ch1-assign-demo">
    <div class="ch1-ad-line">
      <span class="ch1-ad-var">name</span>
      <span class="ch1-ad-eq">=</span>
      <span class="ch1-ad-val">"小明"</span>
    </div>
    <div class="ch1-ad-explain">
      <span class="ch1-ad-label" style="color:#fdcb6e">↑ 盒子名字</span>
      <span class="ch1-ad-label" style="color:#fd79a8">↑ "放入"（赋值）</span>
      <span class="ch1-ad-label" style="color:#00b894">↑ 放进去的内容</span>
    </div>
  </div>
  <div class="theory-callout">💡 <code>=</code> 在Python里不是"等于"，而是"<strong>把右边的值放进左边的盒子</strong>"！</div>
</div>
<style>
.ch1-var-boxes{display:flex;gap:0.5rem;justify-content:center;margin:0.6rem 0;flex-wrap:wrap}
.ch1-var-box{background:#0d0d1a;border:2px solid rgba(108,92,231,0.3);border-radius:12px;padding:0.5rem 0.7rem;text-align:center;min-width:80px;animation:nodeAppear 0.3s ease both;position:relative}
.ch1-var-box:nth-child(1){animation-delay:0.1s;border-color:rgba(0,184,148,0.3)}.ch1-var-box:nth-child(2){animation-delay:0.2s;border-color:rgba(108,92,231,0.3)}.ch1-var-box:nth-child(3){animation-delay:0.3s;border-color:rgba(253,203,110,0.3)}
.ch1-vb-label{font-family:monospace;font-size:0.8rem;color:#FF9800;font-weight:700;font-weight:700;margin-bottom:0.1rem}
.ch1-vb-content{font-family:monospace;font-size:0.9rem;font-weight:800;color:#fff;margin:0.15rem 0}
.ch1-vb-type{font-size:0.88rem;color:#c8d0e0;background:rgba(108,92,231,0.08);padding:0.1rem 0.3rem;border-radius:6px}
.ch1-assign-demo{background:#0d0d1a;border-radius:10px;padding:0.6rem;margin-top:0.6rem;text-align:center}
.ch1-ad-line{font-family:monospace;font-size:0.95rem;margin-bottom:0.4rem}
.ch1-ad-var{color:#fdcb6e;font-weight:700}
.ch1-ad-eq{color:#fd79a8;font-weight:900;margin:0 0.3rem;font-size:1.1rem}
.ch1-ad-val{color:#00b894;font-weight:700}
.ch1-ad-explain{display:flex;justify-content:space-around}
.ch1-ad-label{font-size:0.9rem;font-weight:700}
</style>`
        },
        {
          title: "创建和使用变量",
          content: `<p>创建变量后，就可以在代码中通过<strong>变量名</strong>来使用它：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎬 变量的使用流程</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step">
      <span class="ch1-vf-num">①</span>
      <span class="ch1-vf-code">name = "小明"</span>
      <span class="ch1-vf-desc">创建变量并赋值</span>
    </div>
    <div class="ch1-vf-step">
      <span class="ch1-vf-num">②</span>
      <span class="ch1-vf-code">print(name)</span>
      <span class="ch1-vf-desc">使用变量（读取值）</span>
    </div>
    <div class="ch1-vf-step">
      <span class="ch1-vf-num">③</span>
      <span class="ch1-vf-code">→ 输出: 小明</span>
      <span class="ch1-vf-desc">Python自动替换为值</span>
    </div>
  </div>
  <div class="theory-callout">🔍 点击右边的 <strong>"变量追踪"</strong> 标签页，运行代码后可以实时看到变量的值！</div>
</div>
<style>
.ch1-var-flow{display:flex;flex-direction:column;gap:0.3rem;margin:0.5rem 0}
.ch1-vf-step{display:flex;align-items:center;gap:0.5rem;background:#0d0d1a;border-radius:8px;padding:0.4rem 0.7rem;animation:slideInPipe 0.3s ease both}
.ch1-vf-step:nth-child(1){animation-delay:0.1s}.ch1-vf-step:nth-child(2){animation-delay:0.2s}.ch1-vf-step:nth-child(3){animation-delay:0.3s}
.ch1-vf-num{color:#fdcb6e;font-weight:800;font-size:0.85rem}
.ch1-vf-code{font-family:monospace;font-size:0.9rem;color:#FF9800;font-weight:700;font-weight:700;flex:1}
.ch1-vf-desc{font-size:0.92rem;color:#c8d0e0}
</style>`,
          codeToLoad: 'name = "小明"\nage = 10\nheight = 1.4\nprint("姓名:", name)\nprint("年龄:", age)\nprint("身高:", height)'
        },
        {
          title: "变量可以变！",
          content: `<p>变量最神奇的地方 — 它的值可以<strong>随时改变</strong>！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔄 变量值的变化过程</div>
  <div class="ch1-change-demo">
    <div class="ch1-cd-row">
      <div class="ch1-cd-code">score = 0</div>
      <div class="ch1-cd-arrow">→</div>
      <div class="ch1-cd-state"><span class="ch1-cd-var">score</span> = <span class="ch1-cd-val">0</span></div>
    </div>
    <div class="ch1-cd-row">
      <div class="ch1-cd-code">score = 100</div>
      <div class="ch1-cd-arrow">→</div>
      <div class="ch1-cd-state"><span class="ch1-cd-var">score</span> = <span class="ch1-cd-val ch1-cd-changed">100</span></div>
    </div>
    <div class="ch1-cd-row">
      <div class="ch1-cd-code">score = score + 50</div>
      <div class="ch1-cd-arrow">→</div>
      <div class="ch1-cd-state"><span class="ch1-cd-var">score</span> = <span class="ch1-cd-val ch1-cd-changed">150</span></div>
    </div>
  </div>
  <div class="theory-callout">🎯 试试 <strong>"逐步执行"</strong> 按钮，一行一行运行代码，观察变量在每一步的变化！</div>
</div>
<style>
.ch1-change-demo{display:flex;flex-direction:column;gap:0.3rem;margin:0.5rem 0}
.ch1-cd-row{display:flex;align-items:center;gap:0.4rem;background:#0d0d1a;border-radius:8px;padding:0.4rem 0.7rem;animation:slideInPipe 0.3s ease both}
.ch1-cd-row:nth-child(1){animation-delay:0.1s}.ch1-cd-row:nth-child(2){animation-delay:0.2s}.ch1-cd-row:nth-child(3){animation-delay:0.3s}
.ch1-cd-code{font-family:monospace;font-size:0.88rem;color:#FF9800;font-weight:700;font-weight:700;min-width:140px}
.ch1-cd-arrow{color:#c8d0e0;font-weight:700}
.ch1-cd-state{font-family:monospace;font-size:0.88rem;color:#e8ecf2}
.ch1-cd-var{color:#fdcb6e}
.ch1-cd-val{color:#00b894;font-weight:700}
.ch1-cd-changed{animation:valFlash 0.6s ease}
@keyframes valFlash{0%{background:#fdcb6e;color:#000;border-radius:3px;padding:0 3px}100%{background:transparent;color:#00b894}}
</style>`,
          codeToLoad: 'score = 0\nprint("初始分数:", score)\nscore = 100\nprint("新分数:", score)\nscore = score + 50\nprint("加分后:", score)'
        },
        {
          title: "变量命名规则",
          content: `<p>给变量取名也有规矩，就像给小朋友取名不能叫"123"一样：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📏 命名规则速查</div>
  <div class="ch1-naming-rules">
    <div class="ch1-nr-section">
      <div class="ch1-nr-header" style="color:#00b894">✅ 可以用的名字</div>
      <div class="ch1-nr-examples">
        <span class="ch1-nr-good">name</span>
        <span class="ch1-nr-good">age2</span>
        <span class="ch1-nr-good">my_name</span>
        <span class="ch1-nr-good">student_score</span>
        <span class="ch1-nr-good">_temp</span>
      </div>
    </div>
    <div class="ch1-nr-section">
      <div class="ch1-nr-header" style="color:#e17055">❌ 不能用的名字</div>
      <div class="ch1-nr-examples">
        <span class="ch1-nr-bad">2name</span>
        <span class="ch1-nr-bad">my name</span>
        <span class="ch1-nr-bad">print</span>
        <span class="ch1-nr-bad">if</span>
        <span class="ch1-nr-bad">for</span>
      </div>
    </div>
  </div>
  <div class="ch1-naming-tips">
    <div class="ch1-nt-item"><span>🔤</span> 可以用字母、数字和下划线 _</div>
    <div class="ch1-nt-item"><span>🚫</span> 不能以数字开头</div>
    <div class="ch1-nt-item"><span>🚫</span> 不能有空格（用 _ 代替）</div>
    <div class="ch1-nt-item"><span>⚠️</span> 区分大小写！Name ≠ name</div>
  </div>
</div>
<style>
.ch1-naming-rules{display:flex;gap:0.5rem;margin:0.5rem 0;flex-wrap:wrap}
.ch1-nr-section{flex:1;min-width:120px;background:#0d0d1a;border-radius:8px;padding:0.5rem}
.ch1-nr-header{font-size:0.88rem;font-weight:700;margin-bottom:0.3rem}
.ch1-nr-examples{display:flex;flex-wrap:wrap;gap:0.2rem}
.ch1-nr-good{background:rgba(0,184,148,0.1);color:#00b894;padding:0.15rem 0.4rem;border-radius:6px;font-family:monospace;font-size:0.82rem;font-weight:700}
.ch1-nr-bad{background:rgba(225,112,85,0.1);color:#e17055;padding:0.15rem 0.4rem;border-radius:6px;font-family:monospace;font-size:0.82rem;font-weight:700;text-decoration:line-through}
.ch1-naming-tips{display:flex;flex-direction:column;gap:0.2rem;margin-top:0.5rem}
.ch1-nt-item{font-size:0.82rem;color:#e8ecf2;display:flex;align-items:center;gap:0.3rem;background:#0d0d1a;border-radius:6px;padding:0.25rem 0.5rem}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 创建三个变量：fruit（你最喜欢的水果）、count（你想吃几个）、price（单价），然后用 print() 分别显示它们。",
        hint: '例如：\nfruit = "苹果"\ncount = 3\nprice = 5.5\nprint(fruit)\nprint(count)\nprint(price)',
        template: '# 创建三个变量并打印\n',
        check: function(output) { return output.trim().split('\n').length >= 3; }
      }
    },
    {
      id: "1-3",
      title: "数据类型 - 不同的盒子",
      xp: 15,
      code: 'a = 42\nb = 3.14\nc = "Hello"\nd = True\nprint(type(a))\nprint(type(b))\nprint(type(c))\nprint(type(d))',
      steps: [
        {
          title: "Python的四种基本类型",
          content: `<p>数据有不同的"类型"，就像超市里的东西分为水果🍎、蔬菜🥬、饮料🥤：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎨 四大基本数据类型</div>
  <div class="ch1-type-grid">
    <div class="ch1-type-card" style="--tc:#6c5ce7">
      <div class="ch1-type-icon">🔢</div>
      <div class="ch1-type-name">int 整数</div>
      <div class="ch1-type-examples">42, -3, 0, 1000</div>
      <div class="ch1-type-use">计数、年龄、编号</div>
    </div>
    <div class="ch1-type-card" style="--tc:#00cec9">
      <div class="ch1-type-icon">🔢</div>
      <div class="ch1-type-name">float 小数</div>
      <div class="ch1-type-examples">3.14, -0.5, 9.99</div>
      <div class="ch1-type-use">价格、身高、温度</div>
    </div>
    <div class="ch1-type-card" style="--tc:#00b894">
      <div class="ch1-type-icon">📝</div>
      <div class="ch1-type-name">str 字符串</div>
      <div class="ch1-type-examples">"Hello", "小明"</div>
      <div class="ch1-type-use">文字、名字、地址</div>
    </div>
    <div class="ch1-type-card" style="--tc:#fd79a8">
      <div class="ch1-type-icon">✅</div>
      <div class="ch1-type-name">bool 布尔</div>
      <div class="ch1-type-examples">True, False</div>
      <div class="ch1-type-use">对/错、开/关</div>
    </div>
  </div>
  <div class="theory-callout">💡 Python会自动判断数据类型 — 你不需要提前声明！这叫做<strong>动态类型</strong>。</div>
</div>
<style>
.ch1-type-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:0.4rem;margin:0.5rem 0}
.ch1-type-card{background:#0d0d1a;border-radius:10px;padding:0.5rem;text-align:center;border-top:3px solid var(--tc);transition:transform 0.2s;animation:nodeAppear 0.3s ease both}
.ch1-type-card:nth-child(1){animation-delay:0.05s}.ch1-type-card:nth-child(2){animation-delay:0.1s}.ch1-type-card:nth-child(3){animation-delay:0.15s}.ch1-type-card:nth-child(4){animation-delay:0.2s}
.ch1-type-card:hover{transform:translateY(-3px)}
.ch1-type-icon{font-size:1.2rem;margin-bottom:0.1rem}
.ch1-type-name{font-size:0.9rem;font-weight:800;color:var(--tc)}
.ch1-type-examples{font-family:monospace;font-size:0.8rem;color:#c8d0e0;margin:0.1rem 0}
.ch1-type-use{font-size:0.92rem;color:#b8c4d8;background:rgba(108,92,231,0.05);padding:0.1rem 0.4rem;border-radius:8px}
</style>`
        },
        {
          title: "用 type() 查看类型",
          content: `<p><code>type()</code> 就像"X光机"🔬 — 能看出数据是什么类型：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔬 type() 检测结果</div>
  <div class="ch1-type-demo">
    <div class="ch1-td-row">
      <span class="ch1-td-code">type(42)</span>
      <span class="ch1-td-arrow">→</span>
      <span class="ch1-td-result" style="color:#FF9800;font-weight:700">&lt;class 'int'&gt;</span>
    </div>
    <div class="ch1-td-row">
      <span class="ch1-td-code">type(3.14)</span>
      <span class="ch1-td-arrow">→</span>
      <span class="ch1-td-result" style="color:#00cec9">&lt;class 'float'&gt;</span>
    </div>
    <div class="ch1-td-row">
      <span class="ch1-td-code">type("Hello")</span>
      <span class="ch1-td-arrow">→</span>
      <span class="ch1-td-result" style="color:#00b894">&lt;class 'str'&gt;</span>
    </div>
    <div class="ch1-td-row">
      <span class="ch1-td-code">type(True)</span>
      <span class="ch1-td-arrow">→</span>
      <span class="ch1-td-result" style="color:#fd79a8">&lt;class 'bool'&gt;</span>
    </div>
  </div>
  <div class="theory-callout">🔍 运行代码后切换到 <strong>"变量追踪"</strong> 标签，会看到不同类型用不同颜色图标显示！</div>
</div>
<style>
.ch1-type-demo{display:flex;flex-direction:column;gap:0.25rem;margin:0.5rem 0}
.ch1-td-row{display:flex;align-items:center;gap:0.5rem;background:#0d0d1a;border-radius:6px;padding:0.35rem 0.7rem;font-family:monospace;animation:slideInPipe 0.3s ease both}
.ch1-td-row:nth-child(1){animation-delay:0.1s}.ch1-td-row:nth-child(2){animation-delay:0.15s}.ch1-td-row:nth-child(3){animation-delay:0.2s}.ch1-td-row:nth-child(4){animation-delay:0.25s}
.ch1-td-code{font-size:0.9rem;color:#FF9800;font-weight:700;font-weight:700;min-width:100px}
.ch1-td-arrow{color:#c8d0e0;font-weight:700}
.ch1-td-result{font-size:0.88rem;font-weight:700}
</style>`,
          codeToLoad: 'a = 42\nb = 3.14\nc = "Hello"\nd = True\nprint(type(a))\nprint(type(b))\nprint(type(c))\nprint(type(d))'
        },
        {
          title: "类型转换",
          content: `<p>有时需要把一种类型变成另一种 — 就像把水变成冰🧊：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔄 类型转换方法</div>
  <div class="ch1-convert-grid">
    <div class="ch1-conv-card">
      <div class="ch1-conv-func" style="color:#FF9800;font-weight:700">int()</div>
      <div class="ch1-conv-desc">转为整数</div>
      <div class="ch1-conv-example">int("123") → 123</div>
      <div class="ch1-conv-example">int(3.7) → 3</div>
    </div>
    <div class="ch1-conv-card">
      <div class="ch1-conv-func" style="color:#00cec9">float()</div>
      <div class="ch1-conv-desc">转为小数</div>
      <div class="ch1-conv-example">float("3.14") → 3.14</div>
      <div class="ch1-conv-example">float(5) → 5.0</div>
    </div>
    <div class="ch1-conv-card">
      <div class="ch1-conv-func" style="color:#00b894">str()</div>
      <div class="ch1-conv-desc">转为字符串</div>
      <div class="ch1-conv-example">str(100) → "100"</div>
      <div class="ch1-conv-example">str(3.14) → "3.14"</div>
    </div>
  </div>
  <div class="ch1-conv-tip">
    <div class="ch1-ct-label">💡 最常见用法：数字拼接文字</div>
    <div class="ch1-ct-code">score = 100
print("得分：" + str(score) + "分")</div>
  </div>
</div>
<style>
.ch1-convert-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0.4rem;margin:0.5rem 0}
.ch1-conv-card{background:#0d0d1a;border-radius:8px;padding:0.5rem;text-align:center}
.ch1-conv-func{font-family:monospace;font-size:0.85rem;font-weight:800;margin-bottom:0.15rem}
.ch1-conv-desc{font-size:0.92rem;color:#c8d0e0;margin-bottom:0.2rem}
.ch1-conv-example{font-family:monospace;font-size:0.92rem;color:#FF9800;font-weight:700;line-height:1.5}
.ch1-conv-tip{background:#0d0d1a;border-radius:8px;padding:0.5rem 0.7rem;margin-top:0.5rem;border-left:3px solid #fdcb6e}
.ch1-ct-label{font-size:0.88rem;font-weight:700;color:#fdcb6e;margin-bottom:0.2rem}
.ch1-ct-code{font-family:monospace;font-size:0.85rem;color:#FF9800;font-weight:700;white-space:pre;line-height:1.5}
</style>`,
          codeToLoad: 'num_str = "123"\nnum = int(num_str)\nprint("字符串转整数:", num, type(num))\n\npi = 3.14\npi_int = int(pi)\nprint("小数转整数:", pi_int)\n\nscore = 100\nresult = "得分：" + str(score) + "分"\nprint(result)'
        }
      ],
      challenge: {
        desc: "🎯 创建4个不同类型的变量，用 type() 打印每个变量的类型，并用 str() 将数字 100 转为字符串后拼接 \"分\"。",
        hint: 'score = 100\nresult = str(score) + "分"\nprint(result)',
        template: '# 创建不同类型的变量并检查类型\n',
        check: function(output) { return output.indexOf("class") !== -1 || output.indexOf("分") !== -1; }
      }
    }
  ]
};

registerChapter('python', CHAPTER1);
