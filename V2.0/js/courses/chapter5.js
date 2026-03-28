// 第五章：列表与字典
const CHAPTER5 = {
  chapter: "第五章：列表与字典",
  icon: "📋",
  lessons: [
    {
      id: "5-1",
      title: "列表 - 数据的队列",
      xp: 20,
      code: 'fruits = ["苹果", "香蕉", "橙子"]\nprint(fruits)\nprint(fruits[0])\nfruits.append("葡萄")\nprint(fruits)\nprint(len(fruits))',
      steps: [
        {
          title: "什么是列表？",
          content: `<p>列表就像一个<strong>有编号的书架</strong>📚，可以放很多东西，每格有个编号：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📋 列表可视化</div>
  <div class="ch5-list-viz">
    <div class="ch5-list-name">fruits = </div>
    <div class="ch5-list-items">
      <div class="ch5-list-item"><div class="ch5-item-idx">0</div><div class="ch5-item-val">"苹果"</div></div>
      <div class="ch5-list-item"><div class="ch5-item-idx">1</div><div class="ch5-item-val">"香蕉"</div></div>
      <div class="ch5-list-item"><div class="ch5-item-idx">2</div><div class="ch5-item-val">"橙子"</div></div>
    </div>
  </div>
  <div class="ch5-list-features">
    <div class="ch5-feat"><span>✅</span> 有序 — 元素有固定位置</div>
    <div class="ch5-feat"><span>✅</span> 可变 — 随时添加、删除、修改</div>
    <div class="ch5-feat"><span>✅</span> 混搭 — 可放不同类型的数据</div>
  </div>
  <div class="theory-callout">💡 列表用方括号 <code>[]</code> 创建，元素之间用逗号分隔。索引从 <strong>0</strong> 开始！</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(253,121,168,0.08),rgba(0,206,201,0.08));border:1px solid rgba(253,121,168,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;font-weight:700;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(253,121,168,0.1);border-left:3px solid #fd79a8;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
.ch5-list-viz{display:flex;align-items:center;gap:0.5rem;margin:0.6rem 0;flex-wrap:wrap}
.ch5-list-name{font-family:monospace;font-size:0.82rem;color:#FF9800;font-weight:700;font-weight:700}
.ch5-list-items{display:flex;gap:0.3rem}
.ch5-list-item{background:#0d0d1a;border:1px solid rgba(253,121,168,0.3);border-radius:8px;padding:0.3rem 0.5rem;text-align:center;animation:nodeAppear 0.3s ease both}
@keyframes nodeAppear{from{opacity:0;transform:scale(0.7)}to{opacity:1;transform:scale(1)}}
.ch5-list-item:nth-child(1){animation-delay:0.1s}.ch5-list-item:nth-child(2){animation-delay:0.2s}.ch5-list-item:nth-child(3){animation-delay:0.3s}
.ch5-item-idx{font-size:0.92rem;color:#c8d0e0;font-family:monospace}
.ch5-item-val{font-size:0.9rem;color:#00b894;font-family:monospace;font-weight:700}
.ch5-list-features{display:flex;flex-direction:column;gap:0.2rem;margin-top:0.5rem}
.ch5-feat{font-size:0.88rem;color:#e8ecf2;display:flex;gap:0.3rem;align-items:center}
</style>`
        },
        {
          title: "列表操作大全",
          content: `<p>列表有很多实用的操作方法：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🛠️ 列表方法速查</div>
  <div class="ch5-op-grid">
    <div class="ch5-op-card" style="border-color:rgba(0,184,148,0.4)">
      <div class="ch5-op-icon">➕</div>
      <div class="ch5-op-name">.append(x)</div>
      <div class="ch5-op-desc">末尾添加元素</div>
    </div>
    <div class="ch5-op-card" style="border-color:rgba(225,112,85,0.4)">
      <div class="ch5-op-icon">➖</div>
      <div class="ch5-op-name">.remove(x)</div>
      <div class="ch5-op-desc">删除指定元素</div>
    </div>
    <div class="ch5-op-card" style="border-color:rgba(253,203,110,0.4)">
      <div class="ch5-op-icon">📌</div>
      <div class="ch5-op-name">.insert(i,x)</div>
      <div class="ch5-op-desc">在指定位置插入</div>
    </div>
    <div class="ch5-op-card" style="border-color:rgba(253,121,168,0.4)">
      <div class="ch5-op-icon">🔢</div>
      <div class="ch5-op-name">len(list)</div>
      <div class="ch5-op-desc">获取长度</div>
    </div>
    <div class="ch5-op-card" style="border-color:rgba(253,121,168,0.4)">
      <div class="ch5-op-icon">🔄</div>
      <div class="ch5-op-name">.sort()</div>
      <div class="ch5-op-desc">排序</div>
    </div>
    <div class="ch5-op-card" style="border-color:rgba(0,206,201,0.4)">
      <div class="ch5-op-icon">↩️</div>
      <div class="ch5-op-name">.reverse()</div>
      <div class="ch5-op-desc">翻转列表</div>
    </div>
  </div>
</div>
<style>
.ch5-op-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:0.4rem;margin:0.5rem 0}
.ch5-op-card{background:#0d0d1a;border-radius:8px;padding:0.5rem;text-align:center;border-top:3px solid;transition:transform 0.2s}
.ch5-op-card:hover{transform:translateY(-3px)}
.ch5-op-icon{font-size:1.1rem;margin-bottom:0.15rem}
.ch5-op-name{font-family:monospace;font-size:0.85rem;font-weight:700;color:#FF9800;font-weight:700;margin-bottom:0.1rem}
.ch5-op-desc{font-size:0.92rem;color:#c8d0e0}
</style>`,
          codeToLoad: 'fruits = ["苹果", "香蕉", "橙子"]\nprint("初始:", fruits)\nfruits.append("葡萄")\nprint("添加后:", fruits)\nfruits.remove("香蕉")\nprint("删除后:", fruits)\nprint("长度:", len(fruits))'
        },
        {
          title: "遍历列表 + 实战",
          content: `<p>用 <em>for</em> 循环可以逐个访问列表中的元素：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎬 遍历过程可视化</div>
  <div class="ch5-traverse">
    <div class="ch5-tr-row"><span class="ch5-tr-arrow">→</span><span class="ch5-tr-val">scores[0] = 95</span><span class="ch5-tr-sum">累计: 95</span></div>
    <div class="ch5-tr-row"><span class="ch5-tr-arrow">→</span><span class="ch5-tr-val">scores[1] = 87</span><span class="ch5-tr-sum">累计: 182</span></div>
    <div class="ch5-tr-row"><span class="ch5-tr-arrow">→</span><span class="ch5-tr-val">scores[2] = 72</span><span class="ch5-tr-sum">累计: 254</span></div>
    <div class="ch5-tr-row"><span class="ch5-tr-arrow">→</span><span class="ch5-tr-val">scores[3] = 100</span><span class="ch5-tr-sum">累计: 354</span></div>
    <div class="ch5-tr-row"><span class="ch5-tr-arrow">→</span><span class="ch5-tr-val">scores[4] = 66</span><span class="ch5-tr-sum">累计: 420</span></div>
    <div class="ch5-tr-result">平均分 = 420 / 5 = <strong style="color:#00b894">84.0</strong></div>
  </div>
</div>
<style>
.ch5-traverse{display:flex;flex-direction:column;gap:0.2rem;margin:0.5rem 0}
.ch5-tr-row{display:flex;align-items:center;gap:0.5rem;background:#0d0d1a;border-radius:6px;padding:0.3rem 0.6rem;animation:slideInPipe 0.3s ease both}
@keyframes slideInPipe{from{opacity:0;transform:translateX(-15px)}to{opacity:1;transform:translateX(0)}}
.ch5-tr-row:nth-child(1){animation-delay:0.05s}.ch5-tr-row:nth-child(2){animation-delay:0.1s}.ch5-tr-row:nth-child(3){animation-delay:0.15s}.ch5-tr-row:nth-child(4){animation-delay:0.2s}.ch5-tr-row:nth-child(5){animation-delay:0.25s}
.ch5-tr-arrow{color:#fdcb6e;font-weight:800}
.ch5-tr-val{font-family:monospace;font-size:0.88rem;color:#FF9800;font-weight:700;flex:1}
.ch5-tr-sum{font-family:monospace;font-size:0.82rem;color:#c8d0e0}
.ch5-tr-result{text-align:center;font-size:0.92rem;color:#e8ecf2;padding:0.4rem;background:rgba(0,184,148,0.08);border-radius:8px;margin-top:0.2rem}
</style>`,
          codeToLoad: 'scores = [95, 87, 72, 100, 66]\ntotal = 0\nfor s in scores:\n    total = total + s\n    print("当前分数:", s, "累计:", total)\navg = total / len(scores)\nprint("平均分:", avg)'
        }
      ],
      challenge: {
        desc: "🎯 创建一个包含5个数字的列表，用循环找出其中的最大值并打印。",
        hint: 'nums = [34, 67, 12, 89, 45]\nmax_val = nums[0]\nfor n in nums:\n    if n > max_val:\n        max_val = n\nprint("最大值:", max_val)',
        template: 'nums = [34, 67, 12, 89, 45]\n# 找出最大值\n',
        check: function(output) { return output.indexOf("89") !== -1; }
      }
    },
    {
      id: "5-2",
      title: "字典 - 数据的名片册",
      xp: 20,
      code: 'student = {"name": "小明", "age": 12, "grade": "六年级"}\nprint(student["name"])\nstudent["score"] = 95\nprint(student)',
      steps: [
        {
          title: "什么是字典？",
          content: `<p>字典就像一本<strong>通讯录</strong>📖，每个名字（键）对应一个信息（值）：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📖 字典结构可视化</div>
  <div class="ch5-dict-viz">
    <div class="ch5-dict-name">student = {</div>
    <div class="ch5-dict-pairs">
      <div class="ch5-dict-pair">
        <span class="ch5-dict-key">"name"</span>
        <span class="ch5-dict-colon">:</span>
        <span class="ch5-dict-val">"小明"</span>
      </div>
      <div class="ch5-dict-pair">
        <span class="ch5-dict-key">"age"</span>
        <span class="ch5-dict-colon">:</span>
        <span class="ch5-dict-val">12</span>
      </div>
      <div class="ch5-dict-pair">
        <span class="ch5-dict-key">"grade"</span>
        <span class="ch5-dict-colon">:</span>
        <span class="ch5-dict-val">"六年级"</span>
      </div>
    </div>
    <div class="ch5-dict-name">}</div>
  </div>
  <div class="ch5-dict-vs">
    <div class="ch5-dvs-card">
      <div class="ch5-dvs-title">📋 列表</div>
      <div class="ch5-dvs-desc">用<strong>数字索引</strong>访问</div>
      <div class="ch5-dvs-code">fruits[0]</div>
    </div>
    <div class="ch5-dvs-sep">VS</div>
    <div class="ch5-dvs-card">
      <div class="ch5-dvs-title">📖 字典</div>
      <div class="ch5-dvs-desc">用<strong>键名</strong>访问</div>
      <div class="ch5-dvs-code">student["name"]</div>
    </div>
  </div>
  <div class="theory-callout">💡 字典用花括号 <code>{}</code> 创建，每项是 <code>键: 值</code> 的形式。</div>
</div>
<style>
.ch5-dict-viz{background:#0d0d1a;border-radius:10px;padding:0.7rem;margin:0.5rem 0}
.ch5-dict-name{font-family:monospace;font-size:0.92rem;color:#c8d0e0}
.ch5-dict-pairs{padding-left:1.2rem;display:flex;flex-direction:column;gap:0.2rem;margin:0.2rem 0}
.ch5-dict-pair{display:flex;align-items:center;gap:0.3rem;animation:slideInPipe 0.3s ease both}
.ch5-dict-pair:nth-child(1){animation-delay:0.1s}.ch5-dict-pair:nth-child(2){animation-delay:0.2s}.ch5-dict-pair:nth-child(3){animation-delay:0.3s}
.ch5-dict-key{font-family:monospace;font-size:0.92rem;color:#fdcb6e;font-weight:700}
.ch5-dict-colon{color:#c8d0e0}
.ch5-dict-val{font-family:monospace;font-size:0.92rem;color:#00b894;font-weight:700}
.ch5-dict-vs{display:flex;align-items:center;gap:0.5rem;margin-top:0.6rem;justify-content:center}
.ch5-dvs-card{background:#0d0d1a;border-radius:8px;padding:0.5rem 0.7rem;text-align:center;flex:1;max-width:160px}
.ch5-dvs-title{font-size:0.92rem;font-weight:800;color:#e8ecf2;margin-bottom:0.15rem}
.ch5-dvs-desc{font-size:0.8rem;color:#c8d0e0;margin-bottom:0.2rem}
.ch5-dvs-code{font-family:monospace;font-size:0.88rem;color:#FF9800;font-weight:700;background:rgba(253,121,168,0.08);padding:0.15rem 0.4rem;border-radius:4px}
.ch5-dvs-sep{font-size:0.9rem;font-weight:800;color:#fd79a8}
</style>`
        },
        {
          title: "操作字典",
          content: `<p>字典的增删改查非常灵活：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🛠️ 字典操作演示</div>
  <div class="ch5-dop-list">
    <div class="ch5-dop-row">
      <span class="ch5-dop-op" style="color:#00b894">📖 读取</span>
      <code>student["name"]</code>
      <span class="ch5-dop-result">→ "小明"</span>
    </div>
    <div class="ch5-dop-row">
      <span class="ch5-dop-op" style="color:#FF9800;font-weight:700">➕ 新增</span>
      <code>student["score"] = 95</code>
      <span class="ch5-dop-result">→ 添加新键</span>
    </div>
    <div class="ch5-dop-row">
      <span class="ch5-dop-op" style="color:#fdcb6e">✏️ 修改</span>
      <code>student["age"] = 13</code>
      <span class="ch5-dop-result">→ 更新值</span>
    </div>
    <div class="ch5-dop-row">
      <span class="ch5-dop-op" style="color:#e17055">🗑️ 删除</span>
      <code>del student["grade"]</code>
      <span class="ch5-dop-result">→ 移除键</span>
    </div>
  </div>
</div>
<style>
.ch5-dop-list{display:flex;flex-direction:column;gap:0.3rem}
.ch5-dop-row{display:flex;align-items:center;gap:0.5rem;background:#0d0d1a;border-radius:6px;padding:0.4rem 0.6rem;flex-wrap:wrap}
.ch5-dop-op{font-size:0.85rem;font-weight:700;min-width:55px}
.ch5-dop-row code{font-size:0.88rem;color:#FF9800;font-weight:700}
.ch5-dop-result{font-size:0.8rem;color:#c8d0e0;margin-left:auto}
</style>`,
          codeToLoad: 'student = {"name": "小明", "age": 12}\nprint("姓名:", student["name"])\nstudent["score"] = 95\nstudent["age"] = 13\nprint("修改后:", student)\n\n# 遍历字典\nfor key in student:\n    print(key, ":", student[key])'
        }
      ],
      challenge: {
        desc: "🎯 创建一个字典存储一本书的信息（书名、作者、页数、价格），然后遍历并打印每个键值对。",
        hint: 'book = {"title":"Python入门","author":"小王","pages":200,"price":39.9}\nfor key in book:\n    print(key,":",book[key])',
        template: '# 创建书籍信息字典\n',
        check: function(output) { return output.trim().split('\n').length >= 3; }
      }
    }
  ]
};

registerChapter('python', CHAPTER5);
