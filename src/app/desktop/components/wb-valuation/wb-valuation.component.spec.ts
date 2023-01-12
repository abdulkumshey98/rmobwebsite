import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbValuationComponent } from './wb-valuation.component';

describe('WbValuationComponent', () => {
  let component: WbValuationComponent;
  let fixture: ComponentFixture<WbValuationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbValuationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbValuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
