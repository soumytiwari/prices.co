"use client";
import Ad from "@/components/products/ad";
import { MyProvider } from "@/components/products/context";
import SearchBar from "@/components/products/search";
import ResultProducts from "@/components/products/searchResult";
import style from "@/styles/productPage.module.css";
export default function ProductPage() {
	return (
		<div className={style.productPage}>
			<SearchBar />
			{/* TODO : add path here eg. Home >> products >> ... >> */}
			<Ad/>
			<MyProvider>
				<ResultProducts />
			</MyProvider>
		</div>
	);
}
