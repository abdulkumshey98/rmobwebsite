import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbAddNewAddressComponent } from './wb-add-new-address.component';

describe('WbAddNewAddressComponent', () => {
  let component: WbAddNewAddressComponent;
  let fixture: ComponentFixture<WbAddNewAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbAddNewAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbAddNewAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
