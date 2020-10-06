#!/usr/bin/env node

// tslint:disable: no-console

import chalk = require('chalk');
import clear = require('clear');
import figlet = require('figlet');
import path = require('path');
import program = require('commander');

import { getCombosBySize } from './utility/utility';
import { HandPermutation } from './class/handPermutation';

import * as _ from 'lodash';
import { cardArrayOption, permutationOption } from './command-options';

export function main() {
    clear();
    console.log(chalk.red(figlet.textSync('crib-calc', { horizontalLayout: 'full' })));

    program
        .version('0.0.1')
        .requiredOption('-c, --cards [cards]', 'Comma seperated list of cards.', cardArrayOption)
        .option('-p, --permutations <number>', 'Number of permutations from 1-15', permutationOption, '5')
        .option('-sh, --show-best-hands', 'Display a list of best hands per permutation.')
        .parse(process.argv);

    const dealtCards = program['cards'];

    console.log(chalk.magentaBright(`Cards dealt to the user: ${dealtCards.map((card) => card.getCardDescription())}`));

    const permutations = getCombosBySize(dealtCards, 4);

    console.log('\n');
    console.log(`Checking ${program['permutations']} number of permutaions...`);
    console.log('\n');

    const handPermutations = _.sortBy(
        permutations.map((x) => new HandPermutation(x)),
        'meanScore'
    ).reverse();

    let permutation = 0;
    // check for one right now to see if the logic works.
    for (const handPermutation of handPermutations) {
        permutation++;

        if (permutation > program['permutations']) {
            break;
        }
        console.log(chalk.blue(`Using permutation: ${handPermutation.getDescription()}`));

        if (program['show-best-hands']) {
            console.log(chalk.green(`Top 5 hands:`));
            handPermutation.topFiveHands.forEach((element) => {
                console.log(`${element.getHandDescription()} scores ${element.totalScore}`);
            });
        }

        console.log(chalk.green(`Mean hand score: ${handPermutation.meanScore}`));
        console.log(chalk.green(`Standard score deviation: ${handPermutation.scoreDeviation}`));
        console.log(chalk.green(`Median hand score: ${handPermutation.medianScore}`));
        console.log(chalk.green(`Highest potential score: ${handPermutation.highestScore}`));
        console.log(chalk.green(`Lowest potential score: ${handPermutation.lowestScore}`));

        console.log('\n');
    }
}

main();
