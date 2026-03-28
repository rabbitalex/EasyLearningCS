// 第七章：模块与库
const CHAPTER8 = {
  chapter: "第七章：模块与库",
  icon: "📦",
  lessons: [
    {
      id: "7-1",
      title: "导入模块 - 站在巨人的肩膀",
      xp: 25,
      code: 'import random\nimport math\n\nprint("随机数:", random.randint(1, 100))\nprint("圆周率:", math.pi)\nprint("平方根:", math.sqrt(16))',
      steps: [
        {
          title: "什么是模块？",
          content: `<p>模块就像一个<strong>工具箱</strong>🧰，里面装着很多好用的工具（函数）。Python 自带了超多工具箱，拿来就能用！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📦 Python 常用内置模块</div>
  <div class="ch8-mod-grid">
    <div class="ch8-mod-card" style="border-color:rgba(253,121,168,0.5);animation-delay:0s">
      <div class="ch8-mod-icon">🎲</div>
      <div class="ch8-mod-name">random</div>
      <div class="ch8-mod-desc">随机数生成</div>
    </div>
    <div class="ch8-mod-card" style="border-color:rgba(108,92,231,0.5);animation-delay:0.08s">
      <div class="ch8-mod-icon">📐</div>
      <div class="ch8-mod-name">math</div>
      <div class="ch8-mod-desc">数学运算</div>
    </div>
    <div class="ch8-mod-card" style="border-color:rgba(0,206,201,0.5);animation-delay:0.16s">
      <div class="ch8-mod-icon">⏰</div>
      <div class="ch8-mod-name">time</div>
      <div class="ch8-mod-desc">时间处理</div>
    </div>
    <div class="ch8-mod-card" style="border-color:rgba(253,203,110,0.5);animation-delay:0.24s">
      <div class="ch8-mod-icon">📅</div>
      <div class="ch8-mod-name">datetime</div>
      <div class="ch8-mod-desc">日期时间</div>
    </div>
    <div class="ch8-mod-card" style="border-color:rgba(0,184,148,0.5);animation-delay:0.32s">
      <div class="ch8-mod-icon">💻</div>
      <div class="ch8-mod-name">os</div>
      <div class="ch8-mod-desc">操作系统</div>
    </div>
    <div class="ch8-mod-card" style="border-color:rgba(225,112,85,0.5);animation-delay:0.4s">
      <div class="ch8-mod-icon">📊</div>
      <div class="ch8-mod-name">json</div>
      <div class="ch8-mod-desc">数据交换</div>
    </div>
  </div>
  <div class="theory-callout">💡 不用自己重复造轮子——直接 import 就可以使用这些强大的功能！</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,206,201,0.08));border:1px solid rgba(108,92,231,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;font-weight:700;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(108,92,231,0.1);border-left:3px solid #6c5ce7;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
.ch8-mod-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0.5rem}
.ch8-mod-card{background:#0d0d1a;border-radius:10px;padding:0.6rem;text-align:center;border-top:3px solid;animation:ch8CardIn 0.4s ease both;transition:transform 0.2s}
.ch8-mod-card:hover{transform:translateY(-4px)}
@keyframes ch8CardIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
.ch8-mod-icon{font-size:1.3rem;margin-bottom:0.2rem}
.ch8-mod-name{font-family:monospace;font-size:0.92rem;font-weight:700;color:#FF9800;font-weight:700}
.ch8-mod-desc{font-size:0.92rem;color:#c8d0e0;margin-top:0.1rem}
</style>`
        },
        {
          title: "import 的三种写法",
          content: `<p>导入模块有多种姿势，各有优劣：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔧 三种导入方式对比</div>
  <div class="ch8-import-compare">
    <div class="ch8-ic-row" style="border-color:#fd79a8">
      <div class="ch8-ic-tag" style="background:#fd79a8">方式一</div>
      <div class="ch8-ic-code">import math</div>
      <div class="ch8-ic-usage">math.sqrt(16)</div>
      <div class="ch8-ic-note">✅ 推荐！清晰知道函数来源</div>
    </div>
    <div class="ch8-ic-row" style="border-color:#FF9800;font-weight:700">
      <div class="ch8-ic-tag" style="background:#a29bfe">方式二</div>
      <div class="ch8-ic-code">from math import sqrt</div>
      <div class="ch8-ic-usage">sqrt(16)</div>
      <div class="ch8-ic-note">✅ 只导入需要的函数</div>
    </div>
    <div class="ch8-ic-row" style="border-color:#fdcb6e">
      <div class="ch8-ic-tag" style="background:#fdcb6e;color:#333">方式三</div>
      <div class="ch8-ic-code">from math import *</div>
      <div class="ch8-ic-usage">sqrt(16)</div>
      <div class="ch8-ic-note">⚠️ 导入全部，可能冲突</div>
    </div>
  </div>
  <div class="ch8-alias-tip">
    <div class="ch8-at-title">🏷️ 还可以起别名：</div>
    <div class="ch8-at-code">import random <span style="color:#fd79a8">as</span> <span style="color:#fdcb6e">rd</span>  →  rd.randint(1, 10)</div>
  </div>
</div>
<style>
.ch8-import-compare{display:flex;flex-direction:column;gap:0.4rem;margin:0.5rem 0}
.ch8-ic-row{background:#0d0d1a;border-radius:10px;padding:0.5rem 0.7rem;border-left:4px solid;display:grid;grid-template-columns:auto 1fr 1fr;grid-template-rows:auto auto;gap:0.15rem 0.6rem;align-items:center}
.ch8-ic-tag{color:#fff;font-size:0.9rem;font-weight:700;padding:0.12rem 0.4rem;border-radius:4px;justify-self:start;grid-row:1/3}
.ch8-ic-code{font-family:monospace;font-size:0.88rem;color:#FF9800;font-weight:700;font-weight:600}
.ch8-ic-usage{font-family:monospace;font-size:0.88rem;color:#00b894}
.ch8-ic-note{font-size:0.92rem;color:#c8d0e0;grid-column:2/4}
.ch8-alias-tip{background:#0d0d1a;border-radius:8px;padding:0.5rem 0.7rem;margin-top:0.5rem}
.ch8-at-title{font-size:0.88rem;color:#e8ecf2;font-weight:700;margin-bottom:0.2rem}
.ch8-at-code{font-family:monospace;font-size:0.88rem;color:#FF9800;font-weight:700}
</style>`,
          codeToLoad: 'import math\nprint("方式一:", math.sqrt(16))\n\nfrom math import pi, sqrt\nprint("方式二:", sqrt(25))\nprint("圆周率:", pi)'
        },
        {
          title: "动手使用 math 和 random",
          content: `<p>让我们实际体验这两个最常用的模块：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📐 math 模块常用功能</div>
  <div class="ch8-func-list">
    <div class="ch8-fl-item"><code>math.pi</code><span>→ 3.14159...</span></div>
    <div class="ch8-fl-item"><code>math.sqrt(x)</code><span>→ 平方根</span></div>
    <div class="ch8-fl-item"><code>math.pow(x,y)</code><span>→ x的y次方</span></div>
    <div class="ch8-fl-item"><code>math.ceil(x)</code><span>→ 向上取整</span></div>
    <div class="ch8-fl-item"><code>math.floor(x)</code><span>→ 向下取整</span></div>
    <div class="ch8-fl-item"><code>math.abs(x)</code><span>→ 绝对值</span></div>
  </div>
</div>
<div class="theory-anim-box" style="margin-top:0.5rem">
  <div class="theory-anim-title">🎲 random 模块常用功能</div>
  <div class="ch8-func-list">
    <div class="ch8-fl-item"><code>random.randint(a,b)</code><span>→ a到b的随机整数</span></div>
    <div class="ch8-fl-item"><code>random.random()</code><span>→ 0~1的随机小数</span></div>
    <div class="ch8-fl-item"><code>random.choice(列表)</code><span>→ 随机选一个</span></div>
    <div class="ch8-fl-item"><code>random.shuffle(列表)</code><span>→ 打乱顺序</span></div>
  </div>
</div>
<style>
.ch8-func-list{display:flex;flex-direction:column;gap:0.25rem}
.ch8-fl-item{display:flex;justify-content:space-between;align-items:center;background:#0d0d1a;border-radius:6px;padding:0.3rem 0.6rem}
.ch8-fl-item code{font-size:0.88rem;color:#FF9800;font-weight:700;font-weight:600}
.ch8-fl-item span{font-size:0.8rem;color:#c8d0e0}
</style>`,
          codeToLoad: 'import random\nimport math\n\nprint("=== math 模块 ===")\nprint("圆周率:", math.pi)\nprint("平方根:", math.sqrt(16))\nprint("向上取整:", math.ceil(3.2))\nprint("向下取整:", math.floor(3.8))\n\nprint("\\n=== random 模块 ===")\nprint("随机整数:", random.randint(1, 100))\nprint("随机选择:", random.choice(["苹果", "香蕉", "橘子"]))\nprint("随机小数:", round(random.random(), 2))'
        },
        {
          title: "模块的工作原理",
          content: `<p>当你写下 <em>import math</em> 时，Python 做了什么？</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔍 import 的幕后过程</div>
  <div class="ch8-import-flow">
    <div class="ch8-if-step" style="animation-delay:0s">
      <div class="ch8-if-num">①</div>
      <div class="ch8-if-text">搜索模块</div>
      <div class="ch8-if-detail">在sys.path路径中查找</div>
    </div>
    <div class="ch8-if-arrow">→</div>
    <div class="ch8-if-step" style="animation-delay:0.15s">
      <div class="ch8-if-num">②</div>
      <div class="ch8-if-text">编译代码</div>
      <div class="ch8-if-detail">将 .py 编译为字节码</div>
    </div>
    <div class="ch8-if-arrow">→</div>
    <div class="ch8-if-step" style="animation-delay:0.3s">
      <div class="ch8-if-num">③</div>
      <div class="ch8-if-text">执行模块</div>
      <div class="ch8-if-detail">运行模块顶层代码</div>
    </div>
    <div class="ch8-if-arrow">→</div>
    <div class="ch8-if-step" style="animation-delay:0.45s">
      <div class="ch8-if-num">④</div>
      <div class="ch8-if-text">创建命名空间</div>
      <div class="ch8-if-detail">模块的函数可用了！</div>
    </div>
  </div>
  <div class="theory-callout">💡 第零章讲的编译原理在这里派上用场了！import 其实就是在「编译 + 执行」另一个 Python 文件。</div>
</div>
<style>
.ch8-import-flow{display:flex;align-items:center;gap:0.2rem;flex-wrap:wrap;justify-content:center;margin:0.5rem 0}
.ch8-if-step{background:#0d0d1a;border-radius:10px;padding:0.5rem;text-align:center;min-width:80px;animation:ch8CardIn 0.4s ease both;border:1px solid rgba(108,92,231,0.15)}
.ch8-if-num{font-size:0.9rem;font-weight:800;color:#fdcb6e}
.ch8-if-text{font-size:0.88rem;font-weight:700;color:#FF9800;font-weight:700;margin:0.1rem 0}
.ch8-if-detail{font-size:0.9rem;color:#c8d0e0}
.ch8-if-arrow{color:#555;font-size:0.8rem;font-weight:700}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 用 math 模块计算：圆周率 π 的平方根，以及 2 的 10 次方。用 random 模块随机生成一个 1-50 的整数并打印。",
        hint: 'import math\nimport random\nprint("π的平方根:", math.sqrt(math.pi))\nprint("2的10次方:", math.pow(2, 10))\nprint("随机数:", random.randint(1, 50))',
        template: '# 使用 math 和 random 模块\nimport math\nimport random\n',
        check: function(output) { return output.trim().split('\n').length >= 2; }
      }
    },
    {
      id: "7-2",
      title: "random 深入 - 随机的魔法",
      xp: 30,
      code: 'import random\n\n# 掷骰子\ndef roll_dice():\n    return random.randint(1, 6)\n\n# 模拟10次掷骰子\nresults = []\nfor i in range(10):\n    results.append(roll_dice())\n\nprint("掷骰子结果:", results)\nprint("最大值:", max(results))\nprint("最小值:", min(results))',
      steps: [
        {
          title: "random 的魔法世界",
          content: `<p>random 模块是编程中最有趣的模块之一，它能让你的程序充满<strong>不确定性</strong>和<strong>惊喜</strong>！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎰 随机数的应用场景</div>
  <div class="ch8-scene-grid">
    <div class="ch8-scene-card">
      <div class="ch8-sc-icon">🎮</div>
      <div class="ch8-sc-name">游戏</div>
      <div class="ch8-sc-desc">敌人随机出现、随机掉落</div>
    </div>
    <div class="ch8-scene-card">
      <div class="ch8-sc-icon">🔐</div>
      <div class="ch8-sc-name">密码</div>
      <div class="ch8-sc-desc">生成随机验证码/密码</div>
    </div>
    <div class="ch8-scene-card">
      <div class="ch8-sc-icon">📊</div>
      <div class="ch8-sc-name">模拟</div>
      <div class="ch8-sc-desc">模拟实验、统计分析</div>
    </div>
    <div class="ch8-scene-card">
      <div class="ch8-sc-icon">🃏</div>
      <div class="ch8-sc-name">洗牌</div>
      <div class="ch8-sc-desc">打乱列表顺序</div>
    </div>
  </div>
  <div class="theory-callout">💡 计算机产生的其实是"伪随机数"——看起来随机但有规律，真正的随机来自物理世界。</div>
</div>
<style>
.ch8-scene-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:0.4rem;margin:0.5rem 0}
.ch8-scene-card{background:#0d0d1a;border-radius:10px;padding:0.6rem;text-align:center;border:1px solid rgba(253,121,168,0.15);transition:transform 0.2s,border-color 0.2s}
.ch8-scene-card:hover{transform:translateY(-3px);border-color:rgba(253,121,168,0.4)}
.ch8-sc-icon{font-size:1.4rem;margin-bottom:0.15rem}
.ch8-sc-name{font-size:0.92rem;font-weight:700;color:#fd79a8}
.ch8-sc-desc{font-size:0.92rem;color:#c8d0e0;margin-top:0.1rem}
</style>`
        },
        {
          title: "掷骰子模拟器",
          content: `<p>让我们用函数 + random 做一个掷骰子模拟器：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎲 掷骰子的逻辑</div>
  <div class="ch8-dice-flow">
    <div class="ch8-df-step">
      <span class="ch8-df-label">定义函数</span>
      <code>def roll_dice():</code>
    </div>
    <div class="ch8-df-step">
      <span class="ch8-df-label">生成随机数</span>
      <code>return random.randint(1, 6)</code>
    </div>
    <div class="ch8-df-step">
      <span class="ch8-df-label">循环调用</span>
      <code>for i in range(10): roll_dice()</code>
    </div>
    <div class="ch8-df-step">
      <span class="ch8-df-label">统计结果</span>
      <code>max(), min(), sum()/len()</code>
    </div>
  </div>
  <div class="ch8-dice-visual">
    <span class="ch8-die">⚀</span>
    <span class="ch8-die">⚁</span>
    <span class="ch8-die">⚂</span>
    <span class="ch8-die">⚃</span>
    <span class="ch8-die">⚄</span>
    <span class="ch8-die">⚅</span>
  </div>
</div>
<style>
.ch8-dice-flow{display:flex;flex-direction:column;gap:0.3rem;margin:0.5rem 0}
.ch8-df-step{display:flex;align-items:center;gap:0.5rem;background:#0d0d1a;border-radius:6px;padding:0.35rem 0.6rem}
.ch8-df-label{font-size:0.92rem;color:#fdcb6e;font-weight:700;min-width:60px}
.ch8-df-step code{font-size:0.88rem;color:#FF9800;font-weight:700}
.ch8-dice-visual{display:flex;justify-content:center;gap:0.5rem;margin-top:0.6rem}
.ch8-die{font-size:1.8rem;animation:ch8DiceBounce 1.2s ease infinite;display:inline-block}
.ch8-die:nth-child(2){animation-delay:0.2s}
.ch8-die:nth-child(3){animation-delay:0.4s}
.ch8-die:nth-child(4){animation-delay:0.6s}
.ch8-die:nth-child(5){animation-delay:0.8s}
.ch8-die:nth-child(6){animation-delay:1s}
@keyframes ch8DiceBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
</style>`,
          codeToLoad: 'import random\n\ndef roll_dice():\n    return random.randint(1, 6)\n\n# 模拟10次掷骰子\nresults = []\nfor i in range(10):\n    results.append(roll_dice())\n\nprint("掷骰子结果:", results)\nprint("最大值:", max(results))\nprint("最小值:", min(results))\nprint("平均值:", sum(results) / len(results))'
        },
        {
          title: "random.choice 和 random.shuffle",
          content: `<p>除了生成随机数，random 还能<strong>随机选择</strong>和<strong>随机打乱</strong>：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🃏 选择与打乱</div>
  <div class="ch8-choice-demo">
    <div class="ch8-cd-section">
      <div class="ch8-cd-title">random.choice(列表) — 随机选一个</div>
      <div class="ch8-cd-items">
        <span class="ch8-cd-item" style="animation-delay:0s">🍎苹果</span>
        <span class="ch8-cd-item" style="animation-delay:0.1s">🍌香蕉</span>
        <span class="ch8-cd-item ch8-cd-selected" style="animation-delay:0.2s">🍊橘子 ✓</span>
        <span class="ch8-cd-item" style="animation-delay:0.3s">🍇葡萄</span>
      </div>
    </div>
    <div class="ch8-cd-section" style="margin-top:0.5rem">
      <div class="ch8-cd-title">random.shuffle(列表) — 原地打乱</div>
      <div class="ch8-shuffle-demo">
        <div class="ch8-sd-before"><span>前:</span> [1, 2, 3, 4, 5]</div>
        <div class="ch8-sd-arrow">🔀</div>
        <div class="ch8-sd-after"><span>后:</span> [3, 1, 5, 2, 4]</div>
      </div>
    </div>
  </div>
</div>
<style>
.ch8-choice-demo{margin:0.5rem 0}
.ch8-cd-section{background:#0d0d1a;border-radius:10px;padding:0.5rem 0.7rem}
.ch8-cd-title{font-size:0.88rem;color:#FF9800;font-weight:700;font-weight:700;margin-bottom:0.3rem}
.ch8-cd-items{display:flex;gap:0.3rem;flex-wrap:wrap}
.ch8-cd-item{background:rgba(108,92,231,0.08);border:1px solid rgba(108,92,231,0.2);border-radius:6px;padding:0.2rem 0.5rem;font-size:0.85rem;color:#e8ecf2;animation:ch8CardIn 0.3s ease both}
.ch8-cd-selected{background:rgba(253,121,168,0.15);border-color:#fd79a8;color:#fd79a8;font-weight:700}
.ch8-shuffle-demo{display:flex;align-items:center;gap:0.4rem;margin-top:0.2rem}
.ch8-sd-before,.ch8-sd-after{font-family:monospace;font-size:0.88rem;color:#e8ecf2}
.ch8-sd-before span,.ch8-sd-after span{color:#c8d0e0;font-size:0.92rem;margin-right:0.3rem}
.ch8-sd-after{color:#00b894}
.ch8-sd-arrow{font-size:1rem}
</style>`,
          codeToLoad: 'import random\n\n# 随机选择\nfruits = ["苹果", "香蕉", "橘子", "葡萄", "西瓜"]\nprint("随机水果:", random.choice(fruits))\nprint("随机水果:", random.choice(fruits))\n\n# 随机打乱\nnumbers = [1, 2, 3, 4, 5]\nprint("打乱前:", numbers)\nrandom.shuffle(numbers)\nprint("打乱后:", numbers)'
        }
      ],
      challenge: {
        desc: "🎯 制作一个简易抽奖程序：有5个参与者名单，随机抽取一等奖1名和二等奖2名（不能重复中奖），打印获奖名单。",
        hint: 'import random\nplayers = ["小明", "小红", "小刚", "小李", "小王"]\nrandom.shuffle(players)\nprint("一等奖:", players[0])\nprint("二等奖:", players[1], "和", players[2])',
        template: '# 简易抽奖程序\nimport random\nplayers = ["小明", "小红", "小刚", "小李", "小王"]\n',
        check: function(output) { return output.indexOf("奖") !== -1 || output.trim().split('\n').length >= 2; }
      }
    },
    {
      id: "7-3",
      title: "制作自己的模块 - 工具箱DIY",
      xp: 35,
      code: '# 模拟自定义模块的效果\n# 假设 mytools.py 中有这些函数\n\ndef is_even(n):\n    """判断是否为偶数"""\n    return n % 2 == 0\n\ndef factorial(n):\n    """计算阶乘"""\n    result = 1\n    for i in range(1, n + 1):\n        result *= i\n    return result\n\ndef celsius_to_fahrenheit(c):\n    """摄氏度转华氏度"""\n    return c * 1.8 + 32\n\n# 使用我们的"模块"\nprint("5是偶数吗？", is_even(5))\nprint("5的阶乘:", factorial(5))\nprint("37°C =", celsius_to_fahrenheit(37), "°F")',
      steps: [
        {
          title: "为什么要自己写模块？",
          content: `<p>当你写了很多好用的函数，就可以把它们放在一个<strong>独立的 .py 文件</strong>里，变成你自己的工具箱！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🛠️ 自定义模块的好处</div>
  <div class="ch8-benefit-list">
    <div class="ch8-bn-item" style="animation-delay:0s">
      <div class="ch8-bn-icon">♻️</div>
      <div class="ch8-bn-text">
        <div class="ch8-bn-title">代码复用</div>
        <div class="ch8-bn-desc">写一次，到处用，不用反复复制粘贴</div>
      </div>
    </div>
    <div class="ch8-bn-item" style="animation-delay:0.1s">
      <div class="ch8-bn-icon">📂</div>
      <div class="ch8-bn-text">
        <div class="ch8-bn-title">代码整理</div>
        <div class="ch8-bn-desc">把相关功能放在一起，项目结构更清晰</div>
      </div>
    </div>
    <div class="ch8-bn-item" style="animation-delay:0.2s">
      <div class="ch8-bn-icon">🤝</div>
      <div class="ch8-bn-text">
        <div class="ch8-bn-title">团队协作</div>
        <div class="ch8-bn-desc">你写的模块别人也可以直接 import 使用</div>
      </div>
    </div>
    <div class="ch8-bn-item" style="animation-delay:0.3s">
      <div class="ch8-bn-icon">🧪</div>
      <div class="ch8-bn-text">
        <div class="ch8-bn-title">方便测试</div>
        <div class="ch8-bn-desc">每个模块可以独立测试，更容易找到bug</div>
      </div>
    </div>
  </div>
</div>
<style>
.ch8-benefit-list{display:flex;flex-direction:column;gap:0.35rem}
.ch8-bn-item{display:flex;align-items:center;gap:0.5rem;background:#0d0d1a;border-radius:8px;padding:0.5rem 0.7rem;animation:ch8CardIn 0.4s ease both;transition:transform 0.2s}
.ch8-bn-item:hover{transform:translateX(4px)}
.ch8-bn-icon{font-size:1.2rem;flex-shrink:0}
.ch8-bn-title{font-size:0.9rem;font-weight:700;color:#FF9800;font-weight:700}
.ch8-bn-desc{font-size:0.92rem;color:#c8d0e0;margin-top:0.05rem}
</style>`
        },
        {
          title: "模块文件的结构",
          content: `<p>创建模块其实就是写一个普通的 <em>.py</em> 文件：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📄 mytools.py 的结构</div>
  <div class="ch8-file-structure">
    <div class="ch8-fs-header">
      <span class="ch8-fs-icon">🐍</span>
      <span class="ch8-fs-name">mytools.py</span>
    </div>
    <div class="ch8-fs-content">
      <div class="ch8-fs-section">
        <div class="ch8-fs-label">函数定义区</div>
        <div class="ch8-fs-code">def is_even(n):
    return n % 2 == 0

def factorial(n):
    result = 1
    for i in range(1, n+1):
        result *= i
    return result</div>
      </div>
    </div>
  </div>
  <div class="ch8-usage-box" style="margin-top:0.5rem">
    <div class="ch8-fs-header">
      <span class="ch8-fs-icon">🐍</span>
      <span class="ch8-fs-name">main.py — 使用模块</span>
    </div>
    <div class="ch8-fs-content">
      <div class="ch8-fs-code" style="color:#00b894">import mytools
print(mytools.is_even(4))
print(mytools.factorial(5))</div>
    </div>
  </div>
</div>
<style>
.ch8-file-structure,.ch8-usage-box{background:#0d0d1a;border-radius:10px;overflow:hidden}
.ch8-fs-header{display:flex;align-items:center;gap:0.4rem;padding:0.4rem 0.7rem;background:rgba(108,92,231,0.1);border-bottom:1px solid rgba(108,92,231,0.15)}
.ch8-fs-icon{font-size:0.9rem}
.ch8-fs-name{font-size:0.88rem;font-weight:700;color:#FF9800;font-weight:700}
.ch8-fs-content{padding:0.5rem 0.7rem}
.ch8-fs-label{font-size:0.92rem;color:#fdcb6e;font-weight:700;margin-bottom:0.2rem}
.ch8-fs-code{font-family:monospace;font-size:0.82rem;color:#e8ecf2;white-space:pre;line-height:1.5}
</style>`,
          codeToLoad: '# 模拟自定义模块\ndef is_even(n):\n    """判断是否为偶数"""\n    return n % 2 == 0\n\ndef factorial(n):\n    """计算阶乘"""\n    result = 1\n    for i in range(1, n + 1):\n        result *= i\n    return result\n\ndef celsius_to_fahrenheit(c):\n    """摄氏度转华氏度"""\n    return c * 1.8 + 32\n\n# 使用\nprint("5是偶数?", is_even(5))\nprint("5! =", factorial(5))\nprint("37°C =", celsius_to_fahrenheit(37), "°F")'
        },
        {
          title: "模块的最佳实践",
          content: `<p>写好一个模块需要注意以下几点：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">✅ 模块编写最佳实践</div>
  <div class="ch8-practice-grid">
    <div class="ch8-pr-card ch8-pr-do">
      <div class="ch8-pr-head">✅ 应该做</div>
      <div class="ch8-pr-item">给函数写文档字符串"""</div>
      <div class="ch8-pr-item">函数名用小写+下划线</div>
      <div class="ch8-pr-item">每个模块功能单一</div>
      <div class="ch8-pr-item">添加使用示例</div>
    </div>
    <div class="ch8-pr-card ch8-pr-dont">
      <div class="ch8-pr-head">❌ 不要做</div>
      <div class="ch8-pr-item">一个模块塞太多功能</div>
      <div class="ch8-pr-item">模块顶层放大量执行代码</div>
      <div class="ch8-pr-item">函数名含义不清</div>
      <div class="ch8-pr-item">忽视代码注释</div>
    </div>
  </div>
  <div class="theory-callout">🎯 好的模块就像好的工具——名字直观、功能明确、使用方便！</div>
</div>
<style>
.ch8-practice-grid{display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;margin:0.5rem 0}
.ch8-pr-card{background:#0d0d1a;border-radius:10px;padding:0.5rem 0.7rem}
.ch8-pr-do{border:1px solid rgba(0,184,148,0.3)}
.ch8-pr-dont{border:1px solid rgba(225,112,85,0.3)}
.ch8-pr-head{font-size:0.92rem;font-weight:700;margin-bottom:0.3rem}
.ch8-pr-do .ch8-pr-head{color:#00b894}
.ch8-pr-dont .ch8-pr-head{color:#e17055}
.ch8-pr-item{font-size:0.8rem;color:#c8d0e0;padding:0.15rem 0;border-bottom:1px solid rgba(255,255,255,0.03)}
.ch8-pr-item:last-child{border:none}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 创建一组工具函数：1) is_palindrome(s) 判断字符串是否回文，2) count_vowels(s) 统计元音字母数量，并测试它们。",
        hint: 'def is_palindrome(s):\n    return s == s[::-1]\n\ndef count_vowels(s):\n    count = 0\n    for c in s.lower():\n        if c in "aeiou":\n            count += 1\n    return count\n\nprint(is_palindrome("abcba"))\nprint(count_vowels("Hello World"))',
        template: '# 创建你的工具函数\n',
        check: function(output) { return output.indexOf("True") !== -1 || output.indexOf("true") !== -1 || output.trim().split('\n').length >= 2; }
      }
    }
  ]
};

registerChapter('python', CHAPTER8);
