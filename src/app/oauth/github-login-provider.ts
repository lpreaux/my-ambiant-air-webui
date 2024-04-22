/** @type @octokit/oauth-authorization-url/oauthAuthorizationUrl */
import { BaseLoginProvider, SocialUser } from "@abacritt/angularx-social-login";
import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CustomBaseLoginProvider } from "./custom-base-login-provider";

export interface GithubInitOptions {
  clientSecret: string;
}

type OAuthAppOptions = {
  clientId: string;

  clientType?: "oauth-app";
  allowSignup?: boolean;
  login?: string;
  scopes?: string | string[];
  redirectUrl?: string;
  state?: string;
  baseUrl?: string;
};

type OAuthAppResult = {
  allowSignup: boolean;
  clientId: string;
  clientType: "oauth-app";
  login: string | null;
  redirectUrl: string | null;
  scopes: string[];
  state: string;
  url: string;
};

declare let oauthAuthorizationUrl: (options: OAuthAppOptions) => OAuthAppResult;

declare global {
  interface Window {
    oauthAuthorizationUrl: (options: OAuthAppOptions) => OAuthAppResult;
  }
}

Injectable();
export class GithubLoginProvider extends CustomBaseLoginProvider {
  public static readonly PROVIDER_ID = "GITHUB" as const;
  private readonly AUTHORIZE_URL =
    "https://github.com/login/oauth/authorize" as const;

  private _http = inject(HttpClient);

  constructor(
    private clientId: string,
    private initOptions?: GithubInitOptions
  ) {
    super();
  }

  private _getSocialUser(loginResponse: OAuthAppResult): SocialUser {
    console.log(loginResponse);
    throw "null";
  }

  override initialize(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.loadModule(
        GithubLoginProvider.PROVIDER_ID,
        "https://esm.sh/@octokit/oauth-authorization-url",
        ["oauthAuthorizationUrl"],
        () => {
          oauthAuthorizationUrl = window.oauthAuthorizationUrl as (
            options: OAuthAppOptions
          ) => OAuthAppResult;
        }
      );
      resolve();
    });
  }
  override getLoginStatus(): Promise<SocialUser> {
    return Promise.reject();
  }
  override signIn(): Promise<SocialUser> {
    return new Promise((resolve, reject) => {
      const result = oauthAuthorizationUrl({
        clientType: "oauth-app",
        clientId: this.clientId,
        redirectUrl: "http://localhost:4200/github/redirect",
        scopes: [],
      });
      window.open(result.url, "_self");
      reject();
    });
  }
  override signOut(revoke?: boolean | undefined): Promise<void> {
    return Promise.reject();
  }

  fetchAccessToken(
    ghCode: string,
    ghRequestState: string
  ): Promise<SocialUser> {
    const url = "https://github.com/login/oauth/access_token";
    this._http
      .post(url, {
        client_id: this.clientId,
        client_secret: this.initOptions!.clientSecret,
        code: ghCode,
        redirect_uri: "http://localhost:4200",
      })
      .subscribe(console.log);
    return Promise.reject();
  }
}
