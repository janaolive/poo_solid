import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    _player: Fighter,
    private enemy: (Fighter | SimpleFighter)[],
  ) {
    super(_player);
  }

  fight(): number {
    for (let index = this.enemy.length - 1; index > 0; index -= 1) {
      while (this.enemy[index].lifePoints > -1 && this.player.lifePoints > -1) {
        this.player.attack(this.enemy[index]);
        this.enemy[index].attack(this.player);
      }
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;

// simplefighter extend de fighter, trazer o parametro para que possa ser utilizado por qq inimigo
// loop while typescript : https://www.tutorialsteacher.com/typescript/while-loop
// rescrevi o PVE e PVP