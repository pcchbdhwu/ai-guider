# DeepSeek-Reasonix：DeepSeek 原生编程终端（主力推荐）

> ✅ **已安装**（2026.6.3）：Reasonix v0.53.2，API Key 已配置，可用模型：deepseek-v4-pro、deepseek-v4-flash。
> Claude Code + DeepSeek 也已配置完成作为保留方案。

## 是什么
Reasonix 是专为 DeepSeek 打造的开源终端 AI 编程助手（MIT 协议，GitHub Stars 13000+）。与 Claude Code 同类定位，但以 DeepSeek 为原生后端，从缓存机制到工具调用都围绕 DeepSeek 优化。

## 安装

```bash
# 全局安装（推荐）
npm install -g reasonix

# 或单次运行
npx reasonix code my-project

# 短命令别名
npm install -g dsnix    # 安装后可用 dsnix 代替 reasonix
```

## 首次启动

```bash
# 进入你的项目目录
cd /d/AI引路人项目

# 启动 Reasonix
reasonix code

# 首次运行会提示输入 DeepSeek API Key
# 输入后自动保存，之后无需再次输入
```

## 与 Claude Code 对比（你已配置）

| 维度 | Claude Code + DeepSeek | Reasonix（推荐日常用） |
|------|----------------------|----------------------|
| 后端 | Anthropic + 第三方 DeepSeek | DeepSeek 原生 |
| 缓存优化 | 通用缓存，第三方模型命中率不可控 | 三段式缓存，99.82% 命中率 |
| 成本 | 取决于后端（DeepSeek 价格 + CC 开销） | 极低（纯 DeepSeek 定价 + 缓存折扣） |
| 桌面版 | 无 | Tauri 桌面客户端 |
| 实时花费显示 | /cost 命令 | 底部栏实时显示 Token 和金额 |
| 适用场景 | 关键任务、深度推理 | 日常编程、高频任务 |

## 日常分工建议

```
Reasonix（主力，DeepSeek）        Claude Code（王牌，Claude 原生）
  所有日常编码                        复杂 Bug 排查
  Python 脚本                         多文件重构
  文本批处理                          Code Review
  学习练习                            验收监督
```

## 关键命令

| 命令 | 作用 |
|------|------|
| `reasonix code [dir]` | 启动编程模式（默认） |
| `reasonix chat` | 纯对话模式（无文件系统工具） |
| `reasonix run "任务"` | 一次性执行，输出到 stdout |
| `reasonix doctor` | 环境诊断 |
| `reasonix update` | 升级 Reasonix |

## Skills 兼容

Reasonix 自动加载 Claude-format Skills：
- `~/.claude/skills/` → 你在 Claude Code 中创建的 Skill，Reasonix 直接用
- `~/.reasonix/skills/` → Reasonix 原生 Skills 路径

## 参考
- GitHub：https://github.com/esengine/DeepSeek-Reasonix
- B站全玩法：BV1kH6nBFEPq（技术爬爬虾）
- B站中高级：BV1ZiNwzPEhP（技术爬爬虾）
