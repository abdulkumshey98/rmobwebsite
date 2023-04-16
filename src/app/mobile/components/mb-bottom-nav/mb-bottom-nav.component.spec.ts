import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbBottomNavComponent } from './mb-bottom-nav.component';

describe('MbBottomNavComponent', () => {
  let component: MbBottomNavComponent;
  let fixture: ComponentFixture<MbBottomNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbBottomNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbBottomNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
