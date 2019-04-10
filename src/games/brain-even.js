import { cons, car, cdr, toString } from 'hexlet-pairs';
import run from '../game';

export default () => {
  const name = 'Answer "yes" if answer even otherwise answer "no".';
  const questionsAndAnswers = getQuestionsAndAnswers(3);
  run(name, questionsAndAnswers);
}

const getQuestionsAndAnswers = numberOfQuestions => {
  const iter = (n, questions, answers) => {
         if (n < 1) {
            return cons(questions, answers);
            }
         const question = Math.floor(Math.random() * 100);
         const answer = isEven(question) ? 'yes' : 'no';
         return iter(n - 1, cons(question, questions), cons(answer, answers));
         }
  return iter(numberOfQuestions);
}

const isEven = number => number % 2 === 0 ? true : false;
