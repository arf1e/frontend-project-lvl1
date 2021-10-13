import { readUserGuess, askQuestion } from '../cli.js';
import { generateRandomNumber, generateProgression, hideRandomProgressionElement } from '../utils/math.js';
import { tryMapToNumber, printArrayInLine } from '../utils/strings.js';

const progression = () => {
  // Generate random progression
  const firstElement = generateRandomNumber(20);
  const step = generateRandomNumber(10);
  const generatedProgression = generateProgression(firstElement, step);

  // Hide element
  const { outputProgression, hiddenElement } = hideRandomProgressionElement(generatedProgression);

  // Get the user's answer
  askQuestion(printArrayInLine(outputProgression));
  const answer = readUserGuess();

  // Get the correct answer
  const correctAnswer = hiddenElement;
  const guess = tryMapToNumber(answer);

  return { correctAnswer, guess };
};

export default progression;
