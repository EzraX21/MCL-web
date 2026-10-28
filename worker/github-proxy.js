/**
 * MCL download proxy: /releases/<tag>/<file> -> GitHub Release asset.
 * No R2 / payment method required; runs on the Workers free plan.
 */
const OWNER = "EzraX21";
const REPO = "mclauncher";
const TAG = /^v[0-9A-Za-z._-]+$/;
const FILE = /^[A-Za-z0-9._+-]+$/;

export default {
  async fetch(request) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", { status: 405, headers: { Allow: "GET, HEAD" } });
    }

    const url = new URL(request.url);
    const match = url.pathname.match(/^\/releases\/([^/]+)\/([^/]+)$/);
    if (!match) {
      return new Response("Not Found", { status: 404 });
    }
    const [, tag, file] = match;
    if (!TAG.test(tag) || !FILE.test(file)) {
      return new Response("Bad Request", { status: 400 });
    }

    const target = `https://github.com/${OWNER}/${REPO}/releases/download/${tag}/${file}`;
    const headers = new Headers({ "User-Agent": "mcl-download-proxy" });
    const range = request.headers.get("Range");
    if (range) headers.set("Range", range);

    const upstream = await fetch(target, { method: request.method, headers, redirect: "follow" });
    const responseHeaders = new Headers();
    for (const name of ["content-type", "content-length", "content-disposition",
                        "content-range", "accept-ranges", "etag", "last-modified"]) {
      const value = upstream.headers.get(name);
      if (value) responseHeaders.set(name, value);
    }
    responseHeaders.set("Cache-Control", "public, max-age=3600");
    responseHeaders.set("X-Content-Type-Options", "nosniff");

    return new Response(upstream.body, { status: upstream.status, headers: responseHeaders });
  },
};
