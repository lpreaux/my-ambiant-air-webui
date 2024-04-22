import {
  Component,
  effect,
  inject,
  Input,
  signal,
  WritableSignal,
} from "@angular/core";
import { Thread } from "../../models/thread";
import { ForumThreadProvider } from "../../providers/forum-thread.service";
import { Post } from "../../models/post";
import { ForumPostProvider } from "../../providers/forum-post.service";

@Component({
  selector: "app-forum-thread",
  templateUrl: "./forum-thread.page.html",
})
export class ForumThreadPage {
  thread: WritableSignal<Thread | undefined> = signal(undefined);
  posts: WritableSignal<Post[] | undefined> = signal(undefined);

  private _threadProvider = inject(ForumThreadProvider);
  private _postProvider = inject(ForumPostProvider);

  private _requestPostEffect = effect(() => {
    const thread = this.thread();
    if (thread) {
      this._postProvider.getByThread(thread).subscribe(this.posts.set);
    }
  });

  @Input()
  set threadId(id: number) {
    this._threadProvider.getOne(id).subscribe(this.thread.set);
  }

  OnMessageSubmitted(message: string) {
    const post: Partial<Post> = {
      message,
    };
    this._threadProvider.createOnePost(this.thread()!, post).subscribe();
  }
}
