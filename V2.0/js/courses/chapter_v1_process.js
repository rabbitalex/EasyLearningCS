// 卷一 · 理论 - 进程
const CHAPTER_V1_PROCESS = {
  chapter: "第七章：进程",
  chapterNum: 7,
  icon: "🔄",
  lessons: [
    {
      id: "v1-proc-1",
      title: "进程 —— 运行中的程序",
      xp: 20,
      code: '# 模拟进程的生命周期\n\nclass Process:\n    def __init__(self, pid, name):\n        self.pid = pid\n        self.name = name\n        self.state = "新建"\n    \n    def ready(self):\n        self.state = "就绪"\n        print(f"  PID={self.pid} [{self.name}] → 就绪")\n    \n    def run(self):\n        self.state = "运行"\n        print(f"  PID={self.pid} [{self.name}] → 正在运行 ⚡")\n    \n    def wait(self):\n        self.state = "等待I/O"\n        print(f"  PID={self.pid} [{self.name}] → 等待I/O 💤")\n    \n    def terminate(self):\n        self.state = "终止"\n        print(f"  PID={self.pid} [{self.name}] → 已终止 ✅")\n\nprint("=== 进程生命周期模拟 ===")\nprocs = [Process(1, "浏览器"), Process(2, "编辑器"), Process(3, "终端")]\n\nprint("\\n[1] 创建进程:")\nfor p in procs: p.ready()\n\nprint("\\n[2] 调度运行:")\nprocs[0].run()\nprocs[1].run()\n\nprint("\\n[3] I/O等待:")\nprocs[0].wait()\nprocs[2].run()\n\nprint("\\n[4] 进程终止:")\nfor p in procs: p.terminate()',
      steps: [
        {
          title: "进程：程序的运行实例",
          content: `
<p><strong>程序</strong>是存储在磁盘上的代码文件，<strong>进程</strong>是程序运行起来后在内存中的实例。</p>
<p>一个程序可以同时运行多个进程（比如你打开多个浏览器窗口）。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔄 进程状态转换动画</div>
  <div id="processStateDemo" style="position:relative;padding:1rem;min-height:180px">
    <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:1.5rem;margin:1rem 0">
      <div id="pState_new" class="t0-fadein" style="animation-delay:0.2s;text-align:center">
        <div style="width:70px;height:70px;border-radius:50%;border:3px solid rgba(253,121,168,0.4);background:rgba(253,121,168,0.15);display:flex;align-items:center;justify-content:center;font-size:1.5rem;margin:0 auto 0.3rem;transition:all 0.5s" id="psBubbleNew">📝</div>
        <div style="font-size:0.7rem;font-weight:700;color:#fd79a8">新建</div>
      </div>
      <div style="display:flex;align-items:center;color:rgba(255,255,255,0.3)">→</div>
      <div id="pState_ready" class="t0-fadein" style="animation-delay:0.4s;text-align:center">
        <div style="width:70px;height:70px;border-radius:50%;border:3px solid rgba(0,206,201,0.4);background:rgba(0,206,201,0.15);display:flex;align-items:center;justify-content:center;font-size:1.5rem;margin:0 auto 0.3rem;transition:all 0.5s" id="psBubbleReady">⏳</div>
        <div style="font-size:0.7rem;font-weight:700;color:#00cec9">就绪</div>
      </div>
      <div style="display:flex;align-items:center;color:rgba(255,255,255,0.3)">⇄</div>
      <div id="pState_run" class="t0-fadein" style="animation-delay:0.6s;text-align:center">
        <div style="width:70px;height:70px;border-radius:50%;border:3px solid rgba(255,152,0,0.4);background:rgba(255,152,0,0.15);display:flex;align-items:center;justify-content:center;font-size:1.5rem;margin:0 auto 0.3rem;transition:all 0.5s" id="psBubbleRun">⚡</div>
        <div style="font-size:0.7rem;font-weight:700;color:#FF9800">运行</div>
      </div>
      <div style="display:flex;align-items:center;color:rgba(255,255,255,0.3)">→</div>
      <div id="pState_term" class="t0-fadein" style="animation-delay:0.8s;text-align:center">
        <div style="width:70px;height:70px;border-radius:50%;border:3px solid rgba(105,240,174,0.4);background:rgba(105,240,174,0.15);display:flex;align-items:center;justify-content:center;font-size:1.5rem;margin:0 auto 0.3rem;transition:all 0.5s" id="psBubbleTerm">✅</div>
        <div style="font-size:0.7rem;font-weight:700;color:#69F0AE">终止</div>
      </div>
    </div>
    <div style="text-align:center">
      <button onclick="animProcessStates()" style="padding:0.5rem 1.5rem;border-radius:8px;border:none;background:linear-gradient(135deg,#FF9800,#fdcb6e);color:white;font-weight:700;cursor:pointer;font-size:0.8rem">▶ 播放进程生命周期</button>
    </div>
    <div id="psLog" style="margin-top:0.8rem;font-family:monospace;font-size:0.7rem;color:rgba(255,255,255,0.5);background:rgba(0,0,0,0.2);border-radius:8px;padding:0.5rem"></div>
  </div>
</div>
<script>
function animProcessStates(){var ids=['psBubbleNew','psBubbleReady','psBubbleRun','psBubbleTerm'];var log=document.getElementById('psLog');log.innerHTML='';var steps=[{hi:0,msg:'进程被创建（从程序文件加载到内存）'},{hi:1,msg:'进程进入就绪队列，等待CPU调度'},{hi:2,msg:'调度器选中此进程，分配CPU时间片'},{hi:2,msg:'进程正在执行指令...'},{hi:1,msg:'时间片用完，回到就绪队列'},{hi:2,msg:'再次获得CPU，继续执行'},{hi:3,msg:'任务完成，进程终止，释放所有资源'}];var i=0;ids.forEach(function(id){document.getElementById(id).style.transform='scale(1)';document.getElementById(id).style.boxShadow='none';});var intv=setInterval(function(){if(i>=steps.length){clearInterval(intv);return;}ids.forEach(function(id){document.getElementById(id).style.transform='scale(1)';document.getElementById(id).style.boxShadow='none';});var s=steps[i];document.getElementById(ids[s.hi]).style.transform='scale(1.2)';document.getElementById(ids[s.hi]).style.boxShadow='0 0 20px rgba(255,152,0,0.4)';log.innerHTML+='<div>→ '+s.msg+'</div>';log.scrollTop=log.scrollHeight;i++;},800);}
</script>`
        }
      ],
      challenge: {
        description: "创建一个Process类，包含pid、name和state属性，实现run()和stop()方法，模拟3个进程的创建和运行。",
        hint: "用类封装进程信息和方法",
        solution: 'class Process:\n    def __init__(self, pid, name):\n        self.pid = pid\n        self.name = name\n        self.state = "ready"\n    def run(self):\n        self.state = "running"\n        print(f"PID {self.pid} [{self.name}] running")\n    def stop(self):\n        self.state = "stopped"\n        print(f"PID {self.pid} [{self.name}] stopped")\n\nfor i, name in enumerate(["Chrome","VSCode","Terminal"]):\n    p = Process(i+1, name)\n    p.run()\n    p.stop()'
      }
    },
    {
      id: "v1-proc-2",
      title: "进程间通信（IPC）",
      xp: 25,
      code: '# 模拟进程间通信（管道）\n\nclass Pipe:\n    def __init__(self):\n        self.buffer = []\n    \n    def write(self, data, sender):\n        self.buffer.append((sender, data))\n        print(f"  ✉️ [{sender}] 写入管道: {data}")\n    \n    def read(self, reader):\n        if self.buffer:\n            sender, data = self.buffer.pop(0)\n            print(f"  📬 [{reader}] 从管道读取: {data} (来自{sender})")\n            return data\n        print(f"  ❌ [{reader}] 管道为空")\n        return None\n\nprint("=== 管道通信演示 ===")\npipe = Pipe()\npipe.write("Hello", "进程A")\npipe.write("World", "进程A")\npipe.read("进程B")\npipe.read("进程B")\npipe.read("进程B")\n\n# 模拟共享内存\nprint("\\n=== 共享内存演示 ===")\nshared_mem = {"counter": 0}\n\ndef process_inc(name, mem, times):\n    for i in range(times):\n        mem["counter"] += 1\n        print(f"  [{name}] counter = {mem[\"counter\"]}")\n\nprocess_inc("进程A", shared_mem, 3)\nprocess_inc("进程B", shared_mem, 3)\nprint(f"  最终: counter = {shared_mem[\"counter\"]}")',
      steps: [
        {
          title: "为什么进程需要通信？",
          content: '<p>不同进程有独立的内存空间，但有时候它们需要互相传递数据——比如浏览器把下载的文件传给文件管理器。这就需要<strong>进程间通信（IPC）</strong>。</p><div class="theory-anim-box"><div class="theory-anim-title">📡 IPC 常用方式</div><div style="display:grid;grid-template-columns:repeat(2,1fr);gap:0.7rem;margin:1rem 0"><div class="t0-fadein" style="animation-delay:0.2s;background:rgba(253,121,168,0.1);border:1px solid rgba(253,121,168,0.25);border-radius:12px;padding:0.8rem"><div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem"><span style="font-size:1.2rem">🔧</span><span style="font-weight:800;color:#fd79a8;font-size:0.85rem">管道 (Pipe)</span></div><div style="font-size:0.68rem;color:rgba(255,255,255,0.5);line-height:1.6">单向数据流<br>适合父子进程<br>如: <code>ls | grep .py</code></div></div><div class="t0-fadein" style="animation-delay:0.4s;background:rgba(0,206,201,0.1);border:1px solid rgba(0,206,201,0.25);border-radius:12px;padding:0.8rem"><div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem"><span style="font-size:1.2rem">📦</span><span style="font-weight:800;color:#00cec9;font-size:0.85rem">共享内存</span></div><div style="font-size:0.68rem;color:rgba(255,255,255,0.5);line-height:1.6">多进程共享一块内存<br>速度最快<br>需要互斥锁保护</div></div><div class="t0-fadein" style="animation-delay:0.6s;background:rgba(255,152,0,0.1);border:1px solid rgba(255,152,0,0.25);border-radius:12px;padding:0.8rem"><div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem"><span style="font-size:1.2rem">📨</span><span style="font-weight:800;color:#FF9800;font-size:0.85rem">消息队列</span></div><div style="font-size:0.68rem;color:rgba(255,255,255,0.5);line-height:1.6">发送/接收消息<br>支持优先级<br>解耦发送与接收</div></div><div class="t0-fadein" style="animation-delay:0.8s;background:rgba(253,121,168,0.1);border:1px solid rgba(253,121,168,0.25);border-radius:12px;padding:0.8rem"><div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem"><span style="font-size:1.2rem">🚦</span><span style="font-weight:800;color:#fd79a8;font-size:0.85rem">信号 (Signal)</span></div><div style="font-size:0.68rem;color:rgba(255,255,255,0.5);line-height:1.6">通知进程事件发生<br>如: Ctrl+C → SIGINT<br>kill命令就是发信号</div></div></div><div class="theory-callout">💡 在终端输入 <code>ps aux | grep python</code> 就用了管道——ps的输出通过管道传给grep过滤！</div></div>'
        },
        {
          title: "管道：Shell的魔法连接器",
          content: '<p>在Linux/Mac终端中，<code>|</code>（管道符）可以把一个命令的输出传给另一个命令的输入，实现命令组合。</p><div class="theory-anim-box"><div class="theory-anim-title">🔧 管道工作原理动画</div><div id="pipeDemo" style="padding:1rem"><div style="display:flex;align-items:center;gap:0.5rem;justify-content:center;flex-wrap:wrap;margin-bottom:1rem"><div class="t0-fadein" style="animation-delay:0.2s;background:rgba(253,121,168,0.15);border:2px solid rgba(253,121,168,0.3);border-radius:10px;padding:0.6rem 1rem;text-align:center"><div style="font-weight:800;color:#fd79a8;font-size:0.8rem">📋 cat log.txt</div><div id="pipeOut1" style="font-size:0.65rem;color:rgba(255,255,255,0.4);margin-top:0.2rem">输出全部内容</div></div><div style="font-size:1.5rem;color:#FF9800;font-weight:900">|</div><div class="t0-fadein" style="animation-delay:0.4s;background:rgba(0,206,201,0.15);border:2px solid rgba(0,206,201,0.3);border-radius:10px;padding:0.6rem 1rem;text-align:center"><div style="font-weight:800;color:#00cec9;font-size:0.8rem">🔍 grep ERROR</div><div id="pipeOut2" style="font-size:0.65rem;color:rgba(255,255,255,0.4);margin-top:0.2rem">过滤含ERROR的行</div></div><div style="font-size:1.5rem;color:#FF9800;font-weight:900">|</div><div class="t0-fadein" style="animation-delay:0.6s;background:rgba(253,121,168,0.15);border:2px solid rgba(253,121,168,0.3);border-radius:10px;padding:0.6rem 1rem;text-align:center"><div style="font-weight:800;color:#fd79a8;font-size:0.8rem">📊 wc -l</div><div id="pipeOut3" style="font-size:0.65rem;color:rgba(255,255,255,0.4);margin-top:0.2rem">计数行数</div></div></div><div style="text-align:center"><button onclick="animPipe()" style="padding:0.5rem 1.5rem;border-radius:8px;border:none;background:linear-gradient(135deg,#FF9800,#fdcb6e);color:white;font-weight:700;cursor:pointer;font-size:0.8rem">▶ 演示管道传输</button></div><div id="pipeLog" style="margin-top:0.8rem;font-family:monospace;font-size:0.68rem;background:rgba(0,0,0,0.2);border-radius:8px;padding:0.5rem;color:rgba(255,255,255,0.5)"></div></div></div><script>function animPipe(){var log=document.getElementById("pipeLog");log.innerHTML="";var lines=["[INFO] 服务启动","[ERROR] 连接超时","[INFO] 用户登录","[ERROR] 文件未找到","[WARN] 内存不足","[ERROR] 权限拒绝"];var steps=[];lines.forEach(function(l){steps.push({msg:"cat → "+l,phase:1});});steps.push({msg:"---",phase:0});["[ERROR] 连接超时","[ERROR] 文件未找到","[ERROR] 权限拒绝"].forEach(function(l){steps.push({msg:"grep → "+l,phase:2});});steps.push({msg:"---",phase:0});steps.push({msg:"wc -l → 3 (共3个ERROR)",phase:3});var i=0;var iv=setInterval(function(){if(i>=steps.length){clearInterval(iv);return;}var s=steps[i];if(s.msg==="---"){log.innerHTML+="<br>";} else{var c=s.phase===1?"#fd79a8":s.phase===2?"#00cec9":s.phase===3?"#fd79a8":"#fff";log.innerHTML+="<div style=\\"color:"+c+"\\">"+s.msg+"</div>";}log.scrollTop=log.scrollHeight;i++;},300);}</script>'
        }
      ],
      challenge: {
        description: "实现一个简单的消息队列：支持send(msg)和receive()方法。两个模拟进程各发3条消息，然后另一个进程依次接收。",
        hint: "用列表模拟队列，append添加，pop(0)取出",
        solution: 'class MsgQueue:\n    def __init__(self):\n        self.queue = []\n    def send(self, sender, msg):\n        self.queue.append((sender, msg))\n        print(f"[{sender}] 发送: {msg}")\n    def receive(self, receiver):\n        if self.queue:\n            sender, msg = self.queue.pop(0)\n            print(f"[{receiver}] 收到来自{sender}的: {msg}")\n\nmq = MsgQueue()\nmq.send("A", "你好")\nmq.send("A", "数据1")\nmq.send("B", "收到")\nmq.receive("C")\nmq.receive("C")\nmq.receive("C")'
      }
    }
  ]
};

registerChapter('theory', CHAPTER_V1_PROCESS);
