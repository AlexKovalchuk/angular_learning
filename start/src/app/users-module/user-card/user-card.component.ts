import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users-service/users.service';
import { User } from '../../interfaces/user-interfaces';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  userCard: User | null = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get('userId'));
    this.getUserCard(userIdFromRoute);
  }
  getUserCard(id: number): void {
    this.userService.getUserCard(id)
      .subscribe((userCard: any) => {
        this.userCard = userCard;
        }
      );
  }

}
