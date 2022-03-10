import { TestBed } from '@angular/core/testing';

import { NgRecaptcha3Service } from './ng-recaptcha3.service';

describe('NgRecaptcha3Service', () => {
  let service: NgRecaptcha3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgRecaptcha3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
