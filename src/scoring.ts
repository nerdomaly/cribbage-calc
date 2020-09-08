import { Card } from './interface/card.interface';
import { Suit } from './enum/suit.enum';
import { Rank } from './enum/rank.enum';

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

export function scoreFifteens(hand: Array<Card>) {
	const score = 0;

	// for (let card = 0; card < hand.length; card++) {}

	return score;
}

export function scoreRuns(hand: Array<Card>) {
	return 0;
}

export function scoreNobs(hand: Array<Card>) {
	const cutCard = hand[0];

	for (let i = 1; i < hand.length; i++) {
		if (hand[i].rank === Rank.Jack && hand[i].suit === cutCard.suit) {
			return 1;
		}
	}

	return 0;
}
