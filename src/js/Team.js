export default class Team {
  constructor() {
    this.swordsman = {
      name: 'Сэр_Ланцелот',
      type: 'Swordsman',
      health: 70,
      level: 1,
      attack: 40,
      defence: 10,
    };

    this.bowman = {
      name: 'Логоваз',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    };
    this.magician = {
      name: 'Гендальф',
      type: 'Magician',
      health: 60,
      level: 3,
      attack: 40,
      defence: 10,
    };
    this.daemon = {
      name: 'xxxTrueNagibXxx',
      type: 'Daemon',
      health: 90,
      level: 5,
      attack: 50,
      defence: 10,
    };
  }

  *[Symbol.iterator]() {
    for (let value = 0; value < Object.values(this).length; value++) {
      yield Object.values(this)[value];
    }
  }
}