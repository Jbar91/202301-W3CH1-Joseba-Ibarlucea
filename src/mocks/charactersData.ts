import { Brawler } from '../models/brawler.js';
import { King } from '../models/king.js';
import { RightHand } from '../models/rightHand.js';
import { Squire } from '../models/squire.js';

const joffrey = new King({
  series: 'Juego de Tronos',
  name: 'Joffrey Baratheon',
  family: 'Baratheon',
  age: 19,
  isAlive: true,
  reign: 1,
});

const jaime = new Brawler({
  series: 'Juego de Tronos',
  name: 'Jamie Lannister',
  family: 'Lannister',
  age: 34,
  isAlive: true,
  weapon: 'Sword',
});

const daenerys = new Brawler({
  series: 'Juego de Tronos',
  name: 'Daenerys Targaryen',
  family: 'Targaryen',
  age: 22,
  isAlive: true,
  weapon: 'Dragon',
});

const tyrion = new RightHand({
  series: 'Juego de Tronos',
  name: 'Tyrion Lannister',
  family: 'Lannister',
  age: 27,
  isAlive: true,
  assess: 'Daenerys Targaryen',
});

const bronn = new Squire({
  series: 'Juego de Tronos',
  name: 'Bronn',
  family: 'Bronn',
  age: 35,
  isAlive: true,
  knight: 'Jamie Lannister',
});

export const charactersArr = [joffrey, jaime, daenerys, tyrion, bronn];
