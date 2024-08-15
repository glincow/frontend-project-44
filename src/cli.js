import readlineSync from 'readline-sync';

const greet = (question) => {
  const name = readlineSync.question(`${question}: `);
  console.log(`Hello, ${name}!`);
};

export default greet;
