import { useState } from 'react';
import styles from '@/styles/cartCards.module.css';
import { Barlow_Semi_Condensed } from 'next/font/google';
import { FiX } from "react-icons/fi";
interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  color: string;
  size: string;
}

const Barlow =Barlow_Semi_Condensed({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
})
const ProductCard: React.FC<ProductCardProps> = (item:ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className={styles.product_card}>
      <div className={styles.image_container}>
        <img src='https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={item.title} />
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>{item.title}</h2>
        <p className={styles.price+' '+Barlow.className}>
          <span className={styles.original_price}>${item.originalPrice}</span> ${item.price}
        </p>
        <div className={styles.selectors}>
          <div className={styles.colors}>
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className={styles.select}
            >
              <option value="">Color</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Blue">Blue</option>
            </select>
          </div>
          <div className={styles.size}>
            <select
              value={item.size}
              onChange={(e) => setSize(e.target.value)}
              className={styles.select}
            >
              <option value="">Size</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
            </select>
          </div>
        </div>
          <div style={{display:'flex', marginTop:'70px', alignItems:'center'}}>
            <span style={{fontWeight:'bolder'}}>Quantity</span>
            <div className={styles.quantity_selector}>
              <button onClick={decrementQuantity}>-</button>
              <span className={styles.quantity}>{quantity}</span>
              <button onClick={incrementQuantity}>+</button>
          </div>
        </div>
      </div>
      <div>
        <button style={{color: 'black', fontSize:'22px'}}><FiX/></button>
      </div>
    </div>
  );
};

export default ProductCard;
