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

export const getGreatestCommonDivisor = (a, b) => {
  // Euclidean algorithm | https://en.wikipedia.org/wiki/Greatest_common_divisor
  if (b === 0) {
    return a;
  }
  return getGreatestCommonDivisor(b, a % b);
};
