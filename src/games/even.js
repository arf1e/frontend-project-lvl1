import readLineSync from 'readline-sync';
import greet from '../cli.js';

const even = () => {
  const username = greet();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let wins = 0;
  while (wins < 3) {
    const number = Math.ceil(Math.random() * 20);
    console.log(`Question: ${number}`);

    const guess = readLineSync.question('Your answer: ');
    const isEven = number % 2 === 0;

    const correctAnswer = isEven ? 'yes' : 'no';
    if (guess === correctAnswer) {
      wins += 1;
      console.log('Correct!');
    } else {
      console.log(`${guess} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${username}!`);
      wins = 0;
    }
  }
  console.log(`Congratulations, ${username}!`);
};

export default even;
