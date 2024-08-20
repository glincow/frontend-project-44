import runGame from '../index.js';

const description = 'What is the result of the expression?';

const generateQuestion = () => {
  const operations = ['+', '-', '*'];
  const firstNumber = Math.floor(Math.random() * 10 + 1);
  const secondNumber = Math.floor(Math.random() * 10 + 1);
  const operation = operations[Math.floor(Math.random() * operations.length)];
  return `${firstNumber} ${operation} ${secondNumber}`;
};

const generateAnswer = (question) => {
  const [firstNumber, operation, secondNumber] = question.split(' ');
  let answer;
  if (operation === '+') {
    answer = Number(firstNumber) + Number(secondNumber);
  } else if (operation === '-') {
    answer = Number(firstNumber) - Number(secondNumber);
  } else if (operation === '*') {
    answer = Number(firstNumber) * Number(secondNumber);
  }
  return String(answer);
};

export default () => runGame(description, generateQuestion, generateAnswer);
