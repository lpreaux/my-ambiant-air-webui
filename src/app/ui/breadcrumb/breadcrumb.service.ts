import { Injectable, Signal } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter, distinctUntilChanged, map } from "rxjs/operators";
import { toSignal } from "@angular/core/rxjs-interop";

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

@Injectable()
export class BreadcrumbService {
  public items$: Signal<BreadcrumbItem[] | undefined>;

  constructor(router: Router, route: ActivatedRoute) {
    this.items$ = toSignal(
      router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        distinctUntilChanged(),
        map(() => this._buildBreadCrumb(route.root))
      )
    );
  }

  private _buildBreadCrumb(
    route: ActivatedRoute,
    url: string = "",
    breadcrumbs: BreadcrumbItem[] = []
  ): BreadcrumbItem[] {
    const newBreadcrumbs = [...breadcrumbs];
    const path = route.snapshot.url.map(segment => segment.path).join("/");

    const nextUrl = `${url}/${path}`.replace("//", "/");

    if (
      route.routeConfig &&
      route.routeConfig.data &&
      route.routeConfig.data["breadcrumb"]
    ) {
      let data = "";

      if (route.routeConfig.data["breadcrumb"][0] === "@") {
        route.routeConfig.data["breadcrumb"]
          .split(".")
          .forEach((level: string, index: number) => {
            if (index === 0) {
              data = route.snapshot.data[level.substring(1)];
            } else {
              data = data ? (data as any)[level] : null;
            }
          });
      } else {
        data = route.routeConfig.data["breadcrumb"];
      }

      newBreadcrumbs.push({
        label: data,
        path: nextUrl,
      });
    }

    if (route.firstChild) {
      return this._buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }

    return newBreadcrumbs;
  }
}
