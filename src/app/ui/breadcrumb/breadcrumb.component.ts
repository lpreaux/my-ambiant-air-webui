import { Component, effect, inject, Input } from "@angular/core";
import { BreadcrumbService } from "./breadcrumb.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
})
export class BreadcrumbComponent {
  @Input() root = "/";

  breadcrumbService = inject(BreadcrumbService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  isBackButtonInvisible!: boolean;

  constructor() {
    effect(() => {
      const items = this.breadcrumbService.items$();
      const root = this.root.concat("/").replaceAll("//", "/");
      this.isBackButtonInvisible =
        items != undefined && root === items[items.length - 1].path;
    });
  }

  back() {
    this.router.navigate(["../forum"], { relativeTo: this.route.firstChild });
  }
}
