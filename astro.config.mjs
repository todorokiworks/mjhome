// @ts-check
import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";

export default defineConfig({
  site: "https://todorokiworks.github.io",
  base: "/mjhome",
  integrations: [relativeLinks()],
});
