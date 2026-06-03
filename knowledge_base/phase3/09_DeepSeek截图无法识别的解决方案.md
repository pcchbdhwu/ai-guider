# DeepSeek 截图无法识别 — 解决方案

## 问题根源
DeepSeek 是**纯文本模型**（Text-only），不支持多模态视觉输入。Claude Code 中接入 DeepSeek 后遇到截图同样无法处理。

## 解决方案

### 方案A：在 Reasonix/Claude Code 中接入豆包 2.0（推荐）

不单独建 Agent，而是在你的编码终端中直接配置豆包作为多模态后端：

**Reasonix 中**：Reasonix 本身就是 DeepSeek 原生终端，不支持多模态切换。遇到截图需求时：

```
Reasonix(DeepSeek) 日常编码
    ↓ 遇到截图
切到 Claude Code（或 Cherry Studio 豆包会话）
    ↓ 分析截图得到文字结果
切回 Reasonix 继续工作
```

**Claude Code 中**：在 `~/.claude/settings.json` 中添加豆包模型：

```json
{
  "CLAUDE_CODE_SIMPLE": "1",
  "models": {
    "doubao-vision": {
      "name": "doubao-seed-2.0-pro",
      "displayName": "豆包2.0 多模态",
      "provider": "openai-compatible",
      "baseURL": "https://ark.cn-beijing.volces.com/api/v3",
      "apiKey": "你的豆包API Key",
      "contextWindow": 128000,
      "maxTokens": 8192,
      "capabilities": {
        "vision": true,
        "tool_use": false
      }
    }
  }
}
```

使用：`/model doubao-vision` → 贴截图分析 → `/model deepseek-chat` 切回日常。

### 方案B：OCR 免费过渡（无需 API）

| 工具 | 操作 |
|------|------|
| 微信 | Win+Shift+S 截图 → 粘贴到微信 → 右键"提取文字" |
| QQ | Ctrl+Alt+A 截图 → "文字识别" |
| Umi-OCR | 开源免费，离线可用，批量识别 |

提取文字后粘贴到 DeepSeek 对话中分析。

### 方案C：网页版豆包/Gemini 直接传图

| 工具 | 费用 | 用途 |
|------|------|------|
| 豆包网页版 | 免费 | 截图拖进去直接问 |
| Gemini 2.5 Pro | 免费额度 | 多模态能力强 |
| 通义千问网页版 | 免费 | 支持图片上传 |

### 工具-场景速查

| 你的环境 | 遇到截图时 |
|---------|-----------|
| Claude Code 日常编码 | `/model doubao-vision` → 分析完 → `/model deepseek-chat` |
| Reasonix 日常编码 | 切到 Claude Code 或 Cherry Studio 豆包会话 |
| Cherry Studio 日常对话 | 对话区切换模型到豆包/Gemini |
| 没有 API/网络 | 微信 OCR → 贴文字给 DeepSeek |
