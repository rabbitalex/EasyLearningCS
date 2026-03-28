// 自动拆分：按章节维护作业题库
(function() {
  'use strict';

  window.HOMEWORK_BANK = window.HOMEWORK_BANK || {};
  Object.assign(window.HOMEWORK_BANK, {
// ============ 第三章：条件判断 ============
"3-1": [
  {desc:"温度提示：>=35打印\"好热\"，>=25打印\"舒适\"，>=10打印\"有点冷\"，否则\"好冷\"。测试28度", template:'temperature = 28\\n', hint:'temperature = 28\\nif temperature >= 35:\\n    print("好热")\\nelif temperature >= 25:\\n    print("舒适")\\nelif temperature >= 10:\\n    print("有点冷")\\nelse:\\n    print("好冷")', check:function(o){return o.indexOf("舒适")!==-1;}},
  {desc:"判断一个数是正数、负数还是零", template:'num = -5\\n', hint:'num = -5\\nif num > 0:\\n    print("正数")\\nelif num < 0:\\n    print("负数")\\nelse:\\n    print("零")', check:function(o){return o.indexOf("负")!==-1;}},
  {desc:"判断年龄是否可以上网吧（>=18岁）", template:'age = 16\\n', hint:'age = 16\\nif age >= 18:\\n    print("可以进入")\\nelse:\\n    print("未成年，不可以进入")', check:function(o){return o.indexOf("不可以")!==-1;}},
  {desc:"判断一个年份是否是闰年（能被4整除但不能被100整除，或能被400整除）", template:'year = 2024\\n', hint:'year = 2024\\nif (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:\\n    print(f"{year}是闰年")\\nelse:\\n    print(f"{year}不是闰年")', check:function(o){return o.indexOf("闰年")!==-1;}},
  {desc:"根据分数打印等级：>=90优秀，>=80良好，>=60及格，<60不及格", template:'score = 85\\n', hint:'score = 85\\nif score >= 90:\\n    print("优秀")\\nelif score >= 80:\\n    print("良好")\\nelif score >= 60:\\n    print("及格")\\nelse:\\n    print("不及格")', check:function(o){return o.indexOf("良好")!==-1;}},
  {desc:"判断三个数中的最大值", template:'a, b, c = 15, 42, 28\\n', hint:'a, b, c = 15, 42, 28\\nif a >= b and a >= c:\\n    print("最大值:", a)\\nelif b >= c:\\n    print("最大值:", b)\\nelse:\\n    print("最大值:", c)', check:function(o){return o.indexOf("42")!==-1;}},
  {desc:"用 and/or 判断：一个数是否在10到20之间（包含两端）", template:'num = 15\\n', hint:'num = 15\\nif num >= 10 and num <= 20:\\n    print("在范围内")\\nelse:\\n    print("不在范围内")', check:function(o){return o.indexOf("在范围内")!==-1;}},
  {desc:"简单的登录验证：用户名是 admin 且密码是 123456 才能登录", template:'username = "admin"\\npassword = "123456"\\n', hint:'username = "admin"\\npassword = "123456"\\nif username == "admin" and password == "123456":\\n    print("登录成功！")\\nelse:\\n    print("用户名或密码错误")', check:function(o){return o.indexOf("登录成功")!==-1;}},
  {desc:"判断一个字符是大写、小写还是数字", template:'ch = "A"\\n', hint:'ch = "A"\\nif ch.isupper():\\n    print("大写字母")\\nelif ch.islower():\\n    print("小写字母")\\nelif ch.isdigit():\\n    print("数字")\\nelse:\\n    print("其他")', check:function(o){return o.indexOf("大写")!==-1;}},
  {desc:"模拟自动售货机：输入金额，>=5元可以买可乐，>=3元可以买水，否则余额不足", template:'money = 4\\n', hint:'money = 4\\nif money >= 5:\\n    print("购买可乐")\\nelif money >= 3:\\n    print("购买矿泉水")\\nelse:\\n    print("余额不足")', check:function(o){return o.indexOf("矿泉水")!==-1;}}
],
  });
})();
