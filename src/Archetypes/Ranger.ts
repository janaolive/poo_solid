import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  energyType: EnergyType = 'stamina';
  private static _rangerCounter = 0;

  constructor(name: string) {
    super(name);
    Ranger._rangerCounter += 1;
  }

  public get name(): string {
    return this.name;
  }

  public static get energyType(): EnergyType {
    return this.energyType;      
  }

  static createdArchetypeInstances(): number {
    return this._rangerCounter;
  }
}

export default Ranger;