// 卷一 · 理论 - 进制
const CHAPTER_V1_NUMERAL = {
  chapter: "第三章：进制与编码",
  chapterNum: 3,
  icon: "🔢",
  lessons: [
    {
      id: "v1-num-1",
      title: "进制转换 —— 十进制、二进制、八进制、十六进制",
      xp: 20,
      code: '# 进制转换全攻略\nn = 255\nprint(f"十进制: {n}")\nprint(f"二进制: {bin(n)}")\nprint(f"八进制: {oct(n)}")\nprint(f"十六进制: {hex(n)}")\n\n# 不同进制表示同一个数\nprint("\\n=== 不同进制写法 ===")\nprint("0b11111111 =", 0b11111111)\nprint("0o377      =", 0o377)\nprint("0xFF       =", 0xFF)\nprint("255        =", 255)\nprint("它们全都相等！")\n\n# 进制转换练习\nfor num in [10, 42, 100, 128, 1024]:\n    print(f"{num:>5d} = {bin(num):>12s} = {oct(num):>6s} = {hex(num):>5s}")',
      steps: [
        {
          title: "为什么需要不同的进制？",
          content: `
<p>我们日常用<strong>十进制</strong>（0-9），但计算机只认<strong>二进制</strong>（0-1）。</p>
<p>为了方便程序员，还有<strong>八进制</strong>（0-7）和<strong>十六进制</strong>（0-F）。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔄 交互式进制转换器</div>
  <div style="text-align:center;padding:1rem">
    <input type="number" id="numConvInput" value="42" min="0" max="65535" oninput="convertNumBase()" style="width:120px;padding:0.6rem 1rem;border-radius:10px;border:2px solid rgba(253,121,168,0.4);background:rgba(253,121,168,0.15);color:white;font-size:1.2rem;font-weight:800;text-align:center">
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.8rem;margin-top:1rem">
      <div class="t0-fadein" style="animation-delay:0.2s;background:rgba(255,152,0,0.12);border-radius:10px;padding:0.8rem">
        <div style="font-size:0.65rem;color:rgba(255,255,255,0.5)">十进制 (DEC)</div>
        <div id="numDec" style="font-size:1.1rem;font-weight:800;color:#FF9800;font-family:monospace;margin-top:0.3rem">42</div>
      </div>
      <div class="t0-fadein" style="animation-delay:0.4s;background:rgba(0,206,201,0.12);border-radius:10px;padding:0.8rem">
        <div style="font-size:0.65rem;color:rgba(255,255,255,0.5)">二进制 (BIN)</div>
        <div id="numBin" style="font-size:1.1rem;font-weight:800;color:#00cec9;font-family:monospace;margin-top:0.3rem">101010</div>
      </div>
      <div class="t0-fadein" style="animation-delay:0.6s;background:rgba(253,121,168,0.12);border-radius:10px;padding:0.8rem">
        <div style="font-size:0.65rem;color:rgba(255,255,255,0.5)">八进制 (OCT)</div>
        <div id="numOct" style="font-size:1.1rem;font-weight:800;color:#fd79a8;font-family:monospace;margin-top:0.3rem">52</div>
      </div>
      <div class="t0-fadein" style="animation-delay:0.8s;background:rgba(253,121,168,0.12);border-radius:10px;padding:0.8rem">
        <div style="font-size:0.65rem;color:rgba(255,255,255,0.5)">十六进制 (HEX)</div>
        <div id="numHex" style="font-size:1.1rem;font-weight:800;color:#fd79a8;font-family:monospace;margin-top:0.3rem">2A</div>
      </div>
    </div>
  </div>
</div>
<script>
function convertNumBase(){var v=parseInt(document.getElementById('numConvInput').value)||0;document.getElementById('numDec').textContent=v;document.getElementById('numBin').textContent=v.toString(2);document.getElementById('numOct').textContent=v.toString(8);document.getElementById('numHex').textContent=v.toString(16).toUpperCase();}
</script>`
        },
        {
          title: "十六进制 —— 程序员的好朋友",
          content: `
<p>十六进制用 0-9 和 A-F 表示，每一位相当于4个二进制位。在颜色编码、内存地址等场景中广泛使用。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🎨 十六进制与颜色</div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.8rem;margin:1rem 0">
    <div style="text-align:center">
      <div style="width:60px;height:60px;border-radius:12px;background:#FF9800;margin:0 auto 0.5rem"></div>
      <div style="font-family:monospace;font-size:0.8rem;color:#FF9800;font-weight:700">#FF9800</div>
      <div style="font-size:0.65rem;color:rgba(255,255,255,0.4)">R:255 G:152 B:0</div>
    </div>
    <div style="text-align:center">
      <div style="width:60px;height:60px;border-radius:12px;background:#00CEC9;margin:0 auto 0.5rem"></div>
      <div style="font-family:monospace;font-size:0.8rem;color:#00CEC9;font-weight:700">#00CEC9</div>
      <div style="font-size:0.65rem;color:rgba(255,255,255,0.4)">R:0 G:206 B:201</div>
    </div>
    <div style="text-align:center">
      <div style="width:60px;height:60px;border-radius:12px;background:#FD79A8;margin:0 auto 0.5rem"></div>
      <div style="font-family:monospace;font-size:0.8rem;color:#FD79A8;font-weight:700">#FD79A8</div>
      <div style="font-size:0.65rem;color:rgba(255,255,255,0.4)">R:108 G:92 B:231</div>
    </div>
  </div>
  <div class="theory-callout">💡 每种颜色由 RGB 三个通道组成，每通道0-255，用十六进制表示正好是两位（00-FF）</div>
</div>`
        }
      ],
      challenge: {
        description: "写一个程序，将十进制数 1024 转换为二进制、八进制和十六进制并打印。",
        hint: "使用 bin(), oct(), hex() 函数",
        solution: 'n = 1024\nprint(bin(n))\nprint(oct(n))\nprint(hex(n))'
      }
    },
    {
      id: "v1-num-2",
      title: "字符编码 —— ASCII、Unicode 与 UTF-8",
      xp: 25,
      code: '# 字符编码探索\nprint("=== ASCII 编码 ===")\nfor ch in "Hello":\n    print(f"  \'{ch}\' → ASCII码: {ord(ch)} → 二进制: {bin(ord(ch))}")\n\nprint("\\n=== Unicode 编码 ===")\nfor ch in "你好🌍":\n    code = ord(ch)\n    print(f"  \'{ch}\' → Unicode: U+{code:04X} → 十进制: {code}")\n\nprint("\\n=== 常用ASCII码范围 ===")\nprint("  数字 0-9:  48-57")\nprint("  大写 A-Z:  65-90")\nprint("  小写 a-z:  97-122")\n\n# 凯撒密码小游戏\nprint("\\n=== 凯撒密码加密 ===")\nmsg = "HELLO"\nshift = 3\nencrypted = ""\nfor ch in msg:\n    new_code = (ord(ch) - 65 + shift) % 26 + 65\n    encrypted += chr(new_code)\nprint(f"  原文: {msg}")\nprint(f"  密文: {encrypted}")\nprint(f"  偏移: {shift}")',
      steps: [
        {
          title: "从数字到文字：ASCII编码",
          content: '<p>计算机只认识数字，那文字怎么存？答案是给每个字符分配一个<strong>编号</strong>。<strong>ASCII</strong>（1963年）用7位二进制（0-127）表示128个字符。</p><div class="theory-anim-box"><div class="theory-anim-title">📋 ASCII 可视化表</div><div style="margin:1rem 0"><div style="display:grid;grid-template-columns:repeat(8,1fr);gap:0.3rem;font-size:0.65rem;font-family:monospace">' +
          (function(){var h='';for(var i=32;i<56;i++){var c=i===32?'SP':String.fromCharCode(i);h+='<div style="background:rgba(253,121,168,0.1);border:1px solid rgba(253,121,168,0.15);border-radius:4px;padding:0.25rem;text-align:center"><span style="color:rgba(255,255,255,0.35);font-size:0.55rem">'+i+'</span><br><span style="color:#fd79a8;font-weight:700">'+c+'</span></div>';}return h;})()
          + '</div><div style="display:grid;grid-template-columns:repeat(8,1fr);gap:0.3rem;margin-top:0.5rem"><div style="background:rgba(0,206,201,0.1);border:1px solid rgba(0,206,201,0.15);border-radius:6px;padding:0.3rem;text-align:center;grid-column:span 3"><span style="color:#00cec9;font-size:0.7rem;font-weight:700">65-90: A-Z</span></div><div style="background:rgba(255,152,0,0.1);border:1px solid rgba(255,152,0,0.15);border-radius:6px;padding:0.3rem;text-align:center;grid-column:span 3"><span style="color:#FF9800;font-size:0.7rem;font-weight:700">97-122: a-z</span></div><div style="background:rgba(253,121,168,0.1);border:1px solid rgba(253,121,168,0.15);border-radius:6px;padding:0.3rem;text-align:center;grid-column:span 2"><span style="color:#fd79a8;font-size:0.7rem;font-weight:700">48-57: 0-9</span></div></div></div><div class="theory-callout">💡 大写A的ASCII码是65，小写a是97，差值是32。所以大小写转换就是 ±32！</div></div>'
        },
        {
          title: "走向世界：Unicode与UTF-8",
          content: '<p>ASCII只有128个字符，装不下中文、日文、韩文、emoji... 于是<strong>Unicode</strong>诞生了，它给全世界的字符编号！</p><div class="theory-anim-box"><div class="theory-anim-title">🌍 从 ASCII 到 Unicode 的进化</div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.8rem;margin:1rem 0"><div class="t0-fadein" style="animation-delay:0.2s;background:rgba(253,121,168,0.12);border:2px solid rgba(253,121,168,0.3);border-radius:12px;padding:0.8rem;text-align:center"><div style="font-size:1.5rem;margin-bottom:0.3rem">🇺🇸</div><div style="font-weight:800;color:#fd79a8;font-size:0.85rem">ASCII</div><div style="font-size:0.65rem;color:rgba(255,255,255,0.4);margin-top:0.3rem">128个字符<br>7位编码<br>仅英文+符号</div></div><div class="t0-fadein" style="animation-delay:0.4s;background:rgba(0,206,201,0.12);border:2px solid rgba(0,206,201,0.3);border-radius:12px;padding:0.8rem;text-align:center"><div style="font-size:1.5rem;margin-bottom:0.3rem">🌏</div><div style="font-weight:800;color:#00cec9;font-size:0.85rem">Unicode</div><div style="font-size:0.65rem;color:rgba(255,255,255,0.4);margin-top:0.3rem">14万+字符<br>统一编号<br>全球语言+emoji</div></div><div class="t0-fadein" style="animation-delay:0.6s;background:rgba(255,152,0,0.12);border:2px solid rgba(255,152,0,0.3);border-radius:12px;padding:0.8rem;text-align:center"><div style="font-size:1.5rem;margin-bottom:0.3rem">📦</div><div style="font-weight:800;color:#FF9800;font-size:0.85rem">UTF-8</div><div style="font-size:0.65rem;color:rgba(255,255,255,0.4);margin-top:0.3rem">变长编码<br>1-4字节<br>兼容ASCII</div></div></div><div style="background:rgba(0,0,0,0.2);border-radius:8px;padding:0.6rem;margin:0.5rem 0"><div style="font-size:0.72rem;color:rgba(255,255,255,0.5);font-family:monospace;line-height:1.8">\'A\' → U+0041 → UTF-8: <span style="color:#69F0AE">01000001</span> (1字节)<br>\'中\' → U+4E2D → UTF-8: <span style="color:#FF9800">11100100 10111000 10101101</span> (3字节)<br>\'🌍\' → U+1F30D → UTF-8: <span style="color:#fd79a8">11110000 10011111 10001100 10001101</span> (4字节)</div></div><div class="theory-callout">💡 UTF-8 是 Unicode 的<strong>编码方式</strong>：英文1字节（兼容ASCII），中文3字节，emoji 4字节。网页默认都用UTF-8！</div></div>'
        }
      ],
      challenge: {
        description: "用凯撒密码将 'PYTHON' 向后偏移5位加密，再将结果解密回来。",
        hint: "加密: (ord(ch)-65+shift)%26+65, 解密: (ord(ch)-65-shift)%26+65",
        solution: 'msg = "PYTHON"\nshift = 5\nenc = ""\nfor ch in msg:\n    enc += chr((ord(ch)-65+shift)%26+65)\nprint(f"加密: {msg} → {enc}")\ndec = ""\nfor ch in enc:\n    dec += chr((ord(ch)-65-shift)%26+65)\nprint(f"解密: {enc} → {dec}")'
      }
    }
  ]
};

registerChapter('theory', CHAPTER_V1_NUMERAL);
