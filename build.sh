#!/bin/bash

# ⚠️ 请先安装 Git、Node.js、Expo CLI 和 EAS CLI
# ⚠️ 确保当前目录为完整项目根目录

# 1️⃣ 设置变量
REPO_URL="https://github.com/janeTingl/-T-.git"
BRANCH="main"

echo "=============================="
echo "📂 初始化 Git 仓库"
echo "=============================="
git init
git add .
git commit -m "自动提交：更新项目代码"

echo "=============================="
echo "🌐 设置远程仓库"
echo "=============================="
git remote add origin $REPO_URL
git branch -M $BRANCH

echo "=============================="
echo "⬆️ 推送到 GitHub"
echo "=============================="
git push -u origin $BRANCH

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
