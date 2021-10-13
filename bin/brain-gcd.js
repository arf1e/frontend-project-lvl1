#!/usr/bin/env node
import gcd from '../src/games/gcd.js';
import engine from '../src/games/index.js';

engine(gcd, 'Find the greatest common divisor of given numbers.');
