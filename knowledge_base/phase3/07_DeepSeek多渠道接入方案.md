# DeepSeek 多渠道接入方案

## 为什么需要多渠道
DeepSeek 官方 API 高峰期可能**限流/繁忙**，多渠道备选保证随时可用。

## 渠道1：Azure AI（推荐备选）
- 地址：https://ai.azure.com/
- 优势：微软托管、免费 API 额度、推理内容不计入输出 Token 长度
- 配置：在 Azure AI Studio 中部署 DeepSeek 模型 → 获取 Endpoint URL 和 Key → 填入 Cherry Studio

## 渠道2：火山引擎（字节跳动）
- 地址：https://www.volcengine.com（搜索"豆包大模型"）
- 优势：速度稳定、国内网络友好
- 配置：注册→开通模型服务→获取 Access Key 和 Endpoint

## 渠道3：硅基流动
- 地址：https://www.siliconflow.com/
- 优势：国内中转、集成多个开源模型、有免费额度
- 配置：注册→API Keys→选择 DeepSeek 模型→获取 Key

## 渠道4：蓝耘
- 地址：https://console.lanyun.net/
- 优势：邀请注册送 200 万 Token
- 邀请码：0179（来自 B站 _Smzh_ 教程）

## Cherry Studio 中添加多渠道
在「设置→模型服务」中分别添加多个 DeepSeek Provider：
- DeepSeek 官方（主力）
- DeepSeek-Azure（备选1）
- DeepSeek-火山引擎（备选2）

使用时按需切换，一个繁忙切另一个。

## 参考视频
B站 BV1NCNPeZENF（技术爬爬虾）：最快最稳的DeepSeek
