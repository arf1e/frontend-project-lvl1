export const operators = {
  '*': (a, b) => a * b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
};

export const generateRandomNumber = (range) => Math.floor(Math.random() * range);
