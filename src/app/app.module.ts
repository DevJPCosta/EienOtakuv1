import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomeComponent } from './home/home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

// Importações do Firebase
import { FirebaseApp, provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { Auth, provideAuth, getAuth } from '@angular/fire/auth';
import { Firestore, provideFirestore, getFirestore } from '@angular/fire/firestore';
import { Storage, provideStorage, getStorage } from '@angular/fire/storage';
import { FirebaseOptions } from 'firebase/app';

import { ServicesModule } from './services/services.module';
import { environment } from 'src/environments/environment';
import { AnimeService } from './services/anime.Service';
import { ANIME_SERVICE } from './services/anime-service.token';
import { AuthService } from './services/auth.service'; // Importe o serviço de autenticação

@NgModule( {
  declarations: [
    AppComponent,
    AnimeDetailsComponent,
    UserProfileComponent,
    UserRegistrationComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesModule,
  ],
  providers: [
    {
      provide: 'FirebaseConfig',
      useValue: environment.firebase as FirebaseOptions,
    },
    {
      provide: FirebaseApp,
      useFactory: () =>
      {
        return initializeFirebaseApp( environment.firebase );
      },
    },
    {
      provide: Auth,
      useFactory: () =>
      {
        const auth = getAuth();
        return auth;
      },
    },
    {
      provide: Firestore,
      useFactory: () =>
      {
        const firestore = getFirestore();
        return firestore;
      },
    },
    {
      provide: Storage,
      useFactory: () =>
      {
        const storage = getStorage();
        return storage;
      },
    },
    { provide: ANIME_SERVICE, useClass: AnimeService },
    AuthService,
    AnimeService,
  ],
  bootstrap: [ AppComponent ],
} )
export class AppModule { }

// Função para inicializar o aplicativo Firebase
function initializeFirebaseApp ( firebase: FirebaseOptions )
{
  return initializeApp( firebase );
}
