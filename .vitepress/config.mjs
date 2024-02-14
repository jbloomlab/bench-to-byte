import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Bench to Byte",
  description: "A biologist's guide to crafting quality code",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    // logo: "/logo.png",

    siteTitle: false,

    nav: [{ text: "About", link: "/about" }],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/WillHannon-MCB/bench-to-byte",
      },
      {
        icon: "twitter",
        link: "https://twitter.com/jbloom_lab?lang=en",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Will Hannon",
    },
  },
});
