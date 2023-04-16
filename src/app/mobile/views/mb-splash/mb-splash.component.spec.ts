import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbSplashComponent } from './mb-splash.component';

describe('MbSplashComponent', () => {
  let component: MbSplashComponent;
  let fixture: ComponentFixture<MbSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
