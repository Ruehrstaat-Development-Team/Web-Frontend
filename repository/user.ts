import type { NitroFetchRequest, $Fetch } from "nitropack";

export const userRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async getMe(): Promise<User> {
    return fetch<User>("users/@me?full=true", {
      method: "GET",
    });
  },
});
