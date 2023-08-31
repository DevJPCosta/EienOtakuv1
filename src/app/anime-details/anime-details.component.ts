import { Component } from '@angular/core';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent {
  anime = {
    title: 'Anime Detalhado',
    description: 'Descrição detalhada do anime.',
    image: 'URL_da_imagem',
    releaseDate: '01 de janeiro de 2023',
    // ... outras informações do anime
  };
}
