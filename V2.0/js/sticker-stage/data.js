// ========== 贴纸数据库 ==========
var STICKER_CATS = {
  animals: [
    { emoji: '🐱', name: 'cat', label: '猫咪' },
    { emoji: '🐶', name: 'dog', label: '小狗' },
    { emoji: '🐸', name: 'frog', label: '青蛙' },
    { emoji: '🐼', name: 'panda', label: '熊猫' },
    { emoji: '🦊', name: 'fox', label: '狐狸' },
    { emoji: '🐰', name: 'rabbit', label: '兔子' },
    { emoji: '🐻', name: 'bear', label: '熊' },
    { emoji: '🦁', name: 'lion', label: '狮子' },
    { emoji: '🐯', name: 'tiger', label: '老虎' },
    { emoji: '🐧', name: 'penguin', label: '企鹅' },
    { emoji: '🦋', name: 'butterfly', label: '蝴蝶' },
    { emoji: '🐠', name: 'fish', label: '鱼' },
    { emoji: '🦄', name: 'unicorn', label: '独角兽' },
    { emoji: '🐉', name: 'dragon', label: '龙' },
    { emoji: '🦖', name: 'dino', label: '恐龙' },
  ],
  food: [
    { emoji: '🍎', name: 'apple', label: '苹果' },
    { emoji: '🍕', name: 'pizza', label: '披萨' },
    { emoji: '🍦', name: 'icecream', label: '冰淇淋' },
    { emoji: '🍩', name: 'donut', label: '甜甜圈' },
    { emoji: '🎂', name: 'cake', label: '蛋糕' },
    { emoji: '🍭', name: 'candy', label: '棒棒糖' },
    { emoji: '🍔', name: 'burger', label: '汉堡' },
    { emoji: '🌮', name: 'taco', label: '墨西哥卷' },
    { emoji: '🍜', name: 'noodle', label: '面条' },
    { emoji: '🍓', name: 'strawberry', label: '草莓' },
    { emoji: '🍇', name: 'grape', label: '葡萄' },
    { emoji: '🥑', name: 'avocado', label: '牛油果' },
  ],
  nature: [
    { emoji: '🌸', name: 'flower', label: '樱花' },
    { emoji: '🌈', name: 'rainbow', label: '彩虹' },
    { emoji: '⭐', name: 'star', label: '星星' },
    { emoji: '🌙', name: 'moon', label: '月亮' },
    { emoji: '☀️', name: 'sun', label: '太阳' },
    { emoji: '❄️', name: 'snow', label: '雪花' },
    { emoji: '🌊', name: 'wave', label: '海浪' },
    { emoji: '🌺', name: 'hibiscus', label: '木槿' },
    { emoji: '🍀', name: 'clover', label: '四叶草' },
    { emoji: '🌻', name: 'sunflower', label: '向日葵' },
    { emoji: '🍁', name: 'maple', label: '枫叶' },
    { emoji: '🌵', name: 'cactus', label: '仙人掌' },
  ],
  objects: [
    { emoji: '🚀', name: 'rocket', label: '火箭' },
    { emoji: '⚽', name: 'ball', label: '足球' },
    { emoji: '🎮', name: 'gamepad', label: '游戏机' },
    { emoji: '🎸', name: 'guitar', label: '吉他' },
    { emoji: '🏆', name: 'trophy', label: '奖杯' },
    { emoji: '💎', name: 'gem', label: '宝石' },
    { emoji: '🎯', name: 'target', label: '靶心' },
    { emoji: '🎪', name: 'circus', label: '马戏团' },
    { emoji: '🎨', name: 'palette', label: '调色板' },
    { emoji: '🔮', name: 'crystal', label: '水晶球' },
    { emoji: '🎁', name: 'gift', label: '礼物' },
    { emoji: '🧲', name: 'magnet', label: '磁铁' },
  ],
  faces: [
    { emoji: '😊', name: 'smile', label: '微笑' },
    { emoji: '😎', name: 'cool', label: '酷' },
    { emoji: '🤩', name: 'star_eyes', label: '星眼' },
    { emoji: '😂', name: 'laugh', label: '大笑' },
    { emoji: '😍', name: 'love', label: '爱心眼' },
    { emoji: '🤔', name: 'think', label: '思考' },
    { emoji: '😴', name: 'sleep', label: '睡觉' },
    { emoji: '🥳', name: 'party', label: '派对' },
    { emoji: '😡', name: 'angry', label: '生气' },
    { emoji: '🤯', name: 'explode', label: '爆炸' },
    { emoji: '👻', name: 'ghost', label: '幽灵' },
    { emoji: '🤖', name: 'robot', label: '机器人' },
  ]
};

// ========== 示例代码 ==========
var EXAMPLES = [
  {
    label: '🚶 移动贴纸',
    code: '# 先把一个贴纸拖到舞台，给它起名叫 cat\n# 然后运行这段代码！\nmove(cat, 0, 0)      # 移动到中心\nwait(0.5)\nmove(cat, 200, 0)    # 向右移动\nwait(0.5)\nmove(cat, 200, 100)  # 向右下移动\nwait(0.5)\nmove(cat, 0, 0)      # 回到中心'
  },
  {
    label: '🔄 旋转动画',
    code: '# 让贴纸旋转起来！\nfor i in range(8):\n    rotate(cat, i * 45)\n    wait(0.2)'
  },
  {
    label: '📏 变大变小',
    code: '# 贴纸变大再变小\nfor size in [60, 80, 100, 120, 100, 80, 60]:\n    scale(cat, size)\n    wait(0.15)'
  },
  {
    label: '🎬 综合动画',
    code: '# 综合动画：移动+旋转+缩放\nmove(cat, -200, 0)\nscale(cat, 40)\nfor i in range(10):\n    x = -200 + i * 40\n    move(cat, x, 0)\n    rotate(cat, i * 36)\n    scale(cat, 40 + i * 8)\n    wait(0.1)'
  },
  {
    label: '💬 说话气泡',
    code: '# 让贴纸说话！\nsay(cat, "你好！")\nwait(1)\nsay(cat, "我会Python！")\nwait(1)\nsay(cat, "🎉")\nwait(1)\nsay(cat, "")  # 清除气泡'
  },
  {
    label: '🌊 波浪运动',
    code: '# 用sin函数做波浪运动\nimport math\nfor i in range(30):\n    x = -300 + i * 20\n    y = math.sin(i * 0.5) * 80\n    move(cat, x, y)\n    wait(0.08)'
  },
  {
    label: '🎪 多贴纸舞蹈',
    code: '# 多个贴纸一起跳舞\n# 需要先放3个贴纸：cat, dog, star\nfor i in range(6):\n    move(cat, -150, -50)\n    move(dog, 0, 50)\n    move(star, 150, -50)\n    wait(0.3)\n    move(cat, -100, 50)\n    move(dog, 0, -50)\n    move(star, 100, 50)\n    wait(0.3)'
  },
  {
    label: '🔢 循环计数',
    code: '# 用循环让贴纸绕圈\nimport math\nfor i in range(36):\n    angle = i * 10 * math.pi / 180\n    x = math.cos(angle) * 150\n    y = math.sin(angle) * 100\n    move(cat, x, y)\n    rotate(cat, i * 10)\n    wait(0.05)'
  }
];

