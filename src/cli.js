import readLineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const username = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

export default greet;
