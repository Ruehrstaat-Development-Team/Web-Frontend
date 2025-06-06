export default defineNuxtPlugin((nuxtApp) => {
  const sessionStore = useSessionStore();
  const userStore = useUserStore();
  const { $api } = useNuxtApp();
  const auth = authRepository($api);
  const user = userRepository($api);

  nuxtApp.hook("app:beforeMount", async () => {
    if (sessionStore.expiresAt) {
      var expiresAt = new Date(sessionStore.expiresAt);
      var now = new Date();
      if (expiresAt > now) {
        return;
      }
      var sessionToken = await auth.refresh();
      sessionStore.setSession(sessionToken);
      var usr = await user.getMe();
      userStore.setUser(usr);
    } else {
      userStore.setUser(null);
      sessionStore.setSession(null);
    }
  });
});
