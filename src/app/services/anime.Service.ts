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

  async getTopRatedAnimes(): Promise<Anime[]> {
    try {
      const animeDocs = await getDocs(this.animeCollection);
      return animeDocs.docs.map(doc => doc.data() as Anime);
    } catch (error) {
      console.error('Erro ao buscar animes:', error);
      return [];
    }
  }

  async getAnimeDetails(animeId: number): Promise<Anime | null> {
    try {
      const animeDoc = doc(this.animeCollection, animeId.toString());
      const animeSnap = await getDoc(animeDoc);
      if (animeSnap.exists()) {
        return animeSnap.data() as Anime;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Erro ao buscar detalhes do anime:', error);
      return null;
    }
  }
}
