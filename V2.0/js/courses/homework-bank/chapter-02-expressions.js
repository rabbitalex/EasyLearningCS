// 自动拆分：按章节维护作业题库
(function() {
  'use strict';

  window.HOMEWORK_BANK = window.HOMEWORK_BANK || {};
  Object.assign(window.HOMEWORK_BANK, {
// ============ 第二章：运算与表达式 ============
"2-1": [
  {desc:"计算小明有50元，买3本笔记本每本8元和1支笔5元，打印花费和余额", template:'money = 50\\n', hint:'money = 50\\nspent = 3*8 + 5\\nprint("花了", spent)\\nprint("剩余", money-spent)', check:function(o){return o.indexOf("29")!==-1 || o.indexOf("21")!==-1;}},
  {desc:"计算 2 的 10 次方", template:'# 幂运算\n', hint:'print(2 ** 10)', check:function(o){return o.indexOf("1024")!==-1;}},
  {desc:"计算 17 除以 5 的商和余数", template:'# 整除和取余\n', hint:'print("商:", 17 // 5)\\nprint("余数:", 17 % 5)', check:function(o){return o.indexOf("3")!==-1 && o.indexOf("2")!==-1;}},
  {desc:"计算表达式 (3 + 5) * 2 - 10 / 5 的结果", template:'# 混合运算\n', hint:'result = (3 + 5) * 2 - 10 / 5\\nprint(result)', check:function(o){return o.indexOf("14")!==-1;}},
  {desc:"用复合赋值运算符：x 从 100 开始，依次 +=20, -=15, *=2，打印每步", template:'x = 100\\n', hint:'x = 100\\nx += 20\\nprint(x)\\nx -= 15\\nprint(x)\\nx *= 2\\nprint(x)', check:function(o){return o.indexOf("210")!==-1;}},
  {desc:"计算1到100的累加和", template:'# 1+2+3+...+100\n', hint:'total = 0\\nfor i in range(1, 101):\\n    total += i\\nprint(total)', check:function(o){return o.indexOf("5050")!==-1;}},
  {desc:"华氏温度转摄氏温度：F=100，C=(F-32)*5/9", template:'F = 100\\n', hint:'F = 100\\nC = (F - 32) * 5 / 9\\nprint(f"{F}°F = {C:.1f}°C")', check:function(o){return o.indexOf("37")!==-1;}},
  {desc:"计算三角形面积：底=12，高=8", template:'# 三角形面积\n', hint:'base = 12\\nheight = 8\\narea = base * height / 2\\nprint("面积:", area)', check:function(o){return o.indexOf("48")!==-1;}},
  {desc:"判断一个数是奇数还是偶数：用 % 运算符检测 num=17", template:'num = 17\\n', hint:'num = 17\\nif num % 2 == 0:\\n    print("偶数")\\nelse:\\n    print("奇数")', check:function(o){return o.indexOf("奇")!==-1;}},
  {desc:"计算存款利息：本金10000，年利率3.5%，存3年的本息合计（复利）", template:'# 复利计算\n', hint:'principal = 10000\\nrate = 0.035\\nyears = 3\\ntotal = principal * (1 + rate) ** years\\nprint(f"本息合计: {total:.2f}")', check:function(o){return o.indexOf("10")!==-1;}}
],
"2-2": [
  {desc:"创建名字变量，打印长度、大写、重复3次", template:'# 字符串操作\n', hint:'name = "python"\\nprint(len(name))\\nprint(name.upper())\\nprint(name * 3)', check:function(o){return o.trim().split("\\n").length>=3;}},
  {desc:"用 f-string 格式化输出：\"我叫XX，今年XX岁\"", template:'name = "小明"\\nage = 10\\n', hint:'name = "小明"\\nage = 10\\nprint(f"我叫{name}，今年{age}岁")', check:function(o){return o.indexOf("我叫")!==-1;}},
  {desc:"取字符串 \"Python\" 的第一个和最后一个字符", template:'s = "Python"\\n', hint:'s = "Python"\\nprint("第一个:", s[0])\\nprint("最后一个:", s[-1])', check:function(o){return o.indexOf("P")!==-1 && o.indexOf("n")!==-1;}},
  {desc:"将字符串 \"hello world\" 用 title() 转为标题格式", template:'s = "hello world"\\n', hint:'s = "hello world"\\nprint(s.title())', check:function(o){return o.indexOf("Hello World")!==-1;}},
  {desc:"用 replace() 将句子中的 \"坏\" 替换为 \"好\"", template:'s = "今天天气很坏"\\n', hint:'s = "今天天气很坏"\\nprint(s.replace("坏", "好"))', check:function(o){return o.indexOf("好")!==-1;}},
  {desc:"用 split() 将 \"苹果,香蕉,橘子\" 按逗号分割成列表并打印", template:'fruits = "苹果,香蕉,橘子"\\n', hint:'fruits = "苹果,香蕉,橘子"\\nresult = fruits.split(",")\\nprint(result)', check:function(o){return o.indexOf("苹果")!==-1;}},
  {desc:"检查字符串 \"Hello123\" 中是否包含数字（用 isdigit 或遍历）", template:'s = "Hello123"\\n', hint:'s = "Hello123"\\nhas_digit = False\\nfor c in s:\\n    if c.isdigit():\\n        has_digit = True\\nprint("包含数字:", has_digit)', check:function(o){return o.indexOf("True")!==-1;}},
  {desc:"用字符串切片取出 \"Programming\" 中的 \"gram\"", template:'s = "Programming"\\n', hint:'s = "Programming"\\nprint(s[3:7])', check:function(o){return o.indexOf("gram")!==-1;}},
  {desc:"统计字符串 \"banana\" 中字母 \"a\" 出现的次数", template:'s = "banana"\\n', hint:'s = "banana"\\nprint(s.count("a"))', check:function(o){return o.indexOf("3")!==-1;}},
  {desc:"用 join() 将列表 [\"I\",\"love\",\"Python\"] 用空格连接成一句话", template:'words = ["I", "love", "Python"]\\n', hint:'words = ["I", "love", "Python"]\\nprint(" ".join(words))', check:function(o){return o.indexOf("I love Python")!==-1;}}
],
  });
})();
