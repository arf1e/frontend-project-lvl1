import { greet, checkAnswer } from '../cli.js';

const engine = (game, description) => {
  const username = greet();
  let score = 0;
  let defeat = false;
  console.log(description);

  while (score < 3 && !defeat) {
    const { guess, correctAnswer } = game();
    if (checkAnswer(guess, correctAnswer)) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`'${guess}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      defeat = true;
    }
  }

  if (defeat) {
    console.log(`Let's try again, ${username}!`);
  } else {
    console.log(`Congratulations, ${username}!`);
  }
};

export default engine;
