import type { NitroFetchRequest, $Fetch } from "nitropack";

export const authRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
	async login(credentials: Credentials): Promise<SessionToken> {
        await this.refreshSession();
		return fetch<SessionToken>("auth/login", {
			method: "POST",
			body: credentials,
		});
	},
	async logout(): Promise<void> {
        await this.refreshSession();
		return fetch<void>("auth/logout", {
			method: "POST",
		});
	},
	async refresh(): Promise<SessionToken> {
		return fetch<SessionToken>("auth/refresh", {
			method: "POST",
		});
	},
	async beginDiscordLogin(returnUrl: string): Promise<DiscordResponse> {
        await this.refreshSession();
		return fetch<DiscordResponse>(
			"auth/login/discord?redirect_to=" + encodeURIComponent(returnUrl),
			{
				method: "GET",
			}
		);
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
		return 
	},
});
