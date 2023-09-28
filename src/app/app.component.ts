import { Component } from '@angular/core';
import { AuthService } from './services/auth.service'; // Importe o AuthService

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent
{
  title = 'EienOtaku';

  constructor ( private authService: AuthService ) { } // Injete o AuthService no construtor

  // Método para realizar o login
  async login ( username: string, password: string ): Promise<void>
  {
    const isAuthenticated = await this.authService.login( username, password );

    if ( isAuthenticated )
    {
      // Login bem-sucedido, defina as ações apropriadas, como redirecionar para a página principal
    } else
    {
      // Login falhou, exiba uma mensagem de erro ao usuário
    }
  }

  // Método para realizar o logout
  logout (): void
  {
    this.authService.logout();
    // Após o logout, defina as ações apropriadas, como redirecionar para a página de login
  }

  // Método para verificar se o usuário está logado
  isLoggedIn (): boolean
  {
    return this.authService.isAuthenticated();
  }
}
