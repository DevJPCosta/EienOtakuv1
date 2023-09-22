import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../services/anime.service';
import { ANIME_SERVICE } from '../services/anime-service.token';

@Component( {
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: [ './anime-details.component.css' ],
} )
export class AnimeDetailsComponent implements OnInit
{
  anime: any;
  selectedGenre: string = '';
  selectedRating: number = 0;
  searchQuery: string = '';

  constructor (
    @Inject( ANIME_SERVICE ) private animeService: AnimeService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit (): Promise<void>
  {
    const animeId = this.route.snapshot.paramMap.get( 'id' );

    if ( animeId )
    {
      this.anime = await this.animeService.getAnimeDetails( animeId ); // Mantenha animeId como string
      if ( !this.anime )
      {
        console.error( 'Anime não encontrado.' );
      }
    } else
    {
      console.error( 'ID do anime não fornecido.' );
    }
  }

  applyFilters (): void
  {
    // Certifique-se de que o AnimeService tenha um método adequado para filtrar os animes
    // com base no gênero e na classificação. O código abaixo é um exemplo genérico.

    this.animeService
      .filterAnimesByGenreAndRating( this.selectedGenre, this.selectedRating )
      .subscribe( ( animes ) =>
      {
        this.anime = animes;
      } );
  }

  searchAnime (): void
  {
    // Chame o serviço para buscar animes com base na consulta de pesquisa
    this.animeService.searchAnimesByName( this.searchQuery ).subscribe( ( animes ) =>
    {
      this.anime = animes;
    } );
  }

  resetFilters (): void
  {
    this.selectedGenre = '';
    this.selectedRating = 0;
    this.searchQuery = '';

    // Chame o serviço para buscar todos os animes (sem filtros)
    this.animeService.getAllAnimes().subscribe( ( animes ) =>
    {
      this.anime = animes;
    } );
  }
}
