import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _orcCounter = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._orcCounter += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;      
  }

  static createdRacesInstances(): number {
    return this._orcCounter;
  }
}

export default Orc;