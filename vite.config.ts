import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // The prerender build (src/entry-server.tsx) bundles its dependencies so Node
  // doesn't trip over CommonJS/ESM interop when scripts/prerender.mjs imports it.
  ssr: {
    noExternal: true,
  },
});
