import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://estrellaswebcam.com/",
  outDir: "./estrellaswebcam.com",
  integrations: [
    icon(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/blog": "/mantenimiento",
    "/familia": "/mantenimiento",
    "/beneficios": "/mantenimiento",
    "/aliados": "/mantenimiento",
  },
});
