import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private static inst = 0;
  constructor(
    private _name: string,
    private _special = 0,
    private _cost = 0,
  ) {
    Archetype.inst += 1;
  }

  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    return Archetype.inst;
  }

  abstract get energyType(): EnergyType;
}