import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users-service/users.service';
import { User } from '../interfaces/user-interfaces';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  // changeDetection: onPush
})
export class UsersListComponent implements OnInit {
  usersList: User[] = [];
  selectedUser: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList(): void {
    this.userService.getUsersList()
    .subscribe((usersList: any) => {
      this.usersList = usersList;
      // Detect changes. TODO change detect strategy!
    }
    );
  }

  userItemClicked(user: User): void {
    this.selectedUser = user;
  }

}

