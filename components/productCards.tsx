import { SlHeart } from "react-icons/sl";
import style from "@/styles/cards.module.css";
import StarRating from "./starRating";

export default function Cards({
	id,
	url,
	title,
	price,
	rating,
	totalRating
}: {
	id: string;
	url: string;
	title: string;
	price: string;
	rating: number;
	totalRating :string| number
}) {
	return (
		<div
			className={style.card}
			id={id}
		>
			<div
				className={style.product_img}
				style={{ backgroundColor: "rgb(128,128,128)" }}
			>
				<SlHeart className={style.like} />
			</div>
			<div className={style.card_info}>
				<div className={style.price}>{price}</div>
				<div className={style.title}>{title}</div>
				<StarRating rating={rating} totalCount={totalRating} id={id}/>
			</div>
		</div>
	);
}
