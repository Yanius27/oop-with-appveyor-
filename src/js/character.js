export default class Character {
  static types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Некорректное значение имени');
    } else {
      this.name = name;
    }
    if (Character.types.indexOf(type) === -1) {
      throw new Error('Неизвестный тип персонажа');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Персонаж умер');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Персонаж умер');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
