const REPO = "EzraX21/mclauncher";
const RELEASES = `https://github.com/${REPO}/releases`;
const LATEST = `${RELEASES}/latest`;
const DOWNLOAD_BASE = String((window.MCL_CONFIG && window.MCL_CONFIG.downloadBase) || "").replace(/\/+$/, "");

const I18N = {
  zh: {
    "page.title": "MCL — Minecraft: Java Edition 启动器",
    "page.description": "MCL（mclauncher）：开源、轻量的 Minecraft: Java Edition 启动器。下载原版、装加载器、整合包、光影，原生 GUI + TUI。",
    "skip": "跳到主要内容",
    "nav.features": "功能",
    "nav.screens": "截图",
    "nav.download": "下载",
    "nav.status": "状态",
    "nav.docs": "文档",
    "hero.latest": "最新版",
    "hero.title": "把 Minecraft<br /><em>交还给玩家</em>",
    "hero.sub": "开源、轻量的 Minecraft: Java Edition 启动器。下载原版、装加载器、导入整合包、管理光影，双击就能玩。",
    "hero.download": "下载 MCL",
    "hero.github": "在 GitHub 查看",
    "hero.note": "Windows 10/11 · Linux x64 · 开源 GPL-3.0-or-later",
    "hero.point1": "原生 GUI（WebView2 / WebKitGTK）",
    "hero.point2": "无遥测、无广告",
    "hero.point3": "TUI 作为特色模式",
    "hero.download.windows": "下载 Windows 版",
    "hero.download.linux": "下载 Linux 版",
    "hero.download.mac": "查看所有版本",
    "hero.download.other": "查看下载选项",
    "features.eyebrow": "为什么用 MCL",
    "features.title": "该有的都有，不该有的没有",
    "features.sub": "从下载到启动只做必要的事：快、干净、不塞广告，也不偷偷上传数据。",
    "features.gui.title": "原生窗口",
    "features.gui.desc": "Linux 用 WebKitGTK，Windows 用 WebView2，双击就是桌面应用，不是浏览器标签。",
    "features.loader.title": "版本与加载器",
    "features.loader.desc": "原版、Fabric、Quilt、Forge、NeoForge 一条龙，Java 按版本要求自动选。",
    "features.modpack.title": "整合包导入",
    "features.modpack.desc": "Modrinth .mrpack 与 CurseForge zip，自动补原版、加载器和 overrides。",
    "features.resource.title": "光影与材质",
    "features.resource.desc": "从 Modrinth 搜光影、材质包，装进当前实例，随时删。",
    "features.crash.title": "崩溃分析",
    "features.crash.desc": "读 crash-report，直接告诉你 Java 版本、内存、缺前置还是模组冲突。",
    "features.login.title": "微软登录",
    "features.login.desc": "设备代码流登录正版账号，token 只存本机；离线模式始终可用。",
    "features.login.badge": "等待 Mojang 白名单",
    "screens.eyebrow": "界面",
    "screens.title": "PCL 风格的干净桌面",
    "screens.sub": "左侧导航、白底卡片、蓝色主色；深色主题跟随系统。",
    "screens.versions": "版本",
    "screens.install": "安装",
    "screens.mods": "模组 / 整合包",
    "screens.resources": "资源",
    "screens.settings": "设置",
    "screens.dark": "深色",
    "screens.caption.versions": "版本列表：启动、装加载器、崩溃分析",
    "screens.caption.install": "安装原版：版本清单、资源开关与下载进度",
    "screens.caption.mods": "模组 / 整合包：搜索、导入、本地管理",
    "screens.caption.resources": "资源：光影与材质包",
    "screens.caption.settings": "设置：目录、Java、主题、微软账号",
    "screens.caption.dark": "深色主题：可手动切换或跟随系统",
    "download.eyebrow": "下载",
    "download.title": "选你的平台，直接拿包",
    "download.sub": "按钮指向 GitHub Release 的实际产物；下载失败就去 Releases 页面。",
    "download.latest": "最新版本",
    "download.released": "发布于",
    "download.all": "全部版本与校验和",
    "download.windows.note": "Windows 10/11 x64 · WebView2 自带",
    "download.linux.note": "x64 · 需要 WebKitGTK + PyGObject",
    "download.setup": "安装包",
    "download.setup.desc": "Inno Setup，开始菜单 + 桌面快捷方式",
    "download.portable": "便携版",
    "download.portable.desc": "解压即用，含 mclw.exe 与 mcl.exe",
    "download.portable.deps": "自带依赖",
    "download.checksum": "SHA256SUMS.txt",
    "download.other": "其他平台：查看 GitHub Releases",
    "status.eyebrow": "项目状态",
    "status.title": "做到哪一步了",
    "status.sub": "不画饼：下面是真实状态，没做完的会直接写出来。",
    "status.done.title": "已完成",
    "status.done.1": "原版下载 / 版本隔离 / Java 运行时",
    "status.done.2": "Fabric · Quilt · Forge · NeoForge",
    "status.done.3": "模组、整合包、光影、材质",
    "status.done.4": "崩溃分析、TUI、原生 GUI、多主题",
    "status.wait.title": "等待外部",
    "status.wait.1": "微软登录：等 Mojang 白名单审核",
    "status.wait.2": "CurseForge 整合包：需要 API key",
    "status.wait.3": "AUR：等待首次提交",
    "status.plan.title": "计划中",
    "status.plan.1": "服务器列表 / 快速进服",
    "status.plan.2": "启动器自动更新",
    "status.plan.3": "Java 管理界面",
    "status.plan.4": "地图与数据包",
    "footer.note": "开源 Minecraft: Java Edition 启动器，GPL-3.0-or-later。与 Mojang / Microsoft 无关联。",
    "footer.releases": "Releases",
    "footer.docs": "文档",
    "footer.privacy": "隐私",
    "footer.license": "许可证",
    "footer.built": "用 Python + TypeScript 写的",
  },
  en: {
    "page.title": "MCL — Minecraft: Java Edition Launcher",
    "page.description": "MCL (mclauncher): an open-source, lightweight Minecraft: Java Edition launcher with a native GUI and a TUI mode.",
    "skip": "Skip to content",
    "nav.features": "Features",
    "nav.screens": "Screenshots",
    "nav.download": "Download",
    "nav.status": "Status",
    "nav.docs": "Docs",
    "hero.latest": "Latest",
    "hero.title": "Minecraft,<br /><em>back in your hands</em>",
    "hero.sub": "An open-source, lightweight Minecraft: Java Edition launcher. Install vanilla, loaders, modpacks and shaders — then just play.",
    "hero.download": "Download MCL",
    "hero.github": "View on GitHub",
    "hero.note": "Windows 10/11 · Linux x64 · GPL-3.0-or-later",
    "hero.point1": "Native GUI (WebView2 / WebKitGTK)",
    "hero.point2": "No telemetry, no ads",
    "hero.point3": "TUI as a bonus mode",
    "hero.download.windows": "Download for Windows",
    "hero.download.linux": "Download for Linux",
    "hero.download.mac": "View all releases",
    "hero.download.other": "View download options",
    "features.eyebrow": "Why MCL",
    "features.title": "Everything you need. Nothing you don't.",
    "features.sub": "From download to launch, MCL does the necessary things: fast, clean, no ads, no hidden uploads.",
    "features.gui.title": "Native window",
    "features.gui.desc": "WebKitGTK on Linux, WebView2 on Windows. A real desktop app, not another browser tab.",
    "features.loader.title": "Versions & loaders",
    "features.loader.desc": "Vanilla, Fabric, Quilt, Forge and NeoForge, with the right Java major selected for each version.",
    "features.modpack.title": "Modpack import",
    "features.modpack.desc": "Modrinth .mrpack and CurseForge zips, with vanilla, loader and overrides handled for you.",
    "features.resource.title": "Shaders & packs",
    "features.resource.desc": "Search Modrinth for shaders and resource packs, install into the current instance, delete anytime.",
    "features.crash.title": "Crash analysis",
    "features.crash.desc": "Reads the crash report and explains Java, memory, missing dependencies or mod conflicts.",
    "features.login.title": "Microsoft login",
    "features.login.desc": "Device-code sign-in for your own account; tokens stay local. Offline mode always works.",
    "features.login.badge": "Awaiting Mojang allowlist",
    "screens.eyebrow": "Screenshots",
    "screens.title": "A clean, PCL-inspired desktop",
    "screens.sub": "Sidebar navigation, white cards, blue accent; dark theme follows the system.",
    "screens.versions": "Versions",
    "screens.install": "Install",
    "screens.mods": "Mods / modpacks",
    "screens.resources": "Resources",
    "screens.settings": "Settings",
    "screens.dark": "Dark",
    "screens.caption.versions": "Versions: launch, add a loader, analyze crashes",
    "screens.caption.install": "Install vanilla: version list, assets toggle and progress",
    "screens.caption.mods": "Mods / modpacks: search, import and manage locally",
    "screens.caption.resources": "Resources: shaders and resource packs",
    "screens.caption.settings": "Settings: directories, Java, theme, Microsoft account",
    "screens.caption.dark": "Dark theme: manual or follow the system",
    "download.eyebrow": "Download",
    "download.title": "Pick your platform. Grab the build.",
    "download.sub": "Buttons point at the actual GitHub Release assets; if a download fails, open Releases.",
    "download.latest": "Latest",
    "download.released": "Released",
    "download.all": "All versions & checksums",
    "download.windows.note": "Windows 10/11 x64 · WebView2 included",
    "download.linux.note": "x64 · requires WebKitGTK + PyGObject",
    "download.setup": "Installer",
    "download.setup.desc": "Inno Setup, Start Menu + desktop shortcut",
    "download.portable": "Portable",
    "download.portable.desc": "Unzip and run; includes mclw.exe and mcl.exe",
    "download.portable.deps": "bundled dependencies",
    "download.checksum": "SHA256SUMS.txt",
    "download.other": "Other platforms: see GitHub Releases",
    "status.eyebrow": "Status",
    "status.title": "Where the project stands",
    "status.sub": "No vapourware: this is the real state, including what is not finished yet.",
    "status.done.title": "Done",
    "status.done.1": "Vanilla installs / isolation / Java runtimes",
    "status.done.2": "Fabric · Quilt · Forge · NeoForge",
    "status.done.3": "Mods, modpacks, shaders, resource packs",
    "status.done.4": "Crash analysis, TUI, native GUI, themes",
    "status.wait.title": "Waiting on others",
    "status.wait.1": "Microsoft login: Mojang allowlist review",
    "status.wait.2": "CurseForge modpacks: API key required",
    "status.wait.3": "AUR: first submission pending",
    "status.plan.title": "Planned",
    "status.plan.1": "Server list / quick join",
    "status.plan.2": "Launcher auto-update",
    "status.plan.3": "Java management UI",
    "status.plan.4": "Maps and datapacks",
    "footer.note": "Open-source Minecraft: Java Edition launcher, GPL-3.0-or-later. Not affiliated with Mojang or Microsoft.",
    "footer.releases": "Releases",
    "footer.docs": "Docs",
    "footer.privacy": "Privacy",
    "footer.license": "License",
    "footer.built": "Built with Python + TypeScript",
  },
};

