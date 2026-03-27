/**
 * 🌍 小王王的计算机大世界 - 守护进程 (Daemon)
 * 
 * 零依赖 Node.js 守护进程，确保 server.js 在后台持续运行并自动重启。
 * 
 * 用法:
 *   node daemon.js start   [端口号]   - 启动守护进程（后台运行）
 *   node daemon.js stop               - 停止守护进程
 *   node daemon.js restart [端口号]   - 重启守护进程
 *   node daemon.js status             - 查看运行状态
 *   node daemon.js logs   [行数]      - 查看最近日志
 *   node daemon.js run    [端口号]    - 前台运行（守护模式，不脱离终端）
 */

const { spawn, execSync, fork } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const http = require('http');

// ─── 路径常量 ───
const ROOT = __dirname;
const PID_FILE = path.join(ROOT, '.daemon.pid');
const LOG_FILE = path.join(ROOT, 'logs', 'daemon.log');
const SERVER_SCRIPT = path.join(ROOT, 'server.js');

// ─── 配置 ───
const CONFIG = {
  maxRestarts: 20,           // 最大连续重启次数
  restartWindow: 60 * 1000,  // 重启计数窗口（60秒）
  restartDelay: 2000,        // 重启延迟（毫秒）
  healthCheckInterval: 30000, // 健康检查间隔（30秒）
  healthCheckTimeout: 5000,   // 健康检查超时（5秒）
  logMaxSize: 10 * 1024 * 1024, // 日志文件最大大小（10MB）
  logBackups: 3               // 保留日志备份数量
};

// ─── 颜色 ───
const c = {
  reset: '\x1b[0m', bold: '\x1b[1m', dim: '\x1b[2m',
  green: '\x1b[32m', cyan: '\x1b[36m', yellow: '\x1b[33m',
  red: '\x1b[31m', magenta: '\x1b[35m', blue: '\x1b[34m',
  bgGreen: '\x1b[42m', bgRed: '\x1b[41m', white: '\x1b[37m'
};

// ─── 工具函数 ───

/** 确保日志目录存在 */
function ensureLogDir() {
  const logDir = path.dirname(LOG_FILE);
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
}

/** 写入日志（同时输出到控制台和文件） */
function log(level, message, consoleOnly = false) {
  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
  const levelColors = {
    INFO: c.cyan, WARN: c.yellow, ERROR: c.red, OK: c.green, DAEMON: c.magenta
  };
  const color = levelColors[level] || c.reset;

  // 控制台输出
  console.log(`  ${c.dim}${timestamp}${c.reset} ${color}[${level}]${c.reset} ${message}`);

  // 文件输出
  if (!consoleOnly) {
    ensureLogDir();
    const logLine = `${timestamp} [${level}] ${message.replace(/\x1b\[\d+m/g, '')}\n`;
    try {
      fs.appendFileSync(LOG_FILE, logLine);
      rotateLogIfNeeded();
    } catch (e) { /* 静默处理 */ }
  }
}

/** 日志轮转 */
function rotateLogIfNeeded() {
  try {
    const stats = fs.statSync(LOG_FILE);
    if (stats.size > CONFIG.logMaxSize) {
      for (let i = CONFIG.logBackups - 1; i >= 1; i--) {
        const from = `${LOG_FILE}.${i}`;
        const to = `${LOG_FILE}.${i + 1}`;
        if (fs.existsSync(from)) fs.renameSync(from, to);
      }
      fs.renameSync(LOG_FILE, `${LOG_FILE}.1`);
      fs.writeFileSync(LOG_FILE, '');
      log('INFO', '日志已轮转');
    }
  } catch (e) { /* 静默处理 */ }
}

/** 读取 PID 文件 */
function readPid() {
  try {
    if (fs.existsSync(PID_FILE)) {
      const content = fs.readFileSync(PID_FILE, 'utf8').trim();
      const data = JSON.parse(content);
      return data;
    }
  } catch (e) { /* 静默处理 */ }
  return null;
}

/** 写入 PID 文件 */
function writePid(pid, port, startTime) {
  const data = { pid, port, startTime, version: '2.0' };
  fs.writeFileSync(PID_FILE, JSON.stringify(data, null, 2));
}

/** 删除 PID 文件 */
function removePid() {
  try { fs.unlinkSync(PID_FILE); } catch (e) { /* 静默处理 */ }
}

/** 检查进程是否存活 */
function isProcessAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (e) {
    return false;
  }
}

