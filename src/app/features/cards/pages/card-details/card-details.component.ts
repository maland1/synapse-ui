import { httpResource } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '@core/services/card.service';
import { CardInfoComponent } from '@features/cards/components/card-info/card-info.component';
@Component({
  selector: 'app-card-details',
  imports: [CardInfoComponent],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.scss',
})
export class CardDetailsComponent {
  private route = inject(ActivatedRoute);
  private cardService = inject(CardService);

  card = this.cardService.getCardById(
    Number(this.route.snapshot.paramMap.get('id'))
  );
}
