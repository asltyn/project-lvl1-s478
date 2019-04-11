import { cons } from 'hexlet-pairs';
import run from '../game';

const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

const getQuestionsAndAnswers = (numberOfQuestions) => {
  const iter = (n, questions, answers) => {
    if (n < 1) {
      return cons(questions, answers);
    }
    const question = Math.floor(Math.random() * 100);
    const answer = isEven(question);
    return iter(n - 1, cons(question, questions), cons(answer, answers));
  };
  return iter(numberOfQuestions);
};


export default () => {
  const name = 'Answer "yes" if answer even otherwise answer "no".';
  run(name, getQuestionsAndAnswers(3));
};
