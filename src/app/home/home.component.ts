import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../services/anime.Service'; // Importe o serviço que obtém informações dos animes

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topRatedAnimes: any[] = []; // Array para armazenar os animes mais bem avaliados

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    // Ao inicializar o componente, carregue os animes mais bem avaliados
    this.topRatedAnimes = this.animeService.getTopRatedAnimes();
  }
}
