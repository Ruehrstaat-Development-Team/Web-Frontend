import type { HookResult } from "@nuxt/schema";

declare module "#app" {
  interface RuntimeNuxtHooks {
    "auth:logout": () => HookResult;
  }
  interface NuxtHooks {
    "your-nuxt-hook": () => HookResult;
  }
}

declare module "nitropack" {
  interface NitroRuntimeHooks {
    "your-nitro-hook": () => void;
  }
}
