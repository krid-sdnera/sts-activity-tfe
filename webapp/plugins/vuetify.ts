// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

// import "vuetify/styles";
import "@/scss/variables.scss";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "customTheme",
      themes: {
        customTheme: {
          dark: true,
          colors: {
            background: "#090909",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
