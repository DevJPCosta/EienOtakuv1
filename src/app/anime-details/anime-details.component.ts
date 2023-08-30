import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../services/anime.Service'; // Importe o serviço que obtém informações dos animes

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss']
})
export class AnimeDetailsComponent implements OnInit {
  anime: any = {}; // Objeto para armazenar os detalhes do anime

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService
  ) { }

  ngOnInit(): void {
    // Ao inicializar o componente, obtenha o ID do anime da rota e carregue seus detalhes
    const animeId = this.route.snapshot.paramMap.get('id');
    this.anime = this.animeService.getAnimeDetails(animeId);
  }
}
