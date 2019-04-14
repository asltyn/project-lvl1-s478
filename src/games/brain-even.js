import { cons } from 'hexlet-pairs';
import run from '../game';
import getRandomInt from '../random';

const isEven = number => number % 2 === 0;

const getQuestionsAndAnswers = (numberOfQuestions) => {
  const iter = (i, questions, answers) => {
    if (i < 1) {
      return cons(questions, answers);
    }
    const question = getRandomInt(0, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    return iter(i - 1, cons(question, questions), cons(answer, answers));
  };
  return iter(numberOfQuestions, '', '');
};

export default () => {
  const gameDescription = 'Answer "yes" if answer even otherwise answer "no".';
  run(gameDescription, getQuestionsAndAnswers);
};
