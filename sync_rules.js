// 错误日志 → Agent 防御性规则 同步脚本
// 用法：每次在 错误日志.md 中添加新错误后，运行 node sync_rules.js
// 效果：自动提取所有错误生成防御性规则，注入到 6 个 Agent 配置中

const fs = require('fs');
const path = require('path');

const LOG_FILE = path.join(__dirname, '错误日志.md');
const AGENTS_DIR = path.join(__dirname, 'agents');
const PHASES = ['phase1', 'phase2', 'phase3', 'phase4', 'phase5', 'phase6'];

// ========== 步骤1：解析错误日志，提取所有错误 ==========
function parseErrorLog(content) {
  const errors = [];
  const lines = content.split('\n');

  // 找到 "## 错误记录" 之后的第二个表格（跳过记录模板中的示例表格）
  let sectionStart = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith('## 错误记录')) { sectionStart = i; break; }
  }
  if (sectionStart < 0) return errors;

  // "## 错误记录" 之后的第一个表格头就是真实数据（模板示例在此 section 之前）
  let headerCount = 0;
  let inData = false;
  for (let i = sectionStart; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t.startsWith('| 日期 ') || t.startsWith('|日期 ')) {
      headerCount++;
      inData = true; // 此 section 中的第一个表头就是真实数据
      continue;
    }
    if (!inData) continue;
    if (t.match(/^\|[-| ]+\|$/)) continue; // 分隔行
    if (t === '' || t.startsWith('#')) break;
    if (t.startsWith('|')) {
      const cols = t.split('|').map(c => c.trim()).filter(c => c !== '');
      if (cols.length >= 6 && cols[0].match(/^\d/)) { // 日期列以数字开头
        errors.push({ date: cols[0], tool: cols[1], symptom: cols[2], cause: cols[3], solution: cols[4], prevention: cols[5] });
      }
    }
  }
  return errors;
}

// ========== 步骤2：根据错误分类生成防御性规则 ==========
function generateRules(errors) {
  const rules = [];

  // 环境缺失类错误
  const envErrors = errors.filter(e =>
    e.cause.includes('未安装') || e.cause.includes('PATH') || e.cause.includes('存根')
  );
  if (envErrors.length > 0) {
    rules.push({
      id: '环境预检',
      rule: `**环境预检**：执行任何命令前，先用 \`which <命令>\` 或 \`<命令> --version\` 确认工具可用；安装后验证 PATH 是否生效，拦截 Windows Store 存根。`,
      refs: envErrors.map(e => e.date).join('/'),
      priority: 'CRITICAL'
    });
  }

  // 目录/路径类错误
  const pathErrors = errors.filter(e =>
    e.cause.includes('cwd') || e.cause.includes('目录')
  );
  if (pathErrors.length > 0) {
    rules.push({
      id: '工作目录确认',
      rule: `**工作目录确认**：npm/pip/git 等路径敏感操作前，先 \`pwd\` 确认当前目录；所有新建文件写入 D:\\AI引路人项目\\。`,
      refs: pathErrors.map(e => e.date).join('/'),
      priority: 'HIGH'
    });
  }

  // 特殊字符/编码类错误
  const charErrors = errors.filter(e =>
    e.cause.includes('引号') || e.cause.includes('编码') || e.cause.includes('UTF-8') || e.cause.includes('SyntaxError') || e.cause.includes('EOF')
  );
  if (charErrors.length > 0) {
    rules.push({
      id: '特殊字符处理',
      rule: `**特殊字符处理**：JS/JSON 中优先用模板字符串（反引号）包裹中文内容；复杂脚本（>5行）写入独立 .js 文件执行，不内联到 \`node -e\`；Windows 环境避免使用 sed 处理 UTF-8 文本。`,
      refs: charErrors.map(e => e.date).join('/'),
      priority: 'HIGH'
    });
  }

  // 上下文/状态管理类错误
  const ctxErrors = errors.filter(e =>
    e.cause.includes('阶段') || e.cause.includes('锚点') || e.cause.includes('上下文') || e.cause.includes('混淆')
  );
  if (ctxErrors.length > 0) {
    rules.push({
      id: '阶段上下文锚定',
      rule: `**阶段上下文锚定**（考核场景）：始终维护 current_phase 变量标记当前阶段；用户输入 ≤2 字（如"来""好""继续"）时先回溯最近 3 轮对话确认上下文再输出；知识库检索"第X题"时必须带阶段标签过滤，禁止跨阶段调取同名题号。`,
      refs: ctxErrors.map(e => e.date).join('/'),
      priority: 'CRITICAL'
    });
  }

  // 重试/方案选择类错误
  const retryErrors = errors.filter(e =>
    e.solution.includes('改用') || e.solution.includes('换')
  );
  if (retryErrors.length > 0) {
    rules.push({
      id: '方案选择防御',
      rule: `**方案选择防御**：同一方案连续失败 2 次，必须换技术路线（环境修复→工具替换→方法变更），不得重复尝试同一方法。`,
      refs: retryErrors.map(e => e.date).join('/'),
      priority: 'HIGH'
    });
  }

  // 安装后验证类错误
  const installErrors = errors.filter(e =>
    e.prevention.includes('安装') || e.prevention.includes('PATH')
  );
  if (installErrors.length > 0) {
    rules.push({
      id: '安装后验证',
      rule: `**安装后验证**：任何软件安装后，必须验证命令可用、路径正确、版本符合预期；PATH 未刷新则告知用户重启终端或写入 ~/.bashrc 持久化。`,
      refs: installErrors.map(e => e.date).join('/'),
      priority: 'HIGH'
    });
  }

  return rules;
}

