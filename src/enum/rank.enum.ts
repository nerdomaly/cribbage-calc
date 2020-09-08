export class Rank {
	public static readonly Ace: Rank = new Rank(1, 'Ace', 1);
	public static readonly Two: Rank = new Rank(2, 'Two', 2);
	public static readonly Three: Rank = new Rank(3, 'Three', 3);
	public static readonly Four: Rank = new Rank(4, 'Four', 4);
	public static readonly Five: Rank = new Rank(5, 'Five', 5);
	public static readonly Six: Rank = new Rank(6, 'Six', 6);
	public static readonly Seven: Rank = new Rank(7, 'Seven', 7);
	public static readonly Eight: Rank = new Rank(8, 'Eight', 8);
	public static readonly Nine: Rank = new Rank(9, 'Nine', 9);
	public static readonly Ten: Rank = new Rank(10, 'Ten', 10);
	public static readonly Jack: Rank = new Rank(11, 'Jack', 10);
	public static readonly Queen: Rank = new Rank(12, 'Queen', 10);
	public static readonly King: Rank = new Rank(13, 'King', 10);

	public id: number;
	public description: string;
	public value: number;

	public constructor(id: number, description: string, value: number) {
		this.id = id;
		this.description = description;
		this.value = value;
	}
}
