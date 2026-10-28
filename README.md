# MCL Web

MCL（mclauncher）的官方网站：**https://mcl.ezrax21.kdns.fr**

静态站点，下载按钮直接指向 GitHub Release，
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
npm run deploy:pages
```

### GitHub Actions 自动部署（已带）

`.github/workflows/deploy.yml`：push `main` 时自动部署 Pages + 下载 Worker。

在仓库 Settings → Secrets and variables → Actions 添加：

| Secret | 值 |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | Cloudflare API Token（需要 Pages:Edit、Workers Scripts:Edit） |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare 账户 ID |

`CLOUDFLARE_ACCOUNT_ID` 已经用 gh 配好；`CLOUDFLARE_API_TOKEN` 需要你自己加（不要发聊天里）：

```bash
gh secret set CLOUDFLARE_API_TOKEN --repo EzraX21/MCL-web
```

没配 token 时 workflow 会自动跳过，不会红。

## 部署到 Cloudflare Workers（静态资源）

静态站点配置在 `wrangler.site.jsonc`：

```bash
npm install --include=dev
npx wrangler login
npm run deploy
```

首次部署后可在 Dashboard 绑定自定义域名。

## 直连下载（Cloudflare R2）

官网默认链 GitHub。想要「从自己域名下载」，用 R2：

1. Cloudflare 控制台 → R2 → 创建 bucket（例如 `mcl-downloads`）
2. 给 bucket 绑定自定义域名，例如 `dl.example.com`
3. 在 `public/config.js` 填：

```js
window.MCL_CONFIG = {
  downloadBase: "https://dl.example.com",
};
```

4. 在 **mclauncher** 仓库配 R2 secrets（见下），之后每次发 Release 会自动同步。

同步布局：

```
releases/v3.7.0/mcl-3.7.0-windows-x64-setup.exe
releases/v3.7.0/...（全部产物 + SHA256SUMS.txt）
latest/...（最新版副本，短缓存）
latest.json（版本、文件名、大小、sha256）
```

官网会把按钮改成 `https://dl.example.com/releases/<tag>/<file>`；留空 `downloadBase` 就是原来的 GitHub 链接。

### R2 secrets

在 **mclauncher** 仓库 Settings → Secrets and variables → Actions：

| Secret | 值 |
| --- | --- |
| `R2_ACCOUNT_ID` | Cloudflare 账户 ID |
| `R2_ACCESS_KEY_ID` | R2 API Token 的 Access Key ID |
| `R2_SECRET_ACCESS_KEY` | R2 API Token 的 Secret Access Key |
| `R2_BUCKET` | bucket 名 |

API Token 在 R2 → Manage R2 API Tokens 创建，权限选 **Object Read & Write**，限定这个 bucket。
没配 secrets 时 release 里的 R2 job 会自动跳过，不影响发版。

## 没有银行卡？用 Worker 反代（免费）

R2 开通要走 checkout 流程，通常需要绑定支付方式；没有卡就用 Workers 免费计划反代 GitHub：

```bash
# 已带 worker/github-proxy.js 和 worker/wrangler.jsonc
npx wrangler login
npm run deploy:dl
```

部署后得到类似 `https://mcl-dl.<你的子域>.workers.dev`，把它填进 `public/config.js`：

```js
window.MCL_CONFIG = {
  downloadBase: "https://mcl-dl.<你的子域>.workers.dev",
};
```

Worker 的路由和 R2 版布局一致：

```
https://mcl-dl.xxx.workers.dev/releases/v3.7.0/mcl-3.7.0-windows-x64-setup.exe
```

已验证：小文件、Range 请求、49.8 MB 的 Windows 安装包都能正常流式下载。

注意：

- Workers 免费计划每天 100,000 请求，速度取决于 GitHub 和 Cloudflare
- 大文件走的是「Worker 流式转发」，不占 R2 存储
- 以后有卡了，R2 仍然是更好的方案（零出站费、可绑自定义域名）

## 线上

- 官网：**https://mcl.ezrax21.kdns.fr**（Worker `mcl-web` 承接自定义域名）
- 备用：https://mcl-web.pages.dev
- 下载：https://mcl-dl.xjr119911.workers.dev

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
├── wrangler.site.jsonc     Workers 静态站点配置
├── worker/                  GitHub 下载反代（Workers）
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
