import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../services/anime.Service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {
  anime: any;

  constructor(
    private animeService: AnimeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const animeId = this.route.snapshot.paramMap.get('id');

    if (animeId) {
      this.animeService.getAnimeDetails(+animeId).then((anime: any | null) => {
        if (anime) {
          this.anime = anime;
        } else {
          console.error('Anime não encontrado.');
        }
      });
    } else {
      console.error('ID do anime não fornecido.');
    }
  }
}
