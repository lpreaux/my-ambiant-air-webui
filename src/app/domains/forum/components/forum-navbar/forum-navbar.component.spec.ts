import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumNavbarComponent } from './forum-navbar.component';

describe('ForumNavbarComponent', () => {
  let component: ForumNavbarComponent;
  let fixture: ComponentFixture<ForumNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForumNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForumNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
