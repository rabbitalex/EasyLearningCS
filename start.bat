@echo off
chcp 65001 >nul 2>&1
setlocal enabledelayedexpansion

:: ============================================================
:: EasyLearningCS 一键启动（Windows 7+）
:: 内嵌 Python，解压即用，无需安装任何软件，无需管理员权限
:: ============================================================

set "SCRIPT_DIR=%~dp0"
set "APP_DIR=%SCRIPT_DIR%V2.0"
set "PY="

:: 1. 内嵌 Python（优先）
if exist "%SCRIPT_DIR%runtime\python-win-x64\python.exe" (
  set "PY=%SCRIPT_DIR%runtime\python-win-x64\python.exe"
  goto :found
)
:: 2. 系统 Python
where python3 >nul 2>&1
if not errorlevel 1 (
  set "PY=python3"
  goto :found
)
where python >nul 2>&1
if not errorlevel 1 (
  for /f %%v in ('python -c "import sys;print(sys.version_info[0])" 2^>nul') do (
    if "%%v"=="3" (
      set "PY=python"
      goto :found
    )
  )
)

echo.
echo   ❌ 未找到 Python 运行时
echo   runtime\python-win-x64\ 目录应包含内嵌 Python
echo   请确认文件完整性
echo.
pause
exit /b 1

:found
echo.
echo   🚀 EasyLearningCS 启动中...
echo   📁 %APP_DIR%
echo.

del /f /q "%APP_DIR%\.port" >nul 2>&1

:: ---------- 清理旧进程 ----------
:: 查找并终止所有残留的 server.py 进程
echo   🧹 正在清理旧进程...
for /f "tokens=2" %%p in ('tasklist /fi "imagename eq python.exe" /fo list 2^>nul ^| findstr /i "PID:"') do (
  wmic process where "ProcessId=%%p" get CommandLine 2>nul | findstr /i "server.py" >nul 2>&1 && (
    taskkill /f /pid %%p >nul 2>&1 && echo   🧹 已终止旧进程 PID=%%p
  )
)
for /f "tokens=2" %%p in ('tasklist /fi "imagename eq python3.exe" /fo list 2^>nul ^| findstr /i "PID:"') do (
  wmic process where "ProcessId=%%p" get CommandLine 2>nul | findstr /i "server.py" >nul 2>&1 && (
    taskkill /f /pid %%p >nul 2>&1 && echo   🧹 已终止旧进程 PID=%%p
  )
)
:: 额外：按端口清理（如果 .port 文件留下了旧端口）
for /f "tokens=5" %%a in ('netstat -aon 2^>nul ^| findstr ":9500 :9501 :9502 :9503 :9504" ^| findstr "LISTENING"') do (
  taskkill /f /pid %%a >nul 2>&1
)
timeout /t 1 /nobreak >nul 2>&1

:: 启动服务器
start /b "" "%PY%" "%APP_DIR%\server.py"

:: 等待端口文件
set "PORT="
for /l %%i in (1,1,30) do (
  if exist "%APP_DIR%\.port" (
    set /p PORT=<"%APP_DIR%\.port"
    goto :got_port
  )
  timeout /t 1 /nobreak >nul 2>&1
)
set "PORT=9500"

:got_port
echo   🌐 http://localhost:%PORT%

:: 打开浏览器
start "" "http://localhost:%PORT%"

echo   ⏹  关闭此窗口停止服务器
echo.

:: watchdog 循环
:loop
timeout /t 60 /nobreak >nul 2>&1
"%PY%" "%APP_DIR%\watchdog.py" >nul 2>&1
goto loop
