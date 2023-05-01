import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbSearchProductsComponent } from './mb-search-products.component';

describe('MbSearchProductsComponent', () => {
  let component: MbSearchProductsComponent;
  let fixture: ComponentFixture<MbSearchProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbSearchProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbSearchProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
