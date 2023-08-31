import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.Service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  loggedInUser: any; // Armazena o usuário logado
  markedAnimes: any[] = []; // Armazena os animes marcados pelo usuário

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loggedInUser = this.userService.getLoggedInUser();
    this.markedAnimes = this.userService.getMarkedAnimes();
  }
}
