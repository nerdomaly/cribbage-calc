#!/usr/bin/env node

import chalk = require('chalk');
import clear = require('clear');
import figlet = require('figlet');
import path = require('path');
import program = require('commander');

clear();
console.log(chalk.red(figlet.textSync('cribbage-calc', { horizontalLayout: 'full' })));
