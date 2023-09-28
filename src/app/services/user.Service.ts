import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserService
{
  private loggedInUser: any | null = null;

  constructor () { }

  // Método de registro de usuário
  registerUser (
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ): Observable<boolean>
  {
    // Validação se a senha e a confirmação de senha são iguais
    if ( password !== confirmPassword )
    {
      return of( false ); // Senha e confirmação de senha não são iguais
    }

    // Registre o usuário (substitua esta lógica pelo seu método real de registro)
    this.loggedInUser = {
      username: username,
      email: email,
      animeList: [], // Inicialmente, a lista de animes marcados está vazia
    };

    return of( true ); // Cadastro bem-sucedido
  }

  // Método de login de usuário
  loginUser ( username: string, password: string ): Observable<boolean>
  {
    // Verifique se o usuário já está logado
    if ( this.isLoggedIn() )
    {
      return of( true ); // Usuário já está logado
    }

    // Valide as credenciais (substitua esta lógica pelo seu método real de autenticação)
    if ( username === 'user123' && password === 'password123' )
    {
      this.loggedInUser = {
        username: username,
        email: 'user@example.com', // Adicione o email real do usuário aqui
        animeList: [], // Inicialmente, a lista de animes marcados está vazia
      };
      return of( true ); // Login bem-sucedido
    } else
    {
      return of( false ); // Credenciais inválidas
    }
  }

  // Método de logout de usuário
  logoutUser (): void
  {
    this.loggedInUser = null;
  }

  // Verifica se o usuário está logado
  isLoggedIn (): boolean
  {
    return this.loggedInUser !== null;
  }

  // Obtém informações do usuário logado
  getLoggedInUser (): Observable<any | null>
  {
    return of( this.loggedInUser );
  }

  // Marca um anime para o usuário logado
  markAnime ( anime: string, status: string ): Observable<void>
  {
    if ( !this.isLoggedIn() )
    {
      return of(); // Não é possível marcar um anime se o usuário não estiver logado
    }

    // Adiciona o anime à lista de animes marcados pelo usuário
    this.loggedInUser.animeList.push( { title: anime, status: status } );
    return of(); // Marcação bem-sucedida
  }

  // Obtém a lista de animes marcados pelo usuário
  getMarkedAnimes (): Observable<any[]>
  {
    if ( !this.isLoggedIn() )
    {
      return of( [] ); // Se nenhum usuário estiver logado, retorne uma lista vazia
    }

    return of( this.loggedInUser.animeList );
  }
}
