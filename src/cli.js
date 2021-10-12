import readLineSync from 'readline-sync';

export const greet = () => {
  console.log('Welcome to the Brain Games!');
  const username = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

export const getAnswer = () => readLineSync.question('Your answer: ');

export const checkAnswer = (given, correct) => given === correct;

export const askQuestion = (question) => console.log(`Question: ${question}`);
