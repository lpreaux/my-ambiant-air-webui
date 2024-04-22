import {
  Component,
  inject,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from "@angular/core";
import { TableOptions } from "../../../../ui/table/table.component";
import { ForumCategoryProvider } from "../../providers/forum-category.service";
import { Page } from "../../../../types/page";
import { toSignal } from "@angular/core/rxjs-interop";
import { Category } from "../../models/category";
import { Router } from "@angular/router";

@Component({
  selector: "app-forum-categories",
  templateUrl: "./forum-categories.page.html",
})
export class ForumCategoriesPage implements OnInit {
  private _categoryProvider = inject(ForumCategoryProvider);
  private _router = inject(Router);
  tableOptions: TableOptions = {
    columns: [
      { name: "Name", field: "name" },
      { name: "Count", field: "totalThreads" },
    ],
    elementList: "categoryDtoList",
  };
  paginatedCategories: WritableSignal<Page<Category> | undefined> =
    signal(undefined);

  ngOnInit() {
    this._categoryProvider
      .getPaginated()
      .subscribe(this.paginatedCategories.set);
  }

  onPageSelected($event: "first" | "prev" | "next" | "last") {
    console.log($event);
    let newPage;
    switch ($event) {
      case "first":
        newPage = 0;
        break;
      case "prev":
        newPage = this.paginatedCategories()!.page.number - 1;
        break;
      case "next":
        newPage = this.paginatedCategories()!.page.number + 1;
        break;
      case "last":
        newPage = this.paginatedCategories()!.page.totalPages - 1;
    }
    this._categoryProvider
      .getPaginated(newPage)
      .subscribe(this.paginatedCategories.set);
  }

  onCategorySelected(category: Category) {
    this._router.navigate(["/", "forum", "categories", category.key]);
  }
}
