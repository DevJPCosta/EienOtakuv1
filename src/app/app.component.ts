import { Component } from '@angular/core';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent
{
  title = 'EienOtaku'; // Atualize o título da sua aplicação, se necessário
  isLoggedIn = false; // Adicionamos esta propriedade para controlar o status de login

  // Método para simular o login do usuário
  login ()
  {
    // Aqui você pode adicionar a lógica real de login, por exemplo, verificar credenciais e definir a propriedade isLoggedIn
    // Neste exemplo, apenas definimos isLoggedIn como true para simular o login
    this.isLoggedIn = true;
  }

  // Método para simular o logout do usuário
  logout ()
  {
    // Aqui você pode adicionar a lógica real de logout, por exemplo, limpar as informações do usuário e definir a propriedade isLoggedIn como false
    // Neste exemplo, apenas definimos isLoggedIn como false para simular o logout
    this.isLoggedIn = false;
  }
}
