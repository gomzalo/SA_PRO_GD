import { TestBed } from '@angular/core/testing';

import { AmbosGuard } from './ambos.guard';

describe('AmbosGuard', () => {
  let guard: AmbosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AmbosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
