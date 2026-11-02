import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import { defineConfig } from "vite";
import manifest from "./template.json";

// A Workers Builds run without a commit (a deploy hook or a manual build) sets the branch name in WORKERS_CI_COMMIT_SHA.
function buildSha() {
  const fromCi = [process.env.WORKERS_CI_COMMIT_SHA, process.env.GITHUB_SHA].find((value) =>
    /^[0-9a-f]{40}$/.test(value ?? ""),
  );
  return fromCi ?? execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
}

export default defineConfig({
  define: {
    __DEPLOY_STAMP__: JSON.stringify({
      sha: buildSha(),
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
