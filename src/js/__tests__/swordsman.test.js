import Swordsman from '../swordsman';

test('Правильно создаётся персонаж', () => {
  const receivedSwordsman = new Swordsman('Mary');
  const expectedSwordsman = {
    name: 'Mary',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  };
  expect(receivedSwordsman).toEqual(expectedSwordsman);
});