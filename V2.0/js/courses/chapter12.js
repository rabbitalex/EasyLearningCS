// 第十一章：函数式编程
const CHAPTER12 = {
  chapter: "第十一章：函数式编程",
  icon: "🧩",
  lessons: [
    {
      id: "11-1",
      title: "高阶函数 - 函数也是变量",
      xp: 25,
      code: 'def add(x, y):\n    return x + y\n\nf = add\nprint(f(3, 5))\n\ndef apply(func, a, b):\n    return func(a, b)\n\nprint(apply(add, 10, 20))',
      steps: [
        {
          title: "函数可以当变量传递！",
          content: `<p>在Python中，函数也是一种<strong>对象</strong>，可以赋值给变量、作为参数传递！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎭 高阶函数：接收或返回函数的函数</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">①</span><span class="ch1-vf-code">f = abs</span><span class="ch1-vf-desc">函数赋值给变量</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">②</span><span class="ch1-vf-code">f(-10) → 10</span><span class="ch1-vf-desc">通过变量调用函数</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">③</span><span class="ch1-vf-code">def calc(func, x):</span><span class="ch1-vf-desc">函数作为参数</span></div>
  </div>
  <div class="theory-callout">💡 <strong>高阶函数</strong>就是：以函数作为参数，或以函数作为返回值的函数！</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(253,121,168,0.08),rgba(0,206,201,0.08));border:1px solid rgba(253,121,168,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(253,121,168,0.1);border-left:3px solid #fd79a8;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
</style>`
        },
        {
          title: "map() 和 filter()",
          content: `<p><code>map()</code> 和 <code>filter()</code> 是Python最常用的高阶函数：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🗺️ map() - 对每个元素做变换</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">map</span><span class="ch1-vf-code">map(func, 序列)</span><span class="ch1-vf-desc">对每个元素执行func</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">例</span><span class="ch1-vf-code">list(map(str, [1,2,3]))</span><span class="ch1-vf-desc">→ ['1','2','3']</span></div>
  </div>
  <div class="theory-anim-title" style="margin-top:0.8rem">🔍 filter() - 过滤元素</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">filter</span><span class="ch1-vf-code">filter(func, 序列)</span><span class="ch1-vf-desc">保留func返回True的元素</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">例</span><span class="ch1-vf-code">list(filter(lambda x:x>0, [-1,2,-3,4]))</span><span class="ch1-vf-desc">→ [2, 4]</span></div>
  </div>
</div>`,
          codeToLoad: '# map: 对每个元素做变换\nnums = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, nums))\nprint("平方:", squared)\n\n# filter: 过滤元素\nevens = list(filter(lambda x: x%2==0, range(1,21)))\nprint("偶数:", evens)\n\n# sorted: 自定义排序\nwords = ["banana", "apple", "cherry"]\nprint("按长度排序:", sorted(words, key=len))\nprint("按字母排序:", sorted(words))'
        }
      ],
      challenge: {
        desc: "🎯 用map将列表[1,4,9,16,25]中每个数开平方根(提示:x**0.5)，用filter取出大于3的结果",
        hint: 'import math\nnums = [1,4,9,16,25]\nroots = list(map(lambda x: x**0.5, nums))\nprint(roots)\nbig = list(filter(lambda x: x > 3, roots))\nprint(big)',
        template: '# map和filter练习\nnums = [1, 4, 9, 16, 25]\n',
        check: function(output) { return output.indexOf("5.0") !== -1 || output.indexOf("4.0") !== -1; }
      }
    },
    {
      id: "11-2",
      title: "匿名函数 lambda",
      xp: 20,
      code: 'square = lambda x: x ** 2\nprint(square(5))\n\npairs = [(1, "b"), (3, "a"), (2, "c")]\npairs.sort(key=lambda p: p[1])\nprint(pairs)',
      steps: [
        {
          title: "lambda 一行函数",
          content: `<p><code>lambda</code> 让你不用 <code>def</code> 就能创建简单的小函数！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">⚡ lambda 语法</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">def</span><span class="ch1-vf-code">def square(x):<br>    return x**2</span><span class="ch1-vf-desc">普通函数</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">λ</span><span class="ch1-vf-code">square = lambda x: x**2</span><span class="ch1-vf-desc">一行搞定！</span></div>
  </div>
  <div class="theory-callout">💡 lambda函数只能有<strong>一个表达式</strong>，适合简单操作。复杂逻辑还是用def！</div>
</div>`
        },
        {
          title: "lambda的常见用法",
          content: `<p>lambda最常见的用法是作为<strong>回调函数</strong>传给高阶函数：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎯 lambda实战场景</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">①</span><span class="ch1-vf-code">sorted(L, key=lambda x: x[1])</span><span class="ch1-vf-desc">自定义排序</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">②</span><span class="ch1-vf-code">map(lambda x: x*2, L)</span><span class="ch1-vf-desc">快速映射</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">③</span><span class="ch1-vf-code">filter(lambda x: x>0, L)</span><span class="ch1-vf-desc">快速过滤</span></div>
  </div>
</div>`,
          codeToLoad: '# lambda基础\nadd = lambda x, y: x + y\nprint(add(3, 5))\n\n# 排序中使用lambda\nstudents = [("小明", 90), ("小红", 95), ("小刚", 85)]\nstudents.sort(key=lambda s: s[1], reverse=True)\nprint("成绩排名:")\nfor name, score in students:\n    print(f"  {name}: {score}分")\n\n# map + lambda\nnums = [1, 2, 3, 4, 5]\nresult = list(map(lambda x: x**3, nums))\nprint("立方:", result)'
        }
      ],
      challenge: {
        desc: "🎯 用lambda+sorted对字典列表按age排序：[{'name':'A','age':25},{'name':'B','age':20},{'name':'C','age':30}]",
        hint: 'people = [{"name":"A","age":25},{"name":"B","age":20},{"name":"C","age":30}]\nresult = sorted(people, key=lambda p: p["age"])\nfor p in result:\n    print(f"{p[\"name\"]}: {p[\"age\"]}岁")',
        template: '# lambda排序练习\npeople = [{"name":"A","age":25},{"name":"B","age":20},{"name":"C","age":30}]\n',
        check: function(output) { return output.indexOf("20") !== -1; }
      }
    },
    {
      id: "11-3",
      title: "装饰器 - 给函数穿衣服",
      xp: 30,
      code: 'def timer(func):\n    def wrapper(*args):\n        print(f"调用 {func.__name__}...")\n        result = func(*args)\n        print(f"{func.__name__} 执行完毕!")\n        return result\n    return wrapper\n\n@timer\ndef say_hello(name):\n    print(f"Hello, {name}!")\n\nsay_hello("小明")',
      steps: [
        {
          title: "装饰器是什么？",
          content: `<p>装饰器就像给函数<strong>穿一件外套</strong>🧥 — 不改变原函数，却能增加新功能！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🧥 装饰器原理</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">①</span><span class="ch1-vf-code">定义装饰器函数（接收函数作为参数）</span><span class="ch1-vf-desc">做外套</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">②</span><span class="ch1-vf-code">定义内部wrapper函数（添加额外功能）</span><span class="ch1-vf-desc">套在外面</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">③</span><span class="ch1-vf-code">用 @装饰器名 语法糖应用</span><span class="ch1-vf-desc">穿上外套</span></div>
  </div>
  <div class="theory-callout">💡 <code>@timer</code> 等价于 <code>say_hello = timer(say_hello)</code></div>
</div>`
        },
        {
          title: "装饰器实战",
          content: `<p>装饰器在实际开发中非常常用：日志记录、权限检查、性能计时等。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎯 常见装饰器用途</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">📝</span><span class="ch1-vf-code">日志装饰器</span><span class="ch1-vf-desc">记录函数调用</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">⏱️</span><span class="ch1-vf-code">计时装饰器</span><span class="ch1-vf-desc">测量执行时间</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">🔐</span><span class="ch1-vf-code">权限装饰器</span><span class="ch1-vf-desc">检查访问权限</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">💾</span><span class="ch1-vf-code">缓存装饰器</span><span class="ch1-vf-desc">缓存计算结果</span></div>
  </div>
</div>`,
          codeToLoad: '# 日志装饰器\ndef log(func):\n    def wrapper(*args, **kw):\n        print(f"[LOG] 调用 {func.__name__}()")\n        return func(*args, **kw)\n    return wrapper\n\n@log\ndef add(a, b):\n    return a + b\n\n@log\ndef greet(name):\n    return f"Hello, {name}!"\n\nprint(add(3, 5))\nprint(greet("Python"))'
        }
      ],
      challenge: {
        desc: "🎯 写一个装饰器repeat(n)，让被装饰的函数重复执行n次",
        hint: 'def repeat(n):\n    def decorator(func):\n        def wrapper(*args):\n            for i in range(n):\n                func(*args)\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef hello():\n    print("Hello!")\n\nhello()',
        template: '# 写一个repeat装饰器\n',
        check: function(output) { return output.split("Hello").length >= 3; }
      }
    },
    {
      id: "11-4",
      title: "返回函数与闭包",
      xp: 25,
      code: 'def make_adder(n):\n    def adder(x):\n        return x + n\n    return adder\n\nadd5 = make_adder(5)\nadd10 = make_adder(10)\nprint(add5(3))\nprint(add10(3))',
      steps: [
        {
          title: "函数可以返回函数",
          content: `<p>函数不仅可以接收函数，还可以<strong>返回函数</strong>！这叫做<strong>闭包</strong>。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎁 闭包 = 函数 + 它记住的环境</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">①</span><span class="ch1-vf-code">外层函数接收参数n</span><span class="ch1-vf-desc">make_adder(5)</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">②</span><span class="ch1-vf-code">内层函数使用n</span><span class="ch1-vf-desc">adder记住n=5</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">③</span><span class="ch1-vf-code">返回内层函数</span><span class="ch1-vf-desc">add5 = adder</span></div>
  </div>
  <div class="theory-callout">💡 闭包让内层函数"记住"了外层函数的变量，即使外层函数已经结束！</div>
</div>`
        },
        {
          title: "闭包的应用",
          content: `<p>闭包可以创建<strong>定制化的函数工厂</strong>：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🏭 函数工厂模式</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">🔧</span><span class="ch1-vf-code">make_adder(5) → add5函数</span><span class="ch1-vf-desc">造一个加5器</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">🔧</span><span class="ch1-vf-code">make_multiplier(3) → mul3函数</span><span class="ch1-vf-desc">造一个乘3器</span></div>
  </div>
  <div class="theory-callout">⚠️ 注意：闭包中不要引用循环变量！它会记住最终值，不是每次循环的值。</div>
</div>`,
          codeToLoad: '# 函数工厂\ndef make_power(n):\n    def power(x):\n        return x ** n\n    return power\n\nsquare = make_power(2)\ncube = make_power(3)\nprint(f"3的平方: {square(3)}")\nprint(f"3的立方: {cube(3)}")\nprint(f"5的平方: {square(5)}")\nprint(f"5的立方: {cube(5)}")'
        }
      ],
      challenge: {
        desc: "🎯 写一个make_counter()闭包，每次调用返回递增的数字1,2,3...",
        hint: 'def make_counter():\n    count = [0]\n    def counter():\n        count[0] += 1\n        return count[0]\n    return counter\n\nc = make_counter()\nprint(c())\nprint(c())\nprint(c())',
        template: '# 计数器闭包\n',
        check: function(output) { return output.indexOf("1") !== -1 && output.indexOf("3") !== -1; }
      }
    }
  ]
};

registerChapter('python', CHAPTER12);
