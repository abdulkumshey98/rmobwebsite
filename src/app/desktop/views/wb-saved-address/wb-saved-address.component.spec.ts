import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbSavedAddressComponent } from './wb-saved-address.component';

describe('WbSavedAddressComponent', () => {
  let component: WbSavedAddressComponent;
  let fixture: ComponentFixture<WbSavedAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbSavedAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbSavedAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
