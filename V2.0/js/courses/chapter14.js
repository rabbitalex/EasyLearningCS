// 第十三章：面向对象高级编程
const CHAPTER14 = {
  chapter: "第十三章：面向对象进阶",
  icon: "⚙️",
  lessons: [
    {
      id: "13-1",
      title: "__slots__ - 限制属性",
      xp: 25,
      code: 'class Student:\n    __slots__ = ("name", "age")\n\ns = Student()\ns.name = "小明"\ns.age = 10\nprint(f"{s.name}, {s.age}岁")\n# s.score = 95  # 这行会报错！',
      steps: [
        {
          title: "用__slots__限制属性",
          content: `<p>Python默认允许给实例随意添加属性，<code>__slots__</code> 可以限制只允许指定属性！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔒 __slots__ 的作用</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">①</span><span class="ch1-vf-code">class Student: __slots__ = ('name', 'age')</span><span class="ch1-vf-desc">限制只有这2个属性</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">②</span><span class="ch1-vf-code">s.name = "小明"</span><span class="ch1-vf-desc">✅ 允许</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">③</span><span class="ch1-vf-code">s.score = 95</span><span class="ch1-vf-desc">❌ 报错！</span></div>
  </div>
  <div class="theory-callout">💡 __slots__还能<strong>节省内存</strong>！对于大量实例的类非常有用。</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,206,201,0.08));border:1px solid rgba(108,92,231,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(108,92,231,0.1);border-left:3px solid #6c5ce7;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 创建一个Point类，用__slots__限制只有x和y两个属性",
        hint: 'class Point:\n    __slots__ = ("x", "y")\n\np = Point()\np.x = 3\np.y = 4\nprint(f"点({p.x}, {p.y})")',
        template: '# __slots__练习\n',
        check: function(output) { return output.indexOf("(") !== -1 || output.indexOf("3") !== -1; }
      }
    },
    {
      id: "13-2",
      title: "@property - 优雅的属性访问",
      xp: 25,
      code: 'class Temperature:\n    def __init__(self, celsius=0):\n        self._celsius = celsius\n    \n    @property\n    def celsius(self):\n        return self._celsius\n    \n    @celsius.setter\n    def celsius(self, value):\n        if value < -273.15:\n            raise ValueError("温度不能低于绝对零度!")\n        self._celsius = value\n    \n    @property\n    def fahrenheit(self):\n        return self._celsius * 9/5 + 32\n\nt = Temperature(25)\nprint(f"{t.celsius}°C = {t.fahrenheit}°F")\nt.celsius = 100\nprint(f"{t.celsius}°C = {t.fahrenheit}°F")',
      steps: [
        {
          title: "@property让方法像属性一样访问",
          content: `<p><code>@property</code> 装饰器让你用<strong>属性语法</strong>访问方法，同时还能做验证！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">✨ @property 三件套</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">getter</span><span class="ch1-vf-code">@property<br>def score(self):</span><span class="ch1-vf-desc">读取 obj.score</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">setter</span><span class="ch1-vf-code">@score.setter<br>def score(self, val):</span><span class="ch1-vf-desc">赋值 obj.score=95</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">只读</span><span class="ch1-vf-code">只定义getter不定义setter</span><span class="ch1-vf-desc">不可赋值</span></div>
  </div>
  <div class="theory-callout">💡 @property既保护了数据（可以加验证），又保持了简洁的访问方式！</div>
</div>`
        }
      ],
      challenge: {
        desc: "🎯 创建一个Circle类，用@property实现radius（可读写，不能为负）和area（只读）",
        hint: 'class Circle:\n    def __init__(self, r):\n        self._r = r\n    @property\n    def radius(self):\n        return self._r\n    @radius.setter\n    def radius(self, val):\n        if val < 0:\n            print("半径不能为负！")\n        else:\n            self._r = val\n    @property\n    def area(self):\n        return 3.14159 * self._r**2\n\nc = Circle(5)\nprint(f"半径:{c.radius} 面积:{c.area:.2f}")',
        template: '# @property练习\n',
        check: function(output) { return output.indexOf("面积") !== -1 || output.indexOf("area") !== -1 || output.indexOf("78") !== -1; }
      }
    },
    {
      id: "13-3",
      title: "定制类 - 魔法方法",
      xp: 30,
      code: 'class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __str__(self):\n        return f"Vector({self.x}, {self.y})"\n    \n    def __add__(self, other):\n        return Vector(self.x+other.x, self.y+other.y)\n    \n    def __len__(self):\n        return int((self.x**2 + self.y**2)**0.5)\n\nv1 = Vector(3, 4)\nv2 = Vector(1, 2)\nprint(v1)\nprint(v1 + v2)\nprint(f"长度: {len(v1)}")',
      steps: [
        {
          title: "Python的魔法方法",
          content: `<p>以双下划线开头和结尾的方法叫<strong>魔法方法</strong>（dunder methods），让你的类支持内置操作！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🪄 常用魔法方法</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">__str__</span><span class="ch1-vf-code">print(obj) 时的显示</span><span class="ch1-vf-desc">字符串表示</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">__len__</span><span class="ch1-vf-code">len(obj) 时调用</span><span class="ch1-vf-desc">长度</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">__add__</span><span class="ch1-vf-code">obj1 + obj2 时调用</span><span class="ch1-vf-desc">加法</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">__eq__</span><span class="ch1-vf-code">obj1 == obj2 时调用</span><span class="ch1-vf-desc">相等比较</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">__getitem__</span><span class="ch1-vf-code">obj[key] 时调用</span><span class="ch1-vf-desc">索引访问</span></div>
  </div>
  <div class="theory-callout">💡 魔法方法让你的类像<strong>内置类型一样自然</strong>地使用！</div>
</div>`
        }
      ],
      challenge: {
        desc: "🎯 创建一个Money类，支持+运算和str打印（如 '$100'）",
        hint: 'class Money:\n    def __init__(self, amount):\n        self.amount = amount\n    def __str__(self):\n        return f"${self.amount}"\n    def __add__(self, other):\n        return Money(self.amount + other.amount)\n\nm1 = Money(100)\nm2 = Money(50)\nprint(m1)\nprint(m1 + m2)',
        template: '# 定制类练习\n',
        check: function(output) { return output.indexOf("$") !== -1 || output.indexOf("150") !== -1; }
      }
    },
    {
      id: "13-4",
      title: "枚举类 - 有限选项",
      xp: 20,
      code: 'class Color:\n    RED = 1\n    GREEN = 2\n    BLUE = 3\n\nprint(Color.RED)\nprint(Color.GREEN)\n\n# 用字典模拟枚举映射\ncolor_names = {1: "红色", 2: "绿色", 3: "蓝色"}\nfor val in [Color.RED, Color.GREEN, Color.BLUE]:\n    print(f"{val} -> {color_names[val]}")',
      steps: [
        {
          title: "什么是枚举？",
          content: `<p><strong>枚举</strong>表示一组有限的固定选项，比如：星期几、方向、颜色等。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📋 枚举的应用场景</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">🎨</span><span class="ch1-vf-code">颜色: RED, GREEN, BLUE</span><span class="ch1-vf-desc">有限选项</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">📅</span><span class="ch1-vf-code">星期: MON, TUE, ... SUN</span><span class="ch1-vf-desc">固定7天</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">🧭</span><span class="ch1-vf-code">方向: UP, DOWN, LEFT, RIGHT</span><span class="ch1-vf-desc">4个方向</span></div>
  </div>
  <div class="theory-callout">💡 枚举让代码更易读：<code>Color.RED</code> 比 <code>1</code> 清楚得多！</div>
</div>`
        }
      ],
      challenge: {
        desc: "🎯 创建一个Season枚举类(SPRING=1到WINTER=4)，打印每个季节的名称",
        hint: 'class Season:\n    SPRING = 1\n    SUMMER = 2\n    AUTUMN = 3\n    WINTER = 4\n\nnames = {1:"春天",2:"夏天",3:"秋天",4:"冬天"}\nfor s in [Season.SPRING, Season.SUMMER, Season.AUTUMN, Season.WINTER]:\n    print(f"{s}: {names[s]}")',
        template: '# 枚举练习\n',
        check: function(output) { return output.split("\n").length >= 3; }
      }
    }
  ]
};

registerChapter('python', CHAPTER14);
