// 卷四 · C++ - 基础篇
const CHAPTER_V4_CPP1 = {
  chapter: "第一章：C++ 基础",
  icon: "⚡",
  lessons: [
    {
      id: "v4-cpp1-1",
      title: "Hello C++ —— 第一个程序",
      xp: 20,
      code: '# 用Python对比C++语法\n# C++是编译型语言，我们用Python来对比学习\n\nprint("=== Python vs C++ 语法对比 ===")\n\nprint("\\n--- Hello World ---")\nprint("Python: print(\'Hello, World!\')")\nprint(\'C++:    cout << "Hello, World!" << endl;\')\n\nprint("\\n--- 变量声明 ---")\nx = 42\nprint(f"Python: x = {x}")\nprint(f"C++:    int x = {x};")\n\nprint("\\n--- 循环 ---")\nprint("Python: for i in range(5):")\nprint("C++:    for(int i=0; i<5; i++){}")\n\nprint("\\n--- 函数 ---")\nprint("Python: def add(a, b): return a+b")\nprint("C++:    int add(int a, int b){ return a+b; }")\n\n# 实际运行Python版\ndef add(a, b):\n    return a + b\n\nfor i in range(5):\n    print(f"  {i}: {add(i, 10)}")',
      steps: [
        {
          title: "C++：高性能编程之王",
          content: `
<p><strong>C++</strong>是世界上最强大的编程语言之一，用于开发操作系统、游戏引擎、数据库等高性能软件。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🏆 C++ 的应用领域</div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.8rem;margin:1rem 0">
    <div class="t0-fadein" style="animation-delay:0.2s;background:rgba(9,132,227,0.12);border:1px solid rgba(9,132,227,0.3);border-radius:12px;padding:0.8rem;text-align:center">
      <div style="font-size:1.8rem;margin-bottom:0.3rem">🎮</div>
      <div style="font-weight:800;color:#0984e3;font-size:0.85rem">游戏开发</div>
      <div style="font-size:0.65rem;color:rgba(255,255,255,0.4);margin-top:0.2rem">Unreal Engine<br>Unity底层</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.4s;background:rgba(108,92,231,0.12);border:1px solid rgba(108,92,231,0.3);border-radius:12px;padding:0.8rem;text-align:center">
      <div style="font-size:1.8rem;margin-bottom:0.3rem">🖥️</div>
      <div style="font-weight:800;color:#6c5ce7;font-size:0.85rem">操作系统</div>
      <div style="font-size:0.65rem;color:rgba(255,255,255,0.4);margin-top:0.2rem">Windows<br>Linux内核</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.6s;background:rgba(0,206,201,0.12);border:1px solid rgba(0,206,201,0.3);border-radius:12px;padding:0.8rem;text-align:center">
      <div style="font-size:1.8rem;margin-bottom:0.3rem">🤖</div>
      <div style="font-weight:800;color:#00cec9;font-size:0.85rem">AI框架</div>
      <div style="font-size:0.65rem;color:rgba(255,255,255,0.4);margin-top:0.2rem">TensorFlow<br>PyTorch底层</div>
    </div>
  </div>
</div>`
        },
        {
          title: "C++ vs Python 语法对比",
          content: `
<p>C++ 是<strong>静态类型、编译型</strong>语言，Python是<strong>动态类型、解释型</strong>语言。让我们逐项对比：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📝 语法对比表</div>
  <div style="overflow-x:auto">
    <table style="width:100%;border-collapse:collapse;font-size:0.72rem;margin:0.5rem 0">
      <tr style="border-bottom:1px solid rgba(255,255,255,0.1)">
        <th style="padding:0.5rem;text-align:left;color:rgba(255,255,255,0.4);font-size:0.65rem">特性</th>
        <th style="padding:0.5rem;text-align:center;color:#0984e3;font-weight:700">C++</th>
        <th style="padding:0.5rem;text-align:center;color:#00cec9;font-weight:700">Python</th>
      </tr>
      <tr class="t0-fadein" style="animation-delay:0.2s;border-bottom:1px solid rgba(255,255,255,0.05)">
        <td style="padding:0.4rem 0.5rem;color:rgba(255,255,255,0.5)">Hello World</td>
        <td style="padding:0.4rem;font-family:monospace;background:rgba(9,132,227,0.05);border-radius:4px;color:rgba(255,255,255,0.7)">cout &lt;&lt; "Hello";</td>
        <td style="padding:0.4rem;font-family:monospace;background:rgba(0,206,201,0.05);border-radius:4px;color:rgba(255,255,255,0.7)">print("Hello")</td>
      </tr>
      <tr class="t0-fadein" style="animation-delay:0.3s;border-bottom:1px solid rgba(255,255,255,0.05)">
        <td style="padding:0.4rem 0.5rem;color:rgba(255,255,255,0.5)">变量</td>
        <td style="padding:0.4rem;font-family:monospace;background:rgba(9,132,227,0.05);border-radius:4px;color:rgba(255,255,255,0.7)">int x = 42;</td>
        <td style="padding:0.4rem;font-family:monospace;background:rgba(0,206,201,0.05);border-radius:4px;color:rgba(255,255,255,0.7)">x = 42</td>
      </tr>
      <tr class="t0-fadein" style="animation-delay:0.4s;border-bottom:1px solid rgba(255,255,255,0.05)">
        <td style="padding:0.4rem 0.5rem;color:rgba(255,255,255,0.5)">数组</td>
        <td style="padding:0.4rem;font-family:monospace;background:rgba(9,132,227,0.05);border-radius:4px;color:rgba(255,255,255,0.7)">int a[5]={1,2,3};</td>
        <td style="padding:0.4rem;font-family:monospace;background:rgba(0,206,201,0.05);border-radius:4px;color:rgba(255,255,255,0.7)">a = [1,2,3]</td>
      </tr>
      <tr class="t0-fadein" style="animation-delay:0.5s;border-bottom:1px solid rgba(255,255,255,0.05)">
        <td style="padding:0.4rem 0.5rem;color:rgba(255,255,255,0.5)">类型</td>
        <td style="padding:0.4rem;font-family:monospace;background:rgba(9,132,227,0.05);border-radius:4px;color:#0984e3;font-weight:700">静态类型</td>
        <td style="padding:0.4rem;font-family:monospace;background:rgba(0,206,201,0.05);border-radius:4px;color:#00cec9;font-weight:700">动态类型</td>
      </tr>
      <tr class="t0-fadein" style="animation-delay:0.6s">
        <td style="padding:0.4rem 0.5rem;color:rgba(255,255,255,0.5)">编译</td>
        <td style="padding:0.4rem;font-family:monospace;background:rgba(9,132,227,0.05);border-radius:4px;color:#0984e3;font-weight:700">编译为机器码</td>
        <td style="padding:0.4rem;font-family:monospace;background:rgba(0,206,201,0.05);border-radius:4px;color:#00cec9;font-weight:700">解释执行</td>
      </tr>
    </table>
  </div>
</div>`
        },
        {
          title: "C++ 编译流程",
          content: `
<p>C++代码需要经过<strong>预处理→编译→汇编→链接</strong>四个阶段才能变成可执行程序。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔧 C++ 编译流程动画</div>
  <div style="display:flex;align-items:center;justify-content:center;gap:0.4rem;flex-wrap:wrap;margin:1rem 0">
    <div class="t0-fadein" style="animation-delay:0.2s;background:rgba(9,132,227,0.15);border:1px solid rgba(9,132,227,0.3);border-radius:10px;padding:0.6rem;text-align:center;min-width:80px">
      <div style="font-size:1.2rem;margin-bottom:0.2rem">📝</div>
      <div style="font-size:0.7rem;font-weight:700;color:#0984e3">源代码</div>
      <div style="font-size:0.55rem;color:rgba(255,255,255,0.3)">.cpp</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.3s;color:rgba(255,255,255,0.3)">→</div>
    <div class="t0-fadein" style="animation-delay:0.4s;background:rgba(108,92,231,0.15);border:1px solid rgba(108,92,231,0.3);border-radius:10px;padding:0.6rem;text-align:center;min-width:80px">
      <div style="font-size:1.2rem;margin-bottom:0.2rem">⚙️</div>
      <div style="font-size:0.7rem;font-weight:700;color:#6c5ce7">预处理</div>
      <div style="font-size:0.55rem;color:rgba(255,255,255,0.3)">#include展开</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.5s;color:rgba(255,255,255,0.3)">→</div>
    <div class="t0-fadein" style="animation-delay:0.6s;background:rgba(0,206,201,0.15);border:1px solid rgba(0,206,201,0.3);border-radius:10px;padding:0.6rem;text-align:center;min-width:80px">
      <div style="font-size:1.2rem;margin-bottom:0.2rem">🔄</div>
      <div style="font-size:0.7rem;font-weight:700;color:#00cec9">编译</div>
      <div style="font-size:0.55rem;color:rgba(255,255,255,0.3)">→ 汇编码</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.7s;color:rgba(255,255,255,0.3)">→</div>
    <div class="t0-fadein" style="animation-delay:0.8s;background:rgba(255,152,0,0.15);border:1px solid rgba(255,152,0,0.3);border-radius:10px;padding:0.6rem;text-align:center;min-width:80px">
      <div style="font-size:1.2rem;margin-bottom:0.2rem">🔨</div>
      <div style="font-size:0.7rem;font-weight:700;color:#FF9800">汇编</div>
      <div style="font-size:0.55rem;color:rgba(255,255,255,0.3)">→ 目标文件.o</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.9s;color:rgba(255,255,255,0.3)">→</div>
    <div class="t0-fadein" style="animation-delay:1.0s;background:rgba(105,240,174,0.15);border:1px solid rgba(105,240,174,0.3);border-radius:10px;padding:0.6rem;text-align:center;min-width:80px">
      <div style="font-size:1.2rem;margin-bottom:0.2rem">🔗</div>
      <div style="font-size:0.7rem;font-weight:700;color:#69F0AE">链接</div>
      <div style="font-size:0.55rem;color:rgba(255,255,255,0.3)">→ 可执行文件</div>
    </div>
  </div>
  <div class="theory-callout">💡 C++编译后直接生成机器码，所以运行速度极快！Python则是运行时逐行解释。</div>
</div>`
        }
      ],
      challenge: {
        description: "用Python模拟C++变量类型系统：创建一个TypedVar类，构造时指定类型(int/float/str)，赋值时检查类型匹配。",
        hint: "在__init__中记录类型，在set_value中检查类型",
        solution: 'class TypedVar:\n    def __init__(self, var_type, value):\n        self.var_type = var_type\n        self.value = value\n    def set_value(self, value):\n        if type(value).__name__ != self.var_type:\n            print(f"类型错误! 期望{self.var_type}，得到{type(value).__name__}")\n            return\n        self.value = value\n        print(f"赋值成功: {value}")\n\nx = TypedVar("int", 42)\nx.set_value(100)   # OK\nx.set_value("hi")  # 类型错误'
      }
    },
    {
      id: "v4-cpp1-2",
      title: "指针与引用 —— C++的独门绝技",
      xp: 25,
      code: '# 用Python模拟指针和引用的概念\n\nprint("=== 模拟C++指针概念 ===")\n\n# 在C++中，指针存储的是变量的内存地址\nmemory = {}  # 模拟内存\nnext_addr = 0x1000\n\ndef allocate(name, value):\n    global next_addr\n    addr = next_addr\n    memory[addr] = value\n    next_addr += 4\n    print(f"  变量 {name}: 值={value}, 地址=0x{addr:04X}")\n    return addr\n\ndef dereference(addr):\n    return memory.get(addr, None)\n\nx_addr = allocate("x", 42)\ny_addr = allocate("y", 100)\n\nprint(f"\\n  *x_addr (解引用) = {dereference(x_addr)}")\nprint(f"  *y_addr (解引用) = {dereference(y_addr)}")\n\n# 指针可以修改它指向的值\nprint("\\n=== 通过指针修改值 ===")\nprint(f"  修改前: *x = {dereference(x_addr)}")\nmemory[x_addr] = 999\nprint(f"  修改后: *x = {dereference(x_addr)}")\n\n# 引用 vs 指针\nprint("\\n=== 引用 vs 指针 ===")\nprint("  引用: 变量的别名，必须初始化，不能为空")\nprint("  指针: 存储地址，可以为空(nullptr)，可以重新指向")',
      steps: [
        {
          title: "指针：直接操控内存的利器",
          content: `
<p><strong>指针</strong>是C++最强大也最危险的特性——它存储的是变量的<strong>内存地址</strong>。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎯 指针与内存地址动画</div>
  <div style="padding:1rem">
    <div style="display:flex;gap:2rem;justify-content:center;align-items:flex-start;flex-wrap:wrap">
      <div style="text-align:center">
        <div style="font-size:0.7rem;color:rgba(255,255,255,0.4);margin-bottom:0.3rem">变量区</div>
        <div class="t0-fadein" style="animation-delay:0.2s;display:flex;gap:2px;flex-direction:column">
          <div style="display:flex;border:1px solid rgba(0,206,201,0.3);border-radius:6px;overflow:hidden">
            <div style="background:rgba(0,206,201,0.15);padding:0.4rem 0.6rem;font-size:0.7rem;color:#00cec9;font-weight:700;min-width:35px">x</div>
            <div style="padding:0.4rem;font-family:monospace;font-size:0.75rem;color:rgba(255,255,255,0.7);min-width:40px;text-align:center">42</div>
            <div style="padding:0.4rem;font-family:monospace;font-size:0.55rem;color:rgba(255,255,255,0.3);background:rgba(255,255,255,0.03);min-width:50px">0x1000</div>
          </div>
          <div style="display:flex;border:1px solid rgba(255,152,0,0.3);border-radius:6px;overflow:hidden">
            <div style="background:rgba(255,152,0,0.15);padding:0.4rem 0.6rem;font-size:0.7rem;color:#FF9800;font-weight:700;min-width:35px">y</div>
            <div style="padding:0.4rem;font-family:monospace;font-size:0.75rem;color:rgba(255,255,255,0.7);min-width:40px;text-align:center">100</div>
            <div style="padding:0.4rem;font-family:monospace;font-size:0.55rem;color:rgba(255,255,255,0.3);background:rgba(255,255,255,0.03);min-width:50px">0x1004</div>
          </div>
        </div>
      </div>
      <div style="display:flex;align-items:center;color:rgba(255,255,255,0.2);font-size:1.5rem;margin-top:1rem">←</div>
      <div style="text-align:center">
        <div style="font-size:0.7rem;color:rgba(255,255,255,0.4);margin-bottom:0.3rem">指针区</div>
        <div class="t0-fadein" style="animation-delay:0.5s">
          <div style="display:flex;border:2px solid rgba(253,121,168,0.4);border-radius:6px;overflow:hidden">
            <div style="background:rgba(253,121,168,0.15);padding:0.4rem 0.6rem;font-size:0.7rem;color:#fd79a8;font-weight:700">ptr</div>
            <div style="padding:0.4rem;font-family:monospace;font-size:0.75rem;color:#fd79a8;font-weight:700">0x1000</div>
          </div>
          <div style="font-size:0.6rem;color:rgba(255,255,255,0.3);margin-top:0.3rem">int* ptr = &x;</div>
        </div>
      </div>
    </div>
    <div class="theory-callout" style="margin-top:1rem">💡 <code>int* ptr = &x;</code> → ptr存储x的地址。<code>*ptr</code> → 通过地址访问x的值（解引用）</div>
  </div>
</div>`
        }
      ],
      challenge: {
        description: "用Python字典模拟内存，实现allocate(name, value)和get_value(addr)函数，模拟指针的取地址和解引用。",
        hint: "用递增的整数模拟内存地址",
        solution: 'memory = {}\naddr_counter = 0x1000\n\ndef allocate(name, value):\n    global addr_counter\n    addr = addr_counter\n    memory[addr] = value\n    addr_counter += 4\n    return addr\n\ndef get_value(addr):\n    return memory.get(addr, None)\n\nx = allocate("x", 42)\ny = allocate("y", 99)\nprint(f"x地址: 0x{x:04X}, 值: {get_value(x)}")\nprint(f"y地址: 0x{y:04X}, 值: {get_value(y)}")'
      }
    }
  ]
};

registerChapter('cpp', CHAPTER_V4_CPP1);
