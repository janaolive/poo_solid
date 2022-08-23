import Energy from '../Energy';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;

  attack(enemy: Fighter): void;
  special?(nemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;

} 

export default Fighter;