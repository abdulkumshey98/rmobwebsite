import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbNavbarComponent } from './wb-navbar.component';

describe('WbNavbarComponent', () => {
  let component: WbNavbarComponent;
  let fixture: ComponentFixture<WbNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
