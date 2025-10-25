import { Component, input } from '@angular/core';
import { Card } from '@shared/models/card.model';

@Component({
  selector: 'app-card-info',
  imports: [],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss',
})
export class CardInfoComponent {
  card = input.required<Card>();
}
