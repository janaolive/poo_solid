import Energy from '../Energy';
import SimpleFigther from './SimpleFighter';

interface Fighter extends SimpleFigther {
  defense: number;
  energy?: Energy;

  special?(enemy: Fighter): void;
  levelUp(): void;
  
} 

export default Fighter;