const SHOTS = {
  versions: { file: "versions.png", caption: "screens.caption.versions" },
  install: { file: "install.png", caption: "screens.caption.install" },
  mods: { file: "mods.png", caption: "screens.caption.mods" },
  resources: { file: "resources.png", caption: "screens.caption.resources" },
  settings: { file: "settings.png", caption: "screens.caption.settings" },
  dark: { file: "dark.png", caption: "screens.caption.dark" },
};

const ASSETS = {
  "windows-setup": "-windows-x64-setup.exe",
  "windows-portable": "-windows-x64-portable.zip",
  "linux-deb": ".deb",
  "linux-rpm": ".rpm",
  "linux-arch": ".pkg.tar.zst",
  "linux-portable": "-linux-x64-portable.tar.gz",
};

let lang = "zh";
let release = null;

function safeGet(key, fallback = null) {
  try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; }
}
function safeSet(key, value) {
  try { localStorage.setItem(key, value); } catch { /* ignore */ }
}

function t(key) {
  return (I18N[lang] && I18N[lang][key]) || I18N.zh[key] || key;
}

function applyLang(next) {
  lang = next === "en" ? "en" : "zh";
  safeSet("mcl-web-lang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = t("page.title");
  const meta = document.getElementById("meta-description");
  if (meta) meta.setAttribute("content", t("page.description"));
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", t("page.title"));
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", t("page.description"));

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    node.innerHTML = t(node.getAttribute("data-i18n-html"));
  });
  const toggle = document.getElementById("lang-toggle");
  if (toggle) toggle.textContent = lang === "zh" ? "EN" : "中文";
  const caption = document.getElementById("shot-caption");
  if (caption) caption.textContent = t(caption.dataset.key || "screens.caption.versions");
  updatePrimary();
}

