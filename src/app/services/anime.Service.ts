import { Injectable } from '@angular/core';
import
{
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
  DocumentSnapshot,
  where,
  query,
  orderBy,
} from '@angular/fire/firestore';
import { QuerySnapshot, DocumentData } from 'firebase/firestore';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

interface Anime
{
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
}

@Injectable()
export class AnimeService
{
  private animeCollection = collection( this.firestore, 'animes' );

  constructor ( private firestore: Firestore ) { }

  getTopRatedAnimes (): Observable<Anime[]>
  {
    try
    {
      const animeQuery = query( this.animeCollection, orderBy( 'rating', 'desc' ) );

      return from( getDocs( animeQuery ) ).pipe(
        map( ( animeDocs: QuerySnapshot<DocumentData | unknown> ) =>
        {
          const animes: Anime[] = [];
          animeDocs.forEach( ( doc ) =>
          {
            const animeData = doc.data() as Anime;
            animes.push( animeData );
          } );
          return animes;
        } )
      );
    } catch ( error )
    {
      console.error( 'Erro ao buscar os animes:', error );
      return of( [] ); // Retorna um array vazio em caso de erro
    }
  }

  getAnimeDetails ( animeId: number ): Observable<Anime | null>
  {
    try
    {
      const animeDoc = doc( this.animeCollection, animeId.toString() );
      return from( getDoc( animeDoc ) ).pipe(
        map( ( animeSnap: DocumentSnapshot<DocumentData | unknown> ) =>
        {
          if ( animeSnap.exists() )
          {
            return animeSnap.data() as Anime;
          } else
          {
            return null;
          }
        } )
      );
    } catch ( error )
    {
      console.error( 'Erro ao buscar detalhes do anime:', error );
      return of( null ); // Retorna nulo em caso de erro
    }
  }

  // Método para buscar animes com base nos filtros de gênero e nota
  filterAnimesByGenreAndRating ( genre: string, minRating: number ): Observable<Anime[]>
  {
    try
    {
      const animeQuery = query(
        this.animeCollection,
        where( 'genre', '==', genre ),
        where( 'rating', '>=', minRating )
      );

      return from( getDocs( animeQuery ) ).pipe(
        map( ( animeDocs: QuerySnapshot<DocumentData | unknown> ) =>
        {
          const animes: Anime[] = [];
          animeDocs.forEach( ( doc ) =>
          {
            const animeData = doc.data() as Anime;
            animes.push( animeData );
          } );
          return animes;
        } )
      );
    } catch ( error )
    {
      console.error( 'Erro ao filtrar os animes:', error );
      return of( [] ); // Retorna um array vazio em caso de erro
    }
  }

  // Método para buscar animes por nome
  searchAnimesByName ( searchQuery: string ): Observable<Anime[]>
  {
    try
    {
      const animeQuery = query(
        this.animeCollection,
        where( 'title', '==', searchQuery )
      );

      return from( getDocs( animeQuery ) ).pipe(
        map( ( animeDocs: QuerySnapshot<DocumentData | unknown> ) =>
        {
          const animes: Anime[] = [];
          animeDocs.forEach( ( doc ) =>
          {
            const animeData = doc.data() as Anime;
            animes.push( animeData );
          } );
          return animes;
        } )
      );
    } catch ( error )
    {
      console.error( 'Erro ao buscar animes por nome:', error );
      return of( [] ); // Retorna um array vazio em caso de erro
    }
  }



  // Método para buscar todos os animes (sem filtros)
  getAllAnimes (): Observable<Anime[]>
  {
    try
    {
      return from( getDocs( this.animeCollection ) ).pipe(
        map( ( animeDocs: QuerySnapshot<DocumentData | unknown> ) =>
        {
          const animes: Anime[] = [];
          animeDocs.forEach( ( doc ) =>
          {
            const animeData = doc.data() as Anime;
            animes.push( animeData );
          } );
          return animes;
        } )
      );
    } catch ( error )
    {
      console.error( 'Erro ao buscar todos os animes:', error );
      return of( [] ); // Retorna um array vazio em caso de erro
    }
  }
}
