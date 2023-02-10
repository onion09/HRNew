import { TestBed } from '@angular/core/testing';

import { VisamangeservicecoService } from './visamangeserviceco.service';

describe('VisamangeserviceService', () => {
  let service: VisamangeservicecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisamangeservicecoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
