# Git 安装与初始配置

## Windows
1. 下载 Git for Windows：https://git-scm.com/download/win
2. 安装过程全部默认选项即可
3. 安装完成后右键菜单会出现 "Git Bash Here"
4. 打开 Git Bash，执行以下配置：

```bash
git config --global user.name "彭晨晟"
git config --global user.email "你的邮箱@example.com"
```

## Mac
```bash
# 方式1：安装 Xcode Command Line Tools（会附带 Git）
xcode-select --install

# 方式2：Homebrew
brew install git
```

## 生成 SSH Key（用于连接 GitHub）
```bash
ssh-keygen -t ed25519 -C "你的邮箱@example.com"
# 一路回车默认即可

# 查看公钥
cat ~/.ssh/id_ed25519.pub
# 复制输出内容 → GitHub Settings → SSH Keys → 添加
```

## 验证安装
```bash
git --version
ssh -T git@github.com  # 应该看到 "Hi xxx!"
```
