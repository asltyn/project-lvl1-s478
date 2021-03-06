import { cons } from 'hexlet-pairs';
import run from '../game';
import getRandomInt from '../random';

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
    const firstArgument = getRandomInt(0, 100);
    const secondArgument = getRandomInt(0, 100);
    const operators = Object.keys(functions);
    const numberOfOperator = getRandomInt(0, operators.length - 1);
    const operator = operators[numberOfOperator];
    const question = `${firstArgument} ${operator} ${secondArgument}`;
    const answer = `${functions[operator](firstArgument, secondArgument)}`;
    return iter(i - 1, cons(question, questions), cons(answer, answers));
  };
  return iter(numberOfQuestions, '', '');
};

export default () => {
  const gameDescription = 'What is the result of the expression?';
  run(gameDescription, getQuestionsAndAnswers);
};
