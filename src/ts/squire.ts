import { Character, DtoCharacter } from './character.js';

type DtoSquire = {
  series: string;
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  knight: string;
};

export class Squire extends Character {
  public knight: string;
  public loyalty: number;

  constructor(dtoS: DtoSquire) {
    const dtoSquire: DtoCharacter = {
      series: dtoS.series,
      name: dtoS.name,
      family: dtoS.family,
      age: dtoS.age,
      isAlive: dtoS.isAlive,
      message: 'Soy un looser',
    };

    const loy = Math.round(Math.random() * (10 - 0));
    super(dtoSquire);
    this.knight = dtoS.knight;
    this.loyalty = loy;
  }

  assKissing() {
    return this.loyalty;
  }
}
