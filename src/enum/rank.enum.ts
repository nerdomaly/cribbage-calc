export class Rank {
    public static readonly Ace: Rank = new Rank(1, 'Ace', 1, 'A');
    public static readonly Two: Rank = new Rank(2, 'Two', 2, '2');
    public static readonly Three: Rank = new Rank(3, 'Three', 3, '3');
    public static readonly Four: Rank = new Rank(4, 'Four', 4, '4');
    public static readonly Five: Rank = new Rank(5, 'Five', 5, '5');
    public static readonly Six: Rank = new Rank(6, 'Six', 6, '6');
    public static readonly Seven: Rank = new Rank(7, 'Seven', 7, '7');
    public static readonly Eight: Rank = new Rank(8, 'Eight', 8, '8');
    public static readonly Nine: Rank = new Rank(9, 'Nine', 9, '9');
    public static readonly Ten: Rank = new Rank(10, 'Ten', 10, 'T');
    public static readonly Jack: Rank = new Rank(11, 'Jack', 10, 'J');
    public static readonly Queen: Rank = new Rank(12, 'Queen', 10, 'Q');
    public static readonly King: Rank = new Rank(13, 'King', 10, 'K');

    public id: number;
    public description: string;
    public value: number;
    public shortHand: string;

    public constructor(id: number, description: string, value: number, shortHand: string) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.shortHand = shortHand;
    }

    public static getByShorthand(shortHand: string): Rank {
        return Ranks.find((x) => x.shortHand === shortHand.toUpperCase());
    }
}

export const Ranks: Array<Rank> = [
    Rank.Ace,
    Rank.Two,
    Rank.Three,
    Rank.Four,
    Rank.Five,
    Rank.Six,
    Rank.Seven,
    Rank.Eight,
    Rank.Nine,
    Rank.Ten,
    Rank.Jack,
    Rank.Queen,
    Rank.King,
];
