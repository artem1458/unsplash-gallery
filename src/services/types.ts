export interface IImageItemUntransformed {
	alt_description: string;
	color: string;
	id: string;
	urls: {
		small: string;
	};
	user: {
		username: string;
	};
}

export interface ISearchSubmitArgTuple extends Array<number | string> {
	0: string;
	1: number;
	2: number;
	length: 3;
}
