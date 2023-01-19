import Race from './Race';

export default class Elf extends Race {
  private _life = 99;
  private static _inst = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._inst += 1;
  }

  get maxLifePoints(): number {
    return this._life;
  }

  static createdRacesInstances() {
    return Elf._inst;
  }
}