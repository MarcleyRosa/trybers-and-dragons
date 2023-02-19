import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _inst = 0;
  private type_: EnergyType;
  constructor(name: string) {
    super(name);
    Warrior._inst += 1;
    this.type_ = 'stamina';
  }

  get energyType(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances() {
    return Warrior._inst;
  }
}