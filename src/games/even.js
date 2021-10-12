import { getAnswer } from '../cli.js';

const even = () => {
  const number = Math.ceil(Math.random() * 20);
  console.log(`Question: ${number}`);
  const isEven = number % 2 === 0;
  const guess = getAnswer();
  const correctAnswer = isEven ? 'yes' : 'no';
  return {
    guess,
    correctAnswer,
  };
};

export default even;
