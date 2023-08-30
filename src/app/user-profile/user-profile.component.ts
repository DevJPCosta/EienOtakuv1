import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Importe o serviço que gerencia os usuários

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: any = {}; // Objeto para armazenar os detalhes do usuário

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Ao inicializar o componente, obtenha os detalhes do usuário logado
    this.user = this.userService.getLoggedInUser();
  }
}
