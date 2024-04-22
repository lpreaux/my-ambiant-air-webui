import { Component, inject, OnInit } from "@angular/core";
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { first } from "rxjs";
import { Router } from "@angular/router";
import { GithubLoginProvider } from "../../../oauth/github-login-provider";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
})
export class LoginFormComponent implements OnInit {
  private _socialAuthService = inject(SocialAuthService);
  private _router = inject(Router);

  ngOnInit() {
    this._socialAuthService.authState
      .pipe(first(user => user != null))
      .subscribe(() => this._router.navigate(["/"]));
  }

  signInWithGithub() {
    this._socialAuthService.signIn(GithubLoginProvider.PROVIDER_ID);
  }
}