/** 强制终止进程 */
function killProcess(pid) {
  try {
    process.kill(pid, 'SIGTERM');
    // 等待进程退出
    let waited = 0;
    while (waited < 5000 && isProcessAlive(pid)) {
      const start = Date.now();
      // 同步等待 100ms
      while (Date.now() - start < 100) { /* busy wait */ }
      waited += 100;
    }
    // 如果仍在运行，强制杀死
    if (isProcessAlive(pid)) {
      process.kill(pid, 'SIGKILL');
    }
    return true;
  } catch (e) {
    return false;
  }
}

/** HTTP 健康检查 */
function healthCheck(port) {
  return new Promise((resolve) => {
    const req = http.get(`http://127.0.0.1:${port}/`, { timeout: CONFIG.healthCheckTimeout }, (res) => {
      resolve({ alive: true, status: res.statusCode });
    });
    req.on('error', () => resolve({ alive: false, status: 0 }));
    req.on('timeout', () => { req.destroy(); resolve({ alive: false, status: 0 }); });
  });
}

/** 格式化运行时长 */
function formatUptime(ms) {
  const seconds = Math.floor(ms / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  const parts = [];
  if (days > 0) parts.push(`${days}天`);
  if (hours > 0) parts.push(`${hours}小时`);
  if (minutes > 0) parts.push(`${minutes}分钟`);
  parts.push(`${secs}秒`);
  return parts.join(' ');
}

/** 获取局域网 IP */
function getLanIp() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return null;
}


// ════════════════════════════════════════════════════════
//  命令处理
// ════════════════════════════════════════════════════════

/** 启动守护进程（后台模式） */
function cmdStart(port) {
  const pidData = readPid();
  if (pidData && isProcessAlive(pidData.pid)) {
    log('WARN', `守护进程已在运行中 (PID: ${pidData.pid}, 端口: ${pidData.port})`);
    log('INFO', `如需重启请使用: node daemon.js restart`);
    return;
  }

  // 清理残留的 PID 文件
  removePid();

  printBanner();
  log('DAEMON', `正在以后台模式启动守护进程 (端口: ${port})...`);

  // 使用 detached 子进程运行守护模式
  const child = spawn(process.execPath, [__filename, 'run', String(port)], {
    detached: true,
    stdio: ['ignore', 'ignore', 'ignore'],
    cwd: ROOT,
    env: { ...process.env, DAEMON_MODE: '1' }
  });

  child.unref();

  // 等待 PID 文件生成来确认启动成功
  let waited = 0;
  const checkInterval = setInterval(() => {
    waited += 500;
    const data = readPid();
    if (data && isProcessAlive(data.pid)) {
      clearInterval(checkInterval);
      console.log('');
      log('OK', `✅ 守护进程已启动 (PID: ${data.pid})`);
      printAccessInfo(port);
      console.log('');
      log('INFO', `${c.dim}管理命令:${c.reset}`);
      log('INFO', `${c.dim}  停止:   node daemon.js stop${c.reset}`, true);
      log('INFO', `${c.dim}  重启:   node daemon.js restart${c.reset}`, true);
      log('INFO', `${c.dim}  状态:   node daemon.js status${c.reset}`, true);
      log('INFO', `${c.dim}  日志:   node daemon.js logs${c.reset}`, true);
      console.log('');
    } else if (waited > 8000) {
      clearInterval(checkInterval);
      log('ERROR', '守护进程启动超时，请检查日志');
      log('INFO', `查看日志: node daemon.js logs`);
    }
  }, 500);
}

