import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumCategoriesPage } from './forum-categories.page';

describe('ForumCategoriesPage', () => {
  let component: ForumCategoriesPage;
  let fixture: ComponentFixture<ForumCategoriesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForumCategoriesPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForumCategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
