// 自动拆分：按章节维护作业题库
(function() {
  'use strict';

  window.HOMEWORK_BANK = window.HOMEWORK_BANK || {};
  Object.assign(window.HOMEWORK_BANK, {
// ============ 第五章：列表与字典 ============
"5-1": [
  {desc:"创建5个数字的列表，用循环找最大值", template:'nums = [34, 67, 12, 89, 45]\\n', hint:'nums = [34,67,12,89,45]\\nmax_val = nums[0]\\nfor n in nums:\\n    if n > max_val: max_val = n\\nprint("最大值:", max_val)', check:function(o){return o.indexOf("89")!==-1;}},
  {desc:"创建一个列表并用 append 添加3个元素", template:'fruits = ["苹果"]\\n', hint:'fruits = ["苹果"]\\nfruits.append("香蕉")\\nfruits.append("橘子")\\nfruits.append("葡萄")\\nprint(fruits)', check:function(o){return o.indexOf("葡萄")!==-1;}},
  {desc:"用 sort() 对列表 [5,2,8,1,9] 排序并打印", template:'nums = [5, 2, 8, 1, 9]\\n', hint:'nums = [5,2,8,1,9]\\nnums.sort()\\nprint(nums)', check:function(o){return o.indexOf("[1, 2, 5, 8, 9]")!==-1;}},
  {desc:"从列表 [10,20,30,40,50] 中取出前3个元素（切片）", template:'nums = [10, 20, 30, 40, 50]\\n', hint:'nums = [10,20,30,40,50]\\nprint(nums[:3])', check:function(o){return o.indexOf("30")!==-1;}},
  {desc:"用 remove() 从列表中删除指定元素", template:'colors = ["红", "绿", "蓝", "绿", "黄"]\\n', hint:'colors = ["红","绿","蓝","绿","黄"]\\ncolors.remove("绿")\\nprint(colors)', check:function(o){return o.trim().length>0;}},
  {desc:"用 in 检查元素是否在列表中", template:'fruits = ["苹果", "香蕉", "橘子"]\\n', hint:'fruits = ["苹果","香蕉","橘子"]\\nprint("香蕉" in fruits)\\nprint("西瓜" in fruits)', check:function(o){return o.indexOf("True")!==-1 && o.indexOf("False")!==-1;}},
  {desc:"将两个列表合并并去重", template:'a = [1, 2, 3, 4]\\nb = [3, 4, 5, 6]\\n', hint:'a = [1,2,3,4]\\nb = [3,4,5,6]\\nresult = list(set(a + b))\\nresult.sort()\\nprint(result)', check:function(o){return o.indexOf("6")!==-1;}},
  {desc:"反转列表 [1,2,3,4,5] 并打印", template:'nums = [1, 2, 3, 4, 5]\\n', hint:'nums = [1,2,3,4,5]\\nnums.reverse()\\nprint(nums)', check:function(o){return o.indexOf("[5, 4, 3, 2, 1]")!==-1;}},
  {desc:"用循环计算列表中所有数字的平均值", template:'scores = [85, 92, 78, 95, 88]\\n', hint:'scores = [85,92,78,95,88]\\ntotal = 0\\nfor s in scores:\\n    total += s\\navg = total / len(scores)\\nprint(f"平均分: {avg}")', check:function(o){return o.indexOf("87")!==-1;}},
  {desc:"找出列表中所有大于平均值的数", template:'nums = [12, 45, 23, 67, 34, 89, 15]\\n', hint:'nums = [12,45,23,67,34,89,15]\\navg = sum(nums) / len(nums)\\nresult = []\\nfor n in nums:\\n    if n > avg:\\n        result.append(n)\\nprint(f"平均值: {avg:.1f}")\\nprint("大于平均:", result)', check:function(o){return o.indexOf("67")!==-1;}}
],
"5-2": [
  {desc:"创建一本书的字典（书名、作者、页数、价格），遍历打印", template:'# 书籍字典\n', hint:'book = {"title":"Python入门","author":"张三","pages":200,"price":39.9}\\nfor k in book:\\n    print(k, ":", book[k])', check:function(o){return o.trim().split("\\n").length>=3;}},
  {desc:"用 get() 安全地获取字典中可能不存在的键", template:'d = {"name": "小明", "age": 10}\\n', hint:'d = {"name":"小明","age":10}\\nprint(d.get("name"))\\nprint(d.get("school", "未知"))', check:function(o){return o.indexOf("小明")!==-1 && o.indexOf("未知")!==-1;}},
  {desc:"统计一段文字中每个字出现的次数", template:'text = "abracadabra"\\n', hint:'text = "abracadabra"\\ncounts = {}\\nfor c in text:\\n    counts[c] = counts.get(c, 0) + 1\\nprint(counts)', check:function(o){return o.indexOf("5")!==-1;}},
  {desc:"合并两个字典", template:'a = {"x": 1, "y": 2}\\nb = {"y": 3, "z": 4}\\n', hint:'a = {"x":1,"y":2}\\nb = {"y":3,"z":4}\\na.update(b)\\nprint(a)', check:function(o){return o.indexOf("z")!==-1;}},
  {desc:"从字典中删除一个键值对", template:'d = {"a":1, "b":2, "c":3}\\n', hint:'d = {"a":1,"b":2,"c":3}\\ndel d["b"]\\nprint(d)', check:function(o){return o.indexOf("b")!==-1===false || o.trim().length>0;}},
  {desc:"用字典存储3个学生的成绩，找出最高分", template:'# 学生成绩\n', hint:'scores = {"小明":85,"小红":92,"小刚":78}\\nbest = ""\\ntop = 0\\nfor name, score in scores.items():\\n    if score > top:\\n        top = score\\n        best = name\\nprint(f"最高分: {best} {top}分")', check:function(o){return o.indexOf("92")!==-1;}},
  {desc:"将两个列表组合成字典（keys和values）", template:'keys = ["name", "age", "city"]\\nvalues = ["小明", 10, "北京"]\\n', hint:'keys = ["name","age","city"]\\nvalues = ["小明",10,"北京"]\\nd = {}\\nfor i in range(len(keys)):\\n    d[keys[i]] = values[i]\\nprint(d)', check:function(o){return o.indexOf("北京")!==-1;}},
  {desc:"用字典实现一个简单的英汉词典查询", template:'# 英汉词典\n', hint:'dictionary = {"hello":"你好","world":"世界","python":"蟒蛇"}\\nword = "hello"\\nif word in dictionary:\\n    print(f"{word} → {dictionary[word]}")\\nelse:\\n    print("未找到")', check:function(o){return o.indexOf("你好")!==-1;}},
  {desc:"遍历字典并按值排序输出", template:'scores = {"小明":78, "小红":95, "小刚":82, "小李":90}\\n', hint:'scores = {"小明":78,"小红":95,"小刚":82,"小李":90}\\nsorted_items = sorted(scores.items(), key=lambda x: x[1], reverse=True)\\nfor name, score in sorted_items:\\n    print(f"{name}: {score}分")', check:function(o){return o.indexOf("95")!==-1;}},
  {desc:"用嵌套字典存储班级信息（班级名、老师、学生列表）", template:'# 嵌套字典\n', hint:'classroom = {\\n    "class": "三年级一班",\\n    "teacher": "王老师",\\n    "students": ["小明","小红","小刚"]\\n}\\nprint(f"班级: {classroom[\\"class\\"]}")\\nprint(f"老师: {classroom[\\"teacher\\"]}")\\nfor s in classroom["students"]:\\n    print(f"  学生: {s}")', check:function(o){return o.indexOf("班级")!==-1;}}
],
  });
})();
