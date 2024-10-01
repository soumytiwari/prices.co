'use client'
import { SlHeart } from "react-icons/sl";
import style from "@/styles/cards.module.css";
import StarRating from "./starRating";
import {useRouter } from "next/navigation";
import { Card } from "./cardInterface";

export default function Cards({
	item
}: {
	item:Card
}) {
	const router = useRouter();
	return (
		<div
			className={style.card}
			id={`${item.id}`}
			onClick = {()=>router.push(`/products/${item.productType}/${item.id}`)}
		>
			<div
				className={style.product_img}
				style={{ backgroundColor: "rgb(128,128,128)" }}
			>
				<SlHeart className={style.like} />
			</div>
			<div className={style.card_info}>
				<div className={style.price}>{item.price}</div>
				<div className={style.price}>{item.brand}</div>
				<div className={style.title}>{item.title}</div>
				<StarRating rating={item.rating} totalCount={item.totalRating} id={item.id}/>
			</div>
		</div>
	);
}