/** 前台守护运行模式（被 start 调用） */
function cmdRun(port) {
  ensureLogDir();

  let serverProcess = null;
  let restartCount = 0;
  let restartTimestamps = [];
  let isShuttingDown = false;
  let healthCheckTimer = null;

  // 写入 PID（守护进程自身的 PID）
  writePid(process.pid, port, new Date().toISOString());

  log('DAEMON', `守护进程已启动 (PID: ${process.pid}, 端口: ${port})`);

  /** 启动子服务器进程 */
  function startServer() {
    if (isShuttingDown) return;

    log('INFO', `正在启动 server.js (端口: ${port})...`);

    serverProcess = spawn(process.execPath, [SERVER_SCRIPT, String(port)], {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, PORT: String(port) }
    });

    const childPid = serverProcess.pid;
    log('OK', `server.js 已启动 (PID: ${childPid})`);

    // 捕获子进程标准输出
    serverProcess.stdout.on('data', (data) => {
      const lines = data.toString().trim().split('\n');
      for (const line of lines) {
        if (line.trim()) {
          const cleanLine = line.replace(/\x1b\[\d+m/g, '').trim();
          if (cleanLine) {
            try {
              fs.appendFileSync(LOG_FILE, `${new Date().toISOString().replace('T', ' ').substring(0, 19)} [SERVER] ${cleanLine}\n`);
            } catch (e) { /* 静默 */ }
          }
        }
      }
    });

    // 捕获子进程错误输出
    serverProcess.stderr.on('data', (data) => {
      const msg = data.toString().trim();
      if (msg) log('ERROR', `[SERVER] ${msg}`);
    });

    // 子进程退出处理
    serverProcess.on('exit', (code, signal) => {
      serverProcess = null;

      if (isShuttingDown) {
        log('INFO', `server.js 已正常停止 (code: ${code})`);
        return;
      }

      log('WARN', `server.js 异常退出 (code: ${code}, signal: ${signal})`);

      // 计算重启频率
      const now = Date.now();
      restartTimestamps.push(now);
      restartTimestamps = restartTimestamps.filter(t => now - t < CONFIG.restartWindow);

      if (restartTimestamps.length >= CONFIG.maxRestarts) {
        log('ERROR', `在 ${CONFIG.restartWindow / 1000} 秒内已重启 ${CONFIG.maxRestarts} 次，停止自动重启`);
        log('ERROR', '请检查 server.js 是否存在严重错误');
        gracefulShutdown('重启次数过多');
        return;
      }

      restartCount++;
      const delay = Math.min(CONFIG.restartDelay * Math.pow(1.5, Math.min(restartCount - 1, 8)), 30000);
      log('INFO', `将在 ${(delay / 1000).toFixed(1)} 秒后尝试第 ${restartCount} 次重启...`);

      setTimeout(() => {
        startServer();
      }, delay);
    });

    serverProcess.on('error', (err) => {
      log('ERROR', `启动 server.js 失败: ${err.message}`);
      serverProcess = null;
    });
  }

  /** 健康检查 */
  function startHealthCheck() {
    healthCheckTimer = setInterval(async () => {
      if (!serverProcess || isShuttingDown) return;

      const result = await healthCheck(port);
      if (!result.alive) {
        log('WARN', `健康检查失败 - 服务未响应 (端口: ${port})`);
        // 如果进程还在但不响应，可能是卡死了
        if (serverProcess && isProcessAlive(serverProcess.pid)) {
          log('WARN', '服务进程存活但无响应，正在重启...');
          serverProcess.kill('SIGKILL');
        }
      } else {
        // 重启计数在健康检查通过时逐渐衰减
        if (restartCount > 0) restartCount = Math.max(0, restartCount - 0.1);
      }
    }, CONFIG.healthCheckInterval);
  }

  /** 优雅关闭 */
  function gracefulShutdown(reason) {
    if (isShuttingDown) return;
    isShuttingDown = true;

    log('DAEMON', `正在关闭守护进程... (原因: ${reason})`);

    if (healthCheckTimer) clearInterval(healthCheckTimer);

    if (serverProcess) {
      log('INFO', '正在停止 server.js...');
      serverProcess.kill('SIGTERM');

      // 给子进程 5 秒优雅退出时间
      setTimeout(() => {
        if (serverProcess) {
          log('WARN', '强制终止 server.js');
          serverProcess.kill('SIGKILL');
        }
        cleanup();
      }, 5000);
    } else {
      cleanup();
    }
  }

  function cleanup() {
    removePid();
    log('DAEMON', '守护进程已停止');
    process.exit(0);
  }

  // 信号处理
  process.on('SIGTERM', () => gracefulShutdown('收到 SIGTERM'));
  process.on('SIGINT', () => gracefulShutdown('收到 SIGINT'));
  process.on('uncaughtException', (err) => {
    log('ERROR', `未捕获异常: ${err.message}`);
    log('ERROR', err.stack || '');
    gracefulShutdown('未捕获异常');
  });

  // 开始运行
  startServer();
  // 延迟启动健康检查，给服务器启动时间
  setTimeout(() => startHealthCheck(), 10000);
}

/** 停止守护进程 */
function cmdStop() {
  const pidData = readPid();
  if (!pidData) {
    log('WARN', '未发现运行中的守护进程 (PID 文件不存在)');
    return;
  }

  if (!isProcessAlive(pidData.pid)) {
    log('WARN', `守护进程 (PID: ${pidData.pid}) 已不在运行`);
    removePid();
    log('INFO', 'PID 文件已清理');
    return;
  }

  printBanner();
  log('DAEMON', `正在停止守护进程 (PID: ${pidData.pid})...`);

  if (killProcess(pidData.pid)) {
    removePid();
    log('OK', '✅ 守护进程已停止');
  } else {
    log('ERROR', '停止守护进程失败，请手动终止');
    log('INFO', `运行: kill -9 ${pidData.pid}`);
  }
  console.log('');
}

