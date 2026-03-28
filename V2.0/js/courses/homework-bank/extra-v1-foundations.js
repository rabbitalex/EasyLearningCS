// 自动拆分：补充课程作业题库
(function() {
  'use strict';

  window.HOMEWORK_BANK = window.HOMEWORK_BANK || {};
  Object.assign(window.HOMEWORK_BANK, {
// ============ 补充课程作业（0系列/v1/v3/v4）============
"v1-kernel-1": [
  {desc:"模拟系统调用", template:'# 内核\n', hint:'for n in ["open","read","close"]:print(f"sys_{n}()")', check:function(o){return o.indexOf("sys_")!==-1;}},
  {desc:"用print展示内核概念", template:'# 概念\n', hint:'print("内核")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储内核数据", template:'# 列表\n', hint:'items=["内核A","内核B","内核C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述内核", template:'# 字典\n', hint:'info={"名称":"内核","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示内核", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟内核", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟内核过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理内核情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：内核模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v1-kernel-2": [
  {desc:"模拟中断处理", template:'# 中断\n', hint:'for i,n in [(0,"时钟"),(1,"键盘")]:print(f"IRQ{i}:{n}")', check:function(o){return o.indexOf("IRQ")!==-1;}},
  {desc:"用print展示中断概念", template:'# 概念\n', hint:'print("中断")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储中断数据", template:'# 列表\n', hint:'items=["中断A","中断B","中断C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述中断", template:'# 字典\n', hint:'info={"名称":"中断","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示中断", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟中断", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟中断过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理中断情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：中断模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v1-logic-1": [
  {desc:"真值表", template:'# 布尔逻辑\n', hint:'for a in [True,False]:\n    for b in [True,False]:print(f"{a} AND {b}={a and b}")', check:function(o){return o.indexOf("AND")!==-1;}},
  {desc:"用print展示布尔逻辑概念", template:'# 概念\n', hint:'print("布尔逻辑")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储布尔逻辑数据", template:'# 列表\n', hint:'items=["布尔逻辑A","布尔逻辑B","布尔逻辑C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述布尔逻辑", template:'# 字典\n', hint:'info={"名称":"布尔逻辑","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示布尔逻辑", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟布尔逻辑", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟布尔逻辑过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理布尔逻辑情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：布尔逻辑模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v1-logic-2": [
  {desc:"德摩根定律", template:'# 命题逻辑\n', hint:'for a in [True,False]:\n    for b in [True,False]:print(not(a and b)==((not a)or(not b)))', check:function(o){return o.indexOf("True")!==-1;}},
  {desc:"用print展示命题逻辑概念", template:'# 概念\n', hint:'print("命题逻辑")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储命题逻辑数据", template:'# 列表\n', hint:'items=["命题逻辑A","命题逻辑B","命题逻辑C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述命题逻辑", template:'# 字典\n', hint:'info={"名称":"命题逻辑","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示命题逻辑", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟命题逻辑", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟命题逻辑过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理命题逻辑情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：命题逻辑模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v1-logic-3": [
  {desc:"集合运算", template:'# 集合论\n', hint:'A={1,2,3};B={2,3,4}\nprint("交:",A&B)\nprint("并:",A|B)', check:function(o){return o.indexOf("交")!==-1;}},
  {desc:"用print展示集合论概念", template:'# 概念\n', hint:'print("集合论")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储集合论数据", template:'# 列表\n', hint:'items=["集合论A","集合论B","集合论C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述集合论", template:'# 字典\n', hint:'info={"名称":"集合论","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示集合论", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟集合论", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟集合论过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理集合论情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：集合论模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v1-logic-4": [
  {desc:"穷举解谜", template:'# 逻辑推理\n', hint:'for a in [True,False]:\n    for b in [True,False]:\n        for c in [True,False]:\n            if (a==(not b)) and (b==(not c)):print(f"A={a} B={b} C={c}")', check:function(o){return o.indexOf("A=")!==-1;}},
  {desc:"用print展示逻辑推理概念", template:'# 概念\n', hint:'print("逻辑推理")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储逻辑推理数据", template:'# 列表\n', hint:'items=["逻辑推理A","逻辑推理B","逻辑推理C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述逻辑推理", template:'# 字典\n', hint:'info={"名称":"逻辑推理","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示逻辑推理", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟逻辑推理", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟逻辑推理过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理逻辑推理情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：逻辑推理模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v1-num-1": [
  {desc:"进制转换", template:'# 进制\n', hint:'for n in [10,42,255]:print(f"{n} bin={bin(n)} hex={hex(n)}")', check:function(o){return o.indexOf("0b")!==-1&&o.indexOf("0x")!==-1;}},
  {desc:"用print展示进制概念", template:'# 概念\n', hint:'print("进制")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储进制数据", template:'# 列表\n', hint:'items=["进制A","进制B","进制C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述进制", template:'# 字典\n', hint:'info={"名称":"进制","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示进制", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟进制", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟进制过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理进制情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：进制模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v1-num-2": [
  {desc:"ASCII码", template:'# 编码\n', hint:'for c in "Hello":print(f"{c}={ord(c)}")', check:function(o){return o.indexOf("72")!==-1;}},
  {desc:"用print展示编码概念", template:'# 概念\n', hint:'print("编码")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储编码数据", template:'# 列表\n', hint:'items=["编码A","编码B","编码C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述编码", template:'# 字典\n', hint:'info={"名称":"编码","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示编码", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟编码", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟编码过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理编码情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：编码模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v1-os-1": [
  {desc:"进程管理", template:'# 操作系统\n', hint:'for i,p in enumerate(["shell","editor"],1):print(f"PID{i}:{p}")', check:function(o){return o.indexOf("PID")!==-1;}},
  {desc:"用print展示操作系统概念", template:'# 概念\n', hint:'print("操作系统")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储操作系统数据", template:'# 列表\n', hint:'items=["操作系统A","操作系统B","操作系统C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述操作系统", template:'# 字典\n', hint:'info={"名称":"操作系统","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示操作系统", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟操作系统", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟操作系统过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理操作系统情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：操作系统模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v1-os-2": [
  {desc:"页表映射", template:'# 虚拟内存\n', hint:'for vp,pp in {0:100,1:200}.items():print(f"虚页{vp}->物理{pp}")', check:function(o){return o.indexOf("虚页")!==-1;}},
  {desc:"用print展示虚拟内存概念", template:'# 概念\n', hint:'print("虚拟内存")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储虚拟内存数据", template:'# 列表\n', hint:'items=["虚拟内存A","虚拟内存B","虚拟内存C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述虚拟内存", template:'# 字典\n', hint:'info={"名称":"虚拟内存","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示虚拟内存", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟虚拟内存", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟虚拟内存过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理虚拟内存情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：虚拟内存模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v1-proc-1": [
  {desc:"进程状态", template:'# 进程\n', hint:'for s in ["创建","就绪","运行","终止"]:print(f"状态:{s}")', check:function(o){return o.indexOf("运行")!==-1;}},
  {desc:"用print展示进程概念", template:'# 概念\n', hint:'print("进程")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储进程数据", template:'# 列表\n', hint:'items=["进程A","进程B","进程C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述进程", template:'# 字典\n', hint:'info={"名称":"进程","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示进程", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟进程", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟进程过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理进程情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：进程模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v1-proc-2": [
  {desc:"管道通信", template:'# IPC\n', hint:'pipe=["消息1","消息2"]\nwhile pipe:print(f"接收:{pipe.pop(0)}")', check:function(o){return o.indexOf("接收")!==-1;}},
  {desc:"用print展示IPC概念", template:'# 概念\n', hint:'print("IPC")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储IPC数据", template:'# 列表\n', hint:'items=["IPCA","IPCB","IPCC"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述IPC", template:'# 字典\n', hint:'info={"名称":"IPC","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示IPC", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟IPC", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟IPC过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理IPC情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：IPC模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v1-thread-1": [
  {desc:"线程执行", template:'# 线程\n', hint:'for t in ["线程1","线程2"]:print(f"{t}:执行")', check:function(o){return o.indexOf("线程")!==-1;}},
  {desc:"用print展示线程概念", template:'# 概念\n', hint:'print("线程")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储线程数据", template:'# 列表\n', hint:'items=["线程A","线程B","线程C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述线程", template:'# 字典\n', hint:'info={"名称":"线程","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示线程", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟线程", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟线程过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理线程情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：线程模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v1-thread-2": [
  {desc:"死锁检测", template:'# 死锁\n', hint:'print("A持有R1等待R2")\nprint("B持有R2等待R1")\nprint("检测到死锁!")', check:function(o){return o.indexOf("死锁")!==-1;}},
  {desc:"用print展示死锁概念", template:'# 概念\n', hint:'print("死锁")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储死锁数据", template:'# 列表\n', hint:'items=["死锁A","死锁B","死锁C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述死锁", template:'# 字典\n', hint:'info={"名称":"死锁","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示死锁", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟死锁", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟死锁过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理死锁情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：死锁模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
  });
})();
