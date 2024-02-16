import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import Contributors from "./Contributors.vue";
import "./custom.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "home-features-after": () => h(Contributors),
    });
  },
};
