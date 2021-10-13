export const operators = {
  '*': (a, b) => a * b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
};

export const generateRandomNumber = (range) => Math.floor(Math.random() * range);

export const generateRandomArrayIndex = (arr) => {
  const arrayLength = arr.length;
  /*
    Because generateRandomNumber uses Math.floor() to generate number
    and Math.random() is never 1, subtracting 1 from arr.length will never reach the last item
  */
  const randomIndex = generateRandomNumber(arrayLength);
  return randomIndex;
};

export const getRandomArrayElement = (arr) => {
  const randomIndex = generateRandomArrayIndex(arr);
  const randomElement = arr[randomIndex];
  return randomElement;
};

export const getGreatestCommonDivisor = (a, b) => {
  // Euclidean algorithm | https://en.wikipedia.org/wiki/Greatest_common_divisor
  if (b === 0) {
    return a;
  }
  return getGreatestCommonDivisor(b, a % b);
};

export const generateProgression = (firstElement, step) => {
  const result = [firstElement];
  for (let i = 1; i < 10; i += 1) {
    const previousElement = result[i - 1];
    result.push(previousElement + step);
  }
  return result;
};

export const hideRandomProgressionElement = (progression) => {
  const outputProgression = [...progression]; // Take a copy of a progression
  const randomIndex = generateRandomArrayIndex(outputProgression);
  const hiddenElement = outputProgression[randomIndex];

  // Hide the element
  outputProgression[randomIndex] = '..';
  return { outputProgression, hiddenElement };
};
