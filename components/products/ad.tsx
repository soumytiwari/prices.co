import styles from '@/styles/ads.module.css'
import { useState } from 'react';

const adCards = [{
    id: '1',
    imageURL : '/images/ads/cloth.jpeg',
    content: ''

}]
export default function Ad() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className={styles.ads}>
            <div
                className={styles.cardContainer}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {adCards.map((card) => (
                    <div key={card.id} className={styles.adCard} style={{backgroundImage: `url(${card.imageURL})` }}>
                        {/* <img src={card.imageURL}></img> */}
                        <div className={styles.content}>
                            <span>#Big Fashion Sale</span>
                            <h1 className={styles.bold}>Limited time offer!</h1>
                            <h1 className={styles.bold}>Save up to <span className={styles.bold} style={{color:'red'}}>50%</span></h1>
                            <button>Shop Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}