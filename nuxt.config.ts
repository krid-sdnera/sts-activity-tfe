import { defineNuxtConfig } from "@nuxt/bridge";

const baseUrl =
  process.env.ENV === "production"
    ? "http://web.sts.dirk.arends.com.au"
    : "http://localhost:3000";

export default defineNuxtConfig({
  srcDir: "src/",
  target: "server",
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Terra Firma Explora",
    meta: [],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        // href: "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css",
        href: "/materialdesignicons.min.css",
      },
    ],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  /*
   ** Nuxt.js modules
   ** Doc: https://modules.nuxtjs.org
   */
  modules: [],
  buildModules: [
    "@nuxtjs/vuetify",
    "@nuxtjs/pwa",
    "vue-browser-detect-plugin/nuxt",
  ],
  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/docs/2.x/directory-structure/plugins
   */
  plugins: [
    { src: "~/plugins/alert.ts" },
    { src: "~/plugins/breadcrumb.ts" },
    { src: "~/plugins/filters.ts" },
    { src: "~/plugins/persistedState.client.js", mode: "client" },
  ],

  vuetify: {
    customVariables: ["~/scss/variables.scss"],
    treeShake: true,
    defaultAssets: {
      font: false,
      icons: false,
    },
    theme: {
      dark: true,
    },
  },

  privateRuntimeConfig: {},
  publicRuntimeConfig: {},
});

export interface RuntimeConfig {
  public: {
    _app: {
      basePath: string;
      assetsPath: string;
      cdnURL: string;
    };
  };
  private: {};
}
