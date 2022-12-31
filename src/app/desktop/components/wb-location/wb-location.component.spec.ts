import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbLocationComponent } from './wb-location.component';

describe('WbLocationComponent', () => {
  let component: WbLocationComponent;
  let fixture: ComponentFixture<WbLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
