import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  markedAnimes = [
    { title: 'Anime Marcado 1' },
    { title: 'Anime Marcado 2' },
    // ... outros animes marcados
  ];
}
