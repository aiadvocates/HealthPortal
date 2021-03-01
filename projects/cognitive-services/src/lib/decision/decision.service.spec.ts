import { TestBed } from '@angular/core/testing';

import { DecisionService } from './decision.service';

describe('DecisionService', () => {
  let service: DecisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
