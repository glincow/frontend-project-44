#!/usr/bin/env node

import { greet, getName } from '../src/cli.js';
import runEvenGame from '../src/even-game.js';

console.log('Welcome to the Brain Games!');
const name = getName('May I have your name?');
greet(name);

runEvenGame(name);
