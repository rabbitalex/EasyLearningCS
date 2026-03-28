// 自动拆分：补充课程作业题库
(function() {
  'use strict';

  window.HOMEWORK_BANK = window.HOMEWORK_BANK || {};
  Object.assign(window.HOMEWORK_BANK, {
// ============ 补充课程作业（0系列/v1/v3/v4）============
"0b-1": [
  {desc:"模拟CPU指令执行", template:'# CPU\n', hint:'r=0\nfor op,v in [("LOAD",10),("ADD",5),("SUB",3)]:\n    if op=="LOAD":r=v\n    elif op=="ADD":r+=v\n    elif op=="SUB":r-=v\n    print(f"{op} {v}->r={r}")', check:function(o){return o.indexOf("r=")!==-1;}},
  {desc:"用print展示CPU概念", template:'# 概念\n', hint:'print("CPU")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储CPU数据", template:'# 列表\n', hint:'items=["CPUA","CPUB","CPUC"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述CPU", template:'# 字典\n', hint:'info={"名称":"CPU","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示CPU", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟CPU", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟CPU过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理CPU情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：CPU模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"0b-2": [
  {desc:"模拟内存读写", template:'# 内存\n', hint:'mem={};mem[100]=42;mem[104]="hi"\nfor k,v in mem.items():print(f"[{k}]={v}")', check:function(o){return o.indexOf("[100]")!==-1;}},
  {desc:"用print展示内存概念", template:'# 概念\n', hint:'print("内存")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储内存数据", template:'# 列表\n', hint:'items=["内存A","内存B","内存C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述内存", template:'# 字典\n', hint:'info={"名称":"内存","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示内存", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟内存", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟内存过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理内存情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：内存模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"0b-3": [
  {desc:"模拟缓存命中", template:'# 缓存\n', hint:'cache={};h=m=0\nfor a in [1,2,3,1,2,4,1]:\n    if a in cache:h+=1\n    else:m+=1;cache[a]=1\nprint(f"命中率:{h*100//(h+m)}%")', check:function(o){return o.indexOf("命中率")!==-1;}},
  {desc:"用print展示缓存概念", template:'# 概念\n', hint:'print("缓存")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储缓存数据", template:'# 列表\n', hint:'items=["缓存A","缓存B","缓存C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述缓存", template:'# 字典\n', hint:'info={"名称":"缓存","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示缓存", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟缓存", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟缓存过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理缓存情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：缓存模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"0b-4": [
  {desc:"模拟总线传输", template:'# 总线IO\n', hint:'for s,d in [("CPU","内存"),("内存","CPU"),("CPU","显卡")]:print(f"{s}->{d}")', check:function(o){return o.indexOf("CPU")!==-1;}},
  {desc:"用print展示总线IO概念", template:'# 概念\n', hint:'print("总线IO")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储总线IO数据", template:'# 列表\n', hint:'items=["总线IOA","总线IOB","总线IOC"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述总线IO", template:'# 字典\n', hint:'info={"名称":"总线IO","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示总线IO", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟总线IO", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟总线IO过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理总线IO情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：总线IO模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
  });
})();
