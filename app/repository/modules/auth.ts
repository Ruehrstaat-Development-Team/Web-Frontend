import HttpFactory from "../factory";

class AuthModule extends HttpFactory {
  async login(credentials: Credentials): Promise<SessionToken> {
    var res = this.post<SessionToken>("/auth/login", credentials, false).catch(
      (error) => {
        if (error != null) {
          this.alerts.AlertService.addAlert({
            code: "UI0001",
            type: "error",
            ttl: 5,
          } as Alert);
        }
        throw error;
      }
    );
    return res;
  }

  async register(credentials: Credentials): Promise<void> {
    this.post<void>("auth/register", credentials, false).catch(
      (error) => {
        if (error != null) {
          this.alerts.AlertService.addAlert({
            code: "UI0002",
            type: "error",
            ttl: 5,
          } as Alert);
        }
        throw error;
      }
    ).then(() => {
      this.alerts.AlertService.addAlert({
        title: "account-created",
        type: "success",
        ttl: 5,
      } as Alert);
    });
  }

  async loginTotp(credentials: Credentials): Promise<SessionToken> {
    var res = this.post<SessionToken>("/auth/login/totp", credentials, false).catch(
      (error) => {
        if (error != null) {
          this.alerts.AlertService.addAlert({
            code: "UI0001",
            type: "error",
            ttl: 5,
          } as Alert);
        }
        throw error;
      }
    );
    return res;
  }

  
}

export default AuthModule;
