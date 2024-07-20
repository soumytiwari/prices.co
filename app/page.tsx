"use client";
import Background from "@/components/background";
import Brands from "@/components/brands";
import Cards from "@/components/productCards";
import CategoryCards from "@/components/categoryCards";
import style from "@/styles/homepage.module.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRef, useState } from "react";

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
const catogaryimages = [
	{
		id: "11",
		title: "Men clothing",
		url: "/images/category_images/men_fashion.jpg",
	},
	{
		id: "12",
		title: "Women fashion",
		url: "/images/category_images/wm-1.jpg",
	},
	{
		id: "13",
		title: "Accessories",
		url: "/images/category_images/accessories.jpg",
	},
	{
		id: "14",
		title: "Electronics",
		url: "/images/category_images/electronics.jpg",
	},
	{
		id: "16",
		title: "Health and Beauty",
		url: "/images/category_images/beauty.jpg",
	},
	{
		id: "15",
		title: "Books and Magzines",
		url: "/images/category_images/books.jpg",
	},
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
	const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(
		null
	);

	const scroll = (direction: "left" | "right") => {
		if (scrollContainerRef.current) {
			const scrollAmount = direction === "right" ? 100 : -100;
			scrollContainerRef.current.scrollBy({
				left: scrollAmount,
				behavior: "smooth",
			});
		}
	};

	const startScrolling = (direction: "left" | "right") => {
		const interval = setInterval(() => {
			if (scrollContainerRef.current) {
				const scrollAmount = direction === "right" ? 300 : -300; // Adjust the value for faster scrolling
				scrollContainerRef.current.scrollBy({
					left: scrollAmount,
					behavior: "smooth",
				});
			}
		}, 50); // Adjust the interval for speed
		setScrollInterval(interval);
	};

	const stopScrolling = () => {
		if (scrollInterval) {
			clearInterval(scrollInterval);
			setScrollInterval(null);
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
								onClick={() => scroll("left")}
								onMouseDown={() => startScrolling("left")}
								onMouseUp={stopScrolling}
								onMouseLeave={stopScrolling}
							>
								<BsArrowLeft />
							</button>
							<button
								className={style.scrollbtn}
								onClick={() => scroll("right")}
								onMouseDown={() => startScrolling("right")}
								onMouseUp={stopScrolling}
								onMouseLeave={stopScrolling}
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
				<div className={style.trends}>
					<h1>Top Selling</h1>
					<div
						// ref={scrollContainerRef}
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
				<CategoryCards content={catogaryimages} />
			</div>
		</div>
	);
}
