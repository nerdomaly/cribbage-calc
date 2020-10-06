import { createNewDeck } from './utility/deck-utils';
import fs = require('fs');

import * as _ from 'lodash';

const deck = createNewDeck();

const writeStream = fs.openSync(`discards.txt`, 'w');

for (let firstCardIndex = 0; firstCardIndex < 47; firstCardIndex++) {
    for (let secondCardIndex = firstCardIndex + 1; secondCardIndex < 48; secondCardIndex++) {
        for (let thirdCardIndex = secondCardIndex + 1; thirdCardIndex < 49; thirdCardIndex++) {
            for (let fourthCardIndex = thirdCardIndex + 1; fourthCardIndex < 50; fourthCardIndex++) {
                for (let fifthCardIndex = fourthCardIndex + 1; fifthCardIndex < 51; fifthCardIndex++) {
                    for (let sixthCardIndex = fifthCardIndex + 1; sixthCardIndex < 52; sixthCardIndex++) {
                        fs.writeSync(
                            writeStream,
                            [
                                deck[firstCardIndex],
                                deck[secondCardIndex],
                                deck[thirdCardIndex],
                                deck[fourthCardIndex],
                                deck[fifthCardIndex],
                                deck[sixthCardIndex],
                            ].join(',') + '\n'
                        );
                    }
                }
            }
        }
    }
}
fs.closeSync(writeStream);

console.log('Done!');
