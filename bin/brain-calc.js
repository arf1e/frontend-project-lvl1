#!/usr/bin/env node
import calc from '../src/games/calculator.js';
import engine from '../src/games/index.js';

engine(calc, 'What is the result of the expression?');
