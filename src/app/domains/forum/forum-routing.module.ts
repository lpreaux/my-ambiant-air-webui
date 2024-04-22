import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForumDashboardPage } from "./pages/forum-dashboard/forum-dashboard.page";
import { ForumLayoutLayout } from "./layouts/forum-layout/forum-layout.layout";
import { ForumCategoriesPage } from "./pages/forum-categories/forum-categories.page";
import { categoryResolver } from "./resolvers/category.resolver";
import { ForumCategoryPage } from "./pages/category/forum-category-page.component";
import { ForumThreadPage } from "./pages/forum-thread/forum-thread.page";
import { threadResolver } from "./resolvers/thread.resolver";

const routes: Routes = [
  {
    path: "",
    component: ForumLayoutLayout,
    data: { breadcrumb: "Forum" },
    children: [
      {
        path: "",
        pathMatch: "full",
        component: ForumDashboardPage,
      },
      {
        path: "categories",
        data: { breadcrumb: "Categories" },

        children: [
          { path: "", pathMatch: "full", component: ForumCategoriesPage },
          {
            path: ":key",
            resolve: { category: categoryResolver },
            data: { breadcrumb: "@category.name" },
            children: [
              { path: "", pathMatch: "full", component: ForumCategoryPage },
              {
                path: ":threadId",
                component: ForumThreadPage,
                resolve: { thread: threadResolver },
                data: { breadcrumb: "@thread.title" },
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumRoutingModule {}
