export default abstract class Race {
  private _name;
  private _dexterity;
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  abstract get maxLifePoints(): number;

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }
  
  static createdRacesInstances() {
    throw new Error('Not implemented');
  }
}