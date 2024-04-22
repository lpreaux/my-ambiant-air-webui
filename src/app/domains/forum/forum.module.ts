import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ForumRoutingModule } from "./forum-routing.module";
import { ForumDashboardPage } from "./pages/forum-dashboard/forum-dashboard.page";
import { TableModule } from "../../ui/table/table.module";
import { HttpClientModule } from "@angular/common/http";
import { ForumThreadProvider } from "./providers/forum-thread.service";
import { ForumPostProvider } from "./providers/forum-post.service";
import { ForumNavbarComponent } from "./components/forum-navbar/forum-navbar.component";
import { ForumLayoutLayout } from "./layouts/forum-layout/forum-layout.layout";
import { ForumCategoriesPage } from "./pages/forum-categories/forum-categories.page";
import { BreadcrumbModule } from "../../ui/breadcrumb/breadcrumb.module";
import { ForumCategoryProvider } from "./providers/forum-category.service";
import { ForumCategoryPage } from "./pages/category/forum-category-page.component";
import { ForumThreadPage } from "./pages/forum-thread/forum-thread.page";
import { CommentPostFormComponent } from "./components/comment-post-form/comment-post-form.component";
import { CommentPostComponent } from "./components/comment-post/comment-post.component";
import { CommentListComponent } from "./components/comment-list/comment-list.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ForumDashboardPage,
    ForumNavbarComponent,
    ForumLayoutLayout,
    ForumCategoriesPage,
    ForumCategoryPage,
    ForumThreadPage,
    CommentPostFormComponent,
    CommentPostComponent,
    CommentListComponent,
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
    HttpClientModule,
    TableModule,
    BreadcrumbModule,
    FormsModule,
  ],
  providers: [ForumCategoryProvider, ForumThreadProvider, ForumPostProvider],
})
export class ForumModule {}
