import Character from '../character';

test('name error', () => {
  expect(() => new Character('A', 'Bowerman')).toThrow(new Error('Некорректное значение имени'));
});

test('type error', () => {
  expect(() => new Character('Kevin', 'Ork')).toThrow(new Error('Неизвестный тип персонажа'));
});

test('character created correctly', () => {
  const receivedCharacter = new Character('Helga', 'Magician');
  const expectedCharacter = {
    name: 'Helga',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  };
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
