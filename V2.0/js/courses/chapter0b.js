// 第零章B：计算机组成原理（动画教学）
const CHAPTER0B = {
  chapter: "第二章：计算机组成原理",
  chapterNum: 2,
  icon: "🖥️",
  lessons: [
    // ============================================================
    // 课程 1：CPU —— 计算机的大脑
    // ============================================================
    {
      id: "0b-1",
      title: "CPU —— 计算机的大脑",
      xp: 20,
      code: '# 模拟CPU执行指令的过程\n# CPU的核心工作：取指令 → 解码 → 执行\n\n# 模拟一个简单的"指令集"\ninstructions = [\n    ("LOAD", "A", 5),\n    ("LOAD", "B", 3),\n    ("ADD", "A", "B"),\n    ("PRINT", "A", None)\n]\n\n# 模拟CPU寄存器\nregisters = {"A": 0, "B": 0}\npc = 0  # 程序计数器\n\nprint("=== CPU 开始执行 ===")\nfor i, inst in enumerate(instructions):\n    op = inst[0]\n    arg1 = inst[1]\n    arg2 = inst[2]\n    print(f"\\n[PC={i}] 取指令: {op} {arg1} {arg2}")\n    if op == "LOAD":\n        registers[arg1] = arg2\n        print(f"  → 寄存器 {arg1} = {arg2}")\n    elif op == "ADD":\n        registers[arg1] = registers[arg1] + registers[arg2]\n        print(f"  → {arg1} = {registers[arg1]}")\n    elif op == "PRINT":\n        print(f"  → 输出: {registers[arg1]}")\n\nprint("\\n=== 执行完毕 ===")\nprint("寄存器状态:", registers)',
      steps: [
        {
          title: "CPU：计算机的心脏与大脑",
          content: `
<p>你有没有想过，计算机是怎么"思考"的？答案就是 <strong>CPU（中央处理器）</strong>！</p>
<p>CPU 是计算机的<strong>大脑</strong>，负责执行所有的计算和逻辑判断。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🧠 CPU 的核心组成</div>
  <div class="cpu-arch-diagram">
    <div class="cpu-outer-box">
      <div class="cpu-label-main">CPU</div>
      <div class="cpu-inner-grid">
        <div class="cpu-unit cpu-alu t0-fadein" style="animation-delay:0.3s">
          <div class="cpu-unit-icon">⚡</div>
          <div class="cpu-unit-name">ALU</div>
          <div class="cpu-unit-desc">算术逻辑单元</div>
          <div class="cpu-unit-detail">做加减乘除和逻辑判断</div>
        </div>
        <div class="cpu-unit cpu-cu t0-fadein" style="animation-delay:0.5s">
          <div class="cpu-unit-icon">🎯</div>
          <div class="cpu-unit-name">CU</div>
          <div class="cpu-unit-desc">控制单元</div>
          <div class="cpu-unit-detail">指挥各部件协同工作</div>
        </div>
        <div class="cpu-unit cpu-reg t0-fadein" style="animation-delay:0.7s">
          <div class="cpu-unit-icon">📦</div>
          <div class="cpu-unit-name">寄存器</div>
          <div class="cpu-unit-desc">超高速存储</div>
          <div class="cpu-unit-detail">临时存放数据和指令</div>
        </div>
        <div class="cpu-unit cpu-cache t0-fadein" style="animation-delay:0.9s">
          <div class="cpu-unit-icon">💨</div>
          <div class="cpu-unit-name">缓存</div>
          <div class="cpu-unit-desc">高速缓冲</div>
          <div class="cpu-unit-detail">常用数据的"快捷通道"</div>
        </div>
      </div>
    </div>
  </div>
  <div class="theory-callout" style="margin-top:0.8rem">💡 CPU 每秒可以执行<strong>数十亿条</strong>指令！你的每一行 Python 代码，最终都会变成 CPU 能理解的指令。</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(253,121,168,0.08),rgba(0,206,201,0.08));border:1px solid rgba(253,121,168,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(253,121,168,0.1);border-left:3px solid #fd79a8;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
.theory-btn{margin-top:0.8rem;padding:0.5rem 1.2rem;background:linear-gradient(135deg,#FF9800,#F57C00);border:none;border-radius:20px;color:#fff;font-size:0.92rem;font-weight:700;cursor:pointer;transition:transform 0.2s,box-shadow 0.2s;box-shadow:0 3px 10px rgba(255,152,0,0.3)}
.theory-btn:hover{transform:scale(1.05);box-shadow:0 4px 18px rgba(255,152,0,0.5)}
.t0-fadein{opacity:0;animation:t0fi 0.6s ease forwards}
@keyframes t0fi{to{opacity:1}}
.cpu-arch-diagram{display:flex;justify-content:center;margin:0.8rem 0}
.cpu-outer-box{background:linear-gradient(135deg,rgba(253,121,168,0.12),rgba(0,206,201,0.08));border:2px solid rgba(253,121,168,0.4);border-radius:16px;padding:1rem;position:relative;min-width:280px}
.cpu-label-main{position:absolute;top:-10px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#fd79a8,#ffb3d1);color:#fff;padding:0.15rem 0.8rem;border-radius:10px;font-weight:800;font-size:0.8rem;letter-spacing:1px}
.cpu-inner-grid{display:grid;grid-template-columns:1fr 1fr;gap:0.6rem;margin-top:0.5rem}
.cpu-unit{background:rgba(13,13,26,0.8);border-radius:10px;padding:0.6rem;text-align:center;border:1px solid rgba(253,121,168,0.2);transition:all 0.3s;cursor:default}
.cpu-unit:hover{transform:translateY(-3px);box-shadow:0 6px 20px rgba(253,121,168,0.2);border-color:rgba(253,121,168,0.5)}
.cpu-unit-icon{font-size:1.4rem;margin-bottom:0.2rem}
.cpu-unit-name{font-weight:800;color:#e8ecf2;font-size:0.85rem}
.cpu-unit-desc{font-size:0.75rem;color:#ffb3d1;margin-top:0.1rem}
.cpu-unit-detail{font-size:0.7rem;color:#c8d0e0;margin-top:0.2rem;opacity:0;max-height:0;transition:all 0.3s;overflow:hidden}
.cpu-unit:hover .cpu-unit-detail{opacity:1;max-height:40px;margin-top:0.3rem}
.cpu-alu{border-left:3px solid #e17055}
.cpu-cu{border-left:3px solid #00cec9}
.cpu-reg{border-left:3px solid #fdcb6e}
.cpu-cache{border-left:3px solid #ffb3d1}
</style>`
        },
        {
          title: "指令与数据的流动",
          content: `
<p>CPU 执行每条指令都要经过一个<strong>指令周期</strong>。让我们看看指令和数据是如何<strong>在各部件之间流动</strong>的：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔄 指令执行全过程 — 数据流可视化</div>
  <!-- 完整的CPU-内存数据流图 -->
  <div class="dataflow-scene">
    <div class="df-mem-block" id="dfMem">
      <div class="df-block-label">📊 内存</div>
      <div class="df-mem-cells">
        <div class="df-mem-cell" id="dfMc0"><span class="df-addr">0x00</span><span class="df-val">LOAD A,5</span></div>
        <div class="df-mem-cell" id="dfMc1"><span class="df-addr">0x04</span><span class="df-val">LOAD B,3</span></div>
        <div class="df-mem-cell" id="dfMc2"><span class="df-addr">0x08</span><span class="df-val">ADD A,B</span></div>
        <div class="df-mem-cell" id="dfMc3"><span class="df-addr">0x0C</span><span class="df-val">结果→?</span></div>
      </div>
    </div>
    <!-- 数据流动粒子轨道 -->
    <div class="df-bus-track">
      <div class="df-bus-label">⇅ 总线</div>
      <div class="df-particle df-p-inst" id="dfParticle1"></div>
      <div class="df-particle df-p-data" id="dfParticle2"></div>
    </div>
    <div class="df-cpu-block" id="dfCpu">
      <div class="df-block-label">🧠 CPU</div>
      <div class="df-cpu-inner">
        <div class="df-cpu-part df-cu" id="dfCU">
          <div class="df-part-name">CU 控制</div>
          <div class="df-part-val" id="dfCUval">等待...</div>
        </div>
        <div class="df-cpu-part df-alu" id="dfALU">
          <div class="df-part-name">ALU 运算</div>
          <div class="df-part-val" id="dfALUval">空闲</div>
        </div>
        <div class="df-cpu-part df-reg" id="dfREG">
          <div class="df-part-name">寄存器</div>
          <div class="df-part-val" id="dfREGval">A=0 B=0</div>
        </div>
        <div class="df-cpu-part df-pc" id="dfPC">
          <div class="df-part-name">PC</div>
          <div class="df-part-val" id="dfPCval">0x00</div>
        </div>
      </div>
    </div>
  </div>
  <!-- 执行日志 -->
  <div class="df-log" id="dfLog">
    <div class="df-log-title">📋 执行日志</div>
    <div class="df-log-body" id="dfLogBody"><span style="color:#555">点击播放查看完整过程...</span></div>
  </div>
  <button class="theory-btn" onclick="(function(){var log=document.getElementById('dfLogBody');log.innerHTML='';var steps=[{mc:'dfMc0',cu:'📥 取指: LOAD A,5',alu:'空闲',reg:'A=0 B=0',pc:'0x00→0x04',p:'inst',log:'① PC=0x00 → 从内存取指令 LOAD A,5'},{mc:'dfMc0',cu:'🔍 解码: LOAD A,5',alu:'空闲',reg:'A=0 B=0',pc:'0x04',p:'',log:'② 控制单元解码: 将数值5加载到寄存器A'},{mc:'dfMc0',cu:'⚡ 执行',alu:'传送: 5→A',reg:'A=5 B=0',pc:'0x04',p:'data',log:'③ 执行: 数据5通过总线流入寄存器A ✅'},{mc:'dfMc1',cu:'📥 取指: LOAD B,3',alu:'空闲',reg:'A=5 B=0',pc:'0x04→0x08',p:'inst',log:'④ PC=0x04 → 从内存取指令 LOAD B,3'},{mc:'dfMc1',cu:'⚡ 执行',alu:'传送: 3→B',reg:'A=5 B=3',pc:'0x08',p:'data',log:'⑤ 数据3流入寄存器B ✅'},{mc:'dfMc2',cu:'📥 取指: ADD A,B',alu:'空闲',reg:'A=5 B=3',pc:'0x08→0x0C',p:'inst',log:'⑥ PC=0x08 → 取指令 ADD A,B'},{mc:'dfMc2',cu:'🔍 解码: ADD',alu:'⚡ 5+3=8',reg:'A=5 B=3',pc:'0x0C',p:'',log:'⑦ ALU计算: A+B = 5+3 = 8'},{mc:'dfMc3',cu:'💾 写回',alu:'结果=8',reg:'A=8 B=3',pc:'0x0C',p:'data',log:'⑧ 结果8写回寄存器A, 并存入内存0x0C ✅'}];var all=['dfMc0','dfMc1','dfMc2','dfMc3'];var d=0;steps.forEach(function(s,i){setTimeout(function(){all.forEach(function(id){document.getElementById(id).classList.remove('df-active');});document.getElementById(s.mc).classList.add('df-active');document.getElementById('dfCUval').textContent=s.cu;document.getElementById('dfALUval').textContent=s.alu;document.getElementById('dfREGval').textContent=s.reg;document.getElementById('dfPCval').textContent=s.pc;var p1=document.getElementById('dfParticle1');var p2=document.getElementById('dfParticle2');p1.className='df-particle df-p-inst';p2.className='df-particle df-p-data';if(s.p==='inst')p1.classList.add('df-fly');if(s.p==='data')p2.classList.add('df-fly');var div=document.createElement('div');div.className='df-log-line df-log-appear';div.textContent=s.log;log.appendChild(div);log.scrollTop=log.scrollHeight;},d);d+=1200;});})()">▶ 播放完整数据流</button>
</div>
<style>
.dataflow-scene{display:grid;grid-template-columns:1fr auto 1.3fr;gap:0.4rem;margin:0.5rem 0;align-items:stretch}
.df-mem-block,.df-cpu-block{background:rgba(13,13,26,0.7);border-radius:12px;padding:0.5rem;border:1px solid rgba(253,121,168,0.2)}
.df-block-label{font-weight:800;font-size:0.8rem;color:#e8ecf2;margin-bottom:0.4rem;text-align:center}
.df-mem-cells{display:flex;flex-direction:column;gap:0.2rem}
.df-mem-cell{display:flex;justify-content:space-between;padding:0.25rem 0.4rem;border-radius:6px;border:1px solid rgba(253,121,168,0.1);font-size:0.7rem;transition:all 0.4s;background:rgba(13,13,26,0.5)}
.df-mem-cell.df-active{border-color:#FF9800;background:rgba(255,152,0,0.1);box-shadow:0 0 10px rgba(255,152,0,0.2);transform:scale(1.03)}
.df-addr{color:#ffb3d1;font-family:monospace;font-weight:700}
.df-val{color:#fdcb6e;font-family:monospace;font-weight:700}
.df-bus-track{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;min-width:40px}
.df-bus-label{font-size:0.65rem;color:#00cec9;font-weight:700;margin-bottom:0.3rem}
.df-particle{width:10px;height:10px;border-radius:50%;position:absolute;opacity:0;transition:none}
.df-p-inst{background:#fd79a8;box-shadow:0 0 8px #fd79a8}
.df-p-data{background:#00cec9;box-shadow:0 0 8px #00cec9}
.df-particle.df-fly{opacity:1;animation:dfFly 0.6s ease-in-out}
@keyframes dfFly{0%{top:10%;opacity:0;transform:scale(0.5)}30%{opacity:1;transform:scale(1.3)}70%{opacity:1;transform:scale(1.3)}100%{top:80%;opacity:0;transform:scale(0.5)}}
.df-cpu-inner{display:grid;grid-template-columns:1fr 1fr;gap:0.3rem}
.df-cpu-part{background:rgba(13,13,26,0.6);border-radius:8px;padding:0.3rem 0.4rem;text-align:center;border:1px solid rgba(253,121,168,0.15);transition:all 0.4s}
.df-cu{border-left:2px solid #00cec9}.df-alu{border-left:2px solid #e17055}.df-reg{border-left:2px solid #fdcb6e}.df-pc{border-left:2px solid #ffb3d1}
.df-part-name{font-size:0.6rem;color:#ffb3d1;font-weight:700}
.df-part-val{font-size:0.65rem;color:#e8ecf2;font-weight:700;font-family:monospace;margin-top:0.1rem;word-break:break-all;min-height:1em}
.df-log{background:rgba(13,13,26,0.6);border-radius:10px;padding:0.5rem;margin-top:0.5rem;border:1px solid rgba(253,121,168,0.15)}
.df-log-title{font-size:0.75rem;color:#c8d0e0;font-weight:700;margin-bottom:0.3rem}
.df-log-body{max-height:100px;overflow-y:auto;font-size:0.7rem;color:#c8d0e0;display:flex;flex-direction:column;gap:0.15rem}
.df-log-line{padding:0.15rem 0.3rem;border-radius:4px;background:rgba(253,121,168,0.04)}
.df-log-appear{animation:dfLogIn 0.3s ease}
@keyframes dfLogIn{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
</style>`
        },
        {
          title: "时钟频率与多核CPU",
          content: `
<p>CPU的速度由<strong>时钟频率</strong>决定 —— 频率越高，每秒执行的指令越多！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">⏰ 时钟频率 & 多核</div>
  <div class="freq-demo">
    <div class="freq-compare">
      <div class="freq-card t0-fadein" style="animation-delay:0.2s">
        <div class="freq-hz">1 GHz</div>
        <div class="freq-eq">= 每秒 <strong>10亿</strong> 个时钟周期</div>
        <div class="freq-bar"><div class="freq-bar-fill" style="width:33%;background:#fdcb6e"></div></div>
        <div class="freq-example">早期奔腾处理器</div>
      </div>
      <div class="freq-card t0-fadein" style="animation-delay:0.4s">
        <div class="freq-hz">3.5 GHz</div>
        <div class="freq-eq">= 每秒 <strong>35亿</strong> 个时钟周期</div>
        <div class="freq-bar"><div class="freq-bar-fill" style="width:70%;background:#FF9800"></div></div>
        <div class="freq-example">现代主流CPU</div>
      </div>
      <div class="freq-card t0-fadein" style="animation-delay:0.6s">
        <div class="freq-hz">5.0+ GHz</div>
        <div class="freq-eq">= 每秒 <strong>50亿+</strong> 个时钟周期</div>
        <div class="freq-bar"><div class="freq-bar-fill" style="width:100%;background:#e17055"></div></div>
        <div class="freq-example">高端超频处理器</div>
      </div>
    </div>
  </div>
  <div class="multicore-box">
    <div class="mc-title">🔄 多核 = 多个大脑同时工作</div>
    <div class="mc-cores" id="mcCores">
      <div class="mc-core mc-animate" style="animation-delay:0.2s"><span class="mc-core-label">核心1</span><div class="mc-core-pulse"></div></div>
      <div class="mc-core mc-animate" style="animation-delay:0.4s"><span class="mc-core-label">核心2</span><div class="mc-core-pulse"></div></div>
      <div class="mc-core mc-animate" style="animation-delay:0.6s"><span class="mc-core-label">核心3</span><div class="mc-core-pulse"></div></div>
      <div class="mc-core mc-animate" style="animation-delay:0.8s"><span class="mc-core-label">核心4</span><div class="mc-core-pulse"></div></div>
    </div>
    <div class="mc-hint">4核CPU = 可以<strong>同时</strong>执行4个任务！</div>
  </div>
  <div class="theory-callout">💡 Python的<code>多线程</code>受 GIL 限制，但<code>多进程</code>可以利用多核！现代CPU有4~16核甚至更多。</div>
</div>
<style>
.freq-demo{margin:0.5rem 0}
.freq-compare{display:flex;gap:0.5rem;flex-wrap:wrap}
.freq-card{flex:1;min-width:100px;background:rgba(13,13,26,0.8);border-radius:10px;padding:0.6rem;text-align:center;border:1px solid rgba(253,121,168,0.2);transition:transform 0.3s}
.freq-card:hover{transform:translateY(-2px)}
.freq-hz{font-size:1.1rem;font-weight:800;color:#FF9800}
.freq-eq{font-size:0.7rem;color:#c8d0e0;margin:0.2rem 0}
.freq-bar{height:4px;background:rgba(255,255,255,0.1);border-radius:2px;margin:0.3rem 0;overflow:hidden}
.freq-bar-fill{height:100%;border-radius:2px;transition:width 1s ease}
.freq-example{font-size:0.65rem;color:#ffb3d1}
.multicore-box{background:rgba(0,206,201,0.06);border:1px solid rgba(0,206,201,0.15);border-radius:12px;padding:0.8rem;margin-top:0.8rem}
.mc-title{font-weight:700;color:#00cec9;font-size:0.85rem;margin-bottom:0.5rem;text-align:center}
.mc-cores{display:flex;justify-content:center;gap:0.5rem;flex-wrap:wrap}
.mc-core{width:56px;height:56px;background:linear-gradient(135deg,#fd79a8,#ffb3d1);border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative}
.mc-core-label{font-size:0.65rem;font-weight:700;color:#fff}
.mc-core-pulse{position:absolute;inset:-3px;border-radius:14px;border:2px solid rgba(253,121,168,0.5);animation:mcPulse 2s ease-in-out infinite}
.mc-animate{opacity:0;animation:t0fi 0.5s ease forwards}
@keyframes mcPulse{0%,100%{opacity:0.3;transform:scale(1)}50%{opacity:0.8;transform:scale(1.05)}}
.mc-hint{text-align:center;font-size:0.75rem;color:#c8d0e0;margin-top:0.5rem}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 模拟一个简单CPU：定义指令列表包含LOAD、ADD、SUB操作，用循环逐条执行，并输出每步的寄存器状态。",
        hint: 'instructions = [\n    ("LOAD", "A", 10),\n    ("LOAD", "B", 3),\n    ("ADD", "A", "B"),\n    ("SUB", "A", "B"),\n    ("PRINT", "A", None)\n]\nregisters = {"A": 0, "B": 0}\nfor inst in instructions:\n    op = inst[0]\n    if op == "LOAD":\n        registers[inst[1]] = inst[2]\n    elif op == "ADD":\n        registers[inst[1]] = registers[inst[1]] + registers[inst[2]]\n    elif op == "SUB":\n        registers[inst[1]] = registers[inst[1]] - registers[inst[2]]\n    elif op == "PRINT":\n        print("结果:", registers[inst[1]])\n    print(f"  寄存器: {registers}")',
        template: '# 模拟CPU执行\ninstructions = [\n    ("LOAD", "A", 10),\n    ("LOAD", "B", 3),\n]\nregisters = {"A": 0, "B": 0}\n',
        check: function(output) { return output.indexOf("寄存器") !== -1 || output.indexOf("A") !== -1; }
      }
    },
    // ============================================================
    // 课程 0b-2：内存 —— 计算机的"工作台"
    // ============================================================
    {
      id: "0b-2",
      title: "内存 —— 计算机的工作台",
      xp: 20,
      code: '# 模拟内存的地址与存取\n\n# 用字典模拟一块256字节的内存\nmemory = {}\n\ndef mem_write(addr, value):\n    """向内存地址写入数据"""\n    memory[addr] = value\n    print(f"写入: 地址 0x{addr:04X} ← {value}")\n\ndef mem_read(addr):\n    """从内存地址读取数据"""\n    val = memory.get(addr, 0)\n    print(f"读取: 地址 0x{addr:04X} → {val}")\n    return val\n\n# 模拟变量存储\nprint("=== 模拟 x = 42 ===")\nmem_write(0x0100, 42)  # 变量x存在地址0x0100\n\nprint("\\n=== 模拟 y = x + 8 ===")\nx_val = mem_read(0x0100)  # 读取x\nresult = x_val + 8\nmem_write(0x0104, result)  # 存储y\n\nprint("\\n=== 内存状态 ===")\nfor addr in sorted(memory.keys()):\n    print(f"  0x{addr:04X}: {memory[addr]}")',
      steps: [
        {
          title: "内存：CPU的工作台",
          content: `
<p><strong>内存（RAM）</strong>就像你书桌上的工作台——存放你<strong>正在使用</strong>的数据！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📊 内存 vs 硬盘</div>
  <div class="mem-compare-grid">
    <div class="mem-cmp-card mem-cmp-ram t0-fadein" style="animation-delay:0.3s">
      <div class="mem-cmp-icon">⚡ 内存 RAM</div>
      <div class="mem-cmp-props">
        <div class="mem-prop"><span class="mem-prop-k">速度</span><span class="mem-prop-v" style="color:#00b894">极快 ~10ns</span></div>
        <div class="mem-prop"><span class="mem-prop-k">容量</span><span class="mem-prop-v">8~64 GB</span></div>
        <div class="mem-prop"><span class="mem-prop-k">断电</span><span class="mem-prop-v" style="color:#e17055">数据丢失 ❌</span></div>
        <div class="mem-prop"><span class="mem-prop-k">类比</span><span class="mem-prop-v">📋 工作台</span></div>
      </div>
    </div>
    <div class="mem-cmp-card mem-cmp-disk t0-fadein" style="animation-delay:0.5s">
      <div class="mem-cmp-icon">💽 硬盘 SSD/HDD</div>
      <div class="mem-cmp-props">
        <div class="mem-prop"><span class="mem-prop-k">速度</span><span class="mem-prop-v" style="color:#fdcb6e">较慢 ~0.1ms</span></div>
        <div class="mem-prop"><span class="mem-prop-k">容量</span><span class="mem-prop-v">256GB~4TB</span></div>
        <div class="mem-prop"><span class="mem-prop-k">断电</span><span class="mem-prop-v" style="color:#00b894">数据保留 ✅</span></div>
        <div class="mem-prop"><span class="mem-prop-k">类比</span><span class="mem-prop-v">📦 仓库</span></div>
      </div>
    </div>
  </div>
  <div class="theory-callout">💡 你运行 <code>x = 42</code> 时，<strong>42 就存在内存里</strong>！程序关闭后就没了。要永久保存需要写入<strong>硬盘</strong>（文件）。</div>
</div>
<style>
.mem-compare-grid{display:grid;grid-template-columns:1fr 1fr;gap:0.6rem;margin:0.5rem 0}
.mem-cmp-card{background:rgba(13,13,26,0.8);border-radius:12px;padding:0.7rem;border:1px solid rgba(253,121,168,0.2);transition:transform 0.3s}
.mem-cmp-card:hover{transform:translateY(-3px)}
.mem-cmp-ram{border-top:3px solid #00cec9}
.mem-cmp-disk{border-top:3px solid #fdcb6e}
.mem-cmp-icon{font-weight:800;font-size:0.85rem;color:#e8ecf2;margin-bottom:0.4rem}
.mem-cmp-props{display:flex;flex-direction:column;gap:0.3rem}
.mem-prop{display:flex;justify-content:space-between;font-size:0.75rem;padding:0.15rem 0;border-bottom:1px solid rgba(255,255,255,0.05)}
.mem-prop-k{color:#ffb3d1;font-weight:600}
.mem-prop-v{color:#c8d0e0}
</style>`
        },
        {
          title: "内存的地址与存取",
          content: `
<p>内存就像一排排<strong>编了号的格子</strong>，每个格子都有唯一的<strong>地址</strong>：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📦 内存地址可视化 — 点击格子查看</div>
  <div class="mem-grid-demo">
    <div class="mem-addr-row">
      <div class="mem-cell" onclick="this.classList.toggle('mc-open')" style="--mc-color:#fd79a8">
        <div class="mc-addr">0x00</div>
        <div class="mc-val">72</div>
        <div class="mc-char">'H'</div>
      </div>
      <div class="mem-cell" onclick="this.classList.toggle('mc-open')" style="--mc-color:#00cec9">
        <div class="mc-addr">0x01</div>
        <div class="mc-val">101</div>
        <div class="mc-char">'e'</div>
      </div>
      <div class="mem-cell" onclick="this.classList.toggle('mc-open')" style="--mc-color:#fd79a8">
        <div class="mc-addr">0x02</div>
        <div class="mc-val">108</div>
        <div class="mc-char">'l'</div>
      </div>
      <div class="mem-cell" onclick="this.classList.toggle('mc-open')" style="--mc-color:#fdcb6e">
        <div class="mc-addr">0x03</div>
        <div class="mc-val">108</div>
        <div class="mc-char">'l'</div>
      </div>
      <div class="mem-cell" onclick="this.classList.toggle('mc-open')" style="--mc-color:#00b894">
        <div class="mc-addr">0x04</div>
        <div class="mc-val">111</div>
        <div class="mc-char">'o'</div>
      </div>
      <div class="mem-cell" onclick="this.classList.toggle('mc-open')" style="--mc-color:#e17055">
        <div class="mc-addr">0x05</div>
        <div class="mc-val">0</div>
        <div class="mc-char">空</div>
      </div>
      <div class="mem-cell" onclick="this.classList.toggle('mc-open')" style="--mc-color:#ffb3d1">
        <div class="mc-addr">0x06</div>
        <div class="mc-val">42</div>
        <div class="mc-char">x=42</div>
      </div>
      <div class="mem-cell" onclick="this.classList.toggle('mc-open')" style="--mc-color:#74b9ff">
        <div class="mc-addr">0x07</div>
        <div class="mc-val">0</div>
        <div class="mc-char">空闲</div>
      </div>
    </div>
    <div class="mem-legend">
      <span class="mem-legend-item">🔵 地址 = 格子编号</span>
      <span class="mem-legend-item">🟢 值 = 格子中的数据</span>
      <span class="mem-legend-item">👆 点击展开</span>
    </div>
  </div>
  <div class="theory-callout">💡 <code>x = 42</code> 在内存中：Python选一个空闲地址（如0x06），把42写进去，并记住"x 指向 0x06"。</div>
</div>
<style>
.mem-grid-demo{background:rgba(13,13,26,0.5);border-radius:12px;padding:0.8rem}
.mem-addr-row{display:grid;grid-template-columns:repeat(8,1fr);gap:0.3rem}
.mem-cell{background:rgba(13,13,26,0.8);border-radius:8px;padding:0.4rem 0.2rem;text-align:center;border:1px solid rgba(253,121,168,0.15);cursor:pointer;transition:all 0.3s;overflow:hidden}
.mem-cell:hover{border-color:var(--mc-color);box-shadow:0 0 10px rgba(253,121,168,0.2)}
.mem-cell.mc-open{background:rgba(253,121,168,0.1);border-color:var(--mc-color)}
.mc-addr{font-family:monospace;font-size:0.6rem;color:#ffb3d1;font-weight:700}
.mc-val{font-size:0.85rem;font-weight:800;color:#e8ecf2;margin:0.15rem 0}
.mc-char{font-size:0.6rem;color:#00cec9;max-height:0;opacity:0;transition:all 0.3s;overflow:hidden}
.mem-cell.mc-open .mc-char{max-height:20px;opacity:1;margin-top:0.15rem}
.mem-legend{display:flex;justify-content:center;gap:0.8rem;margin-top:0.5rem;flex-wrap:wrap}
.mem-legend-item{font-size:0.65rem;color:#c8d0e0}
</style>`
        },
        {
          title: "栈与堆：内存的两大区域",
          content: `
<p>程序运行时，内存被分成几个不同的区域，最重要的是<strong>栈</strong>和<strong>堆</strong>：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🏗️ 内存布局</div>
  <div class="mem-layout">
    <div class="mem-section mem-code-sec t0-fadein" style="animation-delay:0.2s">
      <div class="ms-label">📝 代码段</div>
      <div class="ms-desc">存放程序指令</div>
    </div>
    <div class="mem-section mem-data-sec t0-fadein" style="animation-delay:0.3s">
      <div class="ms-label">📊 数据段</div>
      <div class="ms-desc">全局变量、常量</div>
    </div>
    <div class="mem-section mem-heap-sec t0-fadein" style="animation-delay:0.4s">
      <div class="ms-label">🌳 堆 Heap ↓</div>
      <div class="ms-desc">动态分配（列表、字典、对象）</div>
      <div class="ms-detail">向下增长 · 程序员管理</div>
    </div>
    <div class="mem-section mem-free-sec t0-fadein" style="animation-delay:0.5s">
      <div class="ms-label">⬜ 空闲区域</div>
    </div>
    <div class="mem-section mem-stack-sec t0-fadein" style="animation-delay:0.6s">
      <div class="ms-label">📚 栈 Stack ↑</div>
      <div class="ms-desc">函数调用、局部变量</div>
      <div class="ms-detail">向上增长 · 自动管理</div>
    </div>
  </div>
  <div class="theory-callout">💡 Python自动管理内存（垃圾回收），你不需要手动释放！但了解这些能帮你写出更高效的代码。</div>
</div>
<style>
.mem-layout{display:flex;flex-direction:column;gap:0.2rem;margin:0.5rem 0;max-width:300px;margin-left:auto;margin-right:auto}
.mem-section{border-radius:8px;padding:0.5rem 0.7rem;text-align:center;transition:all 0.3s;cursor:default;border:1px solid transparent}
.mem-section:hover{transform:scale(1.02);border-color:rgba(255,255,255,0.15)}
.ms-label{font-weight:800;font-size:0.8rem;color:#e8ecf2}
.ms-desc{font-size:0.7rem;color:#c8d0e0;margin-top:0.15rem}
.ms-detail{font-size:0.6rem;color:#ffb3d1;margin-top:0.1rem;font-style:italic}
.mem-code-sec{background:rgba(253,121,168,0.15);border-left:3px solid #fd79a8}
.mem-data-sec{background:rgba(0,206,201,0.12);border-left:3px solid #00cec9}
.mem-heap-sec{background:rgba(253,203,110,0.12);border-left:3px solid #fdcb6e;min-height:50px}
.mem-free-sec{background:rgba(255,255,255,0.03);border-left:3px solid rgba(255,255,255,0.1);min-height:30px}
.mem-stack-sec{background:rgba(253,121,168,0.12);border-left:3px solid #fd79a8;min-height:50px}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 用字典模拟内存：实现 mem_write(addr, val) 和 mem_read(addr) 函数，存储3个变量并读取它们。",
        hint: 'memory = {}\n\ndef mem_write(addr, val):\n    memory[addr] = val\n    print(f"写入 0x{addr:04X} = {val}")\n\ndef mem_read(addr):\n    val = memory.get(addr, 0)\n    print(f"读取 0x{addr:04X} = {val}")\n    return val\n\nmem_write(0x0000, 100)\nmem_write(0x0004, 200)\nmem_write(0x0008, 300)\n\ntotal = mem_read(0x0000) + mem_read(0x0004) + mem_read(0x0008)\nprint("总和:", total)',
        template: '# 模拟内存读写\nmemory = {}\n\ndef mem_write(addr, val):\n    pass\n\ndef mem_read(addr):\n    pass\n',
        check: function(output) { return output.indexOf("写入") !== -1 && output.indexOf("读取") !== -1; }
      }
    },
    // ============================================================
    // 课程 0b-3：存储体系 —— 金字塔结构
    // ============================================================
    {
      id: "0b-3",
      title: "存储体系 —— 速度与容量的权衡",
      xp: 20,
      code: '# 模拟存储层次结构的访问速度差异\n\nstorage_levels = [\n    ("寄存器", 0.3, "64B", "CPU内部"),\n    ("L1缓存", 1, "64KB", "CPU内部"),\n    ("L2缓存", 4, "256KB", "CPU内部"),\n    ("L3缓存", 12, "8MB", "CPU共享"),\n    ("内存RAM", 100, "16GB", "主板插槽"),\n    ("SSD固态", 100000, "1TB", "硬盘位"),\n    ("HDD机械", 10000000, "4TB", "硬盘位")\n]\n\nprint("=== 存储层次金字塔 ===")\nfor name, ns, size, loc in storage_levels:\n    if ns < 1000:\n        delay = str(ns) + "ns"\n    elif ns < 1000000:\n        delay = str(int(ns/1000)) + "us"\n    else:\n        delay = str(int(ns/1000000)) + "ms"\n    bar = "#" * max(1, int(50 * 0.3 / ns * 1000))\n    print(f"  {name:6s} | {delay:8s} | {size:5s} | {bar}")\n\nprint(f"\\n速度差距:")\nprint(f"  寄存器 vs 内存: {int(100/0.3)}倍")\nprint(f"  内存 vs SSD: {int(100000/100)}倍")',
      steps: [
        {
          title: "存储金字塔",
          content: `
<p>计算机存储系统像一座<strong>金字塔</strong>：越靠近CPU越快，但容量越小、价格越贵！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🏔️ 存储层次金字塔 — 悬停查看详情</div>
  <div class="storage-pyramid">
    <div class="sp-level sp-reg t0-fadein" style="animation-delay:0.2s;--sp-w:18%">
      <div class="sp-name">寄存器</div>
      <div class="sp-info">~0.3ns · 几十字节</div>
      <div class="sp-tip">CPU内部的超高速存储</div>
    </div>
    <div class="sp-level sp-l1 t0-fadein" style="animation-delay:0.35s;--sp-w:30%">
      <div class="sp-name">L1 缓存</div>
      <div class="sp-info">~1ns · 64KB</div>
      <div class="sp-tip">每个核心独享</div>
    </div>
    <div class="sp-level sp-l2 t0-fadein" style="animation-delay:0.5s;--sp-w:44%">
      <div class="sp-name">L2 缓存</div>
      <div class="sp-info">~4ns · 256KB</div>
      <div class="sp-tip">每个核心独享</div>
    </div>
    <div class="sp-level sp-l3 t0-fadein" style="animation-delay:0.65s;--sp-w:58%">
      <div class="sp-name">L3 缓存</div>
      <div class="sp-info">~12ns · 8-32MB</div>
      <div class="sp-tip">所有核心共享</div>
    </div>
    <div class="sp-level sp-ram t0-fadein" style="animation-delay:0.8s;--sp-w:74%">
      <div class="sp-name">内存 RAM</div>
      <div class="sp-info">~100ns · 8-64GB</div>
      <div class="sp-tip">程序运行空间</div>
    </div>
    <div class="sp-level sp-ssd t0-fadein" style="animation-delay:0.95s;--sp-w:88%">
      <div class="sp-name">SSD 固态硬盘</div>
      <div class="sp-info">~0.1ms · 256GB-4TB</div>
      <div class="sp-tip">永久存储</div>
    </div>
    <div class="sp-level sp-hdd t0-fadein" style="animation-delay:1.1s;--sp-w:100%">
      <div class="sp-name">HDD 机械硬盘</div>
      <div class="sp-info">~10ms · 1-20TB</div>
      <div class="sp-tip">大容量廉价存储</div>
    </div>
    <div class="sp-axis">
      <div class="sp-axis-item"><span>⬆️ 更快</span><span>更贵</span><span>更小</span></div>
      <div class="sp-axis-item"><span>⬇️ 更慢</span><span>更便宜</span><span>更大</span></div>
    </div>
  </div>
  <div class="theory-callout">💡 <strong>缓存命中率</strong>越高，CPU越少等待！这就是为什么程序的<strong>局部性原理</strong>很重要。</div>
</div>
<style>
.storage-pyramid{display:flex;flex-direction:column;align-items:center;gap:0.2rem;margin:0.5rem 0;padding:0.5rem}
.sp-level{width:var(--sp-w);background:rgba(13,13,26,0.8);border-radius:6px;padding:0.35rem 0.5rem;text-align:center;transition:all 0.3s;cursor:default;position:relative;border:1px solid transparent}
.sp-level:hover{transform:scale(1.03);z-index:1}
.sp-level:hover .sp-tip{opacity:1;max-height:20px;margin-top:0.2rem}
.sp-reg{background:linear-gradient(135deg,rgba(225,112,85,0.2),rgba(225,112,85,0.1));border-color:rgba(225,112,85,0.3)}
.sp-reg:hover{box-shadow:0 0 15px rgba(225,112,85,0.3)}
.sp-l1{background:linear-gradient(135deg,rgba(253,121,168,0.18),rgba(253,121,168,0.08));border-color:rgba(253,121,168,0.3)}
.sp-l1:hover{box-shadow:0 0 15px rgba(253,121,168,0.3)}
.sp-l2{background:linear-gradient(135deg,rgba(253,203,110,0.18),rgba(253,203,110,0.08));border-color:rgba(253,203,110,0.3)}
.sp-l2:hover{box-shadow:0 0 15px rgba(253,203,110,0.3)}
.sp-l3{background:linear-gradient(135deg,rgba(255,152,0,0.18),rgba(255,152,0,0.08));border-color:rgba(255,152,0,0.3)}
.sp-l3:hover{box-shadow:0 0 15px rgba(255,152,0,0.3)}
.sp-ram{background:linear-gradient(135deg,rgba(0,206,201,0.18),rgba(0,206,201,0.08));border-color:rgba(0,206,201,0.3)}
.sp-ram:hover{box-shadow:0 0 15px rgba(0,206,201,0.3)}
.sp-ssd{background:linear-gradient(135deg,rgba(253,121,168,0.18),rgba(253,121,168,0.08));border-color:rgba(253,121,168,0.3)}
.sp-ssd:hover{box-shadow:0 0 15px rgba(253,121,168,0.3)}
.sp-hdd{background:linear-gradient(135deg,rgba(255,179,209,0.15),rgba(255,179,209,0.06));border-color:rgba(255,179,209,0.25)}
.sp-hdd:hover{box-shadow:0 0 15px rgba(255,179,209,0.3)}
.sp-name{font-weight:800;font-size:0.75rem;color:#e8ecf2}
.sp-info{font-size:0.65rem;color:#c8d0e0;margin-top:0.1rem}
.sp-tip{font-size:0.6rem;color:#ffb3d1;opacity:0;max-height:0;overflow:hidden;transition:all 0.3s}
.sp-axis{display:flex;justify-content:space-between;width:100%;margin-top:0.5rem;padding:0 0.5rem}
.sp-axis-item{display:flex;flex-direction:column;font-size:0.6rem;color:#c8d0e0;gap:0.1rem}
.sp-axis-item span{line-height:1.3}
</style>`
        },
        {
          title: "缓存的工作原理",
          content: `
<p><strong>缓存（Cache）</strong>是CPU和内存之间的"快捷通道"，利用<strong>局部性原理</strong>加速访问：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎯 缓存命中 vs 缓存未命中</div>
  <div class="cache-demo">
    <div class="cache-scenario cache-hit t0-fadein" style="animation-delay:0.3s">
      <div class="cache-sc-title" style="color:#00b894">✅ 缓存命中 (Cache Hit)</div>
      <div class="cache-flow">
        <div class="cache-node cn-cpu">CPU</div>
        <div class="cache-arrow" style="color:#00b894">→ 请求 →</div>
        <div class="cache-node cn-cache" style="border-color:#00b894">缓存<br><small>找到了!</small></div>
        <div class="cache-arrow" style="color:#00b894">→ 返回 →</div>
        <div class="cache-node cn-result">⚡ 1ns</div>
      </div>
    </div>
    <div class="cache-scenario cache-miss t0-fadein" style="animation-delay:0.6s">
      <div class="cache-sc-title" style="color:#e17055">❌ 缓存未命中 (Cache Miss)</div>
      <div class="cache-flow">
        <div class="cache-node cn-cpu">CPU</div>
        <div class="cache-arrow">→ 请求 →</div>
        <div class="cache-node cn-cache" style="border-color:#e17055">缓存<br><small>没有!</small></div>
        <div class="cache-arrow">→ 去内存 →</div>
        <div class="cache-node cn-ram">内存</div>
        <div class="cache-arrow">→</div>
        <div class="cache-node cn-result">🐢 100ns</div>
      </div>
    </div>
  </div>
  <div class="locality-box">
    <div class="loc-title">📐 局部性原理</div>
    <div class="loc-items">
      <div class="loc-item t0-fadein" style="animation-delay:0.4s">
        <span class="loc-icon">⏰</span>
        <div><strong>时间局部性</strong><br><small>最近用过的数据可能很快再用</small></div>
      </div>
      <div class="loc-item t0-fadein" style="animation-delay:0.6s">
        <span class="loc-icon">📍</span>
        <div><strong>空间局部性</strong><br><small>相邻地址的数据可能一起被用</small></div>
      </div>
    </div>
  </div>
  <div class="theory-callout">💡 Python的<code>for i in range(n)</code>循环就很好地利用了局部性！连续访问列表元素比随机跳跃访问快得多。</div>
</div>
<style>
.cache-demo{display:flex;flex-direction:column;gap:0.5rem;margin:0.5rem 0}
.cache-scenario{background:rgba(13,13,26,0.6);border-radius:10px;padding:0.6rem}
.cache-sc-title{font-weight:700;font-size:0.8rem;margin-bottom:0.4rem}
.cache-flow{display:flex;align-items:center;gap:0.3rem;flex-wrap:wrap;justify-content:center}
.cache-node{background:rgba(13,13,26,0.8);border:1px solid rgba(253,121,168,0.3);border-radius:8px;padding:0.3rem 0.5rem;font-size:0.75rem;font-weight:700;color:#e8ecf2;text-align:center;min-width:44px}
.cache-arrow{font-size:0.65rem;color:#c8d0e0}
.cn-cpu{background:linear-gradient(135deg,rgba(253,121,168,0.2),rgba(253,121,168,0.1));border-color:#fd79a8}
.cn-cache{background:linear-gradient(135deg,rgba(0,206,201,0.15),rgba(0,206,201,0.05))}
.cn-ram{background:linear-gradient(135deg,rgba(253,203,110,0.15),rgba(253,203,110,0.05));border-color:#fdcb6e}
.cn-result{background:transparent;border:none;font-size:0.85rem}
.locality-box{background:rgba(0,206,201,0.06);border:1px solid rgba(0,206,201,0.15);border-radius:10px;padding:0.6rem;margin-top:0.5rem}
.loc-title{font-weight:700;color:#00cec9;font-size:0.8rem;margin-bottom:0.4rem;text-align:center}
.loc-items{display:grid;grid-template-columns:1fr 1fr;gap:0.5rem}
.loc-item{display:flex;align-items:flex-start;gap:0.4rem;font-size:0.75rem;color:#e8ecf2}
.loc-icon{font-size:1.1rem;flex-shrink:0}
.loc-item small{color:#c8d0e0}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 模拟缓存查找：用字典作为缓存，实现带缓存的数据读取函数，统计命中率。",
        hint: 'cache = {}\nmemory = {i: i * 10 for i in range(20)}\nhits = 0\nmisses = 0\n\ndef cached_read(addr):\n    global hits, misses\n    if addr in cache:\n        hits = hits + 1\n        print(f"[命中] 地址{addr} = {cache[addr]}")\n        return cache[addr]\n    else:\n        misses = misses + 1\n        val = memory.get(addr, 0)\n        cache[addr] = val\n        print(f"[未命中] 地址{addr} = {val}")\n        return val\n\nfor addr in [1, 2, 3, 1, 2, 1, 5, 5, 3]:\n    cached_read(addr)\n\ntotal = hits + misses\nprint(f"\\n命中率: {hits}/{total} = {int(hits*100/total)}%")',
        template: '# 模拟缓存\ncache = {}\nmemory = {i: i * 10 for i in range(20)}\n',
        check: function(output) { return output.indexOf("命中") !== -1; }
      }
    },
    // ============================================================
    // 课程 0b-4：总线与I/O —— 计算机的"神经系统"
    // ============================================================
    {
      id: "0b-4",
      title: "总线与I/O —— 信息高速公路",
      xp: 20,
      code: '# 模拟计算机总线通信\n\nclass Bus:\n    def __init__(self):\n        self.log = []\n    def transfer(self, src, dst, data):\n        msg = src + " -> " + dst + ": " + str(data)\n        self.log.append(msg)\n        print("[总线] " + msg)\n        return data\n\nbus = Bus()\n\nprint("=== CPU读取内存 ===")\nbus.transfer("CPU", "内存", "读取0x1000")\nbus.transfer("内存", "CPU", "数据:42")\n\nprint("\\n=== 键盘输入 ===")\nbus.transfer("键盘", "CPU", "按键:Enter")\n\nprint("\\n=== 显示输出 ===")\nbus.transfer("CPU", "显卡", "渲染像素")\nbus.transfer("显卡", "显示器", "显示画面")\n\nprint(f"\\n共 {len(bus.log)} 次总线传输")',
      steps: [
        {
          title: "总线：连接一切的高速公路",
          content: `
<p>CPU、内存、硬盘、键盘鼠标……它们是怎么互相通信的？答案是<strong>总线（Bus）</strong>！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🛣️ 计算机内部的"公路系统"</div>
  <div class="bus-diagram">
    <div class="bus-devices-top">
      <div class="bus-device bd-cpu t0-fadein" style="animation-delay:0.2s">
        <div class="bd-icon">🧠</div>
        <div class="bd-name">CPU</div>
      </div>
      <div class="bus-device bd-ram t0-fadein" style="animation-delay:0.3s">
        <div class="bd-icon">📊</div>
        <div class="bd-name">内存</div>
      </div>
      <div class="bus-device bd-gpu t0-fadein" style="animation-delay:0.4s">
        <div class="bd-icon">🎮</div>
        <div class="bd-name">显卡</div>
      </div>
    </div>
    <div class="bus-lines">
      <div class="bus-line bl-data t0-fadein" style="animation-delay:0.6s">
        <div class="bl-label">数据总线 — 传送数据</div>
        <div class="bl-bar"><div class="bl-pulse"></div></div>
      </div>
      <div class="bus-line bl-addr t0-fadein" style="animation-delay:0.7s">
        <div class="bl-label">地址总线 — 指定位置</div>
        <div class="bl-bar"><div class="bl-pulse" style="animation-delay:0.5s"></div></div>
      </div>
      <div class="bus-line bl-ctrl t0-fadein" style="animation-delay:0.8s">
        <div class="bl-label">控制总线 — 发送指令</div>
        <div class="bl-bar"><div class="bl-pulse" style="animation-delay:1s"></div></div>
      </div>
    </div>
    <div class="bus-devices-bottom">
      <div class="bus-device bd-disk t0-fadein" style="animation-delay:0.5s">
        <div class="bd-icon">💽</div>
        <div class="bd-name">硬盘</div>
      </div>
      <div class="bus-device bd-kb t0-fadein" style="animation-delay:0.55s">
        <div class="bd-icon">⌨️</div>
        <div class="bd-name">键盘</div>
      </div>
      <div class="bus-device bd-net t0-fadein" style="animation-delay:0.6s">
        <div class="bd-icon">🌐</div>
        <div class="bd-name">网卡</div>
      </div>
      <div class="bus-device bd-usb t0-fadein" style="animation-delay:0.65s">
        <div class="bd-icon">🔌</div>
        <div class="bd-name">USB</div>
      </div>
    </div>
  </div>
  <div class="theory-callout">💡 三种总线各司其职：<strong>地址总线</strong>决定"去哪里"，<strong>数据总线</strong>负责"送什么"，<strong>控制总线</strong>决定"做什么"！</div>
</div>
<style>
.bus-diagram{background:rgba(13,13,26,0.5);border-radius:12px;padding:0.8rem;margin:0.5rem 0}
.bus-devices-top,.bus-devices-bottom{display:flex;justify-content:center;gap:0.6rem;flex-wrap:wrap}
.bus-device{background:rgba(13,13,26,0.8);border-radius:10px;padding:0.4rem 0.6rem;text-align:center;border:1px solid rgba(253,121,168,0.2);transition:all 0.3s;min-width:55px}
.bus-device:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(253,121,168,0.2)}
.bd-icon{font-size:1.3rem}
.bd-name{font-size:0.7rem;font-weight:700;color:#e8ecf2;margin-top:0.1rem}
.bd-cpu{border-color:rgba(253,121,168,0.4)}
.bd-ram{border-color:rgba(0,206,201,0.4)}
.bd-gpu{border-color:rgba(253,121,168,0.4)}
.bd-disk{border-color:rgba(253,203,110,0.4)}
.bus-lines{margin:0.5rem 0;display:flex;flex-direction:column;gap:0.3rem}
.bus-line{background:rgba(13,13,26,0.6);border-radius:6px;padding:0.3rem 0.5rem}
.bl-label{font-size:0.7rem;color:#c8d0e0;margin-bottom:0.2rem}
.bl-bar{height:3px;border-radius:2px;overflow:hidden;position:relative}
.bl-data .bl-bar{background:rgba(253,121,168,0.2)}
.bl-addr .bl-bar{background:rgba(0,206,201,0.2)}
.bl-ctrl .bl-bar{background:rgba(255,152,0,0.2)}
.bl-pulse{position:absolute;top:0;left:-30%;width:30%;height:100%;border-radius:2px;animation:blPulse 2s ease-in-out infinite}
.bl-data .bl-pulse{background:linear-gradient(90deg,transparent,#fd79a8,transparent)}
.bl-addr .bl-pulse{background:linear-gradient(90deg,transparent,#00cec9,transparent)}
.bl-ctrl .bl-pulse{background:linear-gradient(90deg,transparent,#FF9800,transparent)}
@keyframes blPulse{0%{left:-30%}100%{left:100%}}
</style>`
        },
        {
          title: "I/O设备与中断机制",
          content: `
<p>键盘按下一个键，计算机怎么知道的？靠的是<strong>中断（Interrupt）</strong>！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔔 中断机制 — 点击播放</div>
  <div class="interrupt-demo">
    <div class="int-timeline">
      <div class="int-phase" id="ip1">
        <div class="int-icon">🧠</div>
        <div class="int-text">CPU正在执行任务A...</div>
      </div>
      <div class="int-phase" id="ip2">
        <div class="int-icon">⌨️</div>
        <div class="int-text">键盘：发出中断信号！</div>
      </div>
      <div class="int-phase" id="ip3">
        <div class="int-icon">⏸️</div>
        <div class="int-text">CPU暂停任务A，保存现场</div>
      </div>
      <div class="int-phase" id="ip4">
        <div class="int-icon">🔧</div>
        <div class="int-text">CPU处理键盘输入</div>
      </div>
      <div class="int-phase" id="ip5">
        <div class="int-icon">▶️</div>
        <div class="int-text">恢复现场，继续任务A</div>
      </div>
    </div>
  </div>
  <button class="theory-btn" onclick="(function(){var phases=['ip1','ip2','ip3','ip4','ip5'];phases.forEach(function(id){document.getElementById(id).classList.remove('ip-active','ip-done');});var d=0;phases.forEach(function(id,i){setTimeout(function(){if(i>0)document.getElementById(phases[i-1]).classList.replace('ip-active','ip-done');document.getElementById(id).classList.add('ip-active');},d);d+=900;});setTimeout(function(){document.getElementById(phases[4]).classList.replace('ip-active','ip-done');},d);})()">▶ 播放中断过程</button>
  <div class="io-types-box">
    <div class="io-title">🔌 常见I/O设备</div>
    <div class="io-grid">
      <div class="io-card t0-fadein" style="animation-delay:0.2s"><span class="io-emoji">⌨️</span><span class="io-name">键盘</span><span class="io-type">输入</span></div>
      <div class="io-card t0-fadein" style="animation-delay:0.3s"><span class="io-emoji">🖱️</span><span class="io-name">鼠标</span><span class="io-type">输入</span></div>
      <div class="io-card t0-fadein" style="animation-delay:0.4s"><span class="io-emoji">🖥️</span><span class="io-name">显示器</span><span class="io-type">输出</span></div>
      <div class="io-card t0-fadein" style="animation-delay:0.5s"><span class="io-emoji">🔊</span><span class="io-name">音箱</span><span class="io-type">输出</span></div>
      <div class="io-card t0-fadein" style="animation-delay:0.6s"><span class="io-emoji">💽</span><span class="io-name">硬盘</span><span class="io-type">输入/输出</span></div>
      <div class="io-card t0-fadein" style="animation-delay:0.7s"><span class="io-emoji">🌐</span><span class="io-name">网卡</span><span class="io-type">输入/输出</span></div>
    </div>
  </div>
  <div class="theory-callout">💡 Python的 <code>input()</code> 函数就触发了I/O操作：程序暂停，等待键盘输入，利用了中断机制！</div>
</div>
<style>
.interrupt-demo{background:rgba(13,13,26,0.5);border-radius:10px;padding:0.6rem;margin:0.5rem 0}
.int-timeline{display:flex;flex-direction:column;gap:0.3rem}
.int-phase{display:flex;align-items:center;gap:0.5rem;padding:0.35rem 0.5rem;border-radius:8px;border:1px solid transparent;transition:all 0.4s;background:rgba(13,13,26,0.4)}
.int-phase.ip-active{background:rgba(255,152,0,0.1);border-color:rgba(255,152,0,0.4);transform:scale(1.02);box-shadow:0 0 12px rgba(255,152,0,0.15)}
.int-phase.ip-done{background:rgba(0,184,148,0.06);border-color:rgba(0,184,148,0.2);opacity:0.7}
.int-icon{font-size:1.1rem;flex-shrink:0}
.int-text{font-size:0.8rem;color:#e8ecf2}
.io-types-box{background:rgba(253,121,168,0.06);border:1px solid rgba(253,121,168,0.15);border-radius:10px;padding:0.6rem;margin-top:0.6rem}
.io-title{font-weight:700;color:#ffb3d1;font-size:0.8rem;margin-bottom:0.4rem;text-align:center}
.io-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0.3rem}
.io-card{background:rgba(13,13,26,0.6);border-radius:8px;padding:0.35rem;display:flex;flex-direction:column;align-items:center;gap:0.1rem;transition:transform 0.2s;cursor:default}
.io-card:hover{transform:scale(1.05)}
.io-emoji{font-size:1.1rem}
.io-name{font-size:0.7rem;font-weight:700;color:#e8ecf2}
.io-type{font-size:0.6rem;color:#ffb3d1}
</style>`
        },
        {
          title: "冯·诺依曼体系结构总览",
          content: `
<p>现代计算机几乎都遵循<strong>冯·诺依曼体系结构</strong>（1945年提出）：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🏛️ 冯·诺依曼体系结构</div>
  <div class="vn-arch">
    <div class="vn-row vn-row-top">
      <div class="vn-block vn-input t0-fadein" style="animation-delay:0.2s">
        <div class="vn-icon">📥</div>
        <div class="vn-label">输入设备</div>
        <div class="vn-eg">键盘 鼠标 摄像头</div>
      </div>
      <div class="vn-arrow-h">→</div>
      <div class="vn-block vn-mem t0-fadein" style="animation-delay:0.4s">
        <div class="vn-icon">📊</div>
        <div class="vn-label">存储器</div>
        <div class="vn-eg">内存RAM</div>
        <div class="vn-highlight">程序和数据<br>统一存储！</div>
      </div>
      <div class="vn-arrow-h">→</div>
      <div class="vn-block vn-output t0-fadein" style="animation-delay:0.6s">
        <div class="vn-icon">📤</div>
        <div class="vn-label">输出设备</div>
        <div class="vn-eg">显示器 打印机</div>
      </div>
    </div>
    <div class="vn-row vn-row-mid">
      <div class="vn-arrow-v">↕</div>
    </div>
    <div class="vn-row vn-row-bot">
      <div class="vn-block vn-cpu t0-fadein" style="animation-delay:0.5s">
        <div class="vn-icon">🧠</div>
        <div class="vn-label">CPU（运算器 + 控制器）</div>
        <div class="vn-eg">计算 · 控制 · 协调</div>
      </div>
    </div>
    <div class="vn-principles">
      <div class="vn-principle t0-fadein" style="animation-delay:0.7s">
        <span class="vn-p-num">①</span>
        <span>程序和数据用<strong>二进制</strong>表示</span>
      </div>
      <div class="vn-principle t0-fadein" style="animation-delay:0.8s">
        <span class="vn-p-num">②</span>
        <span>程序<strong>存储</strong>在存储器中</span>
      </div>
      <div class="vn-principle t0-fadein" style="animation-delay:0.9s">
        <span class="vn-p-num">③</span>
        <span>五大部件协同工作</span>
      </div>
      <div class="vn-principle t0-fadein" style="animation-delay:1.0s">
        <span class="vn-p-num">④</span>
        <span>以<strong>运算器</strong>为中心</span>
      </div>
    </div>
  </div>
  <div class="theory-callout" style="background:rgba(0,184,148,0.08);border-left-color:#00b894">🎓 <strong>恭喜你完成了计算机组成原理！</strong>现在你知道了：CPU如何思考、内存如何存储、缓存如何加速、总线如何传输。这些硬件知识会让你更深入地理解Python程序的运行！</div>
</div>
<style>
.vn-arch{background:rgba(13,13,26,0.5);border-radius:12px;padding:0.8rem;margin:0.5rem 0}
.vn-row{display:flex;align-items:center;justify-content:center;gap:0.4rem;flex-wrap:wrap}
.vn-row-mid{margin:0.3rem 0}
.vn-block{background:rgba(13,13,26,0.8);border-radius:10px;padding:0.5rem 0.6rem;text-align:center;border:1px solid rgba(253,121,168,0.2);transition:all 0.3s;min-width:80px}
.vn-block:hover{transform:translateY(-2px);box-shadow:0 4px 15px rgba(253,121,168,0.2)}
.vn-icon{font-size:1.2rem}
.vn-label{font-weight:800;font-size:0.75rem;color:#e8ecf2;margin-top:0.15rem}
.vn-eg{font-size:0.6rem;color:#c8d0e0;margin-top:0.1rem}
.vn-highlight{font-size:0.6rem;color:#FF9800;font-weight:700;margin-top:0.2rem;background:rgba(255,152,0,0.08);padding:0.15rem 0.3rem;border-radius:4px}
.vn-input{border-color:rgba(0,206,201,0.4)}
.vn-mem{border-color:rgba(253,203,110,0.4)}
.vn-output{border-color:rgba(253,121,168,0.4)}
.vn-cpu{border-color:rgba(253,121,168,0.4);min-width:200px}
.vn-arrow-h{font-size:1.1rem;color:#FF9800;font-weight:700}
.vn-arrow-v{font-size:1.1rem;color:#FF9800;font-weight:700;text-align:center}
.vn-principles{display:grid;grid-template-columns:1fr 1fr;gap:0.3rem;margin-top:0.6rem}
.vn-principle{display:flex;align-items:center;gap:0.3rem;font-size:0.72rem;color:#c8d0e0;background:rgba(253,121,168,0.06);padding:0.3rem 0.4rem;border-radius:6px}
.vn-p-num{background:linear-gradient(135deg,#fd79a8,#ffb3d1);color:#fff;width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.6rem;font-weight:800;flex-shrink:0}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 模拟总线通信：创建Bus类，支持CPU向内存读写和向IO设备发送指令，打印每次传输日志。",
        hint: 'class Bus:\n    def __init__(self):\n        self.log = []\n    def transfer(self, src, dst, data):\n        msg = src + " -> " + dst + ": " + str(data)\n        self.log.append(msg)\n        print("[总线] " + msg)\n\nbus = Bus()\nbus.transfer("CPU", "内存", "读取地址0x1000")\nbus.transfer("内存", "CPU", "数据: 42")\nbus.transfer("CPU", "显卡", "显示像素数据")\nbus.transfer("键盘", "CPU", "按键: Enter")\n\nprint("\\n传输记录:")\nfor i, log in enumerate(bus.log):\n    print(f"  {i+1}. {log}")',
        template: '# 模拟总线通信\nclass Bus:\n    def __init__(self):\n        self.log = []\n',
        check: function(output) { return output.indexOf("总线") !== -1 || output.indexOf("->") !== -1; }
      }
    }
  ]
};

registerChapter('theory', CHAPTER0B);
