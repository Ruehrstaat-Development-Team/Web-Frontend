import { defineStore } from "pinia";

export const useVolatileStore = defineStore("volatile", {
  state: () => ({ loading: false }),
  actions: {
    setLoading(loading: boolean) {
      this.loading = loading;
    },
  },
  persist: false,
});
