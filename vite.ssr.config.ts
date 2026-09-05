import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Separate config for the one-time SSR prerender build (src/entry-server.tsx),
 * kept out of vite.config.ts so the client build config stays untouched.
 * Output format is forced to ESM to match the project's "type": "module" and
 * scripts/prerender.mjs's plain `import()` of the built file.
 */
export default defineConfig({
  plugins: [react()],
  build: {
    ssr: "src/entry-server.tsx",
    outDir: "dist-ssr",
    sourcemap: false,
    rollupOptions: {
      output: { format: "es" },
    },
  },
});
