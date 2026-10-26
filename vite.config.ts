import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import { defineConfig } from "vite";
import manifest from "./template.json";
export default defineConfig({
  define: {
    __DEPLOY_STAMP__: JSON.stringify({
      sha:
        process.env.WORKERS_CI_COMMIT_SHA ||
        process.env.GITHUB_SHA ||
        execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim(),
      framework: "tanstack-start",
      template_version: manifest.version,
      target: "cloudflare",
    }),
  },
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./app", import.meta.url)),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    cloudflare({
      viteEnvironment: { name: "ssr" },
      inspectorPort: false,
      experimental: { newConfig: { cfBuildOutput: true } },
    }),
    tanstackStart(),
    react(),
  ],
});
