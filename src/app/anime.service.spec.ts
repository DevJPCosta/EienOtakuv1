import { TestBed } from '@angular/core/testing';

import { AnimeService } from './services/anime.Service';

describe('AnimeService', () => {
  let service: AnimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
