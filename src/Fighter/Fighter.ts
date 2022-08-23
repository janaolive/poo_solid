import Energy from '../Energy';
import SimpleFigther from './SimpleFighter';

interface Fighter extends SimpleFigther {
  defense: number;
  energy?: Energy;

  special?(nemy: Fighter): void;
  levelUp(): void;
  
} 

export default Fighter;