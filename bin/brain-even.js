#!/usr/bin/env node
import even from '../src/games/even.js';
import engine from '../src/games/index.js';

engine(even, 'Answer "yes" if the number is even, otherwise answer "no".');
