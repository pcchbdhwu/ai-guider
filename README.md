# AI 引路人 — Cherry Studio 六阶段 Agent 提示词包

## 项目概述
本项目为大一人工智能通识课实验作品，通过 Cherry Studio 平台设计一套分阶段 AI 助手体系，引导用户从 AI 零基础到熟练掌握现代 AI 工具链（Claude Code + DeepSeek + GitHub + Skills/MCP）。

## 作者信息
- 姓名：彭晨晟
- 学号：25521045
- 班级：2502
- 学院：电子信息
- 实验日期：2026年5月31日

## 六阶段路线图

| 阶段 | Agent 名称 | 核心目标 | 模型 |
|------|-----------|---------|------|
| 🟢 阶段一 | AI启蒙实操向导 | AI认知+Agent概念+日常办公实操 | DeepSeek |
| 🟡 阶段二 | Claude Code终端向导 | Claude Code安装+基本命令+首个项目 | DeepSeek |
| 🔵 阶段三 | 模型集成架构师 | DeepSeek接入+多模型协作+截图解决方案 | DeepSeek |
| 🟠 阶段四 | GitHub协作导航官 | Git基础+GitHub协作+首个PR | DeepSeek |
| 🔴 阶段五 | Agent扩展架构师 | Skills机制+MCP协议+自定义Skill | DeepSeek |
| 🟣 阶段六 | AI工具链架构师 | 全工具链整合+多模型协作流水线+综合实战 | DeepSeek |

## 文件结构

```
AI引路人项目/
├── README.md                          ← 本文件
├── agents/                            ← 6 个 Agent 配置（可导入 Cherry Studio）
│   ├── agent_phase1_AI启蒙实操向导.json
│   ├── agent_phase2_ClaudeCode终端向导.json
│   ├── agent_phase3_模型集成架构师.json
│   ├── agent_phase4_GitHub协作导航官.json
│   ├── agent_phase5_Agent扩展架构师.json
│   └── agent_phase6_AI工具链架构师.json
└── knowledge_base/                    ← 48 个知识库文件
    ├── phase1/  (8个文件)   AI基础+模型对比+CS安装+Prompt+WPS/PPT/Excel+视频+案例+Agent/MCP
    ├── phase2/  (6个文件)   CC概述+安装+Key获取+命令速查+首个项目+报错解决
    ├── phase3/  (11个文件)  多模型理念+对比+Key获取+接入配置+路由+限制+多渠道+实战+截图方案+Reasonix+前缀缓存
    ├── phase4/  (6个文件)   Git理念+安装配置+命令速查+GitHub工作流+规范+PR指南
    ├── phase5/  (11个文件)  Skills概念+MCP协议+热门推荐+安装实操+自定义Skill+生态扩展+自我修正+OpenClaw+CLI生态+Memory记忆服务器+防御性规则
    └── phase6/  (6个文件)   工具链全景+项目管理+持续学习+排障速查+多模型流水线+三方对照
```

## 使用方法

### 导入 Agent 到 Cherry Studio
1. 打开 Cherry Studio
2. 进入 Agent 管理页面
3. 参考各 JSON 文件中的 systemPrompt、knowledgeBase、mcpTools 配置
4. 手动创建 Agent 并填入对应配置
5. 将 knowledge_base 文件夹导入为 Agent 知识库

### 推荐学习路径
按阶段一到六顺序递进，每阶段完成目标 Checklist 后再进入下一阶段。

## 参考资料
- Cherry Studio 官方：https://cherry-ai.com/
- Claude Code：https://github.com/anthropics/claude-code
- Anthropic Skills：https://github.com/anthropics/skills
- DeepSeek 开放平台：https://platform.deepseek.com/
- B站教程：BV1UWzpBkERN / BV1NCNPeZENF / BV1aWFWeyE6D
