"use client";
import Ad from "@/components/products/ad";
import SearchBar from "@/components/products/search";
import style from "@/styles/productPage.module.css";
export default function ProductPage() {
	return (
		<div className={style.productPage}>
			<SearchBar />
			<Ad/>
		</div>
	);
}
