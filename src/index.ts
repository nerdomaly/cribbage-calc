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

export function main() {
    clear();
    console.log(chalk.red(figlet.textSync('cribbage-calc', { horizontalLayout: 'full' })));

    const dealtCards: Array<Card> = [
        new Card(Rank.Six, Suit.Diamonds),
        new Card(Rank.Nine, Suit.Spades),
        new Card(Rank.Four, Suit.Hearts),
        new Card(Rank.Four, Suit.Clubs),
        new Card(Rank.Three, Suit.Diamonds),
        new Card(Rank.Seven, Suit.Diamonds),
    ];

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
