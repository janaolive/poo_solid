import Energy from '../Energy';

interface Fighter {
  defense: number;
  energy?: Energy;

  special?(nemy: Fighter): void;
  levelUp(): void;
  
} 

export default Fighter;