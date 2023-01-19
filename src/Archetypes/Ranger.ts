import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _inst = 0;
  private type_ = 'stamina';
  constructor(name: string) {
    super(name);
    Ranger._inst += 1;
  }

  get energyType(): string {
    return this.type_;
  }

  static createdArchetypeInstances() {
    return Ranger._inst;
  }
}