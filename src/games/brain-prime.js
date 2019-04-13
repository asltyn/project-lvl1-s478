import { cons } from 'hexlet-pairs';
import { run, roundNumbers } from '../game';
import getRandomInt from '../random';

const isPrime = (number) => {
  const iter = (counter) => {
    if (counter === 1) return true;
    return number % counter === 0 ? false : iter(counter - 1);
  };
  return iter(number - 1);
};

const getQuestionsAndAnswers = (numberOfQuestions) => {
  const iter = (i, questions, answers) => {
    if (i < 1) {
      return cons(questions, answers);
    }
    const question = `${getRandomInt(2, 100)}`;
    const answer = isPrime(question) ? 'yes' : 'no';
    return iter(i - 1, cons(question, questions), cons(answer, answers));
  };
  return iter(numberOfQuestions, '', '');
};

export default () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionsAndAnswers = getQuestionsAndAnswers(roundNumbers);
  run(gameDescription, questionsAndAnswers);
};
