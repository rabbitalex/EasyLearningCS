// 卷四 · C++ - 进阶篇
const CHAPTER_V4_CPP3 = {
  chapter: "第三章：C++ 进阶",
  icon: "🚀",
  lessons: [
    {
      id: "v4-cpp3-1",
      title: "智能指针与内存管理",
      xp: 30,
      code: '# 用Python模拟C++智能指针\n\nprint("=== C++ 智能指针（Python模拟）===")\n\nclass SmartPointer:\n    """模拟 unique_ptr：独占所有权"""\n    _instances = 0\n    \n    def __init__(self, value, name="unnamed"):\n        SmartPointer._instances += 1\n        self.value = value\n        self.name = name\n        self._alive = True\n        print(f"  📦 [{self.name}] 创建，值={value}，当前活跃指针数: {SmartPointer._instances}")\n    \n    def get(self):\n        if not self._alive:\n            print(f"  ❌ [{self.name}] 悬空指针！已被释放")\n            return None\n        return self.value\n    \n    def release(self):\n        if self._alive:\n            self._alive = False\n            SmartPointer._instances -= 1\n            print(f"  🗑️ [{self.name}] 释放内存，当前活跃指针数: {SmartPointer._instances}")\n\nclass SharedPointer:\n    """模拟 shared_ptr：引用计数"""\n    def __init__(self, value, name="shared"):\n        self.value = value\n        self.name = name\n        self.ref_count = 1\n        print(f"  📎 [{self.name}] 创建，引用计数: {self.ref_count}")\n    \n    def share(self, new_name):\n        self.ref_count += 1\n        print(f"  📎 [{new_name}] 共享引用，引用计数: {self.ref_count}")\n        return self\n    \n    def release(self, name):\n        self.ref_count -= 1\n        print(f"  📎 [{name}] 释放，引用计数: {self.ref_count}")\n        if self.ref_count == 0:\n            print(f"  🗑️ 引用计数为0，释放内存！")\n\nprint("\\n--- unique_ptr 独占所有权 ---")\np1 = SmartPointer(42, "p1")\nprint(f"  p1.get() = {p1.get()}")\np1.release()\np1.get()  # 悬空指针\n\nprint("\\n--- shared_ptr 共享所有权 ---")\nsp = SharedPointer([1,2,3], "sp1")\nsp2 = sp.share("sp2")\nsp3 = sp.share("sp3")\nsp.release("sp1")\nsp.release("sp2")\nsp.release("sp3")',
      steps: [
        {
          title: "C++内存管理：从手动到智能",
          content: `
<p>C++中内存管理是最容易出错的地方。<strong>智能指针</strong>通过RAII原则自动管理内存生命周期。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🧠 智能指针类型对比</div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.8rem;margin:1rem 0">
    <div class="t0-fadein" style="animation-delay:0.2s;background:rgba(9,132,227,0.12);border:1px solid rgba(9,132,227,0.3);border-radius:12px;padding:1rem">
      <div style="font-size:1.5rem;text-align:center;margin-bottom:0.3rem">☝️</div>
      <div style="font-weight:800;color:#0984e3;text-align:center;font-size:0.85rem">unique_ptr</div>
      <div style="font-size:0.65rem;color:rgba(255,255,255,0.5);margin-top:0.3rem;text-align:center">独占所有权<br>不能复制，只能移动<br>离开作用域自动释放</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.5s;background:rgba(108,92,231,0.12);border:1px solid rgba(108,92,231,0.3);border-radius:12px;padding:1rem">
      <div style="font-size:1.5rem;text-align:center;margin-bottom:0.3rem">👥</div>
      <div style="font-weight:800;color:#6c5ce7;text-align:center;font-size:0.85rem">shared_ptr</div>
      <div style="font-size:0.65rem;color:rgba(255,255,255,0.5);margin-top:0.3rem;text-align:center">共享所有权<br>引用计数追踪<br>最后一个释放时释放内存</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.8s;background:rgba(253,121,168,0.12);border:1px solid rgba(253,121,168,0.3);border-radius:12px;padding:1rem">
      <div style="font-size:1.5rem;text-align:center;margin-bottom:0.3rem">👻</div>
      <div style="font-weight:800;color:#fd79a8;text-align:center;font-size:0.85rem">weak_ptr</div>
      <div style="font-size:0.65rem;color:rgba(255,255,255,0.5);margin-top:0.3rem;text-align:center">弱引用<br>不影响引用计数<br>解决循环引用问题</div>
    </div>
  </div>
</div>`
        },
        {
          title: "引用计数动画演示",
          content: `
<p><strong>shared_ptr</strong>通过引用计数来管理内存：每多一个指针指向该内存，计数+1；每释放一个指针，计数-1。计数为0时自动释放。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📊 引用计数动画</div>
  <div id="refCountDemo" style="padding:1rem;text-align:center">
    <div style="margin-bottom:1rem">
      <div style="font-size:0.7rem;color:rgba(255,255,255,0.4)">内存中的对象</div>
      <div id="refObj" style="display:inline-block;padding:0.8rem 1.5rem;background:rgba(108,92,231,0.2);border:2px solid rgba(108,92,231,0.4);border-radius:12px;margin:0.5rem;transition:all 0.3s">
        <div style="font-weight:800;color:#6c5ce7;font-size:1.1rem" id="refObjVal">Data{42}</div>
        <div style="font-size:0.7rem;color:rgba(255,255,255,0.4)">ref_count: <span id="refCountVal" style="color:#FF9800;font-weight:800">0</span></div>
      </div>
    </div>
    <div id="refPtrs" style="display:flex;gap:0.5rem;justify-content:center;flex-wrap:wrap;margin-bottom:1rem"></div>
    <div style="display:flex;gap:0.5rem;justify-content:center">
      <button onclick="addRefPtr()" style="padding:0.4rem 1rem;border-radius:6px;border:none;background:#6c5ce7;color:white;font-weight:700;cursor:pointer;font-size:0.75rem">+ 添加shared_ptr</button>
      <button onclick="removeRefPtr()" style="padding:0.4rem 1rem;border-radius:6px;border:none;background:#fd79a8;color:white;font-weight:700;cursor:pointer;font-size:0.75rem">- 释放shared_ptr</button>
    </div>
  </div>
</div>
<script>
var refPtrCount=0,refPtrNames=[];
function addRefPtr(){refPtrCount++;refPtrNames.push('sp'+refPtrCount);renderRefPtrs();}
function removeRefPtr(){if(refPtrNames.length>0){refPtrNames.pop();renderRefPtrs();}}
function renderRefPtrs(){var el=document.getElementById('refPtrs');var cntEl=document.getElementById('refCountVal');var objEl=document.getElementById('refObj');el.innerHTML='';refPtrNames.forEach(function(n){el.innerHTML+='<div style="background:rgba(0,206,201,0.15);border:1px solid rgba(0,206,201,0.3);border-radius:8px;padding:0.4rem 0.8rem;font-size:0.75rem;font-weight:700;color:#00cec9;animation:treeExpand 0.2s ease">'+n+' →</div>';});cntEl.textContent=refPtrNames.length;if(refPtrNames.length===0){objEl.style.opacity='0.3';objEl.style.borderColor='rgba(253,121,168,0.4)';cntEl.style.color='#fd79a8';}else{objEl.style.opacity='1';objEl.style.borderColor='rgba(108,92,231,0.4)';cntEl.style.color='#FF9800';}}
</script>`
        }
      ],
      challenge: {
        description: "实现一个SharedPtr类，支持引用计数。创建一个共享对象，被3个指针引用，然后依次释放，观察引用计数变化。",
        hint: "用类变量存储引用计数",
        solution: 'class RefCounted:\n    def __init__(self, data):\n        self.data = data\n        self.ref_count = 0\n\nclass SharedPtr:\n    def __init__(self, obj):\n        self.obj = obj\n        obj.ref_count += 1\n        print(f"引用+1, count={obj.ref_count}")\n    def release(self):\n        self.obj.ref_count -= 1\n        print(f"引用-1, count={self.obj.ref_count}")\n        if self.obj.ref_count == 0:\n            print("引用为0, 内存释放!")\n\ndata = RefCounted("Hello")\np1 = SharedPtr(data)\np2 = SharedPtr(data)\np3 = SharedPtr(data)\np1.release()\np2.release()\np3.release()'
      }
    },
    {
      id: "v4-cpp3-2",
      title: "模板与STL —— 泛型编程",
      xp: 30,
      code: '# 用Python演示C++模板和STL概念\n\nprint("=== C++ 模板（Python模拟）===")\n\n# C++模板允许写类型无关的代码\n# template<typename T>\n# T max_val(T a, T b) { return a > b ? a : b; }\n\n# Python天然支持泛型（动态类型）\ndef max_val(a, b):\n    return a if a > b else b\n\nprint(f"  max(3, 5) = {max_val(3, 5)}")\nprint(f"  max(3.14, 2.72) = {max_val(3.14, 2.72)}")\nprint(f"  max(\'apple\', \'banana\') = {max_val(\'apple\', \'banana\')}")\n\nprint("\\n=== STL 容器（Python对应）===")\ncontainers = [\n    ("vector<int>", "list", [1,2,3,4,5]),\n    ("map<str,int>", "dict", {"a":1,"b":2}),\n    ("set<int>", "set", {1,2,3,4}),\n    ("stack<int>", "list as stack", []),\n    ("queue<int>", "collections.deque", []),\n]\nfor cpp_name, py_name, example in containers:\n    print(f"  C++: {cpp_name:20s} → Python: {py_name}")\n\nprint("\\n=== STL 算法 ===")\ndata = [64, 25, 12, 22, 11]\nprint(f"  原始: {data}")\nprint(f"  sort: {sorted(data)}")\nprint(f"  reverse: {sorted(data, reverse=True)}")\nprint(f"  min: {min(data)}, max: {max(data)}")',
      steps: [
        {
          title: "模板：一次编写，多种类型",
          content: `
<p>C++<strong>模板</strong>让你编写不依赖特定类型的通用代码，编译器会根据使用时的类型自动生成对应版本。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🧬 模板实例化过程</div>
  <div style="display:flex;flex-direction:column;gap:0.5rem;margin:1rem 0">
    <div class="t0-fadein" style="animation-delay:0.2s;text-align:center">
      <div style="display:inline-block;background:rgba(9,132,227,0.15);border:2px solid rgba(9,132,227,0.3);border-radius:10px;padding:0.6rem 1.2rem;font-family:monospace;font-size:0.75rem;color:#0984e3">template&lt;typename T&gt; T max(T a, T b)</div>
    </div>
    <div style="text-align:center;color:rgba(255,255,255,0.2);font-size:0.8rem">编译时展开 ↓</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.5rem">
      <div class="t0-fadein" style="animation-delay:0.5s;background:rgba(0,206,201,0.1);border:1px solid rgba(0,206,201,0.3);border-radius:8px;padding:0.5rem;text-align:center;font-family:monospace;font-size:0.65rem;color:#00cec9">int max(int a, int b)</div>
      <div class="t0-fadein" style="animation-delay:0.7s;background:rgba(255,152,0,0.1);border:1px solid rgba(255,152,0,0.3);border-radius:8px;padding:0.5rem;text-align:center;font-family:monospace;font-size:0.65rem;color:#FF9800">double max(double a, double b)</div>
      <div class="t0-fadein" style="animation-delay:0.9s;background:rgba(253,121,168,0.1);border:1px solid rgba(253,121,168,0.3);border-radius:8px;padding:0.5rem;text-align:center;font-family:monospace;font-size:0.65rem;color:#fd79a8">string max(string a, string b)</div>
    </div>
  </div>
  <div class="theory-callout">💡 模板是C++实现"零成本抽象"的关键——泛型代码编译后和手写特定类型代码一样快！</div>
</div>`
        },
        {
          title: "STL：C++的标准宝库",
          content: `
<p><strong>STL（标准模板库）</strong>是C++最强大的武器库，包含容器、算法、迭代器三大组件。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📦 STL 容器速查表</div>
  <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:0.6rem;margin:0.8rem 0;font-size:0.72rem">
    <div class="t0-fadein" style="animation-delay:0.2s;background:rgba(0,206,201,0.08);border:1px solid rgba(0,206,201,0.2);border-radius:8px;padding:0.6rem">
      <div style="font-weight:700;color:#00cec9;margin-bottom:0.2rem">📋 vector (动态数组)</div>
      <div style="color:rgba(255,255,255,0.4);font-size:0.65rem">连续内存、随机访问O(1)、尾部操作O(1)</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.3s;background:rgba(9,132,227,0.08);border:1px solid rgba(9,132,227,0.2);border-radius:8px;padding:0.6rem">
      <div style="font-weight:700;color:#0984e3;margin-bottom:0.2rem">🔗 list (双向链表)</div>
      <div style="color:rgba(255,255,255,0.4);font-size:0.65rem">任意位置插入O(1)、不支持随机访问</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.4s;background:rgba(108,92,231,0.08);border:1px solid rgba(108,92,231,0.2);border-radius:8px;padding:0.6rem">
      <div style="font-weight:700;color:#6c5ce7;margin-bottom:0.2rem">🗺️ map (红黑树)</div>
      <div style="color:rgba(255,255,255,0.4);font-size:0.65rem">键值对、有序、查找O(log n)</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.5s;background:rgba(255,152,0,0.08);border:1px solid rgba(255,152,0,0.2);border-radius:8px;padding:0.6rem">
      <div style="font-weight:700;color:#FF9800;margin-bottom:0.2rem">#️⃣ unordered_map (哈希)</div>
      <div style="color:rgba(255,255,255,0.4);font-size:0.65rem">键值对、无序、查找O(1)均摊</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.6s;background:rgba(253,121,168,0.08);border:1px solid rgba(253,121,168,0.2);border-radius:8px;padding:0.6rem">
      <div style="font-weight:700;color:#fd79a8;margin-bottom:0.2rem">📚 stack / queue</div>
      <div style="color:rgba(255,255,255,0.4);font-size:0.65rem">LIFO栈 / FIFO队列，适配器容器</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.7s;background:rgba(105,240,174,0.08);border:1px solid rgba(105,240,174,0.2);border-radius:8px;padding:0.6rem">
      <div style="font-weight:700;color:#69F0AE;margin-bottom:0.2rem">🎯 set (集合)</div>
      <div style="color:rgba(255,255,255,0.4);font-size:0.65rem">唯一元素、有序、查找O(log n)</div>
    </div>
  </div>
</div>`
        }
      ],
      challenge: {
        description: "用Python实现一个简易的template函数模拟器：创建一个函数apply_op(a, b, op)，支持不同类型的加减乘除运算。",
        hint: "利用Python的动态类型特性",
        solution: 'def apply_op(a, b, op):\n    ops = {\n        "+": lambda x,y: x+y,\n        "-": lambda x,y: x-y,\n        "*": lambda x,y: x*y,\n        "/": lambda x,y: x/y\n    }\n    result = ops[op](a, b)\n    print(f"{type(a).__name__}: {a} {op} {b} = {result}")\n    return result\n\napply_op(10, 3, "+")\napply_op(3.14, 2.0, "*")\napply_op("Hello ", "World", "+")'
      }
    }
  ]
};

registerChapter('cpp', CHAPTER_V4_CPP3);
