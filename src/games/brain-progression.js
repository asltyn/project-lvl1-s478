import { cons } from 'hexlet-pairs';
import run from '../game';
import getRandomInt from '../random';

const ElementsAmount = 10;

const getQuestion = (firstElement, step, hiddenElementIndex) => {
  const iter = (index, acc) => {
    if (index > ElementsAmount) return acc;
    if (index === hiddenElementIndex) return iter(index + 1, `${acc} ${'..'}`);
    return iter(index + 1, `${acc} ${firstElement + step * (index - 1)}`);
  };
  return iter(1, '');
};

const getQuestionsAndAnswers = (numberOfQuestions) => {
  const iter = (i, questions, answers) => {
    if (i < 1) {
      return cons(questions, answers);
    }
    const firstElement = getRandomInt(1, 10);
    const step = getRandomInt(1, 10);
    const hiddenElementIndex = getRandomInt(1, 10);
    const question = getQuestion(firstElement, step, hiddenElementIndex);
    const answer = `${firstElement + step * (hiddenElementIndex - 1)}`;
    return iter(i - 1, cons(question, questions), cons(answer, answers));
  };
  return iter(numberOfQuestions, '', '');
};

export default () => {
  const gameDescription = 'What number is missing in the progression?';
  run(gameDescription, getQuestionsAndAnswers);
};
