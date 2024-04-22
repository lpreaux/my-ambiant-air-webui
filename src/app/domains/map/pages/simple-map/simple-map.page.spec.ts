import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMapPage } from './simple-map.page';

describe('SimpleMapPage', () => {
  let component: SimpleMapPage;
  let fixture: ComponentFixture<SimpleMapPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleMapPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
