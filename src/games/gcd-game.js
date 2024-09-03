import runGame from '../index.js';
import getRndInteger from '../math.js';

const description = 'Find the greatest common divisor of given numbers.';

const generateQuestionAndAnswer = () => {
  let firstNumber = getRndInteger(1, 100);
  let secondNumber = getRndInteger(1, 100);
  const question = `${firstNumber} ${secondNumber}`;

  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
  const answer = String(firstNumber + secondNumber);
  return [question, answer];
};

const printRightAnswerMessage = (userAnswer, answer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
};

export default () => runGame(
  description,
  generateQuestionAndAnswer,
  printRightAnswerMessage,
);
