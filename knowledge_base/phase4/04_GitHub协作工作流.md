# GitHub 协作工作流

## 个人项目流
```bash
git clone <你的仓库URL>     # 克隆到本地
# ... 修改代码 ...
git add . && git commit -m "描述改动"
git push                    # 推送到 GitHub
```

## 开源贡献流（Fork → PR）
```
1. Fork：在别人仓库页面点"Fork"按钮 → 复制到你自己名下
2. Clone：git clone <你Fork后的仓库URL>
3. Branch：git checkout -b feature/my-contribution
4. Code：修改代码
5. Commit：git add . && git commit -m "feat: 添加了XXX功能"
6. Push：git push -u origin feature/my-contribution
7. PR：到原仓库点"Pull Request" → 填写描述 → 提交
8. Review：等维护者审查，可能需要修改
9. Merge：通过后你的代码就合并进原项目了！
```

## 关键页面导航
| 页面 | 用途 |
|------|------|
| 仓库主页 | 查看代码/README/文件结构 |
| Issues | Bug报告/功能请求 |
| Pull Requests | 查看和提交代码合并请求 |
| Actions | CI/CD 自动化 |
| Settings | 仓库设置/协作者管理 |
| Wiki | 项目文档 |

## 第一个 PR 推荐练习
访问 https://github.com/firstcontributions/first-contributions
按照 README 指引完成你的第一个开源 PR。
