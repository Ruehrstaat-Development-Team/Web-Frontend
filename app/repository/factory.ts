import type { $Fetch, FetchOptions } from "ofetch";

class HttpFactory {
  private $fetch: $Fetch;
  private session = useSession();
  protected alerts = useAlerts();

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  protected async get<T>(
    url: string,
    authenticated: boolean = true,
    options?: object
  ): Promise<T> {
    if (authenticated) {
      await this.checkAndRefreshSession();
    }
    return await this.$fetch(url, {
      method: "GET",
      ...options,
      headers: authenticated
        ? { Authorization: `Bearer ${this.session.token}` }
        : undefined,
    }).catch((error) => {
      this.handleError(error);
    });
  }

  protected async post<T>(
    url: string,
    data: object | null,
    authenticated: boolean = true,
    options?: object
  ): Promise<T> {
    if (authenticated) {
      await this.checkAndRefreshSession();
    }
    return await this.$fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      ...options,
      headers: authenticated
        ? { Authorization: `Bearer ${this.session.token}` }
        : undefined,
    }).catch((error) => {
      this.handleError(error);
    });
  }

  protected async put<T>(
    url: string,
    data: object | null,
    authenticated: boolean = true,
    options?: object
  ): Promise<T> {
    if (authenticated) {
      await this.checkAndRefreshSession();
    }
    return await this.$fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      ...options,
      headers: authenticated
        ? { Authorization: `Bearer ${this.session.token}` }
        : undefined,
    }).catch((error) => {
      this.handleError(error);
    });
  }

  protected async delete<T>(
    url: string,
    data: object | null,
    authenticated: boolean = true,
    options?: object
  ): Promise<T> {
    if (authenticated) {
      await this.checkAndRefreshSession();
    }
    return await this.$fetch(url, {
      method: "DELETE",
      body: JSON.stringify(data),
      ...options,
      headers: authenticated
        ? { Authorization: `Bearer ${this.session.token}` }
        : undefined,
    }).catch((error) => {
      this.handleError(error);
    });
  }

  protected async patch<T>(
    url: string,
    data: object | null,
    authenticated: boolean = true,
    options?: object
  ): Promise<T> {
    if (authenticated) {
      await this.checkAndRefreshSession();
    }
    return await this.$fetch(url, {
      method: "PATCH",
      body: JSON.stringify(data),
      ...options,
      headers: authenticated
        ? { Authorization: `Bearer ${this.session.token}` }
        : undefined,
    }).catch((error) => {
      this.handleError(error);
    });
  }

  protected async head<T>(
    url: string,
    authenticated: boolean = true,
    options?: object
  ): Promise<T> {
    if (authenticated) {
      await this.checkAndRefreshSession();
    }
    return await this.$fetch(url, {
      method: "HEAD",
      ...options,
      headers: authenticated
        ? { Authorization: `Bearer ${this.session.token}` }
        : undefined,
    }).catch((error) => {
      this.handleError(error);
    });
  }

  private async checkAndRefreshSession(): Promise<void> {
    if (!this.session.token) {
      throw new Error("No session token found");
    } else if (new Date(this.session.expiresAt as string) < new Date()) {
      var newToken: SessionToken = await this.post<SessionToken>(
        "/auth/refresh",
        null,
        false
      );
      this.session.setSession(newToken);
    }
  }

  private async handleError(error: any): Promise<void> {
    if (error.data) {
      var err = error.data as RstApiError;
      this.alerts.AlertService.addAlert({
        code: err.code,
        title: "error-title",
        type: "error",
      } as Alert);
      throw null;
    } else {
      throw error;
    }
  }
}

export default HttpFactory;
