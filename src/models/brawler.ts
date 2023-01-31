import { Character, DtoCharacter } from './character.js';

export class Brawler extends Character {
  public weapon: string;
  public dexterity: number;

  constructor(dtoB: DtoCharacter, weapon: string) {
    const dtoBrawler: DtoCharacter = {
      series: dtoB.series,
      name: dtoB.name,
      family: dtoB.family,
      age: dtoB.age,
      isAlive: dtoB.isAlive,
      message: 'Primero pego y luego pregunto',
    };
    const dex = Math.round(Math.random() * (10 - 0));
    super(dtoBrawler);
    this.weapon = weapon;
    this.dexterity = dex;
  }

  skill() {
    return this.dexterity;
  }
}
