import 'mocha';
import { expect } from 'chai';

import { TestHands } from './testData.spec';
import { getCombosBySize } from '../utility/utility';

TestHands.forEach((scoringTest) => {
    describe('Scoring: ' + scoringTest.hand.getHandDescription(), () => {
        it(scoringTest.pairDescription, () => {
            expect(scoringTest.hand.pairsScore).to.equal(scoringTest.pairScore);
        });

        it(scoringTest.nobsDescription, () => {
            expect(scoringTest.hand.nobsScore).to.equal(scoringTest.nobsScore);
        });

        it(scoringTest.fifteensDescription, () => {
            expect(scoringTest.hand.fifteensScore).to.equal(scoringTest.fifteensScore);
        });

        it(scoringTest.runsDescription, () => {
            expect(scoringTest.hand.runsScore).to.equal(scoringTest.runsScore);
        });

        it(scoringTest.flushDescription, () => {
            expect(scoringTest.hand.flushScore).to.equal(scoringTest.flushScore);
        });

        it(`should return ${scoringTest.totalScore} for total score`, () => {
            expect(scoringTest.hand.totalScore).to.equal(scoringTest.totalScore);
        });

        it(`should return ${scoringTest.totalHandValue} for total hand value`, () => {
            expect(scoringTest.hand.totalRank).to.equal(scoringTest.totalHandValue);
        });
    });
});

describe('Permutations: ' + TestHands[0].hand.getHandDescription(), () => {
    it(`a hand of 5 cards should have 10 permutations of 2`, () => {
        expect(getCombosBySize(TestHands[0].hand.allCards, 2).length).to.equal(10);
    });

    it(`a hand of 5 cards should have 10 permutations of 3`, () => {
        expect(getCombosBySize(TestHands[0].hand.allCards, 3).length).to.equal(10);
    });

    it(`a hand of 5 cards should have 5 permutations of 4`, () => {
        expect(getCombosBySize(TestHands[0].hand.allCards, 4).length).to.equal(5);
    });

    it(`a hand of 5 cards should have 1 permutations of 5`, () => {
        expect(getCombosBySize(TestHands[0].hand.allCards, 5).length).to.equal(1);
    });
});
