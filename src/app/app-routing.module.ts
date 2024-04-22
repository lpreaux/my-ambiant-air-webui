import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainLayoutComponent } from "./core/layout/main-layout/main-layout.component";
import { LoginFormComponent } from "./core/components/login-form/login-form.component";
import { SimplePageComponent } from "./core/layout/simple-page/simple-page.component";
import { GithubRedirectHandleComponent } from "./oauth/github-redirect-handle.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: MainLayoutComponent,
  },
  {
    path: "map",
    loadChildren: () =>
      import("./domains/map/map.module").then(m => m.MapModule),
  },
  {
    path: "forum",
    component: MainLayoutComponent,
    loadChildren: () =>
      import("./domains/forum/forum.module").then(m => m.ForumModule),
  },
  { path: "github/redirect", component: GithubRedirectHandleComponent },
  {
    path: "",
    component: SimplePageComponent,
    children: [{ path: "login", component: LoginFormComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
