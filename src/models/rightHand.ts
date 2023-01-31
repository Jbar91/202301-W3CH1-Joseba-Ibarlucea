import { Character, DtoCharacter } from '../models/character.js';

type DtoRHand = {
  series: string;
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  assess: string;
};

export class RightHand extends Character {
  public assess: string;
  constructor(dtoRH: DtoRHand) {
    const dtoRHand: DtoCharacter = {
      series: dtoRH.series,
      name: dtoRH.name,
      family: dtoRH.family,
      age: dtoRH.age,
      isAlive: dtoRH.isAlive,
      message: 'No se por que, pero creo que voy a morir pronto',
    };
    super(dtoRHand);
    this.assess = dtoRH.assess;
  }

  hand() {
    return this.assess;
  }
}
