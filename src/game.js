import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundsNumber = 3;

export default (gameName, getQuestionsAndAnswers) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameName}\n`);

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  const iter = (counter, questions, answers) => {
    if (counter < 1) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const currentQuestion = car(questions);
    const rightAnswer = car(answers);
    console.log(`Question: ${currentQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    iter(counter - 1, cdr(questions), cdr(answers));
  };

  const questionsAndAnswers = getQuestionsAndAnswers(roundsNumber);
  const listOfQuestions = car(questionsAndAnswers);
  const listOfAnswers = cdr(questionsAndAnswers);
  iter(roundsNumber, listOfQuestions, listOfAnswers);
};
