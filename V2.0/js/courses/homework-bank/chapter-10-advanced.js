// 自动拆分：按章节维护作业题库
(function() {
  'use strict';

  window.HOMEWORK_BANK = window.HOMEWORK_BANK || {};
  Object.assign(window.HOMEWORK_BANK, {
// ============ 第十章：高级特性 ============
"10-1": [
  {desc:"用切片取列表前10个、后5个、奇数位、倒序", template:'L = list(range(1, 21))\n', hint:'L = list(range(1,21))\nprint(L[:10])\nprint(L[-5:])\nprint(L[::2])\nprint(L[::-1])', check:function(o){return o.indexOf("[1, 2, 3")!==-1 && o.indexOf("20")!==-1;}},
  {desc:"用切片取字符串\"Hello World\"的前5个字符", template:'s = "Hello World"\n', hint:'s = "Hello World"\nprint(s[:5])', check:function(o){return o.indexOf("Hello")!==-1;}},
  {desc:"用切片实现字符串反转", template:'s = "Python"\n', hint:'s = "Python"\nprint(s[::-1])', check:function(o){return o.indexOf("nohtyP")!==-1;}},
  {desc:"用切片取列表中每3个元素一个", template:'L = list(range(1, 31))\n', hint:'L = list(range(1,31))\nprint(L[::3])', check:function(o){return o.indexOf("1")!==-1;}},
  {desc:"用切片修改列表中间部分的值", template:'L = [0,0,0,0,0,0]\n', hint:'L = [0,0,0,0,0,0]\nL[2:4] = [8,9]\nprint(L)', check:function(o){return o.indexOf("8")!==-1;}},
  {desc:"用切片复制一个列表（浅拷贝）", template:'a = [1, 2, 3]\n', hint:'a = [1,2,3]\nb = a[:]\nb.append(4)\nprint("a:", a)\nprint("b:", b)', check:function(o){return o.indexOf("[1, 2, 3]")!==-1;}},
  {desc:"用切片删除列表中索引2到4的元素", template:'L = [10, 20, 30, 40, 50, 60]\n', hint:'L = [10,20,30,40,50,60]\ndel L[2:5]\nprint(L)', check:function(o){return o.indexOf("[10, 20, 60]")!==-1;}},
  {desc:"用切片交错合并两个列表", template:'a = [1, 3, 5]\nb = [2, 4, 6]\n', hint:'a = [1,3,5]\nb = [2,4,6]\nresult = [0]*6\nresult[::2] = a\nresult[1::2] = b\nprint(result)', check:function(o){return o.indexOf("[1, 2, 3, 4, 5, 6]")!==-1;}},
  {desc:"用切片判断列表是否是回文", template:'def is_palindrome(lst):\n    pass\n', hint:'def is_palindrome(lst):\n    return lst == lst[::-1]\nprint(is_palindrome([1,2,3,2,1]))\nprint(is_palindrome([1,2,3]))', check:function(o){return o.indexOf("True")!==-1 && o.indexOf("False")!==-1;}},
  {desc:"用切片实现列表左旋转k位", template:'def rotate(lst, k):\n    pass\n', hint:'def rotate(lst, k):\n    k = k % len(lst)\n    return lst[k:] + lst[:k]\nprint(rotate([1,2,3,4,5], 2))', check:function(o){return o.indexOf("[3, 4, 5, 1, 2]")!==-1;}}
],
"10-2": [
  {desc:"用enumerate遍历列表打印索引和值", template:'L = ["A", "B", "C", "D"]\n', hint:'L = ["A","B","C","D"]\nfor i, v in enumerate(L):\n    print(f"第{i+1}项: {v}")', check:function(o){return o.indexOf("第1")!==-1 && o.indexOf("D")!==-1;}},
  {desc:"用zip同时遍历两个列表", template:'names = ["小明","小红","小刚"]\nscores = [95, 88, 72]\n', hint:'names = ["小明","小红","小刚"]\nscores = [95,88,72]\nfor n, s in zip(names, scores):\n    print(f"{n}: {s}分")', check:function(o){return o.indexOf("分")!==-1;}},
  {desc:"遍历字典的键值对", template:'d = {"name":"小明","age":10,"hobby":"编程"}\n', hint:'d = {"name":"小明","age":10,"hobby":"编程"}\nfor k, v in d.items():\n    print(f"{k} = {v}")', check:function(o){return o.indexOf("小明")!==-1;}},
  {desc:"用enumerate找出列表中所有偶数的位置", template:'nums = [3, 8, 1, 6, 2, 9, 4]\n', hint:'nums = [3,8,1,6,2,9,4]\nfor i, n in enumerate(nums):\n    if n % 2 == 0:\n        print(f"索引{i}: {n}")', check:function(o){return o.indexOf("索引")!==-1;}},
  {desc:"用zip将两个列表组合成字典", template:'keys = ["a","b","c"]\nvalues = [1, 2, 3]\n', hint:'keys = ["a","b","c"]\nvalues = [1,2,3]\nd = dict(zip(keys, values))\nprint(d)', check:function(o){return o.indexOf("a")!==-1;}},
  {desc:"用reversed反向遍历列表", template:'L = [10, 20, 30, 40, 50]\n', hint:'L = [10,20,30,40,50]\nfor x in reversed(L):\n    print(x)', check:function(o){return o.indexOf("50")!==-1;}},
  {desc:"遍历嵌套列表（二维数组）", template:'matrix = [[1,2,3],[4,5,6],[7,8,9]]\n', hint:'matrix = [[1,2,3],[4,5,6],[7,8,9]]\nfor i, row in enumerate(matrix):\n    for j, val in enumerate(row):\n        print(f"[{i}][{j}]={val}", end=" ")\n    print()', check:function(o){return o.indexOf("[0][0]=1")!==-1;}},
  {desc:"用sorted和key参数按字符串长度排序", template:'words = ["python","go","javascript","c","rust"]\n', hint:'words = ["python","go","javascript","c","rust"]\nfor w in sorted(words, key=len):\n    print(f"{w} ({len(w)})")', check:function(o){return o.indexOf("c (1)")!==-1 || o.indexOf("c")!==-1;}},
  {desc:"用zip解包（转置矩阵）", template:'matrix = [[1,2,3],[4,5,6]]\n', hint:'matrix = [[1,2,3],[4,5,6]]\ntransposed = list(zip(*matrix))\nfor row in transposed:\n    print(row)', check:function(o){return o.indexOf("(1, 4)")!==-1;}},
  {desc:"综合：用enumerate+条件找出字符串中所有大写字母的位置", template:'s = "Hello World Python"\n', hint:'s = "Hello World Python"\nfor i, c in enumerate(s):\n    if c.isupper():\n        print(f"位置{i}: {c}")', check:function(o){return o.indexOf("H")!==-1 && o.indexOf("P")!==-1;}}
],
"10-3": [
  {desc:"用列表生成式生成1-30中能被3整除的数的平方", template:'# 列表生成式\n', hint:'result = [x**2 for x in range(1,31) if x%3==0]\nprint(result)', check:function(o){return o.indexOf("9")!==-1 && o.indexOf("900")!==-1;}},
  {desc:"用列表生成式将字符串列表转为大写", template:'words = ["hello", "world", "python"]\n', hint:'words = ["hello","world","python"]\nresult = [w.upper() for w in words]\nprint(result)', check:function(o){return o.indexOf("HELLO")!==-1;}},
  {desc:"用列表生成式过滤出偶数", template:'nums = list(range(1, 21))\n', hint:'nums = list(range(1,21))\nevens = [x for x in nums if x%2==0]\nprint(evens)', check:function(o){return o.indexOf("[2,")!==-1 || o.indexOf("2,")!==-1;}},
  {desc:"用列表生成式展平二维列表", template:'matrix = [[1,2,3],[4,5,6],[7,8,9]]\n', hint:'matrix = [[1,2,3],[4,5,6],[7,8,9]]\nflat = [x for row in matrix for x in row]\nprint(flat)', check:function(o){return o.indexOf("1")!==-1 && o.indexOf("9")!==-1;}},
  {desc:"用字典生成式创建平方数字典", template:'# 字典生成式\n', hint:'squares = {x: x**2 for x in range(1, 6)}\nprint(squares)', check:function(o){return o.indexOf("25")!==-1;}},
  {desc:"用列表生成式生成斐波那契（用循环辅助）", template:'# 斐波那契前10个\n', hint:'fib = [0, 1]\nfor _ in range(8):\n    fib.append(fib[-1]+fib[-2])\nprint(fib)', check:function(o){return o.indexOf("34")!==-1;}},
  {desc:"用列表生成式交换字典的键和值", template:'d = {"a":1, "b":2, "c":3}\n', hint:'d = {"a":1,"b":2,"c":3}\nswapped = {v:k for k,v in d.items()}\nprint(swapped)', check:function(o){return o.indexOf("1")!==-1;}},
  {desc:"用集合生成式去重", template:'nums = [1, 2, 2, 3, 3, 3, 4, 4, 5]\n', hint:'nums = [1,2,2,3,3,3,4,4,5]\nunique = {x for x in nums}\nprint(sorted(unique))', check:function(o){return o.indexOf("[1, 2, 3, 4, 5]")!==-1;}},
  {desc:"用列表生成式实现矩阵转置", template:'m = [[1,2,3],[4,5,6]]\n', hint:'m = [[1,2,3],[4,5,6]]\nt = [[m[j][i] for j in range(len(m))] for i in range(len(m[0]))]\nfor row in t:\n    print(row)', check:function(o){return o.indexOf("[1, 4]")!==-1;}},
  {desc:"用嵌套列表生成式生成乘法表", template:'# 乘法表生成\n', hint:'table = [[i*j for j in range(1,10)] for i in range(1,10)]\nfor row in table:\n    print(row)', check:function(o){return o.indexOf("81")!==-1;}}
],
"10-4": [
  {desc:"用yield写生成器产生前N个三角数", template:'# 三角数生成器\n', hint:'def triangles(n):\n    total = 0\n    for i in range(1, n+1):\n        total += i\n        yield total\nfor t in triangles(5):\n    print(t)', check:function(o){return o.indexOf("1")!==-1 && o.indexOf("15")!==-1;}},
  {desc:"写一个生成器产生无限的偶数序列（取前10个）", template:'# 偶数生成器\n', hint:'def evens():\n    n = 0\n    while True:\n        yield n\n        n += 2\ng = evens()\nfor _ in range(10):\n    print(next(g), end=" ")\nprint()', check:function(o){return o.indexOf("0")!==-1 && o.indexOf("18")!==-1;}},
  {desc:"用生成器表达式计算1到100的平方和", template:'# 生成器表达式\n', hint:'result = sum(x**2 for x in range(1, 101))\nprint(result)', check:function(o){return o.indexOf("338350")!==-1;}},
  {desc:"写一个斐波那契生成器", template:'# 斐波那契生成器\n', hint:'def fib():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a+b\ng = fib()\nfor _ in range(10):\n    print(next(g), end=" ")\nprint()', check:function(o){return o.indexOf("34")!==-1;}},
  {desc:"写一个生成器逐行读取文本", template:'# 逐行生成器\n', hint:'def read_lines(text):\n    for line in text.split("\\n"):\n        yield line.strip()\ntext = "Hello\\nWorld\\nPython"\nfor line in read_lines(text):\n    print(f"> {line}")', check:function(o){return o.indexOf("> Hello")!==-1;}},
  {desc:"用 yield from 组合多个生成器", template:'# yield from\n', hint:'def gen1():\n    yield 1\n    yield 2\ndef gen2():\n    yield 3\n    yield 4\ndef combined():\n    yield from gen1()\n    yield from gen2()\nprint(list(combined()))', check:function(o){return o.indexOf("[1, 2, 3, 4]")!==-1;}},
  {desc:"写一个生成器实现range的简易版", template:'# 简易range\n', hint:'def my_range(start, stop, step=1):\n    current = start\n    while current < stop:\n        yield current\n        current += step\nprint(list(my_range(0, 10, 2)))', check:function(o){return o.indexOf("[0, 2, 4, 6, 8]")!==-1;}},
  {desc:"用生成器实现素数筛（前20个素数）", template:'# 素数生成器\n', hint:'def primes():\n    n = 2\n    while True:\n        if all(n%i!=0 for i in range(2, int(n**0.5)+1)):\n            yield n\n        n += 1\ng = primes()\nresult = [next(g) for _ in range(20)]\nprint(result)', check:function(o){return o.indexOf("71")!==-1;}},
  {desc:"写一个生成器过滤掉None值", template:'# 过滤None\n', hint:'def filter_none(iterable):\n    for item in iterable:\n        if item is not None:\n            yield item\ndata = [1, None, 3, None, 5, None, 7]\nprint(list(filter_none(data)))', check:function(o){return o.indexOf("[1, 3, 5, 7]")!==-1;}},
  {desc:"用生成器实现滑动窗口", template:'# 滑动窗口\n', hint:'def sliding_window(lst, size):\n    for i in range(len(lst)-size+1):\n        yield lst[i:i+size]\ndata = [1,2,3,4,5,6]\nfor window in sliding_window(data, 3):\n    print(window)', check:function(o){return o.indexOf("[1, 2, 3]")!==-1;}}
],
"10-5": [
  {desc:"用iter()和next()手动遍历字符串", template:'# 手动迭代\n', hint:'it = iter("Python")\nfor _ in range(6):\n    print(next(it))', check:function(o){return o.indexOf("P")!==-1 && o.indexOf("n")!==-1;}},
  {desc:"用next()的默认值避免StopIteration", template:'# next默认值\n', hint:'it = iter([1, 2, 3])\nprint(next(it, "完"))\nprint(next(it, "完"))\nprint(next(it, "完"))\nprint(next(it, "完"))', check:function(o){return o.indexOf("完")!==-1;}},
  {desc:"检查一个对象是否可迭代", template:'# 检查可迭代\n', hint:'def is_iterable(obj):\n    try:\n        iter(obj)\n        return True\n    except TypeError:\n        return False\nprint(is_iterable([1,2,3]))\nprint(is_iterable("hello"))\nprint(is_iterable(42))', check:function(o){return o.indexOf("True")!==-1 && o.indexOf("False")!==-1;}},
  {desc:"实现一个自定义的倒计时迭代器", template:'# 倒计时迭代器\n', hint:'class Countdown:\n    def __init__(self, start):\n        self.current = start\n    def __iter__(self):\n        return self\n    def __next__(self):\n        if self.current <= 0:\n            raise StopIteration\n        val = self.current\n        self.current -= 1\n        return val\nfor n in Countdown(5):\n    print(n)', check:function(o){return o.indexOf("5")!==-1 && o.indexOf("1")!==-1;}},
  {desc:"用iter()将函数转为迭代器（哨兵值用法）", template:'import random\n', hint:'import random\nit = iter(lambda: random.randint(1, 6), 6)\nrolls = list(it)\nprint(f"投了{len(rolls)}次才出6: {rolls}")', check:function(o){return o.indexOf("投了")!==-1;}},
  {desc:"用itertools.chain连接多个可迭代对象", template:'# chain\n', hint:'def chain(*iterables):\n    for it in iterables:\n        for item in it:\n            yield item\nresult = list(chain([1,2], "ab", [3,4]))\nprint(result)', check:function(o){return o.indexOf("a")!==-1;}},
  {desc:"实现一个循环迭代器（重复遍历列表）", template:'# 循环迭代\n', hint:'class CycleIterator:\n    def __init__(self, lst):\n        self.lst = lst\n        self.idx = 0\n    def __iter__(self): return self\n    def __next__(self):\n        val = self.lst[self.idx % len(self.lst)]\n        self.idx += 1\n        return val\ncycle = CycleIterator(["A","B","C"])\nfor _ in range(7):\n    print(next(cycle), end=" ")\nprint()', check:function(o){return o.indexOf("A")!==-1;}},
  {desc:"实现一个range-like迭代器", template:'# Range迭代器\n', hint:'class MyRange:\n    def __init__(self, start, stop):\n        self.start = start\n        self.stop = stop\n    def __iter__(self):\n        current = self.start\n        while current < self.stop:\n            yield current\n            current += 1\nprint(list(MyRange(3, 8)))', check:function(o){return o.indexOf("[3, 4, 5, 6, 7]")!==-1;}},
  {desc:"实现enumerate的简易版", template:'# 自制enumerate\n', hint:'def my_enumerate(iterable, start=0):\n    n = start\n    for item in iterable:\n        yield n, item\n        n += 1\nfor i, v in my_enumerate(["a","b","c"]):\n    print(f"{i}: {v}")', check:function(o){return o.indexOf("0: a")!==-1;}},
  {desc:"实现zip的简易版", template:'# 自制zip\n', hint:'def my_zip(*iterables):\n    iters = [iter(it) for it in iterables]\n    while True:\n        try:\n            yield tuple(next(it) for it in iters)\n        except StopIteration:\n            return\nprint(list(my_zip([1,2,3], ["a","b","c"])))', check:function(o){return o.indexOf("(1,")!==-1 || o.indexOf("1, ")!==-1;}}
],
  });
})();
