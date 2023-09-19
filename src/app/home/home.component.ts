import { Component, OnInit, Inject } from '@angular/core';
import { AnimeService } from '../services/anime.service';
import { ANIME_SERVICE } from '../services/anime-service.token';
import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs/internal/observable/from';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
} )
export class HomeComponent implements OnInit
{
  topAnimes$: Observable<any[]> | undefined;

  constructor (
    @Inject( ANIME_SERVICE ) private animeService: AnimeService,
  ) { }

  ngOnInit (): void
  {
    // Chame o novo método para buscar os top animes
    this.loadTopAnimes();
  }

  // Crie um novo método para buscar os top animes
  private loadTopAnimes (): void
  {
    // Use o operador 'from' do RxJS para converter a promessa em um Observable
    this.topAnimes$ = from( this.animeService.getTopRatedAnimes() );
  }
}
