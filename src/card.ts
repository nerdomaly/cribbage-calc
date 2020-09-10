import { Rank } from './enum/rank.enum';
import { Suit } from './enum/suit.enum';

export class Card {
    public rank: Rank;
    public suit: Suit;

    public constructor(rank: Rank, suit: Suit) {
        this.rank = rank;
        this.suit = suit;
    }

    public getCardDescription(): string {
        const retVal = `[${this.rank.description} of ${this.suit.description}]`;

        return retVal;
    }
}
