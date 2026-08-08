// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  server: {
    allowedHosts: ["astro.test"],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), icon()],

  prefetch: {
    defaultStrategy: 'hover',
    prefetchAll: true
  }
});