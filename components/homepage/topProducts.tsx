import { useEffect, useState } from "react";
import SkeletonCard from "../skeletonCards";
import Cards from "../productCards";
import { Card } from "../cardInterface";
import style from "@/styles/trends.module.css"

export default function TopProducts({products}:{products:Card[]}) {

    const [loading, setLoading] = useState(false);
    const [productType, setSetProductType] = useState(false);
	 // Load this effect on mount
	 useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 10000);
        // Cancel the timer while unmounting
        return () => clearTimeout(timer);
    }, []);
    return(
        <div className={style.trends}>
            <h1>{productType}</h1>
            
            <div
                // ref={scrollContainerRef}
                className={style.alt_card_container}
            >
                {loading && <SkeletonCard count={products.length}/>}
                {!loading && products.map((item, index) => {
                    return (
                        <Cards 
                        key = {index}
                        item = {item}
                        />
                    );
                })}
            </div>
		</div>
    );
}