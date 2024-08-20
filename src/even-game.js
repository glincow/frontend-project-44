import runGame from './index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestion = () => {
  const numberToCheck = Math.floor(Math.random() * 101);
  return numberToCheck;
};

const generateAnswer = (question) => {
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return answer;
};

export default () => runGame(description, generateQuestion, generateAnswer);
