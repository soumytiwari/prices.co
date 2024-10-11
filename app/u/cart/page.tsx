'use client'
import ProductCard from '@/components/cart/cartCards';
import CheckoutSlip from '@/components/cart/slip';
import { useState } from 'react';
import styles from '@/styles/cart.module.css'
import Trends from '@/components/trends';
import { Card } from '@/components/cardInterface';

const Home = () => {
  const [cartItems, setCartItems] = useState([
    { title: 'Bomber Jacket', price: 2318 },
    { title: 'Tailored Jacket', price: 2728 },
    { title: 'Coat', price: 649 },
    { title: 'High-Neck Sweater', price: 600 },
  ]);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  let products : Card[]= [
    {
        id: "1",
        url: "",
        title: "phone lorem epsum dolor sit",
        price: "$99",
        rating: 4.5,
        totalRating: '4.5k'
    },
    {
        id: "2",
        url: "",
        title: "watch tres do unus",
        price: "$1299",
        rating: 4,
        totalRating: '1.2k'
    },
    { id: "3", url: "", title: "nihil nihil nihil", price: "$348", rating: 3,totalRating: '4.5k' },
    {
        id: "4",
        url: "",
        title: "blade of miquella , malenaia",
        price: "$449",
        rating: 3.7,
        totalRating: '4.5k'
    },
    {
        id: "5",
        url: "",
        title: "starscourage rhadhan",
        price: "$299",
        rating: 4.4,
        totalRating: '4.5k'
    },
    {
        id: "6",
        url: "",
        title: "phone lorem epsum dolor sit",
        price: "$499",
        rating: 4.5,
        totalRating: '4.5k'
    },
    {
        id: "7",
        url: "",
        title: "watch tres do unus",
        price: "$799",
        rating: 4,
        totalRating: '4.5k'
    },
    { 
        id: "8", 
        url: "", 
        title: "nihil nihil nihil", 
        price: "$1199", 
        rating: 3,
        totalRating: '4.5k' 
    },
    
]
  return (
    <div style={{width: '90%', margin:'auto'}}>
    <div className={styles.container}>
      <div className={styles.product_list}>
        <ProductCard
          image="/bomber-jacket.png"
          title="Bomber Jacket 76cm Adult Men Black | Nike"
          price={2318}
          originalPrice={2728}
          color="Black"
          size="46"
        />
        <ProductCard
          image="/tailored-jacket.png"
          title="Tailored Jacket"
          price={2728}
          originalPrice={2728}
          color="Gray"
          size="46"
        />
        <ProductCard
          image="/coat.png"
          title="Coat"
          price={649}
          originalPrice={649}
          color="Gray"
          size="46"
        />
      </div>

      <div className={styles.checkout_container}>
        <CheckoutSlip items={cartItems} total={total} />
      </div>
    </div>
    <Trends title='Recommended for You' products={products}/>
    </div>
  );
};

export default Home;
