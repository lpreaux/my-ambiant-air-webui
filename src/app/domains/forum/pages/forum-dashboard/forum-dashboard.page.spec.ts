import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumDashboardPage } from './forum-dashboard.page';

describe('ForumDashboardPage', () => {
  let component: ForumDashboardPage;
  let fixture: ComponentFixture<ForumDashboardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForumDashboardPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForumDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
