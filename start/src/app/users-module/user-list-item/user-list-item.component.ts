import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../interfaces/user-interfaces';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {
  @Input()  user: User | undefined;
  @Output() userItemClicked = new EventEmitter<User>();

  constructor() {}

  ngOnInit(): void {}

  clickUserItem(user: User): void {
    this.userItemClicked.emit(user);
  }
}
