import { cons } from 'hexlet-pairs';
import { run, roundNumbers } from '../game';
import getRandomFromRange from '../random';

const minQuestionValue = 0;
const maxQuestionValue = 100;

const isEven = number => number % 2 === 0;

const getQuestionsAndAnswers = (numberOfQuestions) => {
  const iter = (i, questions, answers) => {
    if (i < 1) {
      return cons(questions, answers);
    }
    const question = `${getRandomFromRange(minQuestionValue, maxQuestionValue)}`;
    const answer = isEven(question) ? 'yes' : 'no';
    return iter(i - 1, cons(question, questions), cons(answer, answers));
  };
  return iter(numberOfQuestions);
};


export default () => {
  const name = 'Answer "yes" if answer even otherwise answer "no".';
  run(name, getQuestionsAndAnswers(roundNumbers));
};
