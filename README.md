# MCL Web

MCL（mclauncher）的官方网站：静态站点，下载按钮直接指向 GitHub Release，
可托管在 **Cloudflare Pages** 或 **Cloudflare Workers（静态资源）**。

- 默认简体中文，右上角可切 English
- 深色 / 浅色主题
- 自动读取 GitHub 最新 Release，填版本号、发布日期、各平台产物直链和大小
- API 失败时自动退回 GitHub Releases 页面，不会出现死按钮
- 无构建步骤、无框架、无后端

## 本地预览

```bash
# 最简单
python3 -m http.server 8099 -d public
# 打开 http://localhost:8099

# 或者用 wrangler（需要 Node）
npm install --include=dev
npm run dev
```

预览时可以强制语言/主题：

```
http://localhost:8099/?lang=zh&theme=dark
http://localhost:8099/?lang=en&theme=light
```

## 部署到 Cloudflare Pages

### 方式 A：连 Git 仓库（推荐）

1. 把本目录推到 GitHub/GitLab
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git
3. 构建设置：
   - Framework preset：None
   - Build command：留空
   - Build output directory：`public`
4. Save and Deploy

之后每次 push 自动部署，PR 会有预览地址。

### 方式 B：命令行直接上传

```bash
npm install --include=dev
npx wrangler login
npx wrangler pages deploy public --project-name mcl-web
```

## 部署到 Cloudflare Workers（静态资源）

仓库已带 `wrangler.jsonc`：

```bash
npm install --include=dev
npx wrangler login
npm run deploy
```

首次部署后可在 Dashboard 绑定自定义域名。

## 目录

```
MCL-web/
├── public/
│   ├── index.html          页面结构
│   ├── styles.css          主题与响应式
│   ├── app.js              i18n、下载按钮、截图切换
│   ├── assets/             logo、截图、图标
│   ├── _headers            Cloudflare 响应头
│   ├── _redirects          /download、/github 跳转
│   ├── robots.txt
│   └── site.webmanifest
├── wrangler.jsonc          Workers 静态资源配置
├── package.json
└── README.md
```

## 下载按钮怎么工作

`app.js` 请求：

```
https://api.github.com/repos/EzraX21/mclauncher/releases/latest
```

按文件名后缀匹配当前产物命名（`mcl-<版本>-<平台>-<架构>-...`）：
`-windows-x64-setup.exe`、`-windows-x64-portable.zip`、`.deb`、`.rpm`、
`.pkg.tar.zst`、`-linux-x64-portable.tar.gz`、`SHA256SUMS.txt`。

GitHub 匿名 API 有速率限制；超限时所有按钮退回 `releases/latest`，页面照常可用。

## 改内容

- 文案：`public/app.js` 里的 `I18N.zh` / `I18N.en`
- 截图：替换 `public/assets/screens/*.png`，配图说明在 `I18N` 的 `screens.caption.*`
- 颜色：`public/styles.css` 顶部 CSS 变量
- 版本/产物：不用改页面，发新 Release 自动更新

## 许可

GPL-3.0-or-later，见 [LICENSE](LICENSE)。MCL 与 Mojang / Microsoft 无关联。
