import { TestBed } from '@angular/core/testing';

import { CognitiveServicesService } from './cognitive-services.service';

describe('CognitiveServicesService', () => {
  let service: CognitiveServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CognitiveServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
