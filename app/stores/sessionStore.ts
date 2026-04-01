import { defineStore } from "pinia";

export const useSessionStore = defineStore("session", {
  state: () => ({
    token: null as string | null,
    expiresAt: null as number | null,
  }),
  actions: {
    setSession(sessionToken: SessionToken | null) {
      if (sessionToken === null) {
        this.token = null;
        this.expiresAt = null;
        return;
      }
      this.token = sessionToken.token;
      this.expiresAt = sessionToken.expiresAt * 1000;
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
