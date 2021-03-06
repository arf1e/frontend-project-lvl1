import { readUserGuess, askQuestion } from '../cli.js';
import { generateRandomNumber } from '../utils/math.js';

const even = () => {
  const number = generateRandomNumber(50);
  askQuestion(number);

  const isEven = number % 2 === 0;

  const guess = readUserGuess();
  const correctAnswer = isEven ? 'yes' : 'no';
  return {
    guess,
    correctAnswer,
  };
};

export default even;
