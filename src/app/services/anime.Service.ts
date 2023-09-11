import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Anime } from './anime.model';

@Injectable()
export class AnimeService
{
  private animeCollection: AngularFirestoreCollection<Anime>;

  constructor ( private firestore: AngularFirestore )
  {
    this.animeCollection = firestore.collection<Anime>( 'animes' );
  }

  getTopRatedAnimes (): Observable<Anime[]>
  {
    try
    {
      return this.animeCollection.valueChanges( { idField: 'id' } ).pipe(
        // Resto do código
      );
    } catch ( error )
    {
      console.error( 'Erro ao buscar animes:', error );
      return of( [] ); // Retorna um array vazio em caso de erro
    }
  }

  getAnimeDetails ( animeId: number ): Observable<Anime | null>
  {
    const animeDoc: AngularFirestoreDocument<Anime> = this.animeCollection.doc<Anime>( animeId.toString() );

    return animeDoc.valueChanges().pipe(
      map( ( animeData: Anime | undefined ) => animeData || null ),
      catchError( ( error: any ) =>
      {
        console.error( 'Erro ao buscar detalhes do anime:', error );
        return of( null ); // Retorna null em caso de erro
      } )
    );
  }
}
