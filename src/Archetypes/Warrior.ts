import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  energyType: EnergyType = 'stamina';
  private static _warriorCounter = 0;

  constructor(name: string) {
    super(name);
    Warrior._warriorCounter += 1;
  }

  public get name(): string {
    return this.name;
  }

  public static get energyType(): EnergyType {
    return this.energyType;      
  }

  static createdArchetypeInstances(): number {
    return this._warriorCounter;
  }
}

export default Warrior;