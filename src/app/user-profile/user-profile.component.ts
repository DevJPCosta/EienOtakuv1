import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.Service'; // Corrigi a importação do UserService
import { Observable } from 'rxjs';

@Component( {
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: [ './user-profile.component.css' ]
} )
export class UserProfileComponent implements OnInit
{
  loggedInUser: any | null = null;
  markedAnimes$: Observable<any[]> | null = null;

  constructor ( private userService: UserService ) { }

  ngOnInit (): void
  {
    this.userService.getLoggedInUser().subscribe( ( user ) =>
    {
      this.loggedInUser = user;
    } );

    this.markedAnimes$ = this.userService.getMarkedAnimes();
  }
}
