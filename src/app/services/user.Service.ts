import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedInUser = {
    id: 1,
    username: 'user123',
    profileImageUrl: 'user123.jpg',
    animeList: [
      { title: 'Attack on Titan', status: 'watched' },
      { title: 'Demon Slayer', status: 'watching' },
      { title: 'One Piece', status: 'pending' }
    ]
  };

  getLoggedInUser() {
    return this.loggedInUser;
  }
}
