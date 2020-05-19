import { TestBed } from '@angular/core/testing';

import { FetchListService } from './fetch-list.service';

describe('FetchListService', () => {
  let service: FetchListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
