import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbMobileBrandsComponent } from './wb-mobile-brands.component';

describe('WbMobileBrandsComponent', () => {
  let component: WbMobileBrandsComponent;
  let fixture: ComponentFixture<WbMobileBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbMobileBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbMobileBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
