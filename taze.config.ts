import { defineConfig } from "taze";

export default defineConfig({
  recursive: true,
  includeLocked: true,
  requestTimeout: 30_000,
  // Reads minimumReleaseAge directly from pnpm-workspace.yaml.
  exclude: [],
});
