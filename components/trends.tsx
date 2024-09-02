'use client'
import { useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Cards from "./productCards";
import style from '@/styles/trends.module.css'

interface product {
	id :string|number,
	url : string,
	title : string,
	price : string,
	rating : number,
	totalRating : string
}

export default function Trends({title, products}: {
    title:string,
    products: product[]
}) {
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
    
    return(
        <div className={style.trends}>
            <div className={style.trendTitle}>
                <h1>{title}</h1>
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
                            totalRating={item.totalRating}
                        />
                    );
                })}
            </div>
        </div>
    )
}