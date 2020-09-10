import { Card } from './card';
import { scoreNobs, scorePairs, scoreFifteens, scoreRuns, scoreFlush, totalRank } from '../utility/scoring';

export class ScoringHand {
    public readonly cutCard: Card;
    public readonly handCards: Array<Card>;

    public readonly nobsScore: number;
    public readonly pairsScore: number;
    public readonly fifteensScore: number;
    public readonly runsScore: number;
    public readonly flushScore: number;

    public readonly totalScore: number;
    public readonly totalRank: number;

    public get allCards(): Array<Card> {
        return [this.cutCard, ...this.handCards];
    }

    public constructor(drawCard: Card, handCards: Array<Card>) {
        if (handCards.length > 4) throw new Error('Scoring hands can only have four hand cards');

        this.cutCard = drawCard;
        this.handCards = handCards;

        this.nobsScore = scoreNobs(this.cutCard, this.handCards);
        this.pairsScore = scorePairs(this.allCards);
        this.fifteensScore = scoreFifteens(this.allCards);
        this.runsScore = scoreRuns(this.allCards);
        this.flushScore = scoreFlush(this.cutCard, this.handCards);

        this.totalScore = this.nobsScore + this.pairsScore + this.fifteensScore + this.runsScore + this.flushScore;
        this.totalRank = totalRank(this.allCards);
    }

    public getHandDescription(): string {
        let retVal = '';

        retVal += this.cutCard.getCardDescription();
        retVal += ' and hand ';
        retVal += this.handCards.map((card) => card.getCardDescription());

        return retVal;
    }
}
