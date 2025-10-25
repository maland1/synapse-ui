import { httpResource, HttpResourceRef } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Card } from '@shared/models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private httpResource = inject(httpResource);

  getAllCards() {
    return this.httpResource(() => ({
      path: '/api/cards',
    })) as HttpResourceRef<Card[]>;
  }

  getCardById(id: number) {
    return this.httpResource(() => ({
      path: `/api/cards/${id}`,
    })) as HttpResourceRef<Card>;
  }

  getCardsByNameSearch(input: string) {
    return this.httpResource(() => ({
      path: `/api/cards/search?name=${encodeURIComponent(input)}`,
    })) as HttpResourceRef<Card[]>;
  }

  // Create some endpoints for various card endpoints?
  // May want endpoints that hit /search with various preset query params.
}
