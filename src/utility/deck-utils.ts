import { Ranks } from '../enum/rank.enum';
import { Suits } from '../enum/suit.enum';

export function createNewDeck(): Array<string> {
    const retVal: Array<string> = [];

    for (const rank of Ranks) {
        for (const suit of Suits) {
            retVal.push(`${rank.shortHand}${suit.shortHand}`);
        }
    }

    return retVal;
}
