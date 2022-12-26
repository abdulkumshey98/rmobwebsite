import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbHomeComponent } from './mb-home.component';

describe('MbHomeComponent', () => {
  let component: MbHomeComponent;
  let fixture: ComponentFixture<MbHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
