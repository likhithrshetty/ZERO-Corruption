import { TestBed } from '@angular/core/testing';

import { CorruptionService } from './corruption.service';

describe('CorruptionService', () => {
  let service: CorruptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorruptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
