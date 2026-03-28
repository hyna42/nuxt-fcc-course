// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  // css: ['@picocss/pico'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  // app: {
  //   head: {
  //     title: 'FCC nuxt - course',
  //     meta: [
  //       {
  //         name:"description",
  //         content: "This is the repository for a course about Nuxt 3 for youtube",
  //       },
        
  //     ]
  //   },

  // }
})
