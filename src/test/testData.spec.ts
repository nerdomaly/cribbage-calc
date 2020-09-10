import { Card } from '../classes/card';
import { Rank } from '../enum/rank.enum';
import { Suit } from '../enum/suit.enum';
import { ScoringHand } from '../classes/scoringHand';

export interface CardHand {
    hand: ScoringHand;

    pairScore: number;
    pairDescription: string;

    nobsScore: number;
    nobsDescription: string;

    fifteensScore: number;
    fifteensDescription: string;

    runsScore: number;
    runsDescription: string;

    flushScore: number;
    flushDescription: string;

    totalScore: number;
    totalHandValue: number;
}

export const TestHands: Array<CardHand> = [
    {
        hand: new ScoringHand(new Card(Rank.Jack, Suit.Clubs), [
            new Card(Rank.Jack, Suit.Hearts),
            new Card(Rank.Queen, Suit.Clubs),
            new Card(Rank.King, Suit.Clubs),
            new Card(Rank.Ace, Suit.Clubs),
        ]),

        pairScore: 2,
        pairDescription: 'should return 2 for one pair',
        nobsScore: 0,
        nobsDescription: 'should return 0 for nobs',
        fifteensScore: 0,
        fifteensDescription: 'should return 0 for fifteens',
        runsScore: 6,
        runsDescription: 'should return 6 for two runs of four',
        flushScore: 0,
        flushDescription: 'no points for flush',
        totalScore: 8,
        totalHandValue: 41,
    },
    {
        hand: new ScoringHand(new Card(Rank.King, Suit.Clubs), [
            new Card(Rank.King, Suit.Diamonds),
            new Card(Rank.Jack, Suit.Clubs),
            new Card(Rank.Jack, Suit.Hearts),
            new Card(Rank.Queen, Suit.Clubs),
        ]),
        pairScore: 4,
        pairDescription: 'should return 4 for two pair',
        nobsScore: 1,
        nobsDescription: 'should return 1 for nobs',
        fifteensScore: 0,
        fifteensDescription: 'should return 0 for fifteens',
        runsScore: 12,
        runsDescription: 'should return 12 for four runs of three',
        flushScore: 0,
        flushDescription: 'no points for flush',
        totalScore: 17,
        totalHandValue: 50,
    },
    {
        hand: new ScoringHand(new Card(Rank.Jack, Suit.Clubs), [
            new Card(Rank.Jack, Suit.Hearts),
            new Card(Rank.Queen, Suit.Clubs),
            new Card(Rank.King, Suit.Clubs),
            new Card(Rank.Jack, Suit.Diamonds),
        ]),
        pairScore: 6,
        pairDescription: 'should return 6 for three of a kind',
        nobsScore: 0,
        nobsDescription: 'should return 0 for nobs',
        fifteensScore: 0,
        fifteensDescription: 'should return 0 for fifteens',
        runsScore: 9,
        runsDescription: 'should return 9 for three runs of three',
        flushScore: 0,
        flushDescription: 'no points for flush',
        totalScore: 15,
        totalHandValue: 50,
    },
    {
        hand: new ScoringHand(new Card(Rank.Queen, Suit.Clubs), [
            new Card(Rank.Jack, Suit.Clubs),
            new Card(Rank.Jack, Suit.Hearts),
            new Card(Rank.Jack, Suit.Spades),
            new Card(Rank.Jack, Suit.Diamonds),
        ]),
        pairScore: 12,
        pairDescription: 'should return 12 for four of a kind',
        nobsScore: 1,
        nobsDescription: 'should return 1 for nobs',
        fifteensScore: 0,
        fifteensDescription: 'should return 0 for fifteens',
        runsScore: 0,
        runsDescription: 'should return 0 for no runs of at least three',
        flushScore: 0,
        flushDescription: 'no points for flush',
        totalScore: 13,
        totalHandValue: 50,
    },
    {
        hand: new ScoringHand(new Card(Rank.Five, Suit.Clubs), [
            new Card(Rank.Jack, Suit.Clubs),
            new Card(Rank.Jack, Suit.Hearts),
            new Card(Rank.Jack, Suit.Spades),
            new Card(Rank.Jack, Suit.Diamonds),
        ]),
        pairScore: 12,
        pairDescription: 'should return 12 for four of a kind',
        nobsScore: 1,
        nobsDescription: 'should return 1 for nobs for nobs',
        fifteensScore: 8,
        fifteensDescription: 'should return 8 for fifteens',
        runsScore: 0,
        runsDescription: 'should return 0 for no runs of at least three',
        flushScore: 0,
        flushDescription: 'no points for flush',
        totalScore: 21,
        totalHandValue: 45,
    },
    {
        hand: new ScoringHand(new Card(Rank.Nine, Suit.Clubs), [
            new Card(Rank.Ten, Suit.Clubs),
            new Card(Rank.Jack, Suit.Hearts),
            new Card(Rank.Queen, Suit.Spades),
            new Card(Rank.King, Suit.Diamonds),
        ]),
        pairScore: 0,
        pairDescription: 'should return 0 for a pair',
        nobsScore: 0,
        nobsDescription: 'should return 0 for nobs',
        fifteensScore: 0,
        fifteensDescription: 'should return 0 for fifteens',
        runsScore: 5,
        runsDescription: 'should return 5 for a run of five',
        flushScore: 0,
        flushDescription: 'no points for flush',
        totalScore: 5,
        totalHandValue: 49,
    },
    {
        hand: new ScoringHand(new Card(Rank.Nine, Suit.Clubs), [
            new Card(Rank.Ten, Suit.Clubs),
            new Card(Rank.Jack, Suit.Clubs),
            new Card(Rank.Queen, Suit.Clubs),
            new Card(Rank.King, Suit.Clubs),
        ]),
        pairScore: 0,
        pairDescription: 'should return 0 for a pair',
        nobsScore: 1,
        nobsDescription: 'should return 1 for nobs',
        fifteensScore: 0,
        fifteensDescription: 'should return 0 for fifteens',
        runsScore: 5,
        runsDescription: 'should return 5 for a run of five',
        flushScore: 5,
        flushDescription: 'should score 5 for 5 flush',
        totalScore: 11,
        totalHandValue: 49,
    },
    {
        hand: new ScoringHand(new Card(Rank.Nine, Suit.Diamonds), [
            new Card(Rank.Ten, Suit.Clubs),
            new Card(Rank.Jack, Suit.Clubs),
            new Card(Rank.Queen, Suit.Clubs),
            new Card(Rank.King, Suit.Clubs),
        ]),
        pairScore: 0,
        pairDescription: 'should return 0 for a pair',
        nobsScore: 0,
        nobsDescription: 'should return 0 for nobs',
        fifteensScore: 0,
        fifteensDescription: 'should return 0 for fifteens',
        runsScore: 5,
        runsDescription: 'should return 5 for a run of five',
        flushScore: 4,
        flushDescription: 'should score 4 for 4 flush',
        totalScore: 9,
        totalHandValue: 49,
    },
];
