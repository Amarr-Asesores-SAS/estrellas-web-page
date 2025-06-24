import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://estrellaswebcam.com/",
  integrations: [
    icon(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
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
