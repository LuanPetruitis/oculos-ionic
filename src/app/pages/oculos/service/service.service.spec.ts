import { TestBed } from '@angular/core/testing';

import { Oculoservice } from './oculos-service';

describe('Oculoservice', () => {
  let service: Oculoservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Oculoservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
