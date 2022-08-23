import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _playerX: Fighter;

  constructor(player: Fighter, playerX: Fighter) {
    super(player);
    this._playerX = playerX;
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this._playerX.lifePoints > 0) {
      this.player.attack(this._playerX);
      this._playerX.attack(this.player);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;