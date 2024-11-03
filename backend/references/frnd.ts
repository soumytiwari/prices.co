export interface Card{
    // id: string;
	// url: string;
    // mainImage: string;
	// title: string;
	// brand?: string;	still left
	// rating: number;
	// totalRating : string| number;
	price: number;
	discount?:string;
    images: string;
	originalPrice?:number;
	features?: {}
	productType?: string,
}

// all string rn