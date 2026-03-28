// 自动拆分：补充课程作业题库
(function() {
  'use strict';

  window.HOMEWORK_BANK = window.HOMEWORK_BANK || {};
  Object.assign(window.HOMEWORK_BANK, {
// ============ 补充课程作业（0系列/v1/v3/v4）============
// ============ 补充课程作业（0系列/v1/v3/v4）============
"0-1": [
  {desc:"写3个变量并逐行打印", template:'# 逐行执行\n', hint:'a=10\nprint(a)\nb=20\nprint(b)\nprint(a+b)', check:function(o){return o.trim().split("\n").length>=3;}},
  {desc:"用type()检查3种类型", template:'# 类型\n', hint:'print(type(42))\nprint(type(3.14))\nprint(type("hi"))', check:function(o){return o.indexOf("int")!==-1;}},
  {desc:"用try捕获NameError", template:'x=1\nprint(x)\n', hint:'x=1\nprint(x)\ntry:\n    print(y)\nexcept NameError as e:\n    print(e)', check:function(o){return o.indexOf("1")!==-1;}},
  {desc:"用print跟踪函数执行顺序", template:'# 顺序\n', hint:'print("1.定义")\ndef f(a,b):\n    print("3.执行")\n    return a+b\nprint("2.调用")\nprint("4.结果:",f(3,5))', check:function(o){return o.indexOf("结果")!==-1;}},
  {desc:"用exec()执行字符串代码", template:'# exec\n', hint:'exec("print(2+3)")', check:function(o){return o.indexOf("5")!==-1;}},
  {desc:"用eval()计算表达式", template:'# eval\n', hint:'print(eval("(3+5)*2"))', check:function(o){return o.indexOf("16")!==-1;}},
  {desc:"捕获除零错误", template:'# 除零\n', hint:'try:\n    print(10/0)\nexcept ZeroDivisionError:\n    print("除零错误")', check:function(o){return o.indexOf("除零")!==-1;}},
  {desc:"用compile+exec模拟编译", template:'# compile\n', hint:'c=compile("print(10*2)","<>","exec")\nexec(c)', check:function(o){return o.indexOf("20")!==-1;}},
  {desc:"用dis查看字节码", template:'import dis\n', hint:'import dis\ndef f(a,b):return a+b\ndis.dis(f)', check:function(o){return o.indexOf("LOAD")!==-1||o.indexOf("RETURN")!==-1;}},
  {desc:"对比直接运算和eval", template:'# 对比\n', hint:'print(3*5+2==eval("3*5+2"))', check:function(o){return o.indexOf("True")!==-1;}}
],
"0-2": [
  {desc:"写safe_add检查类型", template:'# 安全加法\n', hint:'def safe_add(a,b):\n    if type(a)==type(b):return a+b\n    print("类型不同")\nprint(safe_add(3,5))\nsafe_add(3,"5")', check:function(o){return o.indexOf("8")!==-1&&o.indexOf("类型不同")!==-1;}},
  {desc:"用time对比速度", template:'import time\n', hint:'import time\ns=time.time();sum(range(100000));print(f"用时:{time.time()-s:.4f}s")', check:function(o){return o.indexOf("用时")!==-1;}},
  {desc:"打印参数类型", template:'# 类型\n', hint:'def ck(*a):\n    for x in a:print(type(x).__name__)\nck(1,"hi",3.14)', check:function(o){return o.indexOf("int")!==-1&&o.indexOf("str")!==-1;}},
  {desc:"用isinstance检查", template:'# isinstance\n', hint:'print(isinstance(42,(int,float)))\nprint(isinstance("hi",(int,float)))', check:function(o){return o.indexOf("True")!==-1&&o.indexOf("False")!==-1;}},
  {desc:"捕获语法错误", template:'# 语法\n', hint:'try:\n    compile("if True print","<>","exec")\nexcept SyntaxError:\n    print("语法错误")', check:function(o){return o.indexOf("语法错误")!==-1;}},
  {desc:"模拟常量折叠", template:'# 优化\n', hint:'for e in ["3+5*2","2**10"]:print(f"{e}->{eval(e)}")', check:function(o){return o.indexOf("1024")!==-1;}},
  {desc:"用dis查看字节码", template:'import dis\n', hint:'import dis\ndef mul(a,b):return a*b\ndis.dis(mul)', check:function(o){return o.indexOf("LOAD")!==-1;}},
  {desc:"演示作用域", template:'# 作用域\n', hint:'x="全局"\ndef f():x="局部";print("内:",x)\nf()\nprint("外:",x)', check:function(o){return o.indexOf("局部")!==-1&&o.indexOf("全局")!==-1;}},
  {desc:"模拟两遍扫描", template:'# 扫描\n', hint:'funcs={"hello","world"}\nfor c in ["hello()","foo()"]:print(f"{c}:{"OK" if c.split("(")[0] in funcs else "未定义"}")', check:function(o){return o.indexOf("OK")!==-1&&o.indexOf("未定义")!==-1;}},
  {desc:"对比动态静态类型", template:'# 类型\n', hint:'x=42;print(type(x).__name__)\nx="hi";print(type(x).__name__)', check:function(o){return o.indexOf("int")!==-1&&o.indexOf("str")!==-1;}}
],
"0-3": [
  {desc:"实现词法分析器", template:'# 词法\n', hint:'def tok(e):\n    ts=[];i=0\n    while i<len(e):\n        if e[i].isdigit():\n            n=""\n            while i<len(e) and e[i].isdigit():n+=e[i];i+=1\n            ts.append(("NUM",n))\n        elif e[i] in "+-*/":ts.append(("OP",e[i]));i+=1\n        else:i+=1\n    return ts\nfor t in tok("3+5*2"):print(t)', check:function(o){return o.indexOf("NUM")!==-1&&o.indexOf("OP")!==-1;}},
  {desc:"验证优先级", template:'# 优先级\n', hint:'print("2+3*4=",2+3*4)\nprint("(2+3)*4=",(2+3)*4)', check:function(o){return o.indexOf("14")!==-1&&o.indexOf("20")!==-1;}},
  {desc:"检查括号匹配", template:'# 括号\n', hint:'def ck(e):c=0;[exec("") for ch in e if not(ch=="(" and not exec("") or ch==")" and not exec(""))];return True\nfor e in ["(())",")("]:print(e,":",end=" ")\ntry:\n    r=eval(e.replace("(","1+").replace(")","+1"))\n    print("OK")\nexcept:print("错")', check:function(o){return o.indexOf("OK")!==-1;}},
  {desc:"识别关键字", template:'# 关键字\n', hint:'kw={"if","for","while","def"}\nfor w in ["if","hello","123","for"]:print(f"{w}:{"关键字" if w in kw else "数字" if w.isdigit() else "标识符"}")', check:function(o){return o.indexOf("关键字")!==-1&&o.indexOf("标识符")!==-1;}},
  {desc:"简单表达式求值", template:'# 求值\n', hint:'def calc(e):return eval(e)\nprint("3+5*2=",calc("3+5*2"))', check:function(o){return o.indexOf("13")!==-1;}},
  {desc:"用正则分词", template:'import re\n', hint:'import re\nfor m in re.finditer(r"(\d+)|([a-zA-Z]+)|([+\-*/])", "x=3+y"):print(m.group())', check:function(o){return o.trim().split("\n").length>=4;}},
  {desc:"检查缩进", template:'# 缩进\n', hint:'code="def f():\n    ok\n      bad"\nfor i,l in enumerate(code.split("\n"),1):\n    if l.strip():sp=len(l)-len(l.lstrip());print(f"行{i}:{sp}空格 {"OK" if sp%4==0 else "错"}")', check:function(o){return o.indexOf("OK")!==-1;}},
  {desc:"检查赋值合法性", template:'# 赋值\n', hint:'for s in ["a=1","123=x","v=10"]:left=s.split("=")[0].strip();print(f"{s}:{"合法" if left.isidentifier() else "非法"}")', check:function(o){return o.indexOf("合法")!==-1;}},
  {desc:"遍历Token", template:'# Token\n', hint:'for i,t in enumerate(["if","(","x",")"]):print(f"Token[{i}]:{t}")', check:function(o){return o.indexOf("Token")!==-1;}},
  {desc:"安全计算器", template:'# 计算\n', hint:'for e in ["3+5*2","(3+5)*2","1+2+3"]:print(f"{e}={eval(e)}")', check:function(o){return o.indexOf("13")!==-1&&o.indexOf("16")!==-1;}}
],
"0-4": [
  {desc:"验证优先级", template:'# 优先级\n', hint:'print("2**3*4+10//3-1=",2**3*4+10//3-1)', check:function(o){return o.indexOf("34")!==-1;}},
  {desc:"用字典模拟表达式树", template:'# 树\n', hint:'def calc(n):\n    if "v" in n:return n["v"]\n    l,r=calc(n["l"]),calc(n["r"])\n    return l+r if n["o"]=="+" else l*r\nprint(calc({"o":"+","l":{"o":"*","l":{"v":3},"r":{"v":5}},"r":{"v":2}}))', check:function(o){return o.indexOf("17")!==-1;}},
  {desc:"用ast模块查看树", template:'import ast\n', hint:'import ast\nprint(ast.dump(ast.parse("1+2*3",mode="eval")))', check:function(o){return o.indexOf("BinOp")!==-1||o.indexOf("Add")!==-1;}},
  {desc:"计算树深度", template:'# 深度\n', hint:'def d(n):\n    if n is None:return 0\n    if "v" in n and "l" not in n:return 1\n    return 1+max(d(n.get("l")),d(n.get("r")))\nprint("深度:",d({"o":"+","l":{"o":"*","l":{"v":3},"r":{"v":5}},"r":{"v":2}}))', check:function(o){return o.indexOf("3")!==-1;}},
  {desc:"后序遍历", template:'# 后缀\n', hint:'def post(n):\n    if "v" in n and "l" not in n:return str(n["v"])\n    return post(n["l"])+" "+post(n["r"])+" "+n["o"]\nprint(post({"o":"+","l":{"o":"*","l":{"v":3},"r":{"v":5}},"r":{"v":2}}))', check:function(o){return o.indexOf("3 5 *")!==-1;}},
  {desc:"中缀转后缀", template:'# 转换\n', hint:'def to_p(e):\n    pr={"+":1,"-":1,"*":2};o=[];s=[]\n    for t in e.split():\n        if t.isdigit():o.append(t)\n        else:\n            while s and pr.get(s[-1],0)>=pr.get(t,0):o.append(s.pop())\n            s.append(t)\n    while s:o.append(s.pop())\n    return " ".join(o)\nprint(to_p("3 + 5 * 2"))', check:function(o){return o.indexOf("3 5 2")!==-1;}},
  {desc:"后缀求值", template:'# 求值\n', hint:'def calc(e):\n    s=[]\n    for t in e.split():\n        if t.isdigit():s.append(int(t))\n        else:b,a=s.pop(),s.pop();s.append(a+b if t=="+" else a*b)\n    return s[0]\nprint(calc("3 5 2 * +"))\nprint(calc("3 5 + 2 *"))', check:function(o){return o.indexOf("13")!==-1&&o.indexOf("16")!==-1;}},
  {desc:"分析函数定义", template:'import ast\n', hint:'import ast\nfor n in ast.walk(ast.parse("def f(a,b):pass")):\n    if isinstance(n,ast.FunctionDef):print(f"函数:{n.name} 参数:{[a.arg for a in n.args.args]}")', check:function(o){return o.indexOf("函数")!==-1;}},
  {desc:"前缀求值", template:'# 前缀\n', hint:'def calc(ts):\n    t=ts.pop(0)\n    if t not in "+-*":return int(t)\n    a,b=calc(ts),calc(ts)\n    return a+b if t=="+" else a*b\nprint(calc("+ * 3 5 2".split()))', check:function(o){return o.indexOf("17")!==-1;}},
  {desc:"安全计算器", template:'# 计算\n', hint:'for e in ["3+5*2","(3+5)*2","10//3"]:print(f"{e}={eval(e)}")', check:function(o){return o.indexOf("13")!==-1;}}
],
"0-5": [
  {desc:"打印Python版本", template:'import sys\n', hint:'import sys\nprint("版本:",sys.version.split()[0])', check:function(o){return o.indexOf(".")!==-1;}},
  {desc:"查看内存地址", template:'# 地址\n', hint:'print(hex(id(42)))', check:function(o){return o.indexOf("0x")!==-1;}},
  {desc:"对比内存占用", template:'import sys\n', hint:'import sys\nfor v in [0,42,"hi",[1,2]]:print(f"{str(v):6}{sys.getsizeof(v)}B")', check:function(o){return o.indexOf("B")!==-1;}},
  {desc:"验证引用", template:'# 引用\n', hint:'a=[1,2];b=a;b.append(3)\nprint(a);print(a is b)', check:function(o){return o.indexOf("True")!==-1;}},
  {desc:"浅拷贝vs深拷贝", template:'import copy\n', hint:'import copy\no=[[1,2]];s=copy.copy(o);d=copy.deepcopy(o)\no[0].append(9)\nprint("浅:",s)\nprint("深:",d)', check:function(o){return o.indexOf("9")!==-1;}},
  {desc:"引用计数", template:'import sys\n', hint:'import sys\na=[1]\nprint("计数:",sys.getrefcount(a))', check:function(o){return o.indexOf("计数")!==-1;}},
  {desc:"探索模块", template:'import math\n', hint:'import math\nprint([x for x in dir(math) if not x.startswith("_")][:5])', check:function(o){return o.indexOf("a")!==-1;}},
  {desc:"__name__变量", template:'# name\n', hint:'if __name__=="__main__":print("直接运行")', check:function(o){return o.indexOf("直接运行")!==-1;}},
  {desc:"环境变量", template:'import os\n', hint:'import os\nos.environ["M"]="dev"\nprint(os.environ["M"])', check:function(o){return o.indexOf("dev")!==-1;}},
  {desc:"系统信息", template:'import sys\n', hint:'import sys\nprint("Python:",sys.version.split()[0])\nprint("平台:",sys.platform)', check:function(o){return o.indexOf("Python")!==-1;}}
],
  });
})();
