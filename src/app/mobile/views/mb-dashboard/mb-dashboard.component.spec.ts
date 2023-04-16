import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbDashboardComponent } from './mb-dashboard.component';

describe('MbDashboardComponent', () => {
  let component: MbDashboardComponent;
  let fixture: ComponentFixture<MbDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
