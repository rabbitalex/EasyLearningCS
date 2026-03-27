// 第零章C：机器码与汇编指令（动画教学）
const CHAPTER0C = {
  chapter: "第四章：机器码与汇编",
  icon: "⚙️",
  lessons: [
    // ============================================================
    // 课程 0c-1：二进制与机器码
    // ============================================================
    {
      id: "0c-1",
      title: "二进制 —— 计算机的母语",
      xp: 20,
      code: '# 探索二进制世界\n\n# 十进制转二进制\nnumbers = [0, 1, 5, 10, 42, 127, 255]\nprint("=== 十进制 → 二进制 ===")\nfor n in numbers:\n    binary = bin(n)\n    print(f"  {n:>3} → {binary:>10s} → {binary[2:]:>8s}")\n\n# 手动实现十进制转二进制\ndef to_binary(n):\n    if n == 0:\n        return "0"\n    bits = []\n    while n > 0:\n        bits.append(str(n % 2))\n        n = n // 2\n    bits.reverse()\n    return "".join(bits)\n\nprint("\\n=== 手动转换验证 ===")\nfor n in [42, 100, 255]:\n    my_bin = to_binary(n)\n    py_bin = bin(n)[2:]\n    match = "✅" if my_bin == py_bin else "❌"\n    print(f"  {n} → {my_bin} {match}")\n\n# ASCII编码\nprint("\\n=== ASCII: 字符的二进制表示 ===")\nword = "Python"\nfor ch in word:\n    code = ord(ch)\n    print(f"  \'{ch}\' → {code:3d} → {bin(code)[2:]:>8s}")',
      steps: [
        {
          title: "二进制：0 和 1 的世界",
          content: `
<p>计算机只认识两个数字：<strong>0</strong> 和 <strong>1</strong>。所有数据 —— 数字、文字、图片、音乐，底层都是 0 和 1 组成的！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔢 十进制 vs 二进制</div>
  <div class="bin-demo">
    <div class="bin-converter">
      <div class="bin-dec-side">
        <div class="bin-label">十进制（人类）</div>
        <div class="bin-value" id="binDecVal">42</div>
        <div class="bin-buttons">
          <button class="bin-btn" onclick="changeBinDemo(-1)">−</button>
          <button class="bin-btn" onclick="changeBinDemo(1)">+</button>
        </div>
      </div>
      <div class="bin-arrow-box">
        <div class="bin-arrow-anim">⇄</div>
      </div>
      <div class="bin-bin-side">
        <div class="bin-label">二进制（计算机）</div>
        <div class="bin-value bin-mono" id="binBinVal">00101010</div>
        <div class="bin-bit-labels">
          <span>128</span><span>64</span><span>32</span><span>16</span><span>8</span><span>4</span><span>2</span><span>1</span>
        </div>
      </div>
    </div>
    <div class="bin-breakdown" id="binBreakdown">
      <span class="bin-term">= 0×128</span>
      <span class="bin-term">+ 0×64</span>
      <span class="bin-term hi">+ 1×32</span>
      <span class="bin-term">+ 0×16</span>
      <span class="bin-term hi">+ 1×8</span>
      <span class="bin-term">+ 0×4</span>
      <span class="bin-term hi">+ 1×2</span>
      <span class="bin-term">+ 0×1</span>
      <span class="bin-term result">= 42</span>
    </div>
  </div>
  <div class="theory-callout">💡 <code>42</code> 在二进制中是 <code>00101010</code>，因为 32+8+2 = 42。Python中用 <code>bin(42)</code> 可直接转换！</div>
</div>
<script>
window.changeBinDemo = function(d) {
  var el = document.getElementById('binDecVal');
  var n = Math.max(0, Math.min(255, parseInt(el.textContent) + d));
  el.textContent = n;
  var b = n.toString(2).padStart(8, '0');
  document.getElementById('binBinVal').textContent = b;
  var weights = [128,64,32,16,8,4,2,1];
  var html = '';
  for (var i = 0; i < 8; i++) {
    var bit = b[i];
    html += '<span class="bin-term' + (bit === '1' ? ' hi' : '') + '">' + (i > 0 ? '+ ' : '= ') + bit + '×' + weights[i] + '</span>';
  }
  html += '<span class="bin-term result">= ' + n + '</span>';
  document.getElementById('binBreakdown').innerHTML = html;
};
</script>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,206,201,0.08));border:1px solid rgba(108,92,231,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(108,92,231,0.1);border-left:3px solid #6c5ce7;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
.theory-btn{margin-top:0.8rem;padding:0.5rem 1.2rem;background:linear-gradient(135deg,#FF9800,#F57C00);border:none;border-radius:20px;color:#fff;font-size:0.92rem;font-weight:700;cursor:pointer;transition:transform 0.2s,box-shadow 0.2s;box-shadow:0 3px 10px rgba(255,152,0,0.3)}
.theory-btn:hover{transform:scale(1.05);box-shadow:0 4px 18px rgba(255,152,0,0.5)}
.t0-fadein{opacity:0;animation:t0fi 0.6s ease forwards}
@keyframes t0fi{to{opacity:1}}
.bin-demo{background:rgba(13,13,26,0.5);border-radius:12px;padding:0.8rem}
.bin-converter{display:flex;align-items:center;justify-content:center;gap:0.8rem;flex-wrap:wrap}
.bin-dec-side,.bin-bin-side{background:rgba(13,13,26,0.8);border-radius:10px;padding:0.6rem 0.8rem;text-align:center;min-width:120px;border:1px solid rgba(108,92,231,0.2)}
.bin-dec-side{border-top:3px solid #FF9800}
.bin-bin-side{border-top:3px solid #00cec9}
.bin-label{font-size:0.65rem;color:#a29bfe;font-weight:600;margin-bottom:0.3rem}
.bin-value{font-size:1.4rem;font-weight:800;color:#e8ecf2}
.bin-mono{font-family:monospace;letter-spacing:2px;color:#00cec9}
.bin-buttons{display:flex;gap:0.3rem;justify-content:center;margin-top:0.3rem}
.bin-btn{width:28px;height:28px;border-radius:50%;border:1px solid rgba(255,152,0,0.4);background:rgba(255,152,0,0.1);color:#FF9800;font-weight:700;font-size:1rem;cursor:pointer;transition:all 0.2s;display:flex;align-items:center;justify-content:center}
.bin-btn:hover{background:rgba(255,152,0,0.2);transform:scale(1.1)}
.bin-bit-labels{display:flex;justify-content:center;gap:2px;margin-top:0.3rem}
.bin-bit-labels span{font-size:0.5rem;color:#a29bfe;width:16px;text-align:center}
.bin-arrow-box{font-size:1.2rem;color:#FF9800;animation:binArrow 1.5s ease-in-out infinite}
@keyframes binArrow{0%,100%{opacity:0.4;transform:scale(1)}50%{opacity:1;transform:scale(1.2)}}
.bin-breakdown{display:flex;flex-wrap:wrap;gap:0.2rem;justify-content:center;margin-top:0.6rem;padding:0.4rem;background:rgba(0,0,0,0.2);border-radius:8px}
.bin-term{font-size:0.68rem;color:#c8d0e0;font-family:monospace;padding:0.15rem 0.25rem;border-radius:4px}
.bin-term.hi{color:#00cec9;background:rgba(0,206,201,0.12);font-weight:700}
.bin-term.result{color:#FF9800;font-weight:800;border-left:2px solid #FF9800;margin-left:0.3rem;padding-left:0.4rem}
</style>`
        },
        {
          title: "机器码：CPU唯一能懂的语言",
          content: `
<p>二进制的0和1组成的<strong>机器码</strong>，是CPU能直接执行的指令！每条机器指令都是一串数字。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">💻 机器码长什么样？</div>
  <div class="machine-code-demo">
    <div class="mc-instruction t0-fadein" style="animation-delay:0.2s">
      <div class="mc-hex">B8 2A 00 00 00</div>
      <div class="mc-binary">10111000 00101010 00000000 00000000 00000000</div>
      <div class="mc-meaning">把数字 42 放入 EAX 寄存器</div>
      <div class="mc-parts">
        <span class="mc-part mc-opcode">B8 = MOV指令</span>
        <span class="mc-part mc-operand">2A000000 = 42(小端序)</span>
      </div>
    </div>
    <div class="mc-instruction t0-fadein" style="animation-delay:0.4s">
      <div class="mc-hex">83 C0 08</div>
      <div class="mc-binary">10000011 11000000 00001000</div>
      <div class="mc-meaning">EAX = EAX + 8</div>
      <div class="mc-parts">
        <span class="mc-part mc-opcode">83 = ADD指令</span>
        <span class="mc-part mc-operand">C0 = EAX, 08 = 8</span>
      </div>
    </div>
    <div class="mc-instruction t0-fadein" style="animation-delay:0.6s">
      <div class="mc-hex">CD 80</div>
      <div class="mc-binary">11001101 10000000</div>
      <div class="mc-meaning">系统调用（输出结果）</div>
      <div class="mc-parts">
        <span class="mc-part mc-opcode">CD = INT指令</span>
        <span class="mc-part mc-operand">80 = Linux系统调用</span>
      </div>
    </div>
  </div>
  <div class="theory-callout">💡 看到了吗？机器码就是一堆<strong>数字</strong>！人类几乎不可能直接写机器码编程，所以才发明了<strong>汇编语言</strong>来简化。</div>
</div>
<style>
.machine-code-demo{display:flex;flex-direction:column;gap:0.5rem;margin:0.5rem 0}
.mc-instruction{background:rgba(13,13,26,0.8);border-radius:10px;padding:0.6rem;border-left:3px solid #6c5ce7;transition:all 0.3s}
.mc-instruction:hover{transform:translateX(4px);border-left-color:#FF9800}
.mc-hex{font-family:monospace;font-size:0.95rem;font-weight:800;color:#fdcb6e;letter-spacing:1px}
.mc-binary{font-family:monospace;font-size:0.65rem;color:rgba(0,206,201,0.6);margin-top:0.15rem;letter-spacing:0.5px;word-break:break-all}
.mc-meaning{font-size:0.78rem;color:#e8ecf2;margin-top:0.3rem;font-weight:600}
.mc-parts{display:flex;gap:0.5rem;margin-top:0.25rem;flex-wrap:wrap}
.mc-part{font-size:0.65rem;padding:0.1rem 0.4rem;border-radius:4px;font-family:monospace}
.mc-opcode{background:rgba(108,92,231,0.15);color:#a29bfe}
.mc-operand{background:rgba(0,206,201,0.1);color:#00cec9}
</style>`
        },
        {
          title: "从Python到机器码的旅程",
          content: `
<p>你写的每行Python代码，最终都会变成机器码！这中间经历了什么？</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔄 代码的"翻译"之旅 — 点击播放</div>
  <div class="code-journey">
    <div class="cj-stage" id="cj1">
      <div class="cj-icon">🐍</div>
      <div class="cj-label">Python代码</div>
      <div class="cj-code">x = 42 + 8</div>
    </div>
    <div class="cj-arrow">▼</div>
    <div class="cj-stage" id="cj2">
      <div class="cj-icon">📝</div>
      <div class="cj-label">字节码 (Bytecode)</div>
      <div class="cj-code">LOAD_CONST 42<br>LOAD_CONST 8<br>BINARY_ADD<br>STORE_NAME x</div>
    </div>
    <div class="cj-arrow">▼</div>
    <div class="cj-stage" id="cj3">
      <div class="cj-icon">⚙️</div>
      <div class="cj-label">汇编指令</div>
      <div class="cj-code">mov eax, 42<br>add eax, 8<br>mov [x], eax</div>
    </div>
    <div class="cj-arrow">▼</div>
    <div class="cj-stage" id="cj4">
      <div class="cj-icon">💻</div>
      <div class="cj-label">机器码</div>
      <div class="cj-code">B8 2A 00 00 00<br>83 C0 08<br>89 05 ...</div>
    </div>
  </div>
  <button class="theory-btn" onclick="(function(){var stages=['cj1','cj2','cj3','cj4'];stages.forEach(function(id){document.getElementById(id).classList.remove('cj-active','cj-done');});var d=0;stages.forEach(function(id,i){setTimeout(function(){if(i>0)document.getElementById(stages[i-1]).classList.replace('cj-active','cj-done');document.getElementById(id).classList.add('cj-active');if(i===stages.length-1){setTimeout(function(){document.getElementById(id).classList.replace('cj-active','cj-done');},800);}},d);d+=900;});})()">▶ 播放翻译过程</button>
</div>
<style>
.code-journey{display:flex;flex-direction:column;align-items:center;gap:0.15rem;margin:0.5rem 0}
.cj-stage{background:rgba(13,13,26,0.8);border-radius:10px;padding:0.5rem 0.8rem;min-width:220px;text-align:center;border:1px solid rgba(108,92,231,0.15);transition:all 0.4s}
.cj-stage.cj-active{border-color:#FF9800;box-shadow:0 0 18px rgba(255,152,0,0.25);transform:scale(1.04);background:rgba(255,152,0,0.06)}
.cj-stage.cj-done{border-color:#00b894;background:rgba(0,184,148,0.06);opacity:0.75}
.cj-icon{font-size:1.1rem}
.cj-label{font-weight:700;font-size:0.78rem;color:#e8ecf2;margin:0.15rem 0}
.cj-code{font-family:monospace;font-size:0.7rem;color:#00cec9;background:rgba(0,0,0,0.25);padding:0.25rem 0.5rem;border-radius:6px;line-height:1.4;display:inline-block;text-align:left}
.cj-arrow{color:#FF9800;font-size:0.8rem;opacity:0.5;animation:cjBounce 1.5s ease-in-out infinite}
@keyframes cjBounce{0%,100%{transform:translateY(0);opacity:0.3}50%{transform:translateY(3px);opacity:0.8}}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 实现十进制转二进制函数 to_binary(n)，不使用 bin()，手动用除2取余法。",
        hint: 'def to_binary(n):\n    if n == 0:\n        return "0"\n    bits = []\n    while n > 0:\n        bits.append(str(n % 2))\n        n = n // 2\n    bits.reverse()\n    return "".join(bits)\n\n# 测试\nfor num in [0, 1, 10, 42, 127, 255]:\n    result = to_binary(num)\n    print(f"{num} → {result}")',
        template: '# 手动实现十进制转二进制\ndef to_binary(n):\n    pass\n\n# 测试\nfor num in [0, 1, 10, 42, 255]:\n    print(f"{num} → {to_binary(num)}")\n',
        check: function(output) { return output.indexOf("101010") !== -1 || output.indexOf("42") !== -1; }
      }
    },
    // ============================================================
    // 课程 0c-2：汇编语言基础
    // ============================================================
    {
      id: "0c-2",
      title: "汇编语言 —— 人类与机器的桥梁",
      xp: 20,
      code: '# 模拟汇编指令执行\n\nclass SimpleASM:\n    """一个极简汇编模拟器"""\n    def __init__(self):\n        self.registers = {"eax": 0, "ebx": 0, "ecx": 0, "edx": 0}\n        self.flags = {"zero": False, "carry": False}\n        self.memory = {}\n        self.output = []\n\n    def execute(self, program):\n        """逐行执行汇编指令"""\n        lines = program.strip().split("\\n")\n        pc = 0\n        labels = {}\n        # 第一遍：收集标签\n        for i, line in enumerate(lines):\n            line = line.strip()\n            if line.endswith(":"):\n                labels[line[:-1]] = i\n        # 第二遍：执行\n        while pc < len(lines):\n            line = lines[pc].strip()\n            if not line or line.endswith(":"):\n                pc = pc + 1\n                continue\n            parts = line.replace(",", " ").split()\n            op = parts[0].upper()\n            print(f"  [PC={pc}] {line}")\n            if op == "MOV":\n                dst = parts[1]\n                val = self._get_val(parts[2])\n                self.registers[dst] = val\n            elif op == "ADD":\n                dst = parts[1]\n                val = self._get_val(parts[2])\n                self.registers[dst] = self.registers[dst] + val\n            elif op == "SUB":\n                dst = parts[1]\n                val = self._get_val(parts[2])\n                self.registers[dst] = self.registers[dst] - val\n                self.flags["zero"] = self.registers[dst] == 0\n            elif op == "MUL":\n                val = self._get_val(parts[1])\n                self.registers["eax"] = self.registers["eax"] * val\n            elif op == "PRINT":\n                reg = parts[1]\n                self.output.append(str(self.registers[reg]))\n                print(f"    → 输出: {self.registers[reg]}")\n            pc = pc + 1\n        return self.output\n\n    def _get_val(self, s):\n        s = s.strip()\n        if s in self.registers:\n            return self.registers[s]\n        return int(s)\n\n# 运行示例\ncpu = SimpleASM()\nprint("=== 执行: (10 + 32) * 2 ===")\ncpu.execute("""\nmov eax, 10\nadd eax, 32\nmov ebx, 2\nmul ebx\nprint eax\n""")\nprint(f"\\n寄存器: {cpu.registers}")',
      steps: [
        {
          title: "汇编语言：给机器码起名字",
          content: `
<p><strong>汇编语言</strong>是机器码的"人类可读版"——用<strong>助记符</strong>代替二进制数字！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📋 机器码 vs 汇编 vs Python 对比</div>
  <div class="asm-compare">
    <div class="asm-col asm-py t0-fadein" style="animation-delay:0.2s">
      <div class="asm-col-title" style="color:#fdcb6e">🐍 Python</div>
      <div class="asm-col-code">x = 42 + 8</div>
      <div class="asm-col-tag">1行搞定</div>
    </div>
    <div class="asm-col asm-asm t0-fadein" style="animation-delay:0.4s">
      <div class="asm-col-title" style="color:#00cec9">⚙️ 汇编</div>
      <div class="asm-col-code">mov eax, 42<br>add eax, 8<br>mov [x], eax</div>
      <div class="asm-col-tag">3条指令</div>
    </div>
    <div class="asm-col asm-mc t0-fadein" style="animation-delay:0.6s">
      <div class="asm-col-title" style="color:#e17055">💻 机器码</div>
      <div class="asm-col-code">B8 2A 00 00 00<br>83 C0 08<br>89 05 XX XX</div>
      <div class="asm-col-tag">一堆数字</div>
    </div>
  </div>
  <div class="asm-key-table">
    <div class="asm-key-title">🔑 常见汇编指令速查</div>
    <div class="asm-key-grid">
      <div class="asm-key-item t0-fadein" style="animation-delay:0.3s">
        <span class="asm-key-inst">MOV</span>
        <span class="asm-key-desc">数据传送（赋值）</span>
        <span class="asm-key-eg">mov eax, 42 → eax=42</span>
      </div>
      <div class="asm-key-item t0-fadein" style="animation-delay:0.4s">
        <span class="asm-key-inst">ADD</span>
        <span class="asm-key-desc">加法</span>
        <span class="asm-key-eg">add eax, 8 → eax+=8</span>
      </div>
      <div class="asm-key-item t0-fadein" style="animation-delay:0.5s">
        <span class="asm-key-inst">SUB</span>
        <span class="asm-key-desc">减法</span>
        <span class="asm-key-eg">sub eax, 3 → eax-=3</span>
      </div>
      <div class="asm-key-item t0-fadein" style="animation-delay:0.6s">
        <span class="asm-key-inst">MUL</span>
        <span class="asm-key-desc">乘法</span>
        <span class="asm-key-eg">mul ebx → eax*=ebx</span>
      </div>
      <div class="asm-key-item t0-fadein" style="animation-delay:0.7s">
        <span class="asm-key-inst">CMP</span>
        <span class="asm-key-desc">比较</span>
        <span class="asm-key-eg">cmp eax, 0 → 比较大小</span>
      </div>
      <div class="asm-key-item t0-fadein" style="animation-delay:0.8s">
        <span class="asm-key-inst">JMP</span>
        <span class="asm-key-desc">无条件跳转</span>
        <span class="asm-key-eg">jmp label → goto</span>
      </div>
    </div>
  </div>
  <div class="theory-callout">💡 汇编指令和机器码是<strong>一一对应</strong>的！<code>MOV</code> 就是 <code>B8</code>，<code>ADD</code> 就是 <code>83</code>。汇编器负责翻译。</div>
</div>
<style>
.asm-compare{display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.4rem;margin:0.5rem 0}
.asm-col{background:rgba(13,13,26,0.8);border-radius:10px;padding:0.5rem;text-align:center;border:1px solid rgba(108,92,231,0.15);transition:all 0.3s}
.asm-col:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,0.2)}
.asm-col-title{font-weight:800;font-size:0.78rem;margin-bottom:0.3rem}
.asm-col-code{font-family:monospace;font-size:0.72rem;color:#e8ecf2;background:rgba(0,0,0,0.3);padding:0.3rem;border-radius:6px;line-height:1.5;min-height:50px;display:flex;align-items:center;justify-content:center}
.asm-col-tag{font-size:0.6rem;color:#a29bfe;margin-top:0.25rem}
.asm-key-table{background:rgba(13,13,26,0.5);border-radius:10px;padding:0.6rem;margin-top:0.6rem}
.asm-key-title{font-weight:700;color:#FF9800;font-size:0.8rem;margin-bottom:0.4rem;text-align:center}
.asm-key-grid{display:grid;grid-template-columns:1fr 1fr;gap:0.3rem}
.asm-key-item{background:rgba(13,13,26,0.6);border-radius:8px;padding:0.35rem 0.5rem;display:flex;flex-direction:column;gap:0.1rem;border-left:2px solid rgba(108,92,231,0.3);transition:border-color 0.3s}
.asm-key-item:hover{border-left-color:#FF9800}
.asm-key-inst{font-family:monospace;font-weight:800;font-size:0.8rem;color:#fdcb6e}
.asm-key-desc{font-size:0.68rem;color:#e8ecf2}
.asm-key-eg{font-size:0.6rem;color:#00cec9;font-family:monospace}
</style>`
        },
        {
          title: "寄存器：CPU的快递柜",
          content: `
<p><strong>寄存器</strong>是CPU内部的超小型存储单元，汇编指令主要操作它们！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📦 x86 常用寄存器</div>
  <div class="reg-demo">
    <div class="reg-grid">
      <div class="reg-card reg-general t0-fadein" style="animation-delay:0.2s">
        <div class="reg-name">EAX</div>
        <div class="reg-val" id="regEax">00000000</div>
        <div class="reg-role">累加器（计算结果）</div>
      </div>
      <div class="reg-card reg-general t0-fadein" style="animation-delay:0.3s">
        <div class="reg-name">EBX</div>
        <div class="reg-val">00000000</div>
        <div class="reg-role">基址寄存器</div>
      </div>
      <div class="reg-card reg-general t0-fadein" style="animation-delay:0.4s">
        <div class="reg-name">ECX</div>
        <div class="reg-val">00000000</div>
        <div class="reg-role">计数器（循环）</div>
      </div>
      <div class="reg-card reg-general t0-fadein" style="animation-delay:0.5s">
        <div class="reg-name">EDX</div>
        <div class="reg-val">00000000</div>
        <div class="reg-role">数据寄存器</div>
      </div>
      <div class="reg-card reg-special t0-fadein" style="animation-delay:0.6s">
        <div class="reg-name">ESP</div>
        <div class="reg-val">FFFFFFFF</div>
        <div class="reg-role">栈指针 ↕</div>
      </div>
      <div class="reg-card reg-special t0-fadein" style="animation-delay:0.7s">
        <div class="reg-name">EBP</div>
        <div class="reg-val">00000000</div>
        <div class="reg-role">栈基址指针</div>
      </div>
      <div class="reg-card reg-control t0-fadein" style="animation-delay:0.8s">
        <div class="reg-name">EIP</div>
        <div class="reg-val">00401000</div>
        <div class="reg-role">指令指针（PC）</div>
      </div>
      <div class="reg-card reg-control t0-fadein" style="animation-delay:0.9s">
        <div class="reg-name">EFLAGS</div>
        <div class="reg-val">00000000</div>
        <div class="reg-role">状态标志位</div>
      </div>
    </div>
    <div class="reg-legend">
      <span class="reg-legend-item"><span class="reg-dot" style="background:#fdcb6e"></span>通用寄存器</span>
      <span class="reg-legend-item"><span class="reg-dot" style="background:#00cec9"></span>栈指针</span>
      <span class="reg-legend-item"><span class="reg-dot" style="background:#a29bfe"></span>控制寄存器</span>
    </div>
  </div>
  <div class="theory-callout">💡 Python的变量存在内存里，但CPU运算时会先把它们<strong>加载到寄存器</strong>中，算完再存回去！</div>
</div>
<style>
.reg-demo{background:rgba(13,13,26,0.5);border-radius:12px;padding:0.6rem}
.reg-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0.3rem}
.reg-card{background:rgba(13,13,26,0.8);border-radius:8px;padding:0.4rem;text-align:center;border:1px solid rgba(108,92,231,0.15);transition:all 0.3s}
.reg-card:hover{transform:translateY(-2px);box-shadow:0 3px 10px rgba(0,0,0,0.3)}
.reg-general{border-top:2px solid #fdcb6e}
.reg-special{border-top:2px solid #00cec9}
.reg-control{border-top:2px solid #a29bfe}
.reg-name{font-family:monospace;font-weight:800;font-size:0.78rem;color:#e8ecf2}
.reg-val{font-family:monospace;font-size:0.65rem;color:#00cec9;background:rgba(0,0,0,0.3);padding:0.1rem 0.2rem;border-radius:3px;margin:0.15rem 0}
.reg-role{font-size:0.55rem;color:#a29bfe}
.reg-legend{display:flex;justify-content:center;gap:0.8rem;margin-top:0.5rem;flex-wrap:wrap}
.reg-legend-item{display:flex;align-items:center;gap:0.25rem;font-size:0.65rem;color:#c8d0e0}
.reg-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 用Python实现一个简单的汇编模拟器，支持 MOV、ADD、SUB、PRINT 四条指令。",
        hint: 'registers = {"eax": 0, "ebx": 0}\n\ndef execute(instruction):\n    parts = instruction.replace(",", " ").split()\n    op = parts[0].upper()\n    if op == "MOV":\n        registers[parts[1]] = int(parts[2]) if parts[2].lstrip("-").isdigit() else registers[parts[2]]\n    elif op == "ADD":\n        val = int(parts[2]) if parts[2].lstrip("-").isdigit() else registers[parts[2]]\n        registers[parts[1]] = registers[parts[1]] + val\n    elif op == "SUB":\n        val = int(parts[2]) if parts[2].lstrip("-").isdigit() else registers[parts[2]]\n        registers[parts[1]] = registers[parts[1]] - val\n    elif op == "PRINT":\n        print(f"{parts[1]} = {registers[parts[1]]}")\n    print(f"  寄存器: {registers}")\n\nprogram = ["mov eax, 100", "mov ebx, 37", "sub eax, ebx", "add eax, 10", "print eax"]\nfor inst in program:\n    execute(inst)',
        template: '# 汇编模拟器\nregisters = {"eax": 0, "ebx": 0}\n\ndef execute(instruction):\n    pass\n',
        check: function(output) { return output.indexOf("eax") !== -1 || output.indexOf("寄存器") !== -1; }
      }
    },
    // ============================================================
    // 课程 0c-3：汇编实战 —— 控制流
    // ============================================================
    {
      id: "0c-3",
      title: "汇编中的条件与循环",
      xp: 20,
      code: '# 模拟汇编中的条件跳转和循环\n\nregisters = {"eax": 0, "ebx": 0, "ecx": 0}\nflags = {"zero": False, "sign": False}\n\ndef run_asm(program):\n    lines = program.strip().split("\\n")\n    labels = {}\n    # 收集标签\n    for i, line in enumerate(lines):\n        line = line.strip()\n        if line.endswith(":"):\n            labels[line[:-1]] = i\n    pc = 0\n    steps = 0\n    while pc < len(lines) and steps < 100:\n        line = lines[pc].strip()\n        steps = steps + 1\n        if not line or line.endswith(":"):\n            pc = pc + 1\n            continue\n        parts = line.replace(",", " ").split()\n        op = parts[0].upper()\n        if op == "MOV":\n            registers[parts[1]] = get_val(parts[2])\n        elif op == "ADD":\n            registers[parts[1]] = registers[parts[1]] + get_val(parts[2])\n        elif op == "SUB":\n            result = registers[parts[1]] - get_val(parts[2])\n            registers[parts[1]] = result\n            flags["zero"] = result == 0\n            flags["sign"] = result < 0\n        elif op == "CMP":\n            result = registers[parts[1]] - get_val(parts[2])\n            flags["zero"] = result == 0\n            flags["sign"] = result < 0\n        elif op == "JMP":\n            pc = labels[parts[1]]\n            continue\n        elif op == "JZ" or op == "JE":\n            if flags["zero"]:\n                pc = labels[parts[1]]\n                continue\n        elif op == "JNZ" or op == "JNE":\n            if not flags["zero"]:\n                pc = labels[parts[1]]\n                continue\n        elif op == "PRINT":\n            val = registers[parts[1]]\n            print(f"  输出: {val}")\n        pc = pc + 1\n\ndef get_val(s):\n    s = s.strip()\n    if s in registers:\n        return registers[s]\n    return int(s)\n\n# 示例：用汇编实现累加 1+2+...+10\nprint("=== 汇编循环: 1+2+...+10 ===")\nrun_asm("""\nmov eax, 0\nmov ecx, 1\nloop_start:\nadd eax, ecx\nadd ecx, 1\ncmp ecx, 11\njnz loop_start\nprint eax\n""")\nprint(f"结果: eax={registers[\"eax\"]}")',
      steps: [
        {
          title: "条件跳转：汇编中的 if-else",
          content: `
<p>Python有<code>if-else</code>，汇编怎么做条件判断？用<strong>CMP + 条件跳转</strong>！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔀 Python if → 汇编跳转</div>
  <div class="cmp-demo">
    <div class="cmp-side cmp-py t0-fadein" style="animation-delay:0.2s">
      <div class="cmp-side-title" style="color:#fdcb6e">🐍 Python</div>
      <pre class="cmp-code-block">if x > 0:
    print("正数")
else:
    print("非正数")</pre>
    </div>
    <div class="cmp-arrow-mid">→</div>
    <div class="cmp-side cmp-asm-side t0-fadein" style="animation-delay:0.4s">
      <div class="cmp-side-title" style="color:#00cec9">⚙️ 汇编</div>
      <pre class="cmp-code-block"><span class="asm-h-cmp">cmp eax, 0</span>       <span class="asm-comment">; 比较x和0</span>
<span class="asm-h-jmp">jle else_branch</span> <span class="asm-comment">; 如果≤0跳转</span>
<span class="asm-h-normal">; print("正数")</span>
<span class="asm-h-jmp">jmp end_if</span>
<span class="asm-h-label">else_branch:</span>
<span class="asm-h-normal">; print("非正数")</span>
<span class="asm-h-label">end_if:</span></pre>
    </div>
  </div>
  <div class="jmp-table">
    <div class="jmp-title">🏷️ 条件跳转指令</div>
    <div class="jmp-grid">
      <div class="jmp-item"><span class="jmp-inst">JE / JZ</span><span class="jmp-eq">==</span><span class="jmp-desc">等于/零</span></div>
      <div class="jmp-item"><span class="jmp-inst">JNE / JNZ</span><span class="jmp-eq">!=</span><span class="jmp-desc">不等于</span></div>
      <div class="jmp-item"><span class="jmp-inst">JG</span><span class="jmp-eq">&gt;</span><span class="jmp-desc">大于</span></div>
      <div class="jmp-item"><span class="jmp-inst">JL</span><span class="jmp-eq">&lt;</span><span class="jmp-desc">小于</span></div>
      <div class="jmp-item"><span class="jmp-inst">JGE</span><span class="jmp-eq">&gt;=</span><span class="jmp-desc">大于等于</span></div>
      <div class="jmp-item"><span class="jmp-inst">JLE</span><span class="jmp-eq">&lt;=</span><span class="jmp-desc">小于等于</span></div>
    </div>
  </div>
  <div class="theory-callout">💡 汇编没有 if/else 关键字！它用 <code>CMP</code>（比较）设置标志位，再用 <code>JE/JNE/JG/JL</code> 等指令根据标志位跳转。</div>
</div>
<style>
.cmp-demo{display:grid;grid-template-columns:1fr auto 1fr;gap:0.4rem;align-items:center;margin:0.5rem 0}
.cmp-side{background:rgba(13,13,26,0.8);border-radius:10px;padding:0.5rem;border:1px solid rgba(108,92,231,0.15)}
.cmp-side-title{font-weight:800;font-size:0.78rem;margin-bottom:0.3rem;text-align:center}
.cmp-code-block{font-family:monospace;font-size:0.68rem;color:#e8ecf2;background:rgba(0,0,0,0.3);padding:0.4rem;border-radius:6px;margin:0;line-height:1.5;white-space:pre;overflow-x:auto}
.cmp-arrow-mid{font-size:1.2rem;color:#FF9800;font-weight:700;text-align:center}
.asm-h-cmp{color:#fdcb6e;font-weight:700}
.asm-h-jmp{color:#e17055;font-weight:700}
.asm-h-label{color:#00cec9;font-weight:700}
.asm-h-normal{color:#a29bfe}
.asm-comment{color:rgba(255,255,255,0.3);font-style:italic}
.jmp-table{background:rgba(0,206,201,0.06);border:1px solid rgba(0,206,201,0.15);border-radius:10px;padding:0.6rem;margin-top:0.6rem}
.jmp-title{font-weight:700;color:#00cec9;font-size:0.8rem;margin-bottom:0.4rem;text-align:center}
.jmp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0.3rem}
.jmp-item{background:rgba(13,13,26,0.6);border-radius:6px;padding:0.3rem 0.4rem;display:flex;flex-direction:column;align-items:center;gap:0.05rem;transition:transform 0.2s}
.jmp-item:hover{transform:scale(1.05)}
.jmp-inst{font-family:monospace;font-weight:700;font-size:0.72rem;color:#fdcb6e}
.jmp-eq{font-size:0.85rem;font-weight:800;color:#FF9800}
.jmp-desc{font-size:0.6rem;color:#c8d0e0}
</style>`
        },
        {
          title: "循环：汇编中的 for/while",
          content: `
<p>Python的<code>for</code>循环在汇编中变成了<strong>CMP + 条件跳转 + JMP回跳</strong>的组合！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔄 循环的汇编实现 — 点击逐步执行</div>
  <div class="loop-demo">
    <div class="loop-code-side">
      <div class="loop-py-box">
        <div class="loop-py-title">🐍 Python</div>
        <pre class="loop-code">total = 0
for i in range(1, 4):
    total += i
print(total)  # 6</pre>
      </div>
      <div class="loop-asm-box">
        <div class="loop-asm-title">⚙️ 等价汇编</div>
        <div class="loop-asm-lines">
          <div class="loop-asm-line" id="la0"><span class="la-addr">00</span> mov eax, 0</div>
          <div class="loop-asm-line" id="la1"><span class="la-addr">01</span> mov ecx, 1</div>
          <div class="loop-asm-line" id="la2"><span class="la-addr">02</span> <span style="color:#00cec9">loop:</span></div>
          <div class="loop-asm-line" id="la3"><span class="la-addr">03</span> add eax, ecx</div>
          <div class="loop-asm-line" id="la4"><span class="la-addr">04</span> add ecx, 1</div>
          <div class="loop-asm-line" id="la5"><span class="la-addr">05</span> cmp ecx, 4</div>
          <div class="loop-asm-line" id="la6"><span class="la-addr">06</span> jnz loop</div>
          <div class="loop-asm-line" id="la7"><span class="la-addr">07</span> print eax</div>
        </div>
      </div>
    </div>
    <div class="loop-reg-side">
      <div class="loop-reg-title">📊 寄存器状态</div>
      <div class="loop-reg-item"><span class="lrn">EAX</span><span class="lrv" id="lrEax">0</span></div>
      <div class="loop-reg-item"><span class="lrn">ECX</span><span class="lrv" id="lrEcx">0</span></div>
      <div class="loop-reg-item"><span class="lrn">ZF</span><span class="lrv" id="lrZf">0</span></div>
      <div class="loop-out" id="loopOut">等待执行...</div>
    </div>
  </div>
  <div style="display:flex;gap:0.4rem;margin-top:0.5rem">
    <button class="theory-btn" onclick="stepLoopDemo()">⏭ 下一步</button>
    <button class="theory-btn" style="background:linear-gradient(135deg,#6c5ce7,#a29bfe)" onclick="resetLoopDemo()">🔄 重置</button>
  </div>
</div>
<script>
(function(){
  var eax=0,ecx=0,pc=0,zf=0;
  var steps=[
    function(){eax=0;ecx=0;pc=0;},
    function(){ecx=1;pc=1;},
    function(){pc=2;},
    function(){eax=eax+ecx;pc=3;},
    function(){ecx=ecx+1;pc=4;},
    function(){zf=(ecx===4)?1:0;pc=5;},
    function(){if(!zf){pc=2;}else{pc=6;}},
  ];
  var sidx=0;
  window.stepLoopDemo=function(){
    if(sidx>=20)return;
    var realStep=sidx<2?sidx:(((sidx-2)%4)+2);
    if(sidx===0){eax=0;ecx=0;pc=0;zf=0;}
    if(realStep===0){eax=0;pc=0;}
    else if(realStep===1){ecx=1;pc=1;}
    else if(realStep===2){eax=eax+ecx;pc=3;}
    else if(realStep===3){ecx=ecx+1;pc=4;}
    else if(realStep===4){zf=(ecx>=4)?1:0;pc=5;}
    else if(realStep===5){if(!zf){pc=2;}else{pc=7;}}
    document.getElementById('lrEax').textContent=eax;
    document.getElementById('lrEcx').textContent=ecx;
    document.getElementById('lrZf').textContent=zf;
    for(var i=0;i<8;i++){document.getElementById('la'+i).classList.remove('la-active');}
    document.getElementById('la'+pc).classList.add('la-active');
    if(pc===7){document.getElementById('loopOut').textContent='输出: '+eax+' ✅';}
    else{document.getElementById('loopOut').textContent='执行中...';}
    sidx++;
  };
  window.resetLoopDemo=function(){
    sidx=0;eax=0;ecx=0;pc=0;zf=0;
    document.getElementById('lrEax').textContent='0';
    document.getElementById('lrEcx').textContent='0';
    document.getElementById('lrZf').textContent='0';
    document.getElementById('loopOut').textContent='等待执行...';
    for(var i=0;i<8;i++){document.getElementById('la'+i).classList.remove('la-active');}
  };
})();
</script>
<style>
.loop-demo{display:grid;grid-template-columns:1fr auto;gap:0.5rem;margin:0.5rem 0}
.loop-code-side{display:flex;flex-direction:column;gap:0.4rem}
.loop-py-box,.loop-asm-box{background:rgba(13,13,26,0.8);border-radius:8px;padding:0.4rem 0.5rem}
.loop-py-title,.loop-asm-title{font-weight:700;font-size:0.75rem;color:#a29bfe;margin-bottom:0.2rem}
.loop-code{font-family:monospace;font-size:0.7rem;color:#e8ecf2;margin:0;line-height:1.4}
.loop-asm-lines{font-family:monospace;font-size:0.7rem;color:#e8ecf2;line-height:1.6}
.loop-asm-line{padding:0.05rem 0.3rem;border-radius:4px;transition:all 0.3s}
.loop-asm-line.la-active{background:rgba(255,152,0,0.15);border-left:2px solid #FF9800;color:#FF9800;font-weight:700}
.la-addr{color:rgba(255,255,255,0.2);font-size:0.6rem;margin-right:0.3rem}
.loop-reg-side{background:rgba(13,13,26,0.6);border-radius:10px;padding:0.5rem;min-width:90px;display:flex;flex-direction:column;gap:0.3rem}
.loop-reg-title{font-weight:700;font-size:0.72rem;color:#FF9800;text-align:center}
.loop-reg-item{display:flex;justify-content:space-between;padding:0.2rem 0.3rem;background:rgba(0,0,0,0.2);border-radius:4px}
.lrn{font-family:monospace;font-weight:700;font-size:0.72rem;color:#a29bfe}
.lrv{font-family:monospace;font-weight:800;font-size:0.72rem;color:#00cec9}
.loop-out{font-size:0.72rem;color:#c8d0e0;text-align:center;padding:0.3rem;background:rgba(0,0,0,0.2);border-radius:4px;margin-top:auto}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 用模拟汇编实现：计算 1+2+3+...+N 的累加，支持 MOV、ADD、CMP、JNZ、PRINT 指令。",
        hint: 'registers = {"eax": 0, "ecx": 0}\nflags = {"zero": False}\n\ndef get_val(s):\n    if s in registers:\n        return registers[s]\n    return int(s)\n\nprogram = [\n    "mov eax, 0",\n    "mov ecx, 1",\n    "add eax, ecx",\n    "add ecx, 1",\n    "cmp ecx, 11",\n    "jnz 2",\n    "print eax"\n]\n\npc = 0\nwhile pc < len(program):\n    line = program[pc]\n    parts = line.replace(",", " ").split()\n    op = parts[0].upper()\n    if op == "MOV":\n        registers[parts[1]] = get_val(parts[2])\n    elif op == "ADD":\n        registers[parts[1]] = registers[parts[1]] + get_val(parts[2])\n    elif op == "CMP":\n        flags["zero"] = registers[parts[1]] == get_val(parts[2])\n    elif op == "JNZ":\n        if not flags["zero"]:\n            pc = int(parts[1])\n            continue\n    elif op == "PRINT":\n        print("结果:", registers[parts[1]])\n    pc = pc + 1',
        template: '# 汇编循环模拟\nregisters = {"eax": 0, "ecx": 0}\nflags = {"zero": False}\n',
        check: function(output) { return output.indexOf("55") !== -1 || output.indexOf("结果") !== -1; }
      }
    },
    // ============================================================
    // 课程 0c-4：从汇编到高级语言的进化
    // ============================================================
    {
      id: "0c-4",
      title: "语言的进化 —— 从机器到Python",
      xp: 20,
      code: '# 展示同一个任务在不同层次语言中的实现\n\n# ========== 模拟：求数组最大值 ==========\n\n# 1. "汇编风格" - 只用基本操作\ndef find_max_asm_style(arr):\n    """模拟汇编：只用寄存器和跳转"""\n    eax = arr[0]  # max值\n    ecx = 1       # 索引\n    length = len(arr)\n    while ecx < length:\n        ebx = arr[ecx]\n        if ebx > eax:\n            eax = ebx\n        ecx = ecx + 1\n    return eax\n\n# 2. C语言风格\ndef find_max_c_style(arr):\n    """C风格：有for循环和数组"""\n    max_val = arr[0]\n    for i in range(1, len(arr)):\n        if arr[i] > max_val:\n            max_val = arr[i]\n    return max_val\n\n# 3. Python风格\ndef find_max_python(arr):\n    """Python：一行搞定"""\n    return max(arr)\n\n# 测试\nnums = [3, 7, 2, 9, 1, 8, 5]\nprint("数组:", nums)\nprint(f"汇编风格: {find_max_asm_style(nums)}")\nprint(f"C语言风格: {find_max_c_style(nums)}")\nprint(f"Python风格: {find_max_python(nums)}")\n\n# 代码行数对比\nprint("\\n=== 代码量对比 ===")\nprint("汇编:   ~20行指令")\nprint("C语言:  ~8行代码")\nprint("Python: 1行代码 ✨")',
      steps: [
        {
          title: "编程语言的进化史",
          content: `
<p>从机器码到Python，编程语言经历了<strong>数十年的进化</strong>，越来越接近人类的思维方式！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📜 编程语言进化时间线</div>
  <div class="timeline-demo">
    <div class="tl-item t0-fadein" style="animation-delay:0.2s">
      <div class="tl-year">1940s</div>
      <div class="tl-content tl-gen1">
        <div class="tl-title">💻 机器码</div>
        <div class="tl-code">B8 2A 00 00 00</div>
        <div class="tl-desc">直接0和1编程</div>
        <div class="tl-difficulty">难度: 🔴🔴🔴🔴🔴</div>
      </div>
    </div>
    <div class="tl-item t0-fadein" style="animation-delay:0.4s">
      <div class="tl-year">1950s</div>
      <div class="tl-content tl-gen2">
        <div class="tl-title">⚙️ 汇编语言</div>
        <div class="tl-code">mov eax, 42</div>
        <div class="tl-desc">助记符代替数字</div>
        <div class="tl-difficulty">难度: 🔴🔴🔴🔴⚪</div>
      </div>
    </div>
    <div class="tl-item t0-fadein" style="animation-delay:0.6s">
      <div class="tl-year">1970s</div>
      <div class="tl-content tl-gen3">
        <div class="tl-title">🔧 C语言</div>
        <div class="tl-code">int x = 42;</div>
        <div class="tl-desc">结构化 · 接近硬件</div>
        <div class="tl-difficulty">难度: 🔴🔴🔴⚪⚪</div>
      </div>
    </div>
    <div class="tl-item t0-fadein" style="animation-delay:0.8s">
      <div class="tl-year">1990s</div>
      <div class="tl-content tl-gen4">
        <div class="tl-title">🐍 Python</div>
        <div class="tl-code">x = 42</div>
        <div class="tl-desc">简洁优雅 · 自动管理</div>
        <div class="tl-difficulty">难度: 🔴⚪⚪⚪⚪</div>
      </div>
    </div>
  </div>
  <div class="theory-callout">💡 语言越高级，<strong>代码量越少</strong>，但<strong>运行速度越慢</strong>（因为需要更多翻译步骤）。Python比C慢约100倍，但开发效率高10倍！</div>
</div>
<style>
.timeline-demo{display:flex;flex-direction:column;gap:0.3rem;margin:0.5rem 0;position:relative;padding-left:2.8rem}
.timeline-demo::before{content:'';position:absolute;left:1.1rem;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,#e17055,#fdcb6e,#00cec9,#6c5ce7);border-radius:2px}
.tl-item{display:flex;align-items:center;gap:0.5rem;position:relative}
.tl-item::before{content:'';position:absolute;left:-1.9rem;width:10px;height:10px;border-radius:50%;border:2px solid;background:rgba(13,13,26,0.9);z-index:1}
.tl-item:nth-child(1)::before{border-color:#e17055}
.tl-item:nth-child(2)::before{border-color:#fdcb6e}
.tl-item:nth-child(3)::before{border-color:#00cec9}
.tl-item:nth-child(4)::before{border-color:#6c5ce7}
.tl-year{position:absolute;left:-2.7rem;font-size:0.55rem;font-weight:800;color:#a29bfe;width:2rem;text-align:right}
.tl-content{background:rgba(13,13,26,0.8);border-radius:10px;padding:0.5rem 0.6rem;flex:1;border:1px solid rgba(108,92,231,0.15);transition:all 0.3s}
.tl-content:hover{transform:translateX(4px)}
.tl-gen1{border-left:3px solid #e17055}
.tl-gen2{border-left:3px solid #fdcb6e}
.tl-gen3{border-left:3px solid #00cec9}
.tl-gen4{border-left:3px solid #6c5ce7}
.tl-title{font-weight:800;font-size:0.8rem;color:#e8ecf2}
.tl-code{font-family:monospace;font-size:0.72rem;color:#00cec9;background:rgba(0,0,0,0.3);padding:0.15rem 0.4rem;border-radius:4px;display:inline-block;margin:0.15rem 0}
.tl-desc{font-size:0.65rem;color:#c8d0e0}
.tl-difficulty{font-size:0.6rem;margin-top:0.15rem}
</style>`
        },
        {
          title: "为什么学底层知识？",
          content: `
<p>你可能会想：既然有Python这么好用，为什么还要了解机器码和汇编？</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎯 底层知识的价值</div>
  <div class="value-grid">
    <div class="value-card t0-fadein" style="animation-delay:0.2s">
      <div class="vc-icon">🐛</div>
      <div class="vc-title">调试能力</div>
      <div class="vc-desc">理解崩溃信息和内存错误，快速定位bug</div>
    </div>
    <div class="value-card t0-fadein" style="animation-delay:0.35s">
      <div class="vc-icon">⚡</div>
      <div class="vc-title">性能优化</div>
      <div class="vc-desc">知道代码在底层怎么跑，才能写出更快的程序</div>
    </div>
    <div class="value-card t0-fadein" style="animation-delay:0.5s">
      <div class="vc-icon">🔒</div>
      <div class="vc-title">安全领域</div>
      <div class="vc-desc">网络安全、逆向工程都需要汇编知识</div>
    </div>
    <div class="value-card t0-fadein" style="animation-delay:0.65s">
      <div class="vc-icon">🏗️</div>
      <div class="vc-title">系统编程</div>
      <div class="vc-desc">操作系统、驱动程序、嵌入式开发</div>
    </div>
    <div class="value-card t0-fadein" style="animation-delay:0.8s">
      <div class="vc-icon">🧠</div>
      <div class="vc-title">思维深度</div>
      <div class="vc-desc">真正理解"计算"的本质，成为更好的程序员</div>
    </div>
    <div class="value-card t0-fadein" style="animation-delay:0.95s">
      <div class="vc-icon">🎮</div>
      <div class="vc-title">游戏引擎</div>
      <div class="vc-desc">高性能游戏需要精细的底层优化</div>
    </div>
  </div>
  <div class="theory-callout" style="background:rgba(0,184,148,0.08);border-left-color:#00b894">🎓 <strong>恭喜你完成了机器码与汇编指令！</strong>你已经看到了代码最底层的样子——二进制的0和1。从机器码到Python，每一层抽象都是人类智慧的结晶。继续你的Python之旅吧！</div>
</div>
<style>
.value-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0.4rem;margin:0.5rem 0}
.value-card{background:rgba(13,13,26,0.8);border-radius:10px;padding:0.5rem;text-align:center;border:1px solid rgba(108,92,231,0.15);transition:all 0.3s;cursor:default}
.value-card:hover{transform:translateY(-3px);box-shadow:0 6px 18px rgba(108,92,231,0.15);border-color:rgba(108,92,231,0.4)}
.vc-icon{font-size:1.3rem;margin-bottom:0.2rem}
.vc-title{font-weight:800;font-size:0.78rem;color:#e8ecf2}
.vc-desc{font-size:0.65rem;color:#c8d0e0;margin-top:0.2rem;line-height:1.3}
</style>`
        }
      ],
      challenge: {
        desc: "🎯 用三种风格实现「求数组最大值」：汇编风格（只用while和索引）、C风格（用for）、Python风格（用max）。",
        hint: 'nums = [3, 7, 2, 9, 1, 8, 5]\n\n# 汇编风格\ndef max_asm(arr):\n    result = arr[0]\n    i = 1\n    while i < len(arr):\n        if arr[i] > result:\n            result = arr[i]\n        i = i + 1\n    return result\n\n# C风格\ndef max_c(arr):\n    result = arr[0]\n    for i in range(1, len(arr)):\n        if arr[i] > result:\n            result = arr[i]\n    return result\n\n# Python风格\ndef max_py(arr):\n    return max(arr)\n\nprint("汇编风格:", max_asm(nums))\nprint("C语言风格:", max_c(nums))\nprint("Python风格:", max_py(nums))',
        template: '# 三种风格求最大值\nnums = [3, 7, 2, 9, 1, 8, 5]\n',
        check: function(output) { return output.indexOf("9") !== -1; }
      }
    }
  ]
};

registerChapter('theory', CHAPTER0C);
