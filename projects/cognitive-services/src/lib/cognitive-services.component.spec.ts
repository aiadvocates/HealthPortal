import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitiveServicesComponent } from './cognitive-services.component';

describe('CognitiveServicesComponent', () => {
  let component: CognitiveServicesComponent;
  let fixture: ComponentFixture<CognitiveServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CognitiveServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CognitiveServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
