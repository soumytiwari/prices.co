export interface Card{
    id: string;
	url: string;
	brand?: string;
	offer?:string;
	productType?: string,
	title: string;
	price: string;
	rating: number;
	totalRating : string| number
}