import { Character, DtoCharacter } from './character';

const dto: DtoCharacter = {
  series: 'Game of Thrones',
  name: 'Pepe',
  family: 'Ernesto',
  age: 23,
  isAlive: true,
  message: 'foo, bar',
};
const char = new Character(dto);

describe('Given the Character class', () => {
  describe('When the class instantiates', () => {
    test('Then the value .series should return a string', () => {
      const result = char.series;
      const expected = 'Game of Thrones';
      expect(result).toMatch(expected);
    });
    test('Then the method communicate() should return the message', () => {
      const result = char.communicate();
      const expected = 'foo, bar';
      expect(result).toMatch(expected);
    });
    test("Then the method .state should return 'I'm alive' if true or 'I'm dead' if false", () => {
      const result = char.state();
      const expected = "I'm alive";
      expect(result).toBe(expected);
    });
    test("Then the method .state should return 'I'm dead' if false", () => {
      char.perish();
      const result = char.state();
      const expected = "I'm dead";
      expect(result).toBe(expected);
    });
  });
});
