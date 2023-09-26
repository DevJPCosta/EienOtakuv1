import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserService {
  private loggedInUser: any;

  constructor() {
    this.loggedInUser = null;
  }

  registerUser(username: string, email: string, password: string, confirmPassword: string): Observable<boolean> {
    if (password !== confirmPassword) {
      return of(false); // Senha e confirmação de senha não são iguais
    }

    // Realize as validações adicionais necessárias, como verificar se o nome de usuário e o email já estão em uso

    // Simule o cadastro do usuário (substitua isso por chamadas reais)
    this.loggedInUser = {
      id: 1,
      username: username,
      email: email,
      profileImageUrl: 'user123.jpg',
      animeList: []
    };

    return of(true); // Cadastro bem-sucedido
  }

  loginUser(username: string, password: string): Observable<boolean> {
    // Verifique se o usuário já está logado
    if (this.isLoggedIn()) {
      return of(true); // Usuário já está logado
    }

    // Realize as validações de login, como verificar se o nome de usuário e senha correspondem

    // Simule a verificação de credenciais (substitua isso por chamadas reais)
    if (username === 'user123' && password === 'password123') {
      this.loggedInUser = {
        id: 1,
        username: username,
        email: 'user123@example.com',
        profileImageUrl: 'user123.jpg',
        animeList: []
      };
      return of(true); // Login bem-sucedido
    } else {
      return of(false); // Credenciais inválidas
    }
  }

  logoutUser(): void {
    this.loggedInUser = null;
  }

  isLoggedIn(): boolean {
    return this.loggedInUser !== null;
  }

  getLoggedInUser(): Observable<any> {
    return of(this.loggedInUser); // Simplesmente retorna o usuário logado (pode ser vazio se não estiver logado)
  }

  markAnime(anime: string, status: string): Observable<void> {
    if (!this.isLoggedIn()) {
      return of(); // Não é possível marcar um anime se o usuário não estiver logado
    }

    // Realize as validações e lógica adicionais para marcar o anime para o usuário logado
    // Por exemplo, verifique se o anime já está marcado ou se o status é válido

    // Simule a marcação do anime (substitua isso por chamadas reais)
    this.loggedInUser.animeList.push({ title: anime, status: status });
    return of(); // Marcação bem-sucedida
  }

  getMarkedAnimes(): Observable<any[]> {
    if (!this.isLoggedIn()) {
      return of([]); // Se nenhum usuário estiver logado, retorne uma lista vazia
    }

    return of(this.loggedInUser.animeList); // Simplesmente retorna a lista de animes marcados pelo usuário
  }
}
