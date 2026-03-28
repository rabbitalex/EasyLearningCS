## EasyLearningCS

EasyLearningCS 是一个面向初学者的互动式编程学习项目。现在提供 **Windows** 和 **macOS** 两个“小白双击版”压缩包，用户下载后只需要解压并双击即可开始学习，不需要额外安装 Python，也不需要手动配置本地服务。

### 下载方式

推荐直接从 GitHub 的 **Releases** 页面下载：

- **Windows**：`EasyLearningCS-win-v2.0.zip`
- **macOS**：`EasyLearningCS-mac-v2.0.zip`

下载后：

- **Windows**：解压后双击 `开始学习.html` 或 `双击启动.bat`
- **macOS**：解压后双击 `开始学习.html` 或 `双击启动.command`

学习进度会保存在浏览器本地存储中。

### 仓库说明

仓库里保留的是源码和打包脚本，`dist/` 属于构建产物，默认不提交到 Git 历史。发布 ZIP 由脚本自动生成。

### 本地打包

在项目根目录执行：

```bash
python3 scripts/build_release.py
```

默认会一次生成两个发布包：

- `dist/EasyLearningCS-win-v2.0.zip`
- `dist/EasyLearningCS-mac-v2.0.zip`

如果要指定版本号：

```bash
python3 scripts/build_release.py --version v2.1.0
```

### GitHub 自动发布 dist

仓库已配置 GitHub Actions 工作流：

- **push 到 `master`**：自动构建 `dist`，并上传到 Actions Artifacts
- **push `v*` tag**：自动构建 `dist`，并创建 GitHub Release，把两个 ZIP 作为附件上传
- **手动触发 workflow_dispatch**：可在 GitHub Actions 页面手动指定版本号，并选择是否直接创建 Release

### 推荐发布流程

1. 提交代码并推送到 `master`
2. 确认 Actions 构建成功
3. 需要正式发布时，创建并推送版本 tag，例如：

```bash
git tag v2.0
git push origin v2.0
```

推送后，GitHub 会自动生成对应 Release，并附带：

- `EasyLearningCS-win-v2.0.zip`
- `EasyLearningCS-mac-v2.0.zip`

### 项目目录

- `V2.0/`：课程页面与前端逻辑
- `scripts/build_release.py`：发布包构建脚本
- `.github/workflows/release-dist.yml`：自动构建 / 自动发布流程
- `开始学习.html`：跨平台本地入口页