function detectOS() {
  const ua = navigator.userAgent || "";
  if (/Android|iPhone|iPad|iPod/i.test(ua)) return "other";
  if (/Windows/i.test(ua)) return "windows";
  if (/Mac OS X|Macintosh/i.test(ua)) return "mac";
  return "linux";
}

function assetURL(asset, tag) {
  if (!asset) return LATEST;
  if (DOWNLOAD_BASE && tag) {
    return `${DOWNLOAD_BASE}/releases/${encodeURIComponent(tag)}/${encodeURIComponent(asset.name)}`;
  }
  return asset.browser_download_url;
}

function assetFor(key) {
  if (!release || !Array.isArray(release.assets)) return null;
  const suffix = ASSETS[key];
  return release.assets.find((asset) => asset.name.endsWith(suffix)) || null;
}

function updatePrimary() {
  const os = detectOS();
  const button = document.getElementById("download-primary");
  const label = document.getElementById("download-primary-label");
  if (!button || !label) return;
  let asset = null;
  if (os === "windows") asset = assetFor("windows-setup");
  else if (os === "linux") asset = assetFor("linux-portable");
  const key = os === "windows" ? "hero.download.windows"
    : os === "linux" ? "hero.download.linux"
    : os === "mac" ? "hero.download.mac" : "hero.download.other";
  label.textContent = t(key);
  button.href = asset ? assetURL(asset, release && release.tag_name) : LATEST;
}

