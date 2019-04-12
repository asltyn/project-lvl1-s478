import { cons } from 'hexlet-pairs';
import { run, roundNumbers } from '../game';
import getRandomFromRange from '../random';

const minArgumentValue = 0;
const maxArgumentValue = 100;
const operatorsAmount = 3;


const functions = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const getQuestionsAndAnswers = (numberOfQuestions) => {
  const iter = (i, questions, answers) => {
    if (i < 1) {
      return cons(questions, answers);
    }
    const firstArgument = getRandomFromRange(minArgumentValue, maxArgumentValue);
    const secondArgument = getRandomFromRange(minArgumentValue, maxArgumentValue);
    const numberOfOperator = getRandomFromRange(0, operatorsAmount - 1);
    const operator = Object.keys(functions)[numberOfOperator];
    const question = `${firstArgument} ${operator} ${secondArgument}`;
    const answer = `${functions[operator](firstArgument, secondArgument)}`;
    return iter(i - 1, cons(question, questions), cons(answer, answers));
  };
  return iter(numberOfQuestions);
};

export default () => {
  const name = 'What is the result of the expression?';
  run(name, getQuestionsAndAnswers(roundNumbers));
};
