import { $fetch } from "ofetch";
import type { FetchOptions } from "ofetch";
import AuthModule from "~/repository/modules/auth";

interface IApiInstance {
  auth: AuthModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const fetchOptions: FetchOptions = {
    baseURL: config.public.API_BASE_URL,
  };

  const apiFetcher = $fetch.create(fetchOptions);

  const modules: IApiInstance = {
    auth: new AuthModule(apiFetcher),
  };

  return {
    provide: {
        api: modules,
    },
  }
});
