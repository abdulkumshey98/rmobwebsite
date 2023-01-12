import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbStartQuestionComponent } from './wb-start-question.component';

describe('WbStartQuestionComponent', () => {
  let component: WbStartQuestionComponent;
  let fixture: ComponentFixture<WbStartQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbStartQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbStartQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
