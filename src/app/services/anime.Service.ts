import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private topRatedAnimes = [
    {
      id: 1,
      title: 'My Hero Academia',
      description: 'A story of young heroes in a world of superpowers...',
      imageUrl: 'my-hero-academia.jpg',
      rating: 4.8
    },
    // ... mais animes
  ];

  getTopRatedAnimes() {
    return this.topRatedAnimes;
  }

  getAnimeDetails(animeId: number) {
    return this.topRatedAnimes.find(anime => anime.id === animeId);
  }
}
