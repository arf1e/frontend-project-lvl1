import { getUsernameAndGreet, isAnswerCorrect } from '../cli.js';

const MAX_SCORE = 3;

const engine = (runGame, description) => {
  const username = getUsernameAndGreet();

  // Initialize progress logic
  let score = 0;
  let defeat = false;

  // Introduce the game rules
  console.log(description);

  while (score < MAX_SCORE && !defeat) {
    // Get the result of a round
    const { guess, correctAnswer } = runGame();
    // Decide if we should increase the score or end the game
    if (isAnswerCorrect(guess, correctAnswer)) {
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
