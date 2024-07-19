import { SlHeart } from "react-icons/sl";
import style from "@/styles/cards.module.css";
import { IoStarOutline, IoStar, IoStarHalf } from "react-icons/io5";

const totalStars = 5;
const colors = {
	orange: "#F2C265",
	gray: "#a9a9a9",
};

export default function Cards({
	id,
	url,
	title,
	price,
	rating,
}: {
	id: string;
	url: string;
	title: string;
	price: string;
	rating: number;
}) {
	let stars = [];

	for (let i = 1; i <= totalStars; i++) {
		let fullstar = Math.floor(rating);
		if (i <= fullstar) {
			stars.push(
				<IoStar
					key={i}
					color={colors.orange}
				/>
			);
		} else if (i === Math.ceil(rating) && rating % 1 !== 0) {
			let partstar = rating - fullstar;
			stars.push(
				<svg
					width="21"
					height="21"
					key={i}
				>
					<defs>
						<linearGradient
							id={`starGradient-${id}`}
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
						>
							<stop
								offset={`${partstar * 100}%`}
								stopColor="gold"
							/>
							<stop
								offset="0%"
								stopColor="gray"
							/>
						</linearGradient>
					</defs>
					<IoStar
						key={i}
						fill={`url(#starGradient-${id})`}
					/>
				</svg>
			);
		} else {
			stars.push(
				<IoStar
					key={i}
					color={colors.gray}
				/>
			);
		}
	}
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
				<div className={style.rating}>
					{stars}
					<span>({rating} Stars)</span>
				</div>
			</div>
		</div>
	);
}
