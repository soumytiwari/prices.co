// cardInterface.ts
export interface Card {
    id: string,
    url: string,
    brand?: string,
    discount?: string,
    productType?: string,
    title: string,
    price: string | number,
    originalPrice?: string | number,
    rating: string | number,
    totalRating: string | number,
    features?: Record<string, string | number>,
    mainImage?: string,
}
