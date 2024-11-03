import styles from '@/styles/cart_slip.module.css'
import { Barlow_Semi_Condensed } from 'next/font/google';
import { useState } from 'react';

const Barlow =Barlow_Semi_Condensed({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
})

  
  export default function CheckoutSlip({items,total}:{items:slipItem[], total:Number}) {


    return (
      <div className={styles.checkout_slip}>
        <div className={styles.checkout_heading}>
          <span>Item</span>
          <div>
            <span style={{marginRight:'40px'}}>Quantity</span>
            <span>Amount</span>
          </div>
        </div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <ul>
            {items.map((item, index) => (
              <li key={index}
                className={styles.list_item}>
                {item.title}
              </li>
            ))}
          </ul>
          <ul>
            {items.map((item, index) => (
              <li key={index}
                className={styles.list_item}>
                {item.quantity}
              </li>
            ))}
          </ul>
          <ul>
            {items.map((item, index) => (
              <li key={index}
                className={styles.list_item+' '+Barlow.className}>
                ${item.price}
              </li>
            ))}
          </ul>
        </div>
        <div style={{border:'1px solid black', height:'1px'}}></div>
        <div className={styles.total}>
          <span>Sales Tax</span>
          <span className={Barlow.className}>${23.90}</span>
        </div>
        <div className={styles.total}>
          <span>Discount</span>
          <span className={Barlow.className}>-${2000}</span>
        </div>
        <div className={styles.total}>
          <span>Coupon</span>
          <span className={Barlow.className}>-${1000}</span>
        </div>
        <div style={{border:'1px solid black', height:'1px'}}></div>
        <div className={styles.total}>
          <span>Total</span>
          <strong className={Barlow.className}>${`${total}`}</strong>
        </div>
        <button className={styles.checkout_button}>Proceed to Checkout</button>
      </div>
    );
  };
  