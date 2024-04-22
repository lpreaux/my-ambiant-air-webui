import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  GoogleSigninButtonModule,
  SocialAuthServiceConfig,
  SocialLoginModule,
} from "@abacritt/angularx-social-login";
import {
  githubLoginProvider,
  googleLoginProvider,
  microsoftLoginProvider,
} from "./oauth-configs";
import { MainNavBarComponent } from "./core/components/main-nav-bar/main-nav-bar.component";
import { LoginFormComponent } from "./core/components/login-form/login-form.component";
import { MainLayoutComponent } from "./core/layout/main-layout/main-layout.component";
import { SimplePageComponent } from "./core/layout/simple-page/simple-page.component";
import { BackButtonDirective } from "./shared/back-button/back-button.directive";
import { GithubLoginProvider } from "./oauth/github-login-provider";
import { HttpClientModule } from "@angular/common/http";
import { GithubRedirectHandleComponent } from "./oauth/github-redirect-handle.component";

@NgModule({
  declarations: [
    AppComponent,
    MainNavBarComponent,
    LoginFormComponent,
    MainLayoutComponent,
    SimplePageComponent,
    GithubRedirectHandleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    HttpClientModule,
    BackButtonDirective,
  ],
  providers: [
    {
      provide: GithubLoginProvider,
      useFactory: () =>
        new GithubLoginProvider("baca2d7c8a29a0de3e4f", {
          clientSecret: "abefc1ec8faa5602da5c8f4f5724aac7628a3c4f",
        }),
    },
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: true,
        providers: [
          googleLoginProvider,
          githubLoginProvider,
          microsoftLoginProvider,
        ],
        onError: console.error,
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
