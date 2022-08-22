import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  energyType: EnergyType = 'mana';
  private static _necromancerCounter = 0;

  constructor(name: string) {
    super(name);
    Necromancer._necromancerCounter += 1;
  }

  public get name(): string {
    return this.name;
  }

  public static get energyType(): EnergyType {
    return this.energyType;      
  }

  static createdArchetypeInstances(): number {
    return this._necromancerCounter;
  }
}

export default Necromancer;