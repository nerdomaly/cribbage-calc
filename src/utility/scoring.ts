import { Card } from '../classes/card';
import { Rank } from '../enum/rank.enum';
import { getCombosBySize } from './utility';

import * as _ from 'lodash';
import { forEach } from 'lodash';
import { ScoringHand } from '../classes/scoringHand';

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
            if (totalRank(perm) === 15) {
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

// TODO: Implement Flush Scoring
export function scoreFlush(cutCard: Card, hand: Array<Card>): number {
    const handFlush = _.every(hand, (card) => card.suit === hand[0].suit);

    if (handFlush) {
        if (cutCard.suit === hand[0].suit) {
            return 5;
        } else {
            return 4;
        }
    }

    return 0;
}

export function scoreNobs(cutCard: Card, hand: Array<Card>): number {
    for (const card of hand) {
        if (card.rank === Rank.Jack && card.suit === cutCard.suit) {
            return 1;
        }
    }

    return 0;
}

export function totalRank(hand: Array<Card>): number {
    return hand.reduce((a, b) => a + (b.rank.value || 0), 0);
}

/**
 * The "median" is the "middle" value in the list of numbers.
 *
 * @param {Array} numbers An array of numbers.
 * @return {Number} The calculated median value from the specified numbers.
 */
export function median(values: Array<number>): number {
    let medianValue = 0;
    const numsLen = values.length;
    values.sort();

    if (numsLen % 2 === 0) {
        // average of two middle numbers
        medianValue = (values[numsLen / 2 - 1] + values[numsLen / 2]) / 2;
    } else {
        // middle number only
        medianValue = values[(numsLen - 1) / 2];
    }

    return medianValue;
}

/**
 * The "mode" is the number that is repeated most often.
 *
 * For example, the "mode" of [3, 5, 4, 4, 1, 1, 2, 3] is [1, 3, 4].
 *
 * @param {Array} values An array of numbers.
 * @return {Array} The mode of the specified numbers.
 */
export function mode(values: Array<number>): Array<number> {
    // as result can be bimodal or multi-modal,
    // the returned result is provided as an array
    // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
    const modes = [];
    const count = [];
    let maxIndex = 0;

    for (const i of values) {
        const num = values[i];
        count[num] = (count[num] || 0) + 1;
        if (count[num] > maxIndex) {
            maxIndex = count[num];
        }
    }

    for (const i in count) {
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
    }

    return modes;
}

export function standardDeviation(values: Array<number>): number {
    const avg = average(values);

    const squareDiffs = values.map((value) => {
        const diff = value - avg;
        const sqrDiff = diff * diff;
        return sqrDiff;
    });

    const avgSquareDiff = average(squareDiffs);

    const stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
}

export function average(values: Array<number>): number {
    const total = values.reduce((sum, value) => {
        return sum + value;
    }, 0);

    const avg = total / values.length;
    return avg;
}
