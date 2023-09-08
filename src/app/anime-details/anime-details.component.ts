import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../services/anime.Service'; // Importe o AnimeService aqui
import { ANIME_SERVICE } from '../services/anime-service.token';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {
  anime: any;

  constructor(
    @Inject(ANIME_SERVICE) private animeService: AnimeService, // Injete o AnimeService usando o token do anime
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    const animeId = this.route.snapshot.paramMap.get('id');

    if (animeId) {
      this.anime = await this.animeService.getAnimeDetails(+animeId);
      if (!this.anime) {
        console.error('Anime não encontrado.');
      }
    } else {
      console.error('ID do anime não fornecido.');
    }
  }
}
