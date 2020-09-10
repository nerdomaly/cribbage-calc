import { Card } from './card';
import { scoreNobs, scorePairs, scoreFifteens, scoreRuns, scoreFlush, totalRank } from './scoring';

export class ScoringHand {
    public cutCard: Card;
    public handCards: Array<Card>;

    public get allCards(): Array<Card> {
        return [this.cutCard, ...this.handCards];
    }

    public constructor(drawCard: Card, handCards: Array<Card>) {
        this.cutCard = drawCard;
        this.handCards = handCards;
    }

    public getHandDescription(): string {
        let retVal = '';

        retVal += this.cutCard.getCardDescription();
        retVal += ' and hand ';
        retVal += this.handCards.map((card) => card.getCardDescription());

        return retVal;
    }

    public scoreNobs(): number {
        return scoreNobs(this.cutCard, this.handCards);
    }

    public scorePairs(): number {
        return scorePairs(this.allCards);
    }

    public scoreFifteens(): number {
        return scoreFifteens(this.allCards);
    }

    public scoreRuns(): number {
        return scoreRuns(this.allCards);
    }

    public scoreFlush(): number {
        return scoreFlush(this.cutCard, this.handCards);
    }

    public scoreTotal(): number {
        return this.scoreNobs() + this.scorePairs() + this.scoreFifteens() + this.scoreRuns() + this.scoreFlush();
    }

    public totalRank(): number {
        return totalRank(this.allCards);
    }
}
