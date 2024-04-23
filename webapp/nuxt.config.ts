import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

const baseUrl =
  process.env.ENV === "production"
    ? "http://tfe.darends.scouthack.com"
    : "http://localhost:3000";

const jitsiDomain =
  process.env.ENV === "production"
    ? "jitsi.darends.scouthack.com"
    : "meet.jit.si";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  runtimeConfig: {},
  vite: {
    optimizeDeps: {
      include: ["fast-deep-equal"],
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  app: {
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
      script: [
        {
          src: `https://${jitsiDomain}/external_api.js`,
        },
      ],
    },
  },
  build: {
    transpile: ["vuetify"],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
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
