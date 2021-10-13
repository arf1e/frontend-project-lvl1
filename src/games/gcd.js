import { readUserGuess, askQuestion } from '../cli.js';
import { generateRandomNumber, getGreatestCommonDivisor } from '../utils/math.js';
import tryMapToNumber from '../utils/strings.js';

const gcd = () => {
  // Generate numbers
  const a = generateRandomNumber(50);
  const b = generateRandomNumber(50);

  // Get the user guess
  askQuestion(`${a} ${b}`);
  const answer = readUserGuess();

  // Get the correct answer
  const correctAnswer = getGreatestCommonDivisor(a, b);
  const guess = tryMapToNumber(answer);

  return { guess, correctAnswer };
};

export default gcd;
