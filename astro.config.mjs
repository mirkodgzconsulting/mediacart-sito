import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  site: "https://mediacart.it",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    sitemap({
      /** Priorità: home e /servizi come hub; contatti e chi siamo; poi landing e policy */
      serialize(item) {
        let pathname = new URL(item.url).pathname;
        if (pathname.length > 1 && pathname.endsWith("/")) {
          pathname = pathname.slice(0, -1);
        }
        if (pathname === "" || pathname === "/") {
          item.priority = 1;
        } else if (pathname.startsWith("/servizi")) {
          item.priority = 0.95;
        } else if (pathname === "/contatti" || pathname === "/chi-siamo") {
          item.priority = 0.9;
        } else {
          item.priority = 0.65;
        }
        return item;
      },
    }),
  ],
});
