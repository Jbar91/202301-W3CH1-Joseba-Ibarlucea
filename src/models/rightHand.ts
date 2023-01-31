import { Character, DtoCharacter } from '../models/character.js';

export class RightHand extends Character {
  public assess: string;
  public message: string;
  constructor(dtoRH: DtoCharacter, assess: string) {
    const dtoRHand: DtoCharacter = {
      series: dtoRH.series,
      name: dtoRH.name,
      family: dtoRH.family,
      age: dtoRH.age,
      isAlive: dtoRH.isAlive,
    };
    super(dtoRHand);
    this.assess = assess;
    this.message = 'No se por que, pero creo que voy a morir pronto';
  }

  hand() {
    return this.assess;
  }
}