/** 重启守护进程 */
function cmdRestart(port) {
  const pidData = readPid();
  if (pidData && isProcessAlive(pidData.pid)) {
    log('DAEMON', `正在停止现有守护进程 (PID: ${pidData.pid})...`);
    killProcess(pidData.pid);
    removePid();
    log('OK', '旧进程已停止');
    // 等待端口释放
    const start = Date.now();
    while (Date.now() - start < 2000) { /* busy wait */ }
  }
  cmdStart(port || (pidData && pidData.port) || 8080);
}

/** 查看状态 */
async function cmdStatus() {
  printBanner();

  const pidData = readPid();

  console.log('');
  console.log(`  ${c.bold}📊 守护进程状态${c.reset}`);
  console.log(`  ${'─'.repeat(46)}`);

  if (!pidData) {
    console.log(`  ${c.dim}状态:${c.reset}    ${c.bgRed}${c.white} 未运行 ${c.reset}`);
    console.log(`  ${c.dim}PID 文件不存在${c.reset}`);
    console.log('');
    return;
  }

  const alive = isProcessAlive(pidData.pid);
  const statusBadge = alive
    ? `${c.bgGreen}${c.white} 运行中 ${c.reset}`
    : `${c.bgRed}${c.white} 已停止 ${c.reset}`;

  console.log(`  ${c.dim}状态:${c.reset}    ${statusBadge}`);
  console.log(`  ${c.dim}PID:${c.reset}     ${pidData.pid}`);
  console.log(`  ${c.dim}端口:${c.reset}    ${pidData.port}`);

  if (pidData.startTime) {
    const uptime = Date.now() - new Date(pidData.startTime).getTime();
    console.log(`  ${c.dim}启动时间:${c.reset} ${pidData.startTime}`);
    if (alive) {
      console.log(`  ${c.dim}运行时长:${c.reset} ${formatUptime(uptime)}`);
    }
  }

  // HTTP 健康检查
  if (alive) {
    console.log('');
    console.log(`  ${c.bold}🏥 健康检查${c.reset}`);
    console.log(`  ${'─'.repeat(46)}`);
    const health = await healthCheck(pidData.port);
    if (health.alive) {
      console.log(`  ${c.dim}HTTP:${c.reset}    ${c.green}✅ 正常响应 (${health.status})${c.reset}`);
    } else {
      console.log(`  ${c.dim}HTTP:${c.reset}    ${c.red}❌ 无响应${c.reset}`);
    }

    // 内存使用（尝试获取）
    try {
      const memUsage = process.memoryUsage();
      console.log(`  ${c.dim}内存:${c.reset}    ~${Math.round(memUsage.heapUsed / 1024 / 1024)}MB`);
    } catch (e) { /* 静默 */ }
  }

  // 日志文件信息
  console.log('');
  console.log(`  ${c.bold}📝 日志${c.reset}`);
  console.log(`  ${'─'.repeat(46)}`);
  if (fs.existsSync(LOG_FILE)) {
    const logStats = fs.statSync(LOG_FILE);
    console.log(`  ${c.dim}路径:${c.reset}    ${LOG_FILE}`);
    console.log(`  ${c.dim}大小:${c.reset}    ${(logStats.size / 1024).toFixed(1)} KB`);
    console.log(`  ${c.dim}查看:${c.reset}    node daemon.js logs`);
  } else {
    console.log(`  ${c.dim}暂无日志文件${c.reset}`);
  }

  console.log('');

  if (!alive) {
    removePid();
    log('INFO', 'PID 文件已清理（进程已不存在）');
  }
}

