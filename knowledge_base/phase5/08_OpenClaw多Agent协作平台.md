# OpenClaw 多 Agent 协作平台

## 什么是 OpenClaw
OpenClaw（原 Clawdbot）是一个**多 Agent 编排平台**，允许你创建和管理多个 AI Agent 协同工作。它可以部署在本地、连接消息平台（微信/飞书/钉钉/QQ）、编排多个 Agent 完成复杂任务。

类比理解：
- Cherry Studio Agent = 单人助理
- OpenClaw = 你组建了一个 AI 团队，有项目经理、工程师、研究员，各司其职

## 核心能力

| 能力 | 说明 |
|------|------|
| **多 Agent 编排** | 创建多个专业 Agent，分配不同角色和任务 |
| **消息平台接入** | 微信/飞书/钉钉/QQ/Discord/Telegram 等 |
| **本地部署** | Docker 一键部署，数据可控 |
| **Skills 系统** | 每个 Agent 可配置不同的能力扩展 |
| **多模型支持** | 可混合使用 Claude/GPT/DeepSeek/国产模型 |
| **自动化工作流** | 定时任务、事件触发、条件判断 |
| **国产模型适配** | 支持接入飞书+国产模型，国内网络可用 |

## 与 Cherry Studio Agent 的关系

| 维度 | Cherry Studio Agent | OpenClaw |
|------|-------------------|----------|
| 定位 | 单 Agent 对话助手 | 多 Agent 编排平台 |
| 使用方式 | 桌面应用内对话 | 部署后通过消息平台交互 |
| Agent 数量 | 一次一个 | 多个 Agent 同时协作 |
| 触发方式 | 手动切换对话 | 关键词触发/定时/事件驱动 |
| 消息平台 | 仅桌面 | 微信/飞书/钉钉/QQ/Telegram |
| 部署难度 | 下载即用 | 需 Docker/Node.js 部署 |
| 适合场景 | 个人学习、日常使用 | 团队协作、自动化工作流 |

## 部署方式

### 方式一：Docker 部署（推荐）
```bash
# 拉取镜像
docker pull openclaw/openclaw:latest

# 启动
docker run -d --name openclaw \
  -p 3000:3000 \
  -v ~/openclaw-data:/data \
  openclaw/openclaw:latest
```

### 方式二：Node.js 直接部署
```bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw
npm install
npm run build
npm start
```

## 典型使用场景

1. **个人 AI 助理团队**：一个 Agent 管理日程、一个做研究、一个写代码
2. **微信/飞书机器人**：接入聊天软件，随时@机器人完成任务
3. **自动化信息采集**：定时搜索+整理+推送 AI 资讯
4. **多模型协作流水线**：GPT 做规划 Agent + Claude Code 做编码 Agent + 验收 Agent
5. **学习监督助手**：定时提醒复习、检查作业、生成学习报告

## 学习路径
1. 先熟练掌握 Cherry Studio 单 Agent（阶段一~五）
2. 当单 Agent 不够用时，引入 OpenClaw 编排多 Agent
3. 先 Docker 本地部署体验，再考虑接入消息平台
4. 从 2 个 Agent 的简单协作开始，逐步扩展

## 参考视频
- BV1kH6nBFEPq（技术爬爬虾）：OpenClaw 海量全玩法攻略，国内网络使用，本地部署
- BV1ZiNwzPEhP（技术爬爬虾）：精通 OpenClaw 变高手，中级到高级完整教程
