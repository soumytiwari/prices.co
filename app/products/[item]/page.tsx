'use client'
import ImageContainer from "@/components/item/image";
import ItemInfo from "@/components/item/info";
import SearchBar from "@/components/products/search";

export default function ProductItem({params}: {params: {item : string}}) {
    return(
        <div>
            <SearchBar/>
            <div style={{display:'flex',width:'90%', margin:'auto'}}>
                <ImageContainer/>
                <ItemInfo/>
            </div>
        </div>
    )
}