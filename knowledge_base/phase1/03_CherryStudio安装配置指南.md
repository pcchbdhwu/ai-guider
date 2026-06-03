# Cherry Studio 安装配置指南

## 什么是 Cherry Studio
Cherry Studio 是一款开源免费的 AI 客户端，可以一站式接入 60+ 个 AI 服务商（Claude/GPT/DeepSeek/文心/豆包/通义千问等），功能包括：
- 多模型对话（同时配置多个 Provider，一键切换）
- Agent 智能体（自定义系统提示词 + 知识库 + MCP 工具）
- 本地知识库（RAG，上传文档后 AI 基于文档回答）
- MCP 服务器管理（接入外部工具）
- 全局记忆（跨对话记住你的偏好）

## 下载安装
1. 访问官网：https://cherry-ai.com/
2. 选择对应系统版本（Windows/Mac/Linux）
3. Windows 用户：下载 .exe 安装包，双击安装
4. Mac 用户：下载 .dmg 文件，拖入 Applications
5. 首次启动后的界面导览：
   - 左侧：对话列表 / Agent 列表 / 知识库 / 设置
   - 中间：对话区域
   - 右侧：当前对话的模型选择、参数调整

## 添加第一个模型 Provider（以 DeepSeek 为例）
1. 打开 Cherry Studio → 左下角「设置」齿轮图标
2. 左侧菜单选择「模型服务」
3. 找到「DeepSeek」→ 点击「添加」
4. 填入 API Key（从 platform.deepseek.com 获取）
5. 点击「测试连接」确认连通
6. 保存后，在对话界面右上角即可选择 DeepSeek 模型

## 获取 DeepSeek API Key
1. 访问 https://platform.deepseek.com/
2. 注册/登录账号
3. 进入「API Keys」页面
4. 点击「创建 API Key」→ 复制保存
5. 新用户一般有 ¥10 免费额度，够用很久

## 界面核心功能速览
| 区域 | 功能 | 说明 |
|------|------|------|
| 对话区 | 多轮对话 | 支持 Markdown 渲染、代码高亮 |
| 模型选择 | 切换 Provider/模型 | 右上角下拉菜单 |
| Agent 管理 | 创建智能体 | 左侧 Agent 标签 → 新建 Agent |
| 知识库 | 本地文档 RAG | 上传 .md/.pdf/.txt 等文件 |
| MCP 管理 | 外部工具连接 | 设置 → MCP 服务器 |
| 全局记忆 | 跨对话记忆 | 设置 → 全局记忆 |

## 参考视频
B站教程：Cherry Studio 新版本更新教程 Agent+MCP+全局记忆 BV1UWzpBkERN（_Smzh_）
