import Race from './Race';

export default class Halfling extends Race {
  private _life = 60;
  private static _inst = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._inst += 1;
  }

  get maxLifePoints(): number {
    return this._life;
  }

  static createdRacesInstances() {
    return Halfling._inst;
  }
}