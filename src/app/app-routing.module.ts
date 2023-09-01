import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'anime/:id', component: AnimeDetailsComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'register', component: UserRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

