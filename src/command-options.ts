// tslint:disable: no-console
import chalk = require('chalk');

import { Rank } from './enum/rank.enum';
import { Suit } from './enum/suit.enum';
import { Card } from './classes/card';

export function cardArrayOption(value, dummyPrevious) {
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

export function permutationOption(value, dummyPrevious): number {
    if (isNaN(value)) {
        console.log(chalk.red(`Permutations must be be a number.`));
        process.exit();
    }

    let retVal = parseInt(value, 10);

    if (retVal < 1) retVal = 1;
    if (retVal > 15) retVal = 15;

    return retVal;
}
