import {Component, Input} from '@angular/core';
import {Card} from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls:  ['./card.component.scss'],
  interpolation: ['{{', '}}']
})
export class CardComponent {
  @Input() card: Card;
  @Input() index: number;

  title = 'My Card Title';
  text = 'My sample text';
  textColor: string;
  cardDate: Date = new Date();

  imgUrl = 'https://pria.digital/img/skill/5.png';

  getInfo(): string {
    return 'this is my info';
  }

  changeTitle(): void {
    this.card.title = 'this title has been changed';
  }

  inputHandler(value: string): void {
    // const value = event.target.value;
    this.card.title = value;
  }

  changeHandler(): void {
    console.log(this.card.title);

  }
}
