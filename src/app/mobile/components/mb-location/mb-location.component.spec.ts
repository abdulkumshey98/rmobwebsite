import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbLocationComponent } from './mb-location.component';

describe('MbLocationComponent', () => {
  let component: MbLocationComponent;
  let fixture: ComponentFixture<MbLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
