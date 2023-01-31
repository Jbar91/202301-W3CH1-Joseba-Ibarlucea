import { Character, DtoCharacter } from '../models/character.js';

export class King extends Character {
  public reign: number;
  public message: string;

  constructor(dtoK: DtoCharacter, reign: number) {
    const dtoCharacter: DtoCharacter = {
      series: dtoK.series,
      name: dtoK.name,
      family: dtoK.family,
      age: dtoK.age,
      isAlive: dtoK.isAlive,
    };
    super(dtoCharacter);
    this.reign = reign;
    this.message = 'Vais a morir todos';
  }
}
