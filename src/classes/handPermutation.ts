import { Card } from './card';
import { ScoringHand } from './scoringHand';
import { Ranks } from '../enum/rank.enum';
import { Suits } from '../enum/suit.enum';
import * as _ from 'lodash';
import { median, mode, standardDeviation, average } from '../utility/scoring';

export class HandPermutation {
    public readonly handCards: Array<Card>;
    public readonly scoringPermutations: Array<ScoringHand> = [];

    public readonly topFiveHands: Array<ScoringHand>;
    public readonly lowestScore: number;
    public readonly highestScore: number;
    public readonly meanScore: number;
    public readonly medianScore: number;
    public readonly scoreDeviation: number;

    public constructor(handCards) {
        if (handCards.length !== 4) throw new Error('There must be exactly four hand cards in a HandPermutation.');

        this.handCards = handCards;

        for (const rank of Ranks) {
            for (const suit of Suits) {
                const cutCard = new Card(rank, suit);

                const exists = _.some(handCards, (card) => _.isEqual(card, cutCard));

                if (!exists) {
                    this.scoringPermutations.push(new ScoringHand(cutCard, handCards));
                }
            }
        }

        const sortedPermutations = _.sortBy(this.scoringPermutations, ['totalScore']).reverse();
        const sortedScores = sortedPermutations.map((x) => x.totalScore);

        this.topFiveHands = _.take(sortedPermutations, 5);

        this.lowestScore = sortedPermutations[this.scoringPermutations.length - 1].totalScore;
        this.highestScore = sortedPermutations[0].totalScore;
        this.meanScore = average(sortedScores);
        this.medianScore = median(sortedScores);
        this.scoreDeviation = standardDeviation(sortedScores);
    }

    public getDescription() {
        return `${this.handCards.map((card) => card.getCardDescription())}`;
    }
}
