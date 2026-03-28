// 自动拆分：补充课程作业题库
(function() {
  'use strict';

  window.HOMEWORK_BANK = window.HOMEWORK_BANK || {};
  Object.assign(window.HOMEWORK_BANK, {
// ============ 补充课程作业（0系列/v1/v3/v4）============
"0c-1": [
  {desc:"十进制转二进制", template:'# 二进制\n', hint:'def to_bin(n):\n    if n==0:return "0"\n    b=""\n    while n>0:b=str(n%2)+b;n//=2\n    return b\nfor x in [5,10,42]:print(f"{x}={to_bin(x)}")', check:function(o){return o.indexOf("101010")!==-1;}},
  {desc:"用print展示二进制概念", template:'# 概念\n', hint:'print("二进制")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储二进制数据", template:'# 列表\n', hint:'items=["二进制A","二进制B","二进制C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述二进制", template:'# 字典\n', hint:'info={"名称":"二进制","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示二进制", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟二进制", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟二进制过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理二进制情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：二进制模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"0c-2": [
  {desc:"汇编模拟器", template:'# 汇编\n', hint:'A=0\nfor op,v in [("MOV",10),("ADD",5),("SUB",2)]:\n    if op=="MOV":A=v\n    elif op=="ADD":A+=v\n    elif op=="SUB":A-=v\n    print(f"{op}:{A}")', check:function(o){return o.indexOf("MOV")!==-1;}},
  {desc:"用print展示汇编概念", template:'# 概念\n', hint:'print("汇编")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储汇编数据", template:'# 列表\n', hint:'items=["汇编A","汇编B","汇编C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述汇编", template:'# 字典\n', hint:'info={"名称":"汇编","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示汇编", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟汇编", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟汇编过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理汇编情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：汇编模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"0c-3": [
  {desc:"用while实现累加", template:'# 汇编循环\n', hint:'A=0;i=1\nwhile i<=10:A+=i;i+=1\nprint(f"结果:{A}")', check:function(o){return o.indexOf("55")!==-1;}},
  {desc:"用print展示汇编循环概念", template:'# 概念\n', hint:'print("汇编循环")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储汇编循环数据", template:'# 列表\n', hint:'items=["汇编循环A","汇编循环B","汇编循环C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述汇编循环", template:'# 字典\n', hint:'info={"名称":"汇编循环","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示汇编循环", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟汇编循环", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟汇编循环过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理汇编循环情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：汇编循环模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"0c-4": [
  {desc:"对比编程风格", template:'# 语言进化\n', hint:'A=0;i=1\nwhile i<=5:A+=i;i+=1\nprint(f"循环:{A}")\nprint(f"Python:{sum(range(1,6))}")', check:function(o){return o.indexOf("15")!==-1;}},
  {desc:"用print展示语言进化概念", template:'# 概念\n', hint:'print("语言进化")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储语言进化数据", template:'# 列表\n', hint:'items=["语言进化A","语言进化B","语言进化C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述语言进化", template:'# 字典\n', hint:'info={"名称":"语言进化","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示语言进化", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟语言进化", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟语言进化过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理语言进化情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：语言进化模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
  });
})();
