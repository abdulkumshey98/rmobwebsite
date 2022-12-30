import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbLoginComponent } from './wb-login.component';

describe('WbLoginComponent', () => {
  let component: WbLoginComponent;
  let fixture: ComponentFixture<WbLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
