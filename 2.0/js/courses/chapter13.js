// 第十三章：面向对象编程
const CHAPTER13 = {
  chapter: "第十三章：面向对象编程",
  icon: "🏗️",
  lessons: [
    {
      id: "13-1",
      title: "类与实例 - 造模具",
      xp: 25,
      code: 'class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def bark(self):\n        print(f"{self.name}说: 汪汪汪!")\n\nmy_dog = Dog("旺财", 3)\nmy_dog.bark()\nprint(f"{my_dog.name}今年{my_dog.age}岁")',
      steps: [
        {
          title: "什么是面向对象？",
          content: `<p>面向对象就像用<strong>模具做饼干</strong>🍪 — 类是模具，实例是饼干！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🏗️ 类(Class) vs 实例(Instance)</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">🔧</span><span class="ch1-vf-code">class Dog:</span><span class="ch1-vf-desc">模具（定义狗的蓝图）</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">🐕</span><span class="ch1-vf-code">my_dog = Dog("旺财", 3)</span><span class="ch1-vf-desc">用模具创建一只具体的狗</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">📦</span><span class="ch1-vf-code">self.name = name</span><span class="ch1-vf-desc">实例属性（每只狗自己的数据）</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">⚡</span><span class="ch1-vf-code">def bark(self):</span><span class="ch1-vf-desc">方法（狗会做的事）</span></div>
  </div>
  <div class="theory-callout">💡 <code>__init__</code> 是构造方法，创建实例时自动调用。<code>self</code> 指向实例本身！</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,206,201,0.08));border:1px solid rgba(108,92,231,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(108,92,231,0.1);border-left:3px solid #6c5ce7;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
</style>`
        },
        {
          title: "创建自己的类",
          content: `<p>来创建一个完整的<strong>学生类</strong>：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎓 类的三大组成部分</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">①</span><span class="ch1-vf-code">class 类名:</span><span class="ch1-vf-desc">定义类</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">②</span><span class="ch1-vf-code">def __init__(self, ...):</span><span class="ch1-vf-desc">初始化属性</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">③</span><span class="ch1-vf-code">def 方法名(self, ...):</span><span class="ch1-vf-desc">定义行为</span></div>
  </div>
</div>`,
          codeToLoad: 'class Student:\n    def __init__(self, name, grade):\n        self.name = name\n        self.grade = grade\n        self.scores = []\n    \n    def add_score(self, score):\n        self.scores.append(score)\n    \n    def average(self):\n        if not self.scores:\n            return 0\n        return sum(self.scores) / len(self.scores)\n    \n    def info(self):\n        avg = self.average()\n        print(f"{self.name}({self.grade}年级) 平均分:{avg:.1f}")\n\n# 创建实例\ns1 = Student("小明", 5)\ns1.add_score(95)\ns1.add_score(88)\ns1.add_score(92)\ns1.info()'
        }
      ],
      challenge: {
        desc: "🎯 创建一个Pet类，有name和种类species属性，一个speak()方法打印'我是{name}，我是一只{species}'",
        hint: 'class Pet:\n    def __init__(self, name, species):\n        self.name = name\n        self.species = species\n    def speak(self):\n        print(f"我是{self.name}，我是一只{self.species}")\n\np = Pet("咪咪", "猫")\np.speak()',
        template: '# 创建Pet类\n',
        check: function(output) { return output.indexOf("我是") !== -1; }
      }
    },
    {
      id: "13-2",
      title: "继承与多态 - 父子关系",
      xp: 30,
      code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        pass\n\nclass Cat(Animal):\n    def speak(self):\n        print(f"{self.name}: 喵喵喵!")\n\nclass Dog(Animal):\n    def speak(self):\n        print(f"{self.name}: 汪汪汪!")\n\nanimals = [Cat("咪咪"), Dog("旺财"), Cat("花花")]\nfor a in animals:\n    a.speak()',
      steps: [
        {
          title: "继承 - 子类复用父类",
          content: `<p><strong>继承</strong>就像孩子继承父母的基因🧬 — 子类自动拥有父类的所有属性和方法！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🧬 继承语法</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">父类</span><span class="ch1-vf-code">class Animal: ...</span><span class="ch1-vf-desc">基础类</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">子类</span><span class="ch1-vf-code">class Cat(Animal): ...</span><span class="ch1-vf-desc">继承Animal</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">覆写</span><span class="ch1-vf-code">def speak(self): ...</span><span class="ch1-vf-desc">子类可以覆写父类方法</span></div>
  </div>
  <div class="theory-callout">💡 <strong>多态</strong>：同一个方法名，不同子类有不同的行为！Cat.speak()和Dog.speak()不同。</div>
</div>`
        },
        {
          title: "isinstance和继承链",
          content: `<p>用 <code>isinstance()</code> 检查对象类型，它会考虑继承关系！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔍 类型检查</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">✅</span><span class="ch1-vf-code">isinstance(cat, Cat)</span><span class="ch1-vf-desc">True</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">✅</span><span class="ch1-vf-code">isinstance(cat, Animal)</span><span class="ch1-vf-desc">True（猫也是动物）</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">❌</span><span class="ch1-vf-code">isinstance(cat, Dog)</span><span class="ch1-vf-desc">False（猫不是狗）</span></div>
  </div>
</div>`,
          codeToLoad: 'class Shape:\n    def area(self):\n        return 0\n\nclass Circle(Shape):\n    def __init__(self, r):\n        self.r = r\n    def area(self):\n        return 3.14159 * self.r ** 2\n\nclass Rectangle(Shape):\n    def __init__(self, w, h):\n        self.w = w\n        self.h = h\n    def area(self):\n        return self.w * self.h\n\n# 多态：同一个方法，不同表现\nshapes = [Circle(5), Rectangle(3, 4), Circle(2)]\nfor s in shapes:\n    print(f"面积: {s.area():.2f}")'
        }
      ],
      challenge: {
        desc: "🎯 创建Vehicle父类和Car、Bike子类，各有不同的describe()方法",
        hint: 'class Vehicle:\n    def __init__(self, name):\n        self.name = name\n    def describe(self):\n        print(f"我是{self.name}")\n\nclass Car(Vehicle):\n    def describe(self):\n        print(f"我是汽车{self.name}，有4个轮子")\n\nclass Bike(Vehicle):\n    def describe(self):\n        print(f"我是自行车{self.name}，有2个轮子")\n\nfor v in [Car("宝马"), Bike("凤凰")]:\n    v.describe()',
        template: '# 继承练习\n',
        check: function(output) { return output.indexOf("轮") !== -1 || output.indexOf("wheel") !== -1 || output.split("\n").length >= 2; }
      }
    },
    {
      id: "13-3",
      title: "访问限制 - 公有与私有",
      xp: 20,
      code: 'class BankAccount:\n    def __init__(self, owner, balance):\n        self.owner = owner\n        self.__balance = balance  # 私有属性\n    \n    def deposit(self, amount):\n        self.__balance += amount\n        print(f"存入{amount}元")\n    \n    def get_balance(self):\n        return self.__balance\n\nacc = BankAccount("小明", 1000)\nacc.deposit(500)\nprint(f"余额: {acc.get_balance()}元")',
      steps: [
        {
          title: "私有属性和方法",
          content: `<p>双下划线 <code>__</code> 开头的属性是<strong>私有的</strong>，外部不能直接访问！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔒 访问控制</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">公有</span><span class="ch1-vf-code">self.name = "小明"</span><span class="ch1-vf-desc">外部可以直接访问</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">私有</span><span class="ch1-vf-code">self.__balance = 1000</span><span class="ch1-vf-desc">外部不能直接访问</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">接口</span><span class="ch1-vf-code">def get_balance(self):</span><span class="ch1-vf-desc">通过方法安全访问</span></div>
  </div>
  <div class="theory-callout">💡 私有属性保护数据安全，就像银行保险箱🔐，只能通过正规渠道操作！</div>
</div>`
        }
      ],
      challenge: {
        desc: "🎯 创建一个Score类，分数为私有属性，提供set_score(验证0-100)和get_score方法",
        hint: 'class Score:\n    def __init__(self):\n        self.__score = 0\n    def set_score(self, val):\n        if 0 <= val <= 100:\n            self.__score = val\n        else:\n            print("分数必须0-100")\n    def get_score(self):\n        return self.__score\n\ns = Score()\ns.set_score(95)\nprint(s.get_score())\ns.set_score(150)',
        template: '# 访问限制练习\n',
        check: function(output) { return output.indexOf("95") !== -1 || output.indexOf("100") !== -1; }
      }
    },
    {
      id: "13-4",
      title: "获取对象信息",
      xp: 20,
      code: 'class MyClass:\n    def __init__(self):\n        self.x = 1\n    def hello(self):\n        pass\n\nobj = MyClass()\nprint(type(obj))\nprint(isinstance(obj, MyClass))\nprint(dir(obj))\nprint(hasattr(obj, "x"))\nprint(getattr(obj, "x"))',
      steps: [
        {
          title: "检查对象的工具箱",
          content: `<p>Python提供了丰富的工具来<strong>探索对象</strong>：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔍 对象探测工具</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">type()</span><span class="ch1-vf-code">返回对象类型</span><span class="ch1-vf-desc">是什么</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">isinstance()</span><span class="ch1-vf-code">检查是否某类型</span><span class="ch1-vf-desc">是不是</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">dir()</span><span class="ch1-vf-code">列出所有属性和方法</span><span class="ch1-vf-desc">有什么</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">hasattr()</span><span class="ch1-vf-code">检查是否有某属性</span><span class="ch1-vf-desc">有没有</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">getattr()</span><span class="ch1-vf-code">获取属性值</span><span class="ch1-vf-desc">取出来</span></div>
  </div>
</div>`
        }
      ],
      challenge: {
        desc: "🎯 创建一个对象，用type/isinstance/hasattr/getattr来检查它的信息",
        hint: 'class Hero:\n    def __init__(self):\n        self.hp = 100\n        self.name = "勇者"\n\nh = Hero()\nprint(type(h))\nprint(hasattr(h, "hp"))\nprint(getattr(h, "name"))',
        template: '# 对象探测练习\n',
        check: function(output) { return output.indexOf("True") !== -1 || output.indexOf("class") !== -1; }
      }
    }
  ]
};

registerChapter('python', CHAPTER13);
