import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Bench to Byte",
  description: "A biologist's guide to crafting quality code",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    logo: { light: "/logo.svg", dark: "/logo-dark.svg" },
    siteTitle: "Bench2Byte",

    nav: [{ text: "About", link: "/chapters/introduction/" }],

    sidebar: [
      {
        text: "Chapters",
        items: [
          { text: "0. Introduction", link: "/chapters/introduction/" },
          {
            text: "1. Setting up your IDE",
            link: "/chapters/setting-up-your-ide/",
          },
          {
            text: "2. Organizing your projects",
            link: "/chapters/organizing-your-projects/",
          },
          {
            text: "3. Using remote resources",
            link: "/chapters/using-remote-resources/",
          },
          {
            text: "4. Tracking your code",
            link: "/chapters/tracking-your-code/",
          },
          {
            text: "5. Working collaboratively",
            link: "/chapters/working-collaboratively/",
          },
          {
            text: "6. Managing software environments",
            link: "/chapters/managing-software-environments/",
          },
          {
            text: "7. Reproducible workflows and pipelines",
            link: "/chapters/creating-workflows-and-pipelines/",
          },
          {
            text: "8. Coding best practices",
            link: "/chapters/coding-best-practices/",
          },
          { text: "9. ChatGPT and LLMs", link: "/chapters/chatgpt-and-llms/" },
        ],
      },
    ],

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
