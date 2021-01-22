import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../interfaces/user-interfaces';


@Component({
  selector: 'app-user-list-card',
  templateUrl: './user-list-card.component.html',
  styleUrls: ['./user-list-card.component.scss']
})
export class UserListCardComponent implements OnInit {
  @Input()  selectedUser: User | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
