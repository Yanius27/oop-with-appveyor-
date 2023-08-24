import Bowerman from '../bowerman';

test('Правильно создаётся персонаж', () => {
  const receivedBowerman = new Bowerman('John');
  const expectedBowermen = {
    name: 'John',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  };
  expect(receivedBowerman).toEqual(expectedBowermen);
});