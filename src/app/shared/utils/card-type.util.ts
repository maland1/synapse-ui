import {
  Card,
  MonsterCard,
  SpellCard,
  TrapCard,
} from '@shared/models/card.model';

export function isMonsterCard(card: Card | undefined): card is MonsterCard {
  return !!card && card.cardType === 'Monster';
}

export function isSpellCard(card: Card | undefined): card is SpellCard {
  return !!card && card.cardType === 'Spell';
}

export function isTrapCard(card: Card | undefined): card is TrapCard {
  return !!card && card.cardType === 'Trap';
}
