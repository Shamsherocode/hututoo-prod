import { TestBed } from '@angular/core/testing';

import { CanDeacticateGuard } from './can-deacticate.guard';

describe('CanDeacticateGuard', () => {
  let guard: CanDeacticateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeacticateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
