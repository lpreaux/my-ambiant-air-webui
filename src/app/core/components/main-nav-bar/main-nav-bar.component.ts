import { Component, inject, OnInit } from "@angular/core";
import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";

@Component({
  selector: "app-main-nav-bar",
  templateUrl: "./main-nav-bar.component.html",
})
export class MainNavBarComponent implements OnInit {
  private _socialAuthService = inject(SocialAuthService);

  user?: SocialUser;

  ngOnInit() {
    this._socialAuthService.authState.subscribe(user => (this.user = user));
  }

  logout() {
    this._socialAuthService.signOut();
  }
}
