// 自动拆分：补充课程作业题库
(function() {
  'use strict';

  window.HOMEWORK_BANK = window.HOMEWORK_BANK || {};
  Object.assign(window.HOMEWORK_BANK, {
// ============ 补充课程作业（0系列/v1/v3/v4）============
"v4-cpp1-1": [
  {desc:"模拟cout输出", template:'# C++入门\n', hint:'def cout(*a):print(*a,end="")\ncout("Hello");cout(" C++");print()', check:function(o){return o.indexOf("Hello")!==-1;}},
  {desc:"用print展示C++入门概念", template:'# 概念\n', hint:'print("C++入门")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储C++入门数据", template:'# 列表\n', hint:'items=["C++入门A","C++入门B","C++入门C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述C++入门", template:'# 字典\n', hint:'info={"名称":"C++入门","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示C++入门", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟C++入门", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟C++入门过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理C++入门情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：C++入门模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v4-cpp1-2": [
  {desc:"模拟引用", template:'# 指针引用\n', hint:'a=[10];b=a;b[0]=20\nprint(f"a={a[0]} b={b[0]}")\nprint(a is b)', check:function(o){return o.indexOf("True")!==-1;}},
  {desc:"用print展示指针引用概念", template:'# 概念\n', hint:'print("指针引用")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储指针引用数据", template:'# 列表\n', hint:'items=["指针引用A","指针引用B","指针引用C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述指针引用", template:'# 字典\n', hint:'info={"名称":"指针引用","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示指针引用", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟指针引用", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟指针引用过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理指针引用情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：指针引用模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v4-cpp2-1": [
  {desc:"实现Circle类", template:'# 类与对象\n', hint:'class C:\n    def __init__(self,r):self.r=r\n    def area(self):return 3.14*self.r**2\nprint(f"面积:{C(5).area()}")', check:function(o){return o.indexOf("78.5")!==-1;}},
  {desc:"用print展示类与对象概念", template:'# 概念\n', hint:'print("类与对象")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储类与对象数据", template:'# 列表\n', hint:'items=["类与对象A","类与对象B","类与对象C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述类与对象", template:'# 字典\n', hint:'info={"名称":"类与对象","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示类与对象", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟类与对象", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟类与对象过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理类与对象情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：类与对象模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v4-cpp3-1": [
  {desc:"模拟引用计数", template:'# 智能指针\n', hint:'count=0\ndef create():global count;count+=1;print(f"创建(总:{count})")\ndef destroy():global count;count-=1;print(f"销毁(总:{count})")\ncreate();create();destroy()\nprint(f"剩余:{count}")', check:function(o){return o.indexOf("创建")!==-1;}},
  {desc:"用print展示智能指针概念", template:'# 概念\n', hint:'print("智能指针")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储智能指针数据", template:'# 列表\n', hint:'items=["智能指针A","智能指针B","智能指针C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述智能指针", template:'# 字典\n', hint:'info={"名称":"智能指针","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示智能指针", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟智能指针", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟智能指针过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理智能指针情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：智能指针模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v4-cpp3-2": [
  {desc:"模拟泛型", template:'# 模板STL\n', hint:'def swap(a,b):return b,a\nx,y=swap(1,2);print(f"int:{x},{y}")\ns,t=swap("a","b");print(f"str:{s},{t}")', check:function(o){return o.indexOf("int")!==-1&&o.indexOf("str")!==-1;}},
  {desc:"用print展示模板STL概念", template:'# 概念\n', hint:'print("模板STL")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储模板STL数据", template:'# 列表\n', hint:'items=["模板STLA","模板STLB","模板STLC"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述模板STL", template:'# 字典\n', hint:'info={"名称":"模板STL","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示模板STL", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟模板STL", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟模板STL过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理模板STL情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：模板STL模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v4-cpp4-1": [
  {desc:"用id()理解地址", template:'# 指针概念\n', hint:'a=10;b=a\nprint(f"地址相同:{id(a)==id(b)}")', check:function(o){return o.indexOf("True")!==-1;}},
  {desc:"用print展示指针概念概念", template:'# 概念\n', hint:'print("指针概念")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储指针概念数据", template:'# 列表\n', hint:'items=["指针概念A","指针概念B","指针概念C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述指针概念", template:'# 字典\n', hint:'info={"名称":"指针概念","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示指针概念", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟指针概念", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟指针概念过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理指针概念情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：指针概念模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v4-cpp4-2": [
  {desc:"模拟shared_ptr", template:'# 智能指针\n', hint:'refs=1;print(f"refs={refs}")\nrefs+=1;print(f"拷贝:refs={refs}")\nrefs-=1;print(f"释放:refs={refs}")\nrefs-=1;print(f"释放:refs={refs}")\nif refs==0:print("销毁!")', check:function(o){return o.indexOf("销毁")!==-1;}},
  {desc:"用print展示智能指针概念", template:'# 概念\n', hint:'print("智能指针")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储智能指针数据", template:'# 列表\n', hint:'items=["智能指针A","智能指针B","智能指针C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述智能指针", template:'# 字典\n', hint:'info={"名称":"智能指针","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示智能指针", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟智能指针", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟智能指针过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理智能指针情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：智能指针模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v4-cpp5-1": [
  {desc:"Python对应STL", template:'# STL容器\n', hint:'print("vector->",list(range(5)))\nprint("map->",{"a":1})\nprint("set->",{1,2,3})', check:function(o){return o.indexOf("vector")!==-1;}},
  {desc:"用print展示STL容器概念", template:'# 概念\n', hint:'print("STL容器")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储STL容器数据", template:'# 列表\n', hint:'items=["STL容器A","STL容器B","STL容器C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述STL容器", template:'# 字典\n', hint:'info={"名称":"STL容器","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示STL容器", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟STL容器", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟STL容器过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理STL容器情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：STL容器模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v4-cpp5-2": [
  {desc:"sort+lambda", template:'# STL算法\n', hint:'w=["apple","hi","banana"]\nprint("按长度:",sorted(w,key=len))', check:function(o){return o.indexOf("按长度")!==-1;}},
  {desc:"用print展示STL算法概念", template:'# 概念\n', hint:'print("STL算法")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储STL算法数据", template:'# 列表\n', hint:'items=["STL算法A","STL算法B","STL算法C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述STL算法", template:'# 字典\n', hint:'info={"名称":"STL算法","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示STL算法", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟STL算法", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟STL算法过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理STL算法情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：STL算法模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v4-cpp6-1": [
  {desc:"模拟模板函数", template:'# 模板\n', hint:'def mx(a,b):return a if a>b else b\nprint(mx(3,5));print(mx("abc","xyz"))', check:function(o){return o.indexOf("5")!==-1;}},
  {desc:"用print展示模板概念", template:'# 概念\n', hint:'print("模板")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储模板数据", template:'# 列表\n', hint:'items=["模板A","模板B","模板C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述模板", template:'# 字典\n', hint:'info={"名称":"模板","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示模板", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟模板", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟模板过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理模板情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：模板模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v4-cpp6-2": [
  {desc:"dataclass模拟", template:'# 现代C++\n', hint:'from dataclasses import dataclass\n@dataclass\nclass P:\n    x:float;y:float\np=P(3,4)\nprint(f"距离:{(p.x**2+p.y**2)**0.5}")', check:function(o){return o.indexOf("5.0")!==-1;}},
  {desc:"用print展示现代C++概念", template:'# 概念\n', hint:'print("现代C++")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储现代C++数据", template:'# 列表\n', hint:'items=["现代C++A","现代C++B","现代C++C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述现代C++", template:'# 字典\n', hint:'info={"名称":"现代C++","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示现代C++", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟现代C++", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟现代C++过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理现代C++情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：现代C++模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v4-cpp7-1": [
  {desc:"RAII模拟", template:'# 异常处理\n', hint:'class F:\n    def __init__(self,n):self.n=n;print(f"打开:{n}")\n    def __enter__(self):return self\n    def __exit__(self,*a):print(f"关闭:{self.n}")\nwith F("test") as f:print(f"用:{f.n}")', check:function(o){return o.indexOf("打开")!==-1&&o.indexOf("关闭")!==-1;}},
  {desc:"用print展示异常处理概念", template:'# 概念\n', hint:'print("异常处理")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储异常处理数据", template:'# 列表\n', hint:'items=["异常处理A","异常处理B","异常处理C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述异常处理", template:'# 字典\n', hint:'info={"名称":"异常处理","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示异常处理", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟异常处理", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟异常处理过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理异常处理情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：异常处理模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
]
  });
})();
