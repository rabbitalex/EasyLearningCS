// 第十九章：网络编程
const CHAPTER20 = {
  chapter: "第十九章：网络编程",
  icon: "🌐",
  lessons: [
    {
      id: "19-1",
      title: "TCP/IP基础概念",
      xp: 20,
      code: '# TCP/IP 模型层次\nlayers = [("应用层", "HTTP, FTP, SMTP", "你写的程序"), ("传输层", "TCP, UDP", "可靠/快速传输"), ("网络层", "IP", "找到目标电脑"), ("链路层", "以太网, WiFi", "物理传输")]\n\nprint("🌐 TCP/IP 四层模型")\nprint("=" * 40)\nfor item in layers:\n    name = item[0]\n    proto = item[1]\n    desc = item[2]\n    print(f"📦 {name}: {proto}")\n    print(f"   说明: {desc}")\n    print("-" * 40)',
      steps: [
        {
          title: "网络是怎么工作的？",
          content: `<p>网络通信就像寄快递📮 — 需要知道<strong>地址</strong>和<strong>传输方式</strong>！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🌐 TCP/IP 四层模型</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">📱</span><span class="ch1-vf-code">应用层（HTTP/FTP）</span><span class="ch1-vf-desc">你看到的网页、APP</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">📦</span><span class="ch1-vf-code">传输层（TCP/UDP）</span><span class="ch1-vf-desc">保证数据可靠送达</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">🗺️</span><span class="ch1-vf-code">网络层（IP）</span><span class="ch1-vf-desc">找到目标电脑的地址</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">🔌</span><span class="ch1-vf-code">链路层（WiFi/网线）</span><span class="ch1-vf-desc">实际的物理传输</span></div>
  </div>
  <div class="theory-callout">💡 <strong>IP地址</strong>像门牌号（如192.168.1.1），<strong>端口</strong>像房间号（如80=网页）！</div>
</div>
<style>
.theory-anim-box{background:linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,206,201,0.08));border:1px solid rgba(108,92,231,0.2);border-radius:16px;padding:1.2rem;margin:1rem 0}
.theory-anim-title{font-weight:800;color:#FF9800;margin-bottom:1rem;font-size:0.9rem}
.theory-callout{background:rgba(108,92,231,0.1);border-left:3px solid #6c5ce7;padding:0.5rem 0.8rem;border-radius:0 8px 8px 0;font-size:0.8rem;color:#e8ecf2;margin-top:0.8rem}
</style>`
        },
        {
          title: "TCP vs UDP",
          content: `<p>TCP和UDP是两种不同的传输协议：</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">⚖️ TCP vs UDP</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">TCP</span><span class="ch1-vf-code">可靠传输、有序、确认</span><span class="ch1-vf-desc">像打电话📞 有应答</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">UDP</span><span class="ch1-vf-code">快速传输、无序、不确认</span><span class="ch1-vf-desc">像发广播📻 没反馈</span></div>
  </div>
  <div class="theory-callout">🎮 游戏用UDP（速度重要）、网页用TCP（可靠重要）、视频直播用UDP！</div>
</div>`
        }
      ],
      challenge: {
        desc: "🎯 打印一个TCP/IP模型图表，列出每层的名称、协议和用途",
        hint: 'layers = [("应用层", "HTTP/HTTPS", "网页浏览"), ("传输层", "TCP/UDP", "数据传输"), ("网络层", "IP/ICMP", "路由寻址"), ("链路层", "Ethernet", "物理传输")]\nfor i in range(len(layers)):\n    item = layers[i]\n    print(f"第{i+1}层 [{item[0]}] 协议:{item[1]} 用途:{item[2]}")',
        template: '# TCP/IP模型\n',
        check: function(output) { return output.indexOf("层") !== -1 && output.indexOf("TCP") !== -1; }
      }
    },
    {
      id: "19-2",
      title: "TCP编程基础",
      xp: 25,
      code: '# 模拟TCP通信过程\nclass TCPServer:\n    def __init__(self, port):\n        self.port = port\n        self.clients = []\n    def accept(self, client_name):\n        self.clients.append(client_name)\n        print(f"[服务器] {client_name}已连接(端口:{self.port})")\n        return f"欢迎{client_name}!"\n    def close(self):\n        print(f"[服务器] 关闭连接")\n\nclass TCPClient:\n    def connect(self, server, name):\n        msg = server.accept(name)\n        print(f"[{name}] 收到回复: {msg}")\n\nserver = TCPServer(8080)\nclient1 = TCPClient()\nclient2 = TCPClient()\nclient1.connect(server, "Alice")\nclient2.connect(server, "Bob")\nserver.close()',
      steps: [
        {
          title: "TCP通信流程",
          content: `<p>TCP通信就像打电话：先拨号连接，然后对话，最后挂断！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📞 TCP三次握手</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">①</span><span class="ch1-vf-code">客户端 → SYN → 服务器</span><span class="ch1-vf-desc">"喂，你在吗？"</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">②</span><span class="ch1-vf-code">服务器 → SYN+ACK → 客户端</span><span class="ch1-vf-desc">"在的，你说吧"</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">③</span><span class="ch1-vf-code">客户端 → ACK → 服务器</span><span class="ch1-vf-desc">"好的，开始传输"</span></div>
  </div>
  <div class="theory-callout">💡 在Python中使用 <code>socket</code> 模块进行TCP编程：创建socket → bind → listen → accept!</div>
</div>`
        }
      ],
      challenge: {
        desc: "🎯 模拟一个简单的聊天室，服务器广播消息给所有客户端",
        hint: 'class ChatRoom:\n    def __init__(self):\n        self.users = []\n    def join(self, name):\n        self.users.append(name)\n        self.broadcast(f"{name} 加入了聊天室")\n    def broadcast(self, msg):\n        for user in self.users:\n            print(f"[{user}] 收到: {msg}")\n    def send(self, sender, msg):\n        self.broadcast(f"{sender}: {msg}")\n\nroom = ChatRoom()\nroom.join("Alice")\nroom.join("Bob")\nroom.send("Alice", "大家好！")',
        template: '# 模拟聊天室\n',
        check: function(output) { return output.indexOf("加入") !== -1 || output.indexOf("收到") !== -1; }
      }
    },
    {
      id: "19-3",
      title: "HTTP协议入门",
      xp: 25,
      code: '# HTTP 请求和响应模拟\nclass HTTPRequest:\n    def __init__(self, method, path):\n        self.method = method\n        self.path = path\n        self.headers = {}\n    def add_header(self, key, value):\n        self.headers[key] = value\n    def show(self):\n        print(f"{self.method} {self.path} HTTP/1.1")\n        for k in self.headers:\n            print(f"{k}: {self.headers[k]}")\n\nclass HTTPResponse:\n    def __init__(self, status, body):\n        self.status = status\n        self.body = body\n    def show(self):\n        print(f"HTTP/1.1 {self.status}")\n        print(f"Content-Length: {len(self.body)}")\n        print()\n        print(self.body)\n\n# 模拟请求\nreq = HTTPRequest("GET", "/index.html")\nreq.add_header("Host", "example.com")\nprint("=== 请求 ===")\nreq.show()\n\nresp = HTTPResponse("200 OK", "<h1>Hello!</h1>")\nprint("\\n=== 响应 ===")\nresp.show()',
      steps: [
        {
          title: "HTTP协议",
          content: `<p>HTTP是浏览器和服务器之间的"通话语言"！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🌐 HTTP请求方法</div>
  <div class="ch1-var-flow">
    <div class="ch1-vf-step"><span class="ch1-vf-num">GET</span><span class="ch1-vf-code">获取资源</span><span class="ch1-vf-desc">浏览网页</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">POST</span><span class="ch1-vf-code">提交数据</span><span class="ch1-vf-desc">登录、注册</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">PUT</span><span class="ch1-vf-code">更新资源</span><span class="ch1-vf-desc">修改信息</span></div>
    <div class="ch1-vf-step"><span class="ch1-vf-num">DELETE</span><span class="ch1-vf-code">删除资源</span><span class="ch1-vf-desc">删除数据</span></div>
  </div>
  <div class="theory-callout">💡 每次你在浏览器打开网页，就是发了一个<strong>GET请求</strong>给服务器！</div>
</div>`
        }
      ],
      challenge: {
        desc: "🎯 模拟一个简单的Web路由器，根据不同URL返回不同内容",
        hint: 'def router(path):\n    routes = {"/": "首页欢迎！", "/about": "关于我们", "/contact": "联系方式: xxx@example.com"}\n    if path in routes:\n        print(f"200 OK: {routes[path]}")\n    else:\n        print(f"404 Not Found: {path}")\n\nrouter("/")\nrouter("/about")\nrouter("/unknown")',
        template: '# HTTP路由模拟\n',
        check: function(output) { return output.indexOf("200") !== -1 || output.indexOf("404") !== -1; }
      }
    }
  ]
};

registerChapter('python', CHAPTER20);
