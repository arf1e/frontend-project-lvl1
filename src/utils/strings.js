const tryMapToNumber = (string) => {
  const numeralizedString = Number(string);
  let result;
  if (Number.isNaN(numeralizedString)) {
    /*
      In case the answer is not a number,
      give it to the engine as is so it could properly show the error message
    */
    result = string;
  } else {
    result = numeralizedString;
  }
  return result;
};

export default tryMapToNumber;
