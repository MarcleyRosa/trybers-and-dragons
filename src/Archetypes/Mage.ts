import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _inst = 0;
  private type_ = 'mana';
  constructor(name: string) {
    super(name);
    Mage._inst += 1;
  }

  get energyType(): string {
    return this.type_;
  }

  static createdArchetypeInstances() {
    return Mage._inst;
  }
}