'use client'
import Detailes from "@/components/item/detailes";
import ImageContainer from "@/components/item/image";
import ItemInfo from "@/components/item/info";
import Rating from "@/components/item/ratings";
import SearchBar from "@/components/products/search";

export default function ProductItem({params}: {params: {item : string}}) {
    return(
        <div style={{color:"black"}}>
            <SearchBar/>
            <div style={{display:'flex',width:'90%', margin:'auto'}}>
                <ImageContainer/>
                <ItemInfo/>
            </div>
            <div style={{display:"flex",width:'90%',margin:'auto'}}>
                <Detailes/>
                <Rating rating={92}/>
            </div>
        </div>
    )
}