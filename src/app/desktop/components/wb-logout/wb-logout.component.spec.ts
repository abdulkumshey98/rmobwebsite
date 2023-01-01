import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbLogoutComponent } from './wb-logout.component';

describe('WbLogoutComponent', () => {
  let component: WbLogoutComponent;
  let fixture: ComponentFixture<WbLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
