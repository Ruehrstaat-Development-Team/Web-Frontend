declare global {
  type Credentials = {
    email: string | null;
    password: string | null;
    otp: string | null;
  };

  type SessionToken = {
    token: string;
    expiresAt: number;
  };

  type RstApiError = {
    error: string;
    code: string;
    name: string;
  };
  type DiscordResponse = {
    url: string;
  };
}
