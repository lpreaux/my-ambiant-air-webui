import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumThreadPage } from './forum-thread.page';

describe('ForumThreadPage', () => {
  let component: ForumThreadPage;
  let fixture: ComponentFixture<ForumThreadPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForumThreadPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForumThreadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
