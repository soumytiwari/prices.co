import styles from '@/styles/ads.module.css';
import { useEffect, useState } from 'react';

export default function Ad() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { id: 1, imgURL: '/images/ads/cloth.jpeg', color:'#44546bdb', secondaryColor: '#e1e5e7',text: 'Slide 1' },
        { id: 2, imgURL: '/images/ads/sale.jpeg',  color:'#ff0000db', secondaryColor: '#000000',text: 'Slide 2' },
        { id: 3, imgURL: '/images/ads/e.jpg',      color:'#848484db', secondaryColor: '#242424',text: 'Slide 3' },
        { id: 4, imgURL: '/images/ads/apple.jpg',  color:'#e0be48db', secondaryColor: '#47464b',text: 'Slide 4' },
        { id: 5, imgURL: '/images/ads/glass.jpg',  color:'#ffffffdb', secondaryColor: '#f9ca40',text: 'Slide 5' },
        { id: 6, imgURL: '/images/ads/wander.jpg', color:'#ffffffdb', secondaryColor: '#000000',text: 'Slide 6' },
        { id: 7, imgURL: '/images/ads/c.jpg',      color:'#fe66f6db', secondaryColor: '#1554a4',text: 'Slide 7' },
        { id: 8, imgURL: '/images/ads/tamara.jpg', color:'#6b8ea0db', secondaryColor: '#201d1d',text: 'Slide 7' },
    ];
    const totalSlides = slides.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 6000); // Change slide every 3 seconds
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
                        <div style={{width:'100%',background: `linear-gradient(to right,${slide.color} 0, rgb(0,0,0,0))`}}>
                        <div className={styles.content}>
                            <span>#Big Fashion Sale</span>
                            <h1 className={styles.bold}>Limited time offer!</h1>
                            <h1 className={styles.bold}>
                                Save up to{' '}
                                <span className={styles.bold} style={{ color: slide.secondaryColor }}>
                                    50%
                                </span>
                            </h1>
                            <h2 style={{marginTop:'30px'}}>Redefine your Style evryday</h2>
                            <button className={styles.btn}></button>
                        </div>
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
