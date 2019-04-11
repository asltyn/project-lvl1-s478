const findGcd = (num1, num2) => {
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);
  const remain = max % min;
  return remain === 0 ? min : findGcd(remain, min);
};

export default findGcd;
