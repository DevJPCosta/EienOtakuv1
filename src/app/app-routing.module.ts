import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'anime/:id', component: AnimeDetailsComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'register', component: UserRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
