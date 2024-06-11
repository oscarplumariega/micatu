import { TestBed } from '@angular/core/testing';

import { MicatuService } from './micatu.service';

describe('MicatuService', () => {
  let service: MicatuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicatuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
