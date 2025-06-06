import { defineStore } from "pinia";

export const usePersistentStore = defineStore("persistent", {
  state: () => ({
    sidebarOpen: true,
    isDesktopApp: false,
  }),
  actions: {
    setSidebarOpen(open: boolean) {
      this.sidebarOpen = open;
    },
    setIsDesktopApp(isDesktop: boolean) {
      this.isDesktopApp = isDesktop;
    },
  },
  persist: {
    storage: piniaPluginPersistedstate.cookies({
      expires: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000),
      sameSite: "strict",
      secure: true,
    }),
  },
});
