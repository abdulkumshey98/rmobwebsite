import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbLoginComponent } from './mb-login.component';

describe('MbLoginComponent', () => {
  let component: MbLoginComponent;
  let fixture: ComponentFixture<MbLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
