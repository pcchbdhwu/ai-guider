# DeepSeek API 五场景实战

## 场景1：AI 对话
最佳实践：系统提示词设定角色 → 多轮对话中逐步细化需求
适用模型：DeepSeek-V3（日常）/ DeepSeek-R1（复杂推理）

## 场景2：AI 知识库（RAG）
流程：上传本地文档（.md/.pdf/.txt）→ Cherry Studio 向量化 → 提问时检索相关片段 → 注入 Prompt 回答
适用场景：课程资料问答、个人笔记检索、项目文档查阅

## 场景3：AI 翻译
Prompt模板："将以下[中文/英文]翻译成[英文/中文]，保持学术风格，特别关注[专业术语]的准确翻译"
注意：DeepSeek 中文翻译质量优于大多数模型

## 场景4：AI 编程
适用模型：DeepSeek-V3（代码生成）/ DeepSeek-R1（复杂算法推理）
最佳实践：明确编程语言+输入输出+边界条件+代码风格要求

## 场景5：Python 调用 API
```python
from openai import OpenAI

client = OpenAI(
    api_key="sk-你的Key",
    base_url="https://api.deepseek.com/v1"
)

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "system", "content": "你是Python编程助手"},
        {"role": "user", "content": "写一个快速排序函数"}
    ]
)
print(response.choices[0].message.content)
```

## 参考视频
B站 BV1aWFWeyE6D（技术爬爬虾）：DeepSeek API 五大场景实战
