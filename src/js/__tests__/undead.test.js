import Undead from '../undead';

test('Правильно создаётся персонаж', () => {
  const receivedUndead = new Undead('Kit');
  const expectedUndead = {
    name: 'Kit',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  };
  expect(receivedUndead).toEqual(expectedUndead);
});