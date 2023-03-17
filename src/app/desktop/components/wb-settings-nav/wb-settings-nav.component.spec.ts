import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbSettingsNavComponent } from './wb-settings-nav.component';

describe('WbSettingsNavComponent', () => {
  let component: WbSettingsNavComponent;
  let fixture: ComponentFixture<WbSettingsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbSettingsNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbSettingsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
