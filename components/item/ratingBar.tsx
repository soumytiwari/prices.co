import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/ratingBar.module.css';

interface RatingData {
  stars: number;
  count: number;
}

const ratings: RatingData[] = [
  { stars: 5, count: 130},
  { stars: 4, count: 30},
  { stars: 3, count: 21},
  { stars: 2, count: 10},
  { stars: 1, count: 45},
];

export default function RatingBar() {
    const [isInView, setIsInView] = useState(false);
    const ratingRef = useRef<HTMLDivElement>(null);
    const maxCount = ratings.reduce((acc, { count }) => acc + count, 0);
    console.log(maxCount);
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
    }

    return () => {
      if (ratingRef.current) {
        observer.unobserve(ratingRef.current);
      }
    };
  }, []);

    return (
        <div ref={ratingRef}>
        {ratings.map((rating, index) => {
             const percentage = (rating.count / maxCount) * 100;
            return (
                <div key={index} className={styles.ratingRow}>
                <span className={styles.starIcon}>★</span>
                <span>{rating.stars}</span>
                <div className={styles.barContainer}>
                    <div
                    className={styles.barFill}
                    style={{
                        transform: isInView
                        ? `scaleX(${(percentage/100)*1.6})`
                        : 'scaleX(0)',
                    }}
                    ></div>
                </div>
                <span className={styles.count}>{rating.count}</span>
                </div>
            )
        }
    )}
    </div>
  );
}
