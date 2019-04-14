import { cons } from 'hexlet-pairs';
import run from '../game';
import getRandomInt from '../random';

const isPrime = (number) => {
  if (number < 2) return false;
  const iter = (counter) => {
    if (counter === 1) return true;
    return number % counter === 0 ? false : iter(counter - 1);
  };
  return iter(Math.floor(Math.sqrt(number)));
};

const getQuestionsAndAnswers = (numberOfQuestions) => {
  const iter = (i, questions, answers) => {
    if (i < 1) {
      return cons(questions, answers);
    }
    const question = getRandomInt(2, 100);
    const answer = isPrime(question) ? 'yes' : 'no';
    return iter(i - 1, cons(question, questions), cons(answer, answers));
  };
  return iter(numberOfQuestions, '', '');
};

export default () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  run(gameDescription, getQuestionsAndAnswers);
};