function formatSize(bytes) {
  if (!bytes || bytes < 1024) return "";
  const mb = bytes / 1048576;
  return mb >= 100 ? `${mb.toFixed(0)} MB` : `${mb.toFixed(1)} MB`;
}

function applyRelease(data) {
  release = data;
  const tag = data.tag_name || "latest";
  ["release-version", "release-version-2"].forEach((id) => {
    const node = document.getElementById(id);
    if (node) node.textContent = tag;
  });
  const date = (data.published_at || "").slice(0, 10);
  const pill = document.getElementById("release-date-pill");
  const dateNode = document.getElementById("release-date");
  if (date && pill && dateNode) {
    dateNode.textContent = date;
    pill.hidden = false;
  }
  const checksum = document.getElementById("checksum-link");
  if (checksum) {
    const checksumAsset = (data.assets || []).find((asset) => asset.name === "SHA256SUMS.txt");
    checksum.href = DOWNLOAD_BASE
      ? `${DOWNLOAD_BASE}/releases/${encodeURIComponent(tag)}/SHA256SUMS.txt`
      : (checksumAsset ? checksumAsset.browser_download_url : `${RELEASES}/download/${tag}/SHA256SUMS.txt`);
  }
  document.querySelectorAll("a[data-asset]").forEach((link) => {
    const key = link.getAttribute("data-asset");
    const asset = assetFor(key);
    if (asset) {
      link.href = assetURL(asset, tag);
      const sizeNode = document.querySelector(`[data-size="${key}"]`);
      if (sizeNode) sizeNode.textContent = formatSize(asset.size);
    } else {
      link.href = LATEST;
    }
  });
  updatePrimary();
}

async function loadRelease() {
  try {
    const response = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!response.ok) throw new Error(`GitHub API ${response.status}`);
    applyRelease(await response.json());
  } catch (error) {
    console.warn("MCL: falling back to Releases page", error);
    document.querySelectorAll("[data-asset]").forEach((link) => { link.href = LATEST; });
    const badge = document.getElementById("release-badge");
    if (badge) badge.href = LATEST;
    updatePrimary();
  }
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme === "dark" ? "dark" : "light";
  safeSet("mcl-web-theme", theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "dark" ? "#14161a" : "#0d6ab3");
}

function queryParam(name) {
  try { return new URLSearchParams(window.location.search).get(name); } catch { return null; }
}

function initTheme() {
  const requested = queryParam("theme");
  const stored = safeGet("mcl-web-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(requested === "dark" || requested === "light"
    ? requested
    : (stored || (prefersDark ? "dark" : "light")));
}

function initScreens() {
  const image = document.getElementById("shot-image");
  const caption = document.getElementById("shot-caption");
  document.querySelectorAll(".shot-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.shot;
      const shot = SHOTS[key];
      if (!shot || !image) return;
      image.src = `assets/screens/${shot.file}`;
      image.alt = `${t(shot.caption)} — MCL`;
      if (caption) {
        caption.dataset.key = shot.caption;
        caption.textContent = t(shot.caption);
      }
      document.querySelectorAll(".shot-tab").forEach((other) => {
        other.classList.toggle("active", other === tab);
        other.setAttribute("aria-selected", other === tab ? "true" : "false");
      });
    });
  });
}

function initNav() {
  const toggle = document.getElementById("menu-toggle");
  const links = document.getElementById("nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function init() {
  initTheme();
  const requestedLang = queryParam("lang");
  const storedLang = safeGet("mcl-web-lang");
  const preferred = requestedLang === "zh" || requestedLang === "en"
    ? requestedLang
    : (storedLang || ((navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en"));
  applyLang(preferred);
  initScreens();
  initNav();
  loadRelease();

  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(next);
  });
  document.getElementById("lang-toggle")?.addEventListener("click", () => {
    applyLang(lang === "zh" ? "en" : "zh");
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
