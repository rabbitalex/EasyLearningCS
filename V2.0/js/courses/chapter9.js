// 第八章：文件操作
const CHAPTER9 = {
  chapter: "第八章：文件操作",
  icon: "📁",
  lessons: [
    {
      id: "8-1",
      title: "读写文件 - 数据的保存",
      xp: 30,
      code: '# 写入文件\nwith open("test.txt", "w") as f:\n    f.write("Hello, Python!")\n\n# 读取文件\nwith open("test.txt", "r") as f:\n    content = f.read()\n    print(content)',
      steps: [
        {
          title: "为什么要学文件操作？",
          content: `<p>程序运行时数据存在<strong>内存</strong>中，程序关闭就全没了！文件操作让数据可以<strong>永久保存</strong>。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">💾 内存 vs 文件</div>
  <div class="ch9-compare-grid">
    <div class="ch9-cmp-card ch9-cmp-mem">
      <div class="ch9-cmp-icon">🧠</div>
      <div class="ch9-cmp-name">内存（RAM）</div>
      <div class="ch9-cmp-props">
        <div class="ch9-cmp-prop">⚡ 速度：极快</div>
        <div class="ch9-cmp-prop">📦 容量：较小</div>
        <div class="ch9-cmp-prop">💨 断电即丢失</div>
        <div class="ch9-cmp-prop">🔄 变量存在这里</div>
      </div>
    </div>
    <div class="ch9-cmp-vs">VS</div>
    <div class="ch9-cmp-card ch9-cmp-file">
      <div class="ch9-cmp-icon">💿</div>
      <div class="ch9-cmp-name">硬盘（文件）</div>
      <div class="ch9-cmp-props">
        <div class="ch9-cmp-prop">🐢 速度：较慢</div>
        <div class="ch9-cmp-prop">📦 容量：很大</div>
        <div class="ch9-cmp-prop">✅ 永久保存</div>
        <div class="ch9-cmp-prop">📄 文件存在这里</div>
      </div>
    </div>
  </div>
  <div class="theory-callout">💡 就像游戏存档一样——不保存就白玩了！文件操作就是给程序"存档"的能力。</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,206,201,0.08));border:1px solid rgba(108,92,231,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;font-weight:700;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(108,92,231,0.1);border-left:3px solid #6c5ce7;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
.ch9-compare-grid{display:flex;align-items:center;gap:0.5rem;justify-content:center}
.ch9-cmp-card{background:#0d0d1a;border-radius:12px;padding:0.6rem;text-align:center;flex:1;border:1px solid rgba(108,92,231,0.15)}
.ch9-cmp-mem{border-color:rgba(253,203,110,0.3)}
.ch9-cmp-file{border-color:rgba(0,184,148,0.3)}
.ch9-cmp-icon{font-size:1.5rem;margin-bottom:0.2rem}
.ch9-cmp-name{font-size:0.9rem;font-weight:700;color:#FF9800;font-weight:700;margin-bottom:0.3rem}
.ch9-cmp-vs{font-size:0.8rem;font-weight:800;color:#fd79a8;flex-shrink:0}
.ch9-cmp-props{text-align:left}
.ch9-cmp-prop{font-size:0.92rem;color:#c8d0e0;padding:0.12rem 0}
</style>`
        },
        {
          title: "写入文件 - write",
          content: `<p>用 <em>open()</em> 打开文件，用 <em>write()</em> 写入：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">✍️ 写入文件的流程</div>
  <div class="ch9-write-flow">
    <div class="ch9-wf-step" style="animation-delay:0s">
      <div class="ch9-wf-num">①</div>
      <div class="ch9-wf-label">打开文件</div>
      <code>open("test.txt", "w")</code>
    </div>
    <div class="ch9-wf-arrow">→</div>
    <div class="ch9-wf-step" style="animation-delay:0.15s">
      <div class="ch9-wf-num">②</div>
      <div class="ch9-wf-label">写入内容</div>
      <code>f.write("Hello!")</code>
    </div>
    <div class="ch9-wf-arrow">→</div>
    <div class="ch9-wf-step" style="animation-delay:0.3s">
      <div class="ch9-wf-num">③</div>
      <div class="ch9-wf-label">自动关闭</div>
      <code>with 自动处理</code>
    </div>
  </div>
  <div class="ch9-mode-table">
    <div class="ch9-mt-title">📋 文件打开模式</div>
    <div class="ch9-mt-row"><span class="ch9-mt-mode">"w"</span><span class="ch9-mt-desc">写入（覆盖原有内容）</span></div>
    <div class="ch9-mt-row"><span class="ch9-mt-mode">"a"</span><span class="ch9-mt-desc">追加（在末尾添加）</span></div>
    <div class="ch9-mt-row"><span class="ch9-mt-mode">"r"</span><span class="ch9-mt-desc">只读（默认模式）</span></div>
    <div class="ch9-mt-row"><span class="ch9-mt-mode">"r+"</span><span class="ch9-mt-desc">读写模式</span></div>
  </div>
</div>
<style>
.ch9-write-flow{display:flex;align-items:center;gap:0.2rem;flex-wrap:wrap;justify-content:center;margin:0.5rem 0}
.ch9-wf-step{background:#0d0d1a;border-radius:10px;padding:0.5rem;text-align:center;min-width:90px;animation:ch9FadeIn 0.4s ease both}
@keyframes ch9FadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
.ch9-wf-num{font-size:0.85rem;font-weight:800;color:#fdcb6e}
.ch9-wf-label{font-size:0.8rem;color:#c8d0e0;margin:0.1rem 0}
.ch9-wf-step code{font-size:0.82rem;color:#FF9800;font-weight:700}
.ch9-wf-arrow{color:#555;font-weight:700}
.ch9-mode-table{background:#0d0d1a;border-radius:10px;padding:0.5rem 0.7rem;margin-top:0.5rem}
.ch9-mt-title{font-size:0.88rem;font-weight:700;color:#fdcb6e;margin-bottom:0.3rem}
.ch9-mt-row{display:flex;align-items:center;gap:0.5rem;padding:0.2rem 0;border-bottom:1px solid rgba(255,255,255,0.03)}
.ch9-mt-row:last-child{border:none}
.ch9-mt-mode{font-family:monospace;font-size:0.9rem;color:#fd79a8;font-weight:700;min-width:30px}
.ch9-mt-desc{font-size:0.8rem;color:#c8d0e0}
</style>`,
          codeToLoad: '# 写入文件\nwith open("test.txt", "w") as f:\n    f.write("Hello, Python!\\n")\n    f.write("文件操作真简单！\\n")\nprint("文件写入成功！")\n\n# 追加内容\nwith open("test.txt", "a") as f:\n    f.write("这是追加的内容\\n")\nprint("追加内容成功！")'
        },
        {
          title: "读取文件 - read",
          content: `<p>用 <em>"r"</em> 模式读取文件内容：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📖 读取文件的三种方法</div>
  <div class="ch9-read-methods">
    <div class="ch9-rm-card" style="border-color:rgba(108,92,231,0.4)">
      <div class="ch9-rm-name">f.read()</div>
      <div class="ch9-rm-desc">一次读取全部内容</div>
      <div class="ch9-rm-use">适合小文件</div>
    </div>
    <div class="ch9-rm-card" style="border-color:rgba(253,121,168,0.4)">
      <div class="ch9-rm-name">f.readline()</div>
      <div class="ch9-rm-desc">每次读取一行</div>
      <div class="ch9-rm-use">适合逐行处理</div>
    </div>
    <div class="ch9-rm-card" style="border-color:rgba(0,184,148,0.4)">
      <div class="ch9-rm-name">f.readlines()</div>
      <div class="ch9-rm-desc">读取所有行，返回列表</div>
      <div class="ch9-rm-use">适合按行操作</div>
    </div>
  </div>
  <div class="theory-callout">🎯 <strong>with</strong> 关键字会自动帮你关闭文件，不需要手动调用 f.close()，推荐始终使用！</div>
</div>
<style>
.ch9-read-methods{display:flex;gap:0.4rem;margin:0.5rem 0;flex-wrap:wrap}
.ch9-rm-card{background:#0d0d1a;border-radius:10px;padding:0.5rem 0.6rem;flex:1;min-width:100px;border-top:3px solid;text-align:center;transition:transform 0.2s}
.ch9-rm-card:hover{transform:translateY(-3px)}
.ch9-rm-name{font-family:monospace;font-size:0.92rem;color:#FF9800;font-weight:700;font-weight:700}
.ch9-rm-desc{font-size:0.92rem;color:#e8ecf2;margin:0.2rem 0}
.ch9-rm-use{font-size:0.9rem;color:#c8d0e0}
</style>`,
          codeToLoad: '# 先写入\nwith open("test.txt", "w") as f:\n    f.write("第一行：Hello\\n")\n    f.write("第二行：Python\\n")\n    f.write("第三行：文件操作\\n")\n\n# 方法1：读取全部\nwith open("test.txt", "r") as f:\n    content = f.read()\n    print("=== read() ===")\n    print(content)\n\n# 方法2：逐行读取\nwith open("test.txt", "r") as f:\n    print("=== readline() ===")\n    print(f.readline())\n\n# 方法3：读取所有行\nwith open("test.txt", "r") as f:\n    lines = f.readlines()\n    print("=== readlines() ===")\n    print(lines)'
        },
        {
          title: "with 语句的魔力",
          content: `<p><em>with</em> 语句是 Python 文件操作的<strong>安全卫士</strong>：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🛡️ with 语句 vs 手动操作</div>
  <div class="ch9-with-compare">
    <div class="ch9-wc-card ch9-wc-bad">
      <div class="ch9-wc-head">❌ 不推荐</div>
      <div class="ch9-wc-code">f = open("a.txt", "r")
content = f.read()
f.close()  # 容易忘记！</div>
      <div class="ch9-wc-risk">⚠️ 如果中间出错，文件不会关闭</div>
    </div>
    <div class="ch9-wc-card ch9-wc-good">
      <div class="ch9-wc-head">✅ 推荐</div>
      <div class="ch9-wc-code">with open("a.txt", "r") as f:
    content = f.read()
# 自动关闭！</div>
      <div class="ch9-wc-benefit">✅ 无论是否出错，文件都会自动关闭</div>
    </div>
  </div>
</div>
<style>
.ch9-with-compare{display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;margin:0.5rem 0}
.ch9-wc-card{background:#0d0d1a;border-radius:10px;padding:0.5rem 0.7rem}
.ch9-wc-bad{border:1px solid rgba(225,112,85,0.3)}
.ch9-wc-good{border:1px solid rgba(0,184,148,0.3)}
.ch9-wc-head{font-size:0.92rem;font-weight:700;margin-bottom:0.3rem}
.ch9-wc-bad .ch9-wc-head{color:#e17055}
.ch9-wc-good .ch9-wc-head{color:#00b894}
.ch9-wc-code{font-family:monospace;font-size:0.8rem;color:#e8ecf2;white-space:pre;line-height:1.5;background:rgba(0,0,0,0.3);border-radius:6px;padding:0.3rem 0.5rem;margin-bottom:0.3rem}
.ch9-wc-risk{font-size:0.92rem;color:#e17055}
.ch9-wc-benefit{font-size:0.92rem;color:#00b894}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 写一个程序：将你的个人信息（名字、年龄、爱好）写入 info.txt，然后读取并打印出来。",
        hint: 'with open("info.txt", "w") as f:\n    f.write("名字: 小明\\n")\n    f.write("年龄: 12\\n")\n    f.write("爱好: 编程\\n")\n\nwith open("info.txt", "r") as f:\n    print(f.read())',
        template: '# 写入并读取个人信息\n',
        check: function(output) { return output.trim().length > 0; }
      }
    },
    {
      id: "8-2",
      title: "文件操作进阶 - 处理数据文件",
      xp: 35,
      code: '# 学生成绩数据处理\nstudents = [\n    "小明,95",\n    "小红,87",\n    "小刚,72",\n    "小李,90",\n    "小王,65"\n]\n\n# 写入CSV格式\nwith open("scores.csv", "w") as f:\n    f.write("姓名,成绩\\n")\n    for s in students:\n        f.write(s + "\\n")\nprint("成绩文件已保存！")\n\n# 读取并分析\nwith open("scores.csv", "r") as f:\n    lines = f.readlines()\n    header = lines[0].strip()\n    print(header)\n    print("-" * 15)\n    for line in lines[1:]:\n        name, score = line.strip().split(",")\n        print(f"{name}: {score}分")',
      steps: [
        {
          title: "处理CSV数据文件",
          content: `<p>CSV（逗号分隔值）是最常见的数据文件格式，Excel、数据库都支持它。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📊 CSV 文件结构</div>
  <div class="ch9-csv-demo">
    <div class="ch9-csv-file">
      <div class="ch9-csv-header">
        <span class="ch9-csv-icon">📄</span>
        <span>scores.csv</span>
      </div>
      <div class="ch9-csv-content">
        <div class="ch9-csv-row ch9-csv-head-row">
          <span>姓名</span><span class="ch9-csv-comma">,</span><span>成绩</span>
        </div>
        <div class="ch9-csv-row" style="animation-delay:0.1s">
          <span>小明</span><span class="ch9-csv-comma">,</span><span>95</span>
        </div>
        <div class="ch9-csv-row" style="animation-delay:0.2s">
          <span>小红</span><span class="ch9-csv-comma">,</span><span>87</span>
        </div>
        <div class="ch9-csv-row" style="animation-delay:0.3s">
          <span>小刚</span><span class="ch9-csv-comma">,</span><span>72</span>
        </div>
      </div>
    </div>
    <div class="ch9-csv-explain">
      <div class="ch9-csv-point">📌 第一行是<strong>表头</strong></div>
      <div class="ch9-csv-point">📌 每行一条<strong>记录</strong></div>
      <div class="ch9-csv-point">📌 字段用<strong>逗号</strong>分隔</div>
      <div class="ch9-csv-point">📌 可用 <code>split(",")</code> 解析</div>
    </div>
  </div>
</div>
<style>
.ch9-csv-demo{display:flex;gap:0.8rem;align-items:flex-start;margin:0.5rem 0;flex-wrap:wrap}
.ch9-csv-file{background:#0d0d1a;border-radius:10px;overflow:hidden;flex:1;min-width:160px}
.ch9-csv-header{display:flex;align-items:center;gap:0.3rem;padding:0.35rem 0.6rem;background:rgba(108,92,231,0.1);font-size:0.88rem;font-weight:700;color:#FF9800;font-weight:700}
.ch9-csv-icon{font-size:0.9rem}
.ch9-csv-content{padding:0.4rem 0.6rem}
.ch9-csv-row{font-family:monospace;font-size:0.88rem;color:#e8ecf2;padding:0.15rem 0;animation:ch9FadeIn 0.3s ease both}
.ch9-csv-head-row{color:#fdcb6e;font-weight:700;border-bottom:1px solid rgba(253,203,110,0.2);padding-bottom:0.25rem;margin-bottom:0.1rem}
.ch9-csv-comma{color:#fd79a8;margin:0 0.1rem;font-weight:700}
.ch9-csv-explain{display:flex;flex-direction:column;gap:0.25rem;flex:1;min-width:140px}
.ch9-csv-point{font-size:0.85rem;color:#c8d0e0;background:#0d0d1a;border-radius:6px;padding:0.3rem 0.5rem}
.ch9-csv-point code{color:#FF9800;font-weight:700;font-size:0.82rem}
</style>`,
          codeToLoad: '# 学生成绩数据处理\nstudents = ["小明,95", "小红,87", "小刚,72", "小李,90", "小王,65"]\n\n# 写入CSV\nwith open("scores.csv", "w") as f:\n    f.write("姓名,成绩\\n")\n    for s in students:\n        f.write(s + "\\n")\nprint("成绩文件已保存！")\n\n# 读取并分析\nwith open("scores.csv", "r") as f:\n    lines = f.readlines()\n    print(lines[0].strip())\n    print("-" * 15)\n    for line in lines[1:]:\n        name, score = line.strip().split(",")\n        print(f"{name}: {score}分")'
        },
        {
          title: "字符串处理技巧",
          content: `<p>处理文件数据离不开<strong>字符串操作</strong>：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔧 常用字符串方法</div>
  <div class="ch9-str-methods">
    <div class="ch9-sm-item">
      <code>strip()</code>
      <div class="ch9-sm-demo">
        <span class="ch9-sm-before">"  hello  "</span>
        <span class="ch9-sm-arrow">→</span>
        <span class="ch9-sm-after">"hello"</span>
      </div>
      <span class="ch9-sm-desc">去除两端空白</span>
    </div>
    <div class="ch9-sm-item">
      <code>split(",")</code>
      <div class="ch9-sm-demo">
        <span class="ch9-sm-before">"a,b,c"</span>
        <span class="ch9-sm-arrow">→</span>
        <span class="ch9-sm-after">["a","b","c"]</span>
      </div>
      <span class="ch9-sm-desc">按分隔符拆分</span>
    </div>
    <div class="ch9-sm-item">
      <code>join()</code>
      <div class="ch9-sm-demo">
        <span class="ch9-sm-before">["a","b"]</span>
        <span class="ch9-sm-arrow">→</span>
        <span class="ch9-sm-after">"a-b"</span>
      </div>
      <span class="ch9-sm-desc">用分隔符连接</span>
    </div>
    <div class="ch9-sm-item">
      <code>replace()</code>
      <div class="ch9-sm-demo">
        <span class="ch9-sm-before">"Hello"</span>
        <span class="ch9-sm-arrow">→</span>
        <span class="ch9-sm-after">"Hi"</span>
      </div>
      <span class="ch9-sm-desc">替换子串</span>
    </div>
  </div>
</div>
<style>
.ch9-str-methods{display:flex;flex-direction:column;gap:0.3rem;margin:0.5rem 0}
.ch9-sm-item{display:flex;align-items:center;gap:0.4rem;background:#0d0d1a;border-radius:8px;padding:0.4rem 0.6rem;flex-wrap:wrap}
.ch9-sm-item code{font-size:0.9rem;color:#FF9800;font-weight:700;font-weight:700;min-width:70px}
.ch9-sm-demo{display:flex;align-items:center;gap:0.3rem;flex:1}
.ch9-sm-before{font-family:monospace;font-size:0.8rem;color:#c8d0e0}
.ch9-sm-arrow{color:#555;font-size:0.85rem}
.ch9-sm-after{font-family:monospace;font-size:0.8rem;color:#00b894}
.ch9-sm-desc{font-size:0.9rem;color:#b8c4d8;min-width:70px;text-align:right}
</style>`,
          codeToLoad: '# 字符串处理技巧\ntext = "  Hello, Python World!  "\nprint("原始:", repr(text))\nprint("strip:", text.strip())\n\ncsv_line = "小明,95,数学"\nparts = csv_line.split(",")\nprint("拆分:", parts)\nprint("名字:", parts[0])\nprint("成绩:", parts[1])\n\nfruits = ["苹果", "香蕉", "橘子"]\nresult = " | ".join(fruits)\nprint("连接:", result)'
        },
        {
          title: "统计分析数据",
          content: `<p>学会读写文件后，就可以做<strong>数据分析</strong>了！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📈 数据分析流程</div>
  <div class="ch9-analysis-flow">
    <div class="ch9-af-step" style="background:rgba(253,121,168,0.08);border-color:rgba(253,121,168,0.3)">
      <div class="ch9-af-icon">📥</div>
      <div class="ch9-af-name">读取数据</div>
    </div>
    <div class="ch9-af-arrow">→</div>
    <div class="ch9-af-step" style="background:rgba(108,92,231,0.08);border-color:rgba(108,92,231,0.3)">
      <div class="ch9-af-icon">🔧</div>
      <div class="ch9-af-name">清洗处理</div>
    </div>
    <div class="ch9-af-arrow">→</div>
    <div class="ch9-af-step" style="background:rgba(253,203,110,0.08);border-color:rgba(253,203,110,0.3)">
      <div class="ch9-af-icon">🧮</div>
      <div class="ch9-af-name">计算统计</div>
    </div>
    <div class="ch9-af-arrow">→</div>
    <div class="ch9-af-step" style="background:rgba(0,184,148,0.08);border-color:rgba(0,184,148,0.3)">
      <div class="ch9-af-icon">📊</div>
      <div class="ch9-af-name">输出结果</div>
    </div>
  </div>
  <div class="ch9-stat-formulas">
    <div class="ch9-sf-item"><span class="ch9-sf-name">平均分</span><code>sum(scores) / len(scores)</code></div>
    <div class="ch9-sf-item"><span class="ch9-sf-name">最高分</span><code>max(scores)</code></div>
    <div class="ch9-sf-item"><span class="ch9-sf-name">最低分</span><code>min(scores)</code></div>
    <div class="ch9-sf-item"><span class="ch9-sf-name">及格率</span><code>及格人数 / 总人数 * 100</code></div>
  </div>
</div>
<style>
.ch9-analysis-flow{display:flex;align-items:center;gap:0.2rem;justify-content:center;margin:0.5rem 0;flex-wrap:wrap}
.ch9-af-step{border-radius:10px;padding:0.5rem;text-align:center;min-width:70px;border:1px solid;animation:ch9FadeIn 0.4s ease both}
.ch9-af-icon{font-size:1.1rem}
.ch9-af-name{font-size:0.8rem;color:#e8ecf2;font-weight:600;margin-top:0.1rem}
.ch9-af-arrow{color:#555;font-weight:700}
.ch9-stat-formulas{display:grid;grid-template-columns:1fr 1fr;gap:0.3rem;margin-top:0.5rem}
.ch9-sf-item{display:flex;justify-content:space-between;align-items:center;background:#0d0d1a;border-radius:6px;padding:0.3rem 0.5rem}
.ch9-sf-name{font-size:0.82rem;color:#fdcb6e;font-weight:700}
.ch9-sf-item code{font-size:0.92rem;color:#FF9800;font-weight:700}
</style>`,
          codeToLoad: '# 数据统计分析\nstudents = ["小明,95", "小红,87", "小刚,72", "小李,90", "小王,65"]\n\n# 写入文件\nwith open("scores.csv", "w") as f:\n    f.write("姓名,成绩\\n")\n    for s in students:\n        f.write(s + "\\n")\n\n# 读取并分析\nscores = []\nnames = []\nwith open("scores.csv", "r") as f:\n    lines = f.readlines()[1:]  # 跳过表头\n    for line in lines:\n        name, score = line.strip().split(",")\n        names.append(name)\n        scores.append(int(score))\n\nprint("=== 成绩统计 ===")\nprint(f"平均分: {sum(scores)/len(scores):.1f}")\nprint(f"最高分: {names[scores.index(max(scores))]} {max(scores)}分")\nprint(f"最低分: {names[scores.index(min(scores))]} {min(scores)}分")\npass_count = len([s for s in scores if s >= 60])\nprint(f"及格率: {pass_count/len(scores)*100:.0f}%")'
        }
      ],
      challenge: {
        desc: "🎯 创建一个水果价格数据文件（CSV格式），至少包含5种水果和价格，然后读取文件计算出最贵和最便宜的水果。",
        hint: 'fruits = ["苹果,5.5", "香蕉,3.2", "榴莲,35.0", "橘子,4.0", "西瓜,2.5"]\nwith open("fruits.csv", "w") as f:\n    f.write("水果,价格\\n")\n    for fr in fruits:\n        f.write(fr + "\\n")\n\nwith open("fruits.csv", "r") as f:\n    lines = f.readlines()[1:]\n    max_price = 0\n    for line in lines:\n        name, price = line.strip().split(",")\n        if float(price) > max_price:\n            max_price = float(price)\n            max_name = name\n    print(f"最贵: {max_name} {max_price}元")',
        template: '# 水果价格数据处理\n',
        check: function(output) { return output.trim().length > 5; }
      }
    },
    {
      id: "8-3",
      title: "异常处理 - 让程序更安全",
      xp: 30,
      code: '# try-except 捕获异常\ntry:\n    num = int(input("请输入一个数字: "))\n    result = 100 / num\n    print(f"100 / {num} = {result}")\nexcept ValueError:\n    print("请输入有效的数字！")\nexcept ZeroDivisionError:\n    print("不能除以零！")\nfinally:\n    print("程序执行完毕")',
      steps: [
        {
          title: "什么是异常？",
          content: `<p>异常就是程序运行时遇到的<strong>错误</strong>。不处理异常，程序就会"崩溃"！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">💥 常见异常类型</div>
  <div class="ch9-error-grid">
    <div class="ch9-err-card" style="animation-delay:0s">
      <div class="ch9-err-icon">🔢</div>
      <div class="ch9-err-name">ValueError</div>
      <div class="ch9-err-eg">int("abc")</div>
      <div class="ch9-err-msg">值不对</div>
    </div>
    <div class="ch9-err-card" style="animation-delay:0.08s">
      <div class="ch9-err-icon">➗</div>
      <div class="ch9-err-name">ZeroDivisionError</div>
      <div class="ch9-err-eg">10 / 0</div>
      <div class="ch9-err-msg">除以零</div>
    </div>
    <div class="ch9-err-card" style="animation-delay:0.16s">
      <div class="ch9-err-icon">📄</div>
      <div class="ch9-err-name">FileNotFoundError</div>
      <div class="ch9-err-eg">open("不存在.txt")</div>
      <div class="ch9-err-msg">文件不存在</div>
    </div>
    <div class="ch9-err-card" style="animation-delay:0.24s">
      <div class="ch9-err-icon">📝</div>
      <div class="ch9-err-name">TypeError</div>
      <div class="ch9-err-eg">"3" + 5</div>
      <div class="ch9-err-msg">类型不对</div>
    </div>
    <div class="ch9-err-card" style="animation-delay:0.32s">
      <div class="ch9-err-icon">🔑</div>
      <div class="ch9-err-name">KeyError</div>
      <div class="ch9-err-eg">dict["不存在的键"]</div>
      <div class="ch9-err-msg">键不存在</div>
    </div>
    <div class="ch9-err-card" style="animation-delay:0.4s">
      <div class="ch9-err-icon">📍</div>
      <div class="ch9-err-name">IndexError</div>
      <div class="ch9-err-eg">list[999]</div>
      <div class="ch9-err-msg">索引越界</div>
    </div>
  </div>
  <div class="theory-callout">💡 异常并不可怕——学会处理它，程序就能优雅地应对各种意外情况！</div>
</div>
<style>
.ch9-error-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0.4rem;margin:0.5rem 0}
.ch9-err-card{background:#0d0d1a;border-radius:10px;padding:0.5rem;text-align:center;animation:ch9FadeIn 0.4s ease both;border:1px solid rgba(225,112,85,0.15);transition:transform 0.2s,border-color 0.2s}
.ch9-err-card:hover{transform:translateY(-3px);border-color:rgba(225,112,85,0.4)}
.ch9-err-icon{font-size:1.1rem}
.ch9-err-name{font-family:monospace;font-size:0.92rem;color:#e17055;font-weight:600;margin:0.1rem 0}
.ch9-err-eg{font-family:monospace;font-size:0.9rem;color:#FF9800;font-weight:700;margin:0.1rem 0}
.ch9-err-msg{font-size:0.88rem;color:#c8d0e0}
</style>`
        },
        {
          title: "try-except 捕获异常",
          content: `<p><em>try-except</em> 就是给代码穿上"防弹衣"——出错不会崩溃：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🛡️ try-except 结构</div>
  <div class="ch9-try-struct">
    <div class="ch9-ts-block ch9-ts-try">
      <div class="ch9-ts-label">try:</div>
      <div class="ch9-ts-desc">尝试执行的代码（可能出错的）</div>
    </div>
    <div class="ch9-ts-block ch9-ts-except">
      <div class="ch9-ts-label">except 错误类型:</div>
      <div class="ch9-ts-desc">出错后的处理方案</div>
    </div>
    <div class="ch9-ts-block ch9-ts-else">
      <div class="ch9-ts-label">else:</div>
      <div class="ch9-ts-desc">没出错时执行（可选）</div>
    </div>
    <div class="ch9-ts-block ch9-ts-finally">
      <div class="ch9-ts-label">finally:</div>
      <div class="ch9-ts-desc">无论如何都会执行（可选）</div>
    </div>
  </div>
  <div class="ch9-try-flow">
    <div class="ch9-tf-path ch9-tf-success">
      <span class="ch9-tf-label">✅ 没出错</span>
      <span>try → else → finally</span>
    </div>
    <div class="ch9-tf-path ch9-tf-error">
      <span class="ch9-tf-label">❌ 出错了</span>
      <span>try → except → finally</span>
    </div>
  </div>
</div>
<style>
.ch9-try-struct{display:flex;flex-direction:column;gap:0.25rem;margin:0.5rem 0}
.ch9-ts-block{display:flex;align-items:center;gap:0.5rem;border-radius:8px;padding:0.35rem 0.6rem}
.ch9-ts-label{font-family:monospace;font-size:0.9rem;font-weight:700;min-width:120px}
.ch9-ts-desc{font-size:0.8rem;color:#c8d0e0}
.ch9-ts-try{background:rgba(108,92,231,0.08);border-left:3px solid #6c5ce7}
.ch9-ts-try .ch9-ts-label{color:#FF9800;font-weight:700}
.ch9-ts-except{background:rgba(225,112,85,0.08);border-left:3px solid #e17055}
.ch9-ts-except .ch9-ts-label{color:#e17055}
.ch9-ts-else{background:rgba(0,184,148,0.08);border-left:3px solid #00b894}
.ch9-ts-else .ch9-ts-label{color:#00b894}
.ch9-ts-finally{background:rgba(253,203,110,0.08);border-left:3px solid #fdcb6e}
.ch9-ts-finally .ch9-ts-label{color:#fdcb6e}
.ch9-try-flow{display:flex;gap:0.5rem;margin-top:0.5rem}
.ch9-tf-path{flex:1;background:#0d0d1a;border-radius:8px;padding:0.3rem 0.5rem;font-family:monospace;font-size:0.8rem;color:#c8d0e0;display:flex;flex-direction:column;gap:0.1rem}
.ch9-tf-label{font-weight:700;font-family:inherit;font-size:0.82rem}
.ch9-tf-success .ch9-tf-label{color:#00b894}
.ch9-tf-error .ch9-tf-label{color:#e17055}
</style>`,
          codeToLoad: '# try-except 基础用法\ntry:\n    num = int("abc")  # 这会出错\n    print("成功:", num)\nexcept ValueError:\n    print("❌ 输入不是数字！")\n\nprint("---")\n\n# 捕获多种异常\ntry:\n    result = 100 / 0\nexcept ZeroDivisionError:\n    print("❌ 不能除以零！")\nexcept ValueError:\n    print("❌ 值有问题！")\nfinally:\n    print("✅ finally 总会执行")'
        },
        {
          title: "文件操作中的异常处理",
          content: `<p>文件操作是最需要异常处理的地方——文件可能不存在、可能没权限、可能被占用……</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📁 安全的文件操作模式</div>
  <div class="ch9-safe-code">
    <div class="ch9-sc-line"><span class="ch9-kw">try</span>:</div>
    <div class="ch9-sc-line ch9-sc-indent"><span class="ch9-kw">with</span> <span class="ch9-fn">open</span>(<span class="ch9-str">"data.txt"</span>) <span class="ch9-kw">as</span> f:</div>
    <div class="ch9-sc-line ch9-sc-indent2">content = f.read()</div>
    <div class="ch9-sc-line"><span class="ch9-kw">except</span> <span class="ch9-err">FileNotFoundError</span>:</div>
    <div class="ch9-sc-line ch9-sc-indent"><span class="ch9-fn">print</span>(<span class="ch9-str">"文件不存在！"</span>)</div>
    <div class="ch9-sc-line"><span class="ch9-kw">except</span> <span class="ch9-err">PermissionError</span>:</div>
    <div class="ch9-sc-line ch9-sc-indent"><span class="ch9-fn">print</span>(<span class="ch9-str">"没有权限！"</span>)</div>
  </div>
  <div class="theory-callout">🎯 养成好习惯：凡是涉及文件、网络、用户输入的代码，都应该加上异常处理！</div>
</div>
<style>
.ch9-safe-code{background:#0d0d1a;border-radius:10px;padding:0.6rem 0.8rem;margin:0.5rem 0;font-family:monospace;font-size:0.88rem;line-height:1.6}
.ch9-sc-indent{padding-left:1.2rem}
.ch9-sc-indent2{padding-left:2.4rem}
.ch9-kw{color:#fd79a8;font-weight:700}
.ch9-fn{color:#fdcb6e}
.ch9-str{color:#00b894}
.ch9-err{color:#e17055;font-weight:600}
.ch9-sc-line{color:#e8ecf2}
</style>`,
          codeToLoad: '# 安全的文件读取\ndef safe_read(filename):\n    try:\n        with open(filename, "r") as f:\n            return f.read()\n    except FileNotFoundError:\n        print(f"文件 {filename} 不存在！")\n        return None\n\n# 测试\ncontent = safe_read("test.txt")\nif content:\n    print("读取成功:", content)\n\ncontent2 = safe_read("不存在的文件.txt")\nif content2 is None:\n    print("读取失败，但程序没有崩溃！")\n\nprint("\\n程序继续正常运行 ✅")'
        }
      ],
      challenge: {
        desc: "🎯 写一个安全的计算器：接收两个数字和运算符(+,-,*,/)，处理所有可能的错误（非数字、除以零等），给出友好提示。",
        hint: 'def safe_calc(a_str, op, b_str):\n    try:\n        a = float(a_str)\n        b = float(b_str)\n        if op == "+":\n            return a + b\n        elif op == "-":\n            return a - b\n        elif op == "*":\n            return a * b\n        elif op == "/":\n            return a / b\n    except ValueError:\n        return "请输入有效数字"\n    except ZeroDivisionError:\n        return "不能除以零"\n\nprint(safe_calc("10", "+", "5"))\nprint(safe_calc("10", "/", "0"))\nprint(safe_calc("abc", "+", "5"))',
        template: '# 安全计算器\n',
        check: function(output) { return output.trim().split('\n').length >= 2; }
      }
    }
  ]
};

registerChapter('python', CHAPTER9);
