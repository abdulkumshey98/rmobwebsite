import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbYourOrdersComponent } from './wb-your-orders.component';

describe('WbYourOrdersComponent', () => {
  let component: WbYourOrdersComponent;
  let fixture: ComponentFixture<WbYourOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbYourOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbYourOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
