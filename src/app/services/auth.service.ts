import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs/internal/Observable';

@Injectable( {
  providedIn: 'root',
} )
export class AuthService
{
  constructor ( private afAuth: AngularFireAuth ) { }

  // Método para fazer login
  async login ( email: string, password: string ): Promise<any>
  {
    try
    {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return userCredential.user;
    } catch ( error )
    {
      console.error( 'Erro ao fazer login:', error );
      throw error;
    }
  }

  // Método para fazer logout
  async logout (): Promise<void>
  {
    try
    {
      await this.afAuth.signOut();
    } catch ( error )
    {
      console.error( 'Erro ao fazer logout:', error );
      throw error;
    }
  }


  // Outros métodos relacionados à autenticação podem ser adicionados aqui

  // Por exemplo, um método para verificar se o usuário está autenticado
  isAuthenticated (): boolean
  {
    return !!this.afAuth.currentUser;
  }
  getCurrentUser (): Observable<any>
  {
    return this.afAuth.authState;
  }
}
