import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _dawrfCounter = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._dawrfCounter += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;      
  }

  static createdRacesInstances(): number {
    return this._dawrfCounter;
  }
}

export default Dwarf;