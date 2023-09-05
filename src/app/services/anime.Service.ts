import { Injectable } from '@angular/core';
import { Firestore, collection, doc, getDoc, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Anime {
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
    return new Observable<Anime[]>(observer => {
      getDocs(this.animeCollection)
        .then(animeDocs => {
          const animeData = animeDocs.docs.map(doc => doc.data() as Anime);
          observer.next(animeData);
          observer.complete();
        })
        .catch(error => {
          console.error('Erro ao buscar animes:', error);
          observer.error('Erro ao buscar animes');
        });
    });
  }

  getAnimeDetails(animeId: number): Observable<Anime | null> {
    const animeDoc = doc(this.animeCollection, animeId.toString());
    return new Observable<Anime | null>(observer => {
      getDoc(animeDoc)
        .then(animeSnap => {
          if (animeSnap.exists()) {
            observer.next(animeSnap.data() as Anime);
          } else {
            observer.next(null);
          }
          observer.complete();
        })
        .catch(error => {
          console.error('Erro ao buscar detalhes do anime:', error);
          observer.error('Erro ao buscar detalhes do anime');
        });
    });
  }
}
