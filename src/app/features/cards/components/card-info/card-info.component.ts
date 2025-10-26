import { HttpResourceRef } from '@angular/common/http';
import { Component, computed, input } from '@angular/core';
import {
  Card,
  MonsterCard,
  SpellCard,
  TrapCard,
} from '@shared/models/card.model';
import {
  isMonsterCard,
  isSpellCard,
  isTrapCard,
} from '@shared/utils/card-type.util';

@Component({
  selector: 'app-card-info',
  imports: [],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss',
})
export class CardInfoComponent {
  card = input.required<HttpResourceRef<Card>>();
  cardData = computed(() => this.card().value());

  monsterCard = computed<MonsterCard | undefined>(() => {
    const value = this.card().value();
    if (isMonsterCard(value)) {
      return value;
    }
    return undefined;
  });

  spellCard = computed<SpellCard | undefined>(() => {
    const value = this.card().value();
    if (isSpellCard(value)) {
      return value;
    }
    return undefined;
  });

  trapCard = computed<TrapCard | undefined>(() => {
    const value = this.card().value();
    if (isTrapCard(value)) {
      return value;
    }
    return undefined;
  });
}
