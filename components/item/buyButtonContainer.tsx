'use client'
import styles from '@/styles/buybtn_container.module.css'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useState } from 'react'
export default function ButtonContainer({store}:{store:string}) {
    return(
        <div  className={styles.btn_container}>
            <span style={{display:`${store == 'store'? 'flex': 'none'}`  ,color:'GrayText', alignItems:'center'}}><IoMdInformationCircleOutline style={{marginRight:'5px'}}/> Select a store</span>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <button className={styles.btn +' '+ styles.btn_alt1}>Add to Cart</button>
                <button className={styles.btn+' '+ styles.btn_alt1}> Track This Product</button>
            </div>
            <button className={styles.btn+' '+ styles.btn_alt2}>Go to {store}</button>
        </div>
    )
}