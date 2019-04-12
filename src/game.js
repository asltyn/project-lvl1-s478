import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const roundNumbers = 3;

export const run = (gameName, questionsAndAnswers) => {
  console.log(`Welcome to the Brain Games!\n${gameName}\n`);

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  const iter = (counter, questions, answers) => {
    if (counter < 1) {
      return `Congratulations, ${playerName}!`;
    }
    const currentQuestion = car(questions);
    const rightAnswer = car(answers);
    console.log(`Question: ${currentQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      return `'${playerAnswer}' is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${playerName}!`;
    }
    return iter(counter - 1, cdr(questions), cdr(answers));
  };

  const gameOver = iter(roundNumbers, car(questionsAndAnswers), cdr(questionsAndAnswers));
  console.log(gameOver);
};
