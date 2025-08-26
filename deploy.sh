#!/bin/bash

# ⚠️ 确保已经安装 Git、Node.js、Expo CLI 和 EAS CLI
# ⚠️ 替换 REPO_URL 为你的 GitHub 仓库地址
REPO_URL="https://github.com/janeTingl/-T-.git"
PROJECT_DIR="小T的辅导能手"

echo "=============================="
echo "🌐 克隆最新代码"
echo "=============================="
# 如果文件夹已存在，先删除旧的
if [ -d "$PROJECT_DIR" ]; then
  echo "删除已有项目文件夹..."
  rm -rf "$PROJECT_DIR"
fi

# 克隆仓库
git clone "$REPO_URL"

# 进入项目目录
cd "$PROJECT_DIR" || { echo "❌ 项目文件夹不存在！"; exit 1; }

echo "=============================="
echo "📦 安装依赖"
echo "=============================="
npm install

echo "=============================="
echo "🔨 构建 APK"
echo "=============================="
# 如果尚未登录 EAS，请先手动运行：eas login
eas build -p android --profile release

echo "=============================="
echo "✅ 构建完成，请查看 EAS 提供的 APK 下载链接"
echo "=============================="
