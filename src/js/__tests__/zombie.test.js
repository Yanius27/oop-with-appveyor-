import Zombie from '../zombie';

test('Правильно создаётся персонаж', () => {
  const receivedZombie = new Zombie('Kirk');
  const expectedZombie = {
    name: 'Kirk',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  };
  expect(receivedZombie).toEqual(expectedZombie);
});