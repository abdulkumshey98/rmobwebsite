import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbSavedPaymentsComponent } from './wb-saved-payments.component';

describe('WbSavedPaymentsComponent', () => {
  let component: WbSavedPaymentsComponent;
  let fixture: ComponentFixture<WbSavedPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbSavedPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbSavedPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
