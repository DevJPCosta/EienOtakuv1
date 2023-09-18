import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: 'user', component: UserProfileComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'anime', component: AnimeDetailsComponent },
  { path: 'home', component: HomeComponent },

  // Rota padrão redireciona para a página inicial
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Rota para página não encontrada
  { path: '**', component: PaginaNaoEncontradaComponent },
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ],
} )
export class AppRoutingModule { }
