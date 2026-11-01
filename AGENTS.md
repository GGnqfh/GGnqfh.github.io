# AGENTS.md — M24!98K! 博客（GGnqfh.github.io）

给 AI 编码助手（Antigravity、Claude Code、Codex 等）的项目说明。动手前先读这份文件。

## 这是什么项目

基于 **Hexo 7** 的中文静态博客，主题是 npm 依赖 `hexo-theme-fluid`，站点名叫 **M24!98K!**。
定位是恶搞／娱乐性质的个人博客，内容围绕四款经典枪械（M24、Kar98K、PP-19 野牛、内格夫）的介绍与图集。

- 线上地址：https://ggnqfh.github.io
- 发布方式：推送到 `main` → GitHub Actions 自动构建并发布 GitHub Pages
- 语言／时区：`zh-CN` / `Asia/Shanghai`，正文一律用中文

## 改哪里（目录结构）

| 路径 | 说明 |
|---|---|
| `source/_posts/*.md` | 文章正文，新文章写这里（博文列表位于 `/posts/`） |
| `source/index.md` | 首页（武器图集展示，标题 `M24! 98K!`） |
| `source/weapons/` | 武器图集兼容页 |
| `source/about/` | 关于页（联系方式） |
| `source/archives/`、`source/categories/`、`source/tags/` | Hexo 生成的归档/分类/标签页 |
| `source/images/` | 配图资源 |
| `_config.yml` | 站点配置（标题、url、permalink、deploy、feed、sitemap） |
| `_config.fluid.yml` | Fluid 主题配置（菜单、样式开关等） |
| `scaffolds/` | `hexo new` 使用的文章/页面模板 |
| `README.md` | 面向人的项目说明，保持与实际一致 |
| `public/`、`db.json`、`.deploy_git/`、`node_modules/` | **生成物或依赖，绝不提交** |
| `themes/` | 空目录；主题来自 npm 包，别往里面放东西 |

## 常用命令

```bash
npm install                    # 安装依赖
npm run server                 # 本地预览：http://localhost:4000
npm run new -- "文章标题"       # 新建文章（新建页面用 npm run new:page）
npm run generate               # 生成静态文件到 public/
npm run clean                  # 清理缓存和生成物
```

Hexo 7.3.0；CI 使用 Node 22。

## 硬性规则

1. **只动内容和配置**：`source/**`、`_config.yml`、`_config.fluid.yml`、`scaffolds/**`、`README.md`。
2. **不要修改 `node_modules/` 里的主题源码**。要调样式请改 `_config.fluid.yml`（或按 Fluid 文档在 `source/` 下新增自定义资源），否则下次 `npm install` 就丢了。
3. **不要提交生成物**：`public/`、`db.json`、`.deploy_git/`、`node_modules/`、`.DS_Store`；也不要手动把构建结果拷进仓库。
4. 新文章沿用现有 front matter 形状：

   ```yaml
   ---
   title: 欢迎来到 M24!98K! 博客
   date: 2026-01-01 00:00:00
   categories: [公告]
   tags: [欢迎, 博客]
   ---
   ```

5. 提交前跑一次 `npm run generate`，确认没有报错（改了模板或配置尤其要跑）。
6. **武器名称和图片不要擅自改写**：以现有页面为准（武器页目前展示 `M24!`、`98K!`、`PP-野牛!`、`内格夫!`，图片沿用现有 URL 与 `/images/*.jpg`）。历史上改名、换图、改标题都被回退过（见 commit `5a417b7`、`28c69f9`、`ca8f315`）。
7. 不要重新引入 Gitalk 之类的评论系统——历史上因避免泄露密钥已移除（commit `bad091e`）；任何密钥、令牌都不要进仓库。
8. 保持恶搞、娱乐的调性，内容与站点主题一致；不确定要不要加的内容，先问用户。

## 已知坑

- Fluid 主题「关于」页社交图标的键名是 `icons`（旧版写法 `social_icons` 已失效，写错图标不显示；见 commit `b7e1e2f`）。
- `source/about/index.md` 目前故意不放「关于作者」栏目；武器页/关于页删副标题、去掉豆瓣/微信图标等都是有意为之，不要加回去。

## 发布流程

- 推送 `main` → `.github/workflows/deploy.yml`：`npm install` → `npx hexo generate` → 用 GitHub Pages 发布 `public/`。
- **不要手动执行 `hexo deploy`**：`_config.yml` 里还留着指向本仓库 `main` 的 git deployer，手动部署会把生成物推进仓库、与 Actions 的发布互相干扰。要发布就 push。

## 验收标准

- `npm run generate` 成功，本地 `npm run server` 浏览正常；
- `git status` 干净，没有生成物或依赖混入提交；
- push 后 Actions 的 Deploy 运行成功，线上页面正常更新。

## 维护

改了流程或规则后，顺手更新这份文件（以及 `README.md`），让它始终和实际一致。