// ========== 步骤3：生成规则块文本 ==========
function rulesToMarkdown(rules, errorCount) {
  const header = `## 防御性规则（从 ${errorCount} 条错误日志自动生成，最近更新：${new Date().toLocaleDateString('zh-CN')}）`;
  const body = rules.map((r, i) =>
    `${i + 1}. ${r.rule.slice(0, -1)}（参考：${r.refs} 错误记录）`
  ).join('\n');
  return `\n\n${header}\n${body}`;
}

// ========== 步骤4：注入到所有 Agent 配置 ==========
function syncToAgents(rulesBlock) {
  const files = fs.readdirSync(AGENTS_DIR)
    .filter(f => f.startsWith('agent_phase') && f.endsWith('.json'));

  files.forEach(f => {
    const filePath = path.join(AGENTS_DIR, f);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // 替换已有的防御性规则块，或新增
    const existingBlock = data.systemPrompt.match(/\n\n## 防御性规则[\s\S]*?\n\n## 阶段考核机制/);
    if (existingBlock) {
      data.systemPrompt = data.systemPrompt.replace(
        existingBlock[0],
        rulesBlock + '\n\n## 阶段考核机制'
      );
    } else {
      data.systemPrompt = data.systemPrompt.replace(
        '## 阶段考核机制',
        rulesBlock + '\n\n## 阶段考核机制'
      );
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  });

  return files;
}

// ========== 执行同步 ==========
console.log('🔍 读取错误日志...');
const logContent = fs.readFileSync(LOG_FILE, 'utf8');
const errors = parseErrorLog(logContent);

console.log(`📋 发现 ${errors.length} 条错误记录`);
const rules = generateRules(errors);
console.log(`🛡️  生成 ${rules.length} 条防御性规则：`);
rules.forEach(r => console.log(`   ${r.priority === 'CRITICAL' ? '🔴' : '🟡'} ${r.id}（参考 ${r.refs}）`));

const rulesBlock = rulesToMarkdown(rules, errors.length);
const updatedFiles = syncToAgents(rulesBlock);

console.log(`\n✅ 已同步到 ${updatedFiles.length} 个 Agent：`);
updatedFiles.forEach(f => console.log(`   → ${f}`));

// 同时更新知识库文件
const kbPath = path.join(__dirname, 'knowledge_base', 'phase5', '11_Agent防御性规则_从错误日志学习.md');
const kbContent = `# Agent 防御性规则：从错误日志学习

> 本文件由 \`sync_rules.js\` 自动生成，每次在错误日志中添加新错误后运行该脚本同步。
> 当前基于 **${errors.length} 条**错误记录生成，最近更新：${new Date().toLocaleDateString('zh-CN')}

## 已注入的防御性规则

${rules.map((r, i) => `${i + 1}. **${r.id}** [${r.priority}]：${r.rule}`).join('\n\n')}

## 使用方法

1. 在 \`D:\\AI引路人项目\\错误日志.md\` 中添加新错误记录
2. 在终端运行：
   \`\`\`bash
   cd /d/AI引路人项目
   node sync_rules.js
   \`\`\`
3. 所有 Agent 的防御性规则自动更新

## 规则来源映射

| 规则 | 关联错误数 | 最近错误日期 |
|------|----------|------------|
${rules.map(r => `| ${r.id} | ${r.refs.split('/').length} | ${r.refs.split('/').pop()} |`).join('\n')}

---

*每次添加新错误后运行一次 \`node sync_rules.js\`，所有 Agent 自动保持最新。*
`;
fs.writeFileSync(kbPath, kbContent);
console.log(`\n📚 知识库文件已更新`);

console.log('\n━━━ 同步完成 ━━━');
console.log('💡 提示：下次在错误日志中添加新错误后，运行 node sync_rules.js 即可一键同步所有 Agent');