/** 查看日志 */
function cmdLogs(lines) {
  const lineCount = parseInt(lines) || 50;

  if (!fs.existsSync(LOG_FILE)) {
    log('INFO', '暂无日志文件');
    return;
  }

  printBanner();
  console.log(`  ${c.bold}📝 最近 ${lineCount} 条日志${c.reset}`);
  console.log(`  ${c.dim}${'─'.repeat(60)}${c.reset}`);

  const content = fs.readFileSync(LOG_FILE, 'utf8');
  const allLines = content.trim().split('\n');
  const recentLines = allLines.slice(-lineCount);

  for (const line of recentLines) {
    // 根据日志级别着色
    let coloredLine = line;
    if (line.includes('[ERROR]')) coloredLine = `  ${c.red}${line}${c.reset}`;
    else if (line.includes('[WARN]')) coloredLine = `  ${c.yellow}${line}${c.reset}`;
    else if (line.includes('[OK]')) coloredLine = `  ${c.green}${line}${c.reset}`;
    else if (line.includes('[DAEMON]')) coloredLine = `  ${c.magenta}${line}${c.reset}`;
    else coloredLine = `  ${c.dim}${line}${c.reset}`;
    console.log(coloredLine);
  }

  console.log(`  ${c.dim}${'─'.repeat(60)}${c.reset}`);
  console.log(`  ${c.dim}共 ${allLines.length} 条日志，显示最近 ${recentLines.length} 条${c.reset}`);
  console.log('');
}

// ─── Banner 输出 ───
function printBanner() {
  console.log('');
  console.log(`  ${c.cyan}╔══════════════════════════════════════════════════╗${c.reset}`);
  console.log(`  ${c.cyan}║${c.reset}   🌍 ${c.bold}小王王的计算机大世界${c.reset} - 守护进程            ${c.cyan}║${c.reset}`);
  console.log(`  ${c.cyan}╚══════════════════════════════════════════════════╝${c.reset}`);
}

function printAccessInfo(port) {
  const lanIp = getLanIp();
  console.log('');
  console.log(`  ${c.cyan}╭──────────────────────────────────────────╮${c.reset}`);
  console.log(`  ${c.cyan}│${c.reset}  ${c.green}▸ 本机访问:${c.reset}  ${c.bold}http://localhost:${port}${c.reset}`);
  if (lanIp) {
    console.log(`  ${c.cyan}│${c.reset}  ${c.green}▸ 局域网:${c.reset}    ${c.bold}http://${lanIp}:${port}${c.reset}`);
  }
  console.log(`  ${c.cyan}│${c.reset}  ${c.dim}▸ 服务在后台持续运行，自动重启${c.reset}`);
  console.log(`  ${c.cyan}╰──────────────────────────────────────────╯${c.reset}`);
}

function printHelp() {
  printBanner();
  console.log('');
  console.log(`  ${c.bold}📖 使用说明${c.reset}`);
  console.log(`  ${'─'.repeat(50)}`);
  console.log('');
  console.log(`  ${c.green}启动${c.reset}    node daemon.js start   [端口号]`);
  console.log(`  ${c.dim}          以后台守护模式启动服务${c.reset}`);
  console.log('');
  console.log(`  ${c.red}停止${c.reset}    node daemon.js stop`);
  console.log(`  ${c.dim}          停止守护进程及服务${c.reset}`);
  console.log('');
  console.log(`  ${c.yellow}重启${c.reset}    node daemon.js restart [端口号]`);
  console.log(`  ${c.dim}          重启守护进程${c.reset}`);
  console.log('');
  console.log(`  ${c.cyan}状态${c.reset}    node daemon.js status`);
  console.log(`  ${c.dim}          查看进程状态、健康检查、运行时长${c.reset}`);
  console.log('');
  console.log(`  ${c.magenta}日志${c.reset}    node daemon.js logs [行数]`);
  console.log(`  ${c.dim}          查看最近日志（默认50行）${c.reset}`);
  console.log('');
  console.log(`  ${c.blue}前台${c.reset}    node daemon.js run [端口号]`);
  console.log(`  ${c.dim}          前台守护运行（不脱离终端，调试用）${c.reset}`);
  console.log('');
  console.log(`  ${c.dim}端口号默认为 8080${c.reset}`);
  console.log('');
}


// ════════════════════════════════════════════════════════
//  主入口
// ════════════════════════════════════════════════════════

const command = process.argv[2] || 'help';
const arg1 = process.argv[3];

switch (command) {
  case 'start':
    cmdStart(parseInt(arg1) || 8080);
    break;
  case 'run':
    cmdRun(parseInt(arg1) || 8080);
    break;
  case 'stop':
    cmdStop();
    break;
  case 'restart':
    cmdRestart(parseInt(arg1) || null);
    break;
  case 'status':
    cmdStatus();
    break;
  case 'logs':
  case 'log':
    cmdLogs(arg1);
    break;
  case 'help':
  case '--help':
  case '-h':
    printHelp();
    break;
  default:
    log('ERROR', `未知命令: ${command}`);
    printHelp();
    break;
}
