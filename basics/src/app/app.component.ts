import { Component } from '@angular/core';
export interface Card {
  title: string;
  text: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle = true;

  cards: Card[] = [
    {title: 'Card 1', text: 'This is card number 1'},
    {title: 'This is Card 2', text: 'This is card number 2'},
    {title: 'This is Card 3', text: 'This is card number 3'},
    {title: 'This is Card 4', text: 'This is card number 4'},
    {title: 'The last Card!', text: 'This is the last card'}
  ];

  toggleCards(): void {
    this.toggle = !this.toggle;
  }
}
