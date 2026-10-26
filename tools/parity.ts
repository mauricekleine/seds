import { chromium } from "playwright";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import { mkdir, writeFile, readdir } from "node:fs/promises";
import { join } from "node:path";
const live = "https://sedsngo.org";
const preview = process.env.PREVIEW_URL;
if (!preview || !/^https:\/\/[^/]+\.workers\.dev\/?$/.test(preview))
  throw new Error("Set PREVIEW_URL to the workers.dev preview");
const out = process.env.PARITY_OUTPUT ?? "/tmp/seds-migration/parity";
await mkdir(out, { recursive: true });
const routeFiles = (await readdir("app/pages")).filter((file) => file.endsWith(".tsx"));
const routes = routeFiles
  .filter((file) => !file.includes("$slug"))
  .map((file) => (file === "index.tsx" ? "/" : "/" + file.replace(/\.tsx$/, "")));
// Every published update, plus the legacy unknown-slug response.
const details = [
  ...new Set(
    (await Bun.file("app/pages/updates.tsx").text())
      .match(/slug: "([^"]+)"/g)
      ?.map((value) => "/updates/" + value.slice(7, -1)),
  ),
];
routes.push(...details, "/updates/parity-unknown");
const browser = await chromium.launch();
const deployment = await fetch(preview + "/api/deploy.json").then((response) => response.json());
const rows: Record<string, unknown>[] = [];
async function capture(base: string, path: string, width: number, label: string) {
  const context = await browser.newContext({
    viewport: { width, height: 900 },
    locale: "en-GB",
    colorScheme: "light",
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const diagnostics: string[] = [];
  page.on("pageerror", (error) => diagnostics.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") diagnostics.push(message.text());
  });
  // These are GET-only parity probes. Prevent any form POST from this check.
  await page.route("**/*", (route) => (route.request().method() === "POST" ? route.abort() : route.continue()));
  const response = await page.goto(base + path, { waitUntil: "networkidle", timeout: 45000 });
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  // Scroll the real page to trigger lazy images and existing intersection counters.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 30));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(4500); // Existing SEDS counters animate for up to 4 seconds.
  const httpDocument = await response!.text();
  const httpMeta = await page.evaluate(
    (html) =>
      [...new DOMParser().parseFromString(html, "text/html").querySelectorAll("meta")]
        .map((element) =>
          Object.fromEntries(
            [...element.attributes].map((attribute) => [attribute.name.toLowerCase(), attribute.value]),
          ),
        )
        .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b))),
    httpDocument,
  );
  const data = await page.evaluate(() => ({
    title: document.title,
    meta: [...document.querySelectorAll("meta")]
      .map((element) =>
        Object.fromEntries([...element.attributes].map((attribute) => [attribute.name.toLowerCase(), attribute.value])),
      )
      .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b))),
    text: (document.querySelector("main")?.textContent ?? "").replace(/\s+/g, " ").trim(),
    headings: [...document.querySelectorAll("main h1, main h2, main h3")].map((element) => element.textContent?.trim()),
    brokenImages: [...document.images]
      .filter((element) => !element.complete || !element.naturalWidth)
      .map((element) => element.getAttribute("src")),
  }));
  const file = `${path === "/" ? "home" : path.slice(1).replaceAll("/", "_")}-${width}-${label}.png`;
  const png = await page.screenshot({ path: join(out, file), fullPage: true, animations: "disabled" });
  await writeFile(
    join(out, file.replace(".png", ".json")),
    JSON.stringify({ status: response?.status(), httpMeta, ...data, diagnostics }, null, 2),
  );
  await writeFile(join(out, file.replace(".png", ".aria.txt")), await page.locator("body").ariaSnapshot());
  await context.close();
  return { status: response?.status(), httpMeta, ...data, diagnostics, file, png };
}
try {
  for (const width of [1440, 390]) {
    for (const path of routes) {
      const [before, after] = await Promise.all([
        capture(live, path, width, "live"),
        capture(preview, path, width, "preview"),
      ]);
      const a = PNG.sync.read(before.png),
        b = PNG.sync.read(after.png);
      let pixels: number | null = null;
      let differenceBounds: number[] | null = null;
      if (a.width === b.width && a.height === b.height) {
        const diff = new PNG({ width: a.width, height: a.height });
        pixels = pixelmatch(a.data, b.data, diff.data, a.width, a.height, { threshold: 0.1 });
        await writeFile(join(out, before.file.replace("-live.png", "-diff.png")), PNG.sync.write(diff));
        const bounds = [a.width, a.height, 0, 0];
        for (let y = 0; y < a.height; y++)
          for (let x = 0; x < a.width; x++) {
            const i = (y * a.width + x) * 4;
            if (diff.data[i] > 180 && diff.data[i + 1] < 100 && diff.data[i + 2] < 100) {
              bounds[0] = Math.min(bounds[0], x);
              bounds[1] = Math.min(bounds[1], y);
              bounds[2] = Math.max(bounds[2], x);
              bounds[3] = Math.max(bounds[3], y);
            }
          }
        if (pixels) differenceBounds = bounds;
      }
      const row = {
        path,
        width,
        status: before.status === after.status,
        title: before.title === after.title,
        httpMeta: JSON.stringify(before.httpMeta) === JSON.stringify(after.httpMeta),
        meta: JSON.stringify(before.meta) === JSON.stringify(after.meta),
        text: before.text === after.text,
        dimensions: [a.width, a.height, b.width, b.height],
        differentPixels: pixels,
        differenceBounds,
        pixelRatio: pixels === null ? null : pixels / (a.width * a.height),
        liveDiagnostics: before.diagnostics,
        previewDiagnostics: after.diagnostics,
        liveBrokenImages: before.brokenImages,
        previewBrokenImages: after.brokenImages,
        screenshots: [before.file, after.file],
      };
      rows.push(row);
      console.log(JSON.stringify(row));
      await writeFile(
        join(out, "report.json"),
        JSON.stringify({ live, preview, deployment, capturedAt: new Date().toISOString(), routes, rows }, null, 2),
      );
    }
  }
} finally {
  await browser.close();
}
const failures = rows.filter(
  (row) => !row.status || !row.title || !row.httpMeta || !row.meta || !row.text || row.differentPixels !== 0,
);
await writeFile(
  join(out, "README.md"),
  `# SEDS parity\n\nLive: ${live}\nPreview: ${preview}\n\n${rows.length} route/viewport pairs, ${failures.length} pairs with differences. See report.json for exact comparisons, per-page JSON and ARIA snapshots, and full-page live/preview/diff PNGs.\n\nCaptured after fonts, lazy images and 4-second counters settle. GET-only; all POST requests aborted. Screenshots use 1440×900 and 390×900 viewports at device scale 1. Pixelmatch threshold 0.1 excludes antialiasing. HTTP meta compares the original response, while meta compares the hydrated DOM (including third-party injections). Difference bounds use [left, top, right, bottom] in full-page screenshot coordinates. No content or screenshot region is masked.\n`,
);
process.exitCode = failures.length ? 1 : 0;
