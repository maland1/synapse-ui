import { Component } from '@angular/core';
import { CardPreviewComponent } from '@features/cards/components/card-preview/card-preview.component';
import { Card } from '@shared/models/card.model';

@Component({
  selector: 'app-card-list',
  imports: [CardPreviewComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  cards: Card[] = [];
}
