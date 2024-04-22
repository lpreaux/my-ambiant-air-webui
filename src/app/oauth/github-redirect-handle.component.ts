import { Component, inject, Input, OnInit } from "@angular/core";
import { GithubLoginProvider } from "./github-login-provider";
import { Router } from "@angular/router";

@Component({
  selector: "app-github-redirect-handle",
  template: "",
})
export class GithubRedirectHandleComponent implements OnInit {
  @Input({ alias: "code", required: true }) ghCode!: string;
  @Input({ alias: "state", required: true }) ghRequestState!: string;

  private _ghLoginProvider = inject(GithubLoginProvider);
  private _router = inject(Router);
  ngOnInit() {
    this._ghLoginProvider
      .fetchAccessToken(this.ghCode, this.ghRequestState)
      .finally(() => this._router.navigate(["/"]));
  }
}
