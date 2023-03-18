import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbBodyDefectsComponent } from './wb-body-defects.component';

describe('WbBodyDefectsComponent', () => {
  let component: WbBodyDefectsComponent;
  let fixture: ComponentFixture<WbBodyDefectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbBodyDefectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbBodyDefectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
