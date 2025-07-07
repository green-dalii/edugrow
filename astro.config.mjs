import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://edugrow.cn/",
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    partytown(),
    playformCompress(),
  ],
});