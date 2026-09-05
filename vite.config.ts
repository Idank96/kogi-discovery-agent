/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * `base: "./"` — relative asset paths, so the same build works unmodified at
 * `<user>.github.io/<repo>/` without threading the repo name through config.
 *
 * No source maps: `dist/` is copied wholesale to an unauthenticated GitHub
 * Pages host, so `build.sourcemap` stays false (same reasoning as
 * agentic-bootstrap's app/ui).
 */
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
  },
});
