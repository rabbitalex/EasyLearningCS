// 第十五章：IO编程
const CHAPTER16 = {
  chapter: "第十五章：IO编程",
  icon: "💾",
  lessons: [
    {
      id: "15-1",
      title: "文件读写进阶",
      xp: 25,
      code: '# 模拟文件操作（浏览器环境）\ncontent = "第一行：Hello\\n第二行：World\\n第三行：Python"\nlines = content.split("\\n")\nfor i, line in enumerate(lines, 1):\n    print(f"行{i}: {line}")\nprint(f"\\n共{len(lines)}行")',
      steps: [
        {
          title: "文件读写基础",
          content: `<p>Python读写文件就像打开📖翻书一样自然！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📖 文件操作三步曲</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">①</span><span class="ch1-vf-code">open('file.txt', 'r')</span><span class="ch1-vf-desc">打开文件</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">②</span><span class="ch1-vf-code">f.read() / f.write()</span><span class="ch1-vf-desc">读写内容</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">③</span><span class="ch1-vf-code">f.close()</span><span class="ch1-vf-desc">关闭文件</span></div>
  </div>
  <div class="theory-callout">💡 推荐使用 <code>with open(...) as f:</code> 语法，自动关闭文件，更安全！</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(253,121,168,0.08),rgba(0,206,201,0.08));border:1px solid rgba(253,121,168,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(253,121,168,0.1);border-left:3px solid #fd79a8;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
</style>`
        },
        {
          title: "文件打开模式",
          content: `<p>不同的打开模式决定了你能对文件做什么：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📋 文件模式速查</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">'r'</span><span class="ch1-vf-code">只读（默认）</span><span class="ch1-vf-desc">文件必须存在</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">'w'</span><span class="ch1-vf-code">写入（覆盖）</span><span class="ch1-vf-desc">不存在则创建</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">'a'</span><span class="ch1-vf-code">追加</span><span class="ch1-vf-desc">在末尾添加</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">'rb'</span><span class="ch1-vf-code">二进制读</span><span class="ch1-vf-desc">读取图片等</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">'r+'</span><span class="ch1-vf-code">读写</span><span class="ch1-vf-desc">既能读又能写</span></div>
  </div>
</div>`,
          codeToLoad: '# 模拟with open语法\nclass FakeFile:\n    def __init__(self, content):\n        self.lines = content.split("\\n")\n    def read(self):\n        return "\\n".join(self.lines)\n    def readlines(self):\n        return self.lines\n\n# 模拟读取文件\nf = FakeFile("Python是最好的语言\\n简单优雅\\n功能强大")\nprint("读取全部:", f.read())\nprint("\\n逐行读取:")\nfor line in f.readlines():\n    print(f"  -> {line}")'
        }
      ],
      challenge: {
        desc: "🎯 模拟读取一个CSV文件，解析'姓名,分数'格式的数据并打印",
        hint: 'csv_data = "小明,95\\n小红,88\\n小刚,92"\nlines = csv_data.split("\\n")\nfor line in lines:\n    name, score = line.split(",")\n    print(f"{name}: {score}分")',
        template: '# 模拟CSV解析\ncsv_data = "小明,95\\n小红,88\\n小刚,92"\n',
        check: function(output) { return output.indexOf("小明") !== -1 && output.indexOf("分") !== -1; }
      }
    },
    {
      id: "15-2",
      title: "JSON序列化 - 数据存取",
      xp: 25,
      code: 'import json\n\ndata = {\n    "name": "小明",\n    "age": 10,\n    "hobbies": ["编程", "画画", "游泳"]\n}\n\n# 序列化：Python对象 → JSON字符串\njson_str = json.dumps(data, ensure_ascii=False)\nprint("JSON:", json_str)\n\n# 反序列化：JSON字符串 → Python对象\nobj = json.loads(json_str)\nprint(f"姓名: {obj[\'name\']}")\nprint(f"爱好: {obj[\'hobbies\']}")',
      steps: [
        {
          title: "JSON是什么？",
          content: `<p><strong>JSON</strong>（JavaScript Object Notation）是最流行的数据交换格式！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📦 JSON序列化</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">序列化</span><span class="ch1-vf-code">json.dumps(obj)</span><span class="ch1-vf-desc">Python对象 → JSON字符串</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">反序列化</span><span class="ch1-vf-code">json.loads(str)</span><span class="ch1-vf-desc">JSON字符串 → Python对象</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">写文件</span><span class="ch1-vf-code">json.dump(obj, f)</span><span class="ch1-vf-desc">直接写入文件</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">读文件</span><span class="ch1-vf-code">json.load(f)</span><span class="ch1-vf-desc">从文件读取</span></div>
  </div>
  <div class="theory-callout">💡 JSON是Web开发中最常用的数据格式，几乎所有语言都支持！</div>
</div>`
        }
      ],
      challenge: {
        desc: "🎯 创建一个学生成绩字典，用json.dumps转成JSON字符串再用json.loads转回来",
        hint: 'import json\nstudents = {"class": "五年级", "students": [{"name":"小明","score":95},{"name":"小红","score":88}]}\njson_str = json.dumps(students, ensure_ascii=False, indent=2)\nprint(json_str)\ndata = json.loads(json_str)\nfor s in data["students"]:\n    print(f"{s[\"name\"]}: {s[\"score\"]}分")',
        template: 'import json\n# JSON练习\n',
        check: function(output) { return output.indexOf("name") !== -1 || output.indexOf("分") !== -1; }
      }
    },
    {
      id: "15-3",
      title: "StringIO - 内存中的文件",
      xp: 20,
      code: '# 模拟 StringIO: 内存中的虚拟文件\nclass StringIO:\n    def __init__(self, text=""):\n        self.data = text\n    def write(self, s):\n        self.data = self.data + s\n    def getvalue(self):\n        return self.data\n    def readlines(self):\n        return self.data.split("\\n")\n\n# 写入 StringIO\nf = StringIO()\nf.write("Hello ")\nf.write("World!")\nprint("写入内容:", f.getvalue())\n\n# 读取 StringIO\nf2 = StringIO("第一行\\n第二行\\n第三行")\nfor line in f2.readlines():\n    print("读取:", line)',
      steps: [
        {
          title: "StringIO - 在内存中读写",
          content: `<p><code>StringIO</code> 让你像操作文件一样操作字符串，全在内存中进行！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">💭 内存中的"虚拟文件"</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">写</span><span class="ch1-vf-code">f = StringIO()<br>f.write("内容")</span><span class="ch1-vf-desc">像写文件一样</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">读</span><span class="ch1-vf-code">f = StringIO("数据")<br>f.read()</span><span class="ch1-vf-desc">像读文件一样</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">取</span><span class="ch1-vf-code">f.getvalue()</span><span class="ch1-vf-desc">获取全部内容</span></div>
  </div>
  <div class="theory-callout">💡 在标准Python中使用 <code>from io import StringIO</code>。这里我们用纯代码模拟其原理！<br>StringIO适合需要文件接口但不想真正创建文件的场景，如<strong>单元测试</strong>！</div>
</div>`
        }
      ],
      challenge: {
        desc: "🎯 用StringIO写入3种水果名称，然后用readlines()逐行读出",
        hint: 'class StringIO:\n    def __init__(self, text=""):\n        self.data = text\n    def write(self, s):\n        self.data = self.data + s\n    def getvalue(self):\n        return self.data\n    def readlines(self):\n        return self.data.split("\\n")\n\nf = StringIO()\nf.write("苹果\\n")\nf.write("香蕉\\n")\nf.write("橘子")\n\nf2 = StringIO(f.getvalue())\nfor line in f2.readlines():\n    if line:\n        print(line)',
        template: '# StringIO模拟练习\nclass StringIO:\n    def __init__(self, text=""):\n        self.data = text\n    def write(self, s):\n        self.data = self.data + s\n    def getvalue(self):\n        return self.data\n    def readlines(self):\n        return self.data.split("\\n")\n',
        check: function(output) { return output.split("\n").length >= 2; }
      }
    }
  ]
};

registerChapter('python', CHAPTER16);
