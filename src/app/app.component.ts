import { Component, OnInit } from '@angular/core';
import { AnimeService } from './services/anime.Service'; // Substitua pelo caminho real para o AnimeService
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  topAnimes$: Observable<any[]> | undefined;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.topAnimes$ = from(this.animeService.getTopRatedAnimes());
  }
}
