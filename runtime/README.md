# runtime 目录

此目录存放 Windows 内嵌 Python 运行时。macOS 和 Linux 使用系统自带 Python 3，无需额外文件。

## 目录结构

```
runtime/
├── python-win-x64/      ← Windows 嵌入式 Python 3.12（21MB，已包含）
│   ├── python.exe
│   ├── python312.dll
│   └── ...
└── README.md
```

## 各平台说明

| 平台 | Python 来源 | 是否需要安装 |
|------|-------------|:---:|
| **Windows 7+** | `runtime/python-win-x64/python.exe`（内嵌） | **不需要** |
| **macOS 10.15+** | 系统 Xcode CLI Tools 自带 `/usr/bin/python3` | **不需要** |
| **macOS 10.6-10.14** | 需要安装 Xcode CLI Tools（`xcode-select --install`） | 一条命令 |
| **Linux** | 系统自带 `python3`（Ubuntu/Debian/CentOS 等） | **不需要** |

## Windows 内嵌 Python

已包含 Python 3.12 embeddable package（仅 21MB），支持 Windows 7 64 位及以上。

如需更新版本，从 https://www.python.org/downloads/windows/ 下载「Windows embeddable package (64-bit)」，解压替换此目录内容即可。
