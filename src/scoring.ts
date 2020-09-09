import { Card, getHandDescription, getCardDescription } from './interface/card.interface';
import { Suit } from './enum/suit.enum';
import { Rank } from './enum/rank.enum';
import { getCombosBySize } from './utility';

import * as _ from 'lodash';

export function scorePairs(passedHand: Array<Card>): number {
    const hand = [...passedHand];

    if (hand.length === 1) {
        return 0;
    }

    const compareCard = hand[0];
    let score = 0;

    for (let i = 1; i < hand.length; i++) {
        if (hand[i].rank === compareCard.rank) {
            score += 2;
        }
    }

    hand.shift();

    return score + scorePairs(hand);
}

export function scoreFifteens(hand: Array<Card>): number {
    let score = 0;

    for (let setSize = 0; setSize < hand.length; setSize++) {
        const permutations = getCombosBySize(hand, setSize);

        permutations.forEach((perm) => {
            if (totalHandValue(perm) === 15) {
                score += 2;
            }
        });
    }

    return score;
}

export function scoreRuns(hand: Array<Card>): number {
    const runPermutations: Array<Array<Card>> = [];
    const sortedHand = _.sortBy(hand, (x) => x.rank.id);

    for (let setSize = sortedHand.length; setSize > 2; setSize--) {
        const permutations = getCombosBySize(sortedHand, setSize);

        permutations.forEach((perm) => {
            const workingPerm = [...perm];

            let isRun = true;

            let previousCard: Card;
            do {
                const currentCard: Card = workingPerm.shift();

                if (previousCard === undefined) {
                    previousCard = currentCard;
                } else {
                    if (previousCard.rank.id + 1 !== currentCard.rank.id) {
                        isRun = false;
                        break;
                    }
                }

                previousCard = currentCard;
            } while (workingPerm.length > 0);

            if (isRun) {
                if (!_.some(runPermutations, (testPerm) => _.differenceWith(perm, testPerm, _.isEqual).length === 0)) {
                    runPermutations.push(perm);
                }
            }
        });
    }

    if (runPermutations.length > 0) {
        return _.sumBy(runPermutations, (x) => x.length);
    } else {
        return 0;
    }
}

export function scoreTotal(hand: Array<Card>): number {
    return scoreNobs(hand) + scorePairs(hand) + scoreFifteens(hand) + scoreRuns(hand);
}

export function scoreNobs(hand: Array<Card>): number {
    const cutCard = hand[0];

    for (let i = 1; i < hand.length; i++) {
        if (hand[i].rank === Rank.Jack && hand[i].suit === cutCard.suit) {
            return 1;
        }
    }

    return 0;
}

export function totalHandValue(hand: Array<Card>): number {
    return hand.reduce((a, b) => a + (b.rank.value || 0), 0);
}
