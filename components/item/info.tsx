import styles from '@/styles/itemInfo.module.css'
import StarRating from '../starRating'


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
            <div className={styles.prices}>
                {
                    prices.map((item, indx)=>{
                        return (
                            <div className={styles.company_container}>
                                <div style={{display:'flex', alignItems:'center'}}>
                                <span className={styles.company_name}>{item.company}</span>
                                {item.features.map((item,indx)=>{
                                    let color : string
                                    
                                    return(
                                        <span 
                                        key={indx}
                                        className={styles.features}
                                        style={{color:`${item.color}`,border:`1px solid ${item.color}`,boxShadow:`inset 0px 0px 2px ${item.color}, 0 0 4px ${item.color}`}}>{item.type}</span>
                                    )
                                })}
                                </div>
                                <div style={{display:'flex',}}>
                                    <span  className={styles.company_price}>{item.price}</span>
                                    {/* <button className={styles.visit}> Visit </button> */}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}