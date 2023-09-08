import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomeComponent } from './home/home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

// Importações do Firebase
import { FirebaseApp, FirebaseOptions } from '@angular/fire/app';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth, Auth } from '@angular/fire/auth';
import { provideFirestore, getFirestore, Firestore } from '@angular/fire/firestore';
import { provideStorage, getStorage, Storage } from '@angular/fire/storage';

import { ServicesModule } from './services/services.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AnimeDetailsComponent,
    UserProfileComponent,
    UserRegistrationComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServicesModule,
  ],
  providers: [
    {
      provide: Auth,
      useFactory: () => {
        const auth = getAuth();
        return auth;
      },
    },
    {
      provide: Firestore,
      useFactory: () => {
        const firestore = getFirestore();
        return firestore;
      },
    },
    {
      provide: Storage,
      useFactory: () => {
        const storage = getStorage();
        return storage;
      },
    },  {
      provide: FirebaseApp,
      useFactory: () => {
        return initializeFirebaseApp(environment.firebase);
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function initializeFirebaseApp(firebaseOptions: FirebaseOptions): FirebaseApp {
  return initializeApp(firebaseOptions);
}

