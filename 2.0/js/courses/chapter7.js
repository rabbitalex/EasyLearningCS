// 第七章：海龟画图
const CHAPTER7 = {
  chapter: "第七章：海龟画图",
  icon: "🐢",
  lessons: [
    {
      id: "7-1",
      title: "认识海龟 - 开始绘画",
      xp: 25,
      code: 'import turtle\nt = turtle.Turtle()\nt.forward(100)\nt.right(90)\nt.forward(100)\nt.done()',
      steps: [
        {
          title: "什么是海龟画图？",
          content: `<p>想象有一只小海龟🐢在沙滩上爬行，它爬过的地方会留下痕迹，这就是<strong>海龟画图</strong>！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🐢 海龟的基本命令</div>
  <div class="ch7-cmd-grid">
    <div class="ch7-cmd-card" style="border-color:rgba(0,184,148,0.4)">
      <div class="ch7-cmd-icon">⬆️</div>
      <div class="ch7-cmd-name">forward(n)</div>
      <div class="ch7-cmd-desc">向前爬n步</div>
    </div>
    <div class="ch7-cmd-card" style="border-color:rgba(225,112,85,0.4)">
      <div class="ch7-cmd-icon">⬇️</div>
      <div class="ch7-cmd-name">backward(n)</div>
      <div class="ch7-cmd-desc">后退n步</div>
    </div>
    <div class="ch7-cmd-card" style="border-color:rgba(253,203,110,0.4)">
      <div class="ch7-cmd-icon">↩️</div>
      <div class="ch7-cmd-name">left(角度)</div>
      <div class="ch7-cmd-desc">左转</div>
    </div>
    <div class="ch7-cmd-card" style="border-color:rgba(108,92,231,0.4)">
      <div class="ch7-cmd-icon">↪️</div>
      <div class="ch7-cmd-name">right(角度)</div>
      <div class="ch7-cmd-desc">右转</div>
    </div>
    <div class="ch7-cmd-card" style="border-color:rgba(253,121,168,0.4)">
      <div class="ch7-cmd-icon">✋</div>
      <div class="ch7-cmd-name">penup()</div>
      <div class="ch7-cmd-desc">抬笔（不画线）</div>
    </div>
    <div class="ch7-cmd-card" style="border-color:rgba(0,206,201,0.4)">
      <div class="ch7-cmd-icon">✏️</div>
      <div class="ch7-cmd-name">pendown()</div>
      <div class="ch7-cmd-desc">落笔（画线）</div>
    </div>
  </div>
  <div class="theory-callout">💡 海龟画图是Logo语言的经典！它让编程变成了一件有趣的艺术创作。</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,206,201,0.08));border:1px solid rgba(108,92,231,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;font-weight:700;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(108,92,231,0.1);border-left:3px solid #6c5ce7;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
.ch7-cmd-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(95px,1fr));gap:0.4rem}
.ch7-cmd-card{background:#0d0d1a;border-radius:8px;padding:0.5rem;text-align:center;border-top:3px solid;transition:transform 0.2s;animation:nodeAppear 0.3s ease both}
@keyframes nodeAppear{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}
.ch7-cmd-card:hover{transform:translateY(-3px)}
.ch7-cmd-icon{font-size:1.1rem;margin-bottom:0.15rem}
.ch7-cmd-name{font-family:monospace;font-size:0.82rem;font-weight:700;color:#FF9800;font-weight:700}
.ch7-cmd-desc{font-size:0.92rem;color:#c8d0e0;margin-top:0.1rem}
</style>`
        },
        {
          title: "画一个正方形",
          content: `<p>画正方形的思路：<strong>前进 → 右转90° → 前进 → 右转90°...</strong> 重复4次！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📐 画正方形的步骤</div>
  <div class="ch7-steps-flow">
    <div class="ch7-sf-step"><span class="ch7-sf-num">①</span> forward(100) - 前进</div>
    <div class="ch7-sf-step"><span class="ch7-sf-num">②</span> right(90) - 右转90°</div>
    <div class="ch7-sf-step"><span class="ch7-sf-num">③</span> forward(100) - 前进</div>
    <div class="ch7-sf-step"><span class="ch7-sf-num">④</span> right(90) - 右转90°</div>
    <div class="ch7-sf-step" style="color:#c8d0e0">... 再重复2次</div>
  </div>
  <div class="ch7-smart-tip">
    <span style="color:#fdcb6e">💡 聪明方法：</span>
    <code>for i in range(4): forward(100); right(90)</code>
  </div>
  <div class="theory-callout">🎯 正方形 = 4条边 × 每次转90°（360/4=90）</div>
</div>
<style>
.ch7-steps-flow{display:flex;flex-direction:column;gap:0.2rem;margin:0.5rem 0}
.ch7-sf-step{background:#0d0d1a;border-radius:6px;padding:0.35rem 0.6rem;font-size:0.9rem;color:#e8ecf2;font-family:monospace}
.ch7-sf-num{color:#fdcb6e;font-weight:800;margin-right:0.3rem}
.ch7-smart-tip{background:rgba(253,203,110,0.08);border-radius:8px;padding:0.4rem 0.6rem;margin-top:0.5rem;font-size:0.88rem;color:#e8ecf2}
.ch7-smart-tip code{color:#FF9800;font-weight:700;font-size:0.88rem}
</style>`,
          codeToLoad: 'import turtle\nt = turtle.Turtle()\nfor i in range(4):\n    t.forward(100)\n    t.right(90)\nt.done()'
        },
        {
          title: "颜色和线条",
          content: `<p>海龟还可以设置<strong>颜色</strong>和<strong>线条粗细</strong>：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎨 样式命令</div>
  <div class="ch7-style-grid">
    <div class="ch7-sty-card"><code>pencolor("red")</code><span>线条颜色</span></div>
    <div class="ch7-sty-card"><code>fillcolor("blue")</code><span>填充颜色</span></div>
    <div class="ch7-sty-card"><code>pensize(3)</code><span>线条粗细</span></div>
    <div class="ch7-sty-card"><code>speed(0)</code><span>速度（0=最快）</span></div>
    <div class="ch7-sty-card"><code>begin_fill()</code><span>开始填充</span></div>
    <div class="ch7-sty-card"><code>end_fill()</code><span>结束填充</span></div>
  </div>
  <div class="ch7-color-palette">
    <span class="ch7-color" style="background:#e74c3c" title="red"></span>
    <span class="ch7-color" style="background:#f39c12" title="orange"></span>
    <span class="ch7-color" style="background:#f1c40f" title="yellow"></span>
    <span class="ch7-color" style="background:#2ecc71" title="green"></span>
    <span class="ch7-color" style="background:#3498db" title="blue"></span>
    <span class="ch7-color" style="background:#9b59b6" title="purple"></span>
    <span class="ch7-color" style="background:#e91e63" title="pink"></span>
  </div>
</div>
<style>
.ch7-style-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:0.3rem;margin:0.5rem 0}
.ch7-sty-card{background:#0d0d1a;border-radius:6px;padding:0.35rem 0.5rem;display:flex;justify-content:space-between;align-items:center}
.ch7-sty-card code{font-size:0.82rem;color:#FF9800;font-weight:700}
.ch7-sty-card span{font-size:0.92rem;color:#c8d0e0}
.ch7-color-palette{display:flex;gap:0.3rem;margin-top:0.5rem;justify-content:center}
.ch7-color{width:24px;height:24px;border-radius:50%;cursor:pointer;transition:transform 0.2s;border:2px solid rgba(255,255,255,0.1)}
.ch7-color:hover{transform:scale(1.2)}
</style>`,
          codeToLoad: 'import turtle\nt = turtle.Turtle()\nt.pencolor("red")\nt.pensize(3)\nt.forward(100)\nt.right(90)\nt.pencolor("blue")\nt.forward(100)\nt.right(90)\nt.pencolor("green")\nt.forward(100)\nt.right(90)\nt.pencolor("purple")\nt.forward(100)\nt.done()'
        }
      ],
      challenge: {
        desc: "🎯 用海龟画一个三角形（提示：每次前进100步，右转120度）",
        hint: 'import turtle\nt = turtle.Turtle()\nfor i in range(3):\n    t.forward(100)\n    t.right(120)\nt.done()',
        template: '# 画三角形\nimport turtle\nt = turtle.Turtle()\n',
        check: function(output) { return true; }
      }
    },
    {
      id: "7-2",
      title: "循环画图 - 几何艺术",
      xp: 30,
      code: 'import turtle\nt = turtle.Turtle()\nt.speed(0)\nfor i in range(36):\n    t.forward(100)\n    t.right(100)\nt.done()',
      steps: [
        {
          title: "用循环画多边形",
          content: `<p>发现规律了吗？画正N边形的公式：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📐 正多边形公式</div>
  <div class="ch7-polygon-formula">
    <div class="ch7-pf-main">转角 = <span style="color:#fdcb6e">360°</span> / <span style="color:#00cec9">边数</span></div>
  </div>
  <div class="ch7-polygon-grid">
    <div class="ch7-pg-card"><div class="ch7-pg-shape">△</div><div class="ch7-pg-name">三角形</div><div class="ch7-pg-calc">360/3 = 120°</div></div>
    <div class="ch7-pg-card"><div class="ch7-pg-shape">□</div><div class="ch7-pg-name">正方形</div><div class="ch7-pg-calc">360/4 = 90°</div></div>
    <div class="ch7-pg-card"><div class="ch7-pg-shape">⬠</div><div class="ch7-pg-name">五边形</div><div class="ch7-pg-calc">360/5 = 72°</div></div>
    <div class="ch7-pg-card"><div class="ch7-pg-shape">⬡</div><div class="ch7-pg-name">六边形</div><div class="ch7-pg-calc">360/6 = 60°</div></div>
  </div>
  <div class="theory-callout">💡 边数越多，越接近圆形！<code>range(360)</code> 每次转1度就能画出"圆"。</div>
</div>
<style>
.ch7-polygon-formula{text-align:center;margin:0.5rem 0;font-size:1rem;font-weight:800;color:#FF9800;font-weight:700;font-family:monospace;background:#0d0d1a;border-radius:10px;padding:0.6rem}
.ch7-pf-main{font-size:0.9rem}
.ch7-polygon-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0.4rem;margin:0.5rem 0}
.ch7-pg-card{background:#0d0d1a;border-radius:8px;padding:0.5rem;text-align:center;border-top:2px solid #6c5ce7}
.ch7-pg-shape{font-size:1.3rem;margin-bottom:0.15rem}
.ch7-pg-name{font-size:0.82rem;color:#e8ecf2;font-weight:700}
.ch7-pg-calc{font-size:0.92rem;color:#FF9800;font-weight:700;font-family:monospace;margin-top:0.1rem}
</style>`,
          codeToLoad: 'import turtle\nt = turtle.Turtle()\nt.speed(0)\n# 画六边形\nfor i in range(6):\n    t.forward(100)\n    t.right(60)\nt.done()'
        },
        {
          title: "画出美丽的图案",
          content: `<p>通过在循环中不断改变角度或颜色，可以画出惊艳的图案：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🌀 几何艺术原理</div>
  <div class="ch7-art-idea">
    <div class="ch7-art-step">画一个正方形</div>
    <div class="ch7-art-arrow">→</div>
    <div class="ch7-art-step">旋转一点角度</div>
    <div class="ch7-art-arrow">→</div>
    <div class="ch7-art-step">再画一个正方形</div>
    <div class="ch7-art-arrow">→</div>
    <div class="ch7-art-step">重复36次</div>
    <div class="ch7-art-arrow">→</div>
    <div class="ch7-art-step ch7-art-result">🌸 美丽花朵！</div>
  </div>
  <div class="theory-callout">🎨 试着修改数字，创造属于你自己的艺术作品！</div>
</div>
<style>
.ch7-art-idea{display:flex;align-items:center;gap:0.2rem;flex-wrap:wrap;margin:0.5rem 0;justify-content:center}
.ch7-art-step{background:#0d0d1a;border-radius:6px;padding:0.3rem 0.5rem;font-size:0.82rem;color:#e8ecf2}
.ch7-art-result{background:rgba(253,121,168,0.1);color:#fd79a8;font-weight:700}
.ch7-art-arrow{color:#c8d0e0;font-size:0.85rem}
</style>`,
          codeToLoad: 'import turtle\nt = turtle.Turtle()\nt.speed(0)\nfor i in range(36):\n    t.forward(100)\n    t.right(90)\n    t.right(10)\nt.done()'
        }
      ],
      challenge: {
        desc: "🎯 画一个五角星（提示：每次前进100步，右转144度，共5次）",
        hint: 'import turtle\nt = turtle.Turtle()\nfor i in range(5):\n    t.forward(100)\n    t.right(144)\nt.done()',
        template: '# 画五角星\nimport turtle\nt = turtle.Turtle()\n',
        check: function(output) { return true; }
      }
    }
  ]
};

registerChapter('python', CHAPTER7);
