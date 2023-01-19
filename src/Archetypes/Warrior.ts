import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _inst = 0;
  private type_ = 'stamina';
  constructor(name: string) {
    super(name);
    Warrior._inst += 1;
  }

  get energyType(): string {
    return this.type_;
  }

  static createdArchetypeInstances() {
    return Warrior._inst;
  }
}