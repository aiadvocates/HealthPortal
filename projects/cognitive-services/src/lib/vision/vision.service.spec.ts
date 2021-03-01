import { TestBed } from '@angular/core/testing';

import { VisionService } from './vision.service';

describe('VisionService', () => {
  let service: VisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
