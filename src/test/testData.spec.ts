import { Card } from '../interface/card.interface';
import { Rank } from '../enum/rank.enum';
import { Suit } from '../enum/suit.enum';

export interface CardHand {
    hand: Array<Card>;

    pairScore: number;
    pairDescription: string;

    nobsScore: number;
    nobsDescription: string;

    fifteensScore: number;
    fifteensDescription: string;

    runsScore: number;
    runsDescription: string;

    totalScore: number;
    totalHandValue: number;
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
        pairDescription: 'should return 2 for one pair',
        nobsScore: 0,
        nobsDescription: 'should return 0 for nobs',
        fifteensScore: 0,
        fifteensDescription: 'should return 0 for fifteens',
        runsScore: 6,
        runsDescription: 'should return 6 for two runs of four',
        totalScore: 8,
        totalHandValue: 41,
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
        pairDescription: 'should return 4 for two pair',
        nobsScore: 1,
        nobsDescription: 'should return 1 for nobs',
        fifteensScore: 0,
        fifteensDescription: 'should return 0 for fifteens',
        runsScore: 12,
        runsDescription: 'should return 12 for four runs of three',
        totalScore: 17,
        totalHandValue: 50,
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
        pairDescription: 'should return 6 for three of a kind',
        nobsScore: 0,
        nobsDescription: 'should return 0 for nobs',
        fifteensScore: 0,
        fifteensDescription: 'should return 0 for fifteens',
        runsScore: 9,
        runsDescription: 'should return 9 for three runs of three',
        totalScore: 15,
        totalHandValue: 50,
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
        pairDescription: 'should return 12 for four of a kind',
        nobsScore: 1,
        nobsDescription: 'should return 1 for nobs',
        fifteensScore: 0,
        fifteensDescription: 'should return 0 for fifteens',
        runsScore: 0,
        runsDescription: 'should return 0 for no runs of at least three',
        totalScore: 13,
        totalHandValue: 50,
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
        pairDescription: 'should return 12 for four of a kind',
        nobsScore: 1,
        nobsDescription: 'should return 1 for nobs for nobs',
        fifteensScore: 8,
        fifteensDescription: 'should return 8 for fifteens',
        runsScore: 0,
        runsDescription: 'should return 0 for no runs of at least three',
        totalScore: 21,
        totalHandValue: 45,
    },
    {
        hand: [
            { rank: Rank.Nine, suit: Suit.Clubs },
            { rank: Rank.Ten, suit: Suit.Diamonds },
            { rank: Rank.Jack, suit: Suit.Clubs },
            { rank: Rank.King, suit: Suit.Hearts },
            { rank: Rank.Queen, suit: Suit.Clubs },
        ],
        pairScore: 0,
        pairDescription: 'should return 0 for a pair',
        nobsScore: 1,
        nobsDescription: 'should return 0 for nobs',
        fifteensScore: 0,
        fifteensDescription: 'should return 0 for fifteens',
        runsScore: 5,
        runsDescription: 'should return 5 for a run of five',
        totalScore: 6,
        totalHandValue: 49,
    },
];
