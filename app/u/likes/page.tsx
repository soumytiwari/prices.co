import { Card } from '@/components/cardInterface';
import Cards from '@/components/productCards';
import Trends from '@/components/trends';
import styles from '@/styles/likes.module.css'


let products: Card[] = [
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
export default function Likes() {
    return (
		<div style={{display:"flex", flexDirection:'column',width:'90%',margin:'auto'}}>
			<div className={styles.likes}>Your Likes</div>
			<div className={styles.cardContainer}>
				{products.map((item, index) => {
					return (
						<Cards key={index} item={item}/>
					);
				})}
			</div>
			<Trends title="Based On Your Likes" products={products}/>
		</div>
    );
}