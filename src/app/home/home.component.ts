import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../services/anime.Service'; // Importe o serviço com o caminho correto
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topAnimes$: Observable<any[]> | undefined;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    // Use o operador 'from' do RxJS para converter a promessa em um Observable
    this.topAnimes$ = from(this.animeService.getTopRatedAnimes());
  }
}
