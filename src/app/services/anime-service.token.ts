import { InjectionToken } from '@angular/core';
import { AnimeService } from './anime.Service';

export const ANIME_SERVICE = new InjectionToken<AnimeService>( 'AnimeService' );
