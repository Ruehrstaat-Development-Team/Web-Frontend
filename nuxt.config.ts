import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-04-01",
  devtools: { enabled: true },
  sourcemap: { client: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@sentry/nuxt/module",
    "@nuxt/image",
    "@vee-validate/nuxt",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxt/icon",
    "nuxt-lucide-icons",
    "nuxt-i18n-micro",
    "@nuxtjs/device",
    "reka-ui/nuxt",
  ],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.webp" }],
    },
  },

  //#region Module Configuration
  shadcn: {
    prefix: "",
    componentDir: "@/components/ui",
  },
  colorMode: {
    classSuffix: "",
    classPrefix: "",
  },
  sentry: {
    sourceMapsUploadOptions: {
      enabled: false, // we do this in the CI
    },
  },
  icon: {
    customCollections: [
      {
        prefix: "rst",
        dir: "./app/assets/icons",
      },
    ],
  },
  i18n: {
    locales: [
      { code: "en", iso: "en-US", displayName: "English" },
      { code: "de", iso: "de-DE", displayName: "Deutsch" },
    ],
    defaultLocale: "en",
    meta: true,
    localeCookie: "user-locale",
    autoDetectLanguage: true,
    autoDetectPath: "/",
    strategy: "prefix",
    hmr: true,
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: [
        'vue-sonner',
        'zod',
        '@vee-validate/zod',
        'class-variance-authority',
        '@vueuse/core',
        'lucide-vue-next',
        'clsx',
        'tailwind-merge',
      ]
    }
  },
  //#endregion Module Configuration

  imports: {
    dirs: ["stores", "repository"],
  },

  runtimeConfig: {
    public: {
      sentry: {
        dsn: process.env.SENTRY_DSN,
      },
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
});
