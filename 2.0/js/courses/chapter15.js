// 第十五章：错误调试与测试
const CHAPTER15 = {
  chapter: "第十五章：错误处理",
  icon: "🛡️",
  lessons: [
    {
      id: "15-1",
      title: "try/except - 捕获错误",
      xp: 25,
      code: 'try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("不能除以零！")\n\ntry:\n    num = int("abc")\nexcept ValueError as e:\n    print(f"转换失败: {e}")\nfinally:\n    print("无论如何都会执行")',
      steps: [
        {
          title: "错误不可怕！",
          content: `<p>程序出错很正常！<strong>try/except</strong> 就像安全网🥅，让程序不会因为错误而崩溃。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🛡️ 错误处理三件套</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">try</span><span class="ch1-vf-code">尝试执行可能出错的代码</span><span class="ch1-vf-desc">试一试</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">except</span><span class="ch1-vf-code">如果出错了，执行这里的代码</span><span class="ch1-vf-desc">接住错误</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">finally</span><span class="ch1-vf-code">无论出不出错都会执行</span><span class="ch1-vf-desc">善后工作</span></div>
  </div>
  <div class="theory-callout">💡 好的程序不是不出错，而是<strong>出错时能优雅地处理</strong>！</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,206,201,0.08));border:1px solid rgba(108,92,231,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(108,92,231,0.1);border-left:3px solid #6c5ce7;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
</style>`
        },
        {
          title: "常见错误类型",
          content: `<p>Python中有很多内置错误类型，每种表示不同的问题：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">⚠️ 常见错误速查</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">❌</span><span class="ch1-vf-code">ZeroDivisionError</span><span class="ch1-vf-desc">除以零</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">❌</span><span class="ch1-vf-code">ValueError</span><span class="ch1-vf-desc">值不对（如int("abc")）</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">❌</span><span class="ch1-vf-code">TypeError</span><span class="ch1-vf-desc">类型不对（如"1"+2）</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">❌</span><span class="ch1-vf-code">KeyError</span><span class="ch1-vf-desc">字典key不存在</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">❌</span><span class="ch1-vf-code">IndexError</span><span class="ch1-vf-desc">列表索引越界</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">❌</span><span class="ch1-vf-code">NameError</span><span class="ch1-vf-desc">变量未定义</span></div>
  </div>
</div>`,
          codeToLoad: '# 捕获不同类型的错误\ndef safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        print("错误：不能除以零！")\n        return None\n    except TypeError:\n        print("错误：请传入数字！")\n        return None\n\nprint(safe_divide(10, 3))\nprint(safe_divide(10, 0))\nprint(safe_divide("10", 3))'
        }
      ],
      challenge: {
        desc: "🎯 写一个safe_int()函数，安全地将字符串转为整数，出错时返回默认值0",
        hint: 'def safe_int(s, default=0):\n    try:\n        return int(s)\n    except (ValueError, TypeError):\n        return default\n\nprint(safe_int("123"))\nprint(safe_int("abc"))\nprint(safe_int(None, -1))',
        template: '# 安全转换函数\n',
        check: function(output) { return output.indexOf("123") !== -1 && output.indexOf("0") !== -1; }
      }
    },
    {
      id: "15-2",
      title: "raise - 主动抛出错误",
      xp: 20,
      code: 'def set_age(age):\n    if not isinstance(age, int):\n        raise TypeError("年龄必须是整数")\n    if age < 0 or age > 150:\n        raise ValueError(f"年龄{age}不合理")\n    print(f"年龄设为{age}岁")\n\nset_age(10)\ntry:\n    set_age(-5)\nexcept ValueError as e:\n    print(f"错误: {e}")',
      steps: [
        {
          title: "主动抛出异常",
          content: `<p>有时候我们需要<strong>主动制造错误</strong>来告诉调用者"你的参数不对"！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎯 raise 的用法</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">①</span><span class="ch1-vf-code">raise ValueError("错误信息")</span><span class="ch1-vf-desc">抛出指定类型的错误</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">②</span><span class="ch1-vf-code">raise TypeError("类型错误")</span><span class="ch1-vf-desc">参数类型不对时</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">③</span><span class="ch1-vf-code">自定义异常类</span><span class="ch1-vf-desc">class MyError(Exception): pass</span></div>
  </div>
  <div class="theory-callout">💡 raise让你的函数有<strong>清晰的输入验证</strong>，防止调用者传入不合法的数据！</div>
</div>`
        }
      ],
      challenge: {
        desc: "🎯 写一个验证密码的函数，密码少于6位时raise ValueError",
        hint: 'def check_password(pwd):\n    if len(pwd) < 6:\n        raise ValueError(f"密码太短！至少6位，当前{len(pwd)}位")\n    print("密码合格！")\n\ncheck_password("abc123")\ntry:\n    check_password("abc")\nexcept ValueError as e:\n    print(f"错误: {e}")',
        template: '# 密码验证\n',
        check: function(output) { return output.indexOf("合格") !== -1 || output.indexOf("错误") !== -1; }
      }
    },
    {
      id: "15-3",
      title: "调试技巧 - 找Bug",
      xp: 20,
      code: '# 方法1: print调试法\ndef calc(data):\n    print(f"[DEBUG] 输入: {data}")\n    result = sum(data) / len(data)\n    print(f"[DEBUG] 结果: {result}")\n    return result\n\ncalc([10, 20, 30])\n\n# 方法2: assert断言\ndef divide(a, b):\n    assert b != 0, "除数不能为0"\n    return a / b\n\nprint(divide(10, 2))',
      steps: [
        {
          title: "调试是程序员的必备技能",
          content: `<p>找Bug就像当侦探🕵️ — 需要耐心和技巧！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔍 调试工具箱</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">🖨️</span><span class="ch1-vf-code">print() 调试法</span><span class="ch1-vf-desc">最简单，在关键位置打印变量值</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">✅</span><span class="ch1-vf-code">assert 断言</span><span class="ch1-vf-desc">条件不满足时自动报错</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">📝</span><span class="ch1-vf-code">logging 日志</span><span class="ch1-vf-desc">比print更专业的记录方式</span></div>
  </div>
  <div class="theory-callout">💡 好习惯：<strong>写代码时就想可能出什么错</strong>，别等出了Bug再去想！</div>
</div>`
        }
      ],
      challenge: {
        desc: "🎯 写一个函数计算列表平均值，用assert确保列表不为空，用try/except处理非数字元素",
        hint: 'def average(lst):\n    assert len(lst) > 0, "列表不能为空"\n    total = 0\n    count = 0\n    for item in lst:\n        try:\n            total += float(item)\n            count += 1\n        except (ValueError, TypeError):\n            print(f"跳过非数字: {item}")\n    return total / count if count > 0 else 0\n\nprint(average([10, 20, "abc", 30]))',
        template: '# 调试练习\n',
        check: function(output) { return output.indexOf("20") !== -1 || output.indexOf("跳过") !== -1; }
      }
    }
  ]
};

registerChapter('python', CHAPTER15);
