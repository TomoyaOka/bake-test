import { defineConfig } from "astro/config";
import glslify from "vite-plugin-glslify";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  vite: {
    // plugins: [glslify()],
    server: {
      host: true,
    },
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`,
      },
    },
  },
});
