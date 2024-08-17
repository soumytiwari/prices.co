import styles from '@/styles/ads.module.css';
import { useEffect, useState } from 'react';

export default function Ad() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { id: 1, imgURL: '/images/ads/cloth.jpeg', color:'#4551b8db', text: 'Slide 1' },
        { id: 2, imgURL: '/images/ads/sale.jpeg',  color:'#ff0000db', text: 'Slide 2' },
        { id: 3, imgURL: '/images/ads/e.jpg',      color:'#ffffffdb', text: 'Slide 3' },
        { id: 4, imgURL: '/images/ads/apple.jpg',  color:'#f0f9a0db', text: 'Slide 4' },
        { id: 5, imgURL: '/images/ads/glass.jpg',  color:'#ffffffdb', text: 'Slide 5' },
        { id: 6, imgURL: '/images/ads/wander.jpg', color:'#ffffffdb', text: 'Slide 6' },
        { id: 7, imgURL: '/images/ads/c.jpg',      color:'#f797e2db', text: 'Slide 7' },
    ];
    const totalSlides = slides.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Clean up interval on component unmount
    }, [currentSlide]);

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
                        style={{ backgroundImage: `url(${slide.imgURL})` }}
                    >
                        <div className={styles.content} style={{background: `linear-gradient(to right,${slide.color} 10%, rgb(0,0,0,0))`}}>
                            <span style={{marginBottom:'40px'}}>#Big Fashion Sale</span>
                            <h1 className={styles.bold}>Limited time offer!</h1>
                            <h1 className={styles.bold}>
                                Save up to{' '}
                                <span className={styles.bold} style={{ color: 'white' }}>
                                    50%
                                </span>
                            </h1>
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
}
