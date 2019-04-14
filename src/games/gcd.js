import { cons } from 'hexlet-pairs';
import run from '../game';
import getRandomInt from '../random';

const findGcd = (num1, num2) => {
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);
  const remain = max % min;
  return remain === 0 ? min : findGcd(remain, min);
};

const getQuestionsAndAnswers = (numberOfQuestions) => {
  const iter = (i, questions, answers) => {
    if (i < 1) {
      return cons(questions, answers);
    }
    const firstArgument = getRandomInt(1, 100);
    const secondArgument = getRandomInt(1, 100);
    const question = `${firstArgument} ${secondArgument}`;
    const answer = `${findGcd(firstArgument, secondArgument)}`;
    return iter(i - 1, cons(question, questions), cons(answer, answers));
  };
  return iter(numberOfQuestions, '', '');
};

export default () => {
  const gameDescription = 'Find the greatest common divisor of given numbers';
  run(gameDescription, getQuestionsAndAnswers);
};
