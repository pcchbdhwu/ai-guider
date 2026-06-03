# Skills 安装与使用实操

## 方式1：自然触发
直接在对话中说任务内容，如果命中已安装 Skill 的关键词，Agent 自动调用。

例如：
- "帮我审查一下这段代码的安全性" → 自动触发 security-review
- "帮我安装一个翻译 Skill" → 自动触发 find-skills

## 方式2：显式调用（/命令）
输入 `/skill-name` 强制调用特定 Skill：
- `/security-review` — 安全审查
- `/review` — PR 审查
- `/simplify` — 代码优化

## 方式3：工具管理
在 Claude Code 中使用 `mcp__skills__skills` 工具：
- `action="search" query="翻译"` — 搜索翻译相关 Skills
- `action="install" identifier="owner/repo/skill-name"` — 安装
- `action="list"` — 查看已安装的 Skills
- `action="remove" name="skill-name"` — 卸载

## 实操练习
1. 搜索一个翻译相关的 Skill
2. 安装它
3. 用 `/skill-name` 测试调用
4. 查看效果后卸载
