import readlineSync from 'readline-sync';

export const greet = (question) => {
    const name = readlineSync.question(`${question}: `);
    console.log(`Hello, ${name}!`)
}