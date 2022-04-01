import { TestBed } from '@angular/core/testing';

import { EstadioService } from './estadio.service';

describe('EstadioService', () => {
  let service: EstadioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
