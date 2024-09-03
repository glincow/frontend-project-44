#!/usr/bin/env node

import { greet, getName } from '../src/cli.js';

console.log('Welcome to the Brain Games!');

greet(getName('May I have your name?'));
