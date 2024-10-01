import { Card } from "@/components/cardInterface";
import Detailes from "@/components/item/detailes";
import ImageContainer from "@/components/item/image";
import ItemInfo from "@/components/item/info";
import Rating from "@/components/item/ratings";
import Reviews from "@/components/item/reviews";
import Trends from "@/components/trends";

export default function ProductItem({params}: {params: {item : string}}) {
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
    return(
        <div style={{color:"black"}}>
            <div style={{display:'flex',width:'90%', margin:'auto'}}>
                <ImageContainer/>
                <ItemInfo/>
            </div>

            <div style={{display:"flex", flexDirection:'column',width:'90%',margin:'auto'}}>
                <Detailes/>
                <Rating rating={92}/>
                <Reviews/>
                <Trends title="Top Seller" products={products}/>
            </div> 
        </div>
    )
}