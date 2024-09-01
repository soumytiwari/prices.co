import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/rating.module.css';
import RatingBar from './ratingBar';

const ratingCol =  {
    good: '#27ae60',
    meh:'#f1c40f',
    bad:'#e74c3c'
}
export default function Rating({ rating }:{rating:number}) {
    const ratingRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [initial_rate, setRate] = useState(0);
    const speed = 10;
	let ratingColor:string = '';
    const ratings = [
        {
            name: 'Amazon',
            rating:'4.7'
        },
        {
            name: 'Flipkart',
            rating:'4.6'
        },
        {
            name: 'Walmart',
            rating:'4.8'
        },
        {
            name: 'Walmart',
            rating:'4.1'
        },
    ]
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        if (ratingRef.current) {
            observer.observe(ratingRef.current);
            const scoreClass = rating < 40 ? styles.bad : rating < 60 ? styles.meh : styles.good;
            ratingRef.current.classList.add(scoreClass);
			ratingRef.current.setAttribute('style',`color:${ratingCol.good};`);

        }

        return () => {
            if (ratingRef.current) {
                observer.unobserve(ratingRef.current);
            }
        }
    }, []);

    useEffect(() => {
        if (isInView) {
			ratingColor = rating < 40 ? ratingCol.bad : rating < 60 ? ratingCol.meh : ratingCol.good;
            const intervalId = setInterval(() => {
                setRate((prevRate) => {
                    if (prevRate >= rating) {
                        clearInterval(intervalId);
                        return prevRate;
                    }

					let next = prevRate+1;
					const gradient = `background: conic-gradient(${ratingColor} ${next}%, transparent 0 100%)`;
					ratingRef.current!.setAttribute('style', gradient);
                    return next;
                });
            }, speed);

            return () => {
                clearInterval(intervalId);
            };
        }
    }, [isInView, rating]);

    return (
		<div className={styles.rating_container}>
			<span style={{fontSize:'26px', fontWeight:'600'}}>Rating</span>
			<div className={styles.ratings}>
                <div style={{display:'flex', alignItems:'center',}}>
                    <div ref={ratingRef} className={styles.rating_circle}>
                        <span>{initial_rate}<small>%</small></span>
                    </div>
                    <div style={{marginLeft:'20px'}}>
                        <span style={{fontWeight:'700'}}>92% users are satisfied</span>
                        <div style={{display:'flex', alignItems:'center', margin:'5px 0px',color:'GrayText'}}>
                            <span style={{marginRight:'10px'}}>128 rating</span>
                            <span style={{width:'5px',height:'5px', borderRadius:'50%', backgroundColor:'grey', marginRight:'10px'}}></span>
                            <span>128 reviews</span>
                        </div>
                    </div>
                </div>
                <RatingBar/>
                <div className={styles.in_rates}>
                    {
                        ratings.map((item,i)=>(
                            <div key ={i} className={styles.in_rates_item}>
                                {`${item.name} | ${item.rating}`}
                            </div>
                        ))
                    }
                </div>
            </div>
		</div>
    );
}
