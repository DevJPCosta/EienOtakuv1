import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app'; // Importe a biblioteca firebase desta forma

@Injectable( {
  providedIn: 'root',
} )
export class FirebaseService
{
  constructor (
    private afAuth: AngularFireAuth,
    private afFirestore: AngularFirestore,
    private afStorage: AngularFireStorage
  ) { }

  // Métodos do serviço Firebase

  // Exemplo de método de autenticação
  async signIn ( email: string, password: string ): Promise<any>
  {
    try
    {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return userCredential.user;
    } catch ( error )
    {
      console.error( 'Erro ao fazer login:', error );
      throw error;
    }
  }

  // Exemplo de método para obter um documento do Firestore
  getDocument ( collectionName: string, documentId: string ): Observable<any>
  {
    return this.afFirestore
      .doc( `${collectionName}/${documentId}` )
      .get()
      .pipe( ( docSnapshot: any ) =>
      {
        if ( docSnapshot.exists )
        {
          return docSnapshot.data();
        } else
        {
          console.error( 'Documento não encontrado.' );
          return null;
        }
      } );
  }

  // Adicione outros métodos conforme necessário para sua aplicação Firebase.
}
