#!/usr/bin/env node

// tslint:disable: no-console

import chalk = require('chalk');
import clear = require('clear');
import figlet = require('figlet');
import path = require('path');
import program = require('commander');

import { Card } from './classes/card';
import { Rank } from './enum/rank.enum';
import { Suit } from './enum/suit.enum';
import { getCombosBySize } from './utility/utility';
import { HandPermutation } from './classes/handPermutation';

import * as _ from 'lodash';

function cardArray(value, dummyPrevious) {
    const cardsText = value.split(',');
    const retVal: Array<Card> = [];

    if (cardsText.length !== 6) {
        console.log(chalk.red('You must specify six cards.'));
        process.exit();
    }

    for (const cardText of cardsText) {
        if (cardText.length !== 2) {
            console.log(chalk.red('Cards must only be two characters.'));
            process.exit();
        }

        const rank = Rank.getByShorthand(cardText[0]);
        const suit = Suit.getByShorthand(cardText[1]);

        if (!rank || !suit) {
            console.log(chalk.red(`${cardText} is an unrecognized card.`));
            process.exit();
        }

        retVal.push(new Card(rank, suit));
    }

    return retVal;
}

export function main() {
    clear();
    console.log(chalk.red(figlet.textSync('crib-calc', { horizontalLayout: 'full' })));

    program
        .version('0.0.1')
        .requiredOption('-c, --cards [cards]', 'Comma seperated list of cards.', cardArray)
        .parse(process.argv);

    const dealtCards = program['cards'];

    console.log(chalk.magentaBright(`Cards dealt to the user: ${dealtCards.map((card) => card.getCardDescription())}`));

    const permutations = getCombosBySize(dealtCards, 4);

    console.log('\n');
    console.log(`Checking ${permutations.length} number of permutaions...`);
    console.log('\n');

    const handPermutations = _.sortBy(
        permutations.map((x) => new HandPermutation(x)),
        'meanScore'
    ).reverse();

    // check for one right now to see if the logic works.
    for (const handPermutation of handPermutations) {
        console.log(chalk.blue(`Using permutation: ${handPermutation.getDescription()}`));

        console.log(chalk.green(`Top 5 hands:`));
        handPermutation.topFiveHands.forEach((element) => {
            console.log(`${element.getHandDescription()} scores ${element.totalScore}`);
        });

        console.log(chalk.green(`Mean hand score: ${handPermutation.meanScore}`));
        console.log(chalk.green(`Standard score deviation: ${handPermutation.scoreDeviation}`));
        console.log(chalk.green(`Median hand score: ${handPermutation.medianScore}`));
        console.log(chalk.green(`Highest potential score: ${handPermutation.highestScore}`));
        console.log(chalk.green(`Lowest potential score: ${handPermutation.lowestScore}`));

        console.log('\n');
    }
}

main();
