// ========== 构建Python API代码 ==========
function buildAPICode(stickerNames) {
  // 创建一个命令收集器
  var code = [
    'import json',
    '',
    '# 初始化命令队列',
    '__stickerCmds = []',
    '',
    'def __cmd(action, name, **kwargs):',
    '    import json',
    '    cmd = {"action": action, "name": str(name)}',
    '    cmd.update(kwargs)',
    '    __stickerCmds.append(json.dumps(cmd))',
    '    print("__CMD__:" + json.dumps(cmd))',
    '',
    'def move(name, x, y):',
    '    __cmd("move", name, x=x, y=y)',
    '',
    'def move_by(name, dx, dy):',
    '    __cmd("move_by", name, dx=dx, dy=dy)',
    '',
    'def rotate(name, angle):',
    '    __cmd("rotate", name, angle=angle)',
    '',
    'def scale(name, size):',
    '    __cmd("scale", name, size=size)',
    '',
    'def opacity(name, value):',
    '    __cmd("opacity", name, value=value)',
    '',
    'def show(name):',
    '    __cmd("show", name)',
    '',
    'def hide(name):',
    '    __cmd("hide", name)',
    '',
    'def say(name, text):',
    '    __cmd("say", name, text=str(text))',
    '',
    'def wait(seconds):',
    '    __cmd("wait", "__stage__", seconds=seconds)',
    '',
    'def bounce(name, times=3):',
    '    __cmd("bounce", name, times=times)',
    '',
    'def shake(name):',
    '    __cmd("shake", name)',
    '',
    'def spin(name, turns=1):',
    '    __cmd("spin", name, turns=turns)',
    '',
    'def animate_move(name, x, y, duration=0.5):',
    '    __cmd("animate_move", name, x=x, y=y, duration=duration)',
    '',
    'def animate_rotate(name, angle, duration=0.5):',
    '    __cmd("animate_rotate", name, angle=angle, duration=duration)',
    '',
    'def animate_scale(name, size, duration=0.5):',
    '    __cmd("animate_scale", name, size=size, duration=duration)',
    '',
    'def get_x(name):',
    '    return 0',
    '',
    'def get_y(name):',
    '    return 0',
    '',
    'def get_size(name):',
    '    return 60',
    '',
  ].join('\n');

  // 为每个贴纸名称创建变量（让用户可以直接用名称而不是字符串）
  stickerNames.forEach(function(name) {
    code += '\n' + name + ' = "' + name + '"';
  });

  // 在代码末尾注入变量收集逻辑
  code += '\n\n# 变量收集（内部使用）\ndef __collect_vars():\n    import json\n    result = {}\n    g = globals()\n    skip = set(["__collect_vars", "__cmd", "move", "move_by", "rotate", "scale",\n               "opacity", "show", "hide", "say", "wait", "bounce", "shake", "spin",\n               "animate_move", "animate_rotate", "animate_scale",\n               "get_x", "get_y", "get_size", "json", "__stickerCmds"])\n    for k in g:\n        if k.startswith("__") or k in skip:\n            continue\n        v = g[k]\n        t = type(v).__name__\n        if t in ("int", "float", "str", "bool", "NoneType"):\n            result[k] = {"type": t, "value": repr(v)}\n        elif t in ("list", "tuple"):\n            result[k] = {"type": t, "value": repr(v)[:80]}\n        elif t == "dict":\n            result[k] = {"type": t, "value": repr(v)[:80]}\n        elif t == "function":\n            result[k] = {"type": "function", "value": "函数"}\n    print("__VARS__:" + json.dumps(result, ensure_ascii=False))\n__collect_vars()';

  return code;
}

