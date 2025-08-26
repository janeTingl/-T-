#!/bin/bash

# ⚠️ 确保当前目录为项目根目录
# ⚠️ 替换为你自己的 GitHub 仓库地址
REPO_URL="https://github.com/janeTingl/-T-.git"
BRANCH="main"

echo "=============================="
echo "📂 初始化 Git 仓库并提交代码"
echo "=============================="
git init
git add .
git commit -m "自动提交：更新项目代码"

echo "=============================="
echo "🌐 连接远程仓库"
echo "=============================="
git remote add origin $REPO_URL
git branch -M $BRANCH

echo "=============================="
echo "⬆️ 推送代码到 GitHub"
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
