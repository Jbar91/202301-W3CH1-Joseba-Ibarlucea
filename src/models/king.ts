import { Character, DtoCharacter } from '../models/character.js';

type DtoKing = {
  series: string;
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  reign: number;
};

export class King extends Character {
  public reign: number;

  constructor(dtoK: DtoKing) {
    const dtoCharacter: DtoCharacter = {
      series: dtoK.series,
      name: dtoK.name,
      family: dtoK.family,
      age: dtoK.age,
      isAlive: dtoK.isAlive,
      message: 'Vais a morir todos',
    };
    super(dtoCharacter);
    this.reign = dtoK.reign;
  }
}
