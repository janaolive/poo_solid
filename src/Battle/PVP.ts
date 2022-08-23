import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _playerX: Fighter;

  constructor(player: Fighter, playerX: Fighter) {
    super(player);
    this._playerX = playerX;
  }

  fight(): number {
    for (let index = 0; index < 100; index += 1) {
      this.player.attack(this._playerX);
      if (this._playerX.lifePoints <= 0) {
        return 1;
      } 
      this._playerX.attack(this.player);
      if (this.player.lifePoints <= 0) {
        return -1;
      }    
    }
    return 0;
  }
}

export default PVP;