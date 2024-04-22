import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BreadcrumbComponent } from "./breadcrumb.component";
import { RouterModule } from "@angular/router";
import { BreadcrumbService } from "./breadcrumb.service";
import { BackButtonDirective } from "../../shared/back-button/back-button.directive";

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [CommonModule, RouterModule, BackButtonDirective],
  providers: [BreadcrumbService],
  exports: [BreadcrumbComponent],
})
export class BreadcrumbModule {}
