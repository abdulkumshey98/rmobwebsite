import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbAllMobileComponent } from './wb-all-mobile.component';

describe('WbAllMobileComponent', () => {
  let component: WbAllMobileComponent;
  let fixture: ComponentFixture<WbAllMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbAllMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbAllMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
