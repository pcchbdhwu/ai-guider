# 创建自定义 Skill

## 最小化 Skill 结构
```
my-skill/
└── SKILL.md
```

## SKILL.md 模板
```markdown
---
name: my-first-skill
description: 我的第一个自定义Skill——每日学习总结助手
trigger_keywords:
  - 学习总结
  - 每日复盘
  - 今天学了什么
---

## 角色
你是学生的学习复盘助手。

## 任务
根据用户提供的今日学习内容，输出一份结构化的学习总结。

## 输出格式
1. **今日学习主题**（一句话概括）
2. **核心知识点**（3-5个要点，无序列表）
3. **已掌握内容**（标 ✅）
4. **待加强内容**（标 ⚠️）
5. **明日学习建议**（1-2句话）
```

## 创建流程
1. 创建目录 `my-skill/`
2. 编写 `SKILL.md`（包含 frontmatter + body）
3. 使用 `mcp__skills__skills` action="register" 注册
4. 测试：输入触发关键词验证是否自动加载

## Frontmatter 说明
| 字段 | 必填 | 说明 |
|------|------|------|
| name | ✅ | Skill 唯一名称 |
| description | ✅ | 简短描述（用于搜索结果展示） |
| trigger_keywords | 推荐 | 触发关键词列表 |
| model | 可选 | 指定使用的模型 |
