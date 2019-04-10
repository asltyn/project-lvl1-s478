import readlineSync from 'readline-sync';

const run = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if answer even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  let i = 1;
  while (i <= 3) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${number % 2 === 0 ? "'yes'" : "'no'"}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    i += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export { run, brainEven };
