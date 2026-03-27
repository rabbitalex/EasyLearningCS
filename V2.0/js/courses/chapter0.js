// 第零章：计算机科学理论基础（动画教学）
const CHAPTER0 = {
  chapter: "第九章：程序是怎么跑起来的",
  chapterNum: 1,
  icon: "🔬",
  lessons: [
    // ============================================================
    // 课程 0-1：解释器 —— 边读边执行的翻译官
    // ============================================================
    {
      id: "0-1",
      title: "解释器 —— 边读边执行的翻译官",
      xp: 20,
      code: '# 这就是Python解释器正在做的事！\n# 它一行一行地读取你的代码，立刻执行\nprint("第1行：解释器读到我，立刻执行！")\nprint("第2行：现在轮到我了！")\nprint("第3行：解释器从上到下，一行不漏！")\n\nx = 10\ny = 20\nprint("x + y =", x + y)',
      steps: [
        {
          title: '你的代码是怎么"跑"起来的？',
          content: `
<p>你有没有想过：你写的 <em>print("Hello")</em> 是怎么变成屏幕上的文字的？</p>
<p>计算机只认识 <strong>0 和 1</strong>（二进制），它根本看不懂 Python！</p>
<p>所以我们需要一个"翻译官"，把 Python 代码翻译成计算机能懂的指令。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🤔 问题：Python代码如何变成结果？</div>
  <div class="theory-flow-row" style="margin-bottom:0.5rem">
    <div class="theory-node theory-node-code t0-fadein" style="animation-delay:0.2s"><div class="theory-node-icon">📝</div><div class="theory-node-label">Python代码</div><div class="theory-node-sub t0-typewriter" style="--tw-len:14;--tw-dur:1.5s">print("Hello")</div></div>
    <div class="theory-arrow t0-fadein" style="animation-delay:0.6s">→</div>
    <div class="theory-node theory-node-mystery t0-fadein" style="animation-delay:0.9s;position:relative;overflow:hidden"><div class="t0-shimmer"></div><div class="theory-node-icon">❓</div><div class="theory-node-label">神秘的过程</div><div class="theory-node-sub">???</div></div>
    <div class="theory-arrow t0-fadein" style="animation-delay:1.2s">→</div>
    <div class="theory-node theory-node-result t0-fadein" style="animation-delay:1.5s"><div class="theory-node-icon">💻</div><div class="theory-node-label">屏幕输出</div><div class="theory-node-sub">Hello</div></div>
  </div>
  <!-- 二进制可视化 -->
  <div class="t0-binary-box">
    <div class="t0-binary-title">🧠 计算机眼中的 "Hello"</div>
    <div class="t0-binary-flow">
      <div class="t0-char-col t0-fadein" style="animation-delay:0.3s"><div class="t0-char">H</div><div class="t0-bin-val">01001000</div></div>
      <div class="t0-char-col t0-fadein" style="animation-delay:0.5s"><div class="t0-char">e</div><div class="t0-bin-val">01100101</div></div>
      <div class="t0-char-col t0-fadein" style="animation-delay:0.7s"><div class="t0-char">l</div><div class="t0-bin-val">01101100</div></div>
      <div class="t0-char-col t0-fadein" style="animation-delay:0.9s"><div class="t0-char">l</div><div class="t0-bin-val">01101100</div></div>
      <div class="t0-char-col t0-fadein" style="animation-delay:1.1s"><div class="t0-char">o</div><div class="t0-bin-val">01101111</div></div>
    </div>
    <div class="t0-binary-hint">每个字符 = 8位二进制 = 1个字节(Byte)</div>
  </div>
  <div class="theory-callout" style="margin-top:1rem">💡 这个"神秘的过程"就是今天要揭秘的内容——<strong>解释器</strong>！</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,206,201,0.08));border:1px solid rgba(108,92,231,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;font-weight:700;margin-bottom:1rem;font-size:0.9rem}
.theory-flow-row{display:flex;align-items:center;justify-content:center;gap:0.5rem;flex-wrap:wrap;margin:0.8rem 0}
.theory-node{background:rgba(13,13,26,0.8);border-radius:12px;padding:0.7rem 0.9rem;text-align:center;min-width:90px;border:1px solid rgba(108,92,231,0.25);transition:transform 0.3s}
.theory-node:hover{transform:translateY(-3px)}
.theory-node-icon{font-size:1.5rem;margin-bottom:0.2rem}
.theory-node-label{font-size:0.9rem;font-weight:700;color:#e8ecf2}
.theory-node-sub{font-size:0.8rem;color:#c8d0e0;margin-top:0.15rem;font-family:monospace}
.theory-node-code{border-color:rgba(108,92,231,0.5)}
.theory-node-mystery{border-color:rgba(253,203,110,0.5)}
.theory-node-result{border-color:rgba(0,184,148,0.5)}
.theory-arrow{font-size:1.4rem;color:#FF9800;font-weight:700;animation:arrowPulse 1.2s ease-in-out infinite}
@keyframes arrowPulse{0%,100%{opacity:0.4;transform:translateX(0)}50%{opacity:1;transform:translateX(4px)}}
.theory-callout{background:rgba(108,92,231,0.1);border-left:3px solid #6c5ce7;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
.theory-btn{margin-top:0.8rem;padding:0.5rem 1.2rem;background:linear-gradient(135deg,#FF9800,#F57C00);border:none;border-radius:20px;color:#fff;font-size:0.92rem;font-weight:700;cursor:pointer;transition:transform 0.2s,box-shadow 0.2s;box-shadow:0 3px 10px rgba(255,152,0,0.3)}
.theory-btn:hover{transform:scale(1.05);box-shadow:0 4px 18px rgba(255,152,0,0.5)}
/* 打字机效果 */
.t0-typewriter{overflow:hidden;white-space:nowrap;border-right:2px solid #a29bfe;width:0;animation:t0tw calc(var(--tw-dur,1.5s)) steps(var(--tw-len,14)) 0.5s forwards,t0blink 0.6s step-end infinite}
@keyframes t0tw{to{width:100%}}
@keyframes t0blink{50%{border-color:transparent}}
/* 渐入动画 */
.t0-fadein{opacity:0;animation:t0fi 0.6s ease forwards}
@keyframes t0fi{to{opacity:1}}
/* 神秘闪光 */
.t0-shimmer{position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(253,203,110,0.15),transparent);animation:t0shim 2s ease-in-out infinite}
@keyframes t0shim{0%{left:-100%}100%{left:200%}}
/* 二进制可视化 */
.t0-binary-box{background:rgba(13,13,26,0.6);border-radius:12px;padding:0.8rem;margin-top:0.8rem;border:1px solid rgba(0,206,201,0.15)}
.t0-binary-title{font-size:0.9rem;font-weight:700;color:#00cec9;margin-bottom:0.6rem;text-align:center}
.t0-binary-flow{display:flex;justify-content:center;gap:0.5rem;flex-wrap:wrap}
.t0-char-col{display:flex;flex-direction:column;align-items:center;gap:0.3rem}
.t0-char{width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,#6c5ce7,#a29bfe);color:#fff;font-weight:800;font-size:0.85rem;display:flex;align-items:center;justify-content:center;font-family:monospace}
.t0-bin-val{font-family:monospace;font-size:0.88rem;color:#00b894;letter-spacing:0.5px;background:rgba(0,184,148,0.08);padding:0.15rem 0.3rem;border-radius:4px;animation:t0binGlow 2s ease-in-out infinite alternate}
@keyframes t0binGlow{0%{text-shadow:none}100%{text-shadow:0 0 6px rgba(0,184,148,0.5)}}
.t0-binary-hint{text-align:center;font-size:0.8rem;color:#c8d0e0;margin-top:0.5rem}
</style>`
        },
        {
          title: "解释器：一行一行地翻译执行",
          content: `
<p><strong>解释器（Interpreter）</strong>就像一个实时翻译员🎙️：</p>
<p>它<strong>读一行 Python 代码</strong>，立刻<strong>翻译并执行</strong>，然后再读下一行。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎬 解释器工作动画 — 点击播放体验</div>
  <div class="interp-demo">
    <div class="interp-code-panel">
      <div class="interp-code-title">📝 你的代码</div>
      <div class="interp-line" id="il1"><span class="interp-ln">1</span><span class="interp-cursor" id="ic1">▶</span> <code>print(<span style="color:#00b894">"Hello"</span>)</code></div>
      <div class="interp-line" id="il2"><span class="interp-ln">2</span><span class="interp-cursor" id="ic2" style="opacity:0">▶</span> <code>x = <span style="color:#fdcb6e">10</span></code></div>
      <div class="interp-line" id="il3"><span class="interp-ln">3</span><span class="interp-cursor" id="ic3" style="opacity:0">▶</span> <code>print(x + <span style="color:#fdcb6e">5</span>)</code></div>
    </div>
    <div class="interp-arrow-col">
      <div class="interp-gear" id="interpGear">⚙️</div>
      <div class="interp-label">解释器</div>
      <div class="interp-status" id="interpStatus">等待...</div>
    </div>
    <div class="interp-output-panel">
      <div class="interp-code-title">💻 执行结果</div>
      <div class="interp-output" id="interpOutput"><span style="color:#555;font-size:0.85rem">点击播放查看</span></div>
      <div class="interp-mem" id="interpMem"></div>
    </div>
  </div>
  <button class="theory-btn" id="interpPlayBtn" onclick="(function(){var btn=document.getElementById('interpPlayBtn');if(btn)btn.disabled=true;var gear=document.getElementById('interpGear');var status=document.getElementById('interpStatus');var mem=document.getElementById('interpMem');var lines=[{id:'il1',cid:'ic1',out:'Hello',stat:'🔍 读取第1行...',mem:''},{id:'il2',cid:'ic2',out:null,stat:'💾 存储变量 x=10',mem:'<div class=interp-mem-item>x = <span style=color:#fdcb6e>10</span></div>'},{id:'il3',cid:'ic3',out:'15',stat:'🧮 计算 x+5=15',mem:'<div class=interp-mem-item>x = <span style=color:#fdcb6e>10</span></div>'}];var output=document.getElementById('interpOutput');if(output)output.innerHTML='';if(mem)mem.innerHTML='';lines.forEach(function(l){var el=document.getElementById(l.id);var c=document.getElementById(l.cid);if(el)el.classList.remove('active');if(c)c.style.opacity='0';});if(gear)gear.classList.add('spinning');var delay=0;lines.forEach(function(l,idx){setTimeout(function(){lines.forEach(function(x){var e=document.getElementById(x.id);if(e)e.classList.remove('active');});var el=document.getElementById(l.id);var c=document.getElementById(l.cid);if(el)el.classList.add('active');if(c)c.style.opacity='1';if(status)status.textContent=l.stat;if(mem&&l.mem)mem.innerHTML=l.mem;if(l.out&&output){var div=document.createElement('div');div.className='interp-output-line';div.innerHTML='<span style=color:#555>>>> </span>'+l.out;output.appendChild(div);}if(idx===lines.length-1){setTimeout(function(){if(gear)gear.classList.remove('spinning');if(status)status.textContent='✅ 完成！';if(btn)btn.disabled=false;},600);}},delay);delay+=1200;});})()">▶ 播放执行过程</button>
</div>
<div class="theory-anim-box" style="margin-top:0.6rem">
  <div class="theory-anim-title">💬 生活中的类比</div>
  <div class="t0-analogy-row">
    <div class="t0-analogy-card"><div class="t0-an-icon">🎙️</div><div class="t0-an-label">同声传译员</div><div class="t0-an-desc">听一句，翻译一句，<br>不等说完就开始翻译</div></div>
    <div class="t0-an-eq">=</div>
    <div class="t0-analogy-card" style="border-color:rgba(0,206,201,0.4)"><div class="t0-an-icon">🐍</div><div class="t0-an-label">Python解释器</div><div class="t0-an-desc">读一行，执行一行，<br>不等写完就能运行</div></div>
  </div>
</div>
<style>
.interp-demo{display:flex;gap:0.6rem;align-items:stretch;margin:0.8rem 0;flex-wrap:wrap}
.interp-code-panel,.interp-output-panel{background:#0d0d1a;border-radius:10px;padding:0.8rem;flex:1;min-width:130px;border:1px solid rgba(108,92,231,0.2)}
.interp-code-title{font-size:0.85rem;color:#c8d0e0;margin-bottom:0.5rem;font-weight:700}
.interp-line{font-family:monospace;font-size:0.92rem;padding:0.3rem 0.4rem;border-radius:6px;color:#FF9800;font-weight:700;transition:all 0.4s cubic-bezier(.4,0,.2,1);display:flex;align-items:center;gap:0.3rem;border-left:3px solid transparent}
.interp-line.active{background:rgba(108,92,231,0.15);color:#fff;border-left-color:#FF9800;font-weight:700;transform:translateX(4px)}
.interp-ln{font-size:0.92rem;color:#555;min-width:14px;text-align:right;margin-right:0.2rem}
.interp-cursor{color:#fdcb6e;font-size:0.85rem;transition:opacity 0.3s}
.interp-arrow-col{display:flex;flex-direction:column;align-items:center;gap:0.3rem;justify-content:center;min-width:60px}
.interp-gear{font-size:1.6rem;transition:transform 0.3s}
.interp-gear.spinning{animation:gearSpin 0.5s linear infinite}
@keyframes gearSpin{to{transform:rotate(360deg)}}
.interp-label{font-size:0.8rem;color:#c8d0e0;font-weight:700}
.interp-status{font-size:0.92rem;color:#FF9800;font-weight:700;text-align:center;min-height:1.2em;transition:all 0.3s}
.interp-output{font-family:monospace;font-size:0.92rem;color:#00b894;min-height:50px}
.interp-output-line{padding:0.2rem 0;animation:fadeInLine 0.4s ease}
@keyframes fadeInLine{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
.interp-mem{margin-top:0.5rem;border-top:1px solid rgba(255,255,255,0.06);padding-top:0.4rem}
.interp-mem-item{font-size:0.82rem;color:#e8ecf2;padding:0.15rem 0.3rem;font-family:monospace}
/* 类比卡片 */
.t0-analogy-row{display:flex;align-items:center;justify-content:center;gap:0.6rem;flex-wrap:wrap}
.t0-analogy-card{background:#0d0d1a;border-radius:12px;padding:0.8rem;text-align:center;border:1px solid rgba(108,92,231,0.3);flex:1;min-width:120px;transition:transform 0.3s}
.t0-analogy-card:hover{transform:scale(1.03)}
.t0-an-icon{font-size:1.8rem;margin-bottom:0.3rem}
.t0-an-label{font-size:0.92rem;font-weight:800;color:#e8ecf2;margin-bottom:0.3rem}
.t0-an-desc{font-size:0.8rem;color:#c8d0e0;line-height:1.5}
.t0-an-eq{font-size:1.3rem;font-weight:800;color:#FF9800;font-weight:700}
</style>`
        },
        {
          title: "解释器的优缺点",
          content: `
<p>解释器有它的<strong>优点</strong>，也有<strong>缺点</strong>，让我们用可视化来对比：</p>
<div class="theory-anim-box">
  <div class="pros-cons-grid">
    <div class="pros-card t0-fadein" style="animation-delay:0.2s">
      <div class="pros-title">✅ 优点</div>
      <div class="pros-item"><span class="pros-icon">⚡</span><div><strong>立即运行</strong><p>写完代码马上就能跑，不用等待编译</p></div></div>
      <div class="pros-item"><span class="pros-icon">🔍</span><div><strong>错误定位精准</strong><p>哪行出错就报哪行，方便调试</p></div></div>
      <div class="pros-item"><span class="pros-icon">🌍</span><div><strong>跨平台</strong><p>同一份代码在不同系统上都能跑</p></div></div>
      <div class="pros-item"><span class="pros-icon">🔧</span><div><strong>交互式开发</strong><p>可以在REPL中逐行测试，即时反馈</p></div></div>
    </div>
    <div class="cons-card t0-fadein" style="animation-delay:0.4s">
      <div class="cons-title">❌ 缺点</div>
      <div class="pros-item"><span class="pros-icon">🐢</span><div><strong>运行较慢</strong><p>每次运行都要重新翻译，比编译型慢</p></div></div>
      <div class="pros-item"><span class="pros-icon">🔓</span><div><strong>代码暴露</strong><p>源代码直接可见，不利于保护知识产权</p></div></div>
      <div class="pros-item"><span class="pros-icon">📦</span><div><strong>需要运行时</strong><p>运行代码必须安装解释器环境</p></div></div>
    </div>
  </div>
  <!-- 速度对比进度条 -->
  <div class="t0-speed-compare">
    <div class="t0-sp-title">🏎️ 运行速度直觉对比</div>
    <div class="t0-sp-row"><span class="t0-sp-label">C/C++ 编译型</span><div class="t0-sp-bar"><div class="t0-sp-fill" style="width:95%;background:linear-gradient(90deg,#00b894,#00cec9);animation-delay:0.3s"></div></div><span class="t0-sp-val">⚡极快</span></div>
    <div class="t0-sp-row"><span class="t0-sp-label">Java 半编译</span><div class="t0-sp-bar"><div class="t0-sp-fill" style="width:70%;background:linear-gradient(90deg,#fdcb6e,#e17055);animation-delay:0.5s"></div></div><span class="t0-sp-val">🚀较快</span></div>
    <div class="t0-sp-row"><span class="t0-sp-label">Python 解释型</span><div class="t0-sp-bar"><div class="t0-sp-fill" style="width:25%;background:linear-gradient(90deg,#6c5ce7,#a29bfe);animation-delay:0.7s"></div></div><span class="t0-sp-val">🐢一般</span></div>
  </div>
  <div class="lang-examples">
    <div class="lang-tag t0-fadein" style="background:rgba(108,92,231,0.2);border-color:rgba(108,92,231,0.4);animation-delay:0.3s">🐍 Python</div>
    <div class="lang-tag t0-fadein" style="background:rgba(253,203,110,0.2);border-color:rgba(253,203,110,0.4);animation-delay:0.4s">🌐 JavaScript</div>
    <div class="lang-tag t0-fadein" style="background:rgba(253,121,168,0.2);border-color:rgba(253,121,168,0.4);animation-delay:0.5s">💎 Ruby</div>
    <div class="lang-tag t0-fadein" style="background:rgba(0,206,201,0.2);border-color:rgba(0,206,201,0.4);animation-delay:0.6s">🐘 PHP</div>
    <div class="lang-tag t0-fadein" style="background:rgba(225,112,85,0.2);border-color:rgba(225,112,85,0.4);animation-delay:0.7s">🦎 Lua</div>
  </div>
  <div class="theory-callout">💡 虽然解释型语言运行较慢，但开发效率高、学习门槛低，非常适合初学者！</div>
</div>
<style>
.pros-cons-grid{display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;margin:0.5rem 0}
.pros-card,.cons-card{background:#0d0d1a;border-radius:10px;padding:0.8rem;border:1px solid rgba(0,184,148,0.2);transition:transform 0.3s}
.pros-card:hover,.cons-card:hover{transform:translateY(-2px)}
.cons-card{border-color:rgba(225,112,85,0.2)}
.pros-title{font-size:0.92rem;font-weight:800;color:#00b894;margin-bottom:0.6rem}
.cons-title{font-size:0.92rem;font-weight:800;color:#e17055;margin-bottom:0.6rem}
.pros-item{display:flex;gap:0.5rem;margin-bottom:0.5rem;align-items:flex-start}
.pros-icon{font-size:1.1rem;flex-shrink:0;margin-top:0.1rem}
.pros-item strong{font-size:0.9rem;color:#e8ecf2;display:block}
.pros-item p{font-size:0.82rem;color:#c8d0e0;margin:0.1rem 0 0}
.lang-examples{display:flex;gap:0.4rem;flex-wrap:wrap;margin-top:0.8rem}
.lang-tag{padding:0.25rem 0.7rem;border-radius:20px;border:1px solid;font-size:0.88rem;font-weight:700;color:#e8ecf2;transition:transform 0.2s}
.lang-tag:hover{transform:scale(1.08)}
/* 速度对比 */
.t0-speed-compare{background:#0d0d1a;border-radius:10px;padding:0.8rem;margin-top:0.8rem;border:1px solid rgba(255,255,255,0.06)}
.t0-sp-title{font-size:0.88rem;font-weight:700;color:#e8ecf2;margin-bottom:0.6rem}
.t0-sp-row{display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem}
.t0-sp-label{font-size:0.8rem;color:#c8d0e0;min-width:80px;font-weight:600}
.t0-sp-bar{flex:1;height:12px;background:rgba(255,255,255,0.04);border-radius:6px;overflow:hidden}
.t0-sp-fill{height:100%;border-radius:6px;animation:t0barGrow 1.2s ease forwards;transform-origin:left;width:0}
@keyframes t0barGrow{to{width:var(--w,100%)}}
.t0-sp-val{font-size:0.92rem;color:#c8d0e0;min-width:45px;text-align:right}
.t0-sp-fill{width:0 !important;animation:t0barIn 1s ease forwards}
@keyframes t0barIn{to{width:100%}}
</style>`
        },
        {
          title: "Python解释器的内部流程",
          content: `
<p>Python 解释器内部其实分了好几步，并不是直接"读一行执行一行"那么简单：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔬 Python解释器内部流程 — 点击查看动画</div>
  <div class="pipeline-steps" id="pipeSteps">
    <div class="pipe-step t0-pipe-anim" style="--c:#6c5ce7;--idx:0"><div class="pipe-num">1</div><div class="pipe-icon">📖</div><div class="pipe-name">词法分析</div><div class="pipe-desc">把代码切成一个个"词"（Token）</div><div class="pipe-detail">print → [关键字] ( → [符号] "Hello" → [字符串] )</div></div>
    <div class="pipe-arrow t0-pipe-anim" style="--idx:1"><div class="pipe-arrow-icon">⬇️</div></div>
    <div class="pipe-step t0-pipe-anim" style="--c:#00cec9;--idx:2"><div class="pipe-num">2</div><div class="pipe-icon">🌳</div><div class="pipe-name">语法分析</div><div class="pipe-desc">把词组成语法树（AST）</div><div class="pipe-detail">检查语法结构是否合法</div></div>
    <div class="pipe-arrow t0-pipe-anim" style="--idx:3"><div class="pipe-arrow-icon">⬇️</div></div>
    <div class="pipe-step t0-pipe-anim" style="--c:#fd79a8;--idx:4"><div class="pipe-num">3</div><div class="pipe-icon">⚙️</div><div class="pipe-name">编译字节码</div><div class="pipe-desc">把AST编译成字节码（.pyc文件）</div><div class="pipe-detail">LOAD_GLOBAL print → LOAD_CONST 'Hello' → CALL_FUNCTION</div></div>
    <div class="pipe-arrow t0-pipe-anim" style="--idx:5"><div class="pipe-arrow-icon">⬇️</div></div>
    <div class="pipe-step t0-pipe-anim" style="--c:#fdcb6e;--idx:6"><div class="pipe-num">4</div><div class="pipe-icon">🖥️</div><div class="pipe-name">虚拟机执行</div><div class="pipe-desc">Python虚拟机（PVM）逐条执行字节码</div><div class="pipe-detail">输出结果到屏幕 → Hello</div></div>
  </div>
  <div class="theory-btn-row">
    <div class="theory-callout" style="margin:0;flex:1">🎯 后面的课程会详细讲解 <strong>词法分析</strong>、<strong>语法分析</strong> 和 <strong>AST</strong>！先建立整体印象。</div>
    <button class="theory-btn" onclick="(function(){var steps=document.querySelectorAll('.t0-pipe-anim');steps.forEach(function(s){s.classList.remove('t0-pipe-visible');});var d=0;steps.forEach(function(s){setTimeout(function(){s.classList.add('t0-pipe-visible');},d);d+=350;});})()">▶ 播放流水线动画</button>
  </div>
</div>
<style>
.pipeline-steps{display:flex;flex-direction:column;align-items:center;gap:0;margin:0.8rem 0}
.pipe-step{background:#0d0d1a;border-radius:12px;padding:0.65rem 1rem;width:100%;max-width:380px;border-left:4px solid var(--c);display:flex;align-items:center;gap:0.7rem;transition:all 0.5s cubic-bezier(.4,0,.2,1);flex-wrap:wrap}
.pipe-step:hover{transform:translateX(4px);box-shadow:0 4px 15px rgba(0,0,0,0.3)}
.t0-pipe-anim{opacity:0;transform:translateX(-30px)}
.t0-pipe-anim.t0-pipe-visible{opacity:1;transform:translateX(0)}
.pipe-num{width:26px;height:26px;border-radius:50%;background:var(--c);color:#fff;font-size:0.85rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 2px 8px rgba(0,0,0,0.3)}
.pipe-icon{font-size:1.2rem;flex-shrink:0}
.pipe-name{font-size:0.8rem;font-weight:700;color:#e8ecf2;flex-shrink:0;min-width:70px}
.pipe-desc{font-size:0.82rem;color:#c8d0e0}
.pipe-detail{width:100%;font-family:monospace;font-size:0.92rem;color:var(--c);background:rgba(255,255,255,0.03);padding:0.25rem 0.5rem;border-radius:4px;margin-top:0.3rem;margin-left:calc(26px + 1.2rem + 1.4rem)}
.pipe-arrow{text-align:center;margin:0.15rem 0;transition:all 0.5s cubic-bezier(.4,0,.2,1)}
.pipe-arrow-icon{font-size:0.9rem;animation:pipeArrowBob 1s ease-in-out infinite}
@keyframes pipeArrowBob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 解释器是逐行执行代码的。请写一段代码：先定义变量 name='Python解释器'，再定义 year=1991，最后用 print 输出包含这两个变量的句子。",
        hint: 'name = "Python解释器"\nyear = 1991\nprint("名字: " + name + "，诞生年份: " + str(year))',
        template: '# 定义变量并输出\nname = "Python解释器"\n',
        check: function(output) { return output.indexOf("Python解释器") !== -1 && output.indexOf("1991") !== -1; }
      }
    },
    // ============================================================
    // 课程 0-2：编译器 —— 先翻译再执行的工厂
    // ============================================================
    {
      id: "0-2",
      title: "编译器 —— 先翻译再执行的工厂",
      xp: 20,
      code: '# 编译型语言（如C）的思路：\n# 先把所有代码翻译成机器码，再一次性执行\n# Python虽然是解释型，但内部也有编译步骤！\n\n# 让我们模拟编译器的"类型检查"思想\ndef check_types(a, b):\n    if type(a) != type(b):\n        print("类型不匹配！", type(a), "vs", type(b))\n        return False\n    print("类型检查通过！都是", type(a))\n    return True\n\ncheck_types(10, 20)\ncheck_types("hello", "world")\ncheck_types(10, "hello")',
      steps: [
        {
          title: "编译器 vs 解释器",
          content: `
<p>除了解释器，还有另一种翻译方式——<strong>编译器（Compiler）</strong>。</p>
<p>编译器的思路完全不同：<strong>先把所有代码翻译好，再一次性执行</strong>。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">⚔️ 解释器 vs 编译器 — 同时执行对比</div>
  <div class="compare-grid">
    <div class="compare-card compare-interp">
      <div class="compare-title">🎙️ 解释器</div>
      <div class="compare-flow" id="cmpInterpFlow">
        <div class="cf-item cf-step" id="ci1">📝 读第1行</div>
        <div class="cf-arrow">↓</div>
        <div class="cf-item cf-exec cf-step" id="ci2">⚡ 执行第1行</div>
        <div class="cf-arrow">↓</div>
        <div class="cf-item cf-step" id="ci3">📝 读第2行</div>
        <div class="cf-arrow">↓</div>
        <div class="cf-item cf-exec cf-step" id="ci4">⚡ 执行第2行</div>
        <div class="cf-arrow">↓</div>
        <div class="cf-item cf-step" id="ci5">📝 读第3行</div>
        <div class="cf-arrow">↓</div>
        <div class="cf-item cf-exec cf-step" id="ci6">⚡ 执行第3行</div>
      </div>
      <div class="compare-tag">边读边执行</div>
      <div class="cf-timer" id="cfTimerI">⏱️ --</div>
    </div>
    <div class="compare-card compare-compiler">
      <div class="compare-title">🏭 编译器</div>
      <div class="compare-flow" id="cmpCompFlow">
        <div class="cf-item cf-step" id="cc1">📝 读全部代码</div>
        <div class="cf-arrow">↓</div>
        <div class="cf-item cf-compile cf-step" id="cc2">🔨 全部翻译</div>
        <div class="cf-arrow">↓</div>
        <div class="cf-item cf-binary cf-step" id="cc3">💾 生成可执行文件</div>
        <div class="cf-arrow">↓</div>
        <div class="cf-item cf-exec cf-step" id="cc4">🚀 一次性全部执行</div>
      </div>
      <div class="compare-tag">先翻译后执行</div>
      <div class="cf-timer" id="cfTimerC">⏱️ --</div>
    </div>
  </div>
  <button class="theory-btn" onclick="(function(){var iSteps=['ci1','ci2','ci3','ci4','ci5','ci6'];var cSteps=['cc1','cc2','cc3','cc4'];document.querySelectorAll('.cf-step').forEach(function(e){e.classList.remove('cf-active','cf-done');});document.getElementById('cfTimerI').textContent='⏱️ 运行中...';document.getElementById('cfTimerC').textContent='⏱️ 运行中...';var d=0;iSteps.forEach(function(id,i){setTimeout(function(){if(i>0)document.getElementById(iSteps[i-1]).classList.replace('cf-active','cf-done');document.getElementById(id).classList.add('cf-active');if(i===iSteps.length-1)setTimeout(function(){document.getElementById(id).classList.replace('cf-active','cf-done');document.getElementById('cfTimerI').textContent='⏱️ 3.6秒';},500);},d);d+=600;});d=0;cSteps.forEach(function(id,i){var delays=[0,400,1500,2600];setTimeout(function(){if(i>0)document.getElementById(cSteps[i-1]).classList.replace('cf-active','cf-done');document.getElementById(id).classList.add('cf-active');if(i===cSteps.length-1)setTimeout(function(){document.getElementById(id).classList.replace('cf-active','cf-done');document.getElementById('cfTimerC').textContent='⏱️ 2.8秒（编译1.5s+运行0.1s）';},400);},delays[i]);});})()">▶ 同时开始！看谁先完成</button>
</div>
<div class="theory-anim-box" style="margin-top:0.6rem">
  <div class="theory-anim-title">🤔 一句话总结</div>
  <div class="t0-summary-cards">
    <div class="t0-sum-card" style="border-color:rgba(0,206,201,0.4)">
      <div class="t0-sum-emoji">🎙️</div>
      <div class="t0-sum-text"><strong>解释器</strong> = 同声传译<br><em>听一句翻一句，立即输出</em></div>
    </div>
    <div class="t0-sum-card" style="border-color:rgba(253,121,168,0.4)">
      <div class="t0-sum-emoji">🏭</div>
      <div class="t0-sum-text"><strong>编译器</strong> = 书面翻译<br><em>先全部翻译好，再交出成品</em></div>
    </div>
  </div>
</div>
<style>
.compare-grid{display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;margin:0.8rem 0}
.compare-card{background:#0d0d1a;border-radius:12px;padding:0.8rem;border:1px solid rgba(108,92,231,0.2);position:relative}
.compare-interp{border-color:rgba(0,206,201,0.3)}
.compare-compiler{border-color:rgba(253,121,168,0.3)}
.compare-title{font-size:0.82rem;font-weight:800;color:#e8ecf2;margin-bottom:0.6rem;text-align:center}
.compare-flow{display:flex;flex-direction:column;align-items:center;gap:0.1rem}
.cf-item{font-size:0.82rem;padding:0.25rem 0.5rem;border-radius:6px;background:rgba(108,92,231,0.1);color:#e8ecf2;text-align:center;width:100%;transition:all 0.4s cubic-bezier(.4,0,.2,1)}
.cf-exec{background:rgba(0,184,148,0.15);color:#00b894}
.cf-compile{background:rgba(253,121,168,0.15);color:#fd79a8}
.cf-binary{background:rgba(253,203,110,0.15);color:#fdcb6e}
.cf-arrow{font-size:0.8rem;color:#555}
.cf-active{transform:scale(1.05);box-shadow:0 0 12px rgba(108,92,231,0.4);border:1px solid rgba(108,92,231,0.5);font-weight:700}
.cf-done{opacity:0.5;transform:scale(0.98)}
.compare-tag{margin-top:0.6rem;text-align:center;font-size:0.82rem;font-weight:700;color:#c8d0e0;background:rgba(255,255,255,0.05);padding:0.2rem 0.5rem;border-radius:10px}
.cf-timer{text-align:center;font-size:0.85rem;color:#fdcb6e;font-weight:700;margin-top:0.4rem;min-height:1.2em}
/* 总结卡片 */
.t0-summary-cards{display:flex;gap:0.6rem;flex-wrap:wrap}
.t0-sum-card{flex:1;min-width:130px;background:#0d0d1a;border-radius:12px;padding:0.8rem;border:1px solid;display:flex;align-items:center;gap:0.6rem;transition:transform 0.3s}
.t0-sum-card:hover{transform:translateY(-2px)}
.t0-sum-emoji{font-size:1.8rem}
.t0-sum-text{font-size:0.88rem;color:#e8ecf2;line-height:1.5}
.t0-sum-text em{color:#c8d0e0;font-size:0.8rem}
</style>`
        },
        {
          title: "编译器的工作步骤",
          content: `
<p>编译器把源代码变成可执行文件，要经过一条精密的<strong>流水线</strong>：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🏭 编译器流水线 — 点击每个阶段查看详情</div>
  <div class="compiler-pipeline">
    <div class="cp-stage cp-clickable" style="--cc:#6c5ce7" onclick="this.classList.toggle('cp-expanded')">
      <div class="cp-stage-icon">📖</div>
      <div class="cp-stage-info">
        <div class="cp-stage-name">① 词法分析 <span class="cp-expand-hint">👆点击展开</span></div>
        <div class="cp-stage-desc">源代码 → Token流</div>
      </div>
      <div class="cp-detail-panel">
        <div class="cp-detail-title">词法分析器（Lexer）做了什么？</div>
        <div class="cp-detail-example">
          <div class="cp-de-label">输入：</div><code class="cp-de-code">x = 10 + 5</code>
          <div class="cp-de-label">输出：</div>
          <div class="cp-token-row"><span class="token-chip token-id">x</span><span class="token-chip token-op">=</span><span class="token-chip token-num">10</span><span class="token-chip token-op">+</span><span class="token-chip token-num">5</span></div>
        </div>
      </div>
    </div>
    <div class="cp-arrow">⬇️</div>
    <div class="cp-stage cp-clickable" style="--cc:#00cec9" onclick="this.classList.toggle('cp-expanded')">
      <div class="cp-stage-icon">🌳</div>
      <div class="cp-stage-info">
        <div class="cp-stage-name">② 语法分析 <span class="cp-expand-hint">👆点击展开</span></div>
        <div class="cp-stage-desc">Token流 → 语法树（AST）</div>
      </div>
      <div class="cp-detail-panel">
        <div class="cp-detail-title">语法分析器（Parser）做了什么？</div>
        <div class="cp-detail-example">检查Token序列是否符合语法规则，并构建一棵<strong>抽象语法树（AST）</strong>，表达代码的层次结构。<br>例如：<code>x = 10 + 5</code> 变成赋值节点 → 加法节点 → 数值叶子节点</div>
      </div>
    </div>
    <div class="cp-arrow">⬇️</div>
    <div class="cp-stage cp-clickable" style="--cc:#fd79a8" onclick="this.classList.toggle('cp-expanded')">
      <div class="cp-stage-icon">🔍</div>
      <div class="cp-stage-info">
        <div class="cp-stage-name">③ 语义分析 <span class="cp-expand-hint">👆点击展开</span></div>
        <div class="cp-stage-desc">检查类型、变量是否合法</div>
      </div>
      <div class="cp-detail-panel">
        <div class="cp-detail-title">语义分析器做了什么？</div>
        <div class="cp-detail-example">
          <div style="color:#00b894">✅ int + int → 合法，结果是 int</div>
          <div style="color:#00b894">✅ str + str → 合法，字符串拼接</div>
          <div style="color:#e17055">❌ int + str → 类型不匹配，报错！</div>
          <div style="color:#e17055">❌ 使用未定义的变量 → 报错！</div>
        </div>
      </div>
    </div>
    <div class="cp-arrow">⬇️</div>
    <div class="cp-stage cp-clickable" style="--cc:#fdcb6e" onclick="this.classList.toggle('cp-expanded')">
      <div class="cp-stage-icon">⚙️</div>
      <div class="cp-stage-info">
        <div class="cp-stage-name">④ 代码生成 <span class="cp-expand-hint">👆点击展开</span></div>
        <div class="cp-stage-desc">AST → 机器码/字节码</div>
      </div>
      <div class="cp-detail-panel">
        <div class="cp-detail-title">代码生成器做了什么？</div>
        <div class="cp-detail-example">把优化后的AST翻译成目标平台的机器码：<br>
          <code style="display:block;margin-top:0.3rem;color:#fdcb6e;font-size:0.92rem">MOV EAX, 10    ; 把10放入寄存器<br>ADD EAX, 5     ; 加上5<br>MOV [x], EAX   ; 存入变量x</code>
        </div>
      </div>
    </div>
  </div>
</div>
<style>
.compiler-pipeline{display:flex;flex-direction:column;align-items:stretch;gap:0;margin:0.8rem 0}
.cp-stage{background:#0d0d1a;border-radius:10px;padding:0.65rem 0.9rem;border-left:4px solid var(--cc);display:flex;align-items:center;gap:0.7rem;flex-wrap:wrap;transition:all 0.3s}
.cp-clickable{cursor:pointer}
.cp-clickable:hover{background:rgba(13,13,26,0.95);transform:translateX(3px)}
.cp-stage-icon{font-size:1.3rem;flex-shrink:0}
.cp-stage-name{font-size:0.92rem;font-weight:800;color:#e8ecf2}
.cp-stage-desc{font-size:0.82rem;color:#c8d0e0;margin:0.1rem 0}
.cp-expand-hint{font-size:0.88rem;color:#555;font-weight:400;margin-left:0.3rem}
.cp-detail-panel{width:100%;max-height:0;overflow:hidden;transition:max-height 0.4s ease,padding 0.3s,opacity 0.3s;opacity:0;padding:0 0.5rem}
.cp-expanded .cp-detail-panel{max-height:200px;opacity:1;padding:0.6rem;background:rgba(255,255,255,0.02);border-radius:8px;margin-top:0.4rem;border:1px solid rgba(255,255,255,0.06)}
.cp-expanded .cp-expand-hint{display:none}
.cp-detail-title{font-size:0.85rem;font-weight:700;color:var(--cc);margin-bottom:0.3rem}
.cp-detail-example{font-size:0.8rem;color:#aaa;line-height:1.6}
.cp-de-label{font-size:0.92rem;color:#c8d0e0;margin-top:0.2rem}
.cp-de-code{font-size:0.88rem;color:#FF9800;font-weight:700;display:block;margin:0.1rem 0}
.cp-token-row{display:flex;gap:0.2rem;flex-wrap:wrap;margin-top:0.2rem}
.cp-arrow{text-align:center;font-size:0.85rem;color:#555;margin:0.15rem 0}
/* token chips */
.token-chip{padding:0.15rem 0.4rem;border-radius:6px;font-family:monospace;font-size:0.82rem;font-weight:700}
.token-id{background:rgba(108,92,231,0.2);color:#FF9800;font-weight:700;border:1px solid rgba(108,92,231,0.3)}
.token-op{background:rgba(253,121,168,0.2);color:#fd79a8;border:1px solid rgba(253,121,168,0.3)}
.token-num{background:rgba(253,203,110,0.2);color:#fdcb6e;border:1px solid rgba(253,203,110,0.3)}
.token-kw{background:rgba(0,206,201,0.2);color:#00cec9;border:1px solid rgba(0,206,201,0.3)}
.token-str{background:rgba(0,184,148,0.2);color:#00b894;border:1px solid rgba(0,184,148,0.3)}
</style>`
        },
        {
          title: "编译型语言的优缺点",
          content: `
<p>编译型语言（如 C、C++、Go、Rust）有自己的特点：</p>
<div class="theory-anim-box">
  <div class="pros-cons-grid">
    <div class="pros-card">
      <div class="pros-title">✅ 优点</div>
      <div class="pros-item"><span class="pros-icon">🚀</span><div><strong>运行极快</strong><p>已经翻译好了，直接执行机器码</p></div></div>
      <div class="pros-item"><span class="pros-icon">🔒</span><div><strong>代码保护</strong><p>发布的是二进制文件，源码不暴露</p></div></div>
      <div class="pros-item"><span class="pros-icon">🛡️</span><div><strong>提前发现错误</strong><p>编译时就能发现类型错误等问题</p></div></div>
    </div>
    <div class="cons-card">
      <div class="cons-title">❌ 缺点</div>
      <div class="pros-item"><span class="pros-icon">⏳</span><div><strong>编译耗时</strong><p>大项目编译可能需要几分钟甚至更长</p></div></div>
      <div class="pros-item"><span class="pros-icon">🖥️</span><div><strong>平台相关</strong><p>Windows编译的程序不能直接在Mac上跑</p></div></div>
    </div>
  </div>
  <div class="lang-examples">
    <div class="lang-tag" style="background:rgba(0,184,148,0.2);border-color:rgba(0,184,148,0.4)">⚡ C/C++</div>
    <div class="lang-tag" style="background:rgba(0,206,201,0.2);border-color:rgba(0,206,201,0.4)">🦀 Rust</div>
    <div class="lang-tag" style="background:rgba(108,92,231,0.2);border-color:rgba(108,92,231,0.4)">🐹 Go</div>
    <div class="lang-tag" style="background:rgba(253,121,168,0.2);border-color:rgba(253,121,168,0.4)">☕ Java*</div>
  </div>
  <div class="theory-callout">💡 Java比较特殊：先编译成字节码，再用JVM解释执行——兼具两者优点！Python也类似。</div>
</div>`
        },
        {
          title: "Python：解释器 + 编译器的混合体",
          content: `
<p>Python 其实是<strong>两者的结合</strong>！它内部有一个编译步骤：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🐍 Python的混合执行模式 — 点击播放</div>
  <div class="hybrid-flow" id="hybridFlow">
    <div class="hf-box hf-source hf-anim" id="hf1">
      <div class="hf-icon">📝</div>
      <div class="hf-name">源代码</div>
      <div class="hf-sub">hello.py</div>
    </div>
    <div class="hf-arrow-wrap hf-anim" id="hfa1">
      <div class="hf-arrow-label">编译器</div>
      <div class="hf-arrow">→</div>
    </div>
    <div class="hf-box hf-bytecode hf-anim" id="hf2">
      <div class="hf-icon">💾</div>
      <div class="hf-name">字节码</div>
      <div class="hf-sub">hello.pyc</div>
    </div>
    <div class="hf-arrow-wrap hf-anim" id="hfa2">
      <div class="hf-arrow-label">PVM解释器</div>
      <div class="hf-arrow">→</div>
    </div>
    <div class="hf-box hf-result hf-anim" id="hf3">
      <div class="hf-icon">🖥️</div>
      <div class="hf-name">执行结果</div>
      <div class="hf-sub">Hello</div>
    </div>
  </div>
  <button class="theory-btn" onclick="(function(){var ids=['hf1','hfa1','hf2','hfa2','hf3'];ids.forEach(function(id){document.getElementById(id).classList.remove('hf-show');});var d=0;ids.forEach(function(id){setTimeout(function(){document.getElementById(id).classList.add('hf-show');},d);d+=500;});})()">▶ 播放执行流程</button>
  <div class="bytecode-example">
    <div class="be-title">📦 字节码长什么样？（print("Hello")的字节码）</div>
    <div class="be-code-lines">
      <div class="be-line"><span class="be-ln">1</span><span class="be-inst">LOAD_GLOBAL</span><span class="be-arg">print</span><span class="be-comment">// 找到print函数</span></div>
      <div class="be-line"><span class="be-ln">2</span><span class="be-inst">LOAD_CONST</span><span class="be-arg">'Hello'</span><span class="be-comment">// 准备参数</span></div>
      <div class="be-line"><span class="be-ln">3</span><span class="be-inst">CALL_FUNCTION</span><span class="be-arg">1</span><span class="be-comment">// 调用！传1个参数</span></div>
      <div class="be-line"><span class="be-ln">4</span><span class="be-inst">POP_TOP</span><span class="be-arg"></span><span class="be-comment">// 清理栈顶</span></div>
    </div>
  </div>
  <div class="theory-callout">🎯 字节码是介于源代码和机器码之间的中间语言——比机器码易读，比源代码更接近CPU！</div>
</div>
<div class="theory-anim-box" style="margin-top:0.6rem">
  <div class="theory-anim-title">🆚 三种模式对比总结</div>
  <div class="t0-mode-table">
    <div class="t0-mt-header"><span></span><span>纯解释型</span><span>纯编译型</span><span>Python混合型</span></div>
    <div class="t0-mt-row"><span class="t0-mt-label">代表语言</span><span>早期BASIC</span><span>C/C++/Rust</span><span>Python/Java</span></div>
    <div class="t0-mt-row"><span class="t0-mt-label">启动速度</span><span>⚡ 快</span><span>🐢 慢（需编译）</span><span>⚡ 较快</span></div>
    <div class="t0-mt-row"><span class="t0-mt-label">运行速度</span><span>🐢 慢</span><span>🚀 极快</span><span>🏃 中等</span></div>
    <div class="t0-mt-row"><span class="t0-mt-label">跨平台</span><span>✅ 是</span><span>❌ 需重编译</span><span>✅ 是</span></div>
  </div>
</div>
<style>
.hybrid-flow{display:flex;align-items:center;justify-content:center;gap:0.3rem;flex-wrap:wrap;margin:0.8rem 0}
.hf-box{background:#0d0d1a;border-radius:10px;padding:0.6rem 0.8rem;text-align:center;border:1px solid rgba(108,92,231,0.2);min-width:80px;transition:all 0.4s}
.hf-anim{opacity:0;transform:translateY(10px)}
.hf-anim.hf-show{opacity:1;transform:translateY(0)}
.hf-source{border-color:rgba(108,92,231,0.4)}.hf-bytecode{border-color:rgba(253,203,110,0.4)}.hf-result{border-color:rgba(0,184,148,0.4)}
.hf-icon{font-size:1.3rem}.hf-name{font-size:0.88rem;font-weight:700;color:#e8ecf2;margin-top:0.2rem}.hf-sub{font-size:0.92rem;color:#c8d0e0;font-family:monospace}
.hf-arrow-wrap{display:flex;flex-direction:column;align-items:center;gap:0.1rem}
.hf-arrow-label{font-size:0.92rem;color:#FF9800;font-weight:700;font-weight:700;white-space:nowrap}
.hf-arrow{font-size:1.2rem;color:#FF9800;font-weight:700;animation:arrowPulse 1.2s ease-in-out infinite}
.bytecode-example{background:#0d0d1a;border-radius:10px;padding:0.8rem;margin-top:0.8rem;border:1px solid rgba(253,203,110,0.2)}
.be-title{font-size:0.88rem;color:#fdcb6e;font-weight:700;margin-bottom:0.5rem}
.be-code-lines{display:flex;flex-direction:column;gap:0.2rem}
.be-line{display:flex;align-items:center;gap:0.5rem;padding:0.2rem 0.4rem;border-radius:4px;transition:background 0.2s}
.be-line:hover{background:rgba(253,203,110,0.06)}
.be-ln{font-family:monospace;font-size:0.92rem;color:#555;min-width:16px}
.be-inst{font-family:monospace;font-size:0.88rem;color:#FF9800;font-weight:700;font-weight:700;min-width:100px}
.be-arg{font-family:monospace;font-size:0.88rem;color:#fdcb6e;min-width:50px}
.be-comment{font-size:0.92rem;color:#555}
/* 对比表格 */
.t0-mode-table{display:flex;flex-direction:column;gap:0.2rem}
.t0-mt-header{display:grid;grid-template-columns:80px 1fr 1fr 1fr;gap:0.4rem;font-size:0.8rem;font-weight:800;color:#FF9800;font-weight:700;padding:0.3rem 0.5rem;background:rgba(108,92,231,0.08);border-radius:6px}
.t0-mt-row{display:grid;grid-template-columns:80px 1fr 1fr 1fr;gap:0.4rem;font-size:0.8rem;color:#e8ecf2;padding:0.25rem 0.5rem;border-radius:4px;transition:background 0.2s}
.t0-mt-row:hover{background:rgba(255,255,255,0.03)}
.t0-mt-label{color:#c8d0e0;font-weight:700}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 编译器会做类型检查。请写一个函数 safe_add(a, b)，如果两个参数类型相同就返回它们的和，否则打印'类型不匹配'并返回None。测试 safe_add(3,5)、safe_add('hi','!')、safe_add(1,'x')。",
        hint: 'def safe_add(a, b):\n    if type(a) == type(b):\n        return a + b\n    else:\n        print("类型不匹配:", type(a), "vs", type(b))\n        return None\n\nprint(safe_add(3, 5))\nprint(safe_add("hi", "!"))\nprint(safe_add(1, "x"))',
        template: '# 类型安全的加法函数\ndef safe_add(a, b):\n    pass\n',
        check: function(output) { return output.indexOf("8") !== -1 && output.indexOf("hi!") !== -1 && output.indexOf("不匹配") !== -1; }
      }
    },
    // ============================================================
    // 课程 0-3：编译原理 —— 词法分析与语法分析（进阶）
    // ============================================================
    {
      id: "0-3",
      title: "编译原理 —— 词法分析与语法分析",
      advanced: true,
      xp: 25,
      code: '# 词法分析：把代码切成Token\n# 语法分析：检查Token是否符合语法规则\n\n# 下面这行代码会被词法分析器切成：\n# [result][=][10][+][5][*][2]\nresult = 10 + 5 * 2\nprint("result =", result)\n\n# 语法分析会检查运算符优先级\n# 先算 5*2=10，再算 10+10=20\nprint("先乘后加：", 10 + 5 * 2)\nprint("加括号改变优先级：", (10 + 5) * 2)',
      steps: [
        {
          title: '词法分析：把代码切成"词"',
          content: `
<p><strong>词法分析（Lexical Analysis）</strong>是编译的第一步。</p>
<p>就像读文章时，先把句子分成一个个单词一样，词法分析器把代码切成一个个<strong>Token（词法单元）</strong>。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">✂️ 交互式词法分析器 — 试试输入任意代码！</div>
  <div class="lexer-interactive">
    <div class="lexer-input-row">
      <span class="lexer-prompt">>>> </span>
      <input type="text" class="lexer-input" id="lexerInput" value="result = 10 + 5 * 2" placeholder="输入Python代码..." oninput="lexerTokenize(this)">
    </div>
    <div class="lexer-highlight-row" id="lexerHighlight"></div>
    <div class="lexer-output-label">✂️ 切分结果（Token）:</div>
    <div class="lexer-output" id="lexerOutput">
      <div class="token-chip token-id t0-tok-pop" style="animation-delay:0s">result <span class="token-type">标识符</span></div>
      <div class="token-chip token-op t0-tok-pop" style="animation-delay:0.05s">= <span class="token-type">运算符</span></div>
      <div class="token-chip token-num t0-tok-pop" style="animation-delay:0.1s">10 <span class="token-type">整数</span></div>
      <div class="token-chip token-op t0-tok-pop" style="animation-delay:0.15s">+ <span class="token-type">运算符</span></div>
      <div class="token-chip token-num t0-tok-pop" style="animation-delay:0.2s">5 <span class="token-type">整数</span></div>
      <div class="token-chip token-op t0-tok-pop" style="animation-delay:0.25s">* <span class="token-type">运算符</span></div>
      <div class="token-chip token-num t0-tok-pop" style="animation-delay:0.3s">2 <span class="token-type">整数</span></div>
    </div>
  </div>
  <div class="token-types-legend">
    <div class="ttl-item"><span class="token-chip token-id" style="font-size:0.92rem;padding:0.1rem 0.3rem">变量名</span> 标识符</div>
    <div class="ttl-item"><span class="token-chip token-op" style="font-size:0.92rem;padding:0.1rem 0.3rem">运算符</span> 操作符</div>
    <div class="ttl-item"><span class="token-chip token-num" style="font-size:0.92rem;padding:0.1rem 0.3rem">数字</span> 字面量</div>
    <div class="ttl-item"><span class="token-chip token-kw" style="font-size:0.92rem;padding:0.1rem 0.3rem">if/for</span> 关键字</div>
    <div class="ttl-item"><span class="token-chip token-str" style="font-size:0.92rem;padding:0.1rem 0.3rem">"text"</span> 字符串</div>
  </div>
  <div class="theory-callout">💡 试试输入 <code>if x > 10:</code> 或 <code>for i in range(5):</code> 看看Token是什么样的！</div>
</div>
<style>
.lexer-interactive{background:#0d0d1a;border-radius:12px;padding:0.8rem;margin:0.8rem 0;border:1px solid rgba(108,92,231,0.2)}
.lexer-input-row{display:flex;align-items:center;gap:0.3rem;margin-bottom:0.6rem}
.lexer-prompt{font-family:monospace;color:#00b894;font-weight:700;font-size:0.85rem}
.lexer-input{flex:1;background:rgba(108,92,231,0.08);border:1px solid rgba(108,92,231,0.3);border-radius:8px;padding:0.4rem 0.6rem;color:#FF9800;font-weight:700;font-family:monospace;font-size:0.82rem;outline:none;transition:border-color 0.3s}
.lexer-input:focus{border-color:#FF9800;font-weight:700;box-shadow:0 0 12px rgba(108,92,231,0.2)}
.lexer-highlight-row{font-family:monospace;font-size:0.9rem;padding:0.2rem 0;margin-bottom:0.5rem;min-height:1.2em;letter-spacing:0.5px}
.lexer-output-label{font-size:0.82rem;color:#c8d0e0;font-weight:700;margin-bottom:0.4rem}
.lexer-output{display:flex;flex-wrap:wrap;gap:0.3rem;min-height:2rem}
.t0-tok-pop{animation:tokenPop 0.3s ease both}
@keyframes tokenPop{from{opacity:0;transform:scale(0.7)}to{opacity:1;transform:scale(1)}}
.token-types-legend{display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.6rem;align-items:center}
.ttl-item{display:flex;align-items:center;gap:0.3rem;font-size:0.82rem;color:#c8d0e0}
</style>`
        },
        {
          title: "更多Token示例 & 试试看",
          content: `
<p>不同代码会被切成不同类型的Token。<strong>你能预测下面的代码会产生哪些Token吗？</strong></p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔬 Token分析 — 点击代码查看切分结果</div>
  <div class="token-examples">
    <div class="te-row te-clickable" onclick="this.classList.toggle('te-revealed')">
      <div class="te-code"><span class="te-click-hint">👆 点击展开</span> if x > 10:</div>
      <div class="te-tokens">
        <span class="token-chip token-kw t0-tok-pop" style="animation-delay:0s">if</span>
        <span class="token-chip token-id t0-tok-pop" style="animation-delay:0.05s">x</span>
        <span class="token-chip token-op t0-tok-pop" style="animation-delay:0.1s">&gt;</span>
        <span class="token-chip token-num t0-tok-pop" style="animation-delay:0.15s">10</span>
        <span class="token-chip token-op t0-tok-pop" style="animation-delay:0.2s">:</span>
      </div>
    </div>
    <div class="te-row te-clickable" onclick="this.classList.toggle('te-revealed')">
      <div class="te-code"><span class="te-click-hint">👆 点击展开</span> name = "Python"</div>
      <div class="te-tokens">
        <span class="token-chip token-id">name</span>
        <span class="token-chip token-op">=</span>
        <span class="token-chip token-str">"Python"</span>
      </div>
    </div>
    <div class="te-row te-clickable" onclick="this.classList.toggle('te-revealed')">
      <div class="te-code"><span class="te-click-hint">👆 点击展开</span> for i in range(5):</div>
      <div class="te-tokens">
        <span class="token-chip token-kw">for</span>
        <span class="token-chip token-id">i</span>
        <span class="token-chip token-kw">in</span>
        <span class="token-chip token-id">range</span>
        <span class="token-chip token-op">(</span>
        <span class="token-chip token-num">5</span>
        <span class="token-chip token-op">)</span>
        <span class="token-chip token-op">:</span>
      </div>
    </div>
    <div class="te-row te-clickable" onclick="this.classList.toggle('te-revealed')">
      <div class="te-code"><span class="te-click-hint">👆 点击展开</span> print("Hi" + name)</div>
      <div class="te-tokens">
        <span class="token-chip token-id">print</span>
        <span class="token-chip token-op">(</span>
        <span class="token-chip token-str">"Hi"</span>
        <span class="token-chip token-op">+</span>
        <span class="token-chip token-id">name</span>
        <span class="token-chip token-op">)</span>
      </div>
    </div>
  </div>
  <div class="theory-callout">💡 词法分析器不关心代码的逻辑，只负责"切词"。语法分析才负责检查结构是否正确！</div>
</div>
<style>
.token-examples{display:flex;flex-direction:column;gap:0.4rem;margin:0.8rem 0}
.te-row{background:#0d0d1a;border-radius:10px;padding:0.7rem;border:1px solid rgba(108,92,231,0.15);transition:all 0.3s}
.te-clickable{cursor:pointer}
.te-clickable:hover{border-color:rgba(108,92,231,0.4)}
.te-code{font-family:monospace;font-size:0.92rem;color:#FF9800;font-weight:700;margin-bottom:0.4rem;position:relative}
.te-click-hint{font-size:0.9rem;color:#555;margin-right:0.3rem}
.te-clickable .te-tokens{max-height:0;overflow:hidden;opacity:0;transition:all 0.4s ease}
.te-clickable.te-revealed .te-tokens{max-height:100px;opacity:1;margin-top:0.3rem}
.te-clickable.te-revealed .te-click-hint{display:none}
.te-tokens{display:flex;flex-wrap:wrap;gap:0.3rem}
</style>`
        },
        {
          title: "语法分析：检查语法是否正确",
          content: `
<p><strong>语法分析（Syntax Analysis）</strong>是编译的第二步。</p>
<p>它检查Token序列是否符合语言的<strong>语法规则</strong>，就像检查句子的语法是否正确。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">✅ 语法检查 — 猜猜哪些是对的？点击查看答案</div>
  <div class="syntax-examples">
    <div class="se-row se-quiz" onclick="this.classList.toggle('se-show')">
      <div class="se-status se-hidden">✅</div>
      <div class="se-code">x = 10 + 5</div>
      <div class="se-msg se-hidden">✅ 正确：赋值语句</div>
    </div>
    <div class="se-row se-quiz" onclick="this.classList.toggle('se-show')">
      <div class="se-status se-hidden">✅</div>
      <div class="se-code">if x > 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(x)</div>
      <div class="se-msg se-hidden">✅ 正确：if条件语句</div>
    </div>
    <div class="se-row se-quiz" onclick="this.classList.toggle('se-show')">
      <div class="se-status se-hidden">❌</div>
      <div class="se-code">x = + 10 5</div>
      <div class="se-msg se-hidden">❌ 错误：运算符后不能直接跟两个数</div>
    </div>
    <div class="se-row se-quiz" onclick="this.classList.toggle('se-show')">
      <div class="se-status se-hidden">❌</div>
      <div class="se-code">if x > 0<br>&nbsp;&nbsp;&nbsp;&nbsp;print(x)</div>
      <div class="se-msg se-hidden">❌ 错误：if语句末尾缺少冒号 <code>:</code></div>
    </div>
    <div class="se-row se-quiz" onclick="this.classList.toggle('se-show')">
      <div class="se-status se-hidden">❌</div>
      <div class="se-code">print("hello"</div>
      <div class="se-msg se-hidden">❌ 错误：括号没有闭合，缺少 <code>)</code></div>
    </div>
    <div class="se-row se-quiz" onclick="this.classList.toggle('se-show')">
      <div class="se-status se-hidden">❌</div>
      <div class="se-code">def my func():</div>
      <div class="se-msg se-hidden">❌ 错误：函数名中间不能有空格</div>
    </div>
  </div>
  <div class="theory-callout">🎯 Python的 <strong>SyntaxError</strong> 就是语法分析器发现的错误！点击每行试试你猜对了没~</div>
</div>
<style>
.syntax-examples{display:flex;flex-direction:column;gap:0.3rem;margin:0.8rem 0}
.se-row{display:flex;align-items:flex-start;gap:0.6rem;background:#0d0d1a;border-radius:8px;padding:0.6rem;border-left:3px solid rgba(108,92,231,0.3);transition:all 0.3s}
.se-quiz{cursor:pointer}
.se-quiz:hover{background:rgba(13,13,26,0.95)}
.se-hidden{opacity:0;transition:opacity 0.4s}
.se-show .se-hidden{opacity:1}
.se-show{border-left-color:#FF9800;font-weight:700}
.se-ok{border-left-color:#00b894}
.se-err{border-left-color:#e17055}
.se-status{font-size:1rem;flex-shrink:0;margin-top:0.1rem}
.se-code{font-family:monospace;font-size:0.88rem;color:#FF9800;font-weight:700;flex:1;line-height:1.5}
.se-msg{font-size:0.82rem;color:#c8d0e0;flex:1.5}
</style>`
        },
        {
          title: "运算符优先级：语法规则的体现",
          content: `
<p>语法分析器还负责处理<strong>运算符优先级</strong>，确保 <em>2+3*4</em> 先算乘法：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🧮 运算符优先级逐步解析 — 点击播放</div>
  <div class="priority-demo">
    <div class="pd-expr" id="pdExpr">2 + 3 * 4 = ?</div>
    <div class="pd-steps" id="pdSteps">
      <div class="pd-step pd-s" id="pds1"><div class="pd-step-num">步骤1</div><div class="pd-step-desc">找到最高优先级运算符 <span class="pd-highlight">*</span></div><div class="pd-step-expr">2 + <span class="pd-highlight">3 * 4</span></div></div>
      <div class="pd-step pd-s" id="pds2"><div class="pd-step-num">步骤2</div><div class="pd-step-desc">先计算 3 × 4 = <span class="pd-result">12</span></div><div class="pd-step-expr">2 + <span class="pd-result">12</span></div></div>
      <div class="pd-step pd-s" id="pds3"><div class="pd-step-num">步骤3</div><div class="pd-step-desc">再计算 2 + 12 = <span class="pd-result">14</span></div><div class="pd-step-expr"><span class="pd-result" style="font-size:1rem">✅ 14</span></div></div>
    </div>
    <button class="theory-btn" onclick="(function(){var ids=['pds1','pds2','pds3'];var expr=document.getElementById('pdExpr');ids.forEach(function(id){document.getElementById(id).classList.remove('pd-visible');});if(expr)expr.textContent='2 + 3 * 4 = ?';var d=0;ids.forEach(function(id,i){setTimeout(function(){document.getElementById(id).classList.add('pd-visible');if(i===ids.length-1&&expr)expr.innerHTML='2 + 3 * 4 = <span style=color:#00b894;font-weight:900>14</span>';},d);d+=800;});})()">▶ 播放计算过程</button>
  </div>
  <div class="priority-table">
    <div class="pt-title">📊 Python运算符优先级（从高到低）</div>
    <div class="pt-row pt-level-high"><span class="pt-rank">1</span><span class="pt-op">**</span><span class="pt-name">乘方（最高优先级）</span><span class="pt-ex">2**3 = 8</span></div>
    <div class="pt-row pt-level-mid"><span class="pt-rank">2</span><span class="pt-op">* / // %</span><span class="pt-name">乘除、取整、取余</span><span class="pt-ex">10//3 = 3</span></div>
    <div class="pt-row pt-level-mid"><span class="pt-rank">3</span><span class="pt-op">+ -</span><span class="pt-name">加减</span><span class="pt-ex">5+3 = 8</span></div>
    <div class="pt-row pt-level-low"><span class="pt-rank">4</span><span class="pt-op">&gt; &lt; == !=</span><span class="pt-name">比较运算</span><span class="pt-ex">5>3 → True</span></div>
    <div class="pt-row pt-level-low"><span class="pt-rank">5</span><span class="pt-op">not and or</span><span class="pt-name">逻辑运算（最低）</span><span class="pt-ex">True and False</span></div>
  </div>
  <div class="theory-callout">💡 <strong>括号 () 可以改变优先级！</strong>  (2+3)*4 = 20，而不是 2+3*4 = 14</div>
</div>
<style>
.priority-demo{background:#0d0d1a;border-radius:10px;padding:0.8rem;margin:0.8rem 0;border:1px solid rgba(108,92,231,0.2)}
.pd-expr{font-family:monospace;font-size:1.1rem;color:#FF9800;font-weight:700;text-align:center;margin-bottom:0.8rem;font-weight:700;transition:all 0.4s}
.pd-steps{display:flex;flex-direction:column;gap:0.3rem}
.pd-step{display:flex;align-items:center;gap:0.6rem;padding:0.4rem 0.6rem;background:rgba(108,92,231,0.06);border-radius:6px;transition:all 0.5s}
.pd-s{opacity:0;transform:translateX(-15px)}
.pd-s.pd-visible{opacity:1;transform:translateX(0)}
.pd-step-num{font-size:0.8rem;font-weight:800;color:#c8d0e0;min-width:40px}
.pd-step-desc{font-size:0.85rem;color:#e8ecf2;flex:1}
.pd-step-expr{font-family:monospace;font-size:0.92rem;color:#FF9800;font-weight:700;min-width:80px;text-align:right}
.pd-highlight{color:#fdcb6e;font-weight:800;background:rgba(253,203,110,0.15);padding:0 0.2rem;border-radius:3px}
.pd-result{color:#00b894;font-weight:800}
.priority-table{background:#0d0d1a;border-radius:10px;padding:0.7rem;margin-top:0.6rem;border:1px solid rgba(108,92,231,0.15)}
.pt-title{font-size:0.88rem;color:#c8d0e0;font-weight:700;margin-bottom:0.5rem}
.pt-row{display:grid;grid-template-columns:24px 80px 1fr 70px;gap:0.4rem;align-items:center;padding:0.3rem 0.4rem;border-radius:4px;transition:background 0.2s}
.pt-row:hover{background:rgba(108,92,231,0.06)}
.pt-rank{font-size:0.8rem;font-weight:800;color:#555;text-align:center}
.pt-op{font-family:monospace;font-size:0.88rem;color:#FF9800;font-weight:700;font-weight:700}
.pt-name{font-size:0.8rem;color:#c8d0e0}
.pt-ex{font-family:monospace;font-size:0.92rem;color:#555}
.pt-level-high .pt-rank{color:#e17055}.pt-level-mid .pt-rank{color:#fdcb6e}.pt-level-low .pt-rank{color:#00b894}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 词法分析会识别不同类型的Token。请写代码验证Python的运算符优先级：计算 2+3*4、(2+3)*4、2**3+1、10-2*3+1，分别打印结果，并用注释说明计算顺序。",
        hint: 'print("2+3*4 =", 2+3*4)        # 先乘后加 = 14\nprint("(2+3)*4 =", (2+3)*4)    # 括号优先 = 20\nprint("2**3+1 =", 2**3+1)      # 先乘方后加 = 9\nprint("10-2*3+1 =", 10-2*3+1)  # 先乘后加减 = 5',
        template: '# 验证运算符优先级\n',
        check: function(output) { return output.indexOf("14") !== -1 && output.indexOf("20") !== -1 && output.indexOf("9") !== -1; }
      }
    },
    // ============================================================
    // 课程 0-4：AST树 —— 代码的骨架（进阶）
    // ============================================================
    {
      id: "0-4",
      title: "AST树 —— 代码的骨架",
      advanced: true,
      xp: 30,
      code: '# AST = 抽象语法树（Abstract Syntax Tree）\n# 它是代码的树形结构表示\n\n# 这行代码：\n# result = 10 + 5 * 2\n# 会生成这样的AST：\n#\n#        赋值(=)\n#       /       \\\n#    result    加法(+)\n#             /      \\\n#           10      乘法(*)\n#                  /      \\\n#                 5        2\n\nresult = 10 + 5 * 2\nprint("result =", result)\n\n# 树的结构保证了运算顺序！\n# 先计算叶子节点（5*2），再向上计算（10+10）',
      steps: [
        {
          title: "什么是AST（抽象语法树）？",
          content: `
<p><strong>AST（Abstract Syntax Tree，抽象语法树）</strong>是代码的<strong>树形结构表示</strong>。</p>
<p>语法分析器把Token序列转换成AST，让计算机能理解代码的<strong>层次结构和逻辑关系</strong>。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🌳 AST是什么？— 点击构建树</div>
  <div class="tree-intro">
    <div class="ti-left">
      <div class="ti-title">📝 源代码</div>
      <div class="ti-code">result = 10 + 5 * 2</div>
    </div>
    <div class="ti-arrow">→ 变成 →</div>
    <div class="ti-right">
      <div class="ti-title">🌳 AST树形结构</div>
      <div class="ast-tree-mini" id="astTree1">
        <div class="ast-node ast-root ast-anim" id="an0">赋值 =</div>
        <div class="ast-children">
          <div class="ast-branch">
            <div class="ast-line-v"></div>
            <div class="ast-node ast-var ast-anim" id="an1">result</div>
          </div>
          <div class="ast-branch">
            <div class="ast-line-v"></div>
            <div class="ast-node ast-op ast-anim" id="an2">加法 +</div>
            <div class="ast-children">
              <div class="ast-branch">
                <div class="ast-line-v"></div>
                <div class="ast-node ast-num ast-anim" id="an3">10</div>
              </div>
              <div class="ast-branch">
                <div class="ast-line-v"></div>
                <div class="ast-node ast-op ast-anim" id="an4">乘法 *</div>
                <div class="ast-children">
                  <div class="ast-branch"><div class="ast-line-v"></div><div class="ast-node ast-num ast-anim" id="an5">5</div></div>
                  <div class="ast-branch"><div class="ast-line-v"></div><div class="ast-node ast-num ast-anim" id="an6">2</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="theory-btn" onclick="(function(){var ids=['an0','an1','an2','an3','an4','an5','an6'];ids.forEach(function(id){var e=document.getElementById(id);if(e){e.classList.remove('ast-show');e.classList.add('ast-hide');}});var d=0;ids.forEach(function(id){setTimeout(function(){var e=document.getElementById(id);if(e){e.classList.remove('ast-hide');e.classList.add('ast-show');}},d);d+=300;});})()">▶ 逐步构建AST</button>
  <div class="ast-calc-demo">
    <div class="acd-title">🧮 AST是怎么计算的？（从下往上）</div>
    <div class="acd-steps">
      <div class="acd-step"><span class="acd-num">①</span> 叶子节点 <code>5</code> 和 <code>2</code> → 乘法 → <span style="color:#00b894">10</span></div>
      <div class="acd-step"><span class="acd-num">②</span> 节点 <code>10</code> 和 <span style="color:#00b894">10</span> → 加法 → <span style="color:#00b894">20</span></div>
      <div class="acd-step"><span class="acd-num">③</span> 赋值：<code>result</code> = <span style="color:#00b894;font-weight:800">20</span> ✅</div>
    </div>
  </div>
  <div class="theory-callout">🌳 树的结构天然表达了运算优先级：<strong>越深的节点越先计算！</strong></div>
</div>
<style>
.tree-intro{display:flex;align-items:center;gap:0.8rem;flex-wrap:wrap;margin:0.8rem 0}
.ti-left,.ti-right{background:#0d0d1a;border-radius:10px;padding:0.7rem;border:1px solid rgba(108,92,231,0.2);flex:1;min-width:120px}
.ti-title{font-size:0.82rem;color:#c8d0e0;font-weight:700;margin-bottom:0.4rem}
.ti-code{font-family:monospace;font-size:0.92rem;color:#FF9800;font-weight:700}
.ti-arrow{font-size:0.92rem;color:#fdcb6e;font-weight:700;white-space:nowrap}
.ast-tree-mini{display:flex;flex-direction:column;align-items:center;gap:0}
.ast-node{padding:0.2rem 0.5rem;border-radius:6px;font-size:0.82rem;font-weight:700;text-align:center;transition:all 0.4s cubic-bezier(.4,0,.2,1)}
.ast-anim{opacity:1}
.ast-hide{opacity:0;transform:scale(0.5)}
.ast-show{opacity:1;transform:scale(1)}
.ast-root{background:rgba(108,92,231,0.25);color:#FF9800;font-weight:700;border:1px solid rgba(108,92,231,0.4)}
.ast-op{background:rgba(253,121,168,0.2);color:#fd79a8;border:1px solid rgba(253,121,168,0.3)}
.ast-num{background:rgba(253,203,110,0.2);color:#fdcb6e;border:1px solid rgba(253,203,110,0.3)}
.ast-var{background:rgba(0,206,201,0.2);color:#00cec9;border:1px solid rgba(0,206,201,0.3)}
.ast-children{display:flex;gap:0.8rem;justify-content:center;margin-top:0.1rem}
.ast-branch{display:flex;flex-direction:column;align-items:center;gap:0}
.ast-line-v{width:1px;height:10px;background:rgba(255,255,255,0.15)}
/* 计算演示 */
.ast-calc-demo{background:#0d0d1a;border-radius:10px;padding:0.7rem;margin-top:0.6rem;border:1px solid rgba(0,184,148,0.15)}
.acd-title{font-size:0.88rem;font-weight:700;color:#00b894;margin-bottom:0.4rem}
.acd-steps{display:flex;flex-direction:column;gap:0.3rem}
.acd-step{font-size:0.82rem;color:#e8ecf2;display:flex;align-items:center;gap:0.4rem;padding:0.2rem 0}
.acd-step code{color:#fdcb6e;font-family:monospace}
.acd-num{font-size:0.9rem;font-weight:800;color:#FF9800;font-weight:700}
</style>`
        },
        {
          title: "AST的节点类型",
          content: `
<p>AST中的每个节点都有一个<strong>类型</strong>，代表不同的语法结构：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔖 AST节点类型大全</div>
  <div class="node-types-grid">
    <div class="nt-card" style="--nc:#6c5ce7">
      <div class="nt-icon">📦</div>
      <div class="nt-name">Module</div>
      <div class="nt-desc">整个程序文件</div>
      <div class="nt-example">整个.py文件</div>
    </div>
    <div class="nt-card" style="--nc:#00cec9">
      <div class="nt-icon">📝</div>
      <div class="nt-name">Assign</div>
      <div class="nt-desc">赋值语句</div>
      <div class="nt-example">x = 10</div>
    </div>
    <div class="nt-card" style="--nc:#fd79a8">
      <div class="nt-icon">➕</div>
      <div class="nt-name">BinOp</div>
      <div class="nt-desc">二元运算</div>
      <div class="nt-example">a + b, x * y</div>
    </div>
    <div class="nt-card" style="--nc:#fdcb6e">
      <div class="nt-icon">🔢</div>
      <div class="nt-name">Num/Constant</div>
      <div class="nt-desc">数字字面量</div>
      <div class="nt-example">42, 3.14</div>
    </div>
    <div class="nt-card" style="--nc:#00b894">
      <div class="nt-icon">📛</div>
      <div class="nt-name">Name</div>
      <div class="nt-desc">变量名</div>
      <div class="nt-example">x, result, name</div>
    </div>
    <div class="nt-card" style="--nc:#e17055">
      <div class="nt-icon">📞</div>
      <div class="nt-name">Call</div>
      <div class="nt-desc">函数调用</div>
      <div class="nt-example">print("hello")</div>
    </div>
    <div class="nt-card" style="--nc:#a29bfe">
      <div class="nt-icon">🔀</div>
      <div class="nt-name">If</div>
      <div class="nt-desc">条件语句</div>
      <div class="nt-example">if x > 0: ...</div>
    </div>
    <div class="nt-card" style="--nc:#74b9ff">
      <div class="nt-icon">🔄</div>
      <div class="nt-name">For/While</div>
      <div class="nt-desc">循环语句</div>
      <div class="nt-example">for i in range(5)</div>
    </div>
  </div>
</div>
<style>
.node-types-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:0.5rem;margin:0.8rem 0}
.nt-card{background:#0d0d1a;border-radius:10px;padding:0.6rem;border-top:3px solid var(--nc);text-align:center;transition:transform 0.2s;animation:nodeAppear 0.4s ease both}
.nt-card:hover{transform:translateY(-3px)}
.nt-icon{font-size:1.2rem;margin-bottom:0.2rem}
.nt-name{font-size:0.88rem;font-weight:800;color:#e8ecf2;margin-bottom:0.15rem}
.nt-desc{font-size:0.92rem;color:#c8d0e0;margin-bottom:0.2rem}
.nt-example{font-family:monospace;font-size:0.92rem;color:var(--nc);background:rgba(255,255,255,0.04);padding:0.1rem 0.3rem;border-radius:4px}
</style>`
        },
        {
          title: "完整AST示例：if语句",
          content: `
<p>让我们看一个更复杂的例子——<em>if</em> 语句的AST：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🌳 if语句的AST</div>
  <div class="if-ast-demo">
    <div class="iad-code">
      <div class="iad-code-title">源代码</div>
      <div class="iad-code-block">if x > 0:
    print("正数")
else:
    print("非正数")</div>
    </div>
    <div class="iad-tree">
      <div class="iad-tree-title">AST结构</div>
      <div class="iad-ast">
        <div class="iad-node iad-if">If节点</div>
        <div class="iad-row">
          <div class="iad-col">
            <div class="iad-label">test（条件）</div>
            <div class="iad-node iad-cmp">Compare &gt;</div>
            <div class="iad-row">
              <div class="iad-col"><div class="iad-node iad-name">Name: x</div></div>
              <div class="iad-col"><div class="iad-node iad-num">Num: 0</div></div>
            </div>
          </div>
          <div class="iad-col">
            <div class="iad-label">body（真分支）</div>
            <div class="iad-node iad-call">Call: print</div>
            <div class="iad-node iad-str">"正数"</div>
          </div>
          <div class="iad-col">
            <div class="iad-label">orelse（假分支）</div>
            <div class="iad-node iad-call">Call: print</div>
            <div class="iad-node iad-str">"非正数"</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="theory-callout">🎯 AST把代码的逻辑结构完整地表达出来，编译器就是通过遍历AST来生成机器码的！</div>
</div>
<style>
.if-ast-demo{display:flex;flex-direction:column;gap:0.6rem;margin:0.8rem 0}
.iad-code,.iad-tree{background:#0d0d1a;border-radius:10px;padding:0.7rem;border:1px solid rgba(108,92,231,0.2)}
.iad-code-title,.iad-tree-title{font-size:0.82rem;color:#c8d0e0;font-weight:700;margin-bottom:0.4rem}
.iad-code-block{font-family:monospace;font-size:0.88rem;color:#FF9800;font-weight:700;line-height:1.7;white-space:pre}
.iad-ast{display:flex;flex-direction:column;align-items:center;gap:0.3rem}
.iad-node{padding:0.2rem 0.5rem;border-radius:6px;font-size:0.8rem;font-weight:700;text-align:center;white-space:nowrap}
.iad-if{background:rgba(108,92,231,0.25);color:#FF9800;font-weight:700;border:1px solid rgba(108,92,231,0.4)}
.iad-cmp{background:rgba(253,121,168,0.2);color:#fd79a8;border:1px solid rgba(253,121,168,0.3)}
.iad-name{background:rgba(0,206,201,0.2);color:#00cec9;border:1px solid rgba(0,206,201,0.3)}
.iad-num{background:rgba(253,203,110,0.2);color:#fdcb6e;border:1px solid rgba(253,203,110,0.3)}
.iad-call{background:rgba(225,112,85,0.2);color:#e17055;border:1px solid rgba(225,112,85,0.3)}
.iad-str{background:rgba(0,184,148,0.2);color:#00b894;border:1px solid rgba(0,184,148,0.3)}
.iad-row{display:flex;gap:0.5rem;justify-content:center;flex-wrap:wrap}
.iad-col{display:flex;flex-direction:column;align-items:center;gap:0.2rem}
.iad-label{font-size:0.9rem;color:#c8d0e0;font-weight:700}
</style>`
        },
        {
          title: "AST的用途：不只是编译！",
          content: `
<p>AST不只是编译器用，它在<strong>软件工程的方方面面</strong>都有应用：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🚀 AST的六大应用场景 — 悬停查看详情</div>
  <div class="ast-uses">
    <div class="au-card" style="--auc:#6c5ce7">
      <div class="au-icon">🔨</div>
      <div class="au-title">编译器/解释器</div>
      <div class="au-desc">把代码转换成机器码或字节码执行——这就是我们本章学的！</div>
    </div>
    <div class="au-card" style="--auc:#00cec9">
      <div class="au-icon">✨</div>
      <div class="au-title">代码格式化</div>
      <div class="au-desc">Prettier、Black 等工具通过 AST 重新排版代码，让代码整洁美观</div>
    </div>
    <div class="au-card" style="--auc:#fd79a8">
      <div class="au-icon">🔍</div>
      <div class="au-title">代码检查 (Lint)</div>
      <div class="au-desc">ESLint、Pylint 分析 AST 找出潜在bug、不规范写法</div>
    </div>
    <div class="au-card" style="--auc:#fdcb6e">
      <div class="au-icon">🔄</div>
      <div class="au-title">代码转换</div>
      <div class="au-desc">Babel 把新版 JS 转成旧版，TypeScript 编译成 JS，都通过修改 AST</div>
    </div>
    <div class="au-card" style="--auc:#00b894">
      <div class="au-icon">🤖</div>
      <div class="au-title">AI代码补全</div>
      <div class="au-desc">Copilot 等 AI 工具利用 AST 理解代码结构，给出更精准的建议</div>
    </div>
    <div class="au-card" style="--auc:#e17055">
      <div class="au-icon">📊</div>
      <div class="au-title">代码复杂度分析</div>
      <div class="au-desc">分析 AST 的深度、分支数来评估代码复杂度和可维护性</div>
    </div>
  </div>
</div>
<div class="theory-anim-box" style="margin-top:0.8rem">
  <div class="theory-anim-title">🏆 完整流程回顾 — 你已经掌握了程序运行的全貌！</div>
  <div class="full-pipeline" id="fullPipeline">
    <div class="fp-step fp-a" id="fp0" style="--fpc:#6c5ce7">📝<br><small>源代码</small></div>
    <div class="fp-arr fp-a" id="fpa0">→</div>
    <div class="fp-step fp-a" id="fp1" style="--fpc:#00cec9">✂️<br><small>词法分析</small></div>
    <div class="fp-arr fp-a" id="fpa1">→</div>
    <div class="fp-step fp-a" id="fp2" style="--fpc:#fd79a8">🔤<br><small>Token流</small></div>
    <div class="fp-arr fp-a" id="fpa2">→</div>
    <div class="fp-step fp-a" id="fp3" style="--fpc:#fdcb6e">🌳<br><small>语法分析</small></div>
    <div class="fp-arr fp-a" id="fpa3">→</div>
    <div class="fp-step fp-a" id="fp4" style="--fpc:#00b894">🌲<br><small>AST</small></div>
    <div class="fp-arr fp-a" id="fpa4">→</div>
    <div class="fp-step fp-a" id="fp5" style="--fpc:#e17055">⚙️<br><small>代码生成</small></div>
    <div class="fp-arr fp-a" id="fpa5">→</div>
    <div class="fp-step fp-a" id="fp6" style="--fpc:#a29bfe">🚀<br><small>执行</small></div>
  </div>
  <div class="theory-btn-row">
    <div class="theory-callout" style="margin:0;flex:1;background:rgba(0,184,148,0.08);border-left-color:#00b894">🎓 <strong>恭喜你完成了第零章！</strong>你已经了解了程序从代码到执行的完整链路。这些知识会让你在后面的 Python 学习中理解得更深入！</div>
    <button class="theory-btn" onclick="(function(){var ids=['fp0','fpa0','fp1','fpa1','fp2','fpa2','fp3','fpa3','fp4','fpa4','fp5','fpa5','fp6'];ids.forEach(function(id){document.getElementById(id).classList.remove('fp-show');});var d=0;ids.forEach(function(id){setTimeout(function(){document.getElementById(id).classList.add('fp-show');},d);d+=250;});})()">▶ 播放完整流程</button>
  </div>
</div>
<style>
.ast-uses{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:0.5rem;margin:0.8rem 0}
.au-card{background:#0d0d1a;border-radius:10px;padding:0.7rem;border-left:3px solid var(--auc);transition:all 0.3s}
.au-card:hover{transform:translateX(4px);box-shadow:0 4px 15px rgba(0,0,0,0.3);background:rgba(13,13,26,0.95)}
.au-icon{font-size:1.2rem;margin-bottom:0.3rem}
.au-title{font-size:0.9rem;font-weight:800;color:#e8ecf2;margin-bottom:0.2rem}
.au-desc{font-size:0.92rem;color:#c8d0e0;line-height:1.5}
.full-pipeline{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:0.2rem;margin:0.6rem 0}
.fp-step{background:#0d0d1a;border-radius:8px;padding:0.4rem 0.5rem;text-align:center;font-size:1rem;border-top:2px solid var(--fpc);min-width:52px;line-height:1.3;transition:all 0.4s}
.fp-a{opacity:0;transform:translateY(8px)}
.fp-a.fp-show{opacity:1;transform:translateY(0)}
.fp-step small{font-size:0.9rem;color:#c8d0e0;display:block}
.fp-arr{font-size:0.9rem;color:#c8d0e0;transition:all 0.4s}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 AST树中，越深的节点越先计算。请写代码验证：计算 2**3*4+10//3-1，先用注释写出你认为的计算顺序，再运行验证。（提示：** 优先级最高，然后 * // ，最后 + -）",
        hint: '# 计算顺序：\n# 1. 2**3 = 8  (乘方最高)\n# 2. 8*4 = 32  (乘法)\n# 3. 10//3 = 3 (整除)\n# 4. 32+3 = 35 (加法)\n# 5. 35-1 = 34 (减法)\nresult = 2**3*4+10//3-1\nprint("结果:", result)  # 应该是34',
        template: '# 验证AST运算顺序\n# 计算 2**3*4+10//3-1\n# 你认为的计算顺序：\n# 1. \n# 2. \n# 3. \n',
        check: function(output) { return output.indexOf("34") !== -1; }
      }
    },
    // ============================================================
    // 课程 0-5：程序与操作系统 —— 从双击到运行的完整旅程
    // ============================================================
    {
      id: "0-5",
      title: "程序与操作系统 —— 从双击到运行的完整旅程",
      xp: 30,
      code: '# 模拟程序启动的完整流程\nimport sys\nimport os\n\n# 1. 操作系统信息\nprint("🖥️ 操作系统:", os.name)\nprint("📂 当前工作目录:", os.getcwd())\nprint("🐍 Python路径:", sys.executable)\n\n# 2. 进程信息\nprint("\\n🔢 当前进程ID(PID):", os.getpid())\n\n# 3. 内存中的对象\nx = 42\nprint("\\n📦 变量 x 的内存地址:", hex(id(x)))\nprint("📦 变量 x 的类型:", type(x))\nprint("📦 变量 x 的值:", x)\n\n# 4. 这就是程序运行的全貌！\nprint("\\n✅ 操作系统 → 加载程序 → 分配内存 → 执行指令 → 输出结果")',
      steps: [
        {
          title: '🏁 终章：串联所有知识',
          content: `
<p>恭喜你走到了理论卷的最后一章！在前面的章节中，你已经学习了：</p>
<div class="os-recap-grid">
  <div class="os-recap-card" style="--rc:#6c5ce7"><div class="os-recap-icon">🧠</div><div class="os-recap-title">逻辑</div><div class="os-recap-desc">布尔代数与逻辑门</div></div>
  <div class="os-recap-card" style="--rc:#0984e3"><div class="os-recap-icon">🔧</div><div class="os-recap-title">硬件</div><div class="os-recap-desc">CPU/内存/总线</div></div>
  <div class="os-recap-card" style="--rc:#00cec9"><div class="os-recap-icon">🔢</div><div class="os-recap-title">进制</div><div class="os-recap-desc">二进制与编码</div></div>
  <div class="os-recap-card" style="--rc:#e17055"><div class="os-recap-icon">⚙️</div><div class="os-recap-title">汇编</div><div class="os-recap-desc">机器码指令</div></div>
  <div class="os-recap-card" style="--rc:#fdcb6e"><div class="os-recap-icon">🖥️</div><div class="os-recap-title">OS</div><div class="os-recap-desc">操作系统管理</div></div>
  <div class="os-recap-card" style="--rc:#e84393"><div class="os-recap-icon">🫀</div><div class="os-recap-title">内核</div><div class="os-recap-desc">系统调用与驱动</div></div>
  <div class="os-recap-card" style="--rc:#55efc4"><div class="os-recap-icon">📋</div><div class="os-recap-title">进程</div><div class="os-recap-desc">程序的运行实例</div></div>
  <div class="os-recap-card" style="--rc:#a29bfe"><div class="os-recap-icon">🧵</div><div class="os-recap-title">线程</div><div class="os-recap-desc">轻量执行单元</div></div>
</div>
<p style="margin-top:1rem;font-weight:700;color:#FF9800">现在，让我们把所有知识串联起来，看看当你<strong>双击运行一个程序</strong>时，到底发生了什么！</p>
<style>
.os-recap-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0.6rem;margin:0.8rem 0}
.os-recap-card{background:rgba(13,13,26,0.85);border-radius:12px;padding:0.6rem;text-align:center;border-top:3px solid var(--rc);transition:all 0.3s}
.os-recap-card:hover{transform:translateY(-4px);box-shadow:0 6px 20px rgba(0,0,0,0.4)}
.os-recap-icon{font-size:1.4rem;margin-bottom:0.2rem}
.os-recap-title{font-size:0.85rem;font-weight:800;color:#e8ecf2}
.os-recap-desc{font-size:0.75rem;color:#a0a8c0;margin-top:0.15rem}
@media(max-width:480px){.os-recap-grid{grid-template-columns:repeat(2,1fr)}}
</style>`
        },
        {
          title: '第一步：你双击了程序图标',
          content: `
<p>当你<strong>双击</strong>一个 Python 文件（或任何程序）时，操作系统开始忙碌了！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">👆 双击 → 操作系统接管</div>
  <div class="os-launch-flow">
    <div class="os-launch-step ols-anim" style="animation-delay:0.2s">
      <div class="os-launch-num">1</div>
      <div class="os-launch-icon">👆</div>
      <div class="os-launch-text"><strong>用户操作</strong><br><span>双击 hello.py</span></div>
    </div>
    <div class="os-launch-arrow ols-anim" style="animation-delay:0.5s">▼</div>
    <div class="os-launch-step ols-anim" style="animation-delay:0.8s">
      <div class="os-launch-num">2</div>
      <div class="os-launch-icon">🖥️</div>
      <div class="os-launch-text"><strong>Shell / 文件管理器</strong><br><span>识别 .py 后缀 → 找到关联的 Python 解释器</span></div>
    </div>
    <div class="os-launch-arrow ols-anim" style="animation-delay:1.1s">▼</div>
    <div class="os-launch-step ols-anim" style="animation-delay:1.4s">
      <div class="os-launch-num">3</div>
      <div class="os-launch-icon">🫀</div>
      <div class="os-launch-text"><strong>系统调用 (syscall)</strong><br><span>Shell 调用 <code>fork()</code> + <code>exec()</code> 请求内核创建新进程</span></div>
    </div>
    <div class="os-launch-arrow ols-anim" style="animation-delay:1.7s">▼</div>
    <div class="os-launch-step ols-anim" style="animation-delay:2.0s">
      <div class="os-launch-num">4</div>
      <div class="os-launch-icon">📋</div>
      <div class="os-launch-text"><strong>内核创建进程</strong><br><span>分配 PID、创建 PCB、设置内存空间</span></div>
    </div>
  </div>
</div>
<div class="theory-callout" style="margin-top:0.8rem">
  💡 <strong>关键概念</strong>：你点击的每一个程序，最终都要经过<strong>操作系统内核</strong>才能真正运行。内核是一切程序运行的"守门人"！
</div>
<style>
.os-launch-flow{display:flex;flex-direction:column;align-items:center;gap:0.3rem;padding:0.5rem 0}
.os-launch-step{display:flex;align-items:center;gap:0.7rem;background:rgba(13,13,26,0.85);border-radius:12px;padding:0.65rem 1rem;width:100%;max-width:420px;border-left:3px solid #6c5ce7;transition:all 0.3s}
.os-launch-step:hover{transform:translateX(6px);border-left-color:#FF9800;box-shadow:0 4px 15px rgba(108,92,231,0.2)}
.os-launch-num{background:linear-gradient(135deg,#6c5ce7,#a29bfe);color:#fff;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:800;flex-shrink:0}
.os-launch-icon{font-size:1.3rem;flex-shrink:0}
.os-launch-text{font-size:0.85rem;color:#c8d0e0;line-height:1.45}
.os-launch-text strong{color:#e8ecf2}
.os-launch-text code{background:rgba(108,92,231,0.2);padding:0.1rem 0.3rem;border-radius:4px;font-size:0.8rem;color:#a29bfe}
.os-launch-arrow{color:#6c5ce7;font-size:1rem;font-weight:700}
@keyframes ols-fadein{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
.ols-anim{opacity:0;animation:ols-fadein 0.5s ease forwards}
</style>`
        },
        {
          title: '第二步：操作系统为程序准备"房间"',
          content: `
<p>内核收到请求后，要为程序准备一个完整的运行环境——就像给新员工准备办公室一样：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🏠 操作系统为程序分配资源</div>
  <div class="os-room-layout">
    <div class="os-room-box os-room-anim" style="animation-delay:0.3s">
      <div class="os-room-header" style="background:linear-gradient(135deg,#6c5ce7,#a29bfe)">📋 进程控制块 (PCB)</div>
      <div class="os-room-body">
        <div class="os-room-item"><span class="os-room-key">PID:</span> 12345</div>
        <div class="os-room-item"><span class="os-room-key">状态:</span> <span style="color:#55efc4">就绪</span></div>
        <div class="os-room-item"><span class="os-room-key">优先级:</span> Normal</div>
        <div class="os-room-item"><span class="os-room-key">父进程:</span> Shell(PID:1024)</div>
      </div>
    </div>
    <div class="os-room-box os-room-anim" style="animation-delay:0.6s">
      <div class="os-room-header" style="background:linear-gradient(135deg,#0984e3,#74b9ff)">💾 虚拟内存空间</div>
      <div class="os-room-mem">
        <div class="os-mem-seg" style="--ms:#e17055;flex:1">代码段<br><small>.text</small></div>
        <div class="os-mem-seg" style="--ms:#fdcb6e;flex:0.6">数据段<br><small>.data</small></div>
        <div class="os-mem-seg" style="--ms:#55efc4;flex:1.2">堆 Heap ↓<br><small>动态分配</small></div>
        <div class="os-mem-gap">···</div>
        <div class="os-mem-seg" style="--ms:#a29bfe;flex:1">↑ 栈 Stack<br><small>函数调用</small></div>
      </div>
    </div>
    <div class="os-room-box os-room-anim" style="animation-delay:0.9s">
      <div class="os-room-header" style="background:linear-gradient(135deg,#e84393,#fd79a8)">📁 文件描述符表</div>
      <div class="os-room-body">
        <div class="os-room-item"><span class="os-room-key">fd 0:</span> stdin (键盘)</div>
        <div class="os-room-item"><span class="os-room-key">fd 1:</span> stdout (屏幕)</div>
        <div class="os-room-item"><span class="os-room-key">fd 2:</span> stderr (错误)</div>
      </div>
    </div>
  </div>
</div>
<div class="theory-callout">
  💡 每个运行的程序都有自己<strong>独立的虚拟内存空间</strong>，互不干扰。这就是为什么一个程序崩溃，其他程序不受影响！
</div>
<style>
.os-room-layout{display:grid;grid-template-columns:repeat(3,1fr);gap:0.6rem;margin:0.6rem 0}
@media(max-width:600px){.os-room-layout{grid-template-columns:1fr}}
.os-room-box{background:rgba(13,13,26,0.85);border-radius:12px;overflow:hidden;transition:all 0.3s}
.os-room-box:hover{transform:translateY(-4px);box-shadow:0 8px 25px rgba(0,0,0,0.3)}
.os-room-header{padding:0.5rem;text-align:center;font-size:0.8rem;font-weight:800;color:#fff}
.os-room-body{padding:0.5rem}
.os-room-item{font-size:0.8rem;color:#c8d0e0;padding:0.2rem 0.4rem;border-bottom:1px solid rgba(255,255,255,0.05)}
.os-room-item:last-child{border-bottom:none}
.os-room-key{color:#a29bfe;font-weight:700;font-family:monospace}
.os-room-mem{display:flex;flex-direction:column;gap:2px;padding:0.4rem}
.os-mem-seg{background:rgba(0,0,0,0.4);border-left:3px solid var(--ms);padding:0.3rem 0.5rem;font-size:0.75rem;color:#e8ecf2;text-align:center;border-radius:4px}
.os-mem-seg small{color:#a0a8c0;font-size:0.7rem}
.os-mem-gap{text-align:center;color:#555;font-size:0.7rem;padding:0.1rem}
@keyframes os-room-fadein{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
.os-room-anim{opacity:0;animation:os-room-fadein 0.5s ease forwards}
</style>`
        },
        {
          title: '第三步：加载器把程序搬进内存',
          content: `
<p>进程的"房间"准备好了，接下来<strong>加载器(Loader)</strong>要把程序从硬盘搬到内存中：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📦 加载器的工作流程</div>
  <div class="os-loader-timeline">
    <div class="os-loader-item oli-anim" style="animation-delay:0.3s">
      <div class="os-loader-dot" style="background:#e17055"></div>
      <div class="os-loader-content">
        <div class="os-loader-label">① 读取可执行文件</div>
        <div class="os-loader-detail">从硬盘读取 ELF/PE/Mach-O 格式的程序文件头，解析各段信息</div>
      </div>
    </div>
    <div class="os-loader-item oli-anim" style="animation-delay:0.6s">
      <div class="os-loader-dot" style="background:#fdcb6e"></div>
      <div class="os-loader-content">
        <div class="os-loader-label">② 映射到虚拟内存</div>
        <div class="os-loader-detail">将代码段(.text)、数据段(.data)映射到进程的虚拟地址空间</div>
      </div>
    </div>
    <div class="os-loader-item oli-anim" style="animation-delay:0.9s">
      <div class="os-loader-dot" style="background:#55efc4"></div>
      <div class="os-loader-content">
        <div class="os-loader-label">③ 加载依赖库</div>
        <div class="os-loader-detail">加载程序依赖的动态链接库（.dll / .so / .dylib）</div>
      </div>
    </div>
    <div class="os-loader-item oli-anim" style="animation-delay:1.2s">
      <div class="os-loader-dot" style="background:#a29bfe"></div>
      <div class="os-loader-content">
        <div class="os-loader-label">④ 初始化栈和寄存器</div>
        <div class="os-loader-detail">设置栈指针(SP)、指令指针(IP)指向程序入口 main()</div>
      </div>
    </div>
    <div class="os-loader-item oli-anim" style="animation-delay:1.5s">
      <div class="os-loader-dot" style="background:#e84393"></div>
      <div class="os-loader-content">
        <div class="os-loader-label">⑤ 跳转执行！</div>
        <div class="os-loader-detail">CPU 从入口地址开始，逐条取指令 → 译码 → 执行</div>
      </div>
    </div>
  </div>
  <div class="os-python-note">
    <div class="os-pn-title">🐍 Python 的特殊之处</div>
    <div class="os-pn-text">
      Python 是<strong>解释型语言</strong>，所以加载的不是你写的 .py 文件，而是 <strong>Python 解释器程序</strong>本身！<br>
      解释器启动后，再读取你的 .py 文件，逐行翻译执行。
    </div>
    <div class="os-pn-flow">
      <span class="os-pn-tag" style="--pt:#6c5ce7">双击 hello.py</span>
      <span class="os-pn-arrow">→</span>
      <span class="os-pn-tag" style="--pt:#0984e3">OS 启动 python.exe</span>
      <span class="os-pn-arrow">→</span>
      <span class="os-pn-tag" style="--pt:#e84393">python.exe 读取 hello.py</span>
      <span class="os-pn-arrow">→</span>
      <span class="os-pn-tag" style="--pt:#55efc4">逐行执行</span>
    </div>
  </div>
</div>
<style>
.os-loader-timeline{position:relative;padding-left:1.5rem;margin:0.5rem 0}
.os-loader-timeline::before{content:'';position:absolute;left:8px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,#6c5ce7,#e84393)}
.os-loader-item{display:flex;align-items:flex-start;gap:0.6rem;margin-bottom:0.5rem;position:relative}
.os-loader-dot{width:14px;height:14px;border-radius:50%;flex-shrink:0;margin-left:-1.18rem;margin-top:0.2rem;box-shadow:0 0 8px rgba(0,0,0,0.3);z-index:1}
.os-loader-content{flex:1}
.os-loader-label{font-size:0.85rem;font-weight:700;color:#e8ecf2}
.os-loader-detail{font-size:0.8rem;color:#a0a8c0;margin-top:0.15rem;line-height:1.4}
.os-python-note{background:rgba(108,92,231,0.1);border:1px solid rgba(108,92,231,0.25);border-radius:12px;padding:0.7rem;margin-top:0.8rem}
.os-pn-title{font-size:0.85rem;font-weight:800;color:#FF9800;margin-bottom:0.3rem}
.os-pn-text{font-size:0.82rem;color:#c8d0e0;line-height:1.5}
.os-pn-flow{display:flex;align-items:center;flex-wrap:wrap;gap:0.3rem;margin-top:0.5rem}
.os-pn-tag{background:rgba(13,13,26,0.8);border:1px solid var(--pt);border-radius:8px;padding:0.25rem 0.5rem;font-size:0.75rem;color:#e8ecf2;white-space:nowrap}
.os-pn-arrow{color:#6c5ce7;font-weight:700;font-size:0.85rem}
@keyframes oli-fadein{from{opacity:0;transform:translateX(-10px)}to{opacity:1;transform:translateX(0)}}
.oli-anim{opacity:0;animation:oli-fadein 0.5s ease forwards}
</style>`
        },
        {
          title: '第四步：CPU 执行 & 操作系统调度',
          content: `
<p>程序加载到内存后，<strong>CPU</strong> 开始执行指令。但别忘了，你的电脑同时运行着几十上百个进程！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">⚡ CPU调度：操作系统的"交通指挥官"</div>
  <div class="os-sched-visual">
    <div class="os-cpu-core">
      <div class="os-cpu-label">🔲 CPU 核心</div>
      <div class="os-cpu-slot">
        <div class="os-cpu-running">正在执行...</div>
      </div>
    </div>
    <div class="os-ready-queue">
      <div class="os-rq-label">📋 就绪队列</div>
      <div class="os-rq-items">
        <div class="os-rq-proc" style="--rqc:#e17055">🐍 python.exe<br><small>PID:12345</small></div>
        <div class="os-rq-proc" style="--rqc:#0984e3">🌐 chrome.exe<br><small>PID:6789</small></div>
        <div class="os-rq-proc" style="--rqc:#55efc4">🎵 music.exe<br><small>PID:1111</small></div>
        <div class="os-rq-proc" style="--rqc:#fdcb6e">📝 vscode.exe<br><small>PID:2222</small></div>
      </div>
    </div>
  </div>
  <div class="os-sched-explain">
    <div class="os-se-item"><span class="os-se-badge" style="background:#e17055">时间片</span> 每个进程只运行一小段时间（如10ms），然后让出 CPU</div>
    <div class="os-se-item"><span class="os-se-badge" style="background:#0984e3">上下文切换</span> 保存当前进程状态 → 恢复下一个进程状态 → 继续执行</div>
    <div class="os-se-item"><span class="os-se-badge" style="background:#55efc4">并发假象</span> 切换速度极快（每秒数百次），看起来像同时运行</div>
  </div>
</div>
<div class="theory-callout">
  🎯 这就是为什么你可以<strong>边听音乐边写代码</strong>——操作系统在快速地切换不同进程！
</div>
<style>
.os-sched-visual{display:flex;gap:1rem;margin:0.6rem 0;align-items:flex-start}
@media(max-width:500px){.os-sched-visual{flex-direction:column}}
.os-cpu-core{background:rgba(13,13,26,0.9);border:2px solid #6c5ce7;border-radius:12px;padding:0.6rem;flex:0 0 140px;text-align:center}
.os-cpu-label{font-size:0.8rem;font-weight:800;color:#a29bfe;margin-bottom:0.4rem}
.os-cpu-slot{background:linear-gradient(135deg,rgba(108,92,231,0.2),rgba(232,67,147,0.2));border-radius:8px;padding:0.6rem;min-height:50px;display:flex;align-items:center;justify-content:center}
.os-cpu-running{font-size:0.8rem;color:#55efc4;animation:os-blink 1.5s ease infinite}
@keyframes os-blink{0%,100%{opacity:1}50%{opacity:0.4}}
.os-ready-queue{flex:1;background:rgba(13,13,26,0.85);border-radius:12px;padding:0.6rem;border:1px solid rgba(255,255,255,0.08)}
.os-rq-label{font-size:0.8rem;font-weight:800;color:#FF9800;margin-bottom:0.4rem}
.os-rq-items{display:flex;flex-direction:column;gap:0.3rem}
.os-rq-proc{background:rgba(0,0,0,0.4);border-left:3px solid var(--rqc);border-radius:6px;padding:0.35rem 0.6rem;font-size:0.8rem;color:#e8ecf2;transition:all 0.3s}
.os-rq-proc:hover{transform:translateX(4px);background:rgba(0,0,0,0.6)}
.os-rq-proc small{color:#a0a8c0;font-size:0.7rem}
.os-sched-explain{margin-top:0.6rem;display:flex;flex-direction:column;gap:0.3rem}
.os-se-item{font-size:0.82rem;color:#c8d0e0;display:flex;align-items:center;gap:0.5rem;line-height:1.4}
.os-se-badge{color:#fff;font-size:0.7rem;padding:0.15rem 0.5rem;border-radius:10px;font-weight:700;white-space:nowrap;flex-shrink:0}
</style>`
        },
        {
          title: '第五步：系统调用 —— 程序与OS的对话',
          content: `
<p>程序运行时需要<strong>读文件、显示文字、联网</strong>等操作，这些都不能自己做——必须"请求"操作系统！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔗 系统调用：程序与操作系统的桥梁</div>
  <div class="os-syscall-diagram">
    <div class="os-layer os-user-layer">
      <div class="os-layer-label">👤 用户空间 (User Space)</div>
      <div class="os-layer-content">
        <div class="os-app-box">
          <div class="os-app-code">print("Hello")</div>
          <div class="os-app-arrow">↓ 调用 write()</div>
        </div>
      </div>
    </div>
    <div class="os-layer-divider">
      <div class="os-divider-line"></div>
      <div class="os-divider-label">🔒 系统调用接口 (syscall)</div>
      <div class="os-divider-line"></div>
    </div>
    <div class="os-layer os-kernel-layer">
      <div class="os-layer-label">🫀 内核空间 (Kernel Space)</div>
      <div class="os-layer-content">
        <div class="os-kern-grid">
          <div class="os-kern-mod" style="--km:#e17055">文件系统<br><small>read/write</small></div>
          <div class="os-kern-mod" style="--km:#0984e3">内存管理<br><small>mmap/brk</small></div>
          <div class="os-kern-mod" style="--km:#55efc4">进程管理<br><small>fork/exec</small></div>
          <div class="os-kern-mod" style="--km:#fdcb6e">网络协议栈<br><small>socket/send</small></div>
          <div class="os-kern-mod" style="--km:#a29bfe">设备驱动<br><small>ioctl</small></div>
          <div class="os-kern-mod" style="--km:#e84393">安全模块<br><small>权限检查</small></div>
        </div>
      </div>
    </div>
    <div class="os-layer-divider">
      <div class="os-divider-line" style="border-color:#e84393"></div>
      <div class="os-divider-label" style="color:#e84393">⚡ 硬件抽象层 (HAL)</div>
      <div class="os-divider-line" style="border-color:#e84393"></div>
    </div>
    <div class="os-layer os-hw-layer">
      <div class="os-layer-label">🔧 硬件 (Hardware)</div>
      <div class="os-hw-items">
        <span>🔲 CPU</span><span>💾 内存</span><span>💿 硬盘</span><span>🖥️ 显示器</span><span>🌐 网卡</span>
      </div>
    </div>
  </div>
</div>
<div class="theory-callout">
  💡 <code>print("Hello")</code> 的真实旅程：Python → C库 write() → 系统调用 → 内核 → 显卡驱动 → 屏幕像素点亮 ✨
</div>
<style>
.os-syscall-diagram{display:flex;flex-direction:column;gap:0;margin:0.5rem 0}
.os-layer{border-radius:10px;padding:0.6rem;margin:0;transition:all 0.3s}
.os-user-layer{background:rgba(108,92,231,0.12);border:1px solid rgba(108,92,231,0.3)}
.os-kernel-layer{background:rgba(232,67,147,0.1);border:1px solid rgba(232,67,147,0.25)}
.os-hw-layer{background:rgba(253,203,110,0.1);border:1px solid rgba(253,203,110,0.25)}
.os-layer-label{font-size:0.8rem;font-weight:800;color:#e8ecf2;margin-bottom:0.4rem}
.os-layer-divider{display:flex;align-items:center;gap:0.5rem;padding:0.3rem 0}
.os-divider-line{flex:1;border-top:2px dashed rgba(108,92,231,0.4)}
.os-divider-label{font-size:0.75rem;font-weight:700;color:#a29bfe;white-space:nowrap}
.os-app-box{text-align:center}
.os-app-code{background:rgba(13,13,26,0.9);display:inline-block;padding:0.3rem 0.8rem;border-radius:8px;font-family:monospace;font-size:0.85rem;color:#55efc4}
.os-app-arrow{color:#a29bfe;font-size:0.8rem;margin-top:0.3rem}
.os-kern-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0.4rem}
@media(max-width:480px){.os-kern-grid{grid-template-columns:repeat(2,1fr)}}
.os-kern-mod{background:rgba(13,13,26,0.8);border-top:2px solid var(--km);border-radius:8px;padding:0.4rem;text-align:center;font-size:0.8rem;color:#e8ecf2;transition:all 0.3s}
.os-kern-mod:hover{transform:scale(1.05);box-shadow:0 4px 12px rgba(0,0,0,0.3)}
.os-kern-mod small{display:block;color:#a0a8c0;font-size:0.7rem;font-family:monospace;margin-top:0.15rem}
.os-hw-items{display:flex;flex-wrap:wrap;gap:0.4rem;justify-content:center}
.os-hw-items span{background:rgba(13,13,26,0.8);border:1px solid rgba(253,203,110,0.3);border-radius:8px;padding:0.3rem 0.5rem;font-size:0.8rem}
</style>`
        },
        {
          title: '🗺️ 全景图：一行代码的完整旅程',
          content: `
<p>现在，让我们用一张<strong>全景图</strong>看看 <code>print("Hello World")</code> 从你敲下到屏幕显示的完整旅程：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🌟 print("Hello World") 的完整旅程</div>
  <div class="os-journey-map">
    <div class="os-j-phase">
      <div class="os-j-phase-title" style="--jc:#6c5ce7">📝 编写阶段</div>
      <div class="os-j-step ojs-anim" style="animation-delay:0.2s">你在编辑器中写下 <code>print("Hello World")</code></div>
    </div>
    <div class="os-j-connector">⬇</div>
    <div class="os-j-phase">
      <div class="os-j-phase-title" style="--jc:#0984e3">🔬 编译阶段</div>
      <div class="os-j-step ojs-anim" style="animation-delay:0.5s"><strong>词法分析</strong>：拆分为 Token → [print] [(] ["Hello World"] [)]</div>
      <div class="os-j-step ojs-anim" style="animation-delay:0.7s"><strong>语法分析</strong>：构建 AST 抽象语法树</div>
      <div class="os-j-step ojs-anim" style="animation-delay:0.9s"><strong>编译</strong>：生成字节码 LOAD_GLOBAL → LOAD_CONST → CALL_FUNCTION</div>
    </div>
    <div class="os-j-connector">⬇</div>
    <div class="os-j-phase">
      <div class="os-j-phase-title" style="--jc:#e84393">🫀 操作系统阶段</div>
      <div class="os-j-step ojs-anim" style="animation-delay:1.2s"><strong>进程管理</strong>：Python 进程获得 CPU 时间片</div>
      <div class="os-j-step ojs-anim" style="animation-delay:1.4s"><strong>系统调用</strong>：print → write(1, "Hello World", 11) → 内核</div>
      <div class="os-j-step ojs-anim" style="animation-delay:1.6s"><strong>设备驱动</strong>：内核调用终端/显卡驱动程序</div>
    </div>
    <div class="os-j-connector">⬇</div>
    <div class="os-j-phase">
      <div class="os-j-phase-title" style="--jc:#fdcb6e">🔧 硬件阶段</div>
      <div class="os-j-step ojs-anim" style="animation-delay:1.9s"><strong>显存写入</strong>：字符像素数据写入显存</div>
      <div class="os-j-step ojs-anim" style="animation-delay:2.1s"><strong>屏幕刷新</strong>：显示器读取显存，点亮像素</div>
      <div class="os-j-step ojs-anim" style="animation-delay:2.3s"><strong>你看到了</strong>：<span style="color:#55efc4;font-weight:800;font-family:monospace">Hello World</span> ✨</div>
    </div>
  </div>
</div>
<div class="os-final-wisdom">
  <div class="os-fw-icon">🎓</div>
  <div class="os-fw-text">
    <strong>一行简单的代码，背后是整个计算机体系的协作！</strong><br>
    <span>逻辑门 → 晶体管 → CPU指令 → 机器码 → 汇编 → 操作系统 → 编程语言 → 你的代码</span><br>
    <span style="color:#FF9800">理解了这些，你就真正理解了"程序是怎么跑起来的"！🚀</span>
  </div>
</div>
<style>
.os-journey-map{margin:0.5rem 0;display:flex;flex-direction:column;gap:0;align-items:stretch}
.os-j-phase{background:rgba(13,13,26,0.85);border-radius:12px;padding:0.6rem 0.8rem;border-left:3px solid var(--jc,#6c5ce7)}
.os-j-phase-title{font-size:0.85rem;font-weight:800;color:#e8ecf2;margin-bottom:0.3rem;padding-bottom:0.2rem;border-bottom:1px solid rgba(255,255,255,0.06)}
.os-j-step{font-size:0.82rem;color:#c8d0e0;padding:0.25rem 0;line-height:1.45}
.os-j-step code{background:rgba(108,92,231,0.2);padding:0.1rem 0.3rem;border-radius:4px;font-size:0.8rem;color:#a29bfe}
.os-j-step strong{color:#e8ecf2}
.os-j-connector{text-align:center;color:#6c5ce7;font-size:0.8rem;padding:0.15rem 0}
.os-final-wisdom{display:flex;align-items:flex-start;gap:0.7rem;margin-top:1rem;background:linear-gradient(135deg,rgba(108,92,231,0.12),rgba(0,206,201,0.08));border:1px solid rgba(108,92,231,0.3);border-radius:14px;padding:0.8rem}
.os-fw-icon{font-size:2rem;flex-shrink:0}
.os-fw-text{font-size:0.85rem;color:#c8d0e0;line-height:1.6}
.os-fw-text strong{color:#e8ecf2;font-size:0.9rem}
@keyframes ojs-fadein{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
.ojs-anim{opacity:0;animation:ojs-fadein 0.4s ease forwards}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 终极挑战：使用 sys 和 os 模块，打印出当前 Python 进程的 PID、Python 版本、操作系统名称、以及一个变量的内存地址（用 hex(id(x))）。这些信息就是操作系统为你的程序分配的资源证明！",
        hint: 'import sys\nimport os\n\nprint("🔢 进程 PID:", os.getpid())\nprint("🐍 Python 版本:", sys.version.split()[0])\nprint("🖥️ 操作系统:", os.name)\nx = "Hello World"\nprint("📦 变量内存地址:", hex(id(x)))\nprint("\\n✅ 这些就是操作系统为你分配的资源！")',
        template: 'import sys\nimport os\n\n# 打印进程PID\nprint("PID:", )\n\n# 打印Python版本\nprint("Python:", )\n\n# 打印操作系统名称\nprint("OS:", )\n\n# 创建一个变量，打印它的内存地址\n',
        check: function(output) { return output.indexOf("PID") !== -1 && output.indexOf("Python") !== -1; }
      }
    }
  ]
};

registerChapter('theory', CHAPTER0);
