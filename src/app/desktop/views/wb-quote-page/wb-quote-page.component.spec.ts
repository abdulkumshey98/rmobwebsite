import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbQuotePageComponent } from './wb-quote-page.component';

describe('WbQuotePageComponent', () => {
  let component: WbQuotePageComponent;
  let fixture: ComponentFixture<WbQuotePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbQuotePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbQuotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
