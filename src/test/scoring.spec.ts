import { expect } from 'chai';
import 'mocha';
import { scorePairs, scoreNobs } from '../scoring';

import { TestHands } from './testData.spec';
import { getHandDescription } from '../interface/card.interface';
import { combineWithoutRepetitions } from '../utility';

TestHands.forEach((testHand) => {
	describe('Scoring: ' + getHandDescription(testHand.hand), () => {
		it(testHand.pairDescription, () => {
			expect(scorePairs(testHand.hand)).to.equal(testHand.pairScore);
		});

		it(testHand.nobsDescription, () => {
			expect(scoreNobs(testHand.hand)).to.equal(testHand.nobsScore);
		});
	});
});

describe('Permutations: ' + getHandDescription(TestHands[0].hand), () => {
	it(`a hand of 5 cards should have 10 permutations of 2`, () => {
		expect(combineWithoutRepetitions(TestHands[0].hand, 2).length).to.equal(
			10
		);
	});

	it(`a hand of 5 cards should have 10 permutations of 3`, () => {
		expect(combineWithoutRepetitions(TestHands[0].hand, 3).length).to.equal(
			10
		);
	});

	it(`a hand of 5 cards should have 5 permutations of 4`, () => {
		expect(combineWithoutRepetitions(TestHands[0].hand, 4).length).to.equal(
			5
		);
	});

	it(`a hand of 5 cards should have 1 permutations of 5`, () => {
		expect(combineWithoutRepetitions(TestHands[0].hand, 5).length).to.equal(
			1
		);
	});
});
