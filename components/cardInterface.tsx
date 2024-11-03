export interface Card{
    id: string;
	url: string;
	brand?: string;
	discount?:string;
	productType?: string,
	title: string;
	price: number;
	originalPrice?:number;
	rating: number;
	totalRating : string| number;
	features?: {}
}

