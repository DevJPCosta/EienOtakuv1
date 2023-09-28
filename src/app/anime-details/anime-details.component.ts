import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../services/anime.Service';
import { AuthService } from '../services/auth.service';
import { ANIME_SERVICE } from '../services/anime-service.token';
import { Observable } from 'rxjs';

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
  user: any; // Para armazenar informações do usuário autenticado
  commentText: string = ''; // Para armazenar o texto do comentário
  status: string = ''; // Para armazenar o status de marcação

  constructor (
    private animeService: AnimeService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit (): Promise<void>
  {
    const animeId = this.route.snapshot.paramMap.get( 'id' );

    if ( animeId )
    {
      this.anime = await this.animeService.getAnimeDetails( +animeId );
      if ( !this.anime )
      {
        console.error( 'Anime não encontrado.' );
      }
    } else
    {
      console.error( 'ID do anime não fornecido.' );
    }

    // Recupere informações do usuário autenticado
    this.authService.getCurrentUser().subscribe( ( user ) =>
    {
      this.user = user;
    } );
  }

  markAs ( status: string ): void
  {
    if ( this.user )
    {
      // Chame o serviço para marcar o anime para o usuário autenticado
      this.animeService.markAnime( this.user.uid, this.anime.id, status );
    } else
    {
      console.error( 'Usuário não autenticado.' );
    }
  }

  addComment (): void
  {
    if ( this.user && this.commentText.trim() !== '' )
    {
      // Chame o serviço para adicionar um comentário ao anime
      this.animeService.addComment(
        this.anime.id,
        this.user.uid,
        this.user.displayName,
        this.commentText
      );
      this.commentText = ''; // Limpe o campo de texto após adicionar o comentário
    } else
    {
      console.error( 'Usuário não autenticado ou comentário vazio.' );
    }
  }

  rateAnime ( rating: number ): void
  {
    if ( this.user )
    {
      // Chame o serviço para avaliar o anime
      this.animeService.rateAnime( this.anime.id, this.user.uid, rating );
    } else
    {
      console.error( 'Usuário não autenticado.' );
    }
  }

  applyFilters (): void
  {
    // Chame o serviço para buscar os animes com base nos filtros selecionados (gênero e nota)
    // Atualize this.anime com os resultados
    // Lembre-se de que você deve criar um método no AnimeService para buscar animes com base nos filtros
    this.animeService
      .filterAnimesByGenreAndRating( this.selectedGenre, this.selectedRating )
      .subscribe( ( animes ) =>
      {
        this.anime = animes;
      } );
  }

  searchAnime (): void
  {
    // Chame o serviço para buscar os animes com base na consulta de pesquisa
    this.animeService.searchAnimesByName( this.searchQuery ).subscribe( ( animes ) =>
    {
      this.anime = animes;
    } );
  }

  resetFilters (): void
  {
    this.selectedGenre = '';
    this.selectedRating = 0; // Redefina para o valor padrão, por exemplo, 0
    this.searchQuery = '';
    // Chame o serviço para buscar todos os animes (sem filtros)
    this.animeService.getAllAnimes().subscribe( ( animes ) =>
    {
      this.anime = animes;
    } );
  }
}
