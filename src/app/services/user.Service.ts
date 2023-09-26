import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { Firestore, doc, getDoc, DocumentSnapshot, DocumentData } from 'firebase/firestore';
import { User } from 'firebase/auth';
import { catchError, map } from 'rxjs/operators';
import { Auth, getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Importe as funções necessárias do Firebase Auth
import { initializeApp } from 'firebase/app'; // Importe a função initializeApp
import { firebaseConfig } from 'src/environments/environment.firebase'; // Importe sua configuração do Firebase

@Injectable()
export class UserService
{
  private loggedInUser: any | null = null;

  constructor ( private firestore: Firestore )
  {
    // Inicialize o Firebase aqui conforme seu ambiente
    const app = initializeApp( firebaseConfig ); // Inicialize o Firebase com sua configuração
    const auth = getAuth( app ); // Certifique-se de inicializar o Firebase Auth corretamente
  }

  getLoggedInUser (): Observable<any | null>
  {
    return of( this.loggedInUser );
  }

  logoutUser (): Observable<void>
  {
    this.loggedInUser = null;
    return of();
  }

  isLoggedIn (): boolean
  {
    return !!this.loggedInUser;
  }

  markAnime ( anime: string, status: string ): Observable<boolean>
  {
    if ( !this.isLoggedIn() )
    {
      return of( false );
    }

    // Implemente a lógica de marcação de anime aqui, incluindo validações se necessário

    if ( !this.loggedInUser.animeList )
    {
      this.loggedInUser.animeList = [];
    }

    this.loggedInUser.animeList.push( { title: anime, status: status } );
    return of( true );
  }

  getMarkedAnimes (): Observable<any[]>
  {
    if ( !this.isLoggedIn() )
    {
      return of( [] );
    }

    return of( this.loggedInUser.animeList || [] );
  }

  private getUserData ( uid: string ): Observable<any>
  {
    const userRef = doc( this.firestore, 'users', uid );

    return from( getDoc( userRef ) ).pipe(
      map( ( docSnapshot: DocumentSnapshot<DocumentData> ) =>
      {
        if ( docSnapshot.exists() )
        {
          return docSnapshot.data();
        } else
        {
          return null;
        }
      } ),
      catchError( ( error ) =>
      {
        console.error( 'Erro ao obter dados do usuário:', error );
        return of( null );
      } )
    );
  }

  // Adicione aqui a lógica para registrar um usuário com Firebase Authentication
  registerUser (
    username: any,
    email: any,
    password: any,
    confirmPassword: any
  ): Observable<boolean>
  {
    // Implemente a lógica de registro aqui, incluindo validações
    if ( password !== confirmPassword )
    {
      return of( false ); // Senhas não coincidem, retornar false
    }

    // Substitua o seguinte trecho pela implementação real de registro no Firebase
    return this.createUserWithEmailAndPassword( email, password ).pipe(
      catchError( ( error ) =>
      {
        console.error( 'Erro no registro:', error );
        return of( false ); // Registro falhou, retorne false
      } )
    );
  }

  private createUserWithEmailAndPassword (
    email: string,
    password: string
  ): Observable<boolean>
  {
    const auth = getAuth(); // Obtenha a instância de autenticação do Firebase

    return from( createUserWithEmailAndPassword( auth, email, password ) ).pipe(
      map( ( userCredential ) =>
      {
        // Faça algo com o usuário registrado, se necessário
        return true; // Registro bem-sucedido, retorne true
      } ),
      catchError( ( error ) =>
      {
        console.error( 'Erro no registro:', error );
        return of( false ); // Registro falhou, retorne false
      } )
    );
  }
}
