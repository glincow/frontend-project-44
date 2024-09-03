import readlineSync from 'readline-sync';
import { greet, getName } from './cli.js';

const runGame = (
  description,
  generateQuestionAndAnswer,
  printRightAnswerMessage = () => undefined,
) => {
  const maxRounds = 3;
  let roundCount = 0;

  console.log('Welcome to the Brain Games!');
  const name = getName('May I have your name?');
  greet(name);
  console.log(description);

  while (roundCount < maxRounds) {
    const [question, answer] = generateQuestionAndAnswer();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === String(answer)) {
      console.log('Correct!');
      roundCount += 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      printRightAnswerMessage(userAnswer, answer);
      break;
    }
  }

  if (roundCount === maxRounds) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default runGame;
