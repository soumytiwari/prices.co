'use client'
import { useState } from 'react';
import styles from '@/styles/reviews.module.css'; // Assuming you have CSS modules enabled
import StarRating from '../starRating';
import { IoMdThumbsUp } from "react-icons/io";
import SubmitReview from './submitReview';

interface Review {
  id: number;
  rating: number;
  title: string;
  date: string;
  color: string;
  size: string;
  reviewText: string;
  likes: number;
  details:{
    key: string,
    value:string
  } []
}

const reviews: Review[] = [
  {
    id: 1,
    rating: 1,
    title: 'His favorite shirts!',
    date: '08 August 2023',
    color: 'Black',
    size: 'XL',
    reviewText:
      "The boAt BassHeads 100 In-Ear Wired Headphones offer a compelling combination of impressive sound quality, comfortable fit, and an affordable price tag. The powerful bass response and clear audio make them an excellent choice for bass enthusiasts and music lovers alike. The built-in microphone adds to the convenience, making hands-free calling and voice commands hassle-free. While the noise isolation could be improved, these earphones still deliver a satisfying audio experience for daily use, workouts, or casual listening. If you're looking for budget-friendly earphones that don't compromise on sound quality, the boAt BassHeads 100 is undoubtedly a solid contender.",
    likes: 22,
    details: [
        {
            key: 'Color',
            value:'Black'
        },
        {
            key: 'Size',
            value:'XL'
        }
    ]
  },
  {
    id: 2,
    rating: 4,
    title: 'Cool as a cucumber',
    date: '12 July 2023',
    color: 'Gray',
    size: 'L',
    reviewText:
      'This shirt is made of polyester and I wasn\'t sure how that would go for me...',
    likes: 34,
    details: [
        {
            key: 'Color',
            value:'Black'
        },
        {
            key: 'Size',
            value:'XL'
        }
    ]
  },
  {
    id: 3,
    rating: 4.5,
    title: 'My Son inLaw likes these shirts',
    date: '12 July 2023',
    color: 'Black',
    size: '2XL',
    reviewText:
      'This is the perfect shirt for my husband who works county fairs...',
    likes: 21,
    details: [
        {
            key: 'Color',
            value:'Black'
        },
        {
            key: 'Size',
            value:'XL'
        }
    ]
  },
  {
    id: 4,
    rating: 5,
    title: 'Best comfortable polo shirt for everyday',
    date: '08 Jun 2023',
    color: 'Black',
    size: '2XL',
    reviewText:
      'The best comfortable and practical polo shorts for summer wear...',
    likes: 18,
    details: [
        {
            key: 'Color',
            value:'Black'
        },
        {
            key: 'Size',
            value:'XL'
        }
    ]
  },
  {
    id: 4,
    rating: 5,
    title: 'Best comfortable polo shirt for everyday',
    date: '08 Jun 2023',
    color: 'Black',
    size: '2XL',
    reviewText:
      'The best comfortable and practical polo shorts for summer wear...',
    likes: 18,
    details: [
        {
            key: 'Color',
            value:'Black'
        },
        {
            key: 'Size',
            value:'XL'
        }
    ]
  },
  {
    id: 4,
    rating: 5,
    title: 'Best comfortable polo shirt for everyday',
    date: '08 Jun 2023',
    color: 'Black',
    size: '2XL',
    reviewText:
      'The best comfortable and practical polo shorts for summer wear The best comfortable and practical polo shorts for summer wear The best comfortable and practical polo shorts for summer wear',
    likes: 18,
    details: [
        {
            key: 'Color',
            value:'Black'
        },
        {
            key: 'Size',
            value:'XL'
        }
    ]
  },
  {
    id: 4,
    rating: 5,
    title: 'Best comfortable polo shirt for everyday',
    date: '08 Jun 2023',
    color: 'Black',
    size: '2XL',
    reviewText:
      'The best comfortable and practical polo shorts for summer wear The best comfortable and practical polo shorts for summer wear The best comfortable and practical polo shorts for summer wear',
    likes: 18,
    details: [
        {
            key: 'Color',
            value:'Black'
        },
        {
            key: 'Size',
            value:'XL'
        }
    ]
  },

  {
    id: 1,
    rating: 1,
    title: 'His favorite shirts!',
    date: '08 August 2023',
    color: 'Black',
    size: 'XL',
    reviewText:
      "The powerful bass response and clear audio make them an excellent choice for bass enthusiasts and music lovers alike. The built-in microphone adds to the convenience, making hands-free calling and voice commands hassle-free. While the noise isolation could be improved, these earphones still deliver a satisfying audio experience for daily use, workouts, or casual listening. If you're looking for budget-friendly earphones that don't compromise on sound quality, the boAt BassHeads 100 is undoubtedly a solid contender.",
    likes: 22,
    details: [
        {
            key: 'Color',
            value:'Black'
        },
        {
            key: 'Size',
            value:'XL'
        }
    ]
  },
];

 // Split the reviews into two chunks
 let columns = [
    reviews.slice(0, reviews.length).filter((_, index) => index % 2 === 0),
    reviews.slice(0, reviews.length).filter((_, index) => index % 2 !== 0)
 ]

export default function Reviews() {
    const [writeReview, setWriteReview] = useState(false);
  return (
    <div className={styles.reviewsContainer}>
        {reviews.length > 0 ? (
            <div className={styles.reviewsGrid}>
                {columns.map((reviews) => (
                    <div className={styles.column}>
                        {
                            reviews.map((review)=>(
                                <div key={review.id} className={styles.reviewCard}>
                                    <div className={styles.rating}>
                                        <StarRating rating={review.rating} id={review.id}/>
                                    </div>
                                    <div className={styles.reviewHeader}>
                                    <div className={styles.reviewTitle}>{review.title}</div>
                                    <div className={styles.reviewDate}>{review.date}</div>
                                    </div>
                                    <div className={styles.reviewDetails}>
                                        {
                                            review.details.map((item,i)=>(
                                                <div key={i}>
                                                    <span style={{marginRight:'5px',fontWeight:'600'}}>{item.key} : </span>
                                                    <span style={{marginRight:'0px',fontWeight:'600'}}>{item.value}</span>
                                                    <span style={{display:`${i == review.details.length-1?'none':'inline'}`,margin:'0px 8px'}}>|</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className={styles.reviewText}>{review.reviewText}</div>
                                    <div className={styles.reviewActions}>
                                        <span className={styles.likes}><IoMdThumbsUp size={'18px'} style={{marginRight:'5px'}}/> {review.likes}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))}
            </div> 
        ) : (
            <div style={{display:'flex', alignItems:'center', justifyContent:"flex-start",width:'100%', margin:' 40px auto'}}>No reviews yet.</div>
        )}
        <div style={{boxSizing:"border-box",  display:'flex', alignItems:'center', justifyContent:"center",width:'100%', margin:'auto'}}>
            <button className={styles.seeAllReviews} style={{display:`${reviews.length == 0?'none':'inline'}`}}>See All Reviews</button>
            <button onClick={()=>setWriteReview(!writeReview)} className={styles.writeReview}>Write a Review</button>
        </div>
            <SubmitReview display={writeReview}/>
        </div>
    );
};