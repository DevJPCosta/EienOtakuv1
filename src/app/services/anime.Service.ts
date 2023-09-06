import { Injectable } from '@angular/core';
import { Firestore, collection, doc, getDoc, getDocs, DocumentSnapshot, QuerySnapshot } from '@angular/fire/firestore';
import { Observable, of, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

interface Anime {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
}

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private animeCollection = collection(this.firestore, 'animes');

  constructor(private firestore: Firestore) {}

  getTopRatedAnimes(): Observable<Anime[]> {
    return from(getDocs(this.animeCollection)).pipe(
      map((animeDocs: QuerySnapshot) => animeDocs.docs.map((doc) => doc.data() as Anime)),
      catchError((error) => {
        console.error('Erro ao buscar animes:', error);
        return of([]); // Retorna um array vazio em caso de erro
      })
    );
  }

  getAnimeDetails(animeId: number): Observable<Anime | null> {
    const animeDoc = doc(this.animeCollection, animeId.toString());
    return from(getDoc(animeDoc)).pipe(
      map((animeSnap: DocumentSnapshot) => {
        if (animeSnap.exists()) {
          return animeSnap.data() as Anime;
        } else {
          return null;
        }
      }),
      catchError((error) => {
        console.error('Erro ao buscar detalhes do anime:', error);
        return of(null); // Retorna nulo em caso de erro
      })
    );
  }
}
