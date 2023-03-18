import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbImageQuestionComponent } from './wb-image-question.component';

describe('WbImageQuestionComponent', () => {
  let component: WbImageQuestionComponent;
  let fixture: ComponentFixture<WbImageQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbImageQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbImageQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
