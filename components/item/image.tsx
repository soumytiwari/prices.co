import styles from '@/styles/imageContainer.module.css'
import {useState } from 'react'
export default function ImageContainer() {
    let picsURL = ['https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1545127398-5aae47194b22?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1597435877852-97c68cc4d8da?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1491024579037-7484729a4420?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://m.media-amazon.com/images/I/61P3JLRJ-wL._SL1200_.jpg'
    ]

    const [currImage,setCurrentImage] = useState(0);

    return(
        <div className={styles.img_container}>
            <div className={styles.subImage}>
            {
                picsURL.map((img,indx)=>{
                    return(
                        <img onClick={()=>{setCurrentImage(indx)}}key = {indx} src = {img}className={styles.item_images + ' '+ `${currImage == indx? styles.selected:''}`}/>
                    )
                })
            }
            </div>
            <div  className={styles.mainImage} style={{backgroundImage:`url(${picsURL[currImage]})`}}/>
        </div>
    )
}