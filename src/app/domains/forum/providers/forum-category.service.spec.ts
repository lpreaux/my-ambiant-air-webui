import { TestBed } from "@angular/core/testing";

import { ForumCategoryProvider } from "./forum-category.service";

describe("CategoryService", () => {
  let service: ForumCategoryProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumCategoryProvider);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
