import { inject, Injectable } from "@angular/core";
import { Thread } from "../models/thread";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Post } from "../models/post";

@Injectable()
export class ForumPostProvider {
  private _http = inject(HttpClient);

  getByThread(thread: Thread) {
    const option = {
      params: new HttpParams().set("threadId", thread.id),
    };
    const url = `http://localhost:8080/comments`;
    return this._http.get<Post[]>(url, option);
  }
}
