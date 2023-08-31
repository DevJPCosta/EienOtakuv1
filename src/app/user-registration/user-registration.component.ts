import { UserService } from './../services/user.Service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      confirmPassword: ['', Validators.required],
      userId: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]]
    });
  }

  registerUser() {
    if (this.registrationForm.valid) {
      const username = this.registrationForm.get('username')?.value;
      const email = this.registrationForm.get('email')?.value;
      const password = this.registrationForm.get('password')?.value;
      const confirmPassword = this.registrationForm.get('confirmPassword')?.value;

      if (password !== confirmPassword) {
        this.registrationForm.get('confirmPassword')?.setErrors({ passwordMismatch: true });
        return; // Senha e confirmação de senha não coincidem
      }

      if (this.userService.registerUser(username, email, password, confirmPassword)) {
        // Registro bem-sucedido, redirecione para a página do usuário
        this.router.navigate(['/user']);
      } else {
        // Exiba uma mensagem de erro informando que o registro falhou
      }
    }
  }
}
