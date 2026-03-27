// 卷一 · 理论 - 线程
const CHAPTER_V1_THREAD = {
  chapter: "第八章：线程",
  icon: "🧵",
  lessons: [
    {
      id: "v1-thread-1",
      title: "线程 —— 进程中的轻量级执行单元",
      xp: 20,
      code: '# 进程 vs 线程 对比\n\nprint("=== 进程 vs 线程 ===")\nprint()\ncomparison = [\n    ("定义", "运行中的程序实例", "进程内的执行单元"),\n    ("内存", "独立地址空间", "共享进程内存"),\n    ("创建开销", "大（需要复制资源）", "小（共享资源）"),\n    ("通信方式", "IPC（管道/信号/共享内存）", "直接读写共享变量"),\n    ("崩溃影响", "不影响其他进程", "可能导致整个进程崩溃"),\n    ("切换开销", "高（需要切换地址空间）", "低（无需切换地址空间）"),\n]\n\nfor item, proc, thread in comparison:\n    print(f"  {item:6s}: ")\n    print(f"    进程: {proc}")\n    print(f"    线程: {thread}")\n    print()\n\n# 模拟多线程下载\nprint("=== 模拟多线程下载 ===")\nfiles = ["图片1.jpg", "音乐.mp3", "视频.mp4", "文档.pdf"]\nfor i, f in enumerate(files):\n    progress = 0\n    while progress < 100:\n        progress += 25\n        print(f"  线程{i+1} [{f}]: {progress}%")\nprint("所有文件下载完成！")',
      steps: [
        {
          title: "线程：进程的分身术",
          content: `
<p>如果说<strong>进程</strong>是一个正在工作的工厂，那么<strong>线程</strong>就是工厂里的工人。</p>
<p>一个进程可以有多个线程，它们共享同一块内存空间，可以高效地并行工作。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🧵 进程与线程的关系</div>
  <div style="display:flex;gap:1.5rem;margin:1rem 0;flex-wrap:wrap;justify-content:center">
    <div class="t0-fadein" style="animation-delay:0.3s;background:rgba(108,92,231,0.1);border:2px solid rgba(108,92,231,0.3);border-radius:16px;padding:1rem;min-width:200px">
      <div style="font-weight:800;color:#6c5ce7;text-align:center;margin-bottom:0.8rem">📦 进程 A（浏览器）</div>
      <div style="display:flex;gap:0.5rem;justify-content:center;flex-wrap:wrap">
        <div style="background:rgba(0,206,201,0.2);border:1px solid rgba(0,206,201,0.3);border-radius:8px;padding:0.4rem 0.6rem;font-size:0.7rem;color:#00cec9;font-weight:600">线程1: UI渲染</div>
        <div style="background:rgba(255,152,0,0.2);border:1px solid rgba(255,152,0,0.3);border-radius:8px;padding:0.4rem 0.6rem;font-size:0.7rem;color:#FF9800;font-weight:600">线程2: 网络请求</div>
        <div style="background:rgba(253,121,168,0.2);border:1px solid rgba(253,121,168,0.3);border-radius:8px;padding:0.4rem 0.6rem;font-size:0.7rem;color:#fd79a8;font-weight:600">线程3: JS执行</div>
      </div>
      <div style="margin-top:0.5rem;text-align:center;font-size:0.6rem;color:rgba(255,255,255,0.4)">共享同一块内存空间</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.6s;background:rgba(0,206,201,0.1);border:2px solid rgba(0,206,201,0.3);border-radius:16px;padding:1rem;min-width:200px">
      <div style="font-weight:800;color:#00cec9;text-align:center;margin-bottom:0.8rem">📦 进程 B（编辑器）</div>
      <div style="display:flex;gap:0.5rem;justify-content:center;flex-wrap:wrap">
        <div style="background:rgba(108,92,231,0.2);border:1px solid rgba(108,92,231,0.3);border-radius:8px;padding:0.4rem 0.6rem;font-size:0.7rem;color:#6c5ce7;font-weight:600">线程1: 编辑</div>
        <div style="background:rgba(105,240,174,0.2);border:1px solid rgba(105,240,174,0.3);border-radius:8px;padding:0.4rem 0.6rem;font-size:0.7rem;color:#69F0AE;font-weight:600">线程2: 自动保存</div>
      </div>
      <div style="margin-top:0.5rem;text-align:center;font-size:0.6rem;color:rgba(255,255,255,0.4)">独立的内存空间</div>
    </div>
  </div>
  <div class="theory-callout">💡 多线程让程序能同时做多件事：比如浏览器一边加载网页一边响应你的点击！</div>
</div>`
        },
        {
          title: "线程同步与竞态条件",
          content: `
<p>当多个线程同时访问同一个变量时，可能会产生<strong>竞态条件</strong>——结果取决于谁先执行。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">⚠️ 竞态条件演示</div>
  <div id="raceCondDemo" style="padding:1rem">
    <div style="text-align:center;margin-bottom:1rem">
      <div style="font-size:0.75rem;color:rgba(255,255,255,0.5);margin-bottom:0.3rem">共享变量: count</div>
      <div id="raceCount" style="font-size:2.5rem;font-weight:900;color:#FF9800;font-family:monospace;transition:all 0.3s">0</div>
    </div>
    <div style="display:flex;gap:1rem;justify-content:center;margin-bottom:1rem">
      <div style="text-align:center;flex:1">
        <div style="font-size:0.7rem;color:#00cec9;font-weight:700;margin-bottom:0.3rem">线程 A</div>
        <div id="raceThreadA" style="background:rgba(0,206,201,0.1);border:1px solid rgba(0,206,201,0.3);border-radius:8px;padding:0.5rem;font-family:monospace;font-size:0.7rem;min-height:40px;transition:all 0.3s">等待中...</div>
      </div>
      <div style="text-align:center;flex:1">
        <div style="font-size:0.7rem;color:#fd79a8;font-weight:700;margin-bottom:0.3rem">线程 B</div>
        <div id="raceThreadB" style="background:rgba(253,121,168,0.1);border:1px solid rgba(253,121,168,0.3);border-radius:8px;padding:0.5rem;font-family:monospace;font-size:0.7rem;min-height:40px;transition:all 0.3s">等待中...</div>
      </div>
    </div>
    <div style="display:flex;gap:0.5rem;justify-content:center">
      <button onclick="runRaceDemo(false)" style="padding:0.5rem 1rem;border-radius:8px;border:none;background:linear-gradient(135deg,#e74c3c,#c0392b);color:white;font-weight:700;cursor:pointer;font-size:0.75rem">⚠️ 无锁（竞态）</button>
      <button onclick="runRaceDemo(true)" style="padding:0.5rem 1rem;border-radius:8px;border:none;background:linear-gradient(135deg,#27ae60,#2ecc71);color:white;font-weight:700;cursor:pointer;font-size:0.75rem">🔒 有锁（安全）</button>
    </div>
  </div>
</div>
<script>
function runRaceDemo(useLock){var countEl=document.getElementById('raceCount');var tA=document.getElementById('raceThreadA');var tB=document.getElementById('raceThreadB');var count=0;countEl.textContent='0';tA.textContent='开始...';tB.textContent='开始...';var steps=[];if(!useLock){steps=[{a:'读取count=0',b:'',c:0},{a:'',b:'读取count=0',c:0},{a:'count=0+1=1',b:'',c:0},{a:'',b:'count=0+1=1',c:0},{a:'写入count=1',b:'',c:1},{a:'',b:'写入count=1 ⚠️',c:1}];}else{steps=[{a:'🔒获取锁',b:'等待锁...',c:0},{a:'读取count=0',b:'等待锁...',c:0},{a:'count=0+1=1',b:'等待锁...',c:0},{a:'写入count=1, 释放锁',b:'🔒获取锁',c:1},{a:'完成',b:'读取count=1',c:1},{a:'',b:'count=1+1=2, 释放锁 ✅',c:2}];}var i=0;var intv=setInterval(function(){if(i>=steps.length){clearInterval(intv);return;}var s=steps[i];if(s.a)tA.textContent=s.a;if(s.b)tB.textContent=s.b;count=s.c;countEl.textContent=count;countEl.style.color=count===2?'#69F0AE':count===1&&i===steps.length-1&&!useLock?'#e74c3c':'#FF9800';i++;},700);}
</script>`
        }
      ],
      challenge: {
        description: "写一个程序，模拟两个线程对共享变量count进行+1操作各5次，打印最终结果（期望值=10）。",
        hint: "模拟每次读取-计算-写入的过程",
        solution: 'count = 0\nfor thread_name in ["A", "B"]:\n    for i in range(5):\n        old = count\n        count = old + 1\n        print(f"线程{thread_name}: count {old} → {count}")\nprint(f"最终结果: count = {count}")'
      }
    },
    {
      id: "v1-thread-2",
      title: "死锁 —— 哲学家就餐问题",
      xp: 30,
      code: '# 模拟死锁场景\n\nclass Resource:\n    def __init__(self, name):\n        self.name = name\n        self.locked_by = None\n    \n    def try_lock(self, thread):\n        if self.locked_by is None:\n            self.locked_by = thread\n            print(f"  ✅ {thread} 获取了 {self.name}")\n            return True\n        print(f"  ❌ {thread} 无法获取 {self.name}（被{self.locked_by}持有）")\n        return False\n    \n    def unlock(self, thread):\n        if self.locked_by == thread:\n            self.locked_by = None\n            print(f"  🔓 {thread} 释放了 {self.name}")\n\nprint("=== 死锁演示 ===")\nresA = Resource("资源A")\nresB = Resource("资源B")\n\nprint("\\n[正常顺序 - 无死锁]")\nresA.try_lock("线程1")\nresB.try_lock("线程1")\nresB.unlock("线程1")\nresA.unlock("线程1")\n\nresA.try_lock("线程2")\nresB.try_lock("线程2")\nresB.unlock("线程2")\nresA.unlock("线程2")\n\nprint("\\n[交叉顺序 - 死锁！]")\nresA.try_lock("线程1")  # 线程1拿到A\nresB.try_lock("线程2")  # 线程2拿到B\nresB.try_lock("线程1")  # 线程1想要B → 被线程2占了！\nresA.try_lock("线程2")  # 线程2想要A → 被线程1占了！\nprint("  💀 死锁发生！双方互相等待，谁也不放手")',
      steps: [
        {
          title: "什么是死锁？",
          content: '<p>想象两个人面对面走在窄巷子里，互不相让——谁也过不去。这就是<strong>死锁</strong>！在编程中，两个线程互相持有对方需要的资源，导致永远等待。</p><div class="theory-anim-box"><div class="theory-anim-title">💀 死锁四大必要条件</div><div style="display:grid;grid-template-columns:repeat(2,1fr);gap:0.6rem;margin:1rem 0"><div class="t0-fadein" style="animation-delay:0.2s;background:rgba(253,121,168,0.1);border:1px solid rgba(253,121,168,0.25);border-radius:10px;padding:0.7rem"><div style="font-weight:800;color:#fd79a8;font-size:0.8rem">① 互斥</div><div style="font-size:0.68rem;color:rgba(255,255,255,0.5);margin-top:0.3rem">资源同一时刻只能被一个线程持有</div></div><div class="t0-fadein" style="animation-delay:0.4s;background:rgba(108,92,231,0.1);border:1px solid rgba(108,92,231,0.25);border-radius:10px;padding:0.7rem"><div style="font-weight:800;color:#6c5ce7;font-size:0.8rem">② 持有并等待</div><div style="font-size:0.68rem;color:rgba(255,255,255,0.5);margin-top:0.3rem">已持有资源的线程继续请求新资源</div></div><div class="t0-fadein" style="animation-delay:0.6s;background:rgba(0,206,201,0.1);border:1px solid rgba(0,206,201,0.25);border-radius:10px;padding:0.7rem"><div style="font-weight:800;color:#00cec9;font-size:0.8rem">③ 不可剥夺</div><div style="font-size:0.68rem;color:rgba(255,255,255,0.5);margin-top:0.3rem">资源只能由持有者主动释放</div></div><div class="t0-fadein" style="animation-delay:0.8s;background:rgba(255,152,0,0.1);border:1px solid rgba(255,152,0,0.25);border-radius:10px;padding:0.7rem"><div style="font-weight:800;color:#FF9800;font-size:0.8rem">④ 循环等待</div><div style="font-size:0.68rem;color:rgba(255,255,255,0.5);margin-top:0.3rem">A等B，B等C，C等A → 成环</div></div></div><div class="theory-callout">💡 打破任意一个条件就能<strong>预防死锁</strong>！最常用的方法是<strong>按固定顺序加锁</strong>，避免循环等待。</div></div>'
        },
        {
          title: "哲学家就餐问题",
          content: '<p>5个哲学家围坐圆桌，每人之间一根筷子。吃饭需要<strong>同时拿起左右两根筷子</strong>。如果每人都拿起左边筷子等右边的——死锁！</p><div class="theory-anim-box"><div class="theory-anim-title">🍜 哲学家就餐问题动画</div><div id="philDemo" style="padding:1rem;text-align:center"><div style="position:relative;width:200px;height:200px;margin:0 auto"><div style="position:absolute;top:0;left:50%;transform:translateX(-50%)" class="t0-fadein"><div style="font-size:1.8rem">🧑‍🎓</div><div style="font-size:0.55rem;color:rgba(255,255,255,0.5)">哲学家1</div></div><div style="position:absolute;top:40%;right:0" class="t0-fadein" style="animation-delay:0.2s"><div style="font-size:1.8rem">🧑‍🎓</div><div style="font-size:0.55rem;color:rgba(255,255,255,0.5)">哲学家2</div></div><div style="position:absolute;bottom:5%;right:15%" class="t0-fadein" style="animation-delay:0.4s"><div style="font-size:1.8rem">🧑‍🎓</div><div style="font-size:0.55rem;color:rgba(255,255,255,0.5)">哲学家3</div></div><div style="position:absolute;bottom:5%;left:15%" class="t0-fadein" style="animation-delay:0.6s"><div style="font-size:1.8rem">🧑‍🎓</div><div style="font-size:0.55rem;color:rgba(255,255,255,0.5)">哲学家4</div></div><div style="position:absolute;top:40%;left:0" class="t0-fadein" style="animation-delay:0.8s"><div style="font-size:1.8rem">🧑‍🎓</div><div style="font-size:0.55rem;color:rgba(255,255,255,0.5)">哲学家5</div></div><div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem">🍽️</div></div><div style="margin-top:1rem;display:grid;grid-template-columns:1fr 1fr;gap:0.5rem"><div style="background:rgba(253,121,168,0.1);border:1px solid rgba(253,121,168,0.25);border-radius:8px;padding:0.5rem;font-size:0.7rem"><div style="color:#fd79a8;font-weight:700">💀 死锁方案</div><div style="color:rgba(255,255,255,0.4);font-size:0.65rem;margin-top:0.2rem">每人先拿左筷子<br>再等右筷子 → 全部卡住</div></div><div style="background:rgba(105,240,174,0.1);border:1px solid rgba(105,240,174,0.25);border-radius:8px;padding:0.5rem;font-size:0.7rem"><div style="color:#69F0AE;font-weight:700">✅ 安全方案</div><div style="color:rgba(255,255,255,0.4);font-size:0.65rem;margin-top:0.2rem">编号最小的筷子先拿<br>打破循环等待条件</div></div></div></div></div>'
        }
      ],
      challenge: {
        description: "模拟两个线程获取两个资源的过程：先展示死锁场景，再展示通过固定加锁顺序避免死锁。",
        hint: "关键是让两个线程都按A→B的顺序获取资源",
        solution: 'class Lock:\n    def __init__(self, name):\n        self.name = name\n        self.owner = None\n    def acquire(self, who):\n        if not self.owner:\n            self.owner = who\n            print(f"{who} 获取 {self.name}")\n            return True\n        print(f"{who} 等待 {self.name}(被{self.owner}持有)")\n        return False\n    def release(self, who):\n        if self.owner == who:\n            self.owner = None\n            print(f"{who} 释放 {self.name}")\n\nA, B = Lock("锁A"), Lock("锁B")\nprint("--- 固定顺序加锁 ---")\nA.acquire("T1")\nB.acquire("T1")\nB.release("T1")\nA.release("T1")\nA.acquire("T2")\nB.acquire("T2")\nB.release("T2")\nA.release("T2")\nprint("无死锁！")'
      }
    }
  ]
};

registerChapter('theory', CHAPTER_V1_THREAD);
