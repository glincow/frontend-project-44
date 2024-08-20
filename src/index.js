import readlineSync from 'readline-sync';
import { greet, getName } from './cli.js';

const runGame = (description, generateQuestion, generateAnswer) => {
  const maxErrorsCount = 1;
  const maxScore = 3;
  let score = 0;
  let errorsCount = 0;

  const name = getName('May I have your name?');
  greet(name);
  console.log(description);
  while (errorsCount < maxErrorsCount && score < maxScore) {
    const question = generateQuestion();
    const answer = generateAnswer(question);
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    
    if (userAnswer === answer) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      errorsCount += 1;
    }
  }

  if (score === maxScore) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default runGame;
