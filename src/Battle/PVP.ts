import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private player1: Character | Fighter,
    private player2: Character | Fighter,
  ) {
    super(player1);
  }

  inDuel() {
    for (let index = 0; this.player1.lifePoints
      && this.player2.lifePoints > 0; index += 1) {      
      if (index % 2 === 0) {
        this.player1.attack(this.player2);
      } else {
        this.player2.attack(this.player1);
      }
    }
  }
 
  fight(): number {
    this.inDuel();
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}   