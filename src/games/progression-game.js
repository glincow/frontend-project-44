import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateQuestion = () => {
  const progressionLength = getRndInteger(5, 10);
  const progressionStart = getRndInteger(1, 10);
  const progressionBase = getRndInteger(1, 10);
  const progressionHiddenIndex = getRndInteger(0, progressionLength - 1);
  let result = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === progressionHiddenIndex) {
      result = i === 0 ? '.. ' : `${result}.. `;
    } else {
      result = `${result}${progressionStart + progressionBase * i} `;
    }
  }
  return result.trim();
};

const generateAnswer = (question) => {
  const numbers = question.split(' ');
  const progressionLength = numbers.length;
  const progressionHiddenIndex = numbers.indexOf('..');
  let answer;
  if (progressionHiddenIndex === progressionLength - 1) {
    answer = Number(numbers[progressionHiddenIndex - 1]) * 2
    - Number(numbers[progressionHiddenIndex - 2]);
  } else if (progressionHiddenIndex === 0) {
    answer = Number(numbers[progressionHiddenIndex + 1])
    - (Number(numbers[progressionHiddenIndex + 2])
    - Number(numbers[progressionHiddenIndex + 1]));
  } else {
    answer = Number(numbers[progressionHiddenIndex - 1])
    + (Number(numbers[progressionHiddenIndex + 1])
    - Number(numbers[progressionHiddenIndex - 1])) / 2;
  }
  return answer;
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
