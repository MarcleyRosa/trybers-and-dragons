import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _name;
  private _archetype: Archetype;
  private _dexterity: number = getRandomInt(1, 10);
  private _race: Race;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number = getRandomInt(1, 10);
  private _defense: number = getRandomInt(1, 10);
  private _energy: Energy;

  constructor(name: string) {
    this._name = name;
    this._archetype = new Mage(name);
    this._race = new Elf(name, this._dexterity);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  attack(enemy: SimpleFighter): void {
    const attck = this._strength;
    enemy.receiveDamage(attck);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);

    const newAmount = { ...this._energy, amount: 10 };
    this._energy = newAmount;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    if (this._lifePoints !== this._race.maxLifePoints) {
      this._lifePoints = this._maxLifePoints;
    }
  }

  receiveDamage(attackPoints: number): number {
    const damag = attackPoints - this._defense;
    if (damag >= 0) this._lifePoints -= damag;
    else this._lifePoints -= 1;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  special(enemy: Fighter): void {
    const damage = getRandomInt(1, 10) > 9;
    if (damage) {
      enemy.receiveDamage(this._strength * 4);
    } else {
      enemy.receiveDamage(this._strength * 2);
    }
  }

  get name() {
    return this._name;
  }

  get archetype() {
    return this._archetype;
  }

  get race() {
    return this._race;
  }

  get dexterity() {
    return this._dexterity;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._defense;
  }

  get energy() {
    return { ...this._energy };
  }
}