import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
const root = process.argv[2] ?? ".cloudflare/output/v0/workers/default/assets";
const keys = ["CONTENTFUL_ACCESS_TOKEN", "CONTENTFUL_SPACE_ID", "MANDRILL_API_KEY", "RECAPTCHA_SECRET_KEY"];
let checked = 0;
async function scan(dir: string) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) await scan(file);
    else if (/\.(js|json|html|map)$/.test(file)) {
      const body = await readFile(file, "utf8");
      checked++;
      for (const key of keys) {
        if (body.includes(key) || (process.env[key] && body.includes(process.env[key]!)))
          throw new Error(`Client secret marker found: ${key} in ${file}`);
      }
    }
  }
}
await scan(root);
console.log(`Client secret scan passed: ${checked} assets; ${keys.length} names and all available values checked.`);
