import runGame from '../index.js';
import getRndInteger from '../math.js';

const description = 'What number is missing in the progression?';

const generateQuestionAndAnswer = () => {
  const progressionLength = getRndInteger(5, 10);
  const progressionStart = getRndInteger(1, 10);
  const progressionBase = getRndInteger(1, 10);
  const progressionHiddenIndex = getRndInteger(0, progressionLength - 1);
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === progressionHiddenIndex) {
      question = i === 0 ? '.. ' : `${question}.. `;
    } else {
      question = `${question}${progressionStart + progressionBase * i} `;
    }
  }

  const answer = progressionStart + progressionHiddenIndex * progressionBase;
  return [question.trim(), answer];
};

const printRightAnswerMessage = (userAnswer, answer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
};

export default () => runGame(
  description,
  generateQuestionAndAnswer,
  printRightAnswerMessage,
);
