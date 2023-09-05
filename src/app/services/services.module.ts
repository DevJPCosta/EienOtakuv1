import { NgModule } from '@angular/core';
import { AnimeService } from './anime.Service';
import { UserService } from './user.Service';

@NgModule({
  providers: [
    AnimeService,
    UserService
  ]
})
export class ServicesModule { }
