// 自动拆分：按章节维护作业题库
(function() {
  'use strict';

  window.HOMEWORK_BANK = window.HOMEWORK_BANK || {};
  Object.assign(window.HOMEWORK_BANK, {
// ============ 第一章：初识Python ============
"1-1": [
  {desc:"用 print() 输出 Hello, World!", template:'# 输出Hello World\n', hint:'print("Hello, World!")', check:function(o){return o.indexOf("Hello")!==-1;}},
  {desc:"用 print() 分别输出你的名字、年龄、爱好（三行）", template:'# 三行输出\n', hint:'print("小明")\\nprint(10)\\nprint("编程")', check:function(o){return o.trim().split("\\n").length>=3;}},
  {desc:"用一个 print() 输出两个单词，中间用逗号分隔", template:'# 逗号分隔输出\n', hint:'print("Hello", "Python")', check:function(o){return o.indexOf("Hello")!==-1;}},
  {desc:"输出一首诗的前两句（每句一行）", template:'# 输出诗句\n', hint:'print("床前明月光")\\nprint("疑是地上霜")', check:function(o){return o.trim().split("\\n").length>=2;}},
  {desc:"用 print() 输出一个乘法算式和结果，如 3 * 7 = 21", template:'# 输出算式\n', hint:'print("3 * 7 =", 3*7)', check:function(o){return o.indexOf("21")!==-1;}},
  {desc:"打印一个由星号组成的正方形（3行3列）", template:'# 打印星号方阵\n', hint:'print("***")\\nprint("***")\\nprint("***")', check:function(o){return o.indexOf("***")!==-1;}},
  {desc:"输出你的自我介绍，至少包含4行信息", template:'# 自我介绍\n', hint:'print("姓名: 小明")\\nprint("年龄: 10")\\nprint("学校: XX小学")\\nprint("爱好: 编程")', check:function(o){return o.trim().split("\\n").length>=4;}},
  {desc:"用 print() 输出一个简单的加减乘除计算器结果", template:'# 计算器输出\n', hint:'print("10 + 5 =", 10+5)\\nprint("10 - 5 =", 10-5)\\nprint("10 * 5 =", 10*5)\\nprint("10 / 5 =", 10/5)', check:function(o){return o.indexOf("15")!==-1 && o.indexOf("50")!==-1;}},
  {desc:"输出一个三角形图案（用*号，第1行1个，第2行2个，第3行3个）", template:'# 三角形图案\n', hint:'print("*")\\nprint("**")\\nprint("***")', check:function(o){return o.indexOf("*")!==-1 && o.indexOf("***")!==-1;}},
  {desc:"输出一段对话（两人对话，至少4行，用引号标注说话者）", template:'# 对话输出\n', hint:'print("小明: 你好！")\\nprint("小红: 你好！在学Python吗？")\\nprint("小明: 是的！")\\nprint("小红: 加油！")', check:function(o){return o.trim().split("\\n").length>=4;}}
],
"1-2": [
  {desc:"创建三个变量分别存水果名、数量、单价，然后打印", template:'# 创建变量\n', hint:'fruit = "苹果"\\ncount = 3\\nprice = 5.5\\nprint(fruit, count, price)', check:function(o){return o.trim().split("\\n").length>=1;}},
  {desc:"创建变量 name 存你的名字，用 print() 打印 \"你好，\" + name", template:'# 拼接输出\n', hint:'name = "小明"\\nprint("你好，" + name)', check:function(o){return o.indexOf("你好")!==-1;}},
  {desc:"创建两个数字变量 a=15, b=4，打印它们的和、差、积、商", template:'a = 15\\nb = 4\\n', hint:'a = 15\\nb = 4\\nprint("和:", a+b)\\nprint("差:", a-b)\\nprint("积:", a*b)\\nprint("商:", a/b)', check:function(o){return o.indexOf("19")!==-1;}},
  {desc:"创建变量存储一个句子，打印句子的长度（用 len()）", template:'# 打印长度\n', hint:'s = "Hello Python"\\nprint(len(s))', check:function(o){return o.trim().length>0;}},
  {desc:"给变量 x 赋值 10，然后改为 20，分别打印修改前后的值", template:'# 变量可以变\n', hint:'x = 10\\nprint("修改前:", x)\\nx = 20\\nprint("修改后:", x)', check:function(o){return o.indexOf("10")!==-1 && o.indexOf("20")!==-1;}},
  {desc:"用有意义的变量名存储：身高(cm)、体重(kg)，打印出来", template:'# 有意义的变量名\n', hint:'height_cm = 150\\nweight_kg = 40\\nprint("身高:", height_cm, "cm")\\nprint("体重:", weight_kg, "kg")', check:function(o){return o.indexOf("cm")!==-1 || o.indexOf("kg")!==-1;}},
  {desc:"交换两个变量的值：a=1, b=2，交换后打印", template:'a = 1\\nb = 2\\n# 交换a和b\n', hint:'a = 1\\nb = 2\\na, b = b, a\\nprint("a =", a)\\nprint("b =", b)', check:function(o){return o.indexOf("a = 2")!==-1;}},
  {desc:"用变量计算长方形面积：长=8，宽=5", template:'# 计算面积\n', hint:'length = 8\\nwidth = 5\\narea = length * width\\nprint("面积:", area)', check:function(o){return o.indexOf("40")!==-1;}},
  {desc:"创建5个不同的变量（整数、小数、字符串各至少1个），全部打印", template:'# 5个变量\n', hint:'a = 42\\nb = 3.14\\nc = "Python"\\nd = True\\ne = 100\\nprint(a, b, c, d, e)', check:function(o){return o.trim().length>5;}},
  {desc:"用变量存储圆的半径 r=7，计算并打印周长（2*3.14*r）和面积（3.14*r*r）", template:'r = 7\\n# 计算周长和面积\n', hint:'r = 7\\nprint("周长:", 2*3.14*r)\\nprint("面积:", 3.14*r*r)', check:function(o){return o.indexOf("43")!==-1 && o.indexOf("153")!==-1;}}
],
"1-3": [
  {desc:"创建4个不同类型的变量，用 type() 打印每个类型", template:'# 检查类型\n', hint:'a = 42\\nb = 3.14\\nc = "hello"\\nd = True\\nprint(type(a))\\nprint(type(b))\\nprint(type(c))\\nprint(type(d))', check:function(o){return o.indexOf("class")!==-1;}},
  {desc:"将字符串 \"123\" 转为整数并加上 77，打印结果", template:'s = "123"\\n', hint:'s = "123"\\nresult = int(s) + 77\\nprint(result)', check:function(o){return o.indexOf("200")!==-1;}},
  {desc:"将整数 100 转为字符串，拼接 \"分\"，打印结果", template:'score = 100\\n', hint:'score = 100\\nprint(str(score) + "分")', check:function(o){return o.indexOf("100分")!==-1;}},
  {desc:"用 float() 将字符串 \"3.14\" 转为小数，乘以2后打印", template:'# 字符串转小数\n', hint:'s = "3.14"\\nprint(float(s) * 2)', check:function(o){return o.indexOf("6.28")!==-1;}},
  {desc:"打印 int(3.9) 的结果，观察小数转整数会发生什么", template:'# 小数转整数\n', hint:'print(int(3.9))\\nprint("小数部分被截断了！")', check:function(o){return o.indexOf("3")!==-1;}},
  {desc:"用 bool() 测试不同的值：0, 1, \"\", \"hello\"，打印结果", template:'# 布尔转换\n', hint:'print(bool(0))\\nprint(bool(1))\\nprint(bool(""))\\nprint(bool("hello"))', check:function(o){return o.indexOf("False")!==-1 && o.indexOf("True")!==-1;}},
  {desc:"输入年龄（用变量存储），判断类型后转为字符串拼接输出", template:'age = 10\\n', hint:'age = 10\\nprint("类型:", type(age))\\nprint("我今年" + str(age) + "岁")', check:function(o){return o.indexOf("岁")!==-1;}},
  {desc:"将两个字符串数字 \"25\" 和 \"30\" 转为整数后求和", template:'a = "25"\\nb = "30"\\n', hint:'a = "25"\\nb = "30"\\nprint(int(a) + int(b))', check:function(o){return o.indexOf("55")!==-1;}},
  {desc:"创建一个列表 [1, 2.5, \"hello\", True]，用 type() 打印每个元素的类型", template:'items = [1, 2.5, "hello", True]\\n', hint:'items = [1, 2.5, "hello", True]\\nfor item in items:\\n    print(item, "→", type(item))', check:function(o){return o.indexOf("int")!==-1 && o.indexOf("str")!==-1;}},
  {desc:"写一个程序：输入身高(cm)和体重(kg)，计算BMI（体重/身高米的平方）", template:'height = 170\\nweight = 65\\n', hint:'height = 170\\nweight = 65\\nbmi = weight / (height/100) ** 2\\nprint(f"BMI = {bmi:.1f}")', check:function(o){return o.indexOf("BMI")!==-1;}}
],
  });
})();
