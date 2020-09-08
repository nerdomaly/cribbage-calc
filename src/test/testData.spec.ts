import { Card } from '../interface/card.interface';
import { Rank } from '../enum/rank.enum';
import { Suit } from '../enum/suit.enum';

export interface CardHand {
	hand: Array<Card>;

	pairScore: number;
	pairDescription: string;

	fifteenScore?: number;
	runsScore?: number;

	nobsScore: number;
	nobsDescription: string;
}

export const TestHands: Array<CardHand> = [
	{
		hand: [
			{ rank: Rank.Jack, suit: Suit.Clubs },
			{ rank: Rank.Jack, suit: Suit.Hearts },
			{ rank: Rank.Queen, suit: Suit.Clubs },
			{ rank: Rank.King, suit: Suit.Clubs },
			{ rank: Rank.Ace, suit: Suit.Clubs },
		],

		pairScore: 2,
		pairDescription: 'should return two for one pair',
		nobsScore: 0,
		nobsDescription: 'should return zero for nobs',
	},
	{
		hand: [
			{ rank: Rank.King, suit: Suit.Clubs },
			{ rank: Rank.King, suit: Suit.Diamonds },
			{ rank: Rank.Jack, suit: Suit.Clubs },
			{ rank: Rank.Jack, suit: Suit.Hearts },
			{ rank: Rank.Queen, suit: Suit.Clubs },
		],
		pairScore: 4,
		pairDescription: 'should return four for two pair',
		nobsScore: 1,
		nobsDescription: 'should return one for nobs',
	},
	{
		hand: [
			{ rank: Rank.Jack, suit: Suit.Clubs },
			{ rank: Rank.Jack, suit: Suit.Hearts },
			{ rank: Rank.Queen, suit: Suit.Clubs },
			{ rank: Rank.King, suit: Suit.Clubs },
			{ rank: Rank.Jack, suit: Suit.Diamonds },
		],
		pairScore: 6,
		pairDescription: 'should return six for three of a kind',
		nobsScore: 0,
		nobsDescription: 'should return zero for nobs',
	},
	{
		hand: [
			{ rank: Rank.Queen, suit: Suit.Clubs },
			{ rank: Rank.Jack, suit: Suit.Clubs },
			{ rank: Rank.Jack, suit: Suit.Hearts },
			{ rank: Rank.Jack, suit: Suit.Spades },
			{ rank: Rank.Jack, suit: Suit.Diamonds },
		],
		pairScore: 12,
		pairDescription: 'should return twelve for four of a kind',
		nobsScore: 1,
		nobsDescription: 'should return one for nobs for nobs',
	},
	{
		hand: [
			{ rank: Rank.Five, suit: Suit.Clubs },
			{ rank: Rank.Jack, suit: Suit.Clubs },
			{ rank: Rank.Jack, suit: Suit.Hearts },
			{ rank: Rank.Jack, suit: Suit.Spades },
			{ rank: Rank.Jack, suit: Suit.Diamonds },
		],
		pairScore: 12,
		pairDescription: 'should return twelve for four of a kind',
		nobsScore: 1,
		nobsDescription: 'should return one for nobs for nobs',
	},
];
