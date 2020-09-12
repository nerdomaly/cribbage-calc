export class Suit {
    public static readonly Hearts: Suit = new Suit(1, 'Hearts', 'H');
    public static readonly Diamonds: Suit = new Suit(2, 'Diamonds', 'D');
    public static readonly Spades: Suit = new Suit(3, 'Spades', 'S');
    public static readonly Clubs: Suit = new Suit(4, 'Clubs', 'C');

    public id: number;
    public description: string;
    public shortHand: string;

    public constructor(id: number, description: string, shortHand: string) {
        this.id = id;
        this.description = description;
        this.shortHand = shortHand;
    }

    public static getByShorthand(shortHand: string): Suit {
        return Suits.find((x) => x.shortHand === shortHand.toUpperCase());
    }
}

export const Suits: Array<Suit> = [Suit.Hearts, Suit.Diamonds, Suit.Spades, Suit.Clubs];
