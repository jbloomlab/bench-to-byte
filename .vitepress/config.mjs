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
          { text: "Introduction", link: "/chapters/introduction/" },
          {
            text: "0. Coding Smarter with Online Tools",
            link: "/chapters/chatgpt-and-llms/",
          },
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
            text: "4. Managing software environments",
            link: "/chapters/managing-software-environments/",
          },
          {
            text: "5. Tracking your code",
            link: "/chapters/tracking-your-code/",
          },
          {
            text: "6. Working collaboratively",
            link: "/chapters/working-collaboratively/",
          },
          {
            text: "7. Reproducible workflows and pipelines",
            link: "/chapters/creating-workflows-and-pipelines/",
          },
          {
            text: "8. Coding best practices",
            link: "/chapters/coding-best-practices/",
          },
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
