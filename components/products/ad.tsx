import styles from '@/styles/ads.module.css'
import { useState } from 'react';

const adCards = [{
    id: '1',
    imageURL : '/images/cloth_ad.jpeg',
    content: ''

}]
export default function Ad() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === adCards.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? adCards.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={styles.ads}>
            <button className={styles.prevButton} onClick={prevCard}>
                &lt;
            </button>
            <div
                className={styles.cardContainer}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {adCards.map((card) => (
                    <div key={card.id} className={styles.adCard}>
                        <div className={styles.content}>
                            <span>#Big Fashion Sale</span>
                            <h1>Limited time offer!</h1>
                            <h1>Save up to 50%</h1>
                            <button>Shop Now</button>
                        </div>
                        <img src={card.imageURL}></img>
                    </div>
                ))}
            </div>
            <button className={styles.nextButton} onClick={nextCard}>
                &gt;
            </button>
        </div>
    );
}