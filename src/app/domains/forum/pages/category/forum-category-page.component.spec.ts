import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ForumCategoryPage } from "./forum-category-page.component";

describe("CategoryPage", () => {
  let component: ForumCategoryPage;
  let fixture: ComponentFixture<ForumCategoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForumCategoryPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ForumCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
