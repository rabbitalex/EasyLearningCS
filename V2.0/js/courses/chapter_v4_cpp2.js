// 卷四 · C++ - OOP篇
const CHAPTER_V4_CPP2 = {
  chapter: "第二章：C++ 面向对象",
  icon: "🏛️",
  lessons: [
    {
      id: "v4-cpp2-1",
      title: "类与对象 —— 封装的艺术",
      xp: 25,
      code: '# 用Python演示C++面向对象概念\n\nprint("=== C++ 类与对象（Python模拟） ===")\n\nclass Animal:\n    """C++中的class默认是private访问权限"""\n    def __init__(self, name, age):\n        self.__name = name    # private成员\n        self.__age = age      # private成员\n    \n    # public方法\n    def get_name(self):\n        return self.__name\n    \n    def get_age(self):\n        return self.__age\n    \n    def speak(self):\n        print(f"  {self.__name}({self.__age}岁): ...")\n\nclass Dog(Animal):\n    """继承"""\n    def __init__(self, name, age, breed):\n        super().__init__(name, age)\n        self.breed = breed\n    \n    def speak(self):  # 重写(override)\n        print(f"  🐕 {self.get_name()}({self.get_age()}岁, {self.breed}): 汪汪汪!")\n\nclass Cat(Animal):\n    def speak(self):  # 重写\n        print(f"  🐱 {self.get_name()}({self.get_age()}岁): 喵~")\n\n# 多态\nprint("\\n--- 多态演示 ---")\npets = [Dog("旺财", 3, "柴犬"), Cat("咪咪", 2), Dog("大黄", 5, "金毛")]\nfor pet in pets:\n    pet.speak()\n\nprint(f"\\n类型检查: {type(pets[0]).__name__}, {type(pets[1]).__name__}")',
      steps: [
        {
          title: "封装：数据与行为的组合",
          content: `
<p>C++的<strong>面向对象编程（OOP）</strong>三大支柱：<strong>封装、继承、多态</strong>。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🏛️ OOP 三大支柱</div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.8rem;margin:1rem 0">
    <div class="t0-fadein" style="animation-delay:0.2s;background:rgba(9,132,227,0.12);border:1px solid rgba(9,132,227,0.3);border-radius:12px;padding:1rem;text-align:center">
      <div style="font-size:2rem;margin-bottom:0.3rem">🔒</div>
      <div style="font-weight:800;color:#0984e3;font-size:0.9rem">封装</div>
      <div style="font-size:0.65rem;color:rgba(255,255,255,0.5);margin-top:0.3rem">隐藏内部实现<br>只暴露必要接口</div>
      <div style="margin-top:0.5rem;font-family:monospace;font-size:0.6rem;color:rgba(255,255,255,0.3);background:rgba(0,0,0,0.2);border-radius:4px;padding:0.3rem">private:<br>&nbsp;&nbsp;int age;<br>public:<br>&nbsp;&nbsp;int getAge();</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.5s;background:rgba(108,92,231,0.12);border:1px solid rgba(108,92,231,0.3);border-radius:12px;padding:1rem;text-align:center">
      <div style="font-size:2rem;margin-bottom:0.3rem">🧬</div>
      <div style="font-weight:800;color:#6c5ce7;font-size:0.9rem">继承</div>
      <div style="font-size:0.65rem;color:rgba(255,255,255,0.5);margin-top:0.3rem">子类复用父类代码<br>扩展新功能</div>
      <div style="margin-top:0.5rem;font-family:monospace;font-size:0.6rem;color:rgba(255,255,255,0.3);background:rgba(0,0,0,0.2);border-radius:4px;padding:0.3rem">class Dog<br>&nbsp;&nbsp;: public Animal<br>{ ... };</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.8s;background:rgba(253,121,168,0.12);border:1px solid rgba(253,121,168,0.3);border-radius:12px;padding:1rem;text-align:center">
      <div style="font-size:2rem;margin-bottom:0.3rem">🎭</div>
      <div style="font-weight:800;color:#fd79a8;font-size:0.9rem">多态</div>
      <div style="font-size:0.65rem;color:rgba(255,255,255,0.5);margin-top:0.3rem">同一接口不同实现<br>运行时动态绑定</div>
      <div style="margin-top:0.5rem;font-family:monospace;font-size:0.6rem;color:rgba(255,255,255,0.3);background:rgba(0,0,0,0.2);border-radius:4px;padding:0.3rem">virtual void speak();<br>dog->speak();//汪<br>cat->speak();//喵</div>
    </div>
  </div>
</div>`
        },
        {
          title: "继承与多态的内存模型",
          content: `
<p>C++中的多态通过<strong>虚函数表（vtable）</strong>实现——每个有虚函数的对象都有一个指向vtable的指针。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📊 虚函数表（vtable）原理动画</div>
  <div style="display:flex;gap:1.5rem;margin:1rem 0;flex-wrap:wrap;justify-content:center">
    <div class="t0-fadein" style="animation-delay:0.3s">
      <div style="font-size:0.7rem;color:#0984e3;font-weight:700;text-align:center;margin-bottom:0.3rem">Dog对象内存</div>
      <div style="border:2px solid rgba(9,132,227,0.4);border-radius:10px;overflow:hidden;min-width:130px">
        <div style="background:rgba(9,132,227,0.2);padding:0.3rem 0.6rem;font-size:0.65rem;font-weight:700;color:#0984e3;border-bottom:1px solid rgba(9,132,227,0.2)">vptr → Dog_vtable</div>
        <div style="padding:0.3rem 0.6rem;font-size:0.65rem;color:rgba(255,255,255,0.5);border-bottom:1px solid rgba(255,255,255,0.05)">name: "旺财"</div>
        <div style="padding:0.3rem 0.6rem;font-size:0.65rem;color:rgba(255,255,255,0.5);border-bottom:1px solid rgba(255,255,255,0.05)">age: 3</div>
        <div style="padding:0.3rem 0.6rem;font-size:0.65rem;color:rgba(255,255,255,0.5)">breed: "柴犬"</div>
      </div>
    </div>
    <div style="display:flex;align-items:center;color:rgba(255,255,255,0.2);font-size:1.5rem">→</div>
    <div class="t0-fadein" style="animation-delay:0.6s">
      <div style="font-size:0.7rem;color:#FF9800;font-weight:700;text-align:center;margin-bottom:0.3rem">Dog_vtable</div>
      <div style="border:2px solid rgba(255,152,0,0.4);border-radius:10px;overflow:hidden;min-width:150px">
        <div style="padding:0.3rem 0.6rem;font-size:0.65rem;color:#FF9800;border-bottom:1px solid rgba(255,152,0,0.2)">speak → Dog::speak()</div>
        <div style="padding:0.3rem 0.6rem;font-size:0.65rem;color:#FF9800">toString → Dog::toString()</div>
      </div>
    </div>
  </div>
  <div class="theory-callout">💡 调用 animal->speak() 时，C++通过对象的 vptr 找到正确的 vtable，从而调用正确版本的函数！</div>
</div>`
        }
      ],
      challenge: {
        description: "创建一个Shape基类(含area方法)和Circle、Rectangle子类，实现多态计算面积。",
        hint: "子类重写area方法",
        solution: 'import math\n\nclass Shape:\n    def area(self):\n        return 0\n\nclass Circle(Shape):\n    def __init__(self, r):\n        self.r = r\n    def area(self):\n        return math.pi * self.r ** 2\n\nclass Rectangle(Shape):\n    def __init__(self, w, h):\n        self.w = w\n        self.h = h\n    def area(self):\n        return self.w * self.h\n\nshapes = [Circle(5), Rectangle(3,4), Circle(10)]\nfor s in shapes:\n    print(f"{type(s).__name__}: area={s.area():.2f}")'
      }
    }
  ]
};

registerChapter('cpp', CHAPTER_V4_CPP2);
