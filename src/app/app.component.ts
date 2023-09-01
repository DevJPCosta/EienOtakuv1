import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topAnimes = [
    { title: 'Anime 1', description: 'Descrição do Anime 1', image: 'URL_da_imagem' },
    { title: 'Anime 2', description: 'Descrição do Anime 2', image: 'URL_da_imagem' },
    // ... outros animes
  ];
}
