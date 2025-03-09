import type { NitroFetchRequest, $Fetch } from "nitropack";

export const userRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
	async getMe(): Promise<User> {
		await this.refreshSession();
		return fetch<User>("users/@me?full=true", {
			method: "GET",
		});
	},
	async refreshSession(): Promise<void> {
		var sessionStore = useSessionStore();
		var userStore = useUserStore();
		if (sessionStore.expiresAt) {
			var expiresAt = new Date(sessionStore.expiresAt);
			var now = new Date();
			if (expiresAt > now) {
				return;
			}
			var sessionToken = await fetch<SessionToken>("auth/refresh", {
				method: "POST",
			});
			sessionStore.setSession(sessionToken);
		} else {
			userStore.setUser(null);
			sessionStore.setSession(null);
		}
		return;
	},
});