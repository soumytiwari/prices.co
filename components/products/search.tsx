import { useState } from "react";
import style from "@/styles/searchBar.module.css";
import BrandLogo from "../brand";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TbShoppingBag } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import { SlHeart } from "react-icons/sl";


const catg = ['All  ','Appliances','Beauty','Clothing & Accessories', 'Electronics & Accessories','Gifts','HandBags','Health','Home & Kitchen','Jeweleries','Shoes and footwaer','Watches']
export default function SearchBar() {
	const [inputValue, setInput] = useState("");
	const [category, setCategory] = useState('Category');
	const [iscategoryactive, setCategorystatus] = useState(false);
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key == "Enter") {
			console.log(inputValue);
		}
	};
	const handleSearch = () => {
		console.log("pressed");
	};
	return (
		<div className={style.searchBar}>
			<BrandLogo />
			<div className={style.inputBar}>
				<button
					className={style.categoryBtn}
					onMouseDownCapture={()=>setCategorystatus(!iscategoryactive)}

				>
					<p style={{marginRight:'10px'}}>{category}</p>
					{iscategoryactive? <IoIosArrowDown />: <IoIosArrowUp/>} 
					
				</button>
				<div className={style.catogoriesList} style={iscategoryactive?{display:"flex"}:{display:'none'}}>
					{catg.map((item,indx)=>{
						return(
							<button onClick={()=>setCategory(item === 'All'?'Category':item)} key={indx}className={style.catg_item}>{item}</button>
						)
					})}
				</div>
				<input
					className={style.main_input}
					type="text"
					placeholder="search for Products"
					value={inputValue}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<svg
					className={style.searchIcon}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle
						cx="11"
						cy="11"
						r="8"
					></circle>
					<line
						x1="21"
						y1="21"
						x2="16.65"
						y2="16.65"
					></line>
				</svg>
			</div>
			<div className={style.icon}>
				<TbShoppingBag size={'1.5em'}/>
				<SlHeart size={'1.3em'}/>
				<FaRegUser size={'1.1em'}/>
			</div>
			
		</div>
	);
}
