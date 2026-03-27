// 卷一 · 理论 - 操作系统
const CHAPTER_V1_OS = {
  chapter: "第五章：操作系统",
  icon: "🖥️",
  lessons: [
    {
      id: "v1-os-1",
      title: "操作系统 —— 计算机的大管家",
      xp: 20,
      code: '# 模拟操作系统资源管理\nimport random\n\n# 模拟CPU调度\ntasks = ["浏览器", "音乐播放器", "编辑器", "终端", "文件管理器"]\nprint("=== CPU 时间片轮转调度 ===")\nfor round_num in range(3):\n    print(f"\\n--- 第 {round_num+1} 轮 ---")\n    for task in tasks:\n        time_slice = random.randint(5, 20)\n        print(f"  [{task}] 获得 {time_slice}ms CPU时间")\n\n# 模拟内存分配\nprint("\\n=== 内存分配表 ===")\nmemory = {}\nfor task in tasks:\n    size = random.randint(50, 500)\n    memory[task] = size\n    print(f"  {task}: {size}MB")\nprint(f"  总占用: {sum(memory.values())}MB")',
      steps: [
        {
          title: "什么是操作系统？",
          content: `
<p>操作系统（OS）是你和计算机硬件之间的<strong>翻译官和管家</strong>。</p>
<p>它管理着 CPU、内存、磁盘、网络等所有硬件资源，让多个程序能同时运行。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🏢 操作系统的分层架构</div>
  <div style="display:flex;flex-direction:column;gap:0.5rem;margin:1rem 0">
    <div class="t0-fadein" style="animation-delay:0.2s;background:linear-gradient(135deg,rgba(253,121,168,0.2),rgba(253,121,168,0.1));border:1px solid rgba(253,121,168,0.3);border-radius:12px;padding:0.8rem;text-align:center">
      <div style="font-weight:800;color:#fd79a8">👤 用户应用层</div>
      <div style="font-size:0.7rem;color:rgba(255,255,255,0.5);margin-top:0.3rem">浏览器 · 编辑器 · 游戏 · 音乐播放器</div>
    </div>
    <div style="text-align:center;color:rgba(255,255,255,0.3);font-size:0.8rem">↕ 系统调用接口 (System Call)</div>
    <div class="t0-fadein" style="animation-delay:0.5s;background:linear-gradient(135deg,rgba(108,92,231,0.2),rgba(108,92,231,0.1));border:1px solid rgba(108,92,231,0.3);border-radius:12px;padding:0.8rem;text-align:center">
      <div style="font-weight:800;color:#6c5ce7">🧠 操作系统内核</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.5rem;margin-top:0.5rem">
        <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:0.4rem;font-size:0.65rem;color:rgba(255,255,255,0.6)">进程管理</div>
        <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:0.4rem;font-size:0.65rem;color:rgba(255,255,255,0.6)">内存管理</div>
        <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:0.4rem;font-size:0.65rem;color:rgba(255,255,255,0.6)">文件系统</div>
        <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:0.4rem;font-size:0.65rem;color:rgba(255,255,255,0.6)">设备驱动</div>
      </div>
    </div>
    <div style="text-align:center;color:rgba(255,255,255,0.3);font-size:0.8rem">↕ 硬件抽象层</div>
    <div class="t0-fadein" style="animation-delay:0.8s;background:linear-gradient(135deg,rgba(0,206,201,0.2),rgba(0,206,201,0.1));border:1px solid rgba(0,206,201,0.3);border-radius:12px;padding:0.8rem;text-align:center">
      <div style="font-weight:800;color:#00cec9">⚡ 硬件层</div>
      <div style="font-size:0.7rem;color:rgba(255,255,255,0.5);margin-top:0.3rem">CPU · 内存 · 硬盘 · 网卡 · 显卡</div>
    </div>
  </div>
  <div class="theory-callout">💡 操作系统就像酒店的前台，你不需要直接操控电梯和空调，前台帮你安排一切！</div>
</div>`
        },
        {
          title: "CPU调度 —— 时间片轮转",
          content: `
<p>你的电脑能同时播放音乐、打开浏览器、运行编辑器，是因为 OS 的<strong>CPU调度器</strong>在极快地切换任务。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">⏱️ 时间片轮转动画</div>
  <div id="cpuSchedulerDemo" style="padding:1rem">
    <div style="display:flex;gap:0.8rem;justify-content:center;flex-wrap:wrap;margin-bottom:1rem" id="schedTasks">
      <div class="sched-task" data-idx="0" style="padding:0.6rem 1rem;border-radius:10px;border:2px solid rgba(253,121,168,0.3);background:rgba(253,121,168,0.1);font-size:0.8rem;font-weight:700;transition:all 0.3s">🌐 浏览器</div>
      <div class="sched-task" data-idx="1" style="padding:0.6rem 1rem;border-radius:10px;border:2px solid rgba(0,206,201,0.3);background:rgba(0,206,201,0.1);font-size:0.8rem;font-weight:700;transition:all 0.3s">🎵 音乐</div>
      <div class="sched-task" data-idx="2" style="padding:0.6rem 1rem;border-radius:10px;border:2px solid rgba(108,92,231,0.3);background:rgba(108,92,231,0.1);font-size:0.8rem;font-weight:700;transition:all 0.3s">📝 编辑器</div>
      <div class="sched-task" data-idx="3" style="padding:0.6rem 1rem;border-radius:10px;border:2px solid rgba(255,152,0,0.3);background:rgba(255,152,0,0.1);font-size:0.8rem;font-weight:700;transition:all 0.3s">💻 终端</div>
    </div>
    <div style="text-align:center">
      <button onclick="startCpuScheduler()" style="padding:0.5rem 1.5rem;border-radius:8px;border:none;background:linear-gradient(135deg,#6c5ce7,#a29bfe);color:white;font-weight:700;cursor:pointer;font-size:0.8rem">▶ 开始调度</button>
    </div>
    <div id="schedLog" style="margin-top:0.8rem;max-height:120px;overflow-y:auto;font-family:monospace;font-size:0.7rem;color:rgba(255,255,255,0.5);background:rgba(0,0,0,0.2);border-radius:8px;padding:0.5rem"></div>
  </div>
</div>
<script>
function startCpuScheduler(){var tasks=['浏览器','音乐','编辑器','终端'];var els=document.querySelectorAll('.sched-task');var log=document.getElementById('schedLog');log.innerHTML='';var colors=['rgba(253,121,168,0.4)','rgba(0,206,201,0.4)','rgba(108,92,231,0.4)','rgba(255,152,0,0.4)'];var i=0;var intv=setInterval(function(){els.forEach(function(e){e.style.boxShadow='none';e.style.transform='scale(1)';});if(i>=12){clearInterval(intv);log.innerHTML+='<div style="color:#69F0AE">✅ 调度完成！每个任务都得到了公平的CPU时间</div>';return;}var idx=i%4;els[idx].style.boxShadow='0 0 15px '+colors[idx];els[idx].style.transform='scale(1.1)';var ms=Math.floor(Math.random()*15)+5;log.innerHTML+='<div>[轮次'+(Math.floor(i/4)+1)+'] '+tasks[idx]+' → 获得 '+ms+'ms CPU时间</div>';log.scrollTop=log.scrollHeight;i++;},500);}
</script>`
        }
      ],
      challenge: {
        description: "模拟一个简单的任务调度器：有3个任务，每个任务需要不同的CPU时间，按时间片轮转打印执行过程。",
        hint: "用while循环模拟调度，每轮给每个任务分配固定时间片",
        solution: 'tasks = {"A": 30, "B": 20, "C": 10}\nslice_time = 10\nround_num = 0\nwhile any(t > 0 for t in tasks.values()):\n    round_num += 1\n    for name in list(tasks.keys()):\n        if tasks[name] > 0:\n            run = min(slice_time, tasks[name])\n            tasks[name] -= run\n            print(f"[Round {round_num}] {name} runs {run}ms, remaining: {tasks[name]}ms")'
      }
    },
    {
      id: "v1-os-2",
      title: "虚拟内存与文件系统",
      xp: 25,
      code: '# 模拟虚拟内存页面置换（LRU算法）\n\nclass LRUPageCache:\n    def __init__(self, capacity):\n        self.cap = capacity\n        self.pages = []  # 最近使用的在末尾\n        self.hits = 0\n        self.misses = 0\n    \n    def access(self, page):\n        if page in self.pages:\n            self.pages.remove(page)\n            self.pages.append(page)\n            self.hits += 1\n            return "命中"\n        else:\n            evicted = None\n            if len(self.pages) >= self.cap:\n                evicted = self.pages.pop(0)  # 淘汰最久未使用\n            self.pages.append(page)\n            self.misses += 1\n            return f"缺页{f\" (淘汰页{evicted})\" if evicted else \"\"}"\n\nprint("=== LRU页面置换模拟 ===")\ncache = LRUPageCache(3)  # 3个物理页框\nrequests = [1, 2, 3, 4, 1, 2, 5, 1, 2, 3]\n\nfor p in requests:\n    result = cache.access(p)\n    print(f"  访问页{p}: {result} | 内存: {cache.pages}")\n\nrate = cache.hits / (cache.hits + cache.misses) * 100\nprint(f"\\n命中率: {rate:.1f}%")',
      steps: [
        {
          title: "虚拟内存：让程序以为自己独占内存",
          content: '<p>每个程序都认为自己拥有一块连续的、巨大的内存空间——这就是<strong>虚拟内存</strong>的魔法。OS在背后默默做地址翻译。</p><div class="theory-anim-box"><div class="theory-anim-title">🗺️ 虚拟地址 → 物理地址映射</div><div style="display:flex;gap:1rem;margin:1rem 0;flex-wrap:wrap;justify-content:center"><div class="t0-fadein" style="animation-delay:0.2s;flex:1;min-width:150px"><div style="font-weight:800;color:#6c5ce7;font-size:0.8rem;text-align:center;margin-bottom:0.5rem">🅰️ 程序A的视角</div><div style="display:flex;flex-direction:column;gap:0.2rem">' +
          '<div style="background:rgba(108,92,231,0.15);border:1px solid rgba(108,92,231,0.25);border-radius:4px;padding:0.3rem 0.5rem;font-size:0.65rem;font-family:monospace;display:flex;justify-content:space-between"><span style="color:rgba(255,255,255,0.4)">0x0000</span><span style="color:#6c5ce7">代码段</span></div>' +
          '<div style="background:rgba(0,206,201,0.15);border:1px solid rgba(0,206,201,0.25);border-radius:4px;padding:0.3rem 0.5rem;font-size:0.65rem;font-family:monospace;display:flex;justify-content:space-between"><span style="color:rgba(255,255,255,0.4)">0x1000</span><span style="color:#00cec9">堆</span></div>' +
          '<div style="background:rgba(255,255,255,0.03);border:1px dashed rgba(255,255,255,0.1);border-radius:4px;padding:0.8rem 0.5rem;font-size:0.6rem;color:rgba(255,255,255,0.3);text-align:center">... 未使用 ...</div>' +
          '<div style="background:rgba(255,152,0,0.15);border:1px solid rgba(255,152,0,0.25);border-radius:4px;padding:0.3rem 0.5rem;font-size:0.65rem;font-family:monospace;display:flex;justify-content:space-between"><span style="color:rgba(255,255,255,0.4)">0xFFFF</span><span style="color:#FF9800">栈</span></div></div></div><div style="display:flex;align-items:center;font-size:1.2rem;color:rgba(255,255,255,0.2)">→<br><span style="font-size:0.55rem">MMU<br>翻译</span><br>→</div><div class="t0-fadein" style="animation-delay:0.5s;flex:1;min-width:150px"><div style="font-weight:800;color:#FF9800;font-size:0.8rem;text-align:center;margin-bottom:0.5rem">🧩 实际物理内存</div><div style="display:flex;flex-direction:column;gap:0.2rem">' +
          '<div style="background:rgba(253,121,168,0.15);border:1px solid rgba(253,121,168,0.25);border-radius:4px;padding:0.3rem 0.5rem;font-size:0.65rem;color:#fd79a8">系统内核</div>' +
          '<div style="background:rgba(108,92,231,0.15);border:1px solid rgba(108,92,231,0.25);border-radius:4px;padding:0.3rem 0.5rem;font-size:0.65rem;color:#6c5ce7">程序A的代码</div>' +
          '<div style="background:rgba(0,206,201,0.15);border:1px solid rgba(0,206,201,0.25);border-radius:4px;padding:0.3rem 0.5rem;font-size:0.65rem;color:#00cec9">程序B的数据</div>' +
          '<div style="background:rgba(255,152,0,0.15);border:1px solid rgba(255,152,0,0.25);border-radius:4px;padding:0.3rem 0.5rem;font-size:0.65rem;color:#FF9800">程序A的栈</div>' +
          '<div style="background:rgba(105,240,174,0.15);border:1px solid rgba(105,240,174,0.25);border-radius:4px;padding:0.3rem 0.5rem;font-size:0.65rem;color:#69F0AE">空闲</div></div></div></div><div class="theory-callout">💡 虚拟内存的好处：①每个程序以为自己独占内存 ②实际物理内存不够时可以用硬盘来"假装"更多内存（换页）③不同程序的内存完全隔离，更安全</div></div>'
        },
        {
          title: "文件系统：磁盘上的数据管理",
          content: '<p><strong>文件系统</strong>负责在磁盘上组织和管理数据。它把"一串0和1"变成我们能理解的文件和文件夹。</p><div class="theory-anim-box"><div class="theory-anim-title">📁 文件系统的树形结构</div><div style="font-family:monospace;font-size:0.72rem;line-height:1.9;padding:0.5rem;background:rgba(0,0,0,0.2);border-radius:8px;margin:0.8rem 0"><span style="color:#FF9800;font-weight:700">/</span> (根目录)<br>├── <span style="color:#6c5ce7">bin/</span> 系统命令<br>│   ├── ls<br>│   └── cat<br>├── <span style="color:#00cec9">home/</span> 用户目录<br>│   └── <span style="color:#fd79a8">wangwang/</span><br>│       ├── 代码/<br>│       ├── 图片/<br>│       └── hello.py<br>├── <span style="color:#69F0AE">etc/</span> 配置文件<br>└── <span style="color:#FF9800">tmp/</span> 临时文件</div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.5rem;margin:0.8rem 0"><div class="t0-fadein" style="animation-delay:0.3s;background:rgba(108,92,231,0.1);border:1px solid rgba(108,92,231,0.25);border-radius:8px;padding:0.5rem;text-align:center"><div style="font-size:1.2rem">📄</div><div style="font-size:0.65rem;color:#6c5ce7;font-weight:700">ext4</div><div style="font-size:0.6rem;color:rgba(255,255,255,0.4)">Linux默认</div></div><div class="t0-fadein" style="animation-delay:0.5s;background:rgba(0,206,201,0.1);border:1px solid rgba(0,206,201,0.25);border-radius:8px;padding:0.5rem;text-align:center"><div style="font-size:1.2rem">🍎</div><div style="font-size:0.65rem;color:#00cec9;font-weight:700">APFS</div><div style="font-size:0.6rem;color:rgba(255,255,255,0.4)">macOS默认</div></div><div class="t0-fadein" style="animation-delay:0.7s;background:rgba(255,152,0,0.1);border:1px solid rgba(255,152,0,0.25);border-radius:8px;padding:0.5rem;text-align:center"><div style="font-size:1.2rem">🪟</div><div style="font-size:0.65rem;color:#FF9800;font-weight:700">NTFS</div><div style="font-size:0.6rem;color:rgba(255,255,255,0.4)">Windows默认</div></div></div><div class="theory-callout">💡 当你"删除"一个文件，文件系统只是把指向它的记录删了，数据还在磁盘上！这就是数据恢复软件的原理。</div></div>'
        }
      ],
      challenge: {
        description: "实现一个LRU缓存，容量为3页。依次访问页面1,2,3,4,1,2,5。打印每次访问后缓存中的页面和命中情况。",
        hint: "命中时把页面移到列表末尾，缺页时淘汰列表头部（最久未使用）",
        solution: 'pages = []\ncap = 3\nfor p in [1,2,3,4,1,2,5]:\n    if p in pages:\n        pages.remove(p)\n        pages.append(p)\n        print(f"访问{p}: 命中 {pages}")\n    else:\n        if len(pages) >= cap:\n            out = pages.pop(0)\n            print(f"访问{p}: 缺页(淘汰{out})", end="")\n        else:\n            print(f"访问{p}: 缺页", end="")\n        pages.append(p)\n        print(f" {pages}")'
      }
    }
  ]
};

registerChapter('theory', CHAPTER_V1_OS);
