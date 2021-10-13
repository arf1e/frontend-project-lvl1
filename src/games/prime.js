import { generateRandomNumber, isPrime } from '../utils/math.js';
import { askQuestion, readUserGuess } from '../cli.js';

const prime = () => {
  // Generate random number
  const number = generateRandomNumber(100);

  // Get the user's answer
  askQuestion(number);
  const guess = readUserGuess();

  // Get the correct answer
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return {
    guess,
    correctAnswer,
  };
};

export default prime;
