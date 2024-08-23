'use client'
import { useState } from 'react';
import styles from '@/styles/filterMenu.module.css';
import { IoCloseOutline } from 'react-icons/io5';
import { MdOutlineSort } from "react-icons/md";
import { CgEnter } from 'react-icons/cg';

let filtertypes = [
    {
        Color : ['Red', 'Green', 'Blue']
    },
    {
        Size: ['XXS','XS','S', 'M','L','XL', 'XXL']
    },
    {
        Price:['$0 - $50', '$50 - $100', '$100 - $150','$150 - $200','$200 - $300', '$300 - $500', '$500 - $1000', '$1000+' ]
    },
    {
        Brands:['Adidas', 'Nike', 'Puma','Wrogn','Gucci','Ralph Lauren', 'Vincent','Adidas', 'Nike', 'Puma','Wrogn','Gucci','Ralph Lauren', 'Vincent','Adidas', 'Nike', 'Puma','Wrogn','Gucci','Ralph Lauren', 'Vincent' ]
    },
    {
        Rating :  ['★', '★★', '★★★', '★★★★', '★★★★★']
    }
]

const sort = ['NONE','DATE', 'PRICE']
export default function FilterMenu() {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [isFilterOn, setFilterStatus] = useState(false);
    const [sortBy, setSortBy] = useState('SORT BY');
	const [issortactive, setSortstatus] = useState(false);

    const selectfilter = (filterValue: string) => {
        setSelectedFilters((prevFilters:string[]) => {
            if (prevFilters.includes(filterValue)) {
                return prevFilters.filter((item) => item !== filterValue);
            } else {
                return [...prevFilters, filterValue];
            }
        });
    };

    const isSelected = (filterValue:string) => {
        return selectedFilters.includes(filterValue);
    };

    const removeFilter = (filter: string) => {
        setSelectedFilters((prevFilters) => prevFilters.filter((item) => item !== filter));
    };

    
    return (
        <div>
            <div className={styles.filters}>
                <div style={{display:'flex',width:'90%'}}>
                    <button 
                        className={styles.filtercount+ ' '+`${selectedFilters.length == 0? `${styles.filterbtns}`:`${styles.blackbg}`}`}
                        onClick={()=>setFilterStatus(!isFilterOn)}
                    >
                        <span>FILTERS</span>
                        <span className={`${selectedFilters.length == 0? ``:`${styles.count}`}`}>{selectedFilters.length == 0? '':selectedFilters.length}</span>
                    </button>
                    <span className={styles.divider}></span>
                    <div className={styles.filterContainer}>
                        {selectedFilters.map((filter, index) => (
                            <button
                                key={index}
                                className={styles.filterbtns + ' ' + styles.selected_filters}
                                onClick={() => removeFilter(filter)}
                            >
                                {filter}
                                <IoCloseOutline style={{ margin: '0px 3px', fontSize: '18px' }} />
                            </button>
                        ))}
                    </div>
                </div>
                <div style={{position:'relative'}}>
                    <button onClick={()=>setSortstatus(!issortactive)}style={{display:'flex', alignItems:'center'}} className={styles.filterbtns}>{sortBy==='NONE'?'SORT BY':sortBy}<MdOutlineSort style={{marginLeft:'5px'}}/></button>
                    <div className={styles.catogoriesList} style={issortactive?{display:"flex"}:{display:'none'}}>
					{sort.map((item,indx)=>{
						return(
							<button onClick={()=>setSortBy(item)} key={indx}className={styles.catg_item}>{item}</button>
						)
					})}
				</div>
                </div>
            </div>
            <div className={styles.overlay} style={isFilterOn?{display:'flex'}:{display:'none'}}>
                <div className={styles.menuContainer}>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                        <input className={styles.search_filter}></input>
                        <IoCloseOutline onClick={()=>setFilterStatus(false)} className={styles.closeButton} />
                    </div>
                    <div className={styles.filterOptions}>
                        
                        {filtertypes.map((slide,i)=>{
                            const [filterName, filterOptions] = Object.entries(slide)[0];
                            return(
                                <div className={styles.filterCategory}>
                                    <h3 className={styles.bold}>{filterName}</h3>
                                    <div className={styles.filterItems}>
                                        { filterOptions.map((item:string,ind:number)=>(
                                            <button 
                                                key= {ind} 
                                                className={styles.filteritem +' '+`${isSelected(item) ? styles.selected : ''}`} 
                                                onClick={() => selectfilter(item)}>
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                            
                    </div>
                    <div className={styles.btn_container}>
                        <button className={styles.applyButton} style={{border:'2px solid red', color:'red'}}>Clear All</button>
                        <button className={styles.applyButton}>Apply</button>
                    </div>
                </div>
            </div>
        </div>
            
    );
}
