import { Injectable } from "@angular/core";
import { Page } from "../../../types/page";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Thread } from "../models/thread";
import { Observable } from "rxjs";
import { Post } from "../models/post";

@Injectable()
export class ForumThreadProvider {
  constructor(private http: HttpClient) {}

  getPaginated(page?: number): Observable<Page<Thread>> {
    const options = page ? { params: new HttpParams().set("page", page) } : {};
    const baseUrl = "http://localhost:8080/threads";
    return this.http.get<Page<Thread>>(baseUrl, options);
  }

  getOne(id: number) {
    const url = `http://localhost:8080/threads/${id}`;
    return this.http.get<Thread>(url);
  }

  createOnePost(thread: Thread, post: Partial<Post>) {
    const url = `http://localhost:8080/threads/${thread.id}/comments`;
    return this.http.post<null>(url, post, { withCredentials: true });
  }
}
