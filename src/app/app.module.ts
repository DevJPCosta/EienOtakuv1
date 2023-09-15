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
import { AngularFireModule } from '@angular/fire/compat'; // Importe AngularFireModule
import { FirebaseOptions } from 'firebase/app';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { ServicesModule } from './services/services.module';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { firebaseConfig } from '../environments/environment.firebase';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

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
    ReactiveFormsModule,
    ServicesModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFirestoreModule,
    provideFirebaseApp( () => initializeApp( environment.firebase ) ),
    provideAuth( () => getAuth() ),
    provideFirestore( () => getFirestore() ),
    provideStorage( () => getStorage() ),
  ],
  providers: [
    {
      provide: 'FirebaseConfig',
      useValue: environment.firebase as FirebaseOptions,
    },
  ],
  bootstrap: [ AppComponent ],
} )
export class AppModule { }
