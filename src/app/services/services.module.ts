import { NgModule } from '@angular/core';
import { AnimeService } from './anime.Service'; // Importe seus serviços aqui
import { UserService } from './user.Service'; // Importe seus serviços aqui

@NgModule({
  providers: [AnimeService, UserService], // Adicione seus serviços aqui
})
export class ServicesModule {}
