# Skills 概念与机制

## 什么是 Skill
Skill = 可复用的 Agent 能力扩展包。类比：手机装 App → Agent 装 Skill。

## Skill 结构
```
skill-name/
└── SKILL.md          ← 核心文件：包含提示词和触发条件
    └── (可选) scripts/  ← 辅助脚本
```

**SKILL.md 包含：**
- Frontmatter（YAML）：name、description、trigger_keywords
- Body（Markdown）：Agent 执行该 Skill 时遵循的指令

## Skill 三种激活方式
1. **自动触发**：对话内容命中 trigger_keywords → Agent 自动加载
2. **手动调用**：输入 `/skill-name` 显式调用
3. **工具管理**：通过 `mcp__skills__skills` 管理工具操作

## Skills 来源
- **官方**：https://github.com/anthropics/skills（Anthropic 维护）
- **社区**：GitHub 上搜索 `claude-code-skills` 相关仓库
- **热门参考**：
  - harness (revfactory)：元技能——用 AI 设计 AI 团队
  - compound-engineering-plugin (EveryInc)：工程化插件
  - ECC (affaan-m)：Agent 性能优化系统

## 与 Agent 系统提示词的区别
- **Agent 系统提示词**：定义 Agent 的"人设"和基础行为
- **Skill**：定义特定任务的具体执行流程（更聚焦、可插拔）
