import type { FetchOptions } from "ofetch";

export default defineNuxtPlugin({
  setup() {
    const config = useRuntimeConfig();

    var headers = useRequestHeaders(["cookie", "authorization"]);
    const fetchOptions: FetchOptions = {
      baseURL: config.public.API_BASE_URL,
      credentials: "include",
      headers: headers,
      onRequest: async (context) => {
        var sessionStore = useSessionStore();
        var userStore = useUserStore();
        if (sessionStore.expiresAt) {
          var expiresAt = new Date(sessionStore.expiresAt);
          var now = new Date();
          if (expiresAt <= now) {
            var sessionToken = await $fetch<SessionToken>("auth/refresh", {
              method: "POST",
              baseURL: config.public.API_BASE_URL,
            });
            sessionStore.setSession(sessionToken);
          }
        } else {
          userStore.setUser(null);
          sessionStore.setSession(null);
        }
        const applicationStore = useVolatileStore();
        applicationStore.setLoading(true);
        context.options.headers.append("Authorization", "Bearer " + sessionStore.token);
      },
      onRequestError: () => {
        const applicationStore = useVolatileStore();
        applicationStore.setLoading(false);
      },
      onResponse: () => {
        const applicationStore = useVolatileStore();
        applicationStore.setLoading(false);
      },
      onResponseError: () => {
        const applicationStore = useVolatileStore();
        applicationStore.setLoading(false);
      },
    };
    const api = $fetch.create(fetchOptions);

    return {
      provide: {
        api,
      },
    };
  },
});
