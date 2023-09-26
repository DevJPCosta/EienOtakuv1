import { InjectionToken } from '@angular/core';
import { AnimeService } from './anime.service';

export const ANIME_SERVICE = new InjectionToken<AnimeService>( 'AnimeService' );
