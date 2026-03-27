// 第六章：函数魔法
const CHAPTER6 = {
  chapter: "第六章：函数魔法",
  icon: "⚡",
  lessons: [
    {
      id: "6-1",
      title: "定义函数 - 创建魔法咒语",
      xp: 25,
      code: 'def greet(name):\n    print("你好，" + name + "！")\n\ngreet("小明")\ngreet("小红")',
      steps: [
        {
          title: "什么是函数？",
          content: `<p>函数就像一个<strong>魔法咒语</strong>✨——定义一次，就能反复使用！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">⚡ 函数的结构</div>
  <div class="ch6-func-anatomy">
    <div class="ch6-fa-line"><span class="ch6-fa-kw">def</span> <span class="ch6-fa-name">greet</span><span class="ch6-fa-paren">(</span><span class="ch6-fa-param">name</span><span class="ch6-fa-paren">)</span><span class="ch6-fa-colon">:</span></div>
    <div class="ch6-fa-body">&nbsp;&nbsp;&nbsp;&nbsp;print("你好，" + name)</div>
    <div class="ch6-fa-labels">
      <div class="ch6-fa-label" style="left:0;color:#fd79a8">↑ 关键字def</div>
      <div class="ch6-fa-label" style="left:25%;color:#FF9800;font-weight:700">↑ 函数名</div>
      <div class="ch6-fa-label" style="left:55%;color:#fdcb6e">↑ 参数</div>
      <div class="ch6-fa-label" style="left:80%;color:#00b894">↑ 冒号</div>
    </div>
  </div>
  <div class="ch6-func-analogy">
    <div class="ch6-analogy-card">
      <div class="ch6-a-icon">📝</div>
      <div class="ch6-a-step">1. 定义函数</div>
      <div class="ch6-a-desc">写好"魔法咒语"</div>
    </div>
    <div class="ch6-analogy-arrow">→</div>
    <div class="ch6-analogy-card">
      <div class="ch6-a-icon">🗣️</div>
      <div class="ch6-a-step">2. 调用函数</div>
      <div class="ch6-a-desc">念出咒语名字</div>
    </div>
    <div class="ch6-analogy-arrow">→</div>
    <div class="ch6-analogy-card">
      <div class="ch6-a-icon">✨</div>
      <div class="ch6-a-step">3. 执行</div>
      <div class="ch6-a-desc">魔法生效！</div>
    </div>
  </div>
  <div class="theory-callout">💡 定义函数不会执行代码！只有<strong>调用</strong>函数时（写函数名+括号），代码才会运行。</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,206,201,0.08));border:1px solid rgba(108,92,231,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;font-weight:700;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(108,92,231,0.1);border-left:3px solid #6c5ce7;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
.ch6-func-anatomy{background:#0d0d1a;border-radius:10px;padding:0.8rem;margin:0.5rem 0;position:relative}
.ch6-fa-line{font-family:monospace;font-size:0.85rem;color:#e8ecf2}
.ch6-fa-kw{color:#fd79a8;font-weight:700}
.ch6-fa-name{color:#FF9800;font-weight:700;font-weight:700}
.ch6-fa-paren{color:#c8d0e0}
.ch6-fa-param{color:#fdcb6e;font-weight:700}
.ch6-fa-colon{color:#00b894;font-weight:700}
.ch6-fa-body{font-family:monospace;font-size:0.8rem;color:#c8d0e0;margin-top:0.2rem}
.ch6-fa-labels{display:flex;gap:0.3rem;margin-top:0.5rem;justify-content:space-between}
.ch6-fa-label{font-size:0.92rem;font-weight:700}
.ch6-func-analogy{display:flex;align-items:center;justify-content:center;gap:0.3rem;margin-top:0.8rem}
.ch6-analogy-card{background:#0d0d1a;border-radius:8px;padding:0.5rem;text-align:center;min-width:75px}
.ch6-a-icon{font-size:1.2rem}
.ch6-a-step{font-size:0.85rem;font-weight:700;color:#e8ecf2;margin:0.1rem 0}
.ch6-a-desc{font-size:0.92rem;color:#c8d0e0}
.ch6-analogy-arrow{color:#FF9800;font-weight:700;font-weight:700;font-size:0.9rem}
</style>`
        },
        {
          title: "函数参数 - 让函数更灵活",
          content: `<p>参数就像函数的"输入口"——每次调用可以传入不同的值：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📥 参数传递过程</div>
  <div class="ch6-param-demo">
    <div class="ch6-pd-row">
      <span class="ch6-pd-call">greet(<span style="color:#fdcb6e">"小明"</span>)</span>
      <span class="ch6-pd-arrow">→</span>
      <span class="ch6-pd-param">name = "小明"</span>
      <span class="ch6-pd-arrow">→</span>
      <span class="ch6-pd-output">你好，小明！</span>
    </div>
    <div class="ch6-pd-row">
      <span class="ch6-pd-call">greet(<span style="color:#00cec9">"小红"</span>)</span>
      <span class="ch6-pd-arrow">→</span>
      <span class="ch6-pd-param">name = "小红"</span>
      <span class="ch6-pd-arrow">→</span>
      <span class="ch6-pd-output">你好，小红！</span>
    </div>
  </div>
  <div class="ch6-param-types">
    <div class="ch6-pt-card">
      <div class="ch6-pt-name">单个参数</div>
      <div class="ch6-pt-code">def f(x):</div>
    </div>
    <div class="ch6-pt-card">
      <div class="ch6-pt-name">多个参数</div>
      <div class="ch6-pt-code">def f(a, b, c):</div>
    </div>
    <div class="ch6-pt-card">
      <div class="ch6-pt-name">默认值参数</div>
      <div class="ch6-pt-code">def f(x, y=10):</div>
    </div>
  </div>
</div>
<style>
.ch6-param-demo{display:flex;flex-direction:column;gap:0.3rem;margin:0.5rem 0}
.ch6-pd-row{display:flex;align-items:center;gap:0.4rem;background:#0d0d1a;border-radius:6px;padding:0.4rem 0.6rem;font-size:0.88rem;flex-wrap:wrap}
.ch6-pd-call{font-family:monospace;color:#FF9800;font-weight:700;font-weight:700}
.ch6-pd-arrow{color:#c8d0e0;font-size:0.8rem}
.ch6-pd-param{font-family:monospace;color:#fdcb6e}
.ch6-pd-output{font-family:monospace;color:#00b894}
.ch6-param-types{display:flex;gap:0.4rem;margin-top:0.5rem}
.ch6-pt-card{background:#0d0d1a;border-radius:8px;padding:0.4rem 0.6rem;flex:1;text-align:center}
.ch6-pt-name{font-size:0.8rem;color:#c8d0e0;margin-bottom:0.2rem}
.ch6-pt-code{font-family:monospace;font-size:0.88rem;color:#FF9800;font-weight:700}
</style>`,
          codeToLoad: 'def greet(name):\n    print("你好，" + name + "！")\n\ngreet("小明")\ngreet("小红")\ngreet("Python")'
        },
        {
          title: "返回值 - 函数的输出",
          content: `<p>函数可以用 <em>return</em> 把结果"送出来"：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📤 return 返回值</div>
  <div class="ch6-return-flow">
    <div class="ch6-rf-box ch6-rf-input">
      <div class="ch6-rf-label">输入</div>
      <div class="ch6-rf-val">a=3, b=5</div>
    </div>
    <div class="ch6-rf-arrow">→</div>
    <div class="ch6-rf-box ch6-rf-func">
      <div class="ch6-rf-label">函数 add(a,b)</div>
      <div class="ch6-rf-val">return a + b</div>
    </div>
    <div class="ch6-rf-arrow">→</div>
    <div class="ch6-rf-box ch6-rf-output">
      <div class="ch6-rf-label">输出</div>
      <div class="ch6-rf-val">8</div>
    </div>
  </div>
  <div class="theory-callout">🎯 return后面的值会被"送回"给调用者，可以赋值给变量使用！</div>
</div>
<style>
.ch6-return-flow{display:flex;align-items:center;justify-content:center;gap:0.3rem;margin:0.6rem 0;flex-wrap:wrap}
.ch6-rf-box{background:#0d0d1a;border-radius:10px;padding:0.5rem 0.8rem;text-align:center;border:1px solid rgba(108,92,231,0.2);min-width:80px}
.ch6-rf-input{border-color:rgba(253,203,110,0.4)}
.ch6-rf-func{border-color:rgba(108,92,231,0.4);background:rgba(108,92,231,0.05)}
.ch6-rf-output{border-color:rgba(0,184,148,0.4)}
.ch6-rf-label{font-size:0.92rem;color:#c8d0e0;margin-bottom:0.15rem}
.ch6-rf-val{font-family:monospace;font-size:0.92rem;font-weight:700;color:#FF9800;font-weight:700}
.ch6-rf-input .ch6-rf-val{color:#fdcb6e}
.ch6-rf-output .ch6-rf-val{color:#00b894}
.ch6-rf-arrow{font-size:1.1rem;color:#c8d0e0}
</style>`,
          codeToLoad: 'def add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint("3 + 5 =", result)\n\n# 函数可以嵌套使用\nprint("10 + 20 =", add(10, 20))\nprint("双倍:", add(result, result))'
        },
        {
          title: "实战：写有用的函数",
          content: `<p>让我们写几个实用的函数：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎨 函数实战示例</div>
  <div class="ch6-examples">
    <div class="ch6-ex-card">
      <div class="ch6-ex-title">判断奇偶</div>
      <div class="ch6-ex-code">def is_even(n):
    return n % 2 == 0</div>
    </div>
    <div class="ch6-ex-card">
      <div class="ch6-ex-title">求最大值</div>
      <div class="ch6-ex-code">def my_max(a, b):
    if a > b:
        return a
    return b</div>
    </div>
    <div class="ch6-ex-card">
      <div class="ch6-ex-title">温度转换</div>
      <div class="ch6-ex-code">def c_to_f(celsius):
    return celsius * 1.8 + 32</div>
    </div>
  </div>
</div>
<style>
.ch6-examples{display:flex;flex-direction:column;gap:0.4rem;margin:0.5rem 0}
.ch6-ex-card{background:#0d0d1a;border-radius:8px;padding:0.5rem 0.7rem;border-left:3px solid #6c5ce7}
.ch6-ex-title{font-size:0.88rem;font-weight:700;color:#fdcb6e;margin-bottom:0.2rem}
.ch6-ex-code{font-family:monospace;font-size:0.85rem;color:#FF9800;font-weight:700;white-space:pre;line-height:1.5}
</style>`,
          codeToLoad: 'def is_even(n):\n    return n % 2 == 0\n\nfor i in range(1, 11):\n    if is_even(i):\n        print(i, "是偶数")\n    else:\n        print(i, "是奇数")'
        }
      ],
      challenge: {
        desc: "🎯 创建一个函数 calculate_circle_area(radius)，接收半径，返回圆的面积（π取3.14）。调用并打印半径为5的圆面积。",
        hint: 'def calculate_circle_area(radius):\n    return 3.14 * radius * radius\n\nprint(calculate_circle_area(5))',
        template: '# 计算圆面积的函数\n',
        check: function(output) { return output.indexOf("78.5") !== -1; }
      }
    }
  ]
};

registerChapter('python', CHAPTER6);
