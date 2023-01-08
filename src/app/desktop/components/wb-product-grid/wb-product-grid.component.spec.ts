import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbProductGridComponent } from './wb-product-grid.component';

describe('WbProductGridComponent', () => {
  let component: WbProductGridComponent;
  let fixture: ComponentFixture<WbProductGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbProductGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbProductGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
