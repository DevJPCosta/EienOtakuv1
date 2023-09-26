import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root',
} )
export class AnimeService
{
  constructor ( private firestore: AngularFirestore ) { }

  // Método para buscar todos os animes
  getAllAnimes (): Observable<any[]>
  {
    return this.firestore.collection( 'animes' ).valueChanges();
  }

  // Método para buscar detalhes de um anime por ID
  getAnimeDetails ( animeId: string ): Observable<any>
  {
    return this.firestore.collection( 'animes' ).doc( animeId ).valueChanges();
  }

  // Método para filtrar animes por gênero e classificação
  filterAnimesByGenreAndRating ( genre: string, minRating: number ): Observable<any[]>
  {
    return this.firestore.collection( 'animes', ( ref ) =>
      ref.where( 'genre', '==', genre ).where( 'rating', '>=', minRating )
    ).valueChanges();
  }

  // Método para buscar animes por nome
  searchAnimesByName ( searchQuery: string ): Observable<any[]>
  {
    return this.firestore.collection( 'animes', ( ref ) =>
      ref.where( 'title', '==', searchQuery )
    ).valueChanges();
  }

  // Método para buscar os top animes
  getTopRatedAnimes (): Observable<any[]>
  {
    return this.firestore
      .collection( 'animes', ( ref ) => ref.orderBy( 'rating', 'desc' ).limit( 10 ) )
      .valueChanges();
  }
}
