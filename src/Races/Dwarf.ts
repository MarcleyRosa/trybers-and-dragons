import Race from './Race';

export default class Dwarf extends Race {
  private _life = 80;
  private static _inst = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._inst += 1;
  }

  get maxLifePoints(): number {
    return this._life;
  }

  static createdRacesInstances(): number {
    return Dwarf._inst;
  }
}
