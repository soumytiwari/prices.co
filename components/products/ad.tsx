import styles from '@/styles/ads.module.css'
import { useEffect, useState } from 'react';

const adCards = [
    
    {
    id: '1',
    imageURL : '/images/ads/cloth.jpeg',
    content: ''},
    {
    id: '2',
    imageURL : '/images/ads/sale.jpeg',
    content: ''}

]
export default function Ad() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { id: 1, imgURL: '/images/ads/cloth.jpeg', text: 'Slide 1' },
        { id: 2, imgURL: '/images/ads/sale.jpeg', text: 'Slide 2' },
        { id: 3, imgURL: '/images/ads/e.jpg', text: 'Slide 3' },
        { id: 4, imgURL: '/images/ads/h.jpg', text: 'Slide 4' },
        { id: 5, imgURL: '/images/ads/cloth2.jpg', text: 'Slide 4' },
    ];
    const totalSlides = slides.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev+1) % totalSlides);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    return (
        <div className={styles.slider}>
            <div
                className={styles.slides}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className={styles.slide}
                        style={{ backgroundImage: `url(${slide.imgURL })`}}
                    >
                        <div className={styles.content}>
                            <span>#Big Fashion Sale</span>
                            <h1 className={styles.bold}>Limited time offer!</h1>
                            <h1 className={styles.bold}>Save up to <span className={styles.bold} style={{color:'red'}}>50%</span></h1>
                            <button className={styles.btn}></button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.dots}>
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${
                            currentSlide === index ? styles.active : ''
                        }`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};