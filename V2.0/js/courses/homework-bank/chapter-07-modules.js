// 自动拆分：按章节维护作业题库
(function() {
  'use strict';

  window.HOMEWORK_BANK = window.HOMEWORK_BANK || {};
  Object.assign(window.HOMEWORK_BANK, {
// ============ 第七章：模块与库 ============
"7-1": [
  {desc:"用 math 模块计算π的平方根和2的10次方", template:'import math\n', hint:'import math\nprint(math.sqrt(math.pi))\nprint(math.pow(2, 10))', check:function(o){return o.indexOf("1024")!==-1;}},
  {desc:"用 random.randint 生成一个1-100的随机数", template:'import random\n', hint:'import random\nprint(random.randint(1, 100))', check:function(o){return o.trim().length>0;}},
  {desc:"用 math.ceil 和 math.floor 分别对3.7向上和向下取整", template:'import math\n', hint:'import math\nprint(math.ceil(3.7))\nprint(math.floor(3.7))', check:function(o){return o.indexOf("4")!==-1 && o.indexOf("3")!==-1;}},
  {desc:"用 math.gcd 计算24和36的最大公约数", template:'import math\n', hint:'import math\nprint(math.gcd(24, 36))', check:function(o){return o.indexOf("12")!==-1;}},
  {desc:"用 random.choice 从列表中随机选一个水果", template:'import random\nfruits = ["苹果","香蕉","橘子","葡萄","西瓜"]\n', hint:'import random\nfruits = ["苹果","香蕉","橘子","葡萄","西瓜"]\nprint(random.choice(fruits))', check:function(o){return o.trim().length>0;}},
  {desc:"用 random.shuffle 打乱一个数字列表并打印", template:'import random\nnums = [1,2,3,4,5]\n', hint:'import random\nnums = [1,2,3,4,5]\nrandom.shuffle(nums)\nprint(nums)', check:function(o){return o.indexOf("[")!==-1;}},
  {desc:"用 math 模块计算直角三角形斜边长（两直角边为3和4）", template:'import math\n', hint:'import math\nc = math.sqrt(3**2 + 4**2)\nprint(f"斜边长: {c}")', check:function(o){return o.indexOf("5")!==-1;}},
  {desc:"生成5个不重复的1-20之间的随机数", template:'import random\n', hint:'import random\nnums = random.sample(range(1, 21), 5)\nprint(sorted(nums))', check:function(o){return o.indexOf("[")!==-1;}},
  {desc:"用 random 模拟掷两个骰子100次，统计总点数为7的次数", template:'import random\n', hint:'import random\ncount = 0\nfor _ in range(100):\n    d1 = random.randint(1,6)\n    d2 = random.randint(1,6)\n    if d1+d2 == 7: count += 1\nprint(f"100次中点数为7的次数: {count}")', check:function(o){return o.indexOf("次")!==-1;}},
  {desc:"用 math.factorial 计算10!并验证结果是3628800", template:'import math\n', hint:'import math\nresult = math.factorial(10)\nprint(result)\nprint("验证:", result == 3628800)', check:function(o){return o.indexOf("3628800")!==-1;}}
],
"7-2": [
  {desc:"制作简易抽奖：5人中随机抽1个一等奖和2个二等奖", template:'import random\nplayers = ["小明","小红","小刚","小李","小王"]\n', hint:'import random\nplayers = ["小明","小红","小刚","小李","小王"]\nrandom.shuffle(players)\nprint("一等奖:", players[0])\nprint("二等奖:", players[1], "和", players[2])', check:function(o){return o.indexOf("奖")!==-1;}},
  {desc:"模拟抛硬币100次，统计正面和反面的次数", template:'import random\n', hint:'import random\nheads = sum(1 for _ in range(100) if random.choice(["正","反"])=="正")\nprint(f"正面: {heads}, 反面: {100-heads}")', check:function(o){return o.indexOf("正面")!==-1;}},
  {desc:"用random生成一个4位数字验证码", template:'import random\n', hint:'import random\ncode = "".join([str(random.randint(0,9)) for _ in range(4)])\nprint(f"验证码: {code}")', check:function(o){return o.indexOf("验证码")!==-1;}},
  {desc:"random.uniform 生成3个1.0到10.0之间的随机小数", template:'import random\n', hint:'import random\nfor i in range(3):\n    print(f"{random.uniform(1.0, 10.0):.2f}")', check:function(o){return o.trim().split("\n").length>=3;}},
  {desc:"用random模拟摇号：从1-1000中随机抽取5个号码", template:'import random\n', hint:'import random\nnums = random.sample(range(1, 1001), 5)\nprint("中签号码:", sorted(nums))', check:function(o){return o.indexOf("中签")!==-1;}},
  {desc:"模拟随机发红包：将100元随机分给5个人", template:'import random\n', hint:'import random\namounts = []\nremain = 100.0\nfor i in range(4):\n    a = round(random.uniform(1, remain-(5-i)), 2)\n    amounts.append(a)\n    remain -= a\namounts.append(round(remain, 2))\nfor i, a in enumerate(amounts):\n    print(f"第{i+1}人: {a}元")', check:function(o){return o.indexOf("元")!==-1;}},
  {desc:"用random.choices（带权重）模拟天气预报：晴天60%、阴天25%、雨天15%", template:'import random\n', hint:'import random\nweather = random.choices(["晴天","阴天","雨天"], weights=[60,25,15], k=7)\nfor i, w in enumerate(weather):\n    print(f"第{i+1}天: {w}")', check:function(o){return o.indexOf("天")!==-1;}},
  {desc:"用random打乱一副扑克牌（简化版：1-13的4种花色）", template:'import random\n', hint:'import random\nsuits = ["♠","♥","♦","♣"]\ncards = [f"{s}{n}" for s in suits for n in range(1,14)]\nrandom.shuffle(cards)\nprint("前5张:", cards[:5])', check:function(o){return o.indexOf("前5张")!==-1;}},
  {desc:"用random生成一个8位随机密码（包含字母和数字）", template:'import random\n', hint:'import random\nchars = "abcdefghijklmnopqrstuvwxyz0123456789"\npwd = "".join(random.choice(chars) for _ in range(8))\nprint(f"密码: {pwd}")', check:function(o){return o.indexOf("密码")!==-1;}},
  {desc:"模拟考试座位随机安排：将10个学生随机分配到座位1-10", template:'import random\n', hint:'import random\nstudents = [f"学生{i}" for i in range(1,11)]\nrandom.shuffle(students)\nfor seat, name in enumerate(students, 1):\n    print(f"座位{seat}: {name}")', check:function(o){return o.indexOf("座位")!==-1;}}
],
"7-3": [
  {desc:"创建工具函数 is_palindrome 和 count_vowels 并测试", template:'# 工具函数\n', hint:'def is_palindrome(s):\n    return s == s[::-1]\ndef count_vowels(s):\n    return sum(1 for c in s.lower() if c in "aeiou")\nprint(is_palindrome("abcba"))\nprint(count_vowels("Hello World"))', check:function(o){return o.indexOf("True")!==-1;}},
  {desc:"写一个函数 celsius_to_fahrenheit(c) 摄氏转华氏", template:'# 温度转换\n', hint:'def celsius_to_fahrenheit(c):\n    return c * 9/5 + 32\nprint(celsius_to_fahrenheit(0))\nprint(celsius_to_fahrenheit(100))', check:function(o){return o.indexOf("32")!==-1 && o.indexOf("212")!==-1;}},
  {desc:"写一个函数 flatten(lst) 将嵌套列表展平", template:'# 展平列表\n', hint:'def flatten(lst):\n    result = []\n    for item in lst:\n        if type(item) == list:\n            result.extend(flatten(item))\n        else:\n            result.append(item)\n    return result\nprint(flatten([1,[2,3],[4,[5,6]]]))', check:function(o){return o.indexOf("1")!==-1 && o.indexOf("6")!==-1;}},
  {desc:"写一个函数 unique(lst) 去除列表中的重复元素并保持顺序", template:'# 去重\n', hint:'def unique(lst):\n    seen = []\n    for item in lst:\n        if item not in seen:\n            seen.append(item)\n    return seen\nprint(unique([1,3,2,3,1,4,2]))', check:function(o){return o.indexOf("[1, 3, 2, 4]")!==-1;}},
  {desc:"写一个函数 chunk(lst, n) 将列表分成每n个一组", template:'# 分组\n', hint:'def chunk(lst, n):\n    return [lst[i:i+n] for i in range(0, len(lst), n)]\nprint(chunk([1,2,3,4,5,6,7], 3))', check:function(o){return o.indexOf("[1, 2, 3]")!==-1;}},
  {desc:"写一个函数 most_common(lst) 找出列表中出现最多的元素", template:'# 最常见元素\n', hint:'def most_common(lst):\n    counts = {}\n    for x in lst:\n        counts[x] = counts.get(x, 0) + 1\n    return max(counts, key=counts.get)\nprint(most_common([1,2,3,2,2,1,3,2]))', check:function(o){return o.indexOf("2")!==-1;}},
  {desc:"写一个函数 matrix_add(a, b) 实现两个2x2矩阵相加", template:'# 矩阵加法\n', hint:'def matrix_add(a, b):\n    result = []\n    for i in range(len(a)):\n        row = []\n        for j in range(len(a[0])):\n            row.append(a[i][j] + b[i][j])\n        result.append(row)\n    return result\nprint(matrix_add([[1,2],[3,4]], [[5,6],[7,8]]))', check:function(o){return o.indexOf("6")!==-1 && o.indexOf("12")!==-1;}},
  {desc:"写一个函数 pig_latin(word) 将单词转为Pig Latin（首字母移到末尾加ay）", template:'# Pig Latin\n', hint:'def pig_latin(word):\n    return word[1:] + word[0] + "ay"\nprint(pig_latin("hello"))\nprint(pig_latin("python"))', check:function(o){return o.indexOf("ellohay")!==-1;}},
  {desc:"写一个函数 encode(text, shift) 实现凯撒密码加密", template:'# 凯撒密码\n', hint:'def encode(text, shift):\n    result = ""\n    for c in text:\n        if c.isalpha():\n            base = ord("a") if c.islower() else ord("A")\n            result += chr((ord(c) - base + shift) % 26 + base)\n        else:\n            result += c\n    return result\nprint(encode("Hello", 3))', check:function(o){return o.indexOf("Khoor")!==-1;}},
  {desc:"写一个函数 merge_sorted(a, b) 合并两个有序列表为一个有序列表", template:'# 合并有序列表\n', hint:'def merge_sorted(a, b):\n    result = []\n    i = j = 0\n    while i < len(a) and j < len(b):\n        if a[i] <= b[j]:\n            result.append(a[i]); i += 1\n        else:\n            result.append(b[j]); j += 1\n    result.extend(a[i:])\n    result.extend(b[j:])\n    return result\nprint(merge_sorted([1,3,5,7], [2,4,6,8]))', check:function(o){return o.indexOf("[1, 2, 3, 4, 5, 6, 7, 8]")!==-1;}}
],
  });
})();
