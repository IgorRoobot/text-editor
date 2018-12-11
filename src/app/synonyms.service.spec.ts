import { TestBed, inject } from '@angular/core/testing';

import { SynonymsService } from './synonyms.service';

describe('SynonymsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SynonymsService]
    });
  });

  it('should be created', inject([SynonymsService], (service: SynonymsService) => {
    expect(service).toBeTruthy();
  }));
});
