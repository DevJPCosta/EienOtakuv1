import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private loggedInUser: any;

  constructor() {
    this.loggedInUser = null;
  }

  registerUser(username: string, email: string, password: string, confirmPassword: string): boolean {
    if (password !== confirmPassword) {
      return false; // Senha e confirmação de senha não são iguais
    }

    // Realize as validações adicionais necessárias, como verificar se o nome de usuário e o email já estão em uso

    // Simule o cadastro do usuário
    this.loggedInUser = {
      id: 1,
      username: username,
      email: email,
      profileImageUrl: 'user123.jpg',
      animeList: []
    };

    return true; // Cadastro bem-sucedido
  }

  loginUser(username: string, password: string): boolean {
    // Verifique se o usuário já está logado
    if (this.isLoggedIn()) {
      return true; // Usuário já está logado
    }

    // Realize as validações de login, como verificar se o nome de usuário e senha correspondem

    // Simule a verificação de credenciais
    if (username === 'user123' && password === 'password123') {
      this.loggedInUser = {
        id: 1,
        username: username,
        email: 'user123@example.com',
        profileImageUrl: 'user123.jpg',
        animeList: []
      };
      return true; // Login bem-sucedido
    } else {
      return false; // Credenciais inválidas
    }
  }

  logoutUser(): void {
    this.loggedInUser = null;
  }

  isLoggedIn(): boolean {
    return this.loggedInUser !== null;
  }

  getLoggedInUser(): any {
    return this.loggedInUser;
  }

  markAnime(anime: string, status: string): void {
    if (!this.isLoggedIn()) {
      return; // Não é possível marcar um anime se o usuário não estiver logado
    }

    // Realize as validações e lógica adicionais para marcar o anime para o usuário logado
    // Por exemplo, verifique se o anime já está marcado ou se o status é válido

    // Simule a marcação do anime
    this.loggedInUser.animeList.push({ title: anime, status: status });
  }

  getMarkedAnimes(): any[] {
    if (!this.isLoggedIn()) {
      return []; // Se nenhum usuário estiver logado, retorne uma lista vazia
    }

    return this.loggedInUser.animeList;
  }
}
