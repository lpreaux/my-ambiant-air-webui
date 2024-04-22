import { ResolveFn } from "@angular/router";
import { inject } from "@angular/core";
import { ForumThreadProvider } from "../providers/forum-thread.service";
import { Thread } from "../models/thread";

export const threadResolver: ResolveFn<Thread> = route => {
  const threadProvider = inject(ForumThreadProvider);
  const id = route.paramMap.get("threadId");
  return threadProvider.getOne(id ? +id : 0);
};
