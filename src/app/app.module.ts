import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeService } from '../app/services/anime.service';
import { ANIME_SERVICE } from '../app/services/anime-service.token';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomeComponent } from './home/home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { FirestoreService } from './services/firestore.service'; // Atualize o caminho conforme necessário

// Importações do Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import { environment } from 'src/environments/environment';
import { Firestore } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';

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
  ],
  providers: [
    {
      provide: ANIME_SERVICE,
      useClass: AnimeService,
    },

    {
      provide: 'FirebaseConfig',
      useValue: environment.firebase,
    },
    // Inicialize o Firebase diretamente, não é necessário o AngularFireModule
    {
      provide: Auth,
      useFactory: () => createAuthService(),
    },
    {
      provide: Firestore,
      useFactory: () => createFirestoreService(),
    },
    {
      provide: Storage,
      useFactory: () => createStorageService(),
    },
    Auth,
    FirestoreService,

  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }

// Função para criar o serviço Auth após a inicialização do Firebase
function createAuthService ()
{
  const firebaseApp = initializeApp( environment.firebase );
  const auth = getAuth( firebaseApp );
  return auth;
}

// Função para criar o serviço Firestore após a inicialização do Firebase
function createFirestoreService ()
{
  const firebaseApp = initializeApp( environment.firebase );
  const firestore = getFirestore( firebaseApp );
  return firestore;
}

// Função para criar o serviço Storage após a inicialização do Firebase
function createStorageService ()
{
  const firebaseApp = initializeApp( environment.firebase );
  const storage = getStorage( firebaseApp );
  return storage;
}
