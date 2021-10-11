import readLineSync from 'readline-sync';

export const greet = () => {
  const username = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
};
