import Race from './Race';

export default class Orc extends Race {
  private _life = 74;
  private static _inst = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._inst += 1;
  }

  get maxLifePoints(): number {
    return this._life;
  }

  static createdRacesInstances() {
    return Orc._inst;
  }
}