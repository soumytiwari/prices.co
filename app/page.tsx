"use client";
import Background from "@/components/background";
import Brands from "@/components/brands";
import Cards from "@/components/cards";
import style from "@/styles/homepage.module.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRef } from "react";

const logos = [
	"/logos/amazon-logo.png",
	"/logos/walmart-logo.png",
	"/logos/meesho-logo.png",
	"/logos/cliq-logo.png",
	"logos/flipkart-logo.png",
	"logos/ebay-logo.png",
	"logos/myntra-logo.png",
	"logos/shopify-logo.png",
];

const images = [
	"/images/andi-rieger-x9H9GupmS48.jpg",
	"/images/cat-han-BJ3grTerqY4.jpg",
	"/images/cesar-la-rosa-HbAddptme1Q.jpg",
	"/images/harper-sunday-HCfV9rQuIrs.jpg",
	"/images/mali-902194.jpg",
	"/images/vinicius-amnx-amano-V16owPoti24.jpg",
];

let products = [
	{
		id: "1",
		url: "",
		title: "phone lorem epsum dolor sit",
		price: "$2000",
		rating: 4.5,
	},
	{
		id: "2",
		url: "",
		title: "watch tres do unus",
		price: "$2000",
		rating: 4,
	},
	{ id: "3", url: "", title: "nihil nihil nihil", price: "$2000", rating: 3 },
	{
		id: "4",
		url: "",
		title: "blade of miquella , malenaia",
		price: "$2000",
		rating: 3.7,
	},
	{
		id: "5",
		url: "",
		title: "starscourage rhadhan",
		price: "$2000",
		rating: 4.4,
	},
];
export default function Home() {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const scrollRight = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollLeft += 100; // Adjust the value as needed
		}
	};

	const scrollLeft = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollLeft -= 100; // Adjust the value as needed
		}
	};
	return (
		<div>
			<Background images={images} />
			<Brands logos={logos} />
			<div className={style.main_container}>
				<div className={style.trends}>
					<div className={style.trendTitle}>
						<h1>Trending</h1>
						<div className={style.btncontainer}>
							<button
								className={style.scrollbtn}
								onClick={scrollLeft}
							>
								<BsArrowLeft />
							</button>
							<button
								className={style.scrollbtn}
								onClick={scrollRight}
							>
								<BsArrowRight />
							</button>
						</div>
					</div>
					<div
						ref={scrollContainerRef}
						className={style.card_container}
					>
						{products.map((item, index) => {
							return (
								<Cards
									key={index}
									id={item.id}
									url={item.url}
									title={item.title}
									price={item.price}
									rating={item.rating}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
