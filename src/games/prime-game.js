import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestion = () => {
  const number = Math.floor(Math.random() * 101 + 1);
  return number;
};

const generateAnswer = (question) => {
  let isPrime = true;
  const number = question;
  for (let i = 2; i < number; i += 1) {
    if (question % i === 0) {
      isPrime = false;
      break;
    }
  }
  const result = isPrime ? 'yes' : 'no';
  return result;
};

const printRightAnswerMessage = (userAnswer, answer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
};

export default () => runGame(
  description,
  generateQuestion,
  generateAnswer,
  printRightAnswerMessage,
);
