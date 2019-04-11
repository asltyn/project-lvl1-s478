import { cons, car, cdr } from 'hexlet-pairs';
import run from '../game';
import getRandomFromRange from '../random';

const functions = {
  1: cons((x, y) => `${x} + ${y}`, (x, y) => x + y),
  2: cons((x, y) => `${x} - ${y}`, (x, y) => x - y),
  3: cons((x, y) => `${x} * ${y}`, (x, y) => x * y),
};

const getQuestionsAndAnswers = (numberOfQuestions) => {
  const iter = (i, questions, answers) => {
    if (i < 1) {
      return cons(questions, answers);
    }
    const randomNumber1 = getRandomFromRange(0, 100);
    const randomNumber2 = getRandomFromRange(0, 100);
    const key = getRandomFromRange(1, 3);
    const question = car(functions[key])(randomNumber1, randomNumber2);
    const answer = cdr(functions[key])(randomNumber1, randomNumber2);
    return iter(i - 1, cons(question, questions), cons(answer.toString(), answers));
  };
  return iter(numberOfQuestions);
};

export default () => {
  const name = 'What is the result of the expression?';
  const numberOfQuestions = 3;
  run(name, getQuestionsAndAnswers(numberOfQuestions));
};
