import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbTopNavComponent } from './mb-top-nav.component';

describe('MbTopNavComponent', () => {
  let component: MbTopNavComponent;
  let fixture: ComponentFixture<MbTopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbTopNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
