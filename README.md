# M24!98K! - 狙击步枪俱乐部博客 🎯

一个恶搞性质的 Hexo 博客项目，纯粹为了好玩而制作！

⚠️ **请注意：这是一个恶搞网页，仅用于娱乐目的！**

## 项目介绍

本项目是一个基于 Hexo 框架的个人博客系统，展示了四款经典武器：
- **M24 狙击步枪** - 美国雷明顿公司生产的高精度狙击武器
- **Kar98K 毛瑟步枪** - 二战时期德国军队的标志性步枪
- **PP-19 野牛** - 俄罗斯生产的冲锋枪，以其独特的螺旋弹匣设计闻名
- **内格夫轻机枪** - 以色列国防军制式轻机枪

## 功能特性

- 🎯 武器展示画廊
- 📝 支持 Markdown 格式文章
- 📂 分类与标签系统
- 🔍 文章搜索功能
- 💬 Gitalk 评论系统
- 📱 响应式设计
- 🔍 SEO 优化（sitemap、Open Graph、Twitter Card）
- 📡 RSS 订阅支持

## 技术栈

- **框架**: Hexo 7.0
- **主题**: 自定义 M24!98K! 主题
- **渲染**: EJS + Stylus + Markdown
- **部署**: GitHub Pages

## 项目结构

```
GGnqfh.github.io/
├── _config.yml          # 站点配置文件
├── package.json         # 依赖配置
├── scaffolds/           # 文章模板
│   ├── post.md
│   └── page.md
├── source/              # 资源文件
│   ├── _posts/          # 文章目录
│   │   ├── welcome.md
│   │   ├── m24-introduction.md
│   │   ├── kar98k-history.md
│   │   ├── pp19-bizon.md
│   │   └── negev-introduction.md
│   ├── about/           # 关于页面
│   ├── categories/      # 分类页面
│   ├── tags/            # 标签页面
│   └── archives/        # 归档页面
├── themes/              # 主题目录
│   └── m24-98k/
│       ├── _config.yml  # 主题配置
│       ├── layout/      # 模板文件
│       │   ├── layout.ejs
│       │   ├── index.ejs
│       │   ├── post.ejs
│       │   ├── page.ejs
│       │   ├── archive.ejs
│       │   ├── category.ejs
│       │   ├── tag.ejs
│       │   └── _partial/
│       │       ├── header.ejs
│       │       ├── footer.ejs
│       │       └── pagination.ejs
│       └── source/      # 主题资源
│           ├── css/
│           │   └ style.styl
│           ├── js/
│           │   └ main.js
│           └── images/    # 武器图片
│               ├── pp19-bizon.jpg
│               └── negev.jpg
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions 自动部署
├── .gitignore
└── README.md
```

## 安装与部署

### 环境要求

- Node.js >= 16.0
- npm >= 8.0
- Git

### 本地安装

1. **克隆仓库**
```bash
git clone https://github.com/GGnqfh/GGnqfh.github.io.git
cd GGnqfh.github.io
```

2. **安装依赖**
```bash
npm install
```

3. **本地预览**
```bash
npm run start
# 或
hexo server
```

访问 `http://localhost:4000` 查看博客。

### 常用命令

| 命令 | 说明 |
|------|------|
| `npm run start` | 启动本地服务器 |
| `npm run generate` | 生成静态文件 |
| `npm run deploy` | 部署到 GitHub |
| `npm run clean` | 清理缓存和生成文件 |
| `npm run new` | 创建新文章 |
| `npm run new:page` | 创建新页面 |

### 部署到 GitHub Pages

本项目使用 **GitHub Actions** 自动构建和部署。推送到 `main` 分支后会自动触发构建流程。

**自动部署流程：**
1. 推送代码到 `main` 分支
2. GitHub Actions 自动安装依赖并运行 `hexo generate`
3. 构建产物自动部署到 GitHub Pages

**手动部署：**
```bash
npm run generate
npm run deploy
```

### 配置 Gitalk 评论系统

1. 在 [GitHub Developer Settings](https://github.com/settings/developers) 创建 OAuth App
2. 回调 URL 设置为 `https://ggnqfh.github.io/`
3. 在 `themes/m24-98k/_config.yml` 中配置：
```yaml
gitalk:
  enable: true
  clientID: 你的Client ID
  clientSecret: 你的Client Secret
  repo: GGnqfh.github.io
  owner: GGnqfh
  admin: GGnqfh
```

## 文章管理

### 创建新文章

```bash
hexo new post "文章标题"
```

文章将创建在 `source/_posts/文章标题.md`。

### 文章格式

```markdown
---
title: 文章标题
date: 2024-01-01 00:00:00
categories: [分类名]
tags: [标签1, 标签2]
---

文章内容...
```

### 创建新页面

```bash
hexo new page "页面名称"
```

页面将创建在 `source/页面名称/index.md`。

## 主题配置

### 修改主题配置

编辑 `themes/m24-98k/_config.yml`：

```yaml
# 导航菜单
menu:
  首页: /
  归档: /archives
  分类: /categories
  标签: /tags
  关于: /about

# 武器展示
weapons:
  enable: true
  items:
    - name: M24
      image: 图片URL
      link: 链接URL
```

### 自定义样式

编辑 `themes/m24-98k/source/css/style.styl` 修改样式。

CSS 变量：
```css
:root {
  --primary-color: #c00;     /* 主色调 */
  --secondary-color: #333;   /* 次色调 */
  --background-color: #f5f5f5; /* 背景色 */
  --text-color: #222;        /* 文字色 */
}
```

## SEO 优化

- 自动生成 sitemap.xml
- Open Graph 元标签
- Twitter Card 支持
- 规范化 URL
- RSS 订阅支持

## 特别感谢

Thanks to HJY

## 许可证

MIT License