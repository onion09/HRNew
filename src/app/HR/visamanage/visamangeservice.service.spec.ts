import { TestBed } from '@angular/core/testing';

import { VisamangeserviceService } from './visamangeservice.service';

describe('VisamangeserviceService', () => {
  let service: VisamangeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisamangeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
