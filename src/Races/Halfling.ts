import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _halflingCounter = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._halflingCounter += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;      
  }

  static createdRacesInstances(): number {
    return this._halflingCounter;
  }
}

export default Halfling;