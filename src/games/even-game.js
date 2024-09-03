import runGame from '../index.js';
import getRndInteger from '../math.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const numberToCheck = getRndInteger(1, 100);
  const answer = numberToCheck % 2 === 0 ? 'yes' : 'no';
  return [numberToCheck, answer];
};

export default () => runGame(description, generateQuestionAndAnswer);
