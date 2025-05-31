import type { NitroFetchRequest, $Fetch } from "nitropack";

export const authRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
	async login(credentials: Credentials): Promise<SessionToken> {
		return fetch<SessionToken>("auth/login", {
			method: "POST",
			body: credentials,
		});
	},
	async logout(): Promise<void> {
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
		return fetch<DiscordResponse>(
			"auth/login/discord?redirect_to=" + encodeURIComponent(returnUrl),
			{
				method: "GET",
			}
		);
	},
});
