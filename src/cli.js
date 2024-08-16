import readlineSync from 'readline-sync';

export const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

export const getName = (question) => {
  const name = readlineSync.question(`${question}: `);
  return name;
};
