// 卷三 · 数据结构与算法 - 数据结构篇
const CHAPTER_V3_DS = {
  chapter: "第一章：数据结构",
  icon: "🏗️",
  lessons: [
    {
      id: "v3-ds-1",
      title: "数组与链表 —— 线性存储的两大基石",
      xp: 25,
      code: '# 数组 vs 链表\n\n# Python的list就是动态数组\narr = [10, 20, 30, 40, 50]\nprint("=== 数组操作 ===")\nprint("数组:", arr)\nprint("索引访问 arr[2]:", arr[2])  # O(1)\narr.append(60)  # O(1) 均摊\nprint("尾部添加:", arr)\narr.insert(1, 15)  # O(n)\nprint("插入到位置1:", arr)\n\n# 模拟链表\nclass Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None\n\nclass LinkedList:\n    def __init__(self):\n        self.head = None\n    \n    def append(self, data):\n        new_node = Node(data)\n        if not self.head:\n            self.head = new_node\n            return\n        curr = self.head\n        while curr.next:\n            curr = curr.next\n        curr.next = new_node\n    \n    def display(self):\n        result = []\n        curr = self.head\n        while curr:\n            result.append(str(curr.data))\n            curr = curr.next\n        return " → ".join(result) + " → None"\n\nll = LinkedList()\nfor x in [10, 20, 30, 40]:\n    ll.append(x)\nprint("\\n=== 链表操作 ===")\nprint("链表:", ll.display())',
      steps: [
        {
          title: "数组：连续内存的高速公路",
          content: `
<p><strong>数组</strong>将元素连续存放在内存中，通过索引可以<strong>O(1)</strong>直接访问任何元素。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📊 数组内存布局动画</div>
  <div id="arrayDemo" style="padding:1rem">
    <div style="display:flex;gap:3px;justify-content:center;margin:1rem 0" id="arrayBoxes">
      <div class="t0-fadein" style="animation-delay:0.1s;width:50px;height:50px;border:2px solid rgba(0,206,201,0.4);border-radius:8px;background:rgba(0,206,201,0.1);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.9rem;color:#00cec9;position:relative;transition:all 0.3s" data-idx="0">10<div style="position:absolute;bottom:-18px;font-size:0.55rem;color:rgba(255,255,255,0.3)">[0]</div></div>
      <div class="t0-fadein" style="animation-delay:0.2s;width:50px;height:50px;border:2px solid rgba(0,206,201,0.4);border-radius:8px;background:rgba(0,206,201,0.1);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.9rem;color:#00cec9;position:relative;transition:all 0.3s" data-idx="1">20<div style="position:absolute;bottom:-18px;font-size:0.55rem;color:rgba(255,255,255,0.3)">[1]</div></div>
      <div class="t0-fadein" style="animation-delay:0.3s;width:50px;height:50px;border:2px solid rgba(0,206,201,0.4);border-radius:8px;background:rgba(0,206,201,0.1);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.9rem;color:#00cec9;position:relative;transition:all 0.3s" data-idx="2">30<div style="position:absolute;bottom:-18px;font-size:0.55rem;color:rgba(255,255,255,0.3)">[2]</div></div>
      <div class="t0-fadein" style="animation-delay:0.4s;width:50px;height:50px;border:2px solid rgba(0,206,201,0.4);border-radius:8px;background:rgba(0,206,201,0.1);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.9rem;color:#00cec9;position:relative;transition:all 0.3s" data-idx="3">40<div style="position:absolute;bottom:-18px;font-size:0.55rem;color:rgba(255,255,255,0.3)">[3]</div></div>
      <div class="t0-fadein" style="animation-delay:0.5s;width:50px;height:50px;border:2px solid rgba(0,206,201,0.4);border-radius:8px;background:rgba(0,206,201,0.1);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.9rem;color:#00cec9;position:relative;transition:all 0.3s" data-idx="4">50<div style="position:absolute;bottom:-18px;font-size:0.55rem;color:rgba(255,255,255,0.3)">[4]</div></div>
    </div>
    <div style="text-align:center;font-size:0.7rem;color:rgba(255,255,255,0.4);margin-top:1.5rem">连续内存地址：0x1000, 0x1004, 0x1008, 0x100C, 0x1010</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;margin-top:1rem">
      <div style="background:rgba(0,206,201,0.08);border-radius:8px;padding:0.6rem;text-align:center">
        <div style="color:#00cec9;font-weight:700;font-size:0.8rem">✅ 随机访问 O(1)</div>
        <div style="font-size:0.65rem;color:rgba(255,255,255,0.4)">通过索引直接计算地址</div>
      </div>
      <div style="background:rgba(253,121,168,0.08);border-radius:8px;padding:0.6rem;text-align:center">
        <div style="color:#fd79a8;font-weight:700;font-size:0.8rem">❌ 插入/删除 O(n)</div>
        <div style="font-size:0.65rem;color:rgba(255,255,255,0.4)">需要移动后续所有元素</div>
      </div>
    </div>
  </div>
</div>`
        },
        {
          title: "链表：灵活的链式存储",
          content: `
<p><strong>链表</strong>的每个节点包含数据和指向下一个节点的指针，插入删除非常高效。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔗 链表结构动画</div>
  <div style="display:flex;align-items:center;justify-content:center;gap:0.3rem;margin:1rem 0;flex-wrap:wrap">
    <div class="t0-fadein" style="animation-delay:0.2s;display:flex;align-items:center;gap:0.3rem">
      <div style="display:flex;border:2px solid rgba(108,92,231,0.4);border-radius:10px;overflow:hidden">
        <div style="background:rgba(108,92,231,0.15);padding:0.5rem 0.8rem;font-weight:800;color:#6c5ce7;font-size:0.85rem">10</div>
        <div style="background:rgba(108,92,231,0.08);padding:0.5rem 0.4rem;font-size:0.6rem;color:rgba(255,255,255,0.3);border-left:1px solid rgba(108,92,231,0.2)">next→</div>
      </div>
      <div style="color:rgba(255,255,255,0.3)">→</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.4s;display:flex;align-items:center;gap:0.3rem">
      <div style="display:flex;border:2px solid rgba(0,206,201,0.4);border-radius:10px;overflow:hidden">
        <div style="background:rgba(0,206,201,0.15);padding:0.5rem 0.8rem;font-weight:800;color:#00cec9;font-size:0.85rem">20</div>
        <div style="background:rgba(0,206,201,0.08);padding:0.5rem 0.4rem;font-size:0.6rem;color:rgba(255,255,255,0.3);border-left:1px solid rgba(0,206,201,0.2)">next→</div>
      </div>
      <div style="color:rgba(255,255,255,0.3)">→</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.6s;display:flex;align-items:center;gap:0.3rem">
      <div style="display:flex;border:2px solid rgba(255,152,0,0.4);border-radius:10px;overflow:hidden">
        <div style="background:rgba(255,152,0,0.15);padding:0.5rem 0.8rem;font-weight:800;color:#FF9800;font-size:0.85rem">30</div>
        <div style="background:rgba(255,152,0,0.08);padding:0.5rem 0.4rem;font-size:0.6rem;color:rgba(255,255,255,0.3);border-left:1px solid rgba(255,152,0,0.2)">next→</div>
      </div>
      <div style="color:rgba(255,255,255,0.3)">→</div>
    </div>
    <div class="t0-fadein" style="animation-delay:0.8s;background:rgba(253,121,168,0.15);border:2px solid rgba(253,121,168,0.3);border-radius:10px;padding:0.5rem 0.8rem;font-weight:800;color:#fd79a8;font-size:0.8rem">None</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;margin-top:0.5rem">
    <div style="background:rgba(0,206,201,0.08);border-radius:8px;padding:0.6rem;text-align:center">
      <div style="color:#00cec9;font-weight:700;font-size:0.8rem">✅ 插入/删除 O(1)</div>
      <div style="font-size:0.65rem;color:rgba(255,255,255,0.4)">只需修改指针</div>
    </div>
    <div style="background:rgba(253,121,168,0.08);border-radius:8px;padding:0.6rem;text-align:center">
      <div style="color:#fd79a8;font-weight:700;font-size:0.8rem">❌ 随机访问 O(n)</div>
      <div style="font-size:0.65rem;color:rgba(255,255,255,0.4)">需要从头遍历</div>
    </div>
  </div>
</div>`
        },
        {
          title: "栈与队列",
          content: `
<p><strong>栈</strong>（Stack）：后进先出（LIFO），像一叠盘子。<strong>队列</strong>（Queue）：先进先出（FIFO），像排队。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📚 栈与队列动画模拟</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin:1rem 0">
    <div style="text-align:center">
      <div style="font-weight:800;color:#6c5ce7;margin-bottom:0.5rem">📚 栈 (LIFO)</div>
      <div id="stackVis" style="display:flex;flex-direction:column-reverse;align-items:center;gap:3px;min-height:120px;background:rgba(108,92,231,0.05);border-radius:10px;padding:0.5rem;border:1px solid rgba(108,92,231,0.2)"></div>
      <div style="display:flex;gap:0.3rem;justify-content:center;margin-top:0.5rem">
        <button onclick="stackPush()" style="padding:0.3rem 0.8rem;border-radius:6px;border:none;background:#6c5ce7;color:white;font-size:0.7rem;font-weight:700;cursor:pointer">Push</button>
        <button onclick="stackPop()" style="padding:0.3rem 0.8rem;border-radius:6px;border:none;background:#fd79a8;color:white;font-size:0.7rem;font-weight:700;cursor:pointer">Pop</button>
      </div>
    </div>
    <div style="text-align:center">
      <div style="font-weight:800;color:#00cec9;margin-bottom:0.5rem">🚶 队列 (FIFO)</div>
      <div id="queueVis" style="display:flex;align-items:center;gap:3px;min-height:50px;background:rgba(0,206,201,0.05);border-radius:10px;padding:0.5rem;border:1px solid rgba(0,206,201,0.2);justify-content:center;flex-wrap:wrap"></div>
      <div style="display:flex;gap:0.3rem;justify-content:center;margin-top:0.5rem">
        <button onclick="queueEnqueue()" style="padding:0.3rem 0.8rem;border-radius:6px;border:none;background:#00cec9;color:white;font-size:0.7rem;font-weight:700;cursor:pointer">Enqueue</button>
        <button onclick="queueDequeue()" style="padding:0.3rem 0.8rem;border-radius:6px;border:none;background:#fd79a8;color:white;font-size:0.7rem;font-weight:700;cursor:pointer">Dequeue</button>
      </div>
    </div>
  </div>
</div>
<script>
var stackData=[],queueData=[],dsCounter=1;
function stackPush(){stackData.push(dsCounter++);renderStack();}
function stackPop(){if(stackData.length>0){stackData.pop();renderStack();}}
function renderStack(){var el=document.getElementById('stackVis');el.innerHTML='';stackData.forEach(function(v,i){el.innerHTML+='<div style="background:rgba(108,92,231,0.2);border:1px solid rgba(108,92,231,0.4);border-radius:6px;padding:0.3rem 1.5rem;font-weight:700;color:#6c5ce7;font-size:0.8rem;animation:treeExpand 0.2s ease">'+(i===stackData.length-1?'⬆️ ':'')+v+'</div>';});}
function queueEnqueue(){queueData.push(dsCounter++);renderQueue();}
function queueDequeue(){if(queueData.length>0){queueData.shift();renderQueue();}}
function renderQueue(){var el=document.getElementById('queueVis');el.innerHTML='';queueData.forEach(function(v,i){el.innerHTML+='<div style="background:rgba(0,206,201,0.2);border:1px solid rgba(0,206,201,0.4);border-radius:6px;padding:0.3rem 0.8rem;font-weight:700;color:#00cec9;font-size:0.8rem;animation:treeExpand 0.2s ease">'+(i===0?'⬅️ ':'')+v+'</div>';});}
</script>`
        }
      ],
      challenge: {
        description: "实现一个简单的栈类，支持push、pop和peek操作，然后演示括号匹配：检查'({[]})'是否平衡。",
        hint: "遇到左括号push，遇到右括号pop并比较",
        solution: 'class Stack:\n    def __init__(self):\n        self.items = []\n    def push(self, item):\n        self.items.append(item)\n    def pop(self):\n        return self.items.pop() if self.items else None\n    def peek(self):\n        return self.items[-1] if self.items else None\n\ndef check_brackets(s):\n    stack = Stack()\n    pairs = {")":"(", "]":"[", "}":"{"}\n    for ch in s:\n        if ch in "([{":\n            stack.push(ch)\n        elif ch in ")]}":\n            if stack.pop() != pairs[ch]:\n                return False\n    return len(stack.items) == 0\n\nprint(check_brackets("({[]})"))\nprint(check_brackets("([)]"))'
      }
    },
    {
      id: "v3-ds-2",
      title: "树与图 —— 非线性数据结构",
      xp: 30,
      code: '# 二叉树的实现与遍历\n\nclass TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n\n# 构建一棵二叉树\nroot = TreeNode(1)\nroot.left = TreeNode(2)\nroot.right = TreeNode(3)\nroot.left.left = TreeNode(4)\nroot.left.right = TreeNode(5)\nroot.right.left = TreeNode(6)\nroot.right.right = TreeNode(7)\n\n# 三种遍历方式\ndef preorder(node, result=[]):\n    if node:\n        result.append(node.val)\n        preorder(node.left, result)\n        preorder(node.right, result)\n    return result\n\ndef inorder(node, result=[]):\n    if node:\n        inorder(node.left, result)\n        result.append(node.val)\n        inorder(node.right, result)\n    return result\n\ndef postorder(node, result=[]):\n    if node:\n        postorder(node.left, result)\n        postorder(node.right, result)\n        result.append(node.val)\n    return result\n\nprint("前序遍历:", preorder(root, []))\nprint("中序遍历:", inorder(root, []))\nprint("后序遍历:", postorder(root, []))',
      steps: [
        {
          title: "二叉树：层次化的数据组织",
          content: `
<p><strong>树</strong>是一种层次化的数据结构，<strong>二叉树</strong>的每个节点最多有两个子节点。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🌳 二叉树结构可视化</div>
  <div style="text-align:center;padding:1rem">
    <div style="display:inline-block">
      <div class="t0-fadein" style="animation-delay:0.2s;width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#FF9800,#fdcb6e);display:flex;align-items:center;justify-content:center;font-weight:900;color:#1a2332;margin:0 auto;font-size:1rem">1</div>
      <div style="display:flex;justify-content:center;gap:4rem;margin-top:0.3rem">
        <div style="text-align:center">
          <div style="font-size:0.7rem;color:rgba(255,255,255,0.2);margin-bottom:2px">╱</div>
          <div class="t0-fadein" style="animation-delay:0.4s;width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#6c5ce7,#a29bfe);display:flex;align-items:center;justify-content:center;font-weight:900;color:white;margin:0 auto;font-size:0.9rem">2</div>
          <div style="display:flex;gap:1.5rem;margin-top:0.3rem;justify-content:center">
            <div style="text-align:center">
              <div style="font-size:0.6rem;color:rgba(255,255,255,0.2)">╱</div>
              <div class="t0-fadein" style="animation-delay:0.6s;width:32px;height:32px;border-radius:50%;background:rgba(0,206,201,0.3);border:2px solid rgba(0,206,201,0.5);display:flex;align-items:center;justify-content:center;font-weight:800;color:#00cec9;margin:0 auto;font-size:0.8rem">4</div>
            </div>
            <div style="text-align:center">
              <div style="font-size:0.6rem;color:rgba(255,255,255,0.2)">╲</div>
              <div class="t0-fadein" style="animation-delay:0.7s;width:32px;height:32px;border-radius:50%;background:rgba(0,206,201,0.3);border:2px solid rgba(0,206,201,0.5);display:flex;align-items:center;justify-content:center;font-weight:800;color:#00cec9;margin:0 auto;font-size:0.8rem">5</div>
            </div>
          </div>
        </div>
        <div style="text-align:center">
          <div style="font-size:0.7rem;color:rgba(255,255,255,0.2);margin-bottom:2px">╲</div>
          <div class="t0-fadein" style="animation-delay:0.5s;width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#fd79a8,#e84393);display:flex;align-items:center;justify-content:center;font-weight:900;color:white;margin:0 auto;font-size:0.9rem">3</div>
          <div style="display:flex;gap:1.5rem;margin-top:0.3rem;justify-content:center">
            <div style="text-align:center">
              <div style="font-size:0.6rem;color:rgba(255,255,255,0.2)">╱</div>
              <div class="t0-fadein" style="animation-delay:0.8s;width:32px;height:32px;border-radius:50%;background:rgba(253,121,168,0.2);border:2px solid rgba(253,121,168,0.4);display:flex;align-items:center;justify-content:center;font-weight:800;color:#fd79a8;margin:0 auto;font-size:0.8rem">6</div>
            </div>
            <div style="text-align:center">
              <div style="font-size:0.6rem;color:rgba(255,255,255,0.2)">╲</div>
              <div class="t0-fadein" style="animation-delay:0.9s;width:32px;height:32px;border-radius:50%;background:rgba(253,121,168,0.2);border:2px solid rgba(253,121,168,0.4);display:flex;align-items:center;justify-content:center;font-weight:800;color:#fd79a8;margin:0 auto;font-size:0.8rem">7</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.5rem;margin-top:0.5rem;font-size:0.7rem;text-align:center">
    <div style="background:rgba(108,92,231,0.1);border-radius:6px;padding:0.4rem"><span style="color:#6c5ce7;font-weight:700">前序</span>: 1,2,4,5,3,6,7</div>
    <div style="background:rgba(0,206,201,0.1);border-radius:6px;padding:0.4rem"><span style="color:#00cec9;font-weight:700">中序</span>: 4,2,5,1,6,3,7</div>
    <div style="background:rgba(253,121,168,0.1);border-radius:6px;padding:0.4rem"><span style="color:#fd79a8;font-weight:700">后序</span>: 4,5,2,6,7,3,1</div>
  </div>
</div>`
        }
      ],
      challenge: {
        description: "实现一个二叉搜索树(BST)，支持insert和search操作。插入[5,3,7,1,4,6,8]，然后搜索4和9。",
        hint: "BST左子树小于根，右子树大于根",
        solution: 'class BSTNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = self.right = None\n\ndef insert(root, val):\n    if not root: return BSTNode(val)\n    if val < root.val: root.left = insert(root.left, val)\n    else: root.right = insert(root.right, val)\n    return root\n\ndef search(root, val):\n    if not root: return False\n    if val == root.val: return True\n    if val < root.val: return search(root.left, val)\n    return search(root.right, val)\n\nroot = None\nfor v in [5,3,7,1,4,6,8]:\n    root = insert(root, v)\nprint("搜索4:", search(root, 4))\nprint("搜索9:", search(root, 9))'
      }
    }
  ]
};

registerChapter('dsa', CHAPTER_V3_DS);
