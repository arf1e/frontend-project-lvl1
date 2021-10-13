import { readUserGuess, askQuestion } from '../cli.js';
import { operators, generateRandomNumber, getRandomArrayElement } from '../utils/math.js';
import { tryMapToNumber } from '../utils/strings.js';

const calculator = () => {
  // Generate random operator
  const operatorKeys = Object.keys(operators);
  const operator = getRandomArrayElement(operatorKeys);

  // Generate operands
  const leftOperand = generateRandomNumber(100);
  const rightOperand = generateRandomNumber(operator === '*' ? 10 : 20);

  // Get the user's answer
  askQuestion(`${leftOperand} ${operator} ${rightOperand}`);
  const answer = readUserGuess();

  // Get the correct answer
  const correctAnswer = operators[operator](leftOperand, rightOperand);
  const guess = tryMapToNumber(answer);

  return { correctAnswer, guess };
};

export default calculator;
