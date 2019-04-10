import { cons, car, cdr, toString } from 'hexlet-pairs';
import run from '../game';

export default () => {
  const name = 'What is the result of the expression?';
  const questionsAndAnswers = getQuestionsAndAnswers(3);
  run(name, questionsAndAnswers);
}

const getQuestionsAndAnswers = numberOfQuestions => {
  const iter = (n, questions, answers) => {
         if (n < 1) {
            return cons(questions, answers);
            }
         const randomNumber1 = Math.floor(Math.random() * 100);
         const randomNumber2 = Math.floor(Math.random() * 100);
         const operationNumber = Math.floor(Math.random() * 3) + 1;
         const question = getQuestion(randomNumber1, randomNumber2, operationNumber);
         const answer = getAnswer(randomNumber1, randomNumber2, operationNumber);
         return iter(n - 1, cons(question, questions), cons(answer, answers));
         }
  return iter(numberOfQuestions);
}

const getQuestion = (num1, num2, oper) => {
switch (oper) {
   case 1: return `${num1} + ${num2}`;
   case 2: return `${num1} - ${num2}`;
   case 3: return `${num1} * ${num2}`;
  }
}

const getAnswer = (num1, num2, oper) => {
switch (oper) {
   case 1: return (num1 + num2).toString();
   case 2: return (num1 - num2).toString();
   case 3: return (num1 * num2).toString();
  }
}
