import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbPricingComponent } from './wb-pricing.component';

describe('WbPricingComponent', () => {
  let component: WbPricingComponent;
  let fixture: ComponentFixture<WbPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbPricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
