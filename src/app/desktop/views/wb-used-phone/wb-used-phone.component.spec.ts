import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbUsedPhoneComponent } from './wb-used-phone.component';

describe('WbUsedPhoneComponent', () => {
  let component: WbUsedPhoneComponent;
  let fixture: ComponentFixture<WbUsedPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbUsedPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbUsedPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
