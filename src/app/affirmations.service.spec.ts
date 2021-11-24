import { TestBed } from '@angular/core/testing';

import { AffirmationsService } from './affirmations.service';

describe('AffirmationsService', () => {
  let service: AffirmationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffirmationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
