'use client'
import styles from '@/styles/itemInfo.module.css'
import StarRating from '../starRating'
import ButtonContainer from './buyButtonContainer'
import { SlHeart } from 'react-icons/sl'
import { IoShareSocialOutline } from "react-icons/io5";
import { useState } from 'react';


const colors = {
    TopSelling: '#1af91a',
    Discount: '#fb1f23',
    LowestPrice: '#e9fe2c',
    Trending: '#39e5ff',
    FlashDeal: '#362fff',
    BestReview: '#f99c1a',
    NewReleases: '#f91aee',
    // FlashDeal: '#ff2ff5',
}

export default function ItemInfo() {

    const [store, setStore] = useState('store');
    

    const prices = [
        {
            company: 'Amazon',
            price : '$120',
            features: [
                {
                    type:'Top Selling',
                    color: colors.TopSelling
                },
                {
                    type:'10% off',
                    color: colors.Discount
                },
                {
                    type:'Best Review',
                    color:colors.BestReview
                }
            ]
        },
        {
            company: 'Walmart',
            price : '$119',
            features: [
                {
                    type:'Lowest Price',
                    color: colors.LowestPrice
                },
                {
                    type:'50% off',
                    color: colors.Discount
                },
            ]

        },
        {
            company: 'Flipkart',
            price : '$122',
            features: [
                {
                    type:'20% off',
                    color: colors.Discount
                },
                {
                    type:'New Releases',
                    color: colors.NewReleases
                },
            ]
        },
        {
            company: 'Ebay',
            price : '$125',
            features:[
                {
                    type:'Trending',
                    color: colors.Trending
                },
                {
                    type:'Flash Deal',
                    color: colors.FlashDeal
                },
                {
                    type:'30% off',
                    color: colors.Discount
                },
            ]
        }
    ]
    return(
        <div className={styles.info_container}>
            <div className={styles.title}>Title Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae itaque</div>
            <StarRating rating={4.5} totalCount={'4.5k'} id={'asdf'}/>
            <div className=' flex_start'>
                <div className={styles.s_items + ' flex_start'} style={{backgroundColor:'#fcdfff', color:'#ed4aff'}}><SlHeart style={{marginRight:'5px'}}/>123</div>
                <div className={styles.s_items} style={{color:'#4775ff', backgroundColor:'#dce5ff',padding:'9px'}}><SlHeart size={'1.1em'}/></div>
                <div className={styles.s_items}style={{color:'#ffab34', backgroundColor:'#ffe4bd',padding:'9px'}}><IoShareSocialOutline size={'1.1em'}/></div>
            </div>
            <div className={styles.prices}>
                {
                    prices.map((item, indx)=>{
                        return (
                            <div key={indx}className={styles.company_container+` ${store == item.company? styles.selected: ''}`} onClick={()=>setStore(item.company)}>
                                <div style={{display:'flex', alignItems:'center'}}>
                                    <span className={styles.company_name}>{item.company}</span>
                                    {item.features.map((item,indx)=>{
                                        let color : string
                                        
                                        return(
                                            <span 
                                            key={indx}
                                            className={styles.features}
                                            style={{color:`${item.color}`,border:`1px solid ${item.color}a1`,boxShadow:`inset 0px 0px 4px ${item.color}, 0 0 4px ${item.color}`}}>{item.type}</span>
                                        )
                                    })}
                                </div>
                                <div>
                                    <span  className={styles.company_price}>{item.price}</span>
                                    {/* <button className={styles.visit}> Visit </button> */}
                                </div>
                            </div>
                        )
                    })
                }
                <ButtonContainer store={store}/>
            </div>
        </div>
    )
}
