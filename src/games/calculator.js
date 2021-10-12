import { getAnswer, askQuestion } from '../cli.js';
import { operators, generateRandomNumber } from '../utils/math.js';

const calculator = () => {
  const operator = Object.keys(operators)[generateRandomNumber(Object.keys(operators).length - 1)];

  const leftOperand = generateRandomNumber(100);
  const rightOperand = generateRandomNumber(operator === '*' ? 10 : 100);

  askQuestion(`${leftOperand} ${operator} ${rightOperand}`);

  const correctAnswer = operators[operator](leftOperand, rightOperand);
  const answer = getAnswer();

  const guess = Number(answer) ? Number(answer) : answer;

  return { correctAnswer, guess };
};

export default calculator;
