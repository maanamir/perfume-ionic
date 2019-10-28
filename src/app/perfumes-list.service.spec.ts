import { TestBed } from '@angular/core/testing';

import { PerfumesListService } from './perfumes-list.service';

describe('PerfumesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerfumesListService = TestBed.get(PerfumesListService);
    expect(service).toBeTruthy();
  });
});
