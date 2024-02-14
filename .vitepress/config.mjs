import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Bench to Byte",
  description: "A biologist's guide to crafting quality code",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    // logo: "/logo.png",

    siteTitle: false,

    nav: [{ text: "About", link: "/lessons/introduction/" }],

    sidebar: [
      {
        text: "Chapters",
        items: [
          { text: "0. Introduction", link: "/lessons/introduction/" },
          {
            text: "1. Setting up your IDE",
            link: "/lessons/setting-up-your-ide/",
          },
          {
            text: "2. Organizing your projects",
            link: "/lessons/organizing-your-projects/",
          },
          {
            text: "3. Using remote resources",
            link: "/lessons/using-remote-resources/",
          },
          {
            text: "4. Tracking your code",
            link: "/lessons/tracking-your-code/",
          },
          {
            text: "5. Working collaboratively",
            link: "/lessons/working-collaboratively/",
          },
          {
            text: "6. Managing software environments",
            link: "/lessons/managing-software-environments/",
          },
          {
            text: "7. Reproducible workflows and pipelines",
            link: "/lessons/creating-workflows-and-pipelines/",
          },
          {
            text: "8. Coding best practices",
            link: "/lessons/coding-best-practices/",
          },
          { text: "9. ChatGPT and LLMs", link: "/lessons/chatgpt-and-llms/" },
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
