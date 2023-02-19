import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _inst = 0;
  private type_: EnergyType;
  constructor(name: string) {
    super(name);
    Necromancer._inst += 1;
    this.type_ = 'mana';
  }

  get energyType(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances() {
    return Necromancer._inst;
  }
}