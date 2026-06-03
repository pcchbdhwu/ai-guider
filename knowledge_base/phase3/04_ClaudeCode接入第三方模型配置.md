# Claude Code 接入第三方模型配置

> ✅ **已完成**（2026.6.3）：DeepSeek 已成功接入 Claude Code，配置见下方。

## 配置文件位置
- `~/.claude/settings.json`（全局配置）
- 项目目录下 `.claude/settings.local.json`（项目级覆盖）

## 添加 DeepSeek 模型
```json
{
  "models": {
    "deepseek-chat": {
      "name": "deepseek-chat",
      "displayName": "DeepSeek V3",
      "provider": "openai-compatible",
      "baseURL": "https://api.deepseek.com/v1",
      "apiKey": "sk-你的DeepSeek_API_Key",
      "contextWindow": 128000,
      "maxTokens": 8192,
      "inputPrice": 0.14,
      "outputPrice": 0.56,
      "capabilities": {
        "vision": false,
        "tool_use": true
      }
    },
    "deepseek-reasoner": {
      "name": "deepseek-reasoner", 
      "displayName": "DeepSeek R1",
      "provider": "openai-compatible",
      "baseURL": "https://api.deepseek.com/v1",
      "apiKey": "sk-你的DeepSeek_API_Key",
      "contextWindow": 128000,
      "maxTokens": 8192,
      "inputPrice": 0.55,
      "outputPrice": 2.19,
      "capabilities": {
        "vision": false,
        "tool_use": false
      }
    }
  }
}
```

## 切换模型命令
```bash
# 在 Claude Code 对话中
/model deepseek-chat

# 或启动时指定
claude --model deepseek-chat
```

## 注意事项
- 第三方模型的 `capabilities` 需准确配置（DeepSeek 不支持 vision）
- `tool_use` 能力可能不完全等同于 Claude 原生模型
- 建议先测试再用于重要项目

## 已知问题与修复

### 2026年6月 Claude Code 更新后 DeepSeek 404 报错

**症状**：Claude Code 更新后，连接 DeepSeek 模型对话报错 `API error 404 "env"`

**根因**：新版 Claude Code 对第三方模型的兼容模式发生变化

**修复**：在 `~/.claude/settings.json` 中添加：

```json
{
  "CLAUDE_CODE_SIMPLE": "1",
  "mcpServers": { ... },
  "models": { ... }
}
```

`CLAUDE_CODE_SIMPLE` 是顶层字段，与 `mcpServers`、`models` 同级，不要嵌套在其他字段内。

**验证**：添加后重启 Claude Code，切换到 DeepSeek 模型测试对话是否正常。
