import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  head: {
    titleTemplate: "%s - This is Head",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "This is description",
      },
      {
        hid: "robots",
        name: "robots",
        content: "index, follow",
      },
    ],
  },
  modules: ["@nuxtjs/tailwindcss"],
});
