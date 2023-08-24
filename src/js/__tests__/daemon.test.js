import Daemon from '../daemon';

test('Правильно создаётся персонаж', () => {
  const receivedDaemon = new Daemon('William');
  const expectedDaemon = {
    name: 'William',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(receivedDaemon).toEqual(expectedDaemon);
});
