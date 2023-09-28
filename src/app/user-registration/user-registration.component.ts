import { UserService } from '../services/user.Service'; // Certifique-se de que o caminho esteja correto
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: [ './user-registration.component.css' ]
} )
export class UserRegistrationComponent
{
  registrationForm: FormGroup;
  registrationError: string = ''; // Adicione esta propriedade para armazenar mensagens de erro

  constructor (
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  )
  {
    this.registrationForm = this.fb.group( {
      username: [ '', Validators.required ],
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ )
        ]
      ],
      confirmPassword: [ '', Validators.required ],
      userId: [ '', [ Validators.required, Validators.minLength( 3 ), Validators.maxLength( 16 ) ] ]
    }, { validators: this.passwordsMatchValidator() } );
  }

  registerUser ()
  {
    if ( this.registrationForm.valid )
    {
      const username = this.registrationForm.get( 'username' )?.value;
      const email = this.registrationForm.get( 'email' )?.value;
      const password = this.registrationForm.get( 'password' )?.value;
      const confirmPassword = this.registrationForm.get( 'confirmPassword' )?.value;

      this.userService.registerUser( username, email, password, confirmPassword ).subscribe(
        ( success ) =>
        {
          if ( success )
          {
            // Registro bem-sucedido, redirecione para a página do usuário
            this.router.navigate( [ '/user' ] );
          } else
          {
            // Registro falhou, defina uma mensagem de erro
            this.registrationError = 'O registro falhou. Por favor, verifique suas informações.';
          }
        },
        ( error ) =>
        {
          // Manipule erros aqui, se necessário
          this.registrationError = 'O registro falhou. Por favor, tente novamente mais tarde.';
        }
      );
    }
  }

  // Validador personalizado para verificar se as senhas coincidem
  private passwordsMatchValidator (): ValidatorFn
  {
    return ( control: AbstractControl ): { [ key: string ]: any; } | null =>
    {
      const password = control.get( 'password' );
      const confirmPassword = control.get( 'confirmPassword' );
      return password && confirmPassword && password.value !== confirmPassword.value
        ? { passwordMismatch: true }
        : null;
    };
  }
}
