import { NgModule } from '@angular/core';
import { ANIME_SERVICE } from './anime-service.token'; // Importe o token do AnimeService aqui
import { AnimeService } from './anime.Service'; // Importe o AnimeService aqui
import { USER_SERVICE } from './user-service.token'; // Crie um novo token para o UserService
import { UserService } from './user.Service'; // Importe o UserService aqui

@NgModule({
  providers: [
    { provide: ANIME_SERVICE, useClass: AnimeService }, // Forneça o serviço AnimeService usando o InjectionToken
    { provide: USER_SERVICE, useClass: UserService }, // Forneça o serviço UserService usando o InjectionToken
    // ... outros provedores
  ],
})
export class ServicesModule {}
