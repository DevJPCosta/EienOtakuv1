import { TestBed } from '@angular/core/testing';

import { AnimeServiceTsService } from './anime.service.ts.service';

describe('AnimeServiceTsService', () => {
  let service: AnimeServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
