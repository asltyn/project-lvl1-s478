import { cons } from 'hexlet-pairs';
import run from '../game';
import getRandomFromRange from '../random';
import findGcd from '../gcd';

const getQuestionsAndAnswers = (numberOfQuestions) => {
  const iter = (i, questions, answers) => {
    if (i < 1) {
      return cons(questions, answers);
    }
    const randomNumber1 = getRandomFromRange(1, 100);
    const randomNumber2 = getRandomFromRange(1, 100);
    const question = `${randomNumber1} ${randomNumber2}`;
    const answer = findGcd(randomNumber1, randomNumber2);
    return iter(i - 1, cons(question, questions), cons(answer.toString(), answers));
  };
  return iter(numberOfQuestions);
};

export default () => {
  const name = 'Find the greatest common divisor of given numbers';
  const numberOfQuestions = 3;
  run(name, getQuestionsAndAnswers(numberOfQuestions));
};
