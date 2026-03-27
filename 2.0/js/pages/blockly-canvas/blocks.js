    // ==================== Blockly 自定义积木 ====================
    function initBlockly() {
      // 定义自定义积木
      
      // 海龟启动
      Blockly.Blocks['turtle_start'] = {
        init: function() {
          this.appendDummyInput()
              .appendField('🚀 海龟启动');
          this.setColour(230);
          this.setTooltip('程序从这里开始');
          this.setNextStatement(true);
        }
      };
      
      pythonGenerator['turtle_start'] = function(block) {
        return '# 海龟开始绘图\n';
      };
      
      // 前进
      Blockly.Blocks['turtle_forward'] = {
        init: function() {
          this.appendValueInput('DISTANCE')
              .setCheck('Number')
              .appendField('🐢 前进');
          this.appendDummyInput()
              .appendField('步');
          this.setColour(210);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip('向前移动指定步数');
        }
      };
      
      pythonGenerator['turtle_forward'] = function(block) {
        const distance = pythonGenerator.valueToCode(block, 'DISTANCE', pythonGenerator.ORDER_FUNCTION_CALL) || '0';
        return 'turtle.forward(' + distance + ')\n';
      };
      
      // 后退
      Blockly.Blocks['turtle_backward'] = {
        init: function() {
          this.appendValueInput('DISTANCE')
              .setCheck('Number')
              .appendField('◀ 后退');
          this.appendDummyInput()
              .appendField('步');
          this.setColour(210);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip('向后移动指定步数');
        }
      };
      
      pythonGenerator['turtle_backward'] = function(block) {
        const distance = pythonGenerator.valueToCode(block, 'DISTANCE', pythonGenerator.ORDER_FUNCTION_CALL) || '0';
        return 'turtle.backward(' + distance + ')\n';
      };
      
      // 左转
      Blockly.Blocks['turtle_left'] = {
        init: function() {
          this.appendValueInput('ANGLE')
              .setCheck('Number')
              .appendField('↺ 左转');
          this.appendDummyInput()
              .appendField('度');
          this.setColour(210);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip('向左旋转指定角度');
        }
      };
      
      pythonGenerator['turtle_left'] = function(block) {
        const angle = pythonGenerator.valueToCode(block, 'ANGLE', pythonGenerator.ORDER_FUNCTION_CALL) || '90';
        return 'turtle.left(' + angle + ')\n';
      };
      
      // 右转
      Blockly.Blocks['turtle_right'] = {
        init: function() {
          this.appendValueInput('ANGLE')
              .setCheck('Number')
              .appendField('↻ 右转');
          this.appendDummyInput()
              .appendField('度');
          this.setColour(210);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip('向右旋转指定角度');
        }
      };
      
      pythonGenerator['turtle_right'] = function(block) {
        const angle = pythonGenerator.valueToCode(block, 'ANGLE', pythonGenerator.ORDER.ORDER_FUNCTION_CALL) || '90';
        return 'turtle.right(' + angle + ')\n';
      };
      
      // 抬笔
      Blockly.Blocks['turtle_penup'] = {
        init: function() {
          this.appendDummyInput()
              .appendField('✋ 抬笔');
          this.setColour(290);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip('抬起画笔，移动时不绘制');
        }
      };
      
      pythonGenerator['turtle_penup'] = function(block) {
        return 'turtle.penup()\n';
      };
      
      // 落笔
      Blockly.Blocks['turtle_pendown'] = {
        init: function() {
          this.appendDummyInput()
              .appendField('✏️ 落笔');
          this.setColour(290);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip('落下画笔，移动时绘制');
        }
      };
      
      pythonGenerator['turtle_pendown'] = function(block) {
        return 'turtle.pendown()\n';
      };
      
      // 画笔颜色
      Blockly.Blocks['turtle_pencolor'] = {
        init: function() {
          this.appendDummyInput()
              .appendField('🎨 画笔颜色')
              .appendField(new Blockly.FieldColour('#00cec9'), 'COLOR');
          this.setColour(290);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip('设置画笔颜色');
        }
      };
      
      pythonGenerator['turtle_pencolor'] = function(block) {
        const color = block.getFieldValue('COLOR');
        return 'turtle.pencolor("' + color + '")\n';
      };
      
      // 画笔粗细
      Blockly.Blocks['turtle_pensize'] = {
        init: function() {
          this.appendValueInput('SIZE')
              .setCheck('Number')
              .appendField('✏️ 粗细');
          this.setColour(290);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip('设置画笔粗细');
        }
      };
      
      pythonGenerator['turtle_pensize'] = function(block) {
        const size = pythonGenerator.valueToCode(block, 'SIZE', pythonGenerator.ORDER_FUNCTION_CALL) || '2';
        return 'turtle.pensize(' + size + ')\n';
      };
      
      // 移动速度
      Blockly.Blocks['turtle_speed'] = {
        init: function() {
          this.appendDummyInput()
              .appendField('⚡ 速度')
              .appendField(new Blockly.FieldDropdown([
                ['最慢', '1'],
                ['慢', '3'],
                ['正常', '6'],
                ['快', '8'],
                ['最快', '10']
              ]), 'SPEED');
          this.setColour(290);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip('设置海龟移动速度');
        }
      };
      
      pythonGenerator['turtle_speed'] = function(block) {
        const speed = block.getFieldValue('SPEED');
        return 'turtle.speed(' + speed + ')\n';
      };
      
      // 转到指定坐标
      Blockly.Blocks['turtle_goto'] = {
        init: function() {
          this.appendValueInput('X')
              .setCheck('Number')
              .appendField('📍 移动到 x:');
          this.appendValueInput('Y')
              .setCheck('Number')
              .appendField('y:');
          this.setColour(210);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip('移动到指定坐标位置');
        }
      };
      
      pythonGenerator['turtle_goto'] = function(block) {
        const x = pythonGenerator.valueToCode(block, 'X', pythonGenerator.ORDER_FUNCTION_CALL) || '0';
        const y = pythonGenerator.valueToCode(block, 'Y', pythonGenerator.ORDER_FUNCTION_CALL) || '0';
        return 'turtle.goto(' + x + ', ' + y + ')\n';
      };
      
      // 回到原点
      Blockly.Blocks['turtle_home'] = {
        init: function() {
          this.appendDummyInput()
              .appendField('🏠 回到原点');
          this.setColour(210);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip('回到画布中心并面向右方');
        }
      };
      
      pythonGenerator['turtle_home'] = function(block) {
        return 'turtle.home()\n';
      };
      
      // 画圆
      Blockly.Blocks['turtle_circle'] = {
        init: function() {
          this.appendValueInput('RADIUS')
              .setCheck('Number')
              .appendField('⭕ 画圆 半径:');
          this.appendValueInput('EXTENT')
              .setCheck('Number')
              .appendField('角度(可选):');
          this.setColour(210);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip('以指定半径画圆或圆弧');
        }
      };
      
      pythonGenerator['turtle_circle'] = function(block) {
        const radius = pythonGenerator.valueToCode(block, 'RADIUS', pythonGenerator.ORDER_FUNCTION_CALL) || '50';
        const extent = pythonGenerator.valueToCode(block, 'EXTENT', pythonGenerator.ORDER_FUNCTION_CALL);
        return extent ? 'turtle.circle(' + radius + ', ' + extent + ')\n' : 'turtle.circle(' + radius + ')\n';
      };
      
      // 画点
      Blockly.Blocks['turtle_dot'] = {
        init: function() {
          this.appendValueInput('SIZE')
              .setCheck('Number')
              .appendField('⚫ 画点 大小:');
          this.appendDummyInput()
              .appendField('颜色:')
              .appendField(new Blockly.FieldColour('#00cec9'), 'COLOR');
          this.setColour(210);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip('在当前位置画一个点');
        }
      };
      
      pythonGenerator['turtle_dot'] = function(block) {
        const size = pythonGenerator.valueToCode(block, 'SIZE', pythonGenerator.ORDER_FUNCTION_CALL) || '5';
        const color = block.getFieldValue('COLOR');
        return 'turtle.dot(' + size + ', "' + color + '")\n';
      };
      
      // 印章
      Blockly.Blocks['turtle_stamp'] = {
        init: function() {
          this.appendDummyInput()
              .appendField('🔖 印章');
          this.setColour(210);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip('在当前位置盖一个海龟印章');
        }
      };
      
      pythonGenerator['turtle_stamp'] = function(block) {
        return 'turtle.stamp()\n';
      };
      
      // 填充
      Blockly.Blocks['turtle_fill'] = {
        init: function() {
          this.appendDummyInput()
              .appendField('🪣 填充颜色');
          this.appendStatementInput('DO')
              .appendField('执行');
          this.appendDummyInput()
              .appendField('结束填充');
          this.setColour(0);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip('填充封闭图形的颜色');
        }
      };
      
      pythonGenerator['turtle_fill'] = function(block) {
        const statements = pythonGenerator.statementToCode(block, 'DO');
        return 'turtle.begin_fill()\n' + statements + 'turtle.end_fill()\n';
      };
      
      // 背景色
      Blockly.Blocks['turtle_bgcolor'] = {
        init: function() {
          this.appendDummyInput()
              .appendField('🖼️ 画布颜色')
              .appendField(new Blockly.FieldColour('#0a0a1a'), 'COLOR');
          this.setColour(0);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip('设置画布背景颜色');
        }
      };
      
      pythonGenerator['turtle_bgcolor'] = function(block) {
        const color = block.getFieldValue('COLOR');
        return 'turtle.bgcolor("' + color + '")\n';
      };
      
      // 隐藏海龟
      Blockly.Blocks['turtle_hide'] = {
        init: function() {
          this.appendDummyInput()
              .appendField('👻 隐藏海龟');
          this.setColour(0);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip('隐藏海龟图标');
        }
      };
      
      pythonGenerator['turtle_hide'] = function(block) {
        return 'turtle.hideturtle()\n';
      };
      
      // 显示海龟
      Blockly.Blocks['turtle_show'] = {
        init: function() {
          this.appendDummyInput()
              .appendField('👁️ 显示海龟');
          this.setColour(0);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip('显示海龟图标');
        }
      };
      
      pythonGenerator['turtle_show'] = function(block) {
        return 'turtle.showturtle()\n';
      };
      
      // 初始化工作区
      workspace = Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox'),
        grid: {
          spacing: 20,
          length: 3,
          colour: '#3a3a4a',
          snap: true
        },
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2
        },
        trashcan: true,
        theme: 'dark'
      });
      
      // 设置初始积木
      const startBlock = workspace.newBlock('turtle_start');
      startBlock.initSvg();
      startBlock.render();
      startBlock.moveBy(50, 50);
    }
    
