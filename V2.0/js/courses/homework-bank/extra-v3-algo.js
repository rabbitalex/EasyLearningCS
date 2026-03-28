// 自动拆分：补充课程作业题库
(function() {
  'use strict';

  window.HOMEWORK_BANK = window.HOMEWORK_BANK || {};
  Object.assign(window.HOMEWORK_BANK, {
// ============ 补充课程作业（0系列/v1/v3/v4）============
"v3-algo-1": [
  {desc:"冒泡排序", template:'# 排序\n', hint:'a=[5,3,8,1,9,2]\nfor i in range(len(a)):\n    for j in range(len(a)-1-i):\n        if a[j]>a[j+1]:a[j],a[j+1]=a[j+1],a[j]\nprint(a)', check:function(o){return o.indexOf("[1, 2, 3")!==-1;}},
  {desc:"用print展示排序概念", template:'# 概念\n', hint:'print("排序")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储排序数据", template:'# 列表\n', hint:'items=["排序A","排序B","排序C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述排序", template:'# 字典\n', hint:'info={"名称":"排序","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示排序", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟排序", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟排序过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理排序情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：排序模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v3-dp-1": [
  {desc:"递归求幂", template:'# 递归\n', hint:'def pw(b,e):return 1 if e==0 else b*pw(b,e-1)\nprint(f"2^10={pw(2,10)}")', check:function(o){return o.indexOf("1024")!==-1;}},
  {desc:"用print展示递归概念", template:'# 概念\n', hint:'print("递归")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储递归数据", template:'# 列表\n', hint:'items=["递归A","递归B","递归C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述递归", template:'# 字典\n', hint:'info={"名称":"递归","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示递归", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟递归", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟递归过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理递归情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：递归模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v3-dp-2": [
  {desc:"硬币找零", template:'# 动态规划\n', hint:'def coins(amt):\n    dp=[float("inf")]*(amt+1);dp[0]=0\n    for c in [1,5,10,25]:\n        for a in range(c,amt+1):dp[a]=min(dp[a],dp[a-c]+1)\n    return dp[amt]\nprint(f"41分:{coins(41)}枚")', check:function(o){return o.indexOf("枚")!==-1;}},
  {desc:"用print展示动态规划概念", template:'# 概念\n', hint:'print("动态规划")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储动态规划数据", template:'# 列表\n', hint:'items=["动态规划A","动态规划B","动态规划C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述动态规划", template:'# 字典\n', hint:'info={"名称":"动态规划","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示动态规划", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟动态规划", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟动态规划过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理动态规划情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：动态规划模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v3-ds-1": [
  {desc:"模拟链表", template:'# 链表\n', hint:'class N:\n    def __init__(self,v):self.v=v;self.n=None\na=N(1);b=N(2);c=N(3);a.n=b;b.n=c\nn=a\nwhile n:print(n.v,end="->");n=n.n\nprint("None")', check:function(o){return o.indexOf("->")!==-1;}},
  {desc:"用print展示链表概念", template:'# 概念\n', hint:'print("链表")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储链表数据", template:'# 列表\n', hint:'items=["链表A","链表B","链表C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述链表", template:'# 字典\n', hint:'info={"名称":"链表","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示链表", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟链表", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟链表过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理链表情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：链表模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v3-ds-2": [
  {desc:"树的遍历", template:'# 树与图\n', hint:'tree={1:[2,3],2:[4,5]}\ndef pre(n):\n    print(n,end=" ")\n    for c in tree.get(n,[]):pre(c)\npre(1)', check:function(o){return o.indexOf("1 2 4")!==-1;}},
  {desc:"用print展示树与图概念", template:'# 概念\n', hint:'print("树与图")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储树与图数据", template:'# 列表\n', hint:'items=["树与图A","树与图B","树与图C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述树与图", template:'# 字典\n', hint:'info={"名称":"树与图","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示树与图", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟树与图", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟树与图过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理树与图情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：树与图模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v3-graph-1": [
  {desc:"BFS搜索", template:'# 图遍历\n', hint:'from collections import deque\ng={"A":["B","C"],"B":["D"],"C":["D"],"D":[]}\nq=deque(["A"]);seen={"A"}\nwhile q:\n    n=q.popleft();print(n,end=" ")\n    for nb in g[n]:\n        if nb not in seen:seen.add(nb);q.append(nb)', check:function(o){return o.indexOf("A B")!==-1;}},
  {desc:"用print展示图遍历概念", template:'# 概念\n', hint:'print("图遍历")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储图遍历数据", template:'# 列表\n', hint:'items=["图遍历A","图遍历B","图遍历C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述图遍历", template:'# 字典\n', hint:'info={"名称":"图遍历","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示图遍历", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟图遍历", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟图遍历过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理图遍历情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：图遍历模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v3-hash-1": [
  {desc:"词频统计", template:'# 哈希表\n', hint:'text="the cat sat on the mat the cat"\nf={}\nfor w in text.split():f[w]=f.get(w,0)+1\nfor w,c in sorted(f.items(),key=lambda x:-x[1]):print(f"{w}:{c}")', check:function(o){return o.indexOf("the:3")!==-1;}},
  {desc:"用print展示哈希表概念", template:'# 概念\n', hint:'print("哈希表")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储哈希表数据", template:'# 列表\n', hint:'items=["哈希表A","哈希表B","哈希表C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述哈希表", template:'# 字典\n', hint:'info={"名称":"哈希表","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示哈希表", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟哈希表", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟哈希表过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理哈希表情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：哈希表模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v3-hash-2": [
  {desc:"集合运算", template:'# 集合操作\n', hint:'A={"小明","小红"};B={"小红","小华"}\nprint("只A:",A-B)\nprint("交:",A&B)\nprint("全:",A|B)', check:function(o){return o.indexOf("只A")!==-1;}},
  {desc:"用print展示集合操作概念", template:'# 概念\n', hint:'print("集合操作")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储集合操作数据", template:'# 列表\n', hint:'items=["集合操作A","集合操作B","集合操作C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述集合操作", template:'# 字典\n', hint:'info={"名称":"集合操作","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示集合操作", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟集合操作", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟集合操作过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理集合操作情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：集合操作模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
"v3-heap-1": [
  {desc:"TopK查找", template:'# 堆\n', hint:'import heapq\nd=[15,3,28,7,42]\nprint("最小3:",heapq.nsmallest(3,d))\nprint("最大3:",heapq.nlargest(3,d))', check:function(o){return o.indexOf("最小")!==-1;}},
  {desc:"用print展示堆概念", template:'# 概念\n', hint:'print("堆")\nprint("这是CS基础")', check:function(o){return o.trim().split("\n").length>=2;}},
  {desc:"用列表存储堆数据", template:'# 列表\n', hint:'items=["堆A","堆B","堆C"]\nfor i,x in enumerate(items,1):print(f"{i}.{x}")', check:function(o){return o.indexOf("1.")!==-1;}},
  {desc:"用字典描述堆", template:'# 字典\n', hint:'info={"名称":"堆","类型":"基础"}\nfor k,v in info.items():print(f"{k}:{v}")', check:function(o){return o.indexOf("名称")!==-1;}},
  {desc:"写函数演示堆", template:'# 函数\n', hint:'def demo():\n    print("开始")\n    for i in range(3):print(f"  步骤{i+1}")\n    print("完成")\ndemo()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用类模拟堆", template:'# 类\n', hint:'class Sim:\n    def __init__(self):self.s="初始"\n    def run(self):self.s="完成";print(self.s)\nSim().run()', check:function(o){return o.indexOf("完成")!==-1;}},
  {desc:"用循环模拟堆过程", template:'# 循环\n', hint:'data=[10,20,30,40,50]\nt=0\nfor v in data:t+=v;print(f"累计:{t}")\nprint(f"总:{t}")', check:function(o){return o.indexOf("总:150")!==-1;}},
  {desc:"用条件处理堆情况", template:'# 条件\n', hint:'for c in ["正常","警告","错误"]:\n    if c=="正常":print(f"{c}:继续")\n    elif c=="警告":print(f"{c}:注意")\n    else:print(f"{c}:停止")', check:function(o){return o.indexOf("继续")!==-1&&o.indexOf("停止")!==-1;}},
  {desc:"异常处理练习", template:'# 异常\n', hint:'for x in [5,0,10]:\n    try:print(f"100/{x}={100//x}")\n    except:print(f"100/{x}=错误")', check:function(o){return o.indexOf("错误")!==-1;}},
  {desc:"综合：堆模拟", template:'# 综合\n', hint:'r=[]\nfor i in range(5):r.append((i+1)*10);print(f"步骤{i+1}:{(i+1)*10}")\nprint(f"结果:{r}")', check:function(o){return o.indexOf("结果")!==-1;}}
],
  });
})();
