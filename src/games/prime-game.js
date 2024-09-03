import runGame from '../index.js';
import getRndInteger from '../math.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const number = getRndInteger(1, 100);

  let isPrime = true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  const answer = isPrime ? 'yes' : 'no';
  return [number, answer];
};

const printRightAnswerMessage = (userAnswer, answer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
};

export default () => runGame(
  description,
  generateQuestionAndAnswer,
  printRightAnswerMessage,
);
