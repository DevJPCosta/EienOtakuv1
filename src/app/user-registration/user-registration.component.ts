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

  constructor(private fb: FormBuilder, private router: Router) {
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
      // Lógica de registro aqui (enviar para um serviço de autenticação, por exemplo)
      // Após o registro, você pode redirecionar para a página do usuário
      this.router.navigate(['/user']);
    }
  }
}
