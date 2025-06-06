import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({ user: null as User | null }),
  actions: {
    setUser(user: User | null) {
      this.user = user;
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
