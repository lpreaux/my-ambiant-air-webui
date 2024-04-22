import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Page } from "../../../types/page";
import { Category } from "../models/category";
import { Thread } from "../models/thread";

@Injectable()
export class ForumCategoryProvider {
  private _http = inject(HttpClient);

  getPaginated(page?: number): Observable<Page<Category>> {
    const options = page ? { params: new HttpParams().set("page", page) } : {};
    const baseUrl = "http://localhost:8080/categories";
    return this._http.get<Page<Category>>(baseUrl, options);
  }

  getByKey(key: string) {
    const url = `http://localhost:8080/categories/${key}`;
    return this._http.get<Category>(url);
  }

  getPaginatedThreads(key: string, page?: number) {
    const options = page ? { params: new HttpParams().set("page", page) } : {};
    const url = `http://localhost:8080/categories/${key}/threads`;
    return this._http.get<Page<Thread>>(url, options);
  }
}
