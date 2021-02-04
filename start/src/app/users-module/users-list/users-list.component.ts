import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users-service/users.service';
import { User } from '../../interfaces/user-interfaces';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {
  usersList: User[] = [];
  selectedUser: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList(): void {
    this.userService.getUsersList()
    .subscribe((usersList: any) => {
      console.log('usersList', typeof usersList, usersList);
      this.usersList = usersList;
      this.ref.markForCheck();
    }
    );
  }

  userItemClicked(user: User): void {
    this.selectedUser = user;
    this.ref.detectChanges();
  }

}

