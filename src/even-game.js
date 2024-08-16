import readlineSync from 'readline-sync';

const runEvenGame = (name) => {
  const maxErrorsCount = 1;
  const maxScore = 3;
  let score = 0;
  let errorsCount = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (errorsCount < maxErrorsCount && score < maxScore) {
    const numberToCheck = Math.floor(Math.random() * 101);
    const rightAnswer = numberToCheck % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${numberToCheck}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      errorsCount += 1;
    }
  }

  if (score === maxScore) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default runEvenGame;
