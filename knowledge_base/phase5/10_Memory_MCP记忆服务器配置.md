# Memory MCP Server — 持久性记忆图配置

## 是什么
`@modelcontextprotocol/server-memory` 是 Anthropic 官方维护的 MCP 记忆服务器，基于**本地知识图谱**实现跨对话持久记忆。模型可以记住你的偏好、项目背景、个人信息，并在后续对话中自动回忆。

## 工作原理
```
对话中你说 "我叫彭晨晟，喜欢用 DeepSeek"
    ↓
Memory MCP Server 存储为知识图谱：
  实体: 彭晨晟 → [关系: prefers_model] → DeepSeek
    ↓
下次对话时，模型调用 recall_memory → 自动想起
```

## Cherry Studio 中配置

### 步骤1：打开 MCP 服务器配置
Cherry Studio → 左下角 ⚙️ **设置** → 左侧菜单 **MCP 服务器** → 点击 **添加服务器**

### 步骤2：填入以下配置

| 配置项 | 内容 |
|--------|------|
| **服务器名称** | `Memory` |
| **传输类型** | `stdio` |
| **命令** | `npx` |
| **参数** | `-y @modelcontextprotocol/server-memory` |
| **环境变量** | `MEMORY_FILE_PATH=D:\AI引路人项目\memory.json` |

### 步骤3：保存并启用
- 点击 **保存**
- 确保开关为 **开启** 状态
- 重启 Cherry Studio 生效

### 步骤4：在 Agent 中启用
编辑 Agent → **MCP 工具** 区域 → 勾选 `memory` 相关工具项：
- `create_entities` — 创建记忆实体
- `create_relations` — 创建实体间关系
- `read_graph` — 读取记忆图谱
- `search_nodes` — 搜索记忆节点
- `open_nodes` — 打开节点查看详情
- `add_observations` — 为实体添加观察记录
- `delete_entities` — 删除实体
- `delete_observations` — 删除观察记录
- `delete_relations` — 删除关系

---

## Claude Code 中配置

### 步骤1：找到配置文件
Claude Code 的全局配置文件位于：

| 系统 | 路径 |
|------|------|
| Windows (PowerShell) | `C:\Users\<用户名>\.claude\settings.json` |
| Windows (Git Bash/WSL) | `~/.claude/settings.json` 或 `/c/Users/<用户名>/.claude/settings.json` |
| macOS / Linux | `~/.claude/settings.json` |

如果文件不存在，新建即可。

### 步骤2：编辑 settings.json

在文件中添加 `mcpServers` 配置（如果已有其他配置，合并进去，不要覆盖已有内容）：

```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"],
      "env": {
        "MEMORY_FILE_PATH": "D:\\AI引路人项目\\memory.json"
      }
    }
  }
}
```

**Windows 用户特别注意**：`MEMORY_FILE_PATH` 中的路径必须使用**双反斜杠** `\\`，因为 JSON 中 `\` 是转义字符。不能写成 `D:\AI引路人项目\` 否则 JSON 解析失败。

### 步骤3：验证配置

```bash
# 启动 Claude Code
claude

# 在 Claude Code 中输入
/mcp
```

如果看到 `memory` 服务器状态为绿色（connected），说明配置成功。

也可以在对话中测试：
> "请调用 read_graph 工具查看当前记忆图谱"

### 步骤4：配置 Claude Code 环境变量（可选，更安全）

如果你不想把路径硬编码在配置文件中，也可以用环境变量：

**Windows (PowerShell)**：
```powershell
[Environment]::SetEnvironmentVariable('MEMORY_FILE_PATH', 'D:\AI引路人项目\memory.json', 'User')
```

**Windows (Git Bash / WSL)**：
```bash
echo 'export MEMORY_FILE_PATH="/d/AI引路人项目/memory.json"' >> ~/.bashrc
source ~/.bashrc
```

此时 settings.json 中可省略 `env` 部分：
```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  }
}
```

---

## Cherry Studio + Claude Code 共享记忆

如果 Cherry Studio 和 Claude Code 的 `MEMORY_FILE_PATH` 指向**同一个文件**，两个平台就能共享同一份记忆。

```
Cherry Studio                  Claude Code
     │                              │
     └──────────┬───────────────────┘
                │
                ▼
     D:\AI引路人项目\memory.json
       (同一份知识图谱文件)
```

**效果**：
- 在 Cherry Studio 中记住的信息 → Claude Code 中自动可用
- 在 Claude Code 中添加的记忆 → Cherry Studio 中自动可用
- 两个平台共享一个"大脑"

**配置要点**：
1. 两个平台的环境变量/配置指向完全相同的文件路径
2. Windows 上注意路径格式差异：
   - Cherry Studio 环境变量：`D:\AI引路人项目\memory.json`（单反斜杠）
   - Claude Code settings.json：`D:\\AI引路人项目\\memory.json`（双反斜杠）
3. 不要同时在两个平台读写 `memory.json`——交替使用没有问题

---

## 常见问题

### Q: `npx` 命令找不到
**原因**：Node.js 未安装或 PATH 未配置

**解决**：
```bash
# 检查 Node.js
node --version
npm --version

# 如果未安装，先去 https://nodejs.org/ 下载安装
```

### Q: MCP Server 启动后立即断开
**原因**：`@modelcontextprotocol/server-memory` 包下载失败或 `MEMORY_FILE_PATH` 路径无效

**解决**：
1. 检查网络，确保能访问 npm registry
2. 手动测试：`npx -y @modelcontextprotocol/server-memory --help`
3. 检查路径是否存在父目录：`D:\AI引路人项目\` 必须存在
4. 如果路径中有中文，尝试用不含中文的路径测试是否是编码问题

### Q: 怎么清空记忆重新开始？
删除 `memory.json` 文件，下次启动 MCP Server 会自动创建空文件。

---

## 使用示例

### 让模型记住信息
> "我叫彭晨晟，学号25521045，就读于电子信息专业，请把这条信息存入记忆。"

### 让模型回忆信息
> "你还记得我之前告诉过你关于我的什么信息吗？"

### 存储项目背景
> "我正在学习 AI 工具链，目前已完成了第一阶段（AI基础）和第二阶段（Claude Code），把这个进度记录下来。"

---

## 知识图谱结构示例

```json
{
  "entities": [
    {
      "name": "彭晨晟",
      "entityType": "用户",
      "observations": [
        "学号25521045",
        "电子信息专业大二学生",
        "偏好使用DeepSeek作为主力模型"
      ]
    },
    {
      "name": "AI引路人项目",
      "entityType": "项目",
      "observations": [
        "六个阶段AI学习体系",
        "Cherry Studio Agent提示词包",
        "46个知识库文件"
      ]
    }
  ],
  "relations": [
    {
      "from": "彭晨晟",
      "to": "AI引路人项目",
      "relationType": "创建"
    }
  ]
}
```

---

## 注意事项

- `memory.json` 文件会自动创建在指定路径，无需手动新建
- 文件可随时用文本编辑器打开查看和编辑
- 如果文件损毁，删除后重启会自动重建（但会丢失已有记忆）
- 建议将 `memory.json` 加入 `.gitignore`（如果项目目录使用 Git）
- 不同项目可以使用不同的 `MEMORY_FILE_PATH` 实现记忆隔离
