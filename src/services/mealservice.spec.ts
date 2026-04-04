import { TestBed } from '@angular/core/testing';

import { Mealservice } from './mealservice';

describe('Mealservice', () => {
  let service: Mealservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mealservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
