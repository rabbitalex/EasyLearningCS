// 自动拆分：按章节维护作业题库
(function() {
  'use strict';

  window.HOMEWORK_BANK = window.HOMEWORK_BANK || {};
  Object.assign(window.HOMEWORK_BANK, {
// ============ 第六章：函数魔法 ============
"6-1": [
  {desc:"创建函数 calculate_circle_area(radius)，π取3.14，测试半径5", template:'# 圆面积函数\n', hint:'def calculate_circle_area(r):\\n    return 3.14 * r * r\\nprint(calculate_circle_area(5))', check:function(o){return o.indexOf("78.5")!==-1;}},
  {desc:"写一个函数 greet(name)，打印 \"你好，{name}！\"", template:'# 问候函数\n', hint:'def greet(name):\\n    print(f"你好，{name}！")\\ngreet("小明")', check:function(o){return o.indexOf("你好")!==-1;}},
  {desc:"写一个函数 max_of_three(a,b,c) 返回三个数中的最大值", template:'# 求最大值\n', hint:'def max_of_three(a, b, c):\\n    if a >= b and a >= c: return a\\n    elif b >= c: return b\\n    else: return c\\nprint(max_of_three(3, 7, 5))', check:function(o){return o.indexOf("7")!==-1;}},
  {desc:"写一个函数 is_even(n) 判断数字是否为偶数", template:'# 判断偶数\n', hint:'def is_even(n):\\n    return n % 2 == 0\\nprint(is_even(4))\\nprint(is_even(7))', check:function(o){return o.indexOf("True")!==-1 && o.indexOf("False")!==-1;}},
  {desc:"写一个函数 factorial(n) 计算n的阶乘", template:'# 阶乘函数\n', hint:'def factorial(n):\\n    result = 1\\n    for i in range(1, n+1):\\n        result *= i\\n    return result\\nprint(factorial(5))', check:function(o){return o.indexOf("120")!==-1;}},
  {desc:"写一个带默认参数的函数 power(base, exp=2)，计算幂", template:'# 幂函数\n', hint:'def power(base, exp=2):\\n    return base ** exp\\nprint(power(3))\\nprint(power(2, 10))', check:function(o){return o.indexOf("9")!==-1 && o.indexOf("1024")!==-1;}},
  {desc:"写一个函数接受任意个数字参数(*args)，返回总和", template:'# 可变参数求和\n', hint:'def sum_all(*args):\\n    return sum(args)\\nprint(sum_all(1, 2, 3))\\nprint(sum_all(10, 20, 30, 40))', check:function(o){return o.indexOf("6")!==-1 && o.indexOf("100")!==-1;}},
  {desc:"写一个函数 reverse_string(s) 反转字符串", template:'# 反转字符串\n', hint:'def reverse_string(s):\\n    return s[::-1]\\nprint(reverse_string("hello"))\\nprint(reverse_string("Python"))', check:function(o){return o.indexOf("olleh")!==-1;}},
  {desc:"写一个函数 count_words(sentence) 统计句子中的单词数", template:'# 统计单词数\n', hint:'def count_words(sentence):\\n    return len(sentence.split())\\nprint(count_words("I love Python programming"))', check:function(o){return o.indexOf("4")!==-1;}},
  {desc:"写一个函数 is_palindrome(s) 判断字符串是否是回文", template:'# 回文判断\n', hint:'def is_palindrome(s):\\n    return s == s[::-1]\\nprint(is_palindrome("abcba"))\\nprint(is_palindrome("hello"))', check:function(o){return o.indexOf("True")!==-1 && o.indexOf("False")!==-1;}}
],
  });
})();
