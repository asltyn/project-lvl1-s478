import { cons } from 'hexlet-pairs';
import { run, roundNumbers } from '../game';
import getRandomInt from '../random';

const minFirstElemValue = 1;
const maxFirstElemValue = 10;
const minStep = 1;
const maxStep = 10;
const minHiddenIndex = 1;
const maxHiddenIndex = 10;
const ElementsAmount = 10;

const getQuestionString = (firstElement, step, hiddenIndex) => {
  const iter = (index, acc) => {
    if (index > ElementsAmount) return acc;
    if (index === hiddenIndex) return iter(index + 1, `${acc} ${'..'}`);
    return iter(index + 1, `${acc} ${firstElement + step * (index - 1)}`);
  };
  return iter(1, '');
};

const getQuestionsAndAnswers = (numberOfQuestions) => {
  const iter = (i, questions, answers) => {
    if (i < 1) {
      return cons(questions, answers);
    }
    const firstElement = getRandomInt(minFirstElemValue, maxFirstElemValue);
    const step = getRandomInt(minStep, maxStep);
    const hiddenIndex = getRandomInt(minHiddenIndex, maxHiddenIndex);
    const question = getQuestionString(firstElement, step, hiddenIndex);
    const answer = `${firstElement + step * (hiddenIndex - 1)}`;
    return iter(i - 1, cons(question, questions), cons(answer, answers));
  };
  return iter(numberOfQuestions,'','');
};

export default () => {
  const gameName = 'What number is missing in the progression?';
  run(gameName, getQuestionsAndAnswers(roundNumbers));
};
