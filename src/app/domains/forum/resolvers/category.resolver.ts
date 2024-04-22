import { ResolveFn } from "@angular/router";
import { inject } from "@angular/core";
import { ForumCategoryProvider } from "../providers/forum-category.service";
import { Category } from "../models/category";

export const categoryResolver: ResolveFn<Category> = route => {
  const categoryProvider = inject(ForumCategoryProvider);
  const key = route.paramMap.get("key");
  return categoryProvider.getByKey(key ? key : "");
};
