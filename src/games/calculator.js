import { readUserGuess, askQuestion } from '../cli.js';
import { operators, generateRandomNumber } from '../utils/math.js';

const calculator = () => {
  // Generate random operator
  const operatorKeys = Object.keys(operators);
  const lastOperatorIndex = operatorKeys.length - 1;
  const randomOperatorIndex = generateRandomNumber(lastOperatorIndex);
  const operator = operatorKeys[randomOperatorIndex];

  // Generate operands
  const leftOperand = generateRandomNumber(100);
  const rightOperand = generateRandomNumber(operator === '*' ? 10 : 100);

  // Get the user's answer
  askQuestion(`${leftOperand} ${operator} ${rightOperand}`);
  const answer = readUserGuess();

  // Check the given answer
  const correctAnswer = operators[operator](leftOperand, rightOperand);
  const numeralizedAnswer = Number(answer);

  let guess; // Got to check if the answer is valid
  if (Number.isNaN(numeralizedAnswer)) {
    /*
      In case the answer is not a number,
      give it to the engine as is so it could properly show the error message
    */
    guess = answer;
  } else {
    guess = numeralizedAnswer;
  }

  return { correctAnswer, guess };
};

export default calculator;
