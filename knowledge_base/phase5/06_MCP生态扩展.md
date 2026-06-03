# MCP 生态扩展

## Cherry Studio 中配置 MCP Server
1. 设置 → MCP 服务器 → 添加
2. 填写服务器名称和地址
3. 启用 → Agent 中勾选该 MCP 工具

## 常用 MCP Server 清单
| Server | 功能 | 推荐 |
|--------|------|------|
| Exa Search | 网络搜索 | ✅ 已配置 |
| Filesystem | 本地文件读写 | 按需 |
| GitHub | 仓库/Issue/PR 操作 | 按需 |
| Brave Search | 网络搜索备选 | 备选 |
| Memory | 持久化记忆 | ✅ 已配置 |

## Claude Code 中配置 MCP
在 `~/.claude/settings.json` 中添加：
```json
{
  "mcpServers": {
    "exa": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-exa"],
      "env": {
        "EXA_API_KEY": "你的Key"
      }
    }
  }
}
```

## MCP 安全原则
- 来源可信：只接入官方或知名社区维护的 MCP Server
- 权限最小化：文件系统限制目录、数据库用只读账号
- 定期审计：检查已接入的 MCP Server 列表

## Harness 元技能
Harness 是一个特殊的元技能（来自 revfactory/harness），它可以用 AI 帮你设计 AI 团队。你告诉它要做什么，它帮你规划需要哪些 Agent、每个 Agent 配什么 Skill。
