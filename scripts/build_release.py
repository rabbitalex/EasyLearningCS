#!/usr/bin/env python3
"""构建 EasyLearningCS 小白发布包。默认一次生成 Windows 与 macOS 两个双击即用 ZIP。"""

from __future__ import annotations

import argparse
from pathlib import Path
import fnmatch
import zipfile

ROOT = Path(__file__).resolve().parent.parent
DIST_DIR = ROOT / 'dist'
DEFAULT_VERSION = 'v2.0.1'

BASE_EXCLUDES = [
    '.git', '.git/**',
    '.github', '.github/**',
    '.codebuddy', '.codebuddy/**',
    'dist', 'dist/**',
    'scripts', 'scripts/**',
    '.gitignore', '.gitattributes',
    '*.DS_Store', '*.pyc',
    '__pycache__', '__pycache__/**',
    'runtime/README.md',
    'V2.0/daemon.js',
    'V2.0/user-data.json',
    'V2.0/.port',
    'V2.0/.daemon.pid',
    'V2.0/logs', 'V2.0/logs/**',
]


def get_mode_config(version: str) -> dict:
    return {
        'novice-win': {
            'package_name': f'EasyLearningCS-win-{version}',
            'label': 'Windows 小白双击版',
            'excludes': [
                '双击启动-Mac.command',
                '使用说明-Mac.txt',
                'start.command',
                'start.sh',
            ],
            'rename_map': {
                '双击启动-Windows.bat': '双击启动.bat',
                '使用说明-Windows.txt': '使用说明.txt',
            },
        },
        'novice-mac': {
            'package_name': f'EasyLearningCS-mac-{version}',
            'label': 'macOS 小白双击版',
            'excludes': [
                '双击启动-Windows.bat',
                '使用说明-Windows.txt',
                'runtime', 'runtime/**',
                'start.bat',
            ],
            'rename_map': {
                '双击启动-Mac.command': '双击启动.command',
                '使用说明-Mac.txt': '使用说明.txt',
            },
        },
    }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description='构建 EasyLearningCS 小白发布 ZIP')
    parser.add_argument(
        '--mode',
        choices=['all', 'novice-win', 'novice-mac'],
        default='all',
        help='默认一次生成 Windows 和 macOS 两个双击即用 ZIP',
    )
    parser.add_argument(
        '--version',
        default=DEFAULT_VERSION,
        help='发布版本号，默认 v2.0.1，例如 v2.1.0',
    )
    return parser.parse_args()


def should_exclude(relative_path: Path, mode: str, mode_config: dict) -> bool:
    rel = relative_path.as_posix()
    patterns = list(BASE_EXCLUDES) + mode_config[mode]['excludes']
    for pattern in patterns:
        if fnmatch.fnmatch(rel, pattern):
            return True
    return False


def archive_name(relative_path: Path, mode: str, mode_config: dict) -> str:
    rel = relative_path.as_posix()
    rename_map = mode_config[mode]['rename_map']
    return rename_map.get(rel, rel)


def build_zip(mode: str, mode_config: dict) -> Path:
    config = mode_config[mode]
    package_name = config['package_name']
    zip_path = DIST_DIR / f'{package_name}.zip'
    archive_prefix = f'{package_name}/'

    file_count = 0
    with zipfile.ZipFile(zip_path, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as zf:
        for path in sorted(ROOT.rglob('*')):
            if path.is_dir():
                continue
            rel = path.relative_to(ROOT)
            if should_exclude(rel, mode, mode_config):
                continue
            zf.write(path, archive_prefix + archive_name(rel, mode, mode_config))
            file_count += 1

    print(f'已生成: {zip_path}')
    print(f'文件数: {file_count}')
    print(f'模式: {config["label"]}')
    return zip_path


def main() -> None:
    args = parse_args()
    DIST_DIR.mkdir(parents=True, exist_ok=True)
    mode_config = get_mode_config(args.version)

    if args.mode == 'all':
        for mode in ('novice-win', 'novice-mac'):
            build_zip(mode, mode_config)
    else:
        build_zip(args.mode, mode_config)


if __name__ == '__main__':
    main()
