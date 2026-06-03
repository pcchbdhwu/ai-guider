# Anthropic API Key 获取与认证

## 获取 API Key
1. 访问 Anthropic Console：https://console.anthropic.com/
2. 注册账号（需要邮箱，可能需要手机验证）
3. 登录后进入 Dashboard → API Keys
4. 点击「Create Key」→ 输入名称（如"Claude Code"）→ 复制保存
5. ⚠️ Key 只显示一次，务必立即保存到安全位置

## 首次认证
```bash
# 启动 Claude Code
claude

# 按提示输入 API Key
# 或提前设置环境变量
export ANTHROPIC_API_KEY="sk-ant-xxxxx"
```

## Key 安全管理
```bash
# 方案1：环境变量（推荐）
# 添加到 ~/.bashrc 或 ~/.zshrc
echo 'export ANTHROPIC_API_KEY="sk-ant-xxxxx"' >> ~/.bashrc
source ~/.bashrc

# 方案2：Claude Code 配置文件
# 配置会自动保存在 ~/.claude/ 目录下
```

## 充值与管理
- 在 console.anthropic.com 查看余额与用量
- 设置消费上限（建议学生设置每月$20-30上限，防超支）
- 每百万 Token 约 $15（Sonnet）/ $3（Haiku）

## 安全提醒
- ❌ 不要把 API Key 写在代码里
- ❌ 不要把 API Key 提交到 GitHub
- ✅ 使用环境变量存储
- ✅ 定期在 Console 中轮换 Key
- ✅ 如果 Key 泄露，立即在 Console 中删除重建
