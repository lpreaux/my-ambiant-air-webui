import { Component, inject, OnInit, signal } from "@angular/core";
import { Category } from "../../models/category";
import { ActivatedRoute, Router } from "@angular/router";
import { ForumCategoryProvider } from "../../providers/forum-category.service";
import { TableOptions } from "../../../../ui/table/table.component";
import { Thread } from "../../models/thread";
import { Page } from "../../../../types/page";

@Component({
  selector: "app-forum-category",
  templateUrl: "./forum-category-page.component.html",
})
export class ForumCategoryPage implements OnInit {
  category?: Category;
  notFound = false;
  tableOptions: TableOptions = {
    columns: [{ name: "Thread", field: "title" }],
    elementList: "threadDtoList",
  };
  paginatedThreads = signal<Page<Thread> | undefined>(undefined);

  private _categoryProvider = inject(ForumCategoryProvider);
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);

  ngOnInit() {
    const categoryKey = this._route.snapshot.paramMap.get("key");
    if (!categoryKey) {
      this.notFound = true;
      return;
    }
    this._categoryProvider.getByKey(categoryKey).subscribe(category => {
      this.category = category;
    });
    this._categoryProvider
      .getPaginatedThreads(categoryKey)
      .subscribe(this.paginatedThreads.set);
  }

  onPageSelected($event: "first" | "prev" | "next" | "last") {
    console.log($event);
    let newPage;
    switch ($event) {
      case "first":
        newPage = 0;
        break;
      case "prev":
        newPage = this.paginatedThreads()!.page.number - 1;
        break;
      case "next":
        newPage = this.paginatedThreads()!.page.number + 1;
        break;
      case "last":
        newPage = this.paginatedThreads()!.page.totalPages - 1;
    }
    this._categoryProvider
      .getPaginatedThreads(this.category!.key, newPage)
      .subscribe(this.paginatedThreads.set);
  }

  onThreadSelected(thread: Thread) {
    console.log(this._route);
    this._router.navigate([
      "/",
      "forum",
      "categories",
      this.category!.key,
      thread.id,
    ]);
  }
}
