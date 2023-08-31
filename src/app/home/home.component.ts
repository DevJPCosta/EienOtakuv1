import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  topAnimes = [
    { title: 'Anime 1', description: 'Descrição do Anime 1', image: 'URL_da_imagem' },
    { title: 'Anime 2', description: 'Descrição do Anime 2', image: 'URL_da_imagem' },
    // ... outros animes
  ];
}
