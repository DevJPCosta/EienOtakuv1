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
import { FirebaseApp, provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth, Auth } from '@angular/fire/auth';
import { provideFirestore, getFirestore, Firestore } from '@angular/fire/firestore';
import { provideStorage, getStorage, Storage } from '@angular/fire/storage';
import { FirebaseOptions } from 'firebase/app';

import { ServicesModule } from './services/services.module';
import { environment } from 'src/environments/environment';
<<<<<<< HEAD
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { firebaseConfig } from '../environments/environment.firebase';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
=======
import { firebaseConfig } from '../environments/environment.firebase';
>>>>>>> parent of f5e1a6a (erros de versão)

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
<<<<<<< HEAD
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFirestoreModule,
    provideFirebaseApp( () => initializeApp( environment.firebase ) ),
    provideAuth( () => getAuth() ),
    provideFirestore( () => getFirestore() ),
    provideStorage( () => getStorage() ),
=======
>>>>>>> parent of f5e1a6a (erros de versão)
  ],
  providers: [
    {
      provide: 'FirebaseConfig',
      useValue: environment.firebase as FirebaseOptions,
    },
    {
      provide: FirebaseApp,
      useFactory: () => {
        return initializeFirebaseApp(environment.firebase);
      }
    },
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
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function initializeFirebaseApp ( firebase: { projectId: string; appId: string; storageBucket: string; locationId: string; apiKey: string; authDomain: string; messagingSenderId: string; measurementId: string; } )
{
  throw new Error( 'Function not implemented.' );
}

