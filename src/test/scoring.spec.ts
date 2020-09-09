import 'mocha';
import { expect } from 'chai';

import { scorePairs, scoreNobs, scoreFifteens, scoreRuns, totalHandValue, scoreTotal } from '../scoring';

import { TestHands } from './testData.spec';
import { getHandDescription } from '../interface/card.interface';
import { getCombosBySize } from '../utility';

TestHands.forEach((testHand) => {
    describe('Scoring: ' + getHandDescription(testHand.hand), () => {
        it(testHand.pairDescription, () => {
            expect(scorePairs(testHand.hand)).to.equal(testHand.pairScore);
        });

        it(testHand.nobsDescription, () => {
            expect(scoreNobs(testHand.hand)).to.equal(testHand.nobsScore);
        });

        it(testHand.fifteensDescription, () => {
            expect(scoreFifteens(testHand.hand)).to.equal(testHand.fifteensScore);
        });

        it(testHand.runsDescription, () => {
            expect(scoreRuns(testHand.hand)).to.equal(testHand.runsScore);
        });

        it(`should return ${testHand.totalScore} for total score`, () => {
            expect(scoreTotal(testHand.hand)).to.equal(testHand.totalScore);
        });

        it(`should return ${testHand.totalHandValue} for total hand value`, () => {
            expect(totalHandValue(testHand.hand)).to.equal(testHand.totalHandValue);
        });
    });
});

describe('Permutations: ' + getHandDescription(TestHands[0].hand), () => {
    it(`a hand of 5 cards should have 10 permutations of 2`, () => {
        expect(getCombosBySize(TestHands[0].hand, 2).length).to.equal(10);
    });

    it(`a hand of 5 cards should have 10 permutations of 3`, () => {
        expect(getCombosBySize(TestHands[0].hand, 3).length).to.equal(10);
    });

    it(`a hand of 5 cards should have 5 permutations of 4`, () => {
        expect(getCombosBySize(TestHands[0].hand, 4).length).to.equal(5);
    });

    it(`a hand of 5 cards should have 1 permutations of 5`, () => {
        expect(getCombosBySize(TestHands[0].hand, 5).length).to.equal(1);
    });
});
