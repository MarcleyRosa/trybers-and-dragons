import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';
// import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private char: Fighter | Character,
    private monsters: (SimpleFighter | Fighter)[],
  ) {
    super(char);
  }

  inDuel() {
    this.monsters.forEach((monster) => {
      for (let index = 0; this.char.lifePoints
              && monster.lifePoints > 0; index += 1) {      
        if (index % 2 === 0) {
          this.char.attack(monster);
        } else {
          monster.attack(this.char);
        }
      }
    });
  }
 
  fight(): number {
    this.inDuel();
    return this.char.lifePoints === -1 ? -1 : 1;
  }

  //   turns(turn: number, monster: number): void {
  //     if (turn % 2 === 0) {
  //       this.char.attack(this.monsters[getRandomInt(0, this.monsters.length)]);
  //     } else {
  //       this.monsters[monster].attack(this.char);
  //     }
  //   }

  //   attacking(): void {
  //     let turn = 0;
  //     let monster = 0;
  //     while (this.char.lifePoints > 0 && this
  //       .monsters.every((i) => i.lifePoints > 0)) {
  //       this.turns(turn, monster);
  //       monster = monster === this.monsters.length ? 0 : monster + 1;
  //       turn += 1;
  //     }
  //   }

//   fight(): number {
//     this.attacking();
//     return this.player.lifePoints === -1 ? -1 : 1;
//   }
}