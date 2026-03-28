// 卷一 · 理论 - 内核
const CHAPTER_V1_KERNEL = {
  chapter: "第六章：内核",
  chapterNum: 6,
  icon: "🔧",
  lessons: [
    {
      id: "v1-kernel-1",
      title: "内核 —— 操作系统的核心",
      xp: 20,
      code: '# 模拟内核的系统调用\n\n# 系统调用表\nsyscall_table = {\n    1: ("sys_write", "写入数据到文件/屏幕"),\n    2: ("sys_read", "从文件/键盘读取数据"),\n    3: ("sys_open", "打开一个文件"),\n    4: ("sys_close", "关闭一个文件"),\n    5: ("sys_fork", "创建子进程"),\n    6: ("sys_exec", "执行新程序"),\n    7: ("sys_malloc", "申请内存"),\n    8: ("sys_free", "释放内存"),\n}\n\nprint("=== 内核系统调用表 ===")\nfor num, (name, desc) in syscall_table.items():\n    print(f"  #{num:2d}  {name:<12s}  {desc}")\n\n# 模拟用户程序通过系统调用与内核交互\nprint("\\n=== 模拟 print(\\"Hello\\") 的内核之旅 ===")\nsteps = [\n    "1. 用户程序调用 print(\\"Hello\\")",\n    "2. Python解释器将其转换为 sys_write 系统调用",\n    "3. CPU从用户态切换到内核态",\n    "4. 内核找到 sys_write 处理函数",\n    "5. 内核将 \\"Hello\\" 写入标准输出缓冲区",\n    "6. 内核通知显示设备驱动",\n    "7. CPU切回用户态，继续执行",\n]\nfor s in steps:\n    print(f"  → {s}")',
      steps: [
        {
          title: "内核：操作系统的心脏",
          content: `
<p><strong>内核（Kernel）</strong>是操作系统最核心的部分，它直接管理硬件资源，运行在最高权限级别。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔧 内核的核心职责</div>
  <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:0.8rem;margin:1rem 0">
    <div class="t0-fadein" style="animation-delay:0.2s;background:rgba(253,121,168,0.12);border:1px solid rgba(253,121,168,0.25);border-radius:12px;padding:1rem">
      <div style="font-size:1.5rem;margin-bottom:0.3rem">⚡</div>
      <div style="font-weight:800;color:#fd79a8;font-size:0.85rem">进程管理</div>
      <div style="font-size:0.7rem;color:rgba(255,255,255,0.5);margin-top:0.3rem">创建、调度、终止进程<br>管理进程间通信</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.4s;background:rgba(0,206,201,0.12);border:1px solid rgba(0,206,201,0.25);border-radius:12px;padding:1rem">
      <div style="font-size:1.5rem;margin-bottom:0.3rem">📦</div>
      <div style="font-weight:800;color:#00cec9;font-size:0.85rem">内存管理</div>
      <div style="font-size:0.7rem;color:rgba(255,255,255,0.5);margin-top:0.3rem">虚拟内存映射<br>页面置换算法</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.6s;background:rgba(255,152,0,0.12);border:1px solid rgba(255,152,0,0.25);border-radius:12px;padding:1rem">
      <div style="font-size:1.5rem;margin-bottom:0.3rem">📁</div>
      <div style="font-weight:800;color:#FF9800;font-size:0.85rem">文件系统</div>
      <div style="font-size:0.7rem;color:rgba(255,255,255,0.5);margin-top:0.3rem">文件读写、目录管理<br>权限控制</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.8s;background:rgba(253,121,168,0.12);border:1px solid rgba(253,121,168,0.25);border-radius:12px;padding:1rem">
      <div style="font-size:1.5rem;margin-bottom:0.3rem">🔌</div>
      <div style="font-weight:800;color:#fd79a8;font-size:0.85rem">设备驱动</div>
      <div style="font-size:0.7rem;color:rgba(255,255,255,0.5);margin-top:0.3rem">与硬件设备通信<br>中断处理</div>
    </div>
  </div>
</div>`
        },
        {
          title: "用户态与内核态",
          content: `
<p>CPU有两种运行模式：<strong>用户态</strong>（权限低）和<strong>内核态</strong>（权限高）。</p>
<p>你的程序运行在用户态，需要访问硬件时通过<strong>系统调用</strong>切换到内核态。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔄 系统调用流程动画</div>
  <div id="syscallDemo" style="position:relative;padding:1rem;min-height:200px">
    <div style="display:flex;gap:1rem;align-items:stretch">
      <div style="flex:1;background:rgba(0,206,201,0.1);border:1px solid rgba(0,206,201,0.3);border-radius:12px;padding:0.8rem;text-align:center">
        <div style="font-weight:800;color:#00cec9;margin-bottom:0.5rem">👤 用户态 (Ring 3)</div>
        <div id="syscallUserApp" style="background:rgba(255,255,255,0.05);border-radius:8px;padding:0.5rem;font-size:0.75rem;margin-bottom:0.5rem">print("Hello")</div>
        <div style="font-size:0.65rem;color:rgba(255,255,255,0.4)">权限受限：不能直接访问硬件</div>
      </div>
      <div style="display:flex;flex-direction:column;justify-content:center;gap:0.3rem">
        <div id="syscallArrow" style="font-size:1.5rem;color:rgba(255,255,255,0.3);transition:all 0.3s">⇄</div>
        <div style="font-size:0.6rem;color:rgba(255,255,255,0.3)">系统调用</div>
      </div>
      <div style="flex:1;background:rgba(253,121,168,0.1);border:1px solid rgba(253,121,168,0.3);border-radius:12px;padding:0.8rem;text-align:center">
        <div style="font-weight:800;color:#fd79a8;margin-bottom:0.5rem">🔧 内核态 (Ring 0)</div>
        <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:0.5rem;font-size:0.75rem;margin-bottom:0.5rem">sys_write(fd, buf, len)</div>
        <div style="font-size:0.65rem;color:rgba(255,255,255,0.4)">最高权限：可以访问所有硬件</div>
      </div>
    </div>
    <div style="text-align:center;margin-top:1rem">
      <button onclick="animateSyscall()" style="padding:0.5rem 1.5rem;border-radius:8px;border:none;background:linear-gradient(135deg,#fd79a8,#e84393);color:white;font-weight:700;cursor:pointer;font-size:0.8rem">▶ 模拟系统调用</button>
    </div>
    <div id="syscallLog" style="margin-top:0.8rem;font-family:monospace;font-size:0.7rem;color:rgba(255,255,255,0.5);background:rgba(0,0,0,0.2);border-radius:8px;padding:0.5rem;max-height:100px;overflow-y:auto"></div>
  </div>
</div>
<script>
function animateSyscall(){var log=document.getElementById('syscallLog');var arrow=document.getElementById('syscallArrow');log.innerHTML='';var steps=['[用户态] print("Hello") 被调用','[用户态] 触发 sys_write 系统调用','[切换] CPU权限提升：用户态 → 内核态','[内核态] 执行 sys_write 处理函数','[内核态] 数据写入显示缓冲区','[切换] CPU权限降低：内核态 → 用户态','[用户态] 系统调用返回，继续执行'];var i=0;var intv=setInterval(function(){if(i>=steps.length){clearInterval(intv);arrow.style.color='rgba(0,206,201,0.8)';return;}log.innerHTML+='<div style="color:'+(steps[i].indexOf('切换')>=0?'#fd79a8':'rgba(255,255,255,0.6)')+'">→ '+steps[i]+'</div>';arrow.style.color=steps[i].indexOf('内核')>=0?'#fd79a8':'#00cec9';log.scrollTop=log.scrollHeight;i++;},600);}
</script>`
        }
      ],
      challenge: {
        description: "写一个程序模拟系统调用表，包含至少5个系统调用，打印调用编号、名称和说明。",
        hint: "用字典存储系统调用信息",
        solution: 'syscalls = {\n    1: ("write", "写入"),\n    2: ("read", "读取"),\n    3: ("open", "打开文件"),\n    4: ("close", "关闭文件"),\n    5: ("fork", "创建进程"),\n}\nfor num, (name, desc) in syscalls.items():\n    print(f"#{num} {name}: {desc}")'
      }
    },
    {
      id: "v1-kernel-2",
      title: "中断与设备驱动 —— 硬件的信使",
      xp: 25,
      code: '# 模拟中断处理系统\n\nclass InterruptController:\n    def __init__(self):\n        self.handlers = {}\n        self.log = []\n    \n    def register(self, irq, name, handler_desc):\n        self.handlers[irq] = (name, handler_desc)\n    \n    def trigger(self, irq):\n        if irq in self.handlers:\n            name, desc = self.handlers[irq]\n            self.log.append(f"IRQ{irq}: {name}")\n            print(f"  ⚡ 中断 IRQ{irq} [{name}]: {desc}")\n        else:\n            print(f"  ❌ 未知中断 IRQ{irq}")\n\npic = InterruptController()\npic.register(0, "时钟中断", "更新系统时间，触发进程调度")\npic.register(1, "键盘中断", "读取按键扫描码")\npic.register(6, "磁盘中断", "磁盘I/O完成通知")\npic.register(8, "网卡中断", "网络数据包到达")\npic.register(14, "页面错误", "触发缺页处理")\n\nprint("=== 中断控制器 ===")\nfor irq in [0, 1, 6, 8, 14, 99]:\n    pic.trigger(irq)\n\nprint(f"\\n处理了 {len(pic.log)} 个中断")',
      steps: [
        {
          title: "中断：硬件呼叫CPU的方式",
          content: '<p>当键盘被按下、网卡收到数据、磁盘读完文件时，硬件会通过<strong>中断</strong>通知CPU："我有事找你！"</p><div class="theory-anim-box"><div class="theory-anim-title">⚡ 中断处理流程</div><div id="interruptDemo" style="padding:1rem"><div style="display:flex;gap:0.8rem;align-items:center;justify-content:center;flex-wrap:wrap;margin-bottom:1rem"><div style="display:flex;flex-direction:column;gap:0.4rem;align-items:center"><div id="irqKbd" class="t0-fadein" style="animation-delay:0.2s;width:55px;height:55px;border-radius:50%;background:rgba(253,121,168,0.15);border:2px solid rgba(253,121,168,0.3);display:flex;align-items:center;justify-content:center;font-size:1.3rem;transition:all 0.3s;cursor:pointer" onclick="triggerIRQ(1)">⌨️</div><div style="font-size:0.6rem;color:rgba(255,255,255,0.4)">键盘</div></div><div style="display:flex;flex-direction:column;gap:0.4rem;align-items:center"><div id="irqDisk" class="t0-fadein" style="animation-delay:0.3s;width:55px;height:55px;border-radius:50%;background:rgba(0,206,201,0.15);border:2px solid rgba(0,206,201,0.3);display:flex;align-items:center;justify-content:center;font-size:1.3rem;transition:all 0.3s;cursor:pointer" onclick="triggerIRQ(6)">💾</div><div style="font-size:0.6rem;color:rgba(255,255,255,0.4)">磁盘</div></div><div style="display:flex;flex-direction:column;gap:0.4rem;align-items:center"><div id="irqNet" class="t0-fadein" style="animation-delay:0.4s;width:55px;height:55px;border-radius:50%;background:rgba(255,152,0,0.15);border:2px solid rgba(255,152,0,0.3);display:flex;align-items:center;justify-content:center;font-size:1.3rem;transition:all 0.3s;cursor:pointer" onclick="triggerIRQ(8)">🌐</div><div style="font-size:0.6rem;color:rgba(255,255,255,0.4)">网卡</div></div><div style="display:flex;flex-direction:column;gap:0.4rem;align-items:center"><div id="irqTimer" class="t0-fadein" style="animation-delay:0.5s;width:55px;height:55px;border-radius:50%;background:rgba(253,121,168,0.15);border:2px solid rgba(253,121,168,0.3);display:flex;align-items:center;justify-content:center;font-size:1.3rem;transition:all 0.3s;cursor:pointer" onclick="triggerIRQ(0)">⏱️</div><div style="font-size:0.6rem;color:rgba(255,255,255,0.4)">时钟</div></div></div><div style="text-align:center;margin:0.5rem 0"><div style="font-size:0.7rem;color:rgba(255,255,255,0.3)">⬇️ 中断请求（IRQ）⬇️</div></div><div style="background:rgba(253,121,168,0.1);border:2px solid rgba(253,121,168,0.25);border-radius:12px;padding:0.6rem;text-align:center"><div style="font-weight:800;color:#fd79a8;font-size:0.85rem">🧠 CPU — 中断处理</div><div id="irqStatus" style="font-size:0.7rem;color:rgba(255,255,255,0.5);margin-top:0.3rem">点击上方设备触发中断</div></div><div id="irqLog" style="margin-top:0.8rem;font-family:monospace;font-size:0.68rem;color:rgba(255,255,255,0.5);background:rgba(0,0,0,0.2);border-radius:8px;padding:0.5rem;max-height:80px;overflow-y:auto"></div></div></div><script>var irqNames={0:"时钟中断 → 更新时间，调度进程",1:"键盘中断 → 读取按键码",6:"磁盘中断 → I/O完成",8:"网卡中断 → 数据到达"};function triggerIRQ(n){var st=document.getElementById("irqStatus");var log=document.getElementById("irqLog");st.textContent="处理 IRQ"+n+": "+(irqNames[n]||"未知");st.style.color="#fd79a8";log.innerHTML+="<div>⚡ IRQ"+n+" → "+(irqNames[n]||"?")+"</div>";log.scrollTop=log.scrollHeight;setTimeout(function(){st.style.color="rgba(255,255,255,0.5)";},800);}</script>'
        },
        {
          title: "设备驱动：硬件的翻译官",
          content: '<p><strong>设备驱动程序</strong>是内核中与特定硬件通信的代码模块。没有驱动，内核就不知道怎么和硬件"说话"。</p><div class="theory-anim-box"><div class="theory-anim-title">🔌 设备驱动架构</div><div style="display:flex;flex-direction:column;gap:0.5rem;margin:1rem 0"><div class="t0-fadein" style="animation-delay:0.2s;background:rgba(253,121,168,0.1);border:1px solid rgba(253,121,168,0.25);border-radius:10px;padding:0.7rem;text-align:center"><div style="font-weight:800;color:#fd79a8;font-size:0.8rem">📱 应用程序</div><div style="font-size:0.65rem;color:rgba(255,255,255,0.4)">print("Hello") / 打开文件 / 播放音乐</div></div><div style="text-align:center;color:rgba(255,255,255,0.2);font-size:0.7rem">⬇ 统一的系统调用接口</div><div class="t0-fadein" style="animation-delay:0.4s;background:rgba(0,206,201,0.1);border:1px solid rgba(0,206,201,0.25);border-radius:10px;padding:0.7rem;text-align:center"><div style="font-weight:800;color:#00cec9;font-size:0.8rem">🧠 内核核心</div><div style="font-size:0.65rem;color:rgba(255,255,255,0.4)">将请求分发给对应的驱动</div></div><div style="text-align:center;color:rgba(255,255,255,0.2);font-size:0.7rem">⬇ 驱动接口</div><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.4rem" class="t0-fadein" style="animation-delay:0.6s"><div style="background:rgba(255,152,0,0.1);border:1px solid rgba(255,152,0,0.25);border-radius:8px;padding:0.5rem;text-align:center"><div style="font-size:1rem">🖥️</div><div style="font-size:0.6rem;color:#FF9800;font-weight:700">显卡驱动</div></div><div style="background:rgba(253,121,168,0.1);border:1px solid rgba(253,121,168,0.25);border-radius:8px;padding:0.5rem;text-align:center"><div style="font-size:1rem">🔊</div><div style="font-size:0.6rem;color:#fd79a8;font-weight:700">声卡驱动</div></div><div style="background:rgba(105,240,174,0.1);border:1px solid rgba(105,240,174,0.25);border-radius:8px;padding:0.5rem;text-align:center"><div style="font-size:1rem">💾</div><div style="font-size:0.6rem;color:#69F0AE;font-weight:700">磁盘驱动</div></div><div style="background:rgba(253,121,168,0.1);border:1px solid rgba(253,121,168,0.25);border-radius:8px;padding:0.5rem;text-align:center"><div style="font-size:1rem">🌐</div><div style="font-size:0.6rem;color:#fd79a8;font-weight:700">网卡驱动</div></div></div><div style="text-align:center;color:rgba(255,255,255,0.2);font-size:0.7rem;margin-top:0.3rem">⬇ 硬件操作</div><div class="t0-fadein" style="animation-delay:0.8s;background:rgba(255,152,0,0.08);border:1px solid rgba(255,152,0,0.2);border-radius:10px;padding:0.5rem;text-align:center;font-size:0.7rem;color:rgba(255,255,255,0.5)">⚡ 实际硬件设备</div></div><div class="theory-callout">💡 驱动让内核能以<strong>统一的方式</strong>操作不同厂商的硬件。Linux中"一切皆文件"——连硬件设备也是通过文件接口访问！</div></div>'
        }
      ],
      challenge: {
        description: "创建一个中断控制器类，支持注册中断处理函数和触发中断。注册3个中断并依次触发。",
        hint: "用字典存储IRQ号和对应的处理函数名",
        solution: 'class PIC:\n    def __init__(self):\n        self.handlers = {}\n    def register(self, irq, name):\n        self.handlers[irq] = name\n    def trigger(self, irq):\n        if irq in self.handlers:\n            print(f"IRQ{irq}: {self.handlers[irq]}")\n        else:\n            print(f"IRQ{irq}: 未注册")\n\npic = PIC()\npic.register(0, "时钟中断")\npic.register(1, "键盘中断")\npic.register(8, "网卡中断")\nfor i in [0, 1, 8, 5]:\n    pic.trigger(i)'
      }
    }
  ]
};

registerChapter('theory', CHAPTER_V1_KERNEL);
