// 第十章：高级特性
const CHAPTER11 = {
  chapter: "第十章：高级特性",
  icon: "🚀",
  lessons: [
    {
      id: "10-1",
      title: "切片 - 快速截取",
      xp: 20,
      code: 'fruits = ["苹果", "香蕉", "橘子", "葡萄", "西瓜"]\nprint(fruits[1:3])\nprint(fruits[:2])\nprint(fruits[-2:])\nprint(fruits[::2])',
      steps: [
        {
          title: "什么是切片？",
          content: `<p>切片就像用剪刀✂️ <strong>裁剪列表</strong>，快速取出你想要的一段数据！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">✂️ 切片语法：list[start:stop:step]</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">start</span><span class="ch1-vf-code">起始位置（包含）</span><span class="ch1-vf-desc">默认0</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">stop</span><span class="ch1-vf-code">结束位置（不包含）</span><span class="ch1-vf-desc">默认末尾</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">step</span><span class="ch1-vf-code">步长（每隔几个取一个）</span><span class="ch1-vf-desc">默认1</span></div>
  </div>
  <div class="theory-callout">💡 记住口诀：<strong>包头不包尾</strong>！切片[1:3]取索引1和2，不取3。</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,206,201,0.08));border:1px solid rgba(108,92,231,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(108,92,231,0.1);border-left:3px solid #6c5ce7;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
</style>`
        },
        {
          title: "常用切片操作",
          content: `<p>来看看最常用的切片技巧：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎯 切片实战速查</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">①</span><span class="ch1-vf-code">L[1:3]</span><span class="ch1-vf-desc">取索引1到2</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">②</span><span class="ch1-vf-code">L[:3]</span><span class="ch1-vf-desc">取前3个元素</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">③</span><span class="ch1-vf-code">L[-2:]</span><span class="ch1-vf-desc">取最后2个</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">④</span><span class="ch1-vf-code">L[::2]</span><span class="ch1-vf-desc">每隔一个取一个</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">⑤</span><span class="ch1-vf-code">L[::-1]</span><span class="ch1-vf-desc">反转整个列表</span></div>
  </div>
  <div class="theory-callout">🎨 字符串也可以切片哦！<code>"Hello"[1:3]</code> → <code>"el"</code></div>
</div>`,
          codeToLoad: 'L = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nprint("原列表:", L)\nprint("L[2:5] =", L[2:5])\nprint("L[:3] =", L[:3])\nprint("L[-3:] =", L[-3:])\nprint("L[::2] =", L[::2])\nprint("L[::-1] =", L[::-1])\n\n# 字符串切片\ns = "Hello World"\nprint("s[:5] =", s[:5])\nprint("s[6:] =", s[6:])'
        },
        {
          title: "动手试试切片！",
          content: `<p>切片是Python中最优雅的特性之一，比循环取值简洁得多！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎮 切片 vs 循环</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">❌</span><span class="ch1-vf-code">for i in range(3): result.append(L[i])</span><span class="ch1-vf-desc">循环取前3个</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">✅</span><span class="ch1-vf-code">result = L[:3]</span><span class="ch1-vf-desc">切片一行搞定！</span></div>
  </div>
  <div class="theory-callout">🚀 切片返回的是<strong>新列表</strong>，不会修改原列表。这是Python的安全设计！</div>
</div>`,
          codeToLoad: '# 用切片实现各种操作\nnums = list(range(1, 11))\nprint("原列表:", nums)\nprint("前5个:", nums[:5])\nprint("后3个:", nums[-3:])\nprint("奇数位:", nums[::2])\nprint("偶数位:", nums[1::2])\nprint("倒序:", nums[::-1])\n\n# 切片复制列表\ncopy = nums[:]\nprint("复制:", copy)'
        }
      ],
      challenge: {
        desc: "🎯 有一个列表 L = [1,2,3,...,20]，用切片取出：1)前10个 2)后5个 3)所有奇数 4)倒序排列",
        hint: 'L = list(range(1, 21))\nprint(L[:10])\nprint(L[-5:])\nprint(L[::2])\nprint(L[::-1])',
        template: '# 切片练习\nL = list(range(1, 21))\n',
        check: function(output) { return output.indexOf("[1, 2, 3") !== -1 && output.indexOf("20") !== -1; }
      }
    },
    {
      id: "10-2",
      title: "迭代 - 遍历一切",
      xp: 20,
      code: 'for ch in "Python":\n    print(ch)\n\nd = {"name": "小明", "age": 10}\nfor k, v in d.items():\n    print(f"{k}: {v}")',
      steps: [
        {
          title: "什么是迭代？",
          content: `<p><strong>迭代</strong>就是按顺序逐个访问集合中的元素，Python的for循环就是最常见的迭代方式！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔄 Python中可迭代的对象</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">📋</span><span class="ch1-vf-code">list 列表</span><span class="ch1-vf-desc">[1, 2, 3]</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">📝</span><span class="ch1-vf-code">str 字符串</span><span class="ch1-vf-desc">"Hello"</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">📖</span><span class="ch1-vf-code">dict 字典</span><span class="ch1-vf-desc">{"a": 1}</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">📦</span><span class="ch1-vf-code">tuple 元组</span><span class="ch1-vf-desc">(1, 2, 3)</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">🔢</span><span class="ch1-vf-code">range 范围</span><span class="ch1-vf-desc">range(10)</span></div>
  </div>
  <div class="theory-callout">💡 Python的for循环比其他语言更灵活——可以迭代<strong>任何可迭代对象</strong>！</div>
</div>`
        },
        {
          title: "enumerate获取索引",
          content: `<p>想在迭代时同时获取索引？用 <code>enumerate()</code>！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔢 enumerate() 同时获取索引和值</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">❌</span><span class="ch1-vf-code">for i in range(len(L)): print(i, L[i])</span><span class="ch1-vf-desc">笨方法</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">✅</span><span class="ch1-vf-code">for i, v in enumerate(L): print(i, v)</span><span class="ch1-vf-desc">Pythonic!</span></div>
  </div>
  <div class="theory-callout">🎯 <code>enumerate()</code> 返回 <strong>(索引, 值)</strong> 的元组对，是Python程序员的最爱！</div>
</div>`,
          codeToLoad: 'fruits = ["苹果", "香蕉", "橘子", "葡萄"]\n\n# 使用enumerate获取索引\nfor i, fruit in enumerate(fruits):\n    print(f"第{i+1}个水果: {fruit}")\n\n# 迭代字典\nscores = {"语文": 95, "数学": 98, "英语": 92}\nfor subject, score in scores.items():\n    print(f"{subject}: {score}分")'
        }
      ],
      challenge: {
        desc: "🎯 用enumerate遍历列表['A','B','C','D']，打印格式：'第1项: A' ",
        hint: 'L = ["A", "B", "C", "D"]\nfor i, v in enumerate(L):\n    print(f"第{i+1}项: {v}")',
        template: '# 使用enumerate\nL = ["A", "B", "C", "D"]\n',
        check: function(output) { return output.indexOf("第1") !== -1 && output.indexOf("D") !== -1; }
      }
    },
    {
      id: "10-3",
      title: "列表生成式 - 一行创建列表",
      xp: 25,
      code: 'squares = [x**2 for x in range(1, 11)]\nprint(squares)\n\nevens = [x for x in range(1, 21) if x % 2 == 0]\nprint(evens)',
      steps: [
        {
          title: "列表生成式的魔法",
          content: `<p><strong>列表生成式</strong>（List Comprehension）让你用一行代码生成列表！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">✨ 语法：[表达式 for 变量 in 可迭代对象]</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">旧</span><span class="ch1-vf-code">L=[]<br>for x in range(5):<br>    L.append(x**2)</span><span class="ch1-vf-desc">3行代码</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">新</span><span class="ch1-vf-code">[x**2 for x in range(5)]</span><span class="ch1-vf-desc">1行搞定！</span></div>
  </div>
  <div class="theory-callout">💡 列表生成式是Python中最优雅的语法之一，<strong>简洁且高效</strong>！</div>
</div>`
        },
        {
          title: "带条件的列表生成式",
          content: `<p>还可以加 <code>if</code> 条件过滤！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎯 带条件的列表生成式</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">①</span><span class="ch1-vf-code">[x for x in range(20) if x%2==0]</span><span class="ch1-vf-desc">取偶数</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">②</span><span class="ch1-vf-code">[x.upper() for x in L if len(x)>3]</span><span class="ch1-vf-desc">条件+转换</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">③</span><span class="ch1-vf-code">[a+b for a in 'AB' for b in '12']</span><span class="ch1-vf-desc">双重循环</span></div>
  </div>
  <div class="theory-callout">⚠️ 列表生成式适合简单的转换，太复杂的逻辑还是用普通for循环更清晰！</div>
</div>`,
          codeToLoad: '# 平方数\nsquares = [x**2 for x in range(1, 11)]\nprint("平方数:", squares)\n\n# 过滤偶数\nevens = [x for x in range(1, 21) if x % 2 == 0]\nprint("偶数:", evens)\n\n# 双重循环\npairs = [a+b for a in "ABC" for b in "123"]\nprint("组合:", pairs)\n\n# 字符串处理\nwords = ["Hello", "World", "Python"]\nlower = [w.lower() for w in words]\nprint("小写:", lower)'
        }
      ],
      challenge: {
        desc: "🎯 用列表生成式生成1-30中所有能被3整除的数的平方",
        hint: 'result = [x**2 for x in range(1, 31) if x % 3 == 0]\nprint(result)',
        template: '# 列表生成式\n',
        check: function(output) { return output.indexOf("9") !== -1 && output.indexOf("900") !== -1; }
      }
    },
    {
      id: "10-4",
      title: "生成器 - 惰性计算",
      xp: 25,
      code: 'g = (x**2 for x in range(5))\nfor val in g:\n    print(val)\n\ndef fib(n):\n    a, b = 0, 1\n    for i in range(n):\n        yield a\n        a, b = b, a + b\n\nfor x in fib(8):\n    print(x)',
      steps: [
        {
          title: "生成器是什么？",
          content: `<p>生成器就像一个<strong>懒洋洋的工厂</strong>🏭 — 不一次造完所有产品，而是你要一个才造一个！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🏭 生成器 vs 列表</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">列表</span><span class="ch1-vf-code">[x**2 for x in range(100万)]</span><span class="ch1-vf-desc">一次性占用大量内存</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">生成器</span><span class="ch1-vf-code">(x**2 for x in range(100万))</span><span class="ch1-vf-desc">用多少算多少，省内存</span></div>
  </div>
  <div class="theory-callout">💡 把方括号 <code>[]</code> 换成圆括号 <code>()</code>，列表生成式就变成了生成器！</div>
</div>`
        },
        {
          title: "yield关键字",
          content: `<p>用 <code>yield</code> 可以创建更强大的生成器函数：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎬 yield vs return</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">return</span><span class="ch1-vf-code">返回值后函数就结束了</span><span class="ch1-vf-desc">一次性</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">yield</span><span class="ch1-vf-code">暂停函数，下次调用继续执行</span><span class="ch1-vf-desc">可恢复</span></div>
  </div>
  <div class="theory-callout">🎯 经典例子：用yield实现<strong>斐波那契数列</strong>生成器！</div>
</div>`,
          codeToLoad: '# 生成器表达式\ng = (x**2 for x in range(5))\nprint("生成器:", g)\nfor val in g:\n    print(val)\n\n# yield 生成器函数\ndef fib(n):\n    a, b = 0, 1\n    for i in range(n):\n        yield a\n        a, b = b, a + b\n\nprint("斐波那契数列:")\nfor x in fib(10):\n    print(x)'
        }
      ],
      challenge: {
        desc: "🎯 用yield写一个生成器函数，产生前N个三角数(1,3,6,10,15...)",
        hint: 'def triangles(n):\n    total = 0\n    for i in range(1, n+1):\n        total += i\n        yield total\n\nfor t in triangles(5):\n    print(t)',
        template: '# 三角数生成器\n',
        check: function(output) { return output.indexOf("1") !== -1 && output.indexOf("15") !== -1; }
      }
    },
    {
      id: "10-5",
      title: "迭代器 - 统一的遍历接口",
      xp: 20,
      code: 'it = iter([1, 2, 3])\nprint(next(it))\nprint(next(it))\nprint(next(it))\n\n# 检查对象是否可迭代\ndef is_iterable(obj):\n    try:\n        iter(obj)\n        return True\n    except TypeError:\n        return False\n\nprint("列表可迭代?", is_iterable([]))\nprint("数字可迭代?", is_iterable(123))\nprint("字符串可迭代?", is_iterable("hello"))',
      steps: [
        {
          title: "迭代器协议",
          content: `<p><strong>迭代器</strong>是一个实现了 <code>__iter__</code> 和 <code>__next__</code> 方法的对象。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔄 迭代器三要素</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">①</span><span class="ch1-vf-code">iter(对象)</span><span class="ch1-vf-desc">获取迭代器</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">②</span><span class="ch1-vf-code">next(迭代器)</span><span class="ch1-vf-desc">获取下一个元素</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">③</span><span class="ch1-vf-code">StopIteration</span><span class="ch1-vf-desc">没有元素时抛出异常</span></div>
  </div>
  <div class="theory-callout">💡 for循环本质就是不断调用 <code>next()</code>，直到 <code>StopIteration</code>！</div>
</div>`
        },
        {
          title: "可迭代对象 vs 迭代器",
          content: `<p>可迭代对象和迭代器不是同一个概念：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📖 区别速查</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">可迭代</span><span class="ch1-vf-code">list, str, dict, tuple, set, range</span><span class="ch1-vf-desc">可以用for</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">迭代器</span><span class="ch1-vf-code">生成器、iter()返回的对象</span><span class="ch1-vf-desc">可以用next()</span></div>
  </div>
  <div class="theory-callout">🎯 所有迭代器都是可迭代对象，但反过来不一定！list可迭代但不是迭代器。</div>
</div>`,
          codeToLoad: '# iter() 和 next()\nit = iter([10, 20, 30])\nprint(next(it))  # 10\nprint(next(it))  # 20\nprint(next(it))  # 30\n\n# 判断是否可迭代\nprint(hasattr([], "__iter__"))   # True\nprint(hasattr(123, "__iter__"))  # False\nprint(hasattr("hi", "__iter__")) # True'
        }
      ],
      challenge: {
        desc: "🎯 用iter()和next()手动遍历字符串'Python'，打印每个字符",
        hint: 'it = iter("Python")\nfor i in range(6):\n    print(next(it))',
        template: '# 手动迭代\n',
        check: function(output) { return output.indexOf("P") !== -1 && output.indexOf("n") !== -1; }
      }
    }
  ]
};

registerChapter('python', CHAPTER11);
