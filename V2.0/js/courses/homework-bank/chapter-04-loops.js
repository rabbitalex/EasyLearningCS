// 自动拆分：按章节维护作业题库
(function() {
  'use strict';

  window.HOMEWORK_BANK = window.HOMEWORK_BANK || {};
  Object.assign(window.HOMEWORK_BANK, {
// ============ 第四章：循环魔法 ============
"4-1": [
  {desc:"用for循环计算10的阶乘", template:'result = 1\\n', hint:'result = 1\\nfor i in range(1, 11):\\n    result *= i\\nprint(result)', check:function(o){return o.indexOf("3628800")!==-1;}},
  {desc:"打印1到10的所有偶数", template:'# 打印偶数\n', hint:'for i in range(2, 11, 2):\\n    print(i)', check:function(o){return o.indexOf("2")!==-1 && o.indexOf("10")!==-1;}},
  {desc:"用for循环打印九九乘法表的第5行", template:'# 第5行乘法\n', hint:'for i in range(1, 6):\\n    print(f"{i}x5={i*5}", end="  ")\\nprint()', check:function(o){return o.indexOf("5x5=25")!==-1 || o.indexOf("25")!==-1;}},
  {desc:"用 range() 打印从 10 到 1 的倒序数字", template:'# 倒序\n', hint:'for i in range(10, 0, -1):\\n    print(i)', check:function(o){return o.indexOf("10")!==-1 && o.indexOf("1")!==-1;}},
  {desc:"遍历字符串 \"Python\" 打印每个字符及其索引", template:'s = "Python"\\n', hint:'s = "Python"\\nfor i in range(len(s)):\\n    print(f"索引{i}: {s[i]}")', check:function(o){return o.indexOf("P")!==-1 && o.indexOf("n")!==-1;}},
  {desc:"用循环计算列表 [3,7,2,9,4] 的总和", template:'nums = [3, 7, 2, 9, 4]\\n', hint:'nums = [3, 7, 2, 9, 4]\\ntotal = 0\\nfor n in nums:\\n    total += n\\nprint("总和:", total)', check:function(o){return o.indexOf("25")!==-1;}},
  {desc:"用for循环找出100以内所有能被7整除的数", template:'# 100以内被7整除的数\n', hint:'for i in range(7, 100, 7):\\n    print(i, end=" ")\\nprint()', check:function(o){return o.indexOf("7")!==-1 && o.indexOf("49")!==-1;}},
  {desc:"打印一个5行的右对齐三角形（每行星号递增）", template:'# 右对齐三角形\n', hint:'for i in range(1, 6):\\n    print(" " * (5-i) + "*" * i)', check:function(o){return o.indexOf("*")!==-1;}},
  {desc:"用嵌套循环打印完整的九九乘法表", template:'# 九九乘法表\n', hint:'for i in range(1, 10):\\n    for j in range(1, i+1):\\n        print(f"{j}x{i}={i*j}", end="\\t")\\n    print()', check:function(o){return o.indexOf("9x9=81")!==-1 || o.indexOf("81")!==-1;}},
  {desc:"统计字符串 \"hello world\" 中每个字符出现的次数", template:'s = "hello world"\\n', hint:'s = "hello world"\\ncounts = {}\\nfor c in s:\\n    if c != " ":\\n        counts[c] = counts.get(c, 0) + 1\\nfor ch, cnt in counts.items():\\n    print(f"{ch}: {cnt}")', check:function(o){return o.indexOf("l: 3")!==-1 || o.indexOf("l:")!==-1;}}
],
"4-2": [
  {desc:"用while循环倒计时：从10到1，最后打印\"发射！\"", template:'# 倒计时\n', hint:'n = 10\\nwhile n >= 1:\\n    print(n)\\n    n -= 1\\nprint("发射！")', check:function(o){return o.indexOf("1")!==-1 && o.indexOf("发射")!==-1;}},
  {desc:"用while循环计算1+2+3+...直到总和超过100", template:'# 累加到超过100\n', hint:'total = 0\\nn = 0\\nwhile total <= 100:\\n    n += 1\\n    total += n\\nprint(f"加到{n}时总和为{total}")', check:function(o){return o.indexOf("14")!==-1;}},
  {desc:"猜数字：用while模拟从1猜到正确答案42", template:'secret = 42\\n', hint:'secret = 42\\nguess = 1\\nwhile guess != secret:\\n    guess += 1\\nprint(f"猜了{guess}次")', check:function(o){return o.indexOf("42")!==-1;}},
  {desc:"用while循环将一个数反复除以2直到小于1", template:'n = 1024\\n', hint:'n = 1024\\nwhile n >= 1:\\n    print(n)\\n    n = n / 2', check:function(o){return o.indexOf("1024")!==-1;}},
  {desc:"用 break 在循环中找到第一个能被13整除的数(从50开始)", template:'# 用break找数\n', hint:'n = 50\\nwhile True:\\n    if n % 13 == 0:\\n        print(f"找到了: {n}")\\n        break\\n    n += 1', check:function(o){return o.indexOf("52")!==-1;}},
  {desc:"用 continue 跳过所有3的倍数，打印1-20中剩下的数", template:'# 用continue跳过\n', hint:'for i in range(1, 21):\\n    if i % 3 == 0:\\n        continue\\n    print(i, end=" ")\\nprint()', check:function(o){return o.indexOf("1")!==-1 && o.indexOf("20")!==-1;}},
  {desc:"模拟ATM取款：初始余额1000，每次取200，余额不足时停止", template:'balance = 1000\\n', hint:'balance = 1000\\ncount = 0\\nwhile balance >= 200:\\n    balance -= 200\\n    count += 1\\n    print(f"第{count}次取款，余额: {balance}")\\nprint(f"共取款{count}次")', check:function(o){return o.indexOf("余额")!==-1;}},
  {desc:"用while实现斐波那契数列前10个数", template:'# 斐波那契\n', hint:'a, b = 0, 1\\ncount = 0\\nwhile count < 10:\\n    print(a, end=" ")\\n    a, b = b, a + b\\n    count += 1\\nprint()', check:function(o){return o.indexOf("0")!==-1 && o.indexOf("34")!==-1;}},
  {desc:"写一个数字猜大小的循环：随机数和猜测，直到猜对", template:'import random\\nsecret = random.randint(1, 10)\\n', hint:'import random\\nsecret = random.randint(1, 10)\\nfor guess in range(1, 11):\\n    if guess == secret:\\n        print(f"猜对了！答案是{secret}")\\n        break', check:function(o){return o.indexOf("猜对")!==-1;}},
  {desc:"用while循环计算一个整数各位数字之和（如 12345→15）", template:'num = 12345\\n', hint:'num = 12345\\ntotal = 0\\nwhile num > 0:\\n    total += num % 10\\n    num = num // 10\\nprint("各位数字之和:", total)', check:function(o){return o.indexOf("15")!==-1;}}
],
  });
})();
