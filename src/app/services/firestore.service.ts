import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, throwError, timer } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root',
} )
export class FirestoreService
{
  constructor ( private firestore: AngularFirestore ) { }

  getDocumentWithTimeout (): Promise<any>
  {
    const documentRef = this.firestore.collection( 'suaColecao' ).doc( 'seuDocumento' ).ref;

    // Defina o tempo limite em milissegundos (5 segundos)
    const timeoutMillis = 5000;

    // Crie um observable que será usado para o tempo limite
    const timeout$ = timer( timeoutMillis );

    // Use switchMap para executar a consulta Firestore e o tempo limite em paralelo
    return from( documentRef.get() ).pipe(
      switchMap( ( doc ) =>
      {
        if ( doc.exists )
        {
          return Promise.resolve( doc.data() );
        } else
        {
          return Promise.reject( new Error( 'Documento não encontrado' ) );
        }
      } ),
      catchError( ( error ) =>
      {
        // Trate o erro de tempo limite aqui
        if ( error.name === 'TimeoutError' )
        {
          return throwError( new Error( 'Tempo limite excedido' ) );
        } else
        {
          return throwError( error );
        }
      } )
    )
      .toPromise();
  }
}
