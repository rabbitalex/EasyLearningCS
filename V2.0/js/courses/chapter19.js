// 第十九章：进程与线程
const CHAPTER19 = {
  chapter: "第十九章：进程与线程",
  icon: "⚡",
  lessons: [
    {
      id: "19-1",
      title: "多任务概念",
      xp: 20,
      code: '# 模拟多任务概念\ndef task1():\n    for i in range(3):\n        print(f"任务1: 步骤{i+1}")\n\ndef task2():\n    for i in range(3):\n        print(f"任务2: 步骤{i+1}")\n\n# 顺序执行\nprint("=== 顺序执行 ===")\ntask1()\ntask2()\n\n# 交替执行（模拟并发）\nprint("\\n=== 并发执行(模拟) ===")\nfor i in range(3):\n    print(f"任务1: 步骤{i+1}")\n    print(f"任务2: 步骤{i+1}")',
      steps: [
        {
          title: "什么是多任务？",
          content: `<p>想象你一边听音乐🎵一边写作业📝 — 这就是<strong>多任务</strong>！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔄 多任务的三种方式</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">进程</span><span class="ch1-vf-code">multiprocessing</span><span class="ch1-vf-desc">多个程序同时跑（重量级）</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">线程</span><span class="ch1-vf-code">threading</span><span class="ch1-vf-desc">一个程序内多条线同时跑</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">协程</span><span class="ch1-vf-code">asyncio</span><span class="ch1-vf-desc">单线程内交替执行（最轻量）</span></div>
  </div>
  <div class="theory-callout">💡 <strong>进程</strong>像多个工人各做各的，<strong>线程</strong>像一个工人左手画圆右手画方！</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,206,201,0.08));border:1px solid rgba(108,92,231,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(108,92,231,0.1);border-left:3px solid #6c5ce7;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
</style>`
        },
        {
          title: "进程 vs 线程",
          content: `<p>进程和线程是操作系统多任务的两种方式：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">⚖️ 进程 vs 线程 对比</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">进程</span><span class="ch1-vf-code">独立内存空间，互不干扰</span><span class="ch1-vf-desc">更安全但开销大</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">线程</span><span class="ch1-vf-code">共享内存空间，需要同步</span><span class="ch1-vf-desc">更快但需小心</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">GIL</span><span class="ch1-vf-code">Python的全局解释器锁</span><span class="ch1-vf-desc">限制多线程CPU并行</span></div>
  </div>
  <div class="theory-callout">⚠️ 由于<strong>GIL</strong>的存在，Python多线程适合IO密集型任务，CPU密集型用多进程！</div>
</div>`
        }
      ],
      challenge: {
        desc: "🎯 模拟一个下载任务管理器，3个下载任务交替执行步骤",
        hint: 'tasks = ["音乐下载", "视频下载", "图片下载"]\nfor step in range(1, 4):\n    for task in tasks:\n        print(f"[步骤{step}] {task}: 进度{step*33}%")\nprint("\\n全部下载完成！")',
        template: '# 模拟多任务\ntasks = ["音乐下载", "视频下载", "图片下载"]\n',
        check: function(output) { return output.indexOf("下载") !== -1 && output.indexOf("完成") !== -1; }
      }
    },
    {
      id: "19-2",
      title: "线程基础",
      xp: 25,
      code: '# 模拟线程的工作方式\n# (真实Python中使用 threading 模块)\n\ndef worker(name, count):\n    results = []\n    for i in range(count):\n        results.append(f"[{name}] 工作中... {i+1}/{count}")\n    return results\n\n# 模拟创建"线程"并收集任务\nthread_a = worker("线程A", 3)\nthread_b = worker("线程B", 3)\n\n# 模拟并发交替输出\nprint("=== 模拟线程并发 ===")\nfor i in range(3):\n    print(thread_a[i])\n    print(thread_b[i])\n\nprint("\\n所有线程完成！")',
      steps: [
        {
          title: "threading模块",
          content: `<p><code>threading</code> 模块让你可以轻松创建和管理线程：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🧵 线程操作步骤</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">①</span><span class="ch1-vf-code">Thread(target=func, args=(...))</span><span class="ch1-vf-desc">创建线程</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">②</span><span class="ch1-vf-code">t.start()</span><span class="ch1-vf-desc">启动线程</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">③</span><span class="ch1-vf-code">t.join()</span><span class="ch1-vf-desc">等待线程结束</span></div>
  </div>
  <div class="theory-callout">💡 <code>join()</code> 让主线程等待子线程完成，避免程序提前退出！</div>
</div>`
        },
        {
          title: "线程锁 Lock",
          content: `<p>多线程共享变量时需要用<strong>锁</strong>来防止数据混乱：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔒 线程锁</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">创建</span><span class="ch1-vf-code">lock = threading.Lock()</span><span class="ch1-vf-desc">创建锁</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">获取</span><span class="ch1-vf-code">lock.acquire()</span><span class="ch1-vf-desc">加锁</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">释放</span><span class="ch1-vf-code">lock.release()</span><span class="ch1-vf-desc">解锁</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">推荐</span><span class="ch1-vf-code">with lock:</span><span class="ch1-vf-desc">自动加锁解锁</span></div>
  </div>
  <div class="theory-callout">⚠️ 不加锁时，多线程同时修改同一变量会导致数据错误！</div>
</div>`,
          codeToLoad: '# 模拟线程锁的概念\n# (真实Python中使用 threading.Lock())\n\n# 共享变量\nbalance = 0\n\ndef change_with_lock(n):\n    """模拟加锁的操作：原子性地修改余额"""\n    global balance\n    # with lock: (真实线程中需要加锁)\n    balance += n\n    balance -= n\n\n# 模拟多个"线程"依次操作\nfor i in range(10):\n    change_with_lock(i)\n\nprint(f"最终余额: {balance} (应该是0)")\nprint("加锁保证了数据安全！")'
        }
      ],
      challenge: {
        desc: "🎯 模拟3个线程，每个打印自己的名字和编号",
        hint: '# 模拟多线程\ndef hello(name, n):\n    for i in range(n):\n        print(f"线程[{name}] 第{i+1}次打招呼")\n\nnames = ["Alice", "Bob", "Charlie"]\n\n# 模拟并发：交替执行\nfor i in range(2):\n    for name in names:\n        print(f"线程[{name}] 第{i+1}次打招呼")\n\nprint("完成！")',
        template: '# 模拟多线程练习\ndef hello(name, n):\n    for i in range(n):\n        print(f"线程[{name}] 第{i+1}次打招呼")\n',
        check: function(output) { return output.indexOf("线程") !== -1 || output.indexOf("完成") !== -1; }
      }
    }
  ]
};

registerChapter('python', CHAPTER19);
