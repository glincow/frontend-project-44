import runGame from '../index.js';
import getRndInteger from '../math.js';

const description = 'What is the result of the expression?';

const generateQuestionAndAnswer = () => {
  const operations = ['+', '-', '*'];
  const firstNumber = getRndInteger(1, 10);
  const secondNumber = getRndInteger(1, 10);
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const question = `${firstNumber} ${operation} ${secondNumber}`;

  let answer;
  switch (operation) {
    case '+':
      answer = Number(firstNumber) + Number(secondNumber);
      break;
    case '-':
      answer = Number(firstNumber) - Number(secondNumber);
      break;
    case '*':
      answer = Number(firstNumber) * Number(secondNumber);
      break;
    default:
      console.log('Something went wrong...');
  }

  return [question, String(answer)];
};

export default () => runGame(description, generateQuestionAndAnswer);
