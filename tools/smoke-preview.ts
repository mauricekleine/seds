import { chromium, expect } from "playwright/test";
import { mkdir } from "node:fs/promises";
const base = process.env.PREVIEW_URL;
if (!base || !/^https:\/\/[^/]+\.workers\.dev\/?$/.test(base)) throw new Error("Set PREVIEW_URL to workers.dev");
const out = process.env.PARITY_OUTPUT ?? "/tmp/seds-migration/parity";
await mkdir(out, { recursive: true });
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 390, height: 900 }, recordVideo: { dir: out } });
const page = await context.newPage();
const errors: string[] = [];
page.on("pageerror", (error) => errors.push(page.url() + ": " + error.message));
// Without a CAPTCHA token the real server rejects before calling Google or Mailchimp,
// even after production credentials have been provisioned. Never submit a token here.
await page.route("https://www.google.com/recaptcha/**", (route) => route.abort());
try {
  for (const path of ["/healthz", "/api/deploy.json"]) {
    const response = await context.request.get(base + path);
    if (response.status() !== 200) throw new Error(`${path}: ${response.status()}`);
    console.log(path, await response.json());
  }
  const about = await context.request.get(base + "/about");
  expect(await about.text()).toContain(`over ${new Date().getFullYear() - 1980} years`);
  await page.goto(base + "/", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("link", { name: "About", exact: true }).click();
  await page.waitForURL("**/about");
  await page.getByRole("button", { name: "Switch to dark mode" }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.reload({ waitUntil: "networkidle" });
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.getByRole("button", { name: "Switch to light mode" }).click();
  await page.goto(base + "/updates", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Education", exact: true }).click();
  await expect(page.getByRole("link", { name: /Annual Science Fair/ })).toHaveCount(1);
  await expect(page.getByRole("link", { name: /New Check Dam/ })).toHaveCount(0);
  await page.getByRole("link", { name: /Annual Science Fair/ }).click();
  await page.waitForURL("**/updates/annual-science-fair");
  await expect(page.getByRole("heading", { name: "Annual Science Fair at SEDS School", exact: true })).toBeVisible();
  for (const path of ["/contact", "/collaborate"]) {
    const response = await context.request.post(base + path, {
      form: { name: "", email: "invalid", message: "" },
      maxRedirects: 0,
    });
    if (response.status() !== 303 || response.headers().location !== path + "?error=true")
      throw new Error(`Native validation failed: ${path}`);
    await page.goto(base + path, { waitUntil: "networkidle" });
    for (const input of await page.locator("main form [required]").all()) {
      await input.fill((await input.getAttribute("name")) === "email" ? "sender@example.invalid" : "Verification");
    }
    if (await page.evaluate(() => "grecaptcha" in window)) throw new Error("CAPTCHA must be absent for this probe");
    await page.locator("main form button[type=submit]").click();
    await page.waitForURL(`**${path}?error=true`);
    await expect(page.getByText(/Sorry.*something went wrong/)).toBeVisible();
  }
  if (errors.length) throw new Error(errors.join("\n"));
  console.log(
    "Preview smoke passed: health, stamp, navigation, theme persistence, filtering, detail, native validation and server-function rejection without CAPTCHA. No mail sent.",
  );
} finally {
  await context.close();
  await browser.close();
}
