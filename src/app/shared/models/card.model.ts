import { Attribute, CardType, SpellType, TrapType } from './card-types.model';
import { SetInfo } from './set.model';

export interface Card {
  id: number;
  name: string;
  description: string;
  archetype: string;
  cardType: CardType;
  sets?: CardSet[];
  imageUrl: string;
}

export interface MonsterCard extends Card {
  cardType: 'Monster';
  attack: number | null;
  defense: number | null;
  level?: number;
  rank?: number;
  linkRating?: number;
  linkArrows?: string[];
  attribute: Attribute;
  race: string;
  monsterTypes: string[];
  effectText?: string;
}

export interface SpellCard extends Card {
  cardType: 'Spell';
  spellType: SpellType;
  effectText?: string;
}

export interface TrapCard extends Card {
  cardType: 'Trap';
  trapType: TrapType;
  effectText?: string;
}

export interface CardSet {
  setCode: string;
  setName: string;
  setRarity: string;
  setRarityCode?: string;
  setInfo?: SetInfo;
}
