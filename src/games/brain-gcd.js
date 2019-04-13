import { cons } from 'hexlet-pairs';
import { run, roundNumbers } from '../game';
import getRandomInt from '../random';

const minArgumentValue = 1;
const maxArgumentValue = 100;

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
    const firstArgument = getRandomInt(minArgumentValue, maxArgumentValue);
    const secondArgument = getRandomInt(minArgumentValue, maxArgumentValue);
    const question = `${firstArgument} ${secondArgument}`;
    const answer = `${findGcd(firstArgument, secondArgument)}`;
    return iter(i - 1, cons(question, questions), cons(answer, answers));
  };
  return iter(numberOfQuestions, '', '');
};

export default () => {
  const gameDescription = 'Find the greatest common divisor of given numbers';
  const questionsAndAnswers = getQuestionsAndAnswers(roundNumbers);
  run(gameDescription, questionsAndAnswers);
};
