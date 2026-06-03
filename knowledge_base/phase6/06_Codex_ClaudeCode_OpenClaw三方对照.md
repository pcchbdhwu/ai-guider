# Codex vs Claude Code vs OpenClaw 三方对照

## 一句话区分

| 工具 | 一句话 | 类比 |
|------|-------|------|
| **Claude Code** | Anthropic 的终端 AI 编程助手 | 一个顶级的程序员，坐在终端里帮你写代码 |
| **Codex** | OpenAI 的终端 AI 编程助手 | 另一个顶级程序员，和 Claude Code 同赛道竞争 |
| **OpenClaw** | 多 Agent 编排平台，不只编程 | 你组建了一个 AI 团队，有 PM、工程师、研究员 |

---

## 一、基础属性对比

| 维度 | Claude Code | Codex | OpenClaw |
|------|-----------|-------|----------|
| **开发商** | Anthropic | OpenAI | 开源社区（原 Clawdbot） |
| **开源** | ❌ 闭源 | ❌ 闭源 | ✅ 开源 |
| **后端模型** | Claude 系列 | GPT 系列 | 多模型（Claude/GPT/DeepSeek/国产模型） |
| **安装方式** | `npm install -g @anthropic-ai/claude-code` | `npm install -g @openai/codex` | Docker / `git clone` + npm |
| **使用界面** | 终端 CLI | 终端 CLI + 桌面App | 消息平台（微信/飞书/钉钉/QQ/Telegram） |
| **主要用途** | AI 辅助编程 | AI 辅助编程 | 多 Agent 通用协作 |
| **平台支持** | macOS / Linux / Win(WSL) | macOS / Linux / Win | macOS / Linux / Win |

---

## 二、核心能力对比

| 能力 | Claude Code | Codex | OpenClaw |
|------|:---:|:---:|:---:|
| 代码生成/编辑 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐（依赖背后的模型） |
| 文件系统操作 | ✅ | ✅ | ✅（通过 Agent 配置） |
| Shell 命令执行 | ✅ | ✅ | ✅（通过 Agent 配置） |
| Git 操作 | ✅ 原生 | ✅ 原生 | ⚠️ 需配置 |
| 多 Agent 协作 | ⚠️ SubAgent | ⚠️ 有限 | ✅ 核心功能 |
| 消息平台接入 | ❌ | ❌ | ✅ 微信/飞书/钉钉/QQ/Telegram |
| 本地部署 | ✅ 终端 | ✅ 终端 | ✅ Docker |
| 定时/自动化任务 | ❌ | ❌ | ✅ 定时触发 |
| 多模型切换 | ⚠️ 支持第三方 | ⚠️ 支持第三方 | ✅ 原生多模型 |
| 知识库/RAG | ⚠️ 通过MCP | ⚠️ 通过插件 | ✅ 内置 |
| Web 搜索 | ✅ | ✅ | ✅ |

---

## 三、Skills/扩展生态对比

| 维度 | Claude Code | Codex | OpenClaw |
|------|-----------|-------|----------|
| **Skills 标准** | Agent Skills（Anthropic 推动的开放标准） | 支持 Agent Skills | 自有 Skills 系统 + 兼容 Claude-format |
| **MCP 支持** | ✅ 原生 | ✅ 支持 | ✅ 支持 |
| **Skills 市场** | anthropics/skills 官方仓库 | 社区 + Codex 插件 | 社区贡献 |
| **自定义 Skill** | `/skill new` 或 SKILL.md | 插件/配置文件 | `/skill new` + 配置文件 |
| **SubAgent** | ✅ | ⚠️ | ✅ 多 Agent 是核心功能 |

---

## 四、适用场景对照

| 场景 | 推荐工具 | 理由 |
|------|---------|------|
| **个人编程学习** | Claude Code | 推理最强、代码质量最高 |
| **日常代码开发** | Claude Code 或 Codex | 两者代码能力同级，看偏好 |
| **GPT 生态深度用户** | Codex | 与 OpenAI 全家桶无缝集成 |
| **需要多 Agent 团队协作** | OpenClaw | 唯一支持多 Agent 编排 |
| **做个微信/飞书 AI 机器人** | OpenClaw | 原生消息平台接入 |
| **预算敏感** | OpenClaw + DeepSeek | 开源+国产模型=成本最低 |
| **只想写代码，不要乱七八糟** | Claude Code | 最纯粹、最专注 |
| **想7×24小时自动化** | OpenClaw | 定时任务+事件触发 |
| **多项目并行开发** | Codex(桌面版) | 多标签页+可视化 |
| **IDE 集成** | Codex 或 Claude Code | 都支持 VS Code 集成 |
| **国内网络环境** | OpenClaw（+国产模型） | 无需特殊网络 |

---

## 五、学习路径建议

```
第一阶段（入门）
  安装 Claude Code → 体验 AI 编程
  参考：BV1HuiyBQE9G（Agent Skills 精通）

第二阶段（对比）
  试用 Codex → 对比与 Claude Code 的差异
  理解：两者同赛道竞争，各有优势

第三阶段（扩展）
  了解 Agent Skills 开放标准——跨 Claude Code、Codex、Cursor 通用
  参考：agentskills.io/specification

第四阶段（进阶）
  部署 OpenClaw → 体验多 Agent 协作
  接入飞书/微信 → 随时随地与 Agent 交互

第五阶段（整合）
  根据场景选择工具：
    写代码 → Claude Code / Codex
    自动化 → OpenClaw
    学习 → Cherry Studio
```

---

## 六、底层趋势：为什么都在做 CLI

参考 BV1G29EBGE8b，CLI（命令行界面）正在成为 AI Agent 的主流交互方式：

1. **CLI 对 AI 更友好**：文本输入输出，无需解析 GUI 元素
2. **CLI Anything**：一行命令把任意软件接入 Agent（GitHub 2万+ Star）
3. **OpenCLI**：把任何网站/Electron 应用转成 CLI 供 AI 调用
4. **Agent Skills 标准化**：Anthropic 2025.12.18 发布为开放标准，Codex/Cursor/OpenCode 均已支持

---

## 七、参考视频

| 视频 | 内容 |
|------|------|
| BV1HuiyBQE9G | Agent Skills 详细攻略，一期精通（技术爬爬虾） |
| BV1a1wsz1EEH | 飞书官方插件 + OpenClaw 玩法（技术爬爬虾） |
| BV1G29EBGE8b | 为什么巨头都在做 CLI（技术爬爬虾） |
| BV1kH6nBFEPq | OpenClaw 全玩法攻略（技术爬爬虾） |
| BV1ZiNwzPEhP | OpenClaw 中级到高级教程（技术爬爬虾） |
