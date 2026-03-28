## EasyLearningCS

EasyLearningCS 是一个面向初学者的互动式编程学习项目。现在提供 **Windows** 和 **macOS** 两个“小白双击版”压缩包；推荐用压缩包里的启动脚本打开，这样学习进度会写入本地的 `user-data.json`，而不是保存在浏览器本地存储里。

### 下载方式

推荐直接下载最新构建的两个 ZIP：

- **Windows ZIP**：[EasyLearningCS-win-v2.0.2.zip](https://github.com/rabbitalex/EasyLearningCS/releases/download/latest-dist/EasyLearningCS-win-v2.0.2.zip)
- **macOS ZIP**：[EasyLearningCS-mac-v2.0.2.zip](https://github.com/rabbitalex/EasyLearningCS/releases/download/latest-dist/EasyLearningCS-mac-v2.0.2.zip)
- **最新构建页面**：[latest-dist Release](https://github.com/rabbitalex/EasyLearningCS/releases/tag/latest-dist)

### 使用方式

下载并完整解压后：

- **Windows**：双击 `双击启动.bat`
- **macOS**：双击 `双击启动.command`

浏览器会自动打开课程页面。学习进度保存在以下文件中：

- **Windows**：`V2.0\user-data.json`
- **macOS**：`V2.0/user-data.json`

请始终通过 `双击启动.bat` 或 `双击启动.command` 启动；如果直接打开 `V2.0/index.html`，**不会写入 `user-data.json`**。

### 运行说明

- **Windows 版**：压缩包内已包含运行时，解压后可直接启动
- **macOS 版**：会通过本地 `Python 3` 启动一个本地服务，用来把数据写入 `user-data.json`；如果系统首次弹出安装提示，按提示完成一次即可

### 仓库说明

仓库里保留的是源码和打包脚本，`dist/` 属于构建产物，默认不提交到 Git 历史。发布 ZIP 会保留用户真正需要的启动脚本、本地服务与课程资源，不再把进度存到浏览器本地。

### 本地打包

在项目根目录执行：

```bash
python3 scripts/build_release.py
```

默认会一次生成两个发布包：

- `dist/EasyLearningCS-win-v2.0.2.zip`
- `dist/EasyLearningCS-mac-v2.0.2.zip`

如果要指定版本号：

```bash
python3 scripts/build_release.py --version v2.1.0
```

首次启动时，如果 `V2.0/user-data.json` 不存在，程序会自动根据 `V2.0/user-data.default.json` 生成一份新的用户数据文件。

### GitHub 自动发布 dist

仓库已配置 GitHub Actions 工作流：

- **push 到 `master`**：自动构建 `dist`，上传到 Actions Artifacts，并自动更新一个 **`latest-dist` Release**
- **push `v*` tag**：自动构建 `dist`，并创建对应版本的正式 GitHub Release
- **手动触发 `workflow_dispatch`**：可在 GitHub Actions 页面手动指定版本号，并选择是否直接创建 Release

### 推荐发布流程

#### 日常更新

直接推送到 `master` 即可，GitHub 会自动更新：

- Actions 构建产物
- `latest-dist` 预发布下载页

#### 正式版本发布

需要正式发版时，创建并推送版本 tag，例如：

```bash
git tag v2.0.2
git push origin v2.0.2
```

推送后，GitHub 会自动生成对应 Release，并附带：

- `EasyLearningCS-win-v2.0.2.zip`
- `EasyLearningCS-mac-v2.0.2.zip`

### 项目目录

- `V2.0/`：课程页面、本地服务与用户数据模板
- `scripts/build_release.py`：发布包构建脚本
- `.github/workflows/release-dist.yml`：自动构建 / 自动发布流程
- `双击启动-Windows.bat` / `双击启动-Mac.command`：最终 ZIP 的双击入口模板
- `start.bat` / `start.command` / `start.sh`：启动本地服务并自动打开浏览器
