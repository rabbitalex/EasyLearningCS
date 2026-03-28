// 第十六章：正则表达式
const CHAPTER17 = {
  chapter: "第十六章：正则表达式",
  icon: "🔍",
  lessons: [
    {
      id: "16-1",
      title: "正则入门 - 模式匹配",
      xp: 25,
      code: '# 用纯Python模拟正则匹配原理\n\ndef find_digits(text):\n    """找出字符串中所有连续数字"""\n    results = []\n    current = ""\n    for ch in text:\n        if ch >= "0" and ch <= "9":\n            current = current + ch\n        else:\n            if current:\n                results.append(current)\n                current = ""\n    if current:\n        results.append(current)\n    return results\n\ndef match_phone(text):\n    """匹配电话号码格式: xxx-xxxx-xxxx"""\n    digits = find_digits(text)\n    for i in range(len(text) - 12):\n        part = text[i:i+13]\n        segs = part.split("-")\n        if len(segs) == 3:\n            if len(segs[0]) == 3 and len(segs[1]) == 4 and len(segs[2]) == 4:\n                all_digit = True\n                for s in segs:\n                    for c in s:\n                        if c < "0" or c > "9":\n                            all_digit = False\n                if all_digit:\n                    return part\n    return None\n\ntext = "我的电话是138-0000-1234，请联系我"\nphone = match_phone(text)\nprint("找到电话:", phone)\n\nnums = find_digits("我有3只猫和5只狗，共计18只宠物")\nprint("找到数字:", nums)',
      steps: [
        {
          title: "正则表达式是什么？",
          content: `<p>正则表达式是一种<strong>文本搜索模式</strong>🔍，用特殊符号描述你要找的文本格式！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔤 基础匹配符号</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">\\d</span><span class="ch1-vf-code">匹配一个数字</span><span class="ch1-vf-desc">0-9</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">\\w</span><span class="ch1-vf-code">匹配字母/数字/下划线</span><span class="ch1-vf-desc">a-z A-Z 0-9 _</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">\\s</span><span class="ch1-vf-code">匹配空白字符</span><span class="ch1-vf-desc">空格、Tab等</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">.</span><span class="ch1-vf-code">匹配任意字符</span><span class="ch1-vf-desc">除了换行</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">{n}</span><span class="ch1-vf-code">重复n次</span><span class="ch1-vf-desc">\\d{3} = 三个数字</span></div>
  </div>
  <div class="theory-callout">💡 在标准Python中使用 <code>import re</code> 来使用正则表达式。这里我们用纯代码理解其原理！</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,206,201,0.08));border:1px solid rgba(108,92,231,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(108,92,231,0.1);border-left:3px solid #6c5ce7;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
</style>`
        },
        {
          title: "量词和分组",
          content: `<p>量词控制匹配次数，分组用括号提取内容：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📏 量词速查</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">*</span><span class="ch1-vf-code">0次或多次</span><span class="ch1-vf-desc">ab* → a, ab, abb...</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">+</span><span class="ch1-vf-code">1次或多次</span><span class="ch1-vf-desc">ab+ → ab, abb...</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">?</span><span class="ch1-vf-code">0次或1次</span><span class="ch1-vf-desc">ab? → a, ab</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">{m,n}</span><span class="ch1-vf-code">m到n次</span><span class="ch1-vf-desc">\\d{2,4} → 2到4个数字</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">()</span><span class="ch1-vf-code">分组提取</span><span class="ch1-vf-desc">(\\d+)-(\\d+)</span></div>
  </div>
</div>`,
          codeToLoad: '# 模拟正则的 findall 和 sub 功能\n\ndef find_all_digits(text):\n    """模拟 re.findall(r"\\\\d+", text)"""\n    results = []\n    current = ""\n    for ch in text:\n        if ch >= "0" and ch <= "9":\n            current = current + ch\n        else:\n            if current:\n                results.append(current)\n                current = ""\n    if current:\n        results.append(current)\n    return results\n\ndef find_all_words(text):\n    """模拟 re.findall(r"[a-zA-Z]+", text)"""\n    results = []\n    current = ""\n    for ch in text:\n        if ("a" <= ch <= "z") or ("A" <= ch <= "Z"):\n            current = current + ch\n        else:\n            if current:\n                results.append(current)\n                current = ""\n    if current:\n        results.append(current)\n    return results\n\nprint("数字:", find_all_digits("我有3只猫和5只狗"))\nprint("单词:", find_all_words("Hello World 123"))\n\n# 模拟日期解析\ndate_str = "2024-03-15"\nparts = date_str.split("-")\nprint(f"年:{parts[0]} 月:{parts[1]} 日:{parts[2]}")\n\n# 模拟替换数字\ndef replace_digits(text, repl):\n    result = ""\n    for ch in text:\n        if ch >= "0" and ch <= "9":\n            result = result + repl\n        else:\n            result = result + ch\n    return result\n\nprint("替换:", replace_digits("电话010-1234", "X"))'
        }
      ],
      challenge: {
        desc: "🎯 编写函数从文本中提取所有邮箱地址（简化版：找出包含@的连续非空字符）",
        hint: 'def find_emails(text):\n    """从文本中提取邮箱"""\n    words = text.split()\n    emails = []\n    for w in words:\n        if "@" in w and "." in w:\n            clean = w.strip(",;:!?")\n            emails.append(clean)\n    return emails\n\ntext = "联系我: alice@example.com 或 bob@test.org 谢谢"\nemails = find_emails(text)\nfor e in emails:\n    print(e)',
        template: '# 提取邮箱\ndef find_emails(text):\n    pass\n\ntext = "联系我: alice@example.com 或 bob@test.org"\n',
        check: function(output) { return output.indexOf("@") !== -1; }
      }
    },
    {
      id: "16-2",
      title: "文本处理实战",
      xp: 25,
      code: '# 模拟 re.split: 用多种分隔符分割\ndef smart_split(text, separators):\n    """用多个分隔符分割字符串"""\n    result = [text]\n    for sep in separators:\n        new_result = []\n        for item in result:\n            new_result = new_result + item.split(sep)\n        result = new_result\n    return [x for x in result if x]\n\nresult = smart_split("hello world,foo;bar  baz", [" ", ",", ";"])\nprint("分割:", result)\n\n# 模拟 re.findall: 提取价格\ndef find_prices(text):\n    """提取文本中的数字(含小数)"""\n    results = []\n    current = ""\n    for ch in text:\n        if ch >= "0" and ch <= "9" or ch == ".":\n            current = current + ch\n        else:\n            if current and current != ".":\n                results.append(current)\n                current = ""\n    if current and current != ".":\n        results.append(current)\n    return results\n\nprices = find_prices("价格: 9.9元, 19.99元, 100元")\nprint("价格:", prices)\n\n# 模拟 re.sub: 去除HTML标签\ndef strip_tags(html):\n    """去除HTML标签"""\n    result = ""\n    inside_tag = False\n    for ch in html:\n        if ch == "<":\n            inside_tag = True\n        elif ch == ">":\n            inside_tag = False\n        elif not inside_tag:\n            result = result + ch\n    return result\n\nclean = strip_tags("<b>粗体</b>和<i>斜体</i>")\nprint("去标签:", clean)',
      steps: [
        {
          title: "文本处理常用方法",
          content: `<p>在标准Python中，<code>re</code>模块提供了丰富的正则操作方法。这里我们用纯代码理解其原理：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🛠️ re模块方法 vs 纯Python模拟</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">match</span><span class="ch1-vf-code">re.match(pattern, str)</span><span class="ch1-vf-desc">从头匹配</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">search</span><span class="ch1-vf-code">re.search(pattern, str)</span><span class="ch1-vf-desc">搜索第一个</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">findall</span><span class="ch1-vf-code">re.findall(pattern, str)</span><span class="ch1-vf-desc">找出所有</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">sub</span><span class="ch1-vf-code">re.sub(pattern, repl, str)</span><span class="ch1-vf-desc">替换</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">split</span><span class="ch1-vf-code">re.split(pattern, str)</span><span class="ch1-vf-desc">分割</span></div>
  </div>
  <div class="theory-callout">💡 理解底层原理后，使用 <code>import re</code> 就更得心应手了！</div>
</div>`
        }
      ],
      challenge: {
        desc: "🎯 编写函数将字符串中所有连续空格替换为单个空格",
        hint: 'def collapse_spaces(text):\n    """将连续空格合并为一个"""\n    result = ""\n    prev_space = False\n    for ch in text:\n        if ch == " ":\n            if not prev_space:\n                result = result + ch\n            prev_space = True\n        else:\n            result = result + ch\n            prev_space = False\n    return result\n\ntext = "Hello    World     Python"\nresult = collapse_spaces(text)\nprint(result)',
        template: '# 合并空格\ndef collapse_spaces(text):\n    pass\n\ntext = "Hello    World     Python"\n',
        check: function(output) { return output.indexOf("Hello World Python") !== -1; }
      }
    }
  ]
};

registerChapter('python', CHAPTER17);
