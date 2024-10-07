import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/bench-to-byte/",
  lang: "en-US",
  title: "Bench to Byte",
  description: "A biologist's guide to crafting quality code",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    logo: { light: "/logo.svg", dark: "/logo-dark.svg" },
    siteTitle: "Bench2Byte",

    nav: [{ text: "About", link: "/sections/introduction/" }],

    sidebar: [
      {
        text: "Sections",
        items: [
          { text: "Introduction", link: "/sections/introduction/" },
          {
            text: "0. Coding Smarter with Online Tools",
            link: "/sections/chatgpt-and-llms/",
          },
          {
            text: "1. Setting up your IDE",
            link: "/sections/setting-up-your-ide/",
          },
          {
            text: "2. Organizing your projects",
            link: "/sections/organizing-your-projects/",
          },
          {
            text: "3. Using remote resources",
            link: "/sections/using-remote-resources/",
          },
          {
            text: "4. Managing software environments",
            link: "/sections/managing-software-environments/",
          },
          {
            text: "5. Tracking your code",
            link: "/sections/tracking-your-code/",
          },
          {
            text: "6. Working collaboratively",
            link: "/sections/working-collaboratively/",
          },
          {
            text: "7. Reproducible workflows and pipelines",
            link: "/sections/creating-workflows-and-pipelines/",
          },
          {
            text: "8. Coding best practices",
            link: "/sections/coding-best-practices/",
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
