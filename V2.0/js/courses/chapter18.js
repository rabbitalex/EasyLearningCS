// 第十八章：常用内建模块
const CHAPTER18 = {
  chapter: "第十八章：常用内建模块",
  icon: "📦",
  lessons: [
    {
      id: "18-1",
      title: "datetime - 日期与时间",
      xp: 20,
      code: 'import datetime\n\nnow = datetime.datetime.now()\nprint("现在:", now)\nprint(f"年:{now.year} 月:{now.month} 日:{now.day}")\nprint(f"时:{now.hour} 分:{now.minute}")\n\n# 时间运算\nfuture = now + datetime.timedelta(days=7)\nprint(f"一周后: {future}")',
      steps: [
        {
          title: "datetime模块",
          content: `<p><code>datetime</code> 是Python处理日期和时间的标准模块！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📅 datetime常用操作</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">现在</span><span class="ch1-vf-code">datetime.now()</span><span class="ch1-vf-desc">获取当前时间</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">创建</span><span class="ch1-vf-code">datetime(2024,3,15)</span><span class="ch1-vf-desc">指定日期</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">计算</span><span class="ch1-vf-code">timedelta(days=7)</span><span class="ch1-vf-desc">时间差</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">格式化</span><span class="ch1-vf-code">strftime("%Y-%m-%d")</span><span class="ch1-vf-desc">转字符串</span></div>
  </div>
  <div class="theory-callout">💡 <code>strftime</code> 中 %Y=年, %m=月, %d=日, %H=时, %M=分, %S=秒</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,206,201,0.08));border:1px solid rgba(108,92,231,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(108,92,231,0.1);border-left:3px solid #6c5ce7;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 获取当前日期，计算100天后是几月几号",
        hint: 'import datetime\nnow = datetime.datetime.now()\nfuture = now + datetime.timedelta(days=100)\nprint(f"今天: {now.year}-{now.month}-{now.day}")\nprint(f"100天后: {future.year}-{future.month}-{future.day}")',
        template: 'import datetime\n# 日期计算\n',
        check: function(output) { return output.indexOf("天后") !== -1 || output.indexOf("100") !== -1 || output.split("\n").length >= 2; }
      }
    },
    {
      id: "18-2",
      title: "collections - 高级数据结构",
      xp: 25,
      code: '# 模拟 Counter: 计数器\ndef counter(items):\n    result = {}\n    for item in items:\n        if item in result:\n            result[item] = result[item] + 1\n        else:\n            result[item] = 1\n    return result\n\nwords = "apple banana apple cherry banana apple"\ncnt = counter(words.split())\nprint("词频:", cnt)\n\n# 找出最常见的词\nsorted_items = sorted(cnt.keys(), key=lambda x: cnt[x], reverse=True)\nprint("最常见:", sorted_items[:2])\n\n# 模拟 defaultdict: 默认字典\nscores = {}\ndata = [("语文", 95), ("数学", 88), ("语文", 92), ("数学", 95)]\nfor item in data:\n    name = item[0]\n    score = item[1]\n    if name not in scores:\n        scores[name] = []\n    scores[name].append(score)\nprint("成绩:", scores)',
      steps: [
        {
          title: "collections模块精华",
          content: `<p><code>collections</code> 提供了比内置类型更强大的数据结构！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🧰 collections常用类</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">Counter</span><span class="ch1-vf-code">计数器，统计元素出现次数</span><span class="ch1-vf-desc">词频统计</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">defaultdict</span><span class="ch1-vf-code">带默认值的字典</span><span class="ch1-vf-desc">分组聚合</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">OrderedDict</span><span class="ch1-vf-code">有序字典</span><span class="ch1-vf-desc">保持插入顺序</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">namedtuple</span><span class="ch1-vf-code">命名元组</span><span class="ch1-vf-desc">轻量级类</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">deque</span><span class="ch1-vf-code">双端队列</span><span class="ch1-vf-desc">高效头尾操作</span></div>
  </div>
  <div class="theory-callout">💡 在标准Python中使用 <code>from collections import Counter</code>。这里我们用纯代码模拟其原理！</div>
</div>`
        }
      ],
      challenge: {
        desc: "🎯 手写一个计数函数，统计字符串'abracadabra'中每个字母出现的次数",
        hint: 'def count_chars(s):\n    result = {}\n    for c in s:\n        if c in result:\n            result[c] = result[c] + 1\n        else:\n            result[c] = 1\n    return result\n\ncnt = count_chars("abracadabra")\nsorted_chars = sorted(cnt.keys(), key=lambda x: cnt[x], reverse=True)\nfor ch in sorted_chars:\n    print(f"{ch}: {cnt[ch]}次")',
        template: '# 字符统计\ndef count_chars(s):\n    pass\n',
        check: function(output) { return output.indexOf("a") !== -1 && output.indexOf("5") !== -1; }
      }
    },
    {
      id: "18-3",
      title: "哈希与编码",
      xp: 20,
      code: '# 模拟哈希函数原理\ndef simple_hash(text):\n    """简单哈希: 将字符串转为固定长度的数字摘要"""\n    h = 0\n    for ch in text:\n        h = (h * 31 + ord(ch)) % (2**32)\n    return format(h, "08x")\n\ntext = "Hello, Python!"\nhash1 = simple_hash(text)\nprint(f"原文: {text}")\nprint(f"哈希: {hash1}")\n\n# 改一个字符，哈希完全不同\ntext2 = "Hello, Python?"\nhash2 = simple_hash(text2)\nprint(f"\\n原文: {text2}")\nprint(f"哈希: {hash2}")\nprint(f"\\n哈希相同? {hash1 == hash2}")\n\n# 模拟Base64编码原理\ndef simple_b64(text):\n    """简化版Base64: 将每个字符转为ASCII码的可视化表示"""\n    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"\n    result = ""\n    for ch in text:\n        n = ord(ch)\n        result = result + chars[n // 64 % 64] + chars[n % 64]\n    return result\n\nencoded = simple_b64("Hi")\nprint(f"\\nBase64编码 Hi → {encoded}")',
      steps: [
        {
          title: "哈希与编码",
          content: `<p>哈希和编码是数据安全与传输的基础工具！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔐 哈希算法 - 摘要算法</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">MD5</span><span class="ch1-vf-code">128位哈希，速度快</span><span class="ch1-vf-desc">文件校验</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">SHA256</span><span class="ch1-vf-code">256位哈希，更安全</span><span class="ch1-vf-desc">密码存储</span></div>
  </div>
  <div class="theory-anim-title" style="margin-top:0.8rem">📧 Base64 - 编码转换</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">编码</span><span class="ch1-vf-code">b64encode(data)</span><span class="ch1-vf-desc">二进制→文本</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">解码</span><span class="ch1-vf-code">b64decode(str)</span><span class="ch1-vf-desc">文本→二进制</span></div>
  </div>
  <div class="theory-callout">⚠️ 哈希是<strong>单向的</strong>，不可逆！Base64是<strong>编码</strong>，可以解码。<br>💡 在标准Python中使用 <code>import hashlib</code> 和 <code>import base64</code>。这里我们模拟其原理！</div>
</div>`
        }
      ],
      challenge: {
        desc: "🎯 编写一个简单的哈希函数，对不同字符串产生不同的哈希值",
        hint: 'def my_hash(text):\n    h = 5381\n    for ch in text:\n        h = ((h * 33) + ord(ch)) % (2**32)\n    return format(h, "08x")\n\nwords = ["python", "Python", "PYTHON", "java"]\nfor w in words:\n    print(f"{w} → {my_hash(w)}")',
        template: '# 哈希函数\ndef my_hash(text):\n    pass\n',
        check: function(output) { return output.indexOf("→") !== -1 || output.split("\n").length >= 3; }
      }
    }
  ]
};

registerChapter('python', CHAPTER18);
