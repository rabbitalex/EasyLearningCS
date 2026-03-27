// ========== 执行命令队列 ==========
function executeCommandQueue(cmds, index, onDone) {
  if (stage.stopFlag || index >= cmds.length) {
    if (onDone) onDone();
    return;
  }

  var cmd;
  try {
    cmd = JSON.parse(cmds[index]);
  } catch(e) {
    executeCommandQueue(cmds, index + 1, onDone);
    return;
  }

  var delay = 0;

  switch (cmd.action) {
    case 'move':
      setStickerPos(cmd.name, cmd.x, cmd.y);
      if (stage.selected === cmd.name) updatePropsPanel();
      break;

    case 'move_by':
      var s = stage.stickers[cmd.name];
      if (s) setStickerPos(cmd.name, s.x + cmd.dx, s.y + cmd.dy);
      break;

    case 'rotate':
      if (stage.stickers[cmd.name]) {
        stage.stickers[cmd.name].rotation = cmd.angle;
        applyStickerStyle(cmd.name);
        if (stage.selected === cmd.name) updatePropsPanel();
      }
      break;

    case 'scale':
      if (stage.stickers[cmd.name]) {
        stage.stickers[cmd.name].size = Math.max(10, Math.min(300, cmd.size));
        applyStickerStyle(cmd.name);
        if (stage.selected === cmd.name) updatePropsPanel();
      }
      break;

    case 'opacity':
      if (stage.stickers[cmd.name]) {
        stage.stickers[cmd.name].opacity = Math.max(0, Math.min(100, cmd.value));
        applyStickerStyle(cmd.name);
      }
      break;

    case 'show':
      if (stage.stickers[cmd.name]) {
        stage.stickers[cmd.name].visible = true;
        applyStickerStyle(cmd.name);
      }
      break;

    case 'hide':
      if (stage.stickers[cmd.name]) {
        stage.stickers[cmd.name].visible = false;
        applyStickerStyle(cmd.name);
      }
      break;

    case 'say':
      setStickerSay(cmd.name, cmd.text);
      break;

    case 'wait':
      delay = Math.round((cmd.seconds || 0) * 1000);
      break;

    case 'bounce':
      animateBounce(cmd.name, cmd.times || 3);
      delay = (cmd.times || 3) * 300;
      break;

    case 'shake':
      animateShake(cmd.name);
      delay = 500;
      break;

    case 'spin':
      animateSpin(cmd.name, cmd.turns || 1);
      delay = (cmd.turns || 1) * 500;
      break;

    case 'animate_move':
      animateMove(cmd.name, cmd.x, cmd.y, cmd.duration || 0.5);
      delay = Math.round((cmd.duration || 0.5) * 1000);
      break;

    case 'animate_rotate':
      animateRotate(cmd.name, cmd.angle, cmd.duration || 0.5);
      delay = Math.round((cmd.duration || 0.5) * 1000);
      break;

    case 'animate_scale':
      animateScaleSmooth(cmd.name, cmd.size, cmd.duration || 0.5);
      delay = Math.round((cmd.duration || 0.5) * 1000);
      break;
  }

  setTimeout(function() {
    executeCommandQueue(cmds, index + 1, onDone);
  }, delay);
}

