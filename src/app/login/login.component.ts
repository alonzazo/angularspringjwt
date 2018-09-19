import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {AuthService} from '../auth.service';
import {TokenStorage} from '../core/token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, public dialog: MatDialog, private authService: AuthService, private token: TokenStorage) { }

  username: string
  password: string

  login(): void {
    /*if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['user']);
    } else {
      alert('Invalid credentials');
    }*/
    this.authService.attemptAuth(this.username, this.password).subscribe(
      (data: any) => {
        this.token.saveToken(data.token);
        this.router.navigate(['user']);
      }
    );
  }

}
