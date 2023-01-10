import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbSellVariantComponent } from './wb-sell-variant.component';

describe('WbSellVariantComponent', () => {
  let component: WbSellVariantComponent;
  let fixture: ComponentFixture<WbSellVariantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbSellVariantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbSellVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
