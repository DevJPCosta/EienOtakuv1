import { NgModule } from '@angular/core';
import { ANIME_SERVICE } from './anime-service.token';
import { AnimeService } from './anime.service';
import { USER_SERVICE } from './user-service.token';
import { UserService } from './user.Service'; // Corrigi a importação do UserService
import { FIREBASE_AUTH } from './firebase-auth.token';
import { Auth } from '@angular/fire/auth';

@NgModule( {
  providers: [
    { provide: ANIME_SERVICE, useClass: AnimeService },
    { provide: USER_SERVICE, useClass: UserService },
    { provide: FIREBASE_AUTH, useValue: Auth },
    // ... outros provedores
  ],
} )
export class ServicesModule { }
