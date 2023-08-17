import Character from '../character';

test('the parent class must have the expected properties', () => {
  const receivedCharacter = new Character('Mary', 'Magician');
  const expectedCharacter = {
    name: 'Mary',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(receivedCharacter).toEqual(expectedCharacter);
});

test('invalid type parameter should cause an error', () => {
  expect(() => new Character('William', 'Orc')).toThrow(Error);
});

test('invalid name parameter should cause an error', () => {
  expect(() => new Character('Lord-Voldemort', 'Magician')).toThrow(Error);
});

test('zero health results in an error', () => {
  const harry = new Character('Harry', 'Magician');
  harry.health = 0;
  expect(() => {
    // eslint-disable-next-line no-unused-expressions
    harry.levelUp();
  }).toThrow(Error);
});

test('zero health results in an error', () => {
  const hermione = new Character('Hermione', 'Magician');
  hermione.health = 0;
  expect(() => {
    // eslint-disable-next-line no-unused-expressions
    hermione.damage(10);
  }).toThrow(Error);
});
