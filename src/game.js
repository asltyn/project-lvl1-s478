import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from 'hexlet-pairs';

export default (gameName, questionsAndAnswers) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameName}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  const iter = (counter, questions, answers) => {
    if (counter < 1) {
      return console.log(`Congratulations, ${playerName}!`);
    }
    console.log(`Question: ${car(questions)}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === car(answers)) {
      console.log('Correct!');
    } else {
       console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was ${car(answers)}.`);
       return console.log(`Let's try again, ${playerName}!`);
    }
    return iter(counter - 1, cdr(questions), cdr(answers));
  }

  iter(3, car(questionsAndAnswers), cdr(questionsAndAnswers));
}



