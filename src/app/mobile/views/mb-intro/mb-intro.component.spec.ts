import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbIntroComponent } from './mb-intro.component';

describe('MbIntroComponent', () => {
  let component: MbIntroComponent;
  let fixture: ComponentFixture<MbIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
