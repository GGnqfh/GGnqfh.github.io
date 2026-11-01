# M24!98K! - 狙击步枪俱乐部博客 🎯

一个恶搞性质的 Hexo 博客项目，纯粹为了好玩而制作！

⚠️ **请注意：这是一个恶搞网页，仅用于娱乐目的！**

- 线上地址：https://ggnqfh.github.io
- 部署状态：推送 `main` 分支由 GitHub Actions 自动构建部署

## 项目介绍

本项目是一个基于 Hexo 框架与 Fluid 主题的个人恶搞博客，主要展示四款经典武器：
- **M24 狙击步枪** - 美国雷明顿公司生产的高精度狙击武器
- **Kar98K 毛瑟步枪** - 二战时期德国军队的标志性步枪
- **PP-19 野牛** - 俄罗斯生产的冲锋枪，以其独特的螺旋弹筒供弹闻名
- **内格夫轻机枪** - 以色列国防军制式轻机枪

## 功能特性

- 🎯 武器展示首页（直达 `M24! 98K!` 图集画廊）
- 📝 支持 Markdown 格式文章与代码高亮（博文流位于 `/posts/`）
- 📂 分类与标签检索系统
- 🔍 本地文章全局搜索功能（Local Search）
- 📱 响应式设计与深浅色模式切换
- 🔍 SEO 优化（Sitemap、Open Graph、Meta 标签）
- 📡 RSS / Atom 订阅支持（`atom.xml`）

## 技术栈

- **框架**: Hexo 7.3.0
- **主题**: [hexo-theme-fluid](https://hexo.fluid-dev.com/) (npm 依赖)
- **运行环境**: Node.js >= 18（CI 使用 Node 22）
- **CI / CD**: GitHub Actions 自动发布至 GitHub Pages

## 项目结构

```
GGnqfh.github.io/
├── _config.yml          # Hexo 站点全局配置（标题、URL、SEO、Feed等）
├── _config.fluid.yml    # Fluid 主题配置文件（导航栏、Logo、个人简介等）
├── package.json         # 项目依赖与运行脚本
├── scaffolds/           # 新建文章与页面的 Markdown 模板
│   ├── post.md
│   └── page.md
├── source/              # 博客源文件
│   ├── _posts/          # 文章目录（Markdown 文件）
│   ├── index.md         # 首页（武器图集页面）
│   ├── about/           # 关于页面
│   ├── weapons/         # 武器图集页面
│   └── images/          # 本地武器配图资源
├── themes/              # 空目录（主题作为 npm 依赖管理，请勿在此修改）
├── .github/workflows/
│   └── deploy.yml       # GitHub Actions 自动化构建部署脚本
├── AGENTS.md            # AI 助手规范与项目指引
├── .gitignore
└── README.md
```

## 本地开发与预览

### 1. 环境准备

- Node.js >= 18.0
- npm >= 8.0
- Git

### 2. 安装依赖

```bash
git clone https://github.com/GGnqfh/GGnqfh.github.io.git
cd GGnqfh.github.io
npm install
```

### 3. 本地启动预览

```bash
npm run server
```

浏览器访问 `http://localhost:4000` 即可实时预览。

### 常用命令

| 命令 | 说明 |
|---|---|
| `npm run server` | 启动本地预览服务器（默认端口 4000） |
| `npm run generate` | 编译生成静态站点文件至 `public/` |
| `npm run clean` | 清除 Hexo 缓存与 `public/` 产物 |
| `npm run new -- "文章标题"` | 使用模板创建新文章 |
| `npm run new:page -- "页面标题"` | 创建新独立页面 |

## 部署流程

本项目通过 **GitHub Actions** 自动化完成编译与发布，**请不要手动执行 `hexo deploy`**。

1. 本地完成内容或配置修改后，先运行一次本地编译验证：
   ```bash
   npm run generate
   ```
2. 确认无报错且 `git status` 干净后，提交并推送到 `main` 分支：
   ```bash
   git add .
   git commit -m "更新说明"
   git push origin main
   ```
3. GitHub Actions（`.github/workflows/deploy.yml`）将自动安装依赖、编译站点并部署到 GitHub Pages。

## 内容与配置管理

### 创建新文章

```bash
npm run new -- "文章标题"
```

文件将生成在 `source/_posts/文章标题.md`，建议沿用规范的 Front Matter：

```yaml
---
title: 文章标题
date: 2026-01-01 00:00:00
categories: [武器介绍]
tags: [标签1, 标签2]
---
```

### 修改主题设置

Fluid 主题通过根目录下的 `_config.fluid.yml` 统一进行配置管理：
- **导航菜单**：在 `navbar.menu` 中增减链接；
- **标语与背景图**：在 `index.slogan` 与 `index.banner_img` 中修改；
- **关于页信息**：在 `about` 字段中配置头像、介绍以及联系方式。

> ⚠️ 注意：不要修改 `node_modules/` 内的文件，否则下次重新安装依赖时改动会丢失。

## 许可证

MIT License
