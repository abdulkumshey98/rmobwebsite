import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbOtpComponent } from './wb-otp.component';

describe('WbOtpComponent', () => {
  let component: WbOtpComponent;
  let fixture: ComponentFixture<WbOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
