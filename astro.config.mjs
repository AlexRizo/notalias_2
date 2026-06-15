// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  server: {
    allowedHosts: ["astro.test"],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
