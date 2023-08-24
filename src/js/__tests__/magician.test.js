import Magician from '../magician';

test('Правильно создаётся персонаж', () => {
  const receivedMagician = new Magician('Lola');
  const expectedMagician = {
    name: 'Lola',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(receivedMagician).toEqual(expectedMagician);
});
