import { TestBed, inject } from '@angular/core/testing';

import { SynonymsService } from './synonyms.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('SynonymsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SynonymsService]
    });
  });

  it('should be created', inject([SynonymsService], (service: SynonymsService) => {
    expect(service).toBeTruthy();
  }));

});
