import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from '@shared/models/card.model';

@Component({
  selector: 'app-card-preview',
  imports: [RouterLink],
  templateUrl: './card-preview.component.html',
  styleUrl: './card-preview.component.scss',
})
export class CardPreviewComponent {
  card = input.required<Card>();
}
