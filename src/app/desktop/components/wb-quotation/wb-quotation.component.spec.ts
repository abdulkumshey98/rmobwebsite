import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbQuotationComponent } from './wb-quotation.component';

describe('WbQuotationComponent', () => {
  let component: WbQuotationComponent;
  let fixture: ComponentFixture<WbQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbQuotationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
