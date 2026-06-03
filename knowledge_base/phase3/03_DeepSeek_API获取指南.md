# DeepSeek API 获取指南

## 官方渠道
1. 访问 https://platform.deepseek.com/
2. 注册账号 → 进入「API Keys」→ 创建 Key
3. 新用户赠送 ¥10 体验额度

## 多渠道接入（官方繁忙时的替代）
| 渠道 | 地址 | 特点 |
|------|------|------|
| DeepSeek 官方 | platform.deepseek.com | 可能限流，价格最低 |
| Azure AI | ai.azure.com | 微软托管，有免费额度，推理内容不计输出长度 |
| 火山引擎 | volcengine.com | 字节托管，速度快稳定 |
| 硅基流动 | siliconflow.com | 国内中转，适合网络受限 |

## API 价格（2026年参考）
- DeepSeek-V3：输入 ¥1/M tokens，输出 ¥4/M tokens
- DeepSeek-R1：输入 ¥4/M tokens，输出 ¥16/M tokens
- 对比：Claude Sonnet 约 $15/百万输出 tokens（≈¥105），DeepSeek 便宜 25-100 倍

## 安全提醒
- Key 以 `sk-` 开头，务必保密
- 设置消费上限防超支
- 不分享 Key、不提交到 GitHub
