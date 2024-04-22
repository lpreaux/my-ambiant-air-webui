import { TestBed } from "@angular/core/testing";

import { ForumPostProvider } from "./forum-post.service";

describe("ForumPostProviderService", () => {
  let service: ForumPostProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumPostProvider);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
