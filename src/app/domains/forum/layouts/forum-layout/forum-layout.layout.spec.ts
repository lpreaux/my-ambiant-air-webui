import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumLayoutLayout } from './forum-layout.layout';

describe('ForumLayoutLayout', () => {
  let component: ForumLayoutLayout;
  let fixture: ComponentFixture<ForumLayoutLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForumLayoutLayout]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForumLayoutLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
