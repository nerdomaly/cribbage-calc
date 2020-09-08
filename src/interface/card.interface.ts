import { Rank } from '../enum/rank.enum';
import { Suit } from '../enum/suit.enum';

export interface Card {
	rank: Rank;
	suit: Suit;
}

export function getCardDescription(card: Card | undefined): string {
	if (card === undefined) return '';

	const retVal = `[${card.rank.description} of ${card.suit.description}]`;

	return retVal;
}

export function getHandDescription(passedHand: Array<Card>): string {
	let retVal = '';
	const hand = [...passedHand];

	retVal += getCardDescription(hand.shift());
	retVal += ' and hand ';
	retVal += hand.map((card) => getCardDescription(card));

	return retVal;
}
