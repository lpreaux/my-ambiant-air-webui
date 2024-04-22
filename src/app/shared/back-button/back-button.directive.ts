import {
  booleanAttribute,
  Directive,
  HostListener,
  inject,
  Input,
} from "@angular/core";
import { NavigationService } from "../../navigation-service.service";
import { ActivatedRoute, Router } from "@angular/router";

@Directive({
  selector: "[appBackButton]",
  standalone: true,
})
export class BackButtonDirective {
  private navigation = inject(NavigationService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  @Input({ transform: booleanAttribute }) useBrowserHistory = false;

  @HostListener("click")
  onClick(): void {
    if (this.useBrowserHistory) {
      this.navigation.back();
    } else {
      this.router.navigate([".."], { relativeTo: this.route.firstChild });
    }
  }
}
