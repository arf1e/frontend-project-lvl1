export const operators = {
  '*': (a, b) => a * b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
};

export const generateRandomNumber = (range) => Math.floor(Math.random() * range);

export const getRandomArrayElement = (arr) => {
  /*
    Because generateRandomNumber uses Math.floor() to generate number
    and Math.random() is never 1, subtracting 1 from arr.length will never reach the last item
  */
  const arrayLength = arr.length;
  const randomIndex = generateRandomNumber(arrayLength);
  const randomArrayElement = arr[randomIndex];
  return randomArrayElement;
};
