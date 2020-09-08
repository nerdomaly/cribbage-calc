export class Suit {
	public static readonly Hearts: Suit = new Suit(1, 'Hearts');
	public static readonly Diamonds: Suit = new Suit(2, 'Diamonds');
	public static readonly Spades: Suit = new Suit(3, 'Spades');
	public static readonly Clubs: Suit = new Suit(4, 'Clubs');

	public id: number;
	public description: string;

	public constructor(id: number, description: string) {
		this.id = id;
		this.description = description;
	}
}
