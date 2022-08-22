import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  energyType: EnergyType = 'mana';
  private static _mageCounter = 0;

  constructor(name: string) {
    super(name);
    Mage._mageCounter += 1;
  }

  public get name(): string {
    return this.name;
  }

  public static get energyType(): EnergyType {
    return this.energyType;      
  }

  static createdArchetypeInstances(): number {
    return this._mageCounter;
  }
}

export default Mage;