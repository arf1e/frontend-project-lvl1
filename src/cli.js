import readLineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const username = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

export const even = () => {
  const username = greet();
  let wins = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
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

export default greet;
