import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbEditProfileComponent } from './wb-edit-profile.component';

describe('WbEditProfileComponent', () => {
  let component: WbEditProfileComponent;
  let fixture: ComponentFixture<WbEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
