import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/circularRating.module.css';

const ratingCol =  {
    good: '#27ae60',
    meh:'#f1c40f',
    bad:'#e74c3c'
}
export default function Rating({ rating }:{rating:number}) {
    const ratingRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [initial_rate, setRate] = useState(0);
    const speed = 10;
	let ratingColor:string = '';

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

        if (circleRef.current) {
            const circles = circleRef.current.querySelectorAll<HTMLDivElement>(`.${styles.circle}`);
            console.log(circles);
            circles.forEach((circle, i) => {
            //     angle+=dangle
            //   circle.style.transform = `rotate(${angle}deg) translate(${circleRef.current!.clientWidth / 2}px) rotate(-${angle}deg)`;
            var offsetAngle = 360 / circles.length;
            var rotateAngle = offsetAngle * i;
            circle.style.transform = `rotate(${rotateAngle}deg) translate(0, -180px) rotate(-${rotateAngle}deg)`;
            });
          }

        if (ratingRef.current) {
            observer.observe(ratingRef.current);
            const scoreClass = rating < 40 ? styles.bad : rating < 60 ? styles.meh : styles.good;
            ratingRef.current.classList.add(scoreClass);
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
			<span style={{fontSize:'26px', fontWeight:'600', margin:'80px 0px'}}>Rating</span>
			
            <div ref={circleRef} className={styles.ciclegraph}>
                <div className={styles.circle}>Amazon | 76%</div>
                <div className={styles.circle}>Flipkart | 32%</div>
                <div className={styles.circle}>Walmart | 32%</div>
                <div className={styles.circle}>Flipkart | 32%</div>
                <div className={styles.circle}>Walmart | 32%</div>
                <div className={styles.circle}>Flipkart | 32%</div>
                <div className={styles.circle}>Walmart | 32%</div>
                <div className={styles.circle}>Flipkart | 32%</div>
                <div ref={ratingRef} className={styles.rating}>
                    <span>{initial_rate}<small>%</small></span>
                </div>
            </div>
			

		</div>
    );
}
