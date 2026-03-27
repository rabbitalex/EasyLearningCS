// 第十章：项目实战
const CHAPTER10 = {
  chapter: "第十章：项目实战",
  icon: "🎯",
  lessons: [
    {
      id: "10-1",
      title: "猜数字游戏",
      xp: 50,
      code: 'import random\n\nsecret = random.randint(1, 100)\nattempts = 0\nmax_attempts = 7\n\nprint("欢迎来到猜数字游戏！")\nprint("我想了一个1-100的数字，你有7次机会")\n\nwhile attempts < max_attempts:\n    guess = int(input("请输入你的猜测: "))\n    attempts += 1\n    \n    if guess == secret:\n        print(f"恭喜！你用了{attempts}次猜对了！")\n        break\n    elif guess > secret:\n        print("太大了！")\n    else:\n        print("太小了！")\n    \n    print(f"还剩{max_attempts - attempts}次机会")\n\nif attempts >= max_attempts:\n    print(f"游戏结束！答案是{secret}")',
      steps: [
        {
          title: "项目概览",
          content: `<p>让我们用所学知识做一个完整的<strong>猜数字游戏</strong>！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎮 猜数字游戏 — 项目需求</div>
  <div class="ch10-req-grid">
    <div class="ch10-req-card" style="animation-delay:0s">
      <div class="ch10-req-icon">🎲</div>
      <div class="ch10-req-text">电脑随机生成 1-100 的数字</div>
    </div>
    <div class="ch10-req-card" style="animation-delay:0.1s">
      <div class="ch10-req-icon">🔢</div>
      <div class="ch10-req-text">玩家有 7 次猜测机会</div>
    </div>
    <div class="ch10-req-card" style="animation-delay:0.2s">
      <div class="ch10-req-icon">📢</div>
      <div class="ch10-req-text">每次猜测后提示"大了"或"小了"</div>
    </div>
    <div class="ch10-req-card" style="animation-delay:0.3s">
      <div class="ch10-req-icon">🏆</div>
      <div class="ch10-req-text">猜对或用完机会游戏结束</div>
    </div>
  </div>
  <div class="ch10-knowledge-used">
    <div class="ch10-ku-title">📚 用到的知识点</div>
    <div class="ch10-ku-tags">
      <span class="ch10-tag" style="background:rgba(253,121,168,0.15);color:#fd79a8">random模块</span>
      <span class="ch10-tag" style="background:rgba(108,92,231,0.15);color:#FF9800;font-weight:700">while循环</span>
      <span class="ch10-tag" style="background:rgba(0,184,148,0.15);color:#00b894">if-elif-else</span>
      <span class="ch10-tag" style="background:rgba(253,203,110,0.15);color:#fdcb6e">input输入</span>
      <span class="ch10-tag" style="background:rgba(0,206,201,0.15);color:#00cec9">break退出</span>
      <span class="ch10-tag" style="background:rgba(225,112,85,0.15);color:#e17055">f-string格式化</span>
    </div>
  </div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,206,201,0.08));border:1px solid rgba(108,92,231,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;font-weight:700;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(108,92,231,0.1);border-left:3px solid #6c5ce7;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
.ch10-req-grid{display:flex;flex-direction:column;gap:0.3rem;margin:0.5rem 0}
.ch10-req-card{display:flex;align-items:center;gap:0.5rem;background:#0d0d1a;border-radius:8px;padding:0.45rem 0.7rem;animation:ch10SlideIn 0.3s ease both;transition:transform 0.2s}
.ch10-req-card:hover{transform:translateX(5px)}
@keyframes ch10SlideIn{from{opacity:0;transform:translateX(-15px)}to{opacity:1;transform:translateX(0)}}
.ch10-req-icon{font-size:1rem;flex-shrink:0}
.ch10-req-text{font-size:0.88rem;color:#e8ecf2}
.ch10-knowledge-used{margin-top:0.8rem}
.ch10-ku-title{font-size:0.88rem;font-weight:700;color:#fdcb6e;margin-bottom:0.3rem}
.ch10-ku-tags{display:flex;flex-wrap:wrap;gap:0.3rem}
.ch10-tag{font-size:0.92rem;font-weight:600;padding:0.15rem 0.5rem;border-radius:20px}
</style>`
        },
        {
          title: "代码拆解分析",
          content: `<p>让我们一步步分析这个游戏的核心逻辑：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🧩 游戏逻辑拆解</div>
  <div class="ch10-logic-flow">
    <div class="ch10-lf-step" style="border-color:rgba(253,121,168,0.4)">
      <div class="ch10-lf-phase">初始化</div>
      <div class="ch10-lf-code">secret = random.randint(1, 100)
attempts = 0</div>
    </div>
    <div class="ch10-lf-arrow">⬇️</div>
    <div class="ch10-lf-step" style="border-color:rgba(108,92,231,0.4)">
      <div class="ch10-lf-phase">循环主体</div>
      <div class="ch10-lf-code">while attempts < max_attempts:
    guess = int(input("猜: "))</div>
    </div>
    <div class="ch10-lf-arrow">⬇️</div>
    <div class="ch10-lf-step" style="border-color:rgba(253,203,110,0.4)">
      <div class="ch10-lf-phase">判断比较</div>
      <div class="ch10-lf-code">if guess == secret: 猜对 → break
elif guess > secret: 提示"大了"
else: 提示"小了"</div>
    </div>
    <div class="ch10-lf-arrow">⬇️</div>
    <div class="ch10-lf-step" style="border-color:rgba(0,184,148,0.4)">
      <div class="ch10-lf-phase">结束判断</div>
      <div class="ch10-lf-code">猜对? → 胜利！
次数用完? → 揭晓答案</div>
    </div>
  </div>
</div>
<style>
.ch10-logic-flow{display:flex;flex-direction:column;align-items:center;gap:0.15rem;margin:0.5rem 0}
.ch10-lf-step{background:#0d0d1a;border-radius:10px;padding:0.5rem 0.7rem;width:100%;border-left:4px solid}
.ch10-lf-phase{font-size:0.88rem;font-weight:700;color:#FF9800;font-weight:700;margin-bottom:0.2rem}
.ch10-lf-code{font-family:monospace;font-size:0.8rem;color:#e8ecf2;white-space:pre;line-height:1.4}
.ch10-lf-arrow{font-size:0.85rem;color:#555}
</style>`,
          codeToLoad: 'import random\n\nsecret = random.randint(1, 100)\nattempts = 0\nmax_attempts = 7\n\nprint("🎮 欢迎来到猜数字游戏！")\nprint(f"我想了一个1-100的数字，你有{max_attempts}次机会")\nprint(f"（调试信息：答案是{secret}）")\n\nwhile attempts < max_attempts:\n    guess = int(input("请输入你的猜测: "))\n    attempts += 1\n    \n    if guess == secret:\n        print(f"🎉 恭喜！你用了{attempts}次猜对了！")\n        break\n    elif guess > secret:\n        print("📈 太大了！")\n    else:\n        print("📉 太小了！")\n    \n    print(f"还剩{max_attempts - attempts}次机会")'
        },
        {
          title: "二分查找策略",
          content: `<p>聪明的玩家可以用<strong>二分查找</strong>的思想，最多只需要 7 次就能猜对！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🧠 最优策略：二分法</div>
  <div class="ch10-binary-demo">
    <div class="ch10-bd-row" style="animation-delay:0s">
      <span class="ch10-bd-round">第1次</span>
      <span class="ch10-bd-guess">猜 50</span>
      <span class="ch10-bd-range">范围: 1~100</span>
      <span class="ch10-bd-result">→ 太大了</span>
    </div>
    <div class="ch10-bd-row" style="animation-delay:0.1s">
      <span class="ch10-bd-round">第2次</span>
      <span class="ch10-bd-guess">猜 25</span>
      <span class="ch10-bd-range">范围: 1~49</span>
      <span class="ch10-bd-result">→ 太小了</span>
    </div>
    <div class="ch10-bd-row" style="animation-delay:0.2s">
      <span class="ch10-bd-round">第3次</span>
      <span class="ch10-bd-guess">猜 37</span>
      <span class="ch10-bd-range">范围: 26~49</span>
      <span class="ch10-bd-result">→ 太大了</span>
    </div>
    <div class="ch10-bd-row" style="animation-delay:0.3s">
      <span class="ch10-bd-round">第4次</span>
      <span class="ch10-bd-guess">猜 31</span>
      <span class="ch10-bd-range">范围: 26~36</span>
      <span class="ch10-bd-result">→ 猜对了！🎉</span>
    </div>
  </div>
  <div class="ch10-math-box">
    <span>数学原理：</span>
    <span class="ch10-math">2<sup>7</sup> = 128 > 100</span>
    <span style="color:#c8d0e0;font-size:0.92rem">所以7次足够猜出1-100</span>
  </div>
  <div class="theory-callout">💡 二分查找是计算机科学中最基础、最重要的算法之一！每次把范围缩小一半。</div>
</div>
<style>
.ch10-binary-demo{display:flex;flex-direction:column;gap:0.25rem;margin:0.5rem 0}
.ch10-bd-row{display:flex;align-items:center;gap:0.3rem;background:#0d0d1a;border-radius:6px;padding:0.3rem 0.5rem;animation:ch10SlideIn 0.3s ease both;font-size:0.85rem}
.ch10-bd-round{color:#fdcb6e;font-weight:700;min-width:40px}
.ch10-bd-guess{color:#FF9800;font-weight:700;font-family:monospace;font-weight:600;min-width:40px}
.ch10-bd-range{color:#c8d0e0;font-size:0.92rem;flex:1}
.ch10-bd-result{color:#00b894;font-size:0.8rem}
.ch10-math-box{background:#0d0d1a;border-radius:8px;padding:0.4rem 0.6rem;margin-top:0.4rem;display:flex;align-items:center;gap:0.4rem;font-size:0.88rem;color:#e8ecf2}
.ch10-math{color:#fd79a8;font-weight:700;font-family:monospace}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 改进猜数字游戏：添加难度选择（简单：1-50/10次，普通：1-100/7次，困难：1-200/8次），并记录每次猜测的历史。",
        hint: 'import random\ndifficulty = input("选择难度(简单/普通/困难): ")\nif difficulty == "简单":\n    max_num, max_att = 50, 10\nelif difficulty == "困难":\n    max_num, max_att = 200, 8\nelse:\n    max_num, max_att = 100, 7\nsecret = random.randint(1, max_num)\nhistory = []\n# ...游戏逻辑',
        template: '# 改进版猜数字游戏\nimport random\n\n# 在这里添加难度选择\n',
        check: function(output) { return true; }
      }
    },
    {
      id: "10-2",
      title: "成绩管理系统",
      xp: 50,
      code: 'students = [\n    {"name": "小明", "score": 95},\n    {"name": "小红", "score": 87},\n    {"name": "小刚", "score": 72},\n    {"name": "小李", "score": 90},\n    {"name": "小王", "score": 65}\n]\n\ndef show_all(students):\n    print("=== 所有学生 ===")\n    for s in students:\n        print(f"  {s[\'name\']}: {s[\'score\']}分")\n\ndef calc_stats(students):\n    scores = [s["score"] for s in students]\n    print(f"\\n=== 统计信息 ===")\n    print(f"  平均分: {sum(scores)/len(scores):.1f}")\n    print(f"  最高分: {max(scores)}")\n    print(f"  最低分: {min(scores)}")\n\nshow_all(students)\ncalc_stats(students)',
      steps: [
        {
          title: "项目设计",
          content: `<p>做一个<strong>成绩管理系统</strong>，整合前面学到的所有知识！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📋 成绩管理系统 — 功能架构</div>
  <div class="ch10-arch-diagram">
    <div class="ch10-arch-center">
      <div class="ch10-arch-core">📊<br>成绩管理</div>
    </div>
    <div class="ch10-arch-modules">
      <div class="ch10-arch-mod" style="animation-delay:0s;border-color:rgba(253,121,168,0.4)">
        <div class="ch10-am-icon">➕</div>
        <div class="ch10-am-name">添加学生</div>
      </div>
      <div class="ch10-arch-mod" style="animation-delay:0.1s;border-color:rgba(108,92,231,0.4)">
        <div class="ch10-am-icon">📋</div>
        <div class="ch10-am-name">显示全部</div>
      </div>
      <div class="ch10-arch-mod" style="animation-delay:0.2s;border-color:rgba(0,184,148,0.4)">
        <div class="ch10-am-icon">🔍</div>
        <div class="ch10-am-name">查找学生</div>
      </div>
      <div class="ch10-arch-mod" style="animation-delay:0.3s;border-color:rgba(253,203,110,0.4)">
        <div class="ch10-am-icon">📈</div>
        <div class="ch10-am-name">统计分析</div>
      </div>
      <div class="ch10-arch-mod" style="animation-delay:0.4s;border-color:rgba(0,206,201,0.4)">
        <div class="ch10-am-icon">🏅</div>
        <div class="ch10-am-name">排行榜</div>
      </div>
      <div class="ch10-arch-mod" style="animation-delay:0.5s;border-color:rgba(225,112,85,0.4)">
        <div class="ch10-am-icon">💾</div>
        <div class="ch10-am-name">保存数据</div>
      </div>
    </div>
  </div>
  <div class="ch10-knowledge-used">
    <div class="ch10-ku-title">📚 综合知识点</div>
    <div class="ch10-ku-tags">
      <span class="ch10-tag" style="background:rgba(253,121,168,0.15);color:#fd79a8">列表&字典</span>
      <span class="ch10-tag" style="background:rgba(108,92,231,0.15);color:#FF9800;font-weight:700">函数封装</span>
      <span class="ch10-tag" style="background:rgba(0,184,148,0.15);color:#00b894">循环遍历</span>
      <span class="ch10-tag" style="background:rgba(253,203,110,0.15);color:#fdcb6e">条件判断</span>
      <span class="ch10-tag" style="background:rgba(0,206,201,0.15);color:#00cec9">排序算法</span>
      <span class="ch10-tag" style="background:rgba(225,112,85,0.15);color:#e17055">文件操作</span>
    </div>
  </div>
</div>
<style>
.ch10-arch-diagram{margin:0.5rem 0}
.ch10-arch-center{text-align:center;margin-bottom:0.5rem}
.ch10-arch-core{display:inline-block;background:linear-gradient(135deg,rgba(108,92,231,0.15),rgba(253,121,168,0.15));border:2px solid rgba(108,92,231,0.3);border-radius:50%;width:80px;height:80px;line-height:1.3;font-size:0.88rem;font-weight:700;color:#FF9800;font-weight:700;display:inline-flex;align-items:center;justify-content:center;text-align:center}
.ch10-arch-modules{display:grid;grid-template-columns:repeat(3,1fr);gap:0.35rem}
.ch10-arch-mod{background:#0d0d1a;border-radius:10px;padding:0.5rem;text-align:center;border-top:3px solid;animation:ch10SlideIn 0.3s ease both;transition:transform 0.2s}
.ch10-arch-mod:hover{transform:translateY(-3px)}
.ch10-am-icon{font-size:1.1rem}
.ch10-am-name{font-size:0.8rem;color:#e8ecf2;font-weight:600;margin-top:0.1rem}
</style>`
        },
        {
          title: "数据结构设计",
          content: `<p>好的项目从好的<strong>数据结构设计</strong>开始：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🗂️ 数据存储方案</div>
  <div class="ch10-data-design">
    <div class="ch10-dd-block">
      <div class="ch10-dd-title">用列表存储所有学生</div>
      <div class="ch10-dd-code">students = [...]</div>
    </div>
    <div class="ch10-dd-arrow">▼</div>
    <div class="ch10-dd-block">
      <div class="ch10-dd-title">每个学生是一个字典</div>
      <div class="ch10-dd-code">{"name": "小明", "score": 95}</div>
    </div>
    <div class="ch10-dd-arrow">▼</div>
    <div class="ch10-dd-block">
      <div class="ch10-dd-title">完整数据结构</div>
      <div class="ch10-dd-code">[
  {"name": "小明", "score": 95},
  {"name": "小红", "score": 87},
  {"name": "小刚", "score": 72}
]</div>
    </div>
  </div>
  <div class="theory-callout">💡 "列表嵌套字典"是真实项目中最常见的数据结构之一，后端API返回的JSON数据也常常是这种格式！</div>
</div>
<style>
.ch10-data-design{display:flex;flex-direction:column;align-items:center;gap:0.1rem;margin:0.5rem 0}
.ch10-dd-block{background:#0d0d1a;border-radius:10px;padding:0.5rem 0.7rem;width:100%;border:1px solid rgba(108,92,231,0.15)}
.ch10-dd-title{font-size:0.82rem;color:#fdcb6e;font-weight:700;margin-bottom:0.2rem}
.ch10-dd-code{font-family:monospace;font-size:0.82rem;color:#FF9800;font-weight:700;white-space:pre;line-height:1.4}
.ch10-dd-arrow{font-size:0.85rem;color:#555}
</style>`,
          codeToLoad: 'students = [\n    {"name": "小明", "score": 95},\n    {"name": "小红", "score": 87},\n    {"name": "小刚", "score": 72},\n    {"name": "小李", "score": 90},\n    {"name": "小王", "score": 65}\n]\n\nprint("学生数量:", len(students))\nprint("第一个学生:", students[0])\nprint("第一个学生的名字:", students[0]["name"])\n\n# 遍历所有学生\nfor s in students:\n    grade = "优秀" if s["score"] >= 90 else "良好" if s["score"] >= 80 else "及格" if s["score"] >= 60 else "不及格"\n    print(f"{s[\'name\']}: {s[\'score\']}分 - {grade}")'
        },
        {
          title: "功能实现",
          content: `<p>把每个功能封装成<strong>独立的函数</strong>，这就是模块化编程的思想：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔧 函数设计清单</div>
  <div class="ch10-func-list">
    <div class="ch10-fl-item" style="border-color:rgba(253,121,168,0.3)">
      <code>show_all()</code>
      <span>展示所有学生成绩</span>
    </div>
    <div class="ch10-fl-item" style="border-color:rgba(108,92,231,0.3)">
      <code>calc_stats()</code>
      <span>计算平均分/最高/最低</span>
    </div>
    <div class="ch10-fl-item" style="border-color:rgba(0,184,148,0.3)">
      <code>find_student(name)</code>
      <span>按名字查找学生</span>
    </div>
    <div class="ch10-fl-item" style="border-color:rgba(253,203,110,0.3)">
      <code>rank_students()</code>
      <span>按成绩排名</span>
    </div>
    <div class="ch10-fl-item" style="border-color:rgba(0,206,201,0.3)">
      <code>grade_distribution()</code>
      <span>成绩等级分布</span>
    </div>
  </div>
  <div class="theory-callout">🎯 每个函数只做一件事——这就是"单一职责原则"，是编程的重要设计思想！</div>
</div>
<style>
.ch10-func-list{display:flex;flex-direction:column;gap:0.3rem;margin:0.5rem 0}
.ch10-fl-item{display:flex;justify-content:space-between;align-items:center;background:#0d0d1a;border-radius:8px;padding:0.4rem 0.6rem;border-left:3px solid}
.ch10-fl-item code{font-size:0.9rem;color:#FF9800;font-weight:700;font-weight:700}
.ch10-fl-item span{font-size:0.92rem;color:#c8d0e0}
</style>`,
          codeToLoad: 'students = [\n    {"name": "小明", "score": 95},\n    {"name": "小红", "score": 87},\n    {"name": "小刚", "score": 72},\n    {"name": "小李", "score": 90},\n    {"name": "小王", "score": 65}\n]\n\ndef show_all(data):\n    print("=== 所有学生 ===")\n    for s in data:\n        print(f"  {s[\'name\']}: {s[\'score\']}分")\n\ndef calc_stats(data):\n    scores = [s["score"] for s in data]\n    print(f"\\n=== 统计信息 ===")\n    print(f"  平均分: {sum(scores)/len(scores):.1f}")\n    print(f"  最高分: {max(scores)}")\n    print(f"  最低分: {min(scores)}")\n\ndef rank_students(data):\n    ranked = sorted(data, key=lambda x: x["score"], reverse=True)\n    print("\\n=== 排行榜 ===")\n    for i, s in enumerate(ranked):\n        medal = ["🥇","🥈","🥉"][i] if i < 3 else f" {i+1}."\n        print(f"  {medal} {s[\'name\']}: {s[\'score\']}分")\n\nshow_all(students)\ncalc_stats(students)\nrank_students(students)'
        },
        {
          title: "进阶：成绩等级分布",
          content: `<p>统计各等级的学生人数，了解整体成绩分布：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📊 成绩等级划分</div>
  <div class="ch10-grade-chart">
    <div class="ch10-gc-bar">
      <div class="ch10-gc-label">优秀 (90+)</div>
      <div class="ch10-gc-track"><div class="ch10-gc-fill" style="width:40%;background:#00b894">40%</div></div>
    </div>
    <div class="ch10-gc-bar">
      <div class="ch10-gc-label">良好 (80-89)</div>
      <div class="ch10-gc-track"><div class="ch10-gc-fill" style="width:20%;background:#a29bfe">20%</div></div>
    </div>
    <div class="ch10-gc-bar">
      <div class="ch10-gc-label">及格 (60-79)</div>
      <div class="ch10-gc-track"><div class="ch10-gc-fill" style="width:30%;background:#fdcb6e">30%</div></div>
    </div>
    <div class="ch10-gc-bar">
      <div class="ch10-gc-label">不及格 (&lt;60)</div>
      <div class="ch10-gc-track"><div class="ch10-gc-fill" style="width:10%;background:#e17055">10%</div></div>
    </div>
  </div>
  <div class="theory-callout">💡 数据可视化让枯燥的数字变得直观！真正的数据科学家每天都在做这样的事情。</div>
</div>
<style>
.ch10-grade-chart{display:flex;flex-direction:column;gap:0.35rem;margin:0.5rem 0}
.ch10-gc-bar{display:flex;align-items:center;gap:0.5rem}
.ch10-gc-label{font-size:0.8rem;color:#e8ecf2;min-width:85px;text-align:right}
.ch10-gc-track{flex:1;background:#0d0d1a;border-radius:6px;height:22px;overflow:hidden}
.ch10-gc-fill{height:100%;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:0.9rem;color:#fff;font-weight:700;animation:ch10BarGrow 0.8s ease both}
@keyframes ch10BarGrow{from{width:0%!important}}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 扩展成绩管理系统：添加 find_student(name) 函数按名字查找学生，并添加成绩等级分布统计功能。",
        hint: 'def find_student(data, name):\n    for s in data:\n        if s["name"] == name:\n            return s\n    return None\n\nresult = find_student(students, "小明")\nif result:\n    print(f"找到了: {result[\'name\']} {result[\'score\']}分")',
        template: '# 扩展成绩管理系统\nstudents = [\n    {"name": "小明", "score": 95},\n    {"name": "小红", "score": 87},\n    {"name": "小刚", "score": 72}\n]\n',
        check: function(output) { return output.indexOf("小明") !== -1 || output.indexOf("95") !== -1; }
      }
    },
    {
      id: "10-3",
      title: "石头剪刀布",
      xp: 40,
      code: 'import random\n\nchoices = ["石头", "剪刀", "布"]\nwin_rules = {"石头": "剪刀", "剪刀": "布", "布": "石头"}\n\nplayer_wins = 0\ncomputer_wins = 0\nrounds = 3\n\nfor i in range(rounds):\n    player = input(f"第{i+1}轮，请出(石头/剪刀/布): ")\n    computer = random.choice(choices)\n    print(f"电脑出: {computer}")\n    \n    if player == computer:\n        print("平局！")\n    elif win_rules[player] == computer:\n        print("你赢了！")\n        player_wins += 1\n    else:\n        print("你输了！")\n        computer_wins += 1\n\nprint(f"\\n最终比分: 你 {player_wins} - {computer_wins} 电脑")',
      steps: [
        {
          title: "项目设计",
          content: `<p>石头剪刀布是学习<strong>游戏逻辑</strong>的经典项目！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">✊✌️🖐️ 游戏规则</div>
  <div class="ch10-rps-rules">
    <div class="ch10-rps-rule" style="animation-delay:0s">
      <span class="ch10-rps-emoji">✊</span>
      <span class="ch10-rps-beats">beats</span>
      <span class="ch10-rps-emoji">✌️</span>
    </div>
    <div class="ch10-rps-rule" style="animation-delay:0.15s">
      <span class="ch10-rps-emoji">✌️</span>
      <span class="ch10-rps-beats">beats</span>
      <span class="ch10-rps-emoji">🖐️</span>
    </div>
    <div class="ch10-rps-rule" style="animation-delay:0.3s">
      <span class="ch10-rps-emoji">🖐️</span>
      <span class="ch10-rps-beats">beats</span>
      <span class="ch10-rps-emoji">✊</span>
    </div>
  </div>
  <div class="ch10-rps-design">
    <div class="ch10-rpsd-title">🧠 巧妙的数据结构</div>
    <div class="ch10-rpsd-code">win_rules = {
  "石头": "剪刀",  ← 石头赢剪刀
  "剪刀": "布",    ← 剪刀赢布
  "布": "石头"     ← 布赢石头
}</div>
    <div class="ch10-rpsd-note">用字典存储"谁赢谁"，比写一堆 if-elif 更优雅！</div>
  </div>
</div>
<style>
.ch10-rps-rules{display:flex;justify-content:center;gap:0.8rem;margin:0.5rem 0;flex-wrap:wrap}
.ch10-rps-rule{display:flex;align-items:center;gap:0.3rem;background:#0d0d1a;border-radius:10px;padding:0.4rem 0.6rem;animation:ch10SlideIn 0.3s ease both}
.ch10-rps-emoji{font-size:1.3rem}
.ch10-rps-beats{font-size:0.92rem;color:#fd79a8;font-weight:700}
.ch10-rps-design{background:#0d0d1a;border-radius:10px;padding:0.6rem 0.8rem;margin-top:0.5rem}
.ch10-rpsd-title{font-size:0.88rem;font-weight:700;color:#FF9800;font-weight:700;margin-bottom:0.3rem}
.ch10-rpsd-code{font-family:monospace;font-size:0.82rem;color:#e8ecf2;white-space:pre;line-height:1.4}
.ch10-rpsd-note{font-size:0.92rem;color:#c8d0e0;margin-top:0.3rem}
</style>`
        },
        {
          title: "核心逻辑",
          content: `<p>判断胜负的核心逻辑非常简洁：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">⚖️ 胜负判断流程</div>
  <div class="ch10-judge-flow">
    <div class="ch10-jf-step" style="border-color:rgba(253,203,110,0.4)">
      <div class="ch10-jf-condition">player == computer</div>
      <div class="ch10-jf-result" style="color:#fdcb6e">→ 平局！🤝</div>
    </div>
    <div class="ch10-jf-step" style="border-color:rgba(0,184,148,0.4)">
      <div class="ch10-jf-condition">win_rules[player] == computer</div>
      <div class="ch10-jf-result" style="color:#00b894">→ 你赢了！🎉</div>
    </div>
    <div class="ch10-jf-step" style="border-color:rgba(225,112,85,0.4)">
      <div class="ch10-jf-condition">else（其他情况）</div>
      <div class="ch10-jf-result" style="color:#e17055">→ 你输了！😢</div>
    </div>
  </div>
  <div class="theory-callout">💡 用字典查表代替多重 if 判断，这是一种叫"查表法"的编程技巧，代码更简洁高效！</div>
</div>
<style>
.ch10-judge-flow{display:flex;flex-direction:column;gap:0.3rem;margin:0.5rem 0}
.ch10-jf-step{display:flex;justify-content:space-between;align-items:center;background:#0d0d1a;border-radius:8px;padding:0.4rem 0.6rem;border-left:3px solid}
.ch10-jf-condition{font-family:monospace;font-size:0.85rem;color:#FF9800;font-weight:700}
.ch10-jf-result{font-size:0.88rem;font-weight:700}
</style>`,
          codeToLoad: 'import random\n\nchoices = ["石头", "剪刀", "布"]\nwin_rules = {"石头": "剪刀", "剪刀": "布", "布": "石头"}\n\nplayer = "石头"  # 模拟玩家出拳\ncomputer = random.choice(choices)\nprint(f"你出: {player}")\nprint(f"电脑出: {computer}")\n\nif player == computer:\n    print("🤝 平局！")\nelif win_rules[player] == computer:\n    print("🎉 你赢了！")\nelse:\n    print("😢 你输了！")'
        },
        {
          title: "添加多轮对战和统计",
          content: `<p>完整的游戏需要<strong>多轮对战</strong>和<strong>计分系统</strong>：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📊 多轮对战统计</div>
  <div class="ch10-scoreboard">
    <div class="ch10-sb-player">
      <div class="ch10-sb-icon">🧑</div>
      <div class="ch10-sb-name">你</div>
      <div class="ch10-sb-score" style="color:#00b894">2</div>
    </div>
    <div class="ch10-sb-vs">VS</div>
    <div class="ch10-sb-player">
      <div class="ch10-sb-icon">🤖</div>
      <div class="ch10-sb-name">电脑</div>
      <div class="ch10-sb-score" style="color:#e17055">1</div>
    </div>
  </div>
  <div class="ch10-round-history">
    <div class="ch10-rh-row"><span class="ch10-rh-round">第1轮</span> ✊ vs ✌️ <span style="color:#00b894">你赢</span></div>
    <div class="ch10-rh-row"><span class="ch10-rh-round">第2轮</span> 🖐️ vs 🖐️ <span style="color:#fdcb6e">平局</span></div>
    <div class="ch10-rh-row"><span class="ch10-rh-round">第3轮</span> ✌️ vs ✊ <span style="color:#e17055">你输</span></div>
  </div>
</div>
<style>
.ch10-scoreboard{display:flex;align-items:center;justify-content:center;gap:1rem;margin:0.5rem 0;background:#0d0d1a;border-radius:12px;padding:0.6rem}
.ch10-sb-player{text-align:center}
.ch10-sb-icon{font-size:1.5rem}
.ch10-sb-name{font-size:0.82rem;color:#c8d0e0;margin:0.1rem 0}
.ch10-sb-score{font-size:1.5rem;font-weight:800;font-family:monospace}
.ch10-sb-vs{font-size:0.9rem;font-weight:800;color:#fd79a8}
.ch10-round-history{display:flex;flex-direction:column;gap:0.2rem;margin-top:0.4rem}
.ch10-rh-row{background:#0d0d1a;border-radius:6px;padding:0.25rem 0.5rem;font-size:0.82rem;color:#e8ecf2}
.ch10-rh-round{color:#FF9800;font-weight:700;font-weight:700;margin-right:0.3rem}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 改进石头剪刀布：添加5轮3胜制，统计胜率，并在最后宣布最终赢家。",
        hint: 'import random\nchoices = ["石头", "剪刀", "布"]\nwin_rules = {"石头": "剪刀", "剪刀": "布", "布": "石头"}\np_wins = 0\nc_wins = 0\nwhile p_wins < 3 and c_wins < 3:\n    p = random.choice(choices)\n    c = random.choice(choices)\n    if win_rules[p] == c:\n        p_wins += 1\n    elif p != c:\n        c_wins += 1\nprint(f"你 {p_wins} - {c_wins} 电脑")',
        template: '# 石头剪刀布 - 5轮3胜\nimport random\n',
        check: function(output) { return true; }
      }
    },
    {
      id: "10-4",
      title: "密码生成器",
      xp: 45,
      code: 'import random\n\ndef generate_password(length=12):\n    """生成随机密码"""\n    lower = "abcdefghijklmnopqrstuvwxyz"\n    upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"\n    digits = "0123456789"\n    symbols = "!@#$%&*"\n    \n    all_chars = lower + upper + digits + symbols\n    \n    # 确保至少包含每种类型一个\n    password = [\n        random.choice(lower),\n        random.choice(upper),\n        random.choice(digits),\n        random.choice(symbols)\n    ]\n    \n    # 剩余位置随机填充\n    for i in range(length - 4):\n        password.append(random.choice(all_chars))\n    \n    # 打乱顺序\n    random.shuffle(password)\n    return "".join(password)\n\n# 生成3个密码\nfor i in range(3):\n    pwd = generate_password(12)\n    print(f"密码{i+1}: {pwd}")',
      steps: [
        {
          title: "为什么需要密码生成器？",
          content: `<p>好密码的标准是<strong>长、复杂、不重复</strong>。让程序帮你生成！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔐 密码安全等级</div>
  <div class="ch10-pwd-levels">
    <div class="ch10-pwl-row" style="animation-delay:0s">
      <div class="ch10-pwl-bar ch10-pwl-weak">
        <div class="ch10-pwl-fill" style="width:20%"></div>
      </div>
      <span class="ch10-pwl-example">123456</span>
      <span class="ch10-pwl-label" style="color:#e17055">极弱 ❌</span>
    </div>
    <div class="ch10-pwl-row" style="animation-delay:0.1s">
      <div class="ch10-pwl-bar ch10-pwl-medium">
        <div class="ch10-pwl-fill" style="width:50%"></div>
      </div>
      <span class="ch10-pwl-example">hello2024</span>
      <span class="ch10-pwl-label" style="color:#fdcb6e">中等 ⚠️</span>
    </div>
    <div class="ch10-pwl-row" style="animation-delay:0.2s">
      <div class="ch10-pwl-bar ch10-pwl-strong">
        <div class="ch10-pwl-fill" style="width:100%"></div>
      </div>
      <span class="ch10-pwl-example">K7#mP2&xQ9nR</span>
      <span class="ch10-pwl-label" style="color:#00b894">极强 ✅</span>
    </div>
  </div>
  <div class="ch10-pwd-rules">
    <div class="ch10-pr-title">🔑 强密码规则</div>
    <div class="ch10-pr-grid">
      <span class="ch10-pr-item">✅ 至少12位</span>
      <span class="ch10-pr-item">✅ 含大写字母</span>
      <span class="ch10-pr-item">✅ 含小写字母</span>
      <span class="ch10-pr-item">✅ 含数字</span>
      <span class="ch10-pr-item">✅ 含特殊符号</span>
      <span class="ch10-pr-item">✅ 不重复使用</span>
    </div>
  </div>
</div>
<style>
.ch10-pwd-levels{display:flex;flex-direction:column;gap:0.35rem;margin:0.5rem 0}
.ch10-pwl-row{display:flex;align-items:center;gap:0.4rem;animation:ch10SlideIn 0.3s ease both}
.ch10-pwl-bar{width:60px;height:8px;background:#1a1a2e;border-radius:4px;overflow:hidden}
.ch10-pwl-fill{height:100%;border-radius:4px}
.ch10-pwl-weak .ch10-pwl-fill{background:#e17055}
.ch10-pwl-medium .ch10-pwl-fill{background:#fdcb6e}
.ch10-pwl-strong .ch10-pwl-fill{background:#00b894}
.ch10-pwl-example{font-family:monospace;font-size:0.82rem;color:#e8ecf2;min-width:100px}
.ch10-pwl-label{font-size:0.92rem;font-weight:700}
.ch10-pwd-rules{background:#0d0d1a;border-radius:10px;padding:0.5rem 0.7rem;margin-top:0.5rem}
.ch10-pr-title{font-size:0.88rem;font-weight:700;color:#fdcb6e;margin-bottom:0.3rem}
.ch10-pr-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0.2rem}
.ch10-pr-item{font-size:0.92rem;color:#c8d0e0}
</style>`
        },
        {
          title: "代码实现",
          content: `<p>密码生成器的核心思路：<strong>准备字符池 → 确保多样性 → 随机组合 → 打乱顺序</strong></p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🧪 密码生成流程</div>
  <div class="ch10-gen-flow">
    <div class="ch10-gf-step" style="animation-delay:0s;border-color:rgba(253,121,168,0.4)">
      <div class="ch10-gf-label">①准备字符池</div>
      <div class="ch10-gf-chars">
        <span style="color:#fd79a8">a-z</span>
        <span style="color:#FF9800;font-weight:700">A-Z</span>
        <span style="color:#fdcb6e">0-9</span>
        <span style="color:#00b894">!@#$</span>
      </div>
    </div>
    <div class="ch10-gf-arrow">⬇️</div>
    <div class="ch10-gf-step" style="animation-delay:0.15s;border-color:rgba(108,92,231,0.4)">
      <div class="ch10-gf-label">②保证每类至少1个</div>
      <div class="ch10-gf-sample">
        <span style="color:#fd79a8">k</span>
        <span style="color:#FF9800;font-weight:700">M</span>
        <span style="color:#fdcb6e">7</span>
        <span style="color:#00b894">#</span>
      </div>
    </div>
    <div class="ch10-gf-arrow">⬇️</div>
    <div class="ch10-gf-step" style="animation-delay:0.3s;border-color:rgba(0,184,148,0.4)">
      <div class="ch10-gf-label">③随机填充 + 打乱</div>
      <div class="ch10-gf-result">K7#mP2&xQ9nR</div>
    </div>
  </div>
</div>
<style>
.ch10-gen-flow{display:flex;flex-direction:column;align-items:center;gap:0.1rem;margin:0.5rem 0}
.ch10-gf-step{background:#0d0d1a;border-radius:10px;padding:0.5rem 0.7rem;width:100%;border-left:4px solid}
.ch10-gf-label{font-size:0.82rem;color:#e8ecf2;font-weight:700;margin-bottom:0.15rem}
.ch10-gf-chars,.ch10-gf-sample{display:flex;gap:0.4rem;font-family:monospace;font-size:0.8rem;font-weight:600}
.ch10-gf-result{font-family:monospace;font-size:0.9rem;font-weight:700;color:#00b894;letter-spacing:1px}
.ch10-gf-arrow{font-size:0.92rem;color:#555}
</style>`,
          codeToLoad: 'import random\n\ndef generate_password(length=12):\n    lower = "abcdefghijklmnopqrstuvwxyz"\n    upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"\n    digits = "0123456789"\n    symbols = "!@#$%&*"\n    \n    all_chars = lower + upper + digits + symbols\n    password = [\n        random.choice(lower),\n        random.choice(upper),\n        random.choice(digits),\n        random.choice(symbols)\n    ]\n    \n    for i in range(length - 4):\n        password.append(random.choice(all_chars))\n    \n    random.shuffle(password)\n    return "".join(password)\n\nfor i in range(5):\n    pwd = generate_password(12)\n    print(f"密码{i+1}: {pwd}")'
        },
        {
          title: "密码强度评估",
          content: `<p>好的密码生成器还应该能<strong>评估密码强度</strong>：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📏 强度评估标准</div>
  <div class="ch10-eval-criteria">
    <div class="ch10-ec-item" style="animation-delay:0s">
      <div class="ch10-ec-check">✅</div>
      <div class="ch10-ec-text">长度 ≥ 8：<span class="ch10-ec-score">+1分</span></div>
    </div>
    <div class="ch10-ec-item" style="animation-delay:0.08s">
      <div class="ch10-ec-check">✅</div>
      <div class="ch10-ec-text">长度 ≥ 12：<span class="ch10-ec-score">+1分</span></div>
    </div>
    <div class="ch10-ec-item" style="animation-delay:0.16s">
      <div class="ch10-ec-check">✅</div>
      <div class="ch10-ec-text">包含大写字母：<span class="ch10-ec-score">+1分</span></div>
    </div>
    <div class="ch10-ec-item" style="animation-delay:0.24s">
      <div class="ch10-ec-check">✅</div>
      <div class="ch10-ec-text">包含小写字母：<span class="ch10-ec-score">+1分</span></div>
    </div>
    <div class="ch10-ec-item" style="animation-delay:0.32s">
      <div class="ch10-ec-check">✅</div>
      <div class="ch10-ec-text">包含数字：<span class="ch10-ec-score">+1分</span></div>
    </div>
    <div class="ch10-ec-item" style="animation-delay:0.4s">
      <div class="ch10-ec-check">✅</div>
      <div class="ch10-ec-text">包含特殊符号：<span class="ch10-ec-score">+1分</span></div>
    </div>
  </div>
  <div class="ch10-eval-result">
    <span>6分 → </span>
    <span class="ch10-eval-bar">
      <span class="ch10-eval-fill" style="width:100%;background:linear-gradient(90deg,#e17055,#fdcb6e,#00b894)"></span>
    </span>
    <span style="color:#00b894;font-weight:700">极强！</span>
  </div>
</div>
<style>
.ch10-eval-criteria{display:grid;grid-template-columns:1fr 1fr;gap:0.25rem;margin:0.5rem 0}
.ch10-ec-item{display:flex;align-items:center;gap:0.3rem;background:#0d0d1a;border-radius:6px;padding:0.3rem 0.5rem;animation:ch10SlideIn 0.3s ease both}
.ch10-ec-check{font-size:0.85rem}
.ch10-ec-text{font-size:0.8rem;color:#e8ecf2}
.ch10-ec-score{color:#00b894;font-weight:600}
.ch10-eval-result{display:flex;align-items:center;gap:0.4rem;margin-top:0.5rem;font-size:0.88rem;color:#e8ecf2}
.ch10-eval-bar{flex:1;height:10px;background:#1a1a2e;border-radius:5px;overflow:hidden}
.ch10-eval-fill{display:block;height:100%;border-radius:5px;animation:ch10BarGrow 1s ease both}
</style>`,
          codeToLoad: 'import random\n\ndef check_strength(pwd):\n    """评估密码强度"""\n    score = 0\n    if len(pwd) >= 8: score += 1\n    if len(pwd) >= 12: score += 1\n    \n    has_lower = False\n    has_upper = False\n    has_digit = False\n    has_symbol = False\n    \n    for c in pwd:\n        if c.islower(): has_lower = True\n        elif c.isupper(): has_upper = True\n        elif c.isdigit(): has_digit = True\n        else: has_symbol = True\n    \n    if has_lower: score += 1\n    if has_upper: score += 1\n    if has_digit: score += 1\n    if has_symbol: score += 1\n    \n    levels = {0:"极弱",1:"弱",2:"一般",3:"中等",4:"较强",5:"强",6:"极强"}\n    return score, levels.get(score, "极强")\n\n# 测试不同密码\ntest_passwords = ["123456", "hello2024", "Hello2024!", "K7#mP2&xQ9nR"]\nfor pwd in test_passwords:\n    score, level = check_strength(pwd)\n    bar = "█" * score + "░" * (6 - score)\n    print(f"{pwd:15s} [{bar}] {score}/6 {level}")'
        }
      ],
      challenge: {
        desc: "🎯 创建一个完整的密码工具：能生成指定长度的密码，并自动评估生成的密码强度。生成3个不同长度（8位、12位、16位）的密码并评估。",
        hint: 'import random\ndef gen(length):\n    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%"\n    return "".join(random.choice(chars) for _ in range(length))\n\nfor l in [8, 12, 16]:\n    pwd = gen(l)\n    print(f"{l}位密码: {pwd}")',
        template: '# 密码生成+评估工具\nimport random\n',
        check: function(output) { return output.trim().split('\n').length >= 3; }
      }
    }
  ]
};

registerChapter('python', CHAPTER10);
