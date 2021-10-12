import readLineSync from 'readline-sync';

const greet = () => {
  const username = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
};

export default greet;
