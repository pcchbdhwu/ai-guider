# Agent Skills 与 CLI 生态

## Agent Skills：从 Claude 专属到开放标准

参考 BV1HuiyBQE9G（技术爬爬虾）

### 发展历程
- **初期**：Agent Skills 只是 Claude 中的一个小功能模块
- **2025年下半年**：Codex、Cursor、OpenCode 等陆续加入支持
- **2025年12月18日**：Anthropic 正式发布 Agent Skills 为**开放标准**（agentskills.io/specification）
- **现状**：Skills 和 MCP 一样，朝着通用、跨平台方向演进

### Skills vs MCP：怎么配合

| | Agent Skills | MCP |
|------|------------|-----|
| **本质** | 提示词工程（告诉 AI 怎么做） | 工具协议（给 AI 工具用） |
| **形式** | SKILL.md 文件 | Server 程序 |
| **作用** | 定义任务流程和领域知识 | 连接外部服务和数据 |
| **关系** | Skill 可以调用 MCP 工具 | MCP 为 Skill 提供执行能力 |
| **类比** | 菜谱（怎么做） | 厨具（用什么做） |

### 跨平台 Skills 生态
- **Claude Code**：原生 Skills，`~/.claude/skills/`
- **Codex**：支持 Agent Skills 标准
- **Cursor**：支持 Agent Skills
- **OpenCode**：支持 Agent Skills
- **OpenClaw**：自有 Skills + 兼容 Claude-format
- **Awesome Skills**：github.com/ComposioHQ/awesome-claude-skills

---

## CLI 生态：为什么 AI 天然适合命令行

参考 BV1G29EBGE8b（技术爬爬虾）

### CLI 复兴
CLI（Command Line Interface）作为最古老的计算机交互方式，正因为 AI Agent 迎来新一轮爆发。

**CLI vs GUI 对 AI 的差异：**
| | CLI | GUI（图形界面） |
|------|-----|--------------|
| AI 交互方式 | 文本输入→文本输出 | 需要解析按钮/菜单/窗口 |
| 集成难度 | 低（标准输入输出） | 高（需屏幕识别/模拟点击） |
| 可靠性 | 高（确定性输出） | 低（UI 变化即失效） |
| 自动化 | 原生支持管道和脚本 | 需额外自动化工具 |

### 关键开源项目

**CLI Anything**（GitHub 2万+ Star）
- 一行命令把任意软件以 CLI 形式接入 Agent 框架
- 原理：将软件的输入输出抽象为命令行参数和标准输出

**OpenCLI**
- 把任何网站或 Electron 应用转成 AI 可调用的命令行
- 原理：将网页交互封装为 CLI 命令

### 为什么 Claude Code、Codex、OpenClaw 都选终端
1. 终端是文本天然载体 → AI 原生
2. 管道机制 → 工具可组合
3. 无 GUI 开销 → 快、省资源
4. 跨平台一致 → macOS/Linux/Win 体验统一
5. 可与现有 DevOps 工具链直接对接

---

## OpenClaw + 飞书：Agent 的"UI 外壳"

参考 BV1a1wsz1EEH（技术爬爬虾）

### 为什么飞书是 OpenClaw 最佳搭档
飞书 = 通讯 + 文档 + 多维表格 + 日历 + 审批 + 知识库 + 开放 API
- **免公网 IP 的长连接** → Agent 无需公网服务器
- **飞书官方插件** → 一键接入 OpenClaw
- **多维表格作为 Agent "记忆外脑"** → 结构化数据存储
- **飞书妙搭** → 低代码搭建 Agent 工作台

### 典型用法
```
你在飞书群里 @机器人 "帮我查下昨天的 GitHub Trending"
→ 飞书→OpenClaw→Web搜索→整理结果→回复飞书消息
```

---

## Cherry Studio 知识库三大痛点与进阶方案

参考 BV1NMoFYoEsb（技术爬爬虾）

### 常见痛点
| 痛点 | 表现 | 解决 |
|------|------|------|
| **检索不准** | 上传一堆文档，AI 找不到想要的 | 加入**重排序模型（Reranker）**，对检索结果二次排序 |
| **长文档截断** | 文档太长，超出上下文 | 使用**超大上下文模型**（Claude 200K / Kimi 百万级） |
| **结构化数据检索差** | 数据库里的表格式数据检索效果不好 | 使用**数据库 MCP Server**（如 PostgreSQL MCP），让 AI 直接查数据库 |

### 进阶配置
1. **Reranker 模型**：在硅基流动等平台选择重排序模型，接入 Cherry Studio
2. **数据库 MCP**：PostgreSQL MCP Server → AI 写 SQL 查询而非模糊检索
3. **混合检索**：RAG（语义检索）+ MCP 数据库（精确查询）双通道

---

## 参考视频
| 视频 | 内容 |
|------|------|
| BV1HuiyBQE9G | Agent Skills 详细攻略，一期精通 |
| BV1a1wsz1EEH | 飞书官方插件 + OpenClaw |
| BV1G29EBGE8b | 为什么巨头都在做 CLI |
| BV1NMoFYoEsb | Cherry Studio 知识库三大痛点与进阶 |
