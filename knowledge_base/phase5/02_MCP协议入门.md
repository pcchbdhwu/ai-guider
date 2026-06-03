# MCP 协议入门

## 什么是 MCP
MCP（Model Context Protocol）= Anthropic 发布的 AI 连接外部工具的开放标准。

类比：**MCP = USB-C 接口**——统一了 AI 和各种外部工具的连接方式。

## 为什么需要 MCP
以前：每个 AI 工具单独对接每个外部服务（M×N 种连接）
现在：所有 AI 工具通过 MCP 标准对接所有服务（M+N 种连接）

## MCP Server 三大件
| 资源类型 | 含义 | 示例 |
|---------|------|------|
| **Tools** | AI 可调用的动作 | 搜索网页、读文件、发邮件、操作数据库 |
| **Resources** | AI 可读取的数据 | 文档内容、数据库记录、配置文件 |
| **Prompts** | 预定义提示模板 | 代码审查模板、翻译模板 |

## 工作流程
```
用户提问 → Claude(Client) → 决定需用什么工具
         → 通过 MCP 调用 Server → Server 执行 → 返回结果
         → Claude 结合结果生成回答
```

## 常用 MCP Server 类型
- **网络搜索**：Brave Search、Exa Search
- **文件系统**：本地文件读写
- **数据库**：SQLite、PostgreSQL
- **GitHub**：仓库操作、Issues、PR
- **Skills 管理**：安装/卸载/搜索 Skills

## 安全注意事项
- ⚠️ 只接入可信来源的 MCP Server
- ⚠️ 文件系统 MCP 要限制访问目录范围
- ⚠️ 数据库 MCP 使用只读账号
