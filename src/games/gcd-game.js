import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const generateQuestion = () => {
  const firstNumber = Math.floor(Math.random() * 101 + 1);
  const secondNumber = Math.floor(Math.random() * 101 + 1);
  return `${firstNumber} ${secondNumber}`;
};

const generateAnswer = (question) => {
  let [firstNumber, secondNumber] = question.split(' ');
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
  return String(firstNumber + secondNumber);
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
