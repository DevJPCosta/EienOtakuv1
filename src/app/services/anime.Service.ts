import { Injectable } from '@angular/core';
import { Firestore, collection, doc, getDoc, getDocs, DocumentSnapshot, QuerySnapshot } from '@angular/fire/firestore';
import { DocumentData } from 'firebase/firestore';
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
export class AnimeService {
  private animeCollection = collection(this.firestore, 'animes');

  constructor(private firestore: Firestore) {}

  getTopRatedAnimes(): Observable<Anime[]> {
    try {
      return from(getDocs(this.animeCollection)).pipe(
        map((animeDocs: QuerySnapshot<DocumentData>) => {
          const animes: Anime[] = [];
          animeDocs.forEach((doc) => {
            const animeData = doc.data() as Anime;
            animes.push(animeData);
          });
          return animes;
        })
      );
    } catch (error) {
      console.error('Erro ao buscar animes:', error);
      return of([]); // Retorna um array vazio em caso de erro
    }
  }
  getAnimeDetails ( animeId: number ): Observable<Anime | null>
  {
    try
    {
      const animeDoc = doc( this.animeCollection, animeId.toString() );
      return from( getDoc( animeDoc ) ).pipe(
        map( ( animeSnap: DocumentSnapshot ) =>
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
}
