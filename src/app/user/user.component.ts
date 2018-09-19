import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns = ['id', 'username', 'salary', 'age'];
  dataSource = new MatTableDataSource<User>();

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data: any) => {
        this.dataSource.data = data;
      }
    );
  }

}
