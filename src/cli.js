import readLineSync from 'readline-sync';

export const getUsernameAndGreet = () => {
  console.log('Welcome to the Brain Games!');
  const username = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

export const readUserGuess = () => readLineSync.question('Your answer: ');

export const isAnswerCorrect = (given, correct) => given === correct;

export const askQuestion = (question) => console.log(`Question: ${question}`);
