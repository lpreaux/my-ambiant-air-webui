import { TestBed } from "@angular/core/testing";

import { ForumThreadProvider } from "./forum-thread.service";

describe("ForumThreadService", () => {
  let service: ForumThreadProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumThreadProvider);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